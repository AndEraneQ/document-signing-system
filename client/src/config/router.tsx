import {
    createRootRouteWithContext,
    createRoute,
    createRouter,
    Outlet,
} from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import Preview from '../pages/public/Landing'
import LoginPage from '../pages/public/Login'
import RegisterPage from '../pages/public/Register'

interface RouterContext {
    queryClient: QueryClient
}

const rootRoute = createRootRouteWithContext<RouterContext>()({
    component: () => <Outlet />,
})

const routesData = [
    {
        path: '/',
        component: Preview,
        getParentRoute: () => rootRoute,
    },
    {
        path: '/login',
        component: LoginPage,
        getParentRoute: () => rootRoute,
    },
    {
        path: '/register',
        component: RegisterPage,
        getParentRoute: () => rootRoute,
    },
] as const

export const routes = routesData.map((route) => createRoute(route))
const routeTree = rootRoute.addChildren(routes)

const queryClient = new QueryClient()
export const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
})
