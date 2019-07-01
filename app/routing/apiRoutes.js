var friendsData = require("../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });
    app.post('/api/friends', function(req, res) {
    var userInput = req.body;

    var userResponses = userInput.scores;

    var matchName = '';
    var matchImage = '';
    var totalDifference = '';


    for (var i = 0; i < friendsData.length; i++) {

        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
            totalDifference = diff;
            matchName = friendsData[i].name;
            matchImage = friendsData[i].photo;


    }
    
    friendsData.push(userInput);

    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
})
}
