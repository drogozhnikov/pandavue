import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import ProfilePage from "@/pages/ProfilePage";
import AccountsVue from "@/components/AccountsVue";
import BornListVue from "@/components/BornListVue";
import UserProfile from "@/components/profile/user/UserProfile";
import AdminProfile from "@/components/profile/admin/AdminProfile";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/profile',
        component: ProfilePage,
        children: [
            {path: '', component: MainPage},
            {path: 'panda', component: AccountsVue},
            {path: 'bornlist', component: BornListVue},
            {path: 'properties', component: UserProfile},
            {path: 'adminka', component: AdminProfile},
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
