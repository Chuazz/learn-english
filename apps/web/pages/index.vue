<template>
	<div class="min-h-screen flex items-center justify-center bg-slate-100">
		<UCard class="max-w-sm w-screen">
			<template #header>
				<p class="font-bold text-xl text-center">{{ config.public.APP_NAME }}</p>
			</template>

			<div class="mx-auto w-fit">
				<UButton
					color="primary"
					@click="onLogin"
				>
					{{ $t('common.action.login') }}
				</UButton>
			</div>
		</UCard>
	</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const onLogin = () => {
	navigateTo('/');
};
</script>
