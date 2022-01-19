import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home";
import Projects from "../views/Projects";
import Tools from "../views/Tools.vue";



const routes = [
  {
    path: '/',
    redirect: {name: 'Home'}
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Projects
  },
  {
    path: '/tools',
    name: 'Tools',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Tools
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
