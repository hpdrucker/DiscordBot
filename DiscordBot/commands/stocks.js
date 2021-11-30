module.exports = {
    name: 'stock',
    aliases: ['stonks', 'stocks'],
    description: 'shows stock by scraping a website',
    execute(client, message, args, Discord) {
        const puppeteer = require('puppeteer');

        async function getStockPrice(ticker) {
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto("https://finance.yahoo.com/quote/" + ticker + "/"); //ticker = z.B. gme, tsla 

            let price;
            try {
                price = await page.evaluate(() => {
                    let phish = document.querySelector("#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div.D\\(ib\\).Mend\\(20px\\) > span.Trsdu\\(0\\.3s\\).Fw\\(b\\).Fz\\(36px\\).Mb\\(-4px\\).D\\(ib\\)").innerHTML;
                    return phish;
                });
            } catch (e) {
                console.log(e);
            } finally {
                await browser.close();
            }
            console.log(price);
            message.channel.send("Price: "+price)
            return price;
        }

        getStockPrice(args);
    }
}


