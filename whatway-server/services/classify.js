var classificationLists = require("../classification-lists.json");

exports.index = (req, res) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

/**
 * take in a request and output a classification
 * @param {ClassifyIn} req request with text
 * @returns classification text
 */
exports.classify_text = (req) => {
    var text = req.text.toLowerCase();

    // check to make sure that lists actually exist
    if(classificationLists.lists.length > 0) {
        // iterate through the lists, set a default count
        classificationLists.lists.forEach(list => {
            list.count = 0;
            // using regex count how many times a qualifier appears and append it to the count
            list.qualifiers.forEach(qualifier => {
                list.count += (text.match(new RegExp(qualifier.toLowerCase(), "g")) || []).length;
            });
        });
        
        // map just the counts into an array
        var counts = classificationLists.lists.map(list => list.count);

        // unwrap the counts and return the max
        var max = Math.max(...counts);

        // filter results by count
        var listCount = classificationLists.lists.filter((list) => list.count === max);
        
        // only return a classification if there is a clear winner
        if(listCount.length === 1) {
            return listCount[0].classification;
        }
    }

    // all other results return default
    return classificationLists.default;
};

exports.classify_get_response = (req, res) => {
    return "Welcome to text classification!";
};