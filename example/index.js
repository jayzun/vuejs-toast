import Vue from 'vue';
// import Toast from '../dist/vuejs-toasts.min';
import Toast from '../src/index';
import App from './App.vue';

Vue.use(Toast);

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
});