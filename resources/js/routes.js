import Vue from "vue";
//Per usarlo eseguire: npm install vue-router
import VueRouter from "vue-router";

import Home from "./pages/Home";
import Info from "./pages/Info";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/info",
            name: "info",
            component: Info
        }
    ]
});

export default router;
