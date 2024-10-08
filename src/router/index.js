import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue';
import Search from '../views/SearchPage.vue';
import Calendar from '../views/CalendarPage.vue';
import Ticket from '../views/TicketPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }, {
    path: '/ticket',
    name: 'Ticket',
    component: Ticket
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
