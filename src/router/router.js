import {createRouter, createWebHistory} from "vue-router";

// import LoginContainer from "../components/login/LoginContainer.vue";
import LoginContainer from "../components/login/LoginContainer";
import LoginForm from "../components/login/LoginForm";
import TheHome from "../components/dashboard/TheHome.vue";
import AdminPanel from "../components/dashboard/admin_panel/AdminPanel.vue";
import Settings from "../components/dashboard/Settings.vue";
import AccountsList from "../components/dashboard/admin_panel/accounts/AccountsList.vue";
import LandmarksList from "../components/dashboard/admin_panel/landmarks/LandmarksList.vue";
import ForgotPassForm from "../components/forgot/ForgotPassForm";

import localStorageUtil from "../utils/localStorageUtil";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "landing",
            path: "/",
            redirect: {name: "login"},
        },
        {
            name: "user",
            path: "/user",
            component: LoginContainer,
            children: [
                {
                    name: "login",
                    path: "login",
                    component: LoginForm,
                },
                {
                    name: "forgot",
                    path: "forgot",
                    component: ForgotPassForm
                },
            ]
        },
        {
            name: "home",
            path: "/home",
            component: TheHome,
            children: [
                {
                    name: "dashboard",
                    path: "dashboard",
                    component: AdminPanel,
                    children: [
                        {
                            name: "accounts",
                            path: "accounts",
                            component: AccountsList,
                        },
                        {
                            name: "landmarks",
                            path: "landmarks",
                            component: LandmarksList,
                        },
                    ],
                },
                {
                    name: "settings",
                    path: "settings",
                    component: Settings,
                },
            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    //
    const isLoggedIn = localStorageUtil.isLoggedIn();
    if (isLoggedIn !== null) {
        if (to.name === "login") {
            if (isLoggedIn === "false") {
                next();
            } else {
                // next({ path: "/home/dashboard/accounts" });
                next({name: "accounts"});
            }
        } else if (to.name === "accounts") {
            if (isLoggedIn === "true") {
                next();
            } else {
                next({name: "login"});
            }
        } else {
            if (isLoggedIn === "true") {
                next();
            } else {
                next({name: "login"});
            }
        }
    } else {
        if (to.name === "login") {
            next();
        } else if (to.name === 'forgot') {
            next()
        } else if (to.name === "accounts") {
            next({name: "login"});
        } else {
            next({name: "login"});
        }
    }
});

export default router;
