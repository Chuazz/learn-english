<template>
	<NuxtLink
		to="/"
		class="flex items-end gap-1"
	>
		<NuxtImg
			src="/icons/ic-logo.png"
			class="size-7"
		/>

		<p class="font-bold text-lg">
			{{ APP_NAME }}
		</p>
	</NuxtLink>
</template>

<script lang="ts" setup>
import { APP_NAME } from '@repo/utils';
</script>

<style></style>
