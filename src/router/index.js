import { createRouter, createWebHistory } from 'vue-router'
import MapView from "../views/MapView";
import HomeView from "@/views/HomeView";


const routes = [

  {
    path: '/',
    name: 'dashboard',
    component: HomeView
  },
  {
    path: '/agromap',
    name: 'agromap',
    component: MapView
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
