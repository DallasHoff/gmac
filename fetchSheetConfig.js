const fs = require('fs');
const axios = require('axios');

const sheetId = process.env.CONFIG_SHEET_ID;
const apiKey = process.env.SHEET_API_KEY;
const majorDimension = 'ROWS';
const configDestination = './static/config/';
const outFiles = ['announcements.json', 'schedule.json'];


function dataFallback() {
    for (let i = 0; i < outFiles.length; i++) {
        fs.writeFileSync(configDestination + outFiles[i], '{}' , 'utf-8');
    }
    return;
}

if (!sheetId || !apiKey) {
    return dataFallback();
}


function reqUrl(cells) {
    return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(cells)}?majorDimension=${majorDimension}&key=${apiKey}`;
}

// Fetch data from Sheets
// Announcements
axios.get(reqUrl('Announcements!A:B')).then(res => {
    console.log('Got announcements data');
    fs.writeFileSync(configDestination + outFiles[0], JSON.stringify(res.data) , 'utf-8');
    // Info
    return axios.get(reqUrl('Schedule!A:B'));
}).then(res => {
    console.log('Got schedule data');
    fs.writeFileSync(configDestination + outFiles[1], JSON.stringify(res.data) , 'utf-8');
    return;
}).catch(err => {
    console.error('Sheet data error', err);
    return dataFallback();
});
