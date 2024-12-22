<template>
	<div class="min-h-screen bg-screen flex flex-col">
		<Header />

		<div class="pt-[69px] flex-1">
			<slot />
		</div>

		<Footer />
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
