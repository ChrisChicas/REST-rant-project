const router = require("express").Router()
const db = require("../models")

router.get("/", (req, res) => {
    db.Place.find()
    .then(places => {
        res.render("./places/index", {places})
    })
    .catch(err => {
        console.log(err)
        res.render("error404")
    })
})

router.get("/new", (req, res) => {
    res.render("./places/new")
})

router.get("/:id", (req, res) => {
    db.Place.findById(req.params.id)
    .populate("comments")
    .then(place => {
        res.render("./places/show", {place})
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
})

router.post("/", (req, res) => {
    if(req.body.pic == ""){
        req.body.pic = undefined
    }
    if(req.body.city == ""){
        req.body.city = undefined
    }
    if(req.body.state == ""){
        req.body.state = undefined
    }
    if(req.body.founded == ""){
        req.body.founded = undefined
    }
    db.Place.create(req.body)
    .then(() => {
        res.redirect("./places")
    })
    .catch(err => {
        if(err && err.name == "ValidationError"){
            let message = "Validation Error: "
            for(var field in err.errors){
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            res.render("./places/new", {message})
        } else{
            console.log("err", err)
            res.render("error404")
        }
    })
})

router.get("/:id/edit", (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render("./places/edit", {place})
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
    
})

router.put("/:id", (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
})

router.post("/:id/comment", (req, res) => {
    if(req.body.author == ""){
        req.body.author = undefined
    }
    if(req.body.rant == "on"){
        req.body.rant = true
    } else {
        req.body.rant = undefined
    }
    if(req.body.content == ""){
        req.body.content = undefined
    }
    db.Comment.create(req.body)
    .then(comment => {
        db.Place.findById(req.params.id)
        .then(place => {
            place.comments.push(comment._id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
})

router.delete("/:id", (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/places")
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
})

router.delete("/:id/comment/:commentid", (req, res) => {
    db.Comment.findByIdAndDelete(req.params.commentid)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
})

module.exports = router
