'use strict';

exports.ClassifyIn = (req) => {
    const response = {
        text: req.text
    }
    return response;
}
exports.ClassifyResponse = (req, classification) => {
    const response = {
        text: req.text,
        classification
    }
    return response;
}
