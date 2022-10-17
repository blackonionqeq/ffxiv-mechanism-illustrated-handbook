<template>
	<table>
		<caption>
			<h2>
				{{ title }}
			</h2>
		</caption>
    <thead>
			<tr>
				<!-- <th colspan="999">{{ title }}</th> -->
				<th class="skill-name">名称</th>  
				<th class="category">种类</th>  
				<th class="description">文字说明</th>  
				<th class="screenshot">截图</th>  
				<!-- <th>示意图</th>   -->
				<th class="how-to">躲避方式</th>  
				<th class="remark">备注</th> 
			</tr>
    </thead>
    <tbody>
			<tr v-for="column of skills">
				<td class="skill-name">{{ column.skillName }}</td>
				<td class="category">{{ column.category }}</td>
				<td class="description">{{ column.description }}</td>
				<td class="screenshot flex-center">
					<ImageViewerVue v-if="column.screenshot" width="200" :src="column.screenshot" :alt="column.screenshot" :key="column.screenshot"></ImageViewerVue>
					<div v-else>无</div>	
				</td>
				<!-- <td>{{ column.schematic }}</td> -->
				<td class="how-to">{{ column.howTo }}</td>
				<td class="remark">{{ column.remark }}</td>
			</tr>
    </tbody>
	</table>
</template>

<script lang="ts" setup>
import type { MechanismTableItem } from '../types/mechanism-table'
import ImageViewerVue from '../components/ImageViewer.vue';
defineProps({
	title: {
		type: String,
		default: 'title'
	},
	skills: {
		type: Array as () => MechanismTableItem[],
		required: true,
	}
})
</script>

<style scoped>
table,
td {
	border: 1px solid #bbb;
	text-align: center;
}
table {
	width: 100%;
}

thead,
tfoot {
	background-color: #aaa;
	color: #fff;
}
tr {
	display: flex;
}
td, th {
	display: flex;
	/* flex-grow: 1; */
	flex-basis: 80px;
	
	justify-content: center;
	align-items: center;
}
td {
	min-height: 200px;
}

.description,
.screenshot {
	flex-grow: 4;
}
.remark,
.how-to {
	flex-grow: 2;
}
</style>