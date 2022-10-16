<template>
	<div class="flex-column" @mouseleave="isLeaveHead = true" @mouseenter="showContent = true, isLeaveHead = false">
		<div class="head-wrapper">
			<slot name="head">Head</slot>
		</div>

		<Transition name="slide-fade">
			<div class="content-wrapper flex-1" v-show="showContent">
				<slot name="content">Content</slot>
			</div>
		</Transition>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import delay from '@/utils/delay'

const showContent = ref(false)

const isLeaveHead = ref(false)

watch(() => isLeaveHead.value, async (isLeave) => {
	console.log(isLeave)
	if (isLeave) {
		await delay(1000)
		if (isLeaveHead.value) showContent.value = false
	}
})
</script>

<style scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
/* 
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>