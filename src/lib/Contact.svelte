<script>
	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		// Handle form submission logic here
		alert('Form submitted!'); // For demonstration purposes only
	}
</script>

<section class="min-h-screen flex items-center justify-center bg-tertiary-500 p-6">
	<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
		<h1 class="text-2xl font-bold mb-6 text-primary-500">Contact Us</h1>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div>
				<label for="name" class="block mb-2 text-secondary-500">Name</label>
				<input
					bind:value={name}
					type="text"
					id="name"
					name="name"
					class="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label for="email" class="block mb-2 text-secondary-500">Email</label>
				<input
					bind:value={email}
					type="email"
					id="email"
					name="email"
					class="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label for="message" class="block mb-2 text-secondary-500">Message</label>
				<textarea
					bind:value={message}
					id="message"
					name="message"
					rows="4"
					class="w-full p-2 border rounded"
					required
				/>
			</div>

			<button
				type="submit"
				class="bg-primary-500 text-white p-2 rounded hover:bg-opacity-90 transition"
			>
				Submit
			</button>
		</form>
	</div>
</section>
