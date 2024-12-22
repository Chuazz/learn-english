<template>
	<div class="flex items-center justify-center h-full flex-col py-20">
		<div class="w-full max-w-[688px]">
			<div class="flex items-center justify-between mb-8">
				<p class="font-bold text-2xl">{{ $t('auth.create_account') }}</p>

				<div class="flex items-center gap-4">
					<NuxtLink to="/auth/login">{{ $t('auth.have_an_account') }}</NuxtLink>

					<UButton
						:label="$t('common.action.login')"
						color="black"
						variant="outline"
						to="/auth/login"
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
						name="first_name"
						:label="$t('auth.field.first_name')"
					/>

					<Input
						name="last_name"
						:label="$t('auth.field.last_name')"
					/>

					<Input
						name="password"
						:label="$t('auth.field.password')"
						format="password"
					/>

					<Input
						name="confirm_password"
						:label="$t('auth.field.confirm_password')"
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
						:label="$t('common.action.register')"
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
import { faker } from '@faker-js/faker';

definePageMeta({
	title: 'common.action.register',
	layout: 'user',
});

const { t } = useI18n();
const isMutating = useIsMutating();
const registerMutate = useRegister();
const loginMutate = useLogin();

const loginSchema = z.object({
	email: z.string().email(
		t('validation.invalid_format', {
			field: t('auth.field.email').toLowerCase(),
		}),
	),
	first_name: z.string().min(
		1,
		t('validation.required', {
			field: t('auth.field.first_name').toLowerCase(),
		}),
	),
	last_name: z.string().min(
		1,
		t('validation.required', {
			field: t('auth.field.last_name').toLowerCase(),
		}),
	),
	password: z.string().min(
		1,
		t('validation.required', {
			field: t('auth.field.password').toLowerCase(),
		}),
	),
	confirm_password: z.string().min(
		1,
		t('validation.required', {
			field: t('auth.field.password').toLowerCase(),
		}),
	),
});

const { handleSubmit } = useForm({
	validationSchema: toTypedSchema(loginSchema),
	initialValues: import.meta.dev
		? {
				email: faker.internet.email(),
				first_name: faker.person.firstName(),
				last_name: faker.person.lastName(),
				password: '111111',
				confirm_password: '111111',
			}
		: {
				email: '',
				first_name: '',
				last_name: '',
				password: '',
				confirm_password: '',
			},
});

const onLogin = handleSubmit(async (data) => {
	await registerMutate.mutateAsync(data);

	await loginMutate.mutateAsync({
		email: data.email,
		password: data.password,
	});
});
</script>
