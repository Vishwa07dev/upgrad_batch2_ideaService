/**
 * This is a controller file and it will have all the logic
 * for the crunching and munching of the data
 * 
 * 
 * logic are always written in the form of functions
 */

const ideas =  require("../models/idea.model");

let id = 3 ;

/**
 * Add the logic to fetch all ideas
 * 
 * Controller to fetch all the ideas present already in the system
 */

exports.getAllIdeas = (req, res) => {
    
    res.status(200).send(ideas);
}

/**
 * Add the controller to add a new idea
 */
exports.createIdea = (req, res) => {
   
    req.body.id = id ;
    ideas[id] = req.body ;
    id++ ; //increment the id

    res.status(201).send(ideas);

} 