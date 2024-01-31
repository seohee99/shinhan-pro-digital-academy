import puppeteer from "puppeteer";

async function crawlWadiz(){
    const url = `https://service.wadiz.kr`;
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto(url);

}