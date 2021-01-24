import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import UsersPosts from './components/UsersPosts.vue'
import UsersProfile from './components/UsersProfile.vue'
import HeaderHome from './components/HeaderHome.vue'
import HeaderUsers from './components/HeaderUsers.vue'

Vue.use(Router)
//useはプラグインを適応する

export default new Router({
    mode: "history",
    routes: [
        { path: '/',
          components: {
            default: Home,
            header: HeaderHome
          }
        },
        {
            path: '/users/:id',
            components: {
                default: Users,
                header: HeaderUsers
            },
            props: {
                default: true,
                header: false
            },
            children: [
                { path: "posts", component: UsersPosts },
                { path: "profile", component: UsersProfile, name: "users-id-profile"}
            ]
        }
    ]
})