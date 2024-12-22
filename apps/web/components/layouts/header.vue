<template>
	<div
		:class="
			clsx(
				'p-4 flex items-center bg-black-950 border-b border-b-black-900 justify-between',
				'fixed top-0 left-0 w-full z-50',
			)
		"
	>
		<Logo />

		<HeaderRightNav />
	</div>
</template>

<script lang="ts" setup>
import clsx from 'clsx';
</script>

<style></style>
