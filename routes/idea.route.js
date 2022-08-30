/**
 * This file has all the routing logic for idea resource
 */
const ideaController = require("../controllers/idea.controller");

module.exports = (app) => {

    /**
     * Suport the route for fetchign all the idea
     * 
     * GET 127.0.0.1:7777/idea_service/api/v1/ideas
     * 
     */

    app.get("/idea_service/api/v1/ideas", ideaController.getAllIdeas);
}