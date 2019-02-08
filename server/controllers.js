var models = require('./models')

module.exports = {
    home: function(req,res) {
        res.json()
    },
    create: function(req,res) {
        console.log("am i in controllers?")
        models.Score.create(req.body), function(err) 
        {
            if(err) {
                console.log("wrong")
            } else {
                console.log("right")
                res.json({message: "success", data: score})
            }
        }
    }
}