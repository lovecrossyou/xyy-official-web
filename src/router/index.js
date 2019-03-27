import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//通过resolve实现按需加载

const Index = resolve => require(['@/views/Index.vue'],resolve)
const About = resolve => require(['@/views/About.vue'],resolve)
const Connect = resolve => require(['@/views/Connect.vue'],resolve)
const Serve = resolve => require(['@/views/Serve.vue'],resolve)
const Detail = resolve => require(['@/views/Detail.vue'],resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component:Index
    },
    {
      path: '/index',
      redirect:"/"
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/connect',
      name: 'connect',
      component:Connect
    },
    {
      path: '/serve',
      name: 'serve',
      component:Serve
    },
    {
      path: '/detail',
      name: 'detail',
      component:Detail
    }
  ]
})
