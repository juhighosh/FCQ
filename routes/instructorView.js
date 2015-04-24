module.exports = function(app) {

    app.get('/instructor/view/:name', function(req, res) {

        // get the courses collection
        var courses = app.db.get('courses')

        var name = req.params.name

        var q = {'insname1': name}

        // execute the query to find those matched limiting to 20
        courses.find(q, function(err, doc) {
            
            res.render('course/courselist.jade', {
                course: doc
            })
        })
        //console.log(doc)
    })
}