<!-- <h1>
	<a href="https://simplestepscode.com/" target="_blank">Simple Steps Code</a> presents:

</h1> -->
<script lang="ts">
	export let url: string;
	export let size: {
		w: number;
		h: number;
	};
	export let type = 'webp';
	const pamarsValues = { url, type, width: size.w, height: size.h };
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(pamarsValues)) {
		params.append(key, value + '');
	}

	let dataURL = '';
	const fetchImageURL = async () => {
		const response = await (await fetch('/screenshotGen?' + params)).json();

		return response.dataURl;
	};
	export let device: 'macbook' | 'iphone' = 'macbook';
</script>

{#if device === 'iphone'}
	<div class=" iphone-case case-1">
		<div class="gradient-1" />
		<div class="gradient-2" />
		{#await fetchImageURL()}
			<!-- promise is pending -->
			<div class="absolute inset-0 grid place-items-center animate-pulse">loading...</div>
		{:then value}
			<div class="absolute bg-white inset-1.5 rounded-3xl">
				<img src={value} alt="me" class="object-cover w-full h-full rounded-3xl" />
			</div>
		{/await}
	</div>
{:else}
	<div class=" mac_container min-w-80">
		<div class="mac_scaler">
			<div class="mac_holder">
				<div class="p-2 px-1.5 overflow-hidden mac_screen">
					<div class="mac_camera" />
					<div class="relative overflow-hidden rounded-md mac_screen_content">
						{#await fetchImageURL()}
							<img class="absolute object-cover h-full animate-pulse" src="/macosbg.jpg" alt="" />
						{:then value}
							<img src={value} alt="me" class="absolute inset-0 object-cover" />
						{/await}
					</div>
				</div>
				<div class="mac_bottom">
					<div class="mac_bottom_top_half">
						<div class="mac_thumb_space" />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* h1 {
		text-align: center;
	} */

	/*********************************************************
MACBOOK
**********************************************************/

	.iphone-case {
		--border-radius-outer: 2rem;
		--outer-padding: 0.5rem;
		--case-color: hsl(0, 0%, 0%);
		--border-radius-inner: calc(var(--border-radius-outer) - var(--outer-padding));
		box-shadow: 0px 0px 0px 2px white;
		background-color: var(--case-color);
		border-radius: var(--border-radius-outer);
		padding: var(--outer-padding);
		width: min(250px);
		aspect-ratio: 1/2;
		position: relative;
		margin-inline: auto;
	}
	.iphone-case > [class^='gradient'] {
		--start-color: hsl(0, 0%, 0%);
		--shadow-x: 2px;
		height: 50%;
		border-radius: 50%;
		background-color: var(--base-color, #fdc1f7);
		box-shadow: 0px 2px 10px var(--base-color);
		background-size: 100% 200%;
	}
	.iphone-case .gradient-1 {
		--gradient-stop-1: 30%;
		border-top-left-radius: var(--border-radius-inner);
		border-top-right-radius: var(--border-radius-inner);
		border-bottom: 3px solid var(--base-color);
		box-shadow: 0px 2px 4px var(--base-color);
		/* background-image: radial-gradient(circle at bottom, var(--start-color) var(--gradient-stop-1), var(--color-stop-center),  var(--base-color) 90%); */
		background-image: -webkit-radial-gradient(
			circle,
			var(--start-color) var(--gradient-stop-1),
			var(--color-stop-center),
			var(--base-color) 90%
		);
		background-image: radial-gradient(
			circle,
			var(--start-color) var(--gradient-stop-1),
			var(--color-stop-center),
			var(--base-color) 90%
		);
		background-position: 50% 200%;
		background-size: 100% 200%;
	}
	.iphone-case .gradient-2 {
		--gradient-stop-1: 65%;
		--gradient-stop-2: 80%;
		border-bottom-left-radius: var(--border-radius-inner);
		border-bottom-right-radius: var(--border-radius-inner);
		border-top: 3px solid var(--base-color);
		box-shadow: 0px -2px 4px var(--base-color);
		/* background-image: radial-gradient(circle at top, var(--start-color) var(--gradient-stop-1), var(--color-2, hsl(0, 0%, 0%)) var( --gradient-stop-2) , var(--base-color) 100%); */
		background-image: -webkit-radial-gradient(
			circle,
			var(--start-color) var(--gradient-stop-1),
			var(--color-2, hsl(0, 0%, 0%)) var(--gradient-stop-2),
			var(--base-color) 100%
		);
		background-image: radial-gradient(
			circle,
			var(--start-color) var(--gradient-stop-1),
			var(--color-2, hsl(0, 0%, 0%)) var(--gradient-stop-2),
			var(--base-color) 100%
		);
		background-position: 50% 100%;
	}
	.case-1 .gradient-1 {
		--base-color: #fdc1f7;
		--color-stop-center: #230a77, #c84fe4;
	}
	.case-1 .gradient-2 {
		--color-2: #400898;
		--base-color: #8778d1;
	}

	.case-2 .gradient-1 {
		--color-stop-center: #e51605, #ff8914;
		--base-color: #fff98c;
	}
	.case-2 .gradient-2 {
		--color-2: #a04613;
		--base-color: #ffd2a6;
	}
	.case-3 .gradient-1 {
		--base-color: #b2a4e5;
		--color-stop-center: #0909ca;
	}
	.case-3 .gradient-2 {
		--color-2: #3b1ea3;
		--base-color: #b2a4e5;
	}
	.case-4 .gradient-1 {
		--base-color: #f5f0f6;
		--color-stop-center: #7f26c5;
	}
	.case-4 .gradient-2 {
		--color-2: #2b5588;
		--base-color: #83addc;
	}

	.iphone-case:before {
		content: '';
		position: absolute;
		top: 1rem;
		z-index: 10;
		left: 50%;
		transform: translateX(-50%);
		height: 1.3rem;
		background-color: var(--case-color);
		width: 22%;
		border-radius: 25px;
	}

	h1 {
		margin-bottom: 0.2em;
		font-size: clamp(1.1rem, 0.2rem + 5vw, 2rem);
	}
	.mac_scaler {
		margin: auto;

		/*width: 800px;
	height: 463px;*/

		width: 100%;
		padding-top: 57.875%;
		height: 0px;

		position: relative;
	}

	.mac_holder {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
	}

	.mac_screen {
		margin: auto;
		background: #111;
		width: 81%;
		height: 94%;
		/*border-radius: 15px;*/
		border-top-left-radius: 2% 3%;
		border-top-right-radius: 2% 3%;
		border-bottom-left-radius: 5% 3%;
		border-bottom-right-radius: 5% 3%;
		box-sizing: border-box;

		position: relative;
		overflow: hidden;

		border: 1px solid #ddd;
	}

	.mac_screen:before {
		content: '';
		position: absolute;
		right: 0.3%;
		top: 0.5%;
		width: 36.5%;
		height: 35%;
		border: 1px solid #666;
		border-bottom: none;
		border-left: none;
		/*border-top-right-radius: 15px;*/

		border-top-right-radius: 4.5% 7%;
	}

	.mac_screen:after {
		content: '';
		position: absolute;
		right: -25%;
		top: -25%;
		width: 40%;
		height: 150%;
		background: rgba(200, 200, 200, 0.2);
		background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(200, 200, 200, 0) 40%);
		transform: rotate(-30deg);
	}

	.mac_camera {
		background: #333;
		border-radius: 50%;
		width: 1%;
		height: 1.5%;

		position: absolute;
		left: 49.5%;
		top: 2%;
	}

	.mac_camera:after {
		content: '';
		position: absolute;
		left: 35%;
		top: 40%;
		width: 30%;
		height: 30%;
		border-radius: 50%;
		background: #777;
	}

	.mac_bottom {
		background: #e9e9e9;
		background: linear-gradient(#ccc 50%, #444);
		width: 100%;
		height: 5%;
		position: relative;
		top: -1.7%;

		border-bottom-left-radius: 6% 50%;
		border-bottom-right-radius: 6% 50%;
	}

	.mac_bottom_top_half {
		width: 100%;
		height: 50%;
		background: #e9e9e9;
		background: linear-gradient(
			90deg,
			#aaa,
			#f3f3f3 0.5%,
			#aaa 2.5%,
			#f3f3f3 5.5%,
			#f3f3f3 94.5%,
			#aaa 97.5%,
			#f3f3f3 99.5%,
			#aaa
		);
	}

	.mac_bottom:after {
		content: '';
		position: absolute;
		right: 1%;
		bottom: 11%;
		width: 98%;
		height: 0%;
		box-shadow: 1px 0px 8px 1px #333;
	}

	.mac_thumb_space {
		background: #bbb;
		background: radial-gradient(90% 150% at 50% 1%, #eee 49%, #888);
		margin: auto;
		width: 15%;
		height: 60%;
		border-bottom-left-radius: 8% 100%;
		border-bottom-right-radius: 8% 100%;
	}

	.mac_screen_content {
		background: #333;
		width: 100%;
		height: 100%;

		text-align: center;
	}
</style>
