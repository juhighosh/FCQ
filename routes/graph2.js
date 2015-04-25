module.exports = function(app) {

    app.get('/graph2', function(req, res) {

        // get the courses collection
        var courses = app.db.get('courses')

        // compose a query
        var q = {} 

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            limit: 1000
        }, function(err, docs) {

            res.render('graph2.jade', {
                course: docs

            })
            //console.log(docs)
        })
    })

}