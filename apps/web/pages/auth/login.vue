<template>
	<div class="flex items-center justify-center h-full flex-col py-20">
		<div class="w-full max-w-[688px]">
			<div class="flex items-center justify-between mb-8">
				<p class="font-bold text-2xl">{{ $t('auth.login_to_lexifun') }}</p>

				<div class="flex items-center gap-4">
					<p>{{ $t('auth.new_to_lexifun') }}</p>

					<UButton
						:label="$t('common.action.register')"
						color="black"
						variant="outline"
						to="/auth/register"
						trailing-icon="uil:arrow-right"
					/>
				</div>
			</div>

			<UCard
				class="bg-black-950"
				:ui="{
					ring: 'ring-black-900',
					divide: 'divide-black-900',
				}"
			>
				<div class="flex flex-col gap-5">
					<Input
						name="email"
						:label="$t('auth.field.email')"
					/>

					<Input
						name="password"
						:label="$t('auth.field.password')"
						format="password"
					/>

					<NuxtLink
						to="/auth/forgot-password"
						class="text-right text-blue-500 hover:text-blue-700"
					>
						{{ $t('auth.forgot_password') }}
					</NuxtLink>

					<UButton
						class="mt-3"
						size="xl"
						:label="$t('common.action.login')"
						:loading="isMutating > 0"
						:block="true"
						@click="onLogin"
					/>
				</div>
			</UCard>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useIsMutating } from '@tanstack/vue-query';
import { z } from 'zod';
import { useAuthStore } from '~/stores/auth-store';

definePageMeta({
	title: 'common.action.login',
	layout: 'user',
});

const loginSchema = z.object({
	email: z.string().email('invalidEmail'),
	password: z.string(),
});

const isMutating = useIsMutating();
const loginMutate = useLogin();
const authStore = useAuthStore();

const { handleSubmit } = useForm({
	validationSchema: toTypedSchema(loginSchema),
	initialValues: {
		email: 'sonnv1912@gmail.com',
		password: '111111',
	},
});

const onLogin = handleSubmit(async (data) => {
	const response = await loginMutate.mutateAsync(data);

	authStore.setExpired(response?.expires);
});
</script>
