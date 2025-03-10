const express = require('express');
const authRoute = require('./auth.route');

const baseRouter = express.Router();

const apiRoutes = [
    {
        path: '/auth',
        route: authRoute
    }
]

apiRoutes.forEach(route => {
    baseRouter.use(route.path, route.route);
});

export default baseRouter;