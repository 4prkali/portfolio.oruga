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
    path: '/portfolio.oruga/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/portfolio.oruga/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Projects
  },
  {
    path: '/portfolio.oruga/tools',
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
