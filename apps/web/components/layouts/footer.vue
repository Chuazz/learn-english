<template>
	<div class="flex items-center justify-between shadow-t-md h-14 px-4 text-slate-600 text-sm">
		<p class="font-semibold">{{ config.public.APP_NAME }}</p>

		<p>© {{ config.public.APP_NAME }}</p>
	</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<style></style>
