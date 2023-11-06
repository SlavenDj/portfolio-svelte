<script lang="ts">
	// Function to generate a random number within a range
	function getRandomNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Generate random shapes with random positions and sizes
	let decorations = Array.from({ length: 10 }, (_, index) => ({
		x: `${getRandomNumber(0, 100)}%`,
		y: `${getRandomNumber(0, 100)}%`,
		width: getRandomNumber(20, 100),
		height: getRandomNumber(20, 100),
		rotation: getRandomNumber(0, 360)
	}));
</script>

{#each decorations as decoration, index}
	<svg
		class="absolute"
		width="100"
		height="100"
		style={`top: ${decoration.y}; left: ${decoration.x}; width: ${decoration.width}px; height: ${decoration.height}px; transform: rotate(${decoration.rotation}deg);`}
	>
		<!-- Example shape (customize as needed) -->
		<circle cx="50" cy="50" r="40" fill="gray" opacity="0.2" />
		<!-- Neutral color -->
	</svg>
{/each}
