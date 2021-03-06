const { Router } = require('express');

const SessionController = require('../../controllers/session');
const { storeValidator } = require('../../controllers/validators/Session');

const routes = Router();
const sessionController = new SessionController();

routes.post('/create', storeValidator, sessionController.store);

module.exports = routes;
