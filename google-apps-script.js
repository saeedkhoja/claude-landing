// ═══════════════════════════════════════════════════════════
// IT Platform Studio — Lead Collection Script
//
// SOZLASH:
// 1. Google Sheets oching: https://sheets.google.com
// 2. Yangi sheet yarating, birinchi qator:
//    A1: Sana | B1: Ism | C1: Telefon | D1: Loyiha turi | E1: Tavsif | F1: Status
// 3. Extensions > Apps Script ni oching
// 4. Bu kodni to'liq paste qiling (eski kodni o'chiring)
// 5. Deploy > New deployment > Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Deploy ni bosing, URL ni nusxalab oling
// 7. it-platform-agency-landing.html da SHEET_URL ga shu URLni paste qiling
// ═══════════════════════════════════════════════════════════

var SHEET_NAME = 'Sheet1'; // Sheet nomingiz

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('uz-UZ'),
      data.name    || '',
      data.phone   || '',
      data.type    || '',
      data.desc    || '',
      'Yangi lead 🔥'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', msg: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('IT Platform Studio — Lead API ishlayapti ✓');
}
