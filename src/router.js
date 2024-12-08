import Vue from 'vue';
import Router from 'vue-router';
// import Home from './components/Home';
// import Profile from './components/Profile'
// import Skill from './components/Skill'
// import Product from './components/Product'
// import Bbs from './components/Bbs'
const Home = () => import('./components/Home');
const Profile = () => import('./components/Profile');
const Skill = () => import('./components/Skill');
const Product = () => import('./components/Product');
const Bbs = () => import('./components/Bbs');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/skills',
      component: Skill
    },
    {
      path: '/works',
      component: Product
    },
    {
      path: '/bbs',
      component: Bbs
    },
  ]
})