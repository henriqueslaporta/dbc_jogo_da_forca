import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate, { Validator } from 'vee-validate'
import ptBR from 'vee-validate/dist/locale/pt_BR'
import App from './App.vue'
import Home from './components/screens/Home.vue'
import Jogo from './components/screens/Jogo.vue'
import TelaFinal from './components/screens/TelaFinal.vue'
import Entrada from './components/screens/Entrada.vue'

Vue.config.productionTip = false
Validator.localize('pt_BR', ptBR) 

Vue.use(VueRouter)
Vue.use(VeeValidate)

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'entrada', path: '/entrada', component: Entrada },
  { name: 'telaFinal', path: '/telaFinal/:nome/:nascimento/:pontos/:dificuldade/:categoria', component: TelaFinal },
  { name: 'jogo', path: '/jogo/:dificuldade/:categoria/:nome/:nascimento', component: Jogo }
] 

const router = new VueRouter({
  routes
})
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
