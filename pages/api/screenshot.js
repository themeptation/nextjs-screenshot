const puppeteer = require("puppeteer");

export default async (req, res) => {
  const { url, base64 } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  let browser;

  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1200 });
    await page.goto(url);
    const screenshot = await page.screenshot({ type: "png" });
    if (!base64) {
      res.status(200).send(screenshot);
    }
    res.status(200).json({ image: screenshot });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
