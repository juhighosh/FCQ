module.exports = function(app) {

    app.get('/instructor/list', function(req, res) {

        // get the courses collection
        var courses = app.db.get('departments')

        var q = {}

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            
        }, function(err, docs) {
            
            res.render('department/instructorlist.jade', {
                departments: docs
            })
        })
    })

}