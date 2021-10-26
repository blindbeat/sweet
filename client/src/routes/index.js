import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

import { LOGIN_ROUTE, SIGNUP_ROUTE, EVENTS_ROUTE, EVENT_ROUTE, SWIPER_ROUTE, ADMIN_ROUTE } from "./Paths"

import Auth from '../components/pages/Auth/index.js'
import Events from '../components/pages/Events'
import Event from '../components/pages/Events/Card'
import Swiper from '../components/pages/Swiper'

import Admin from "components/pages/Admin";

import NotFound from "../components/404";



export default function Router() {
    const { isAuth, role } = useSelector(state => state.user)
    return (
        <Switch>
            <Route exact path={[SIGNUP_ROUTE, LOGIN_ROUTE]}>
                {isAuth ? <Redirect to='/' /> : <Auth />}
            </Route>
            <Route exact path={EVENTS_ROUTE}>
                <Events />
            </Route>
            <Route exact path={`${EVENT_ROUTE}/:id`}>
                <Event />
            </Route>
            <Route exact path={SWIPER_ROUTE}>
                <Swiper />
            </Route>
            {role === 'admin' &&
                <Route path={ADMIN_ROUTE}>
                    <Admin />
                </Route>
            }
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>

    )
}