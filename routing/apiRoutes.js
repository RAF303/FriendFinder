var friendsArray = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(surveyData)
    })
    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        console.log("our input", userInput);
        var myResponse = userInput.scores;
        var bestName = "";
        var bestPic = "";
        // Hopfully this will be the diffence holder
        var bestDifference = 1000;


        for (var i = 0; i < friendsArray.length; i++) {
            difference = 0;
            for (var j = 0; j < myResponse.length; j++) {
                difference += Math.abs(friendsArray[i].scores[j] - myResponse[j]);
                console.log("--------*********---------", friendsArray[i].scores[j])
            }
            if (difference < bestDifference) {
                console.log('Closest match found = ' + difference);
                console.log('Friend name = ' + friendsArray[i].name);
                console.log('Friend image = ' + friendsArray[i].photo);

                bestDifference = difference
                bestName = friendsArray[i].name;
                bestPic = friendsArray[i].photo;
            }
            friendsArray.push(userInput);
            res.json({
                status: 'OK',
                bestName: bestName,
                bestPic: bestPic
            });
        }



    })
}