import { createRootRouteWithContext, createRoute, createRouter, Outlet, Route } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query'
import Preview from '../pages/Preview';
import Login from '../pages/Login';

interface RouterContext {
  queryClient: QueryClient
}

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />
})

const routesData = [
    {
        path: '/',
        component: Preview,
        getParentRoute: () => rootRoute,
    },
    {
        path: '/login',
        component: Login,
        getParentRoute: () => rootRoute,
    },
    {
        path: '/register',
        component: Login,
        getParentRoute: () => rootRoute,
    }
] as const 

export const routes = routesData.map(route => createRoute(route))
const routeTree = rootRoute.addChildren(routes)

const queryClient = new QueryClient()
export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})
