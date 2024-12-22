<template>
	<div>
		<p
			v-if="label"
			class="text-md font-semibold mb-2"
		>
			{{ label }}
		</p>

		<input
			:class="
				clsx(
					'bg-transparent px-4 py-3 rounded-lg border border-black-900',
					'w-full outline-none focus:border-blue-500',
					{
						'border-red-500': !!errorMessage,
					},
				)
			"
			:value="value"
			:placeholder="placeholder"
			@input="onInput"
		/>

		<small
			v-if="errorMessage"
			class="text-red-500"
		>
			{{ errorMessage }}
		</small>
	</div>
</template>

<script lang="ts" setup>
import clsx from 'clsx';

const props = defineProps<{
	label?: string;
	name: string;
	icon?: string;
	placeholder?: string;
	format?: 'text' | 'number' | 'price' | 'password';
	iconPosition?: 'left' | 'right';
}>();

const { value, errorMessage, handleChange } = useField<string>(() => props.name);

const onInput = (event: Event) => {
	let value = (event.target as HTMLInputElement)?.value;

	if (props.format === 'number') {
		value = value.replace(/\D+/g, '');
	}

	handleChange(value);
};
</script>

<style></style>
