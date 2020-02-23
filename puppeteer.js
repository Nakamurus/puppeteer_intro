const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.amazon.co.jp/%E3%81%BF%E3%81%9A%E3%81%BB%E9%8A%80%E8%A1%8C%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E7%B5%B1%E5%90%88%E3%80%81%E8%8B%A6%E9%97%98%E3%81%AE19%E5%B9%B4%E5%8F%B2-%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E3%81%AEIT%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%80%8C3%E5%BA%A6%E7%9B%AE%E3%81%AE%E6%AD%A3%E7%9B%B4%E3%80%8D-%E6%97%A5%E7%B5%8C%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF/dp/4296105353?pf_rd_p=1dc17a9b-3fe2-4d09-babe-98fe966ed94f&pd_rd_wg=0SFCr&pf_rd_r=16B5QD3KGHMP27K4MJY9&ref_=pd_gw_newr&pd_rd_w=N8eO6&pd_rd_r=08cbaf61-c4ab-4c4e-ae09-48a4fd9b3bef')
    await page.screenshot({
        path: './images/screenshot.png'
    });
    const price = await page.$eval('.offer-price', span => span.textContent);
    console.log(price);
    await browser.close();
})();