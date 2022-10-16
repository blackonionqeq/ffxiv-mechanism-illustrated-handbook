<template>
	<div class="home-wrapper flex-1">
		<div v-if="mid" class="flex-column tables-wrapper flex-1">
			<div class="title flex-center" v-if="tableData?.title">
				<h1>{{ tableData.title }}</h1>
			</div>
			<div v-if="tableData?.data" class="table-item" v-for="table of tableData.data">
				<TablePreviewVue v-bind="table"></TablePreviewVue>
			</div>
			<div v-else class="flex-center">在做了在做了.jpg</div>
		</div>
		<div v-else class="home-wrapper flex-center">请先选择副本</div>

		<!-- 浮游的副本选择器组件 -->
		<DungeonSelectorTree class="tree-wrapper"></DungeonSelectorTree>
	</div>
</template>

<script lang="ts" setup>
import TablePreviewVue from '../components/TablePreview.vue';
import tableDataJson from '../assets/table-data.json'
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import DungeonSelectorTree from './mechanism/DungeonSelectorTree.vue'

const route = useRoute()
const mid = computed(() => route.params.mid as keyof typeof tableDataJson)
const tableData = computed(() => tableDataJson[mid.value])
watch(() => tableData.value, (newData) => {
	if (newData?.title) {
		document.title = '副本机制-' + newData.title
		document.documentElement.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
}, { immediate: true })
</script>

<style scoped>
.home-wrapper {
	max-width: 1400px;
	width: 80%;
	min-width: 800px;
	height: 100%;
	/* background-color: green; */
	/* overflow-y: auto; */
}
.title {
	position: sticky;
	top: 0;
	backdrop-filter: blur(6px);
}
.tables-wrapper::-webkit-scrollbar {
	width: 0!important;
}
.table-item {
	margin-bottom: 100px;
}

.tree-wrapper {
	position: fixed;
	right: 0;
	top: 0;
}
</style>