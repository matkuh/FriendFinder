var friendsData = require("../data/friends")

module.exports = function (app) {
    console.log(friendsData)
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });
    app.post('/api/friends', function (req, res) {
        console.log("I received post")
        var userInput = req.body;

        var userResponses = userInput.scores;

        var totalDifference = [];


        for (var i = 0; i < friendsData.length; i++) {

            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
            }
            totalDifference.push([{
                matchName: friendsData[i].name,
                matchImage: friendsData[i].photo,
                diff: diff
            }])

        }
        friendsData.push(userInput);

        var bestMatch = totalDifference.sort(function (a, b) {return a.diff - b.diff });

        res.json(bestMatch[0]);
        console.log(bestMatch)
    })
}
