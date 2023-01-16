import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../components/pages/home/TheHome.vue";
// import ThePrimary from "@/components/pages/poll/primary/ThePrimary";
// import PhoneAuth from "@/components/pages/poll/primary/PhoneAuth";
// import TheContact from "@/components/pages/poll/contact/TheContact";
// import TheCard from "@/components/pages/poll/card/TheCard";
// import TheCabinet from "@/components/pages/lk/TheCabinet";
// import ProfilePage from "@/components/pages/lk/subpages/ProfilePage";

// import NotFound from "../components/pages/NotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/",
          component: TheHome,
        },
        { path: "/primary", component: () => import("@/components/pages/poll/primary/ThePrimary")},
        { path: "/verificate", component: () => import("@/components/pages/poll/primary/PhoneAuth") },
        { path: "/contact", component: () => import("@/components/pages/poll/contact/TheContact") },
        { path: "/card", component: () => import("@/components/pages/poll/card/TheCard") },
        {
          path: "/lk",
          component: () => import("@/components/pages/lk/TheCabinet"),
          redirect: '/lk/profile',
          children: [
              { path: "profile", component: () => import("@/components/pages/lk/subpages/ProfilePage") },
              { path: "edit", component: () => import("@/components/pages/lk/subpages/EditPage") },
              { path: "documents", component: () => import("@/components/pages/lk/subpages/DocumentsPage") },
              { path: "offers", component: () => import("@/components/pages/lk/subpages/OffersPage") },
          ],
        },
        { path: "/final", component: () => import("@/components/pages/final/TheFinal")},
        {
          path: "/unsubscribe",
          component: () => import("@/components/pages/unsubscribe/TheUnsubscribe"),
            redirect: '/unsubscribe/main',
          children: [
              { path: "main", name: 'Unsubscribe', component: () => import("@/components/pages/unsubscribe/subpages/UnsubMain") },
              { path: "success", name: 'UnsubSuccess', component: () => import("@/components/pages/unsubscribe/subpages/UnsubSuccess") },
              { path: "info", component: () => import("@/components/pages/unsubscribe/subpages/UnsubInfo") },
              { path: "code", component: () => import("@/components/pages/lk/subpages/DocumentsPage") },
          ],
        },
        { path: "/ticket/:uid", component: () => import("@/components/pages/ticket/TheTicket") },
        { path: "/:notFound(.*)", component: () => import("../components/pages/NotFound.vue") },
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'smooth', };
    },
});

export default router;