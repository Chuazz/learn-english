<template>
	<div>
		<UInput
			:model-value="value"
			:color="errorMessage ? 'red' : 'white'"
			:type="format === 'password' ? 'password' : 'text'"
			:placeholder="placeholder"
			:icon="icon"
			:trailing="iconPosition === 'right'"
			@update:model-value="onInput"
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
const props = defineProps<{
	name: string;
	icon?: string;
	placeholder?: string;
	format?: 'text' | 'number' | 'price' | 'password';
	iconPosition?: 'left' | 'right';
}>();

const { value, errorMessage, handleChange } = useField<string>(() => props.name);

const onInput = (e: string) => {
	let value = e;

	if (props.format === 'number') {
		value = value.replace(/\D+/g, '');
	}

	handleChange(value, false);
};
</script>

<style></style>
