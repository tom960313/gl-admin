import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/system',
			name: "",
			component: () => import('@/views/home/index'),
			children: [
				{
					path: '/system/dragg',
					name: "",
					component: () => import('@/views/home/dragg/dragg'),
				},
				{
					path: '/system/layout',
					name: "",
					component: () => import('@/views/home/layout/layout'),
				},
				{
					path: '/system/editor',
					name: "",
					component: () => import('@/views/home/editor/editor'),
				}
			]
		}
	]
})