import type { NextApiRequest, NextApiResponse } from "next";
const puppeteer = require("puppeteer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

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
    res.status(200).send(screenshot);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
