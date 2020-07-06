<template>
    <div class="page-testing-requirements">
        <section>
            <h1>{{title}}</h1>
            <p>{{intro}}</p>
        </section>
        <section id="requirements">
            <div class="table-wrapper">
                <table class="article-table"> <tbody> <tr> <th> <p>Belt</p> </th> <th> <p>Form</p> </th> <th> <p>Hand Technique Front Stance</p> </th> <th> <p>Hand Technique Back Stance</p> </th> <th> <p>Kicks Short</p> </th> <th> <p>Kicks Basic</p> </th> <th> <p>Kicks Advance</p> </th> <th> <p>Board Break</p> </th> </tr> <tr> <td> <p>White</p> </td> <td> <p>Saju</p> </td> <td> <p>Front Punch</p> </td> <td> <p>Horse Stance Punch</p> </td> <td> <p>Frt K Jab Punch/</p> <p>Side K Jab Punch</p> </td> <td> <p>Front Kick&nbsp;x2</p> </td> <td> <p>Side Kick x2</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Orange</p> </td> <td> <p>Chun-Ji</p> </td> <td> <p>Down Block</p> </td> <td> <p>Inside Block</p> <p>Side Punch</p> </td> <td> <p>Short Front Kick</p> </td> <td> <p>Side Kick x2</p> <p>Double Punch</p> </td> <td> <p>Front Kick Side Kick Dbl Punch</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Yellow</p> </td> <td> <p>Deg.-Gun</p> </td> <td> <p>High Block</p> </td> <td> <p>Double Rising Blocks</p> </td> <td> <p>Short Side Kick</p> </td> <td> <p>Side Kick&nbsp;</p> <p>Back Side Kick</p> </td> <td> <p>Back Side Kick x2</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Green</p> </td> <td> <p>Do-San</p> </td> <td> <p>Front Block &amp; Reverse Punch</p> </td> <td> <p>Back Fist Attack</p> </td> <td> <p>Back Side Kick</p> </td> <td> <p>Block Kick</p> <p>Front Kick</p> <p>Hammer Fist</p> </td> <td> <p>Front Kick Jump Front Kick Back Fist</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Purple</p> </td> <td> <p>Won-Hyo</p> </td> <td> <p>45&deg; Scoop Block</p> </td> <td> <p>Fighting Stance</p> </td> <td> <p>Short Turning Kick</p> </td> <td> <p>Turning Kick x2 Knifehand Attack</p> </td> <td> <p>Turning Kick Step Turning Kick Knifehand Attack</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Blue</p> </td> <td> <p>Yul-Gok</p> </td> <td> <p>Face Attack</p> </td> <td> <p>Double Knife Rising Block</p> </td> <td> <p>L/H Short Side Kick&nbsp;</p> </td> <td> <p>Side Kick Sliding Side Kick Elbow Attack</p> </td> <td> <p>Side Kick Jump Side Kick Elbow Attack</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Brown</p> </td> <td> <p>Chung-Gun</p> </td> <td> <p>Double Chin Attack</p> </td> <td> <p>Inside Knife Block</p> </td> <td> <p>Short Inside&nbsp;</p> <p>Axe Kick</p> </td> <td> <p>Inside Axe Kick x2</p> </td> <td> <p>Inside Axe Kick, Step Turning Kick</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Red</p> </td> <td> <p>Toi-Gye</p> </td> <td> <p>LS X Block</p> </td> <td> <p>LS Knifehand Guarding Blk</p> </td> <td> <p>Short Hook Kick</p> </td> <td> <p>Hook Kick x2</p> </td> <td> <p>Turning Kick&nbsp;Step Hook Kick</p> </td> <td> <p>1/2</p> </td> </tr> <tr> <td> <p>Black</p> </td> <td> <p>Hwa-Rang</p> </td> <td> <p>LS Dble Upset Punch&nbsp;</p> <p>HS Chin Attack</p> </td> <td> <p>Knifehand Sliding Knifehand Attack</p> </td> <td>&nbsp;</td> <td> <p>3 Kick Combo</p> </td> <td> <p>Free-Sparring</p> </td> <td> <p>1/2</p> </td> </tr> <tr> <td> <p>Black I</p> </td> <td> <p>Chung-Mu</p> </td> <td> <p>Double</p> <p>Throat</p> <p>Grab</p> </td> <td> <p>Knifehand Ridgehand Attack</p> </td> <td>&nbsp;</td> <td> <p>3 Kick Combo</p> </td> <td> <p>Free-Sparring</p> </td> <td> <p>1/2</p> </td> </tr> <tr> <td> <p>1<sup>st</sup> Deg.</p> </td> <td> <p>Kwang-Gae</p> <p>Po-Eun</p> </td> <td> <p>Self-Defense</p> </td> <td>&nbsp;</td> <td>&nbsp;</td> <td> <p>4 Kick Combo</p> </td> <td> <p>Free-Sparring</p> </td> <td> <p>2</p> </td> </tr> <tr> <td> <p>2<sup>nd</sup> Deg.</p> </td> <td> <p>Gae-Baek</p> <p>Ko-Deg.g</p> </td> <td> <p>Self-Defense</p> </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td> <p>Free-Sparring&nbsp;</p> </td> <td> <p>3</p> </td> </tr> <tr> <td> <p>3<sup>rd</sup> Deg.</p> </td> <td> <p>Yoo-Sin</p> <p>Choi-Yong</p> </td> <td> <p>Self-Defense</p> </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td> <p>Free-Sparring&nbsp;</p> </td> <td> <p>4</p> </td> </tr> <tr> <td> <p>4<sup>th</sup> Deg.</p> </td> <td> <p>Chung-Jang</p> <p>Eui-Am</p> </td> <td> <p>Self-Defense</p> </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td> <p>Free-Sparring&nbsp;</p> </td> <td> <p>5</p> </td> </tr> <tr> <td> <p>5<sup>th</sup> Deg.</p> </td> <td> <p>Se-Jong</p> </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td> <p>6</p> </td> </tr> <tr> <td> <p>6<sup>th</sup> Deg.</p> </td> <td> <p>Tong-Il</p> </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td> <p>7</p> </td> </tr> </tbody> </table>
            </div>
        </section>
        <section id="navbox">
            <resources-navbox></resources-navbox>
        </section>
    </div>
</template>

<script>
import ResourcesNavbox from '~/components/ResourcesNavbox.vue'

export default {
    data() {
        return {
            title: 'Testing Requirements',
            intro: 'These are the skills that one must learn at each belt level in order to advance to the next one. Demonstrate these skills at testing to earn your promotion.'
        }
    },
    head() {
        return {
            title: this.title + ' | Griffin Tae Kwon-Do',
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.title + ' | Griffin Tae Kwon-Do' },
                { hid: 'description', name: 'description', content: this.intro },
                { hid: 'og:description', name: 'og:description', content: this.intro },
                { hid: 'og:url', property: 'og:url', content: 'https://griffintkd.org/testing-requirements' }
            ]
        }
    },
    components: {
        ResourcesNavbox
    }
}
</script>
