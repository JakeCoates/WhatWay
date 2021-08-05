var express = require('express');
var router = express.Router();

var classifyService = require('../services/classify');
const { body, validationResult } = require('express-validator');

const { ClassifyIn, ClassifyResponse } = require('../dtos/classify');



/**
 * @route GET /classify
 * @group classify - Classify your text
 * @returns {object} 200 - classify
 * @returns {Error}  default - Unexpected error
 */
router.get('/', (req, res) => {
    var response = classifyService.classify_get_response();
    res.status(200).send(response);
});

/**
 * @typedef ClassifyIn
 * @property {string} text.required - text to be classified
 */
/**
 * A call to validate the text and classify it
 * @route POST /classify
 * @group classify - Classify your text
 * @param {ClassifyIn.model} text.body.required - text you want to get classified.
 * @returns {object} 200 - classifyResponse
 * @returns {Error}  default - Unexpected error
 */
router.post('/', [body('text').exists()], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // convert into an in object
    var classify = ClassifyIn(req.body);

    // get the classification
    var retrieve_classification = classifyService.classify_text(classify);

    // convert to an out object
    var response = ClassifyResponse(classify, retrieve_classification);
    
    // return response
    res.status(200).send(response);
});


module.exports = router;