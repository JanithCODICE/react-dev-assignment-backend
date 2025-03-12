const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./users.route');

const baseRouter = express.Router();

const apiRoutes = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: userRoute
    }
]

apiRoutes.forEach(route => {
    baseRouter.use(route.path, route.route);
});

export default baseRouter;