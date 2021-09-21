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
        component: () => import(/* webpackChunkName: 'letter-a*/ '../modules/heroesAlfabeto/views/HeroesA.vue')
      },
      {
        path: 'letter-b',
        name: 'letter-b',
        component: () => import(/* webpackChunkName: 'letter-b' */ '../modules/heroesAlfabeto/views/HeroesB.vue')
      },
      {
        path: 'letter-c',
        name: 'letter-c',
        component: () => import(/* webpackChunkName: 'letter-c' */ '../modules/heroesAlfabeto/views/HeroesC.vue')
      },
      {
        path: 'letter-d',
        name: 'letter-d',
        component: () => import(/* webpackChunkName: 'letter-d' */ '../modules/heroesAlfabeto/views/HeroesD.vue')
      },



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
