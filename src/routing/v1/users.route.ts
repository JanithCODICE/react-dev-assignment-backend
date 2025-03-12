import { usersController } from "../../controllers/users.controller";
import authMiddleware from "../../middleware/auth.middleware";

const express = require('express');


const router = express.Router();

router.get('/', authMiddleware ,usersController.getUsers);

module.exports = router;