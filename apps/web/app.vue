<template>
	<Head>
		<Title v-if="route.meta.title">{{ $t(route.meta.title as string) }}</Title>
	</Head>

	<NuxtLoadingIndicator />

	<NuxtLayout>
		<NuxtPage />

		<UNotifications />

		<AppModal />
	</NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
