import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../components/pages/home/TheHome.vue";
import ThePrimary from "@/components/pages/poll/primary/ThePrimary";

import NotFound from "../components/pages/NotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: TheHome },
        { path: "/primary", component: ThePrimary },
        // { path: "/coaches", component: CoachesList },
        // {
        //   path: "/coaches/:id",
        //   component: CoachDetail,
        //   props: true,
        //   children: [{ path: "contact", component: ContactCoach }],
        // },
        { path: "/:notFound(.*)", component: NotFound },
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'smooth', };
    },
});

export default router;