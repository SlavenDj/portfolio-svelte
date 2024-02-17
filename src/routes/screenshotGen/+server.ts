import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import puppeteer from 'puppeteer';
/**
 * Asynchronously captures a screenshot of a webpage.
 * @param {string} url - The URL of the webpage to capture.
 * @param {number} width - The width of the viewport in pixels.
 * @param {number} height - The height of the viewport in pixels.
 * @param {'webp' | 'png' | 'jpeg'} [type=webp] - The type of image format for the screenshot.
 * @returns {Promise<string|null>} A Promise that resolves to a data URL containing the screenshot image,
 * or null if an error occurs.
 */

async function captureScreenshot(
	url: string,
	width: number,
	height: number,
	type: 'webp' | 'png' | 'jpeg' = 'webp'
) {
	try {
		const screenshotBuffer = await CaputrescreenshotAsBuffer(url, width, height, type);

		const dataURL = convertToDataURL(screenshotBuffer);

		return dataURL;
	} catch (error) {
		// Handles errors and logs them
		console.error('Error capturing screenshot:', error);
		// Returns null if an error occurs
		return null;
	}
}

const CaputrescreenshotAsBuffer = async (
	url: string,
	width: number,
	height: number,
	type: 'webp' | 'png' | 'jpeg' = 'webp'
) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.setViewport({ width, height });

	await page.goto(url);

	await page.waitForSelector('body');

	const screenshotBuffer = (await page.screenshot({ type })) as Buffer;
	browser.close();
	return screenshotBuffer;
};
const convertToDataURL = async (screenshotBuffer: Buffer, type = 'webp') => {
	const dataURL = screenshotBuffer.toString('base64');
	return `data:image/${type};base64,${dataURL}`;
};
export const GET: RequestHandler = async (event) => {
	const URL = event.url;

	const dataURl = await captureScreenshot(
		URL.searchParams.get('url') || 'https://www.sapa.ba',
		+URL.searchParams.get('width') ?? 610 * 2,
		+URL.searchParams.get('height') ?? 381 * 2
	);
	return json({ dataURl });
};
