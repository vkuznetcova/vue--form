import Vue from 'vue';
import App from './App.vue';
import './assets/style.scss';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
}).$mount('#app')
