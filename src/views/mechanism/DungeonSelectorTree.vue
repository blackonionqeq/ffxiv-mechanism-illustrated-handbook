<template>
	<div class="flex-column selector-wrapper">
		<DrawerVue>
			<template #head>
				<h2 class="drawer-head">切换副本</h2>
			</template>
			<template #content>
				<Tree :node="dungeons" :indent="30" class="tree-root">
					<template #default="{label, to}">
						<router-link v-if="to" :to="to" class="label leaf-node" active-class="active">{{ label }}</router-link>
						<div v-else class="label">{{ label }}</div>
					</template>
				</Tree>
			</template>
		</DrawerVue>
	</div>
</template>
 
<script lang="ts" setup>
import DrawerVue from '@/components/Drawer.vue';
import Tree from '@/components/Tree.vue'

const dungeons = {
	label: '练级本',
	children: [
		{
			label: '51-59',
			children: [
				{
					label: '暮卫塔',
					to: '/mechanism/冰雪废堡暮卫塔'
				},
				{
					label: '天山灵峰',
					to: '/mechanism/天山绝顶索姆阿尔灵峰'
				},
				{
					label: '邪龙王座',
					to: '/mechanism/邪龙王座龙巢神殿'
				},
				{
					label: '教皇厅',
					to: '/mechanism/圣教中枢伊修加德教皇厅',
				}
			],
		},
		{
			label: '61-69',
			children: [
				{
					label: '紫水宫',
					to: '/mechanism/海底宫殿紫水宫',
				},
				{
					label: '白山堡',
					to: '/mechanism/巨炮要塞帝国白山堡',
				},
			],
		},
		{
			label: '71-79',
			children: [
				{
					label: '奇坦那',
					to: '/mechanism/文明古迹奇坦那神影洞',
				},
			],
		},
	]
}

</script>

<style scoped>
.selector-wrapper {
	width: 200px;
}
.label {
	line-height: 2;
	cursor: pointer;
}
.leaf-node {
	color: #bbb;
}
.active.label {
	color: #fff;
	cursor: default;
	font-weight: 700;
}
.tree-root {
	font-size: 20px;
	backdrop-filter: blur(10px);
}
</style>