<script>
// Modified from https://github.com/heavyy/vue-intersect
export default {
  name: 'vue-intersect',
  abstract: true,
  props: {
    threshold: {
      type: Array,
      required: false,
      default: function _default() {
        return [0, 0.2];
      }
    },
    root: {
      type: Object,
      required: false,
      default: function _default() {
        return null;
      }
    },
    rootMargin: {
      type: String,
      required: false,
      default: function _default() {
        return '0px 0px 0px 0px';
      }
    }
  },
  created: function created() {
    var _this = this;

    if (process.client && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
          get: function get() {
            return this.intersectionRatio > 0;
          }
        });
      }
      this.observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
          _this.$emit('leave', [entries[0]]);
        } else {
          _this.$emit('enter', [entries[0]]);
        }
        
        _this.$emit('change', [entries[0]]);
      }, {
        threshold: this.threshold,
        root: this.root,
        rootMargin: this.rootMargin
      });
    } else {
      this.ioUnsupported = true;
      this.$emit('unsupported');
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.ioUnsupported) return;

      if (_this2.$slots.default && _this2.$slots.default.length > 1) {
        console.error('[VueIntersect] You may only wrap one element in a <intersect> component.');
      } else if (!_this2.$slots.default || _this2.$slots.default.length < 1) {
        console.error('[VueIntersect] You must have one child inside a <intersect> component.');
        return;
      }

      _this2.observer.observe(_this2.$slots.default[0].elm);
    });
  },
  destroyed: function destroyed() {
    if (this.ioUnsupported) return;
    this.observer.disconnect();
  },
  render: function render() {
    return this.$slots.default ? this.$slots.default[0] : null;
  }
};
</script>