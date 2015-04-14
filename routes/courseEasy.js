module.exports = function(app) {

    app.get('/course/easy', function(req, res) {

        // get the courses collection
        var courses = app.db.get('courses')

        // compose a query to look up docs whose 'categories' field contains the word 'Doctors'
        var q = {AVG_GRD: { $gt: 3.5} }

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            limit: 20
        }, function(err, docs) {
            
            res.render('course/list.jade', {
                course: docs
            })
        })
    })

}