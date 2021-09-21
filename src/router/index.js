import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/superheroes',
    name: 'Superheroes',
    component: () => import(/* webpackChunkName: "superheroesLayout" */ '../modules/heroesAlfabeto/layouts/SuperHeroesLayout.vue'),
    children: [
      {
        path: '',
        name: 'letter-a',
        component: () => import(/* webpackChunkName: 'heroesA*/ '../modules/heroesAlfabeto/views/HeroesA.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "marvel" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
