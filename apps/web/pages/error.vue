<script setup lang="ts">
const error = useError();
</script>

<template>
	<div>
		<h1>{{ error?.statusCode }}</h1>
		<p>{{ error?.message }}</p>
		<NuxtLink to="/">Go back home</NuxtLink>
	</div>
</template>
