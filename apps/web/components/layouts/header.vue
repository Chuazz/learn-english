<template>
	<div
		:class="
			clsx(
				'sticky top-0 left-0 right-0 h-14 shadow-md z-10',
				'flex items-center justify-between px-1 bg-white',
			)
		"
	>
		<UButton
			icon="line-md:close-to-menu-alt-transition"
			color="white"
			variant="ghost"
			size="md"
			@click="$emit('onClickMenu')"
		/>

		<div class="flex items-center">
			<UPopover mode="hover">
				<UButton
					color="white"
					variant="ghost"
					size="md"
					icon="humbleicons:exchange-horizontal"
				/>

				<template #panel>
					<UCard>
						<template #header>
							<p>{{ $t('common.action.select_branch_to_continue') }}</p>
						</template>

						<UButton
							:block="true"
							:label="$t('common.action.logout')"
							@click="logout"
						/>
					</UCard>
				</template>
			</UPopover>

			<UButton
				:icon="isFullScreen ? 'material-symbols:zoom-in-map' : 'material-symbols:zoom-out-map'"
				color="white"
				variant="ghost"
				size="md"
				@click="onFullScreen"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth-store';
import clsx from 'clsx';

defineEmits<{
	onClickMenu: () => void;
}>();

const isFullScreen = useState<boolean>(() => false);
const { logout } = useAuthStore();

const onFullScreen = () => {
	if (import.meta.client) {
		const el = document.documentElement;

		if (!document.fullscreenElement) {
			el.requestFullscreen().finally(() => {
				isFullScreen.value = true;
			});

			return;
		}

		document.exitFullscreen().finally(() => {
			isFullScreen.value = false;
		});
	}
};
</script>

<style></style>
