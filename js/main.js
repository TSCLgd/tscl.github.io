import routes from './routes.js';

export const store = Vue.reactive({
    //dark: JSON.parse(localStorage.getItem('dark')) || false,
    dark: false,
    toggleDark() {
        console.log('BEFORE DARK',this.dark);
        this.dark = !this.dark;
        console.log('AFTER DARK',this.dark);
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');
