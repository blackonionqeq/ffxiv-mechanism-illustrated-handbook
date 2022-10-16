import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Mechanism from '../views/Mechanism.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/mechanism',
	},
	{
		path: '/mechanism',
		component: Mechanism,
	},
	{
		path: '/mechanism/:mid',
		component: Mechanism,
	},
]

export default createRouter({
	history: createWebHistory('/ffxiv-mechanism-illustrated-handbook/'),
	routes,
})