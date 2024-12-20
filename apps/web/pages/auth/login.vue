<template>
	<div class="min-h-screen flex items-center justify-center bg-slate-100">
		<UCard class="max-w-sm w-screen">
			<template #header>
				<p class="font-bold text-xl text-center">{{ config.public.APP_NAME }}</p>
			</template>

			<div class="flex flex-col gap-3">
				<p class="text-center mb-3">{{ $t('common.action.login_to_continue') }}</p>

				<Input
					icon="material-symbols:mail"
					name="email"
					placeholder="Email"
				/>

				<Input
					icon="material-symbols:lock-open"
					name="password"
					placeholder="Password"
					format="password"
				/>

				<UButton
					class="mt-3"
					:label="$t('common.action.login')"
					:loading="isMutating > 0"
					:block="true"
					@click="onLogin"
				/>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
import { useIsMutating } from '@tanstack/vue-query';
import { z } from 'zod';
import { useAuthStore } from '~/stores/auth-store';

definePageMeta({
	title: 'common.action.login',
});

const loginSchema = z.object({
	email: z.string().email('invalidEmail'),
	password: z.string(),
});

const isMutating = useIsMutating();
const loginMutate = useLogin();
const authStore = useAuthStore();
const config = useRuntimeConfig();
const { t } = useI18n();

const { handleSubmit, values, resetForm } = useForm({
	validationSchema: toTypedSchema(loginSchema),
	initialValues: {
		email: '0394101088',
		password: '11111111',
	},
});

const onLogin = handleSubmit(async (data) => {
	await loginMutate.mutateAsync(data);

	// authStore.setCompany(selectBranchResponse?.data.company_info);
	// authStore.setUser(selectBranchResponse?.data.user);
	// authStore.setPermissions(selectBranchResponse?.data.permissions);
	// authStore.setExpired(selectBranchResponse?.data.expired_at);

	// await navigateTo('/dashboard');
});
</script>
