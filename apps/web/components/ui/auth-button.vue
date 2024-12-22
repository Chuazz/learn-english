<template>
	<ClientOnly>
		<UserButton v-if="isLogin" />

		<div
			v-else
			class="flex items-center gap-2"
		>
			<UButton
				color="white"
				:label="$t('common.action.register')"
				to="/auth/register"
			/>

			<UButton
				color="black"
				variant="ghost"
				to="/auth/login"
				:label="$t('common.action.login')"
			/>
		</div>

		<template #fallback> </template>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth-store';

const { isLogin } = useAuthStore();
</script>

<style></style>
