import type { RequestHandler } from '@sveltejs/kit';
import { captureScreenshot } from '../../utilites';

export const GET: RequestHandler = async (event) => {
	try {
		const props = ['https://www.sapa.ba', 610 * 2, 381 * 2];
		const dataURl = await captureScreenshot('https://www.sapa.ba', 610 * 2, 381 * 2);

		const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Mockup</title>
        </head>
        <body style="margin:0;">
          <img style="    width: 610px;
    height: 381px;
    position: absolute;
    left: 394px;
    top: 277px;
    background-color: red;" src=${dataURl}></img>
		  <img src="/mockup.avif" alt="Image">
        </body>
      </html>
    `;

		return new Response(html, {
			headers: {
				'Content-Type': 'text/html'
			}
		});
	} catch (error) {
		console.error(error);
		const options: ResponseInit = {
			status: 500,
			statusText: 'Error generating mockup'
		};
		return new Response('Error generating mockup', options);
	}
};
/* app.get('/image', async (req, res) => {
	const url = 'https://www.sapa.ba'; // Replace with your desired URL
	const width = 1280; // Desired width of the screenshot
	const height = 720; // Desired height of the screenshot

	//const dataUrl = await captureScreenshot(url, width, height);
	// Read the buffer containing the image data
	const buffer = await CaputrescreenshotAsBuffer(url, width, height); // fs.readFileSync('my-image.jpg');

	// Set appropriate headers
	res.writeHead(200, {
		'Content-Type': 'image/jpeg',
		'Content-Length': buffer.length
	});

	// Send the buffer data as the response body
	res.end(buffer);
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});

app.get('/mockup', async (req, res) => {});
app.use(express.static(__dirname + '/public'));
app.get('/mockup-png', async (req, res) => {
	const url = 'http://localhost:3000/mockup';
	const width = 1200;
	const height = 1200;

	const buffer = await CaputrescreenshotAsBuffer(url, width, height);

	res.writeHead(200, {
		'Content-Type': 'image/jpeg',
		'Content-Length': buffer.length
	});

	res.end(buffer);
});
 */
