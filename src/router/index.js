import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/Jobs.vue'
import JobDetails from '../views/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
  component:AboutView
  },
  {
    path:'/jobs',
    name:'Jobs',
    component:Jobs
  },
  {
    path:'/jobs/:id',
    name:'JobDetails',
    component:JobDetails,
    props:true
  },
  //redirect

  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  //catchAll 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
