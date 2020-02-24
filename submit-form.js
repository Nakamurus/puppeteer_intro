const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const context = browser.createIncognitoBrowserContext();
    const page = await (await context).newPage();
    await page.goto('https://catalog.nypl.org/search/X');
    await page.select('#fl1', 't')
    await page.type('#st1', 'computer science')
    await page.type('#Da', '2018')
    await Promise.all([
        page.click('a[onclick="iiiAdvSubmit();"]'),
        page.waitForSelector('span.briefcitTitle a', {visible: true})
    ]);
    const titleList = await page.$$eval('.briefcitTitle a', list => {
        return list.map(title => title.textContent);
    })
    console.log(titleList);
    await page.type('#searcharg', 't:(CS)')
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
        page.click('input[value="Search"]')
    ])
    await page.screenshot({
        path: './images/nyLibrary.png'
    });
    await page.close();
})();