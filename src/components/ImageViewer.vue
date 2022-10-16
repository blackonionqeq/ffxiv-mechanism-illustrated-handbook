<template>
	<img :src="src" :alt="src" v-if="src" class="image" v-bind="$attrs" @click="previewImage" />

	<Teleport to="body">
		<div v-if="showModal" class="image-modal flex-center" @click="showModal=false" @wheel="zoom">
			<img :src="src" :alt="src" :style="{
				scale: currentRatio,
				transition: 'all 0.15s ease',
			}" />
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
	src: {
		type: String
	},
})

const showModal = ref(false)
const currentRatio = ref(1)

function previewImage() {
	if (props.src) {
		showModal.value = true
		currentRatio.value = 1
	}
}

function zoom(e: WheelEvent) {
	e.preventDefault()
	// 向下滚为正
	if (e.deltaY > 0) {
		currentRatio.value -= 0.05
	} else if (e.deltaY < 0) {
		currentRatio.value += 0.05
	}
}
</script>

<style scoped>
.image {
	cursor: pointer;
}
.image-modal {
	z-index: 100;
	position: fixed;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(10px);
	background-color: rgba(0,0,0,0.5);
	cursor: pointer;
}
</style>