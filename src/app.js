import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';

Vue.component('t-button', Button);
Vue.component('t-icon', Icon);

new Vue({
    el: '#app',
    data: {
        isLoading1: false,
        isLoading2: false,
        isLoading3: false,
    }
})