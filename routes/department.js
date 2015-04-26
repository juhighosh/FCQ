module.exports = function(app) {

    app.get('/department/list/:name', function(req, res) {

        // get the courses collection
        var courses = app.db.get('courses')

        var q = {'Subject': (req.params.name)}

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            
        }, function(err, docs) {
            
            res.render('course/list.jade', {
                course: docs
            })
        })
    })

}