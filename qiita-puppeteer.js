const puppeteer = require('puppeteer');


('get article list', async () => {
    const browser = await puppeteer.launch();
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto('https://qiita.com/');
    const pageList = await page.$$eval('.tr-Item_title', list => {
        return list.map(a => a.textContent);
    });
    console.log(pageList);
    await browser.close();
})();