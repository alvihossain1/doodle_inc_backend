const { databaseConnection } = require('./database');
var db = databaseConnection();

exports.CreateBlogs = (req, res) => {
    console.log(req.body);
    db.connect(function (err) {
        console.log("Query on Create Blog");
        var sql = `INSERT INTO blogs_t(id, userId, title, body) VALUES ('${req.body.id}', '${req.body.userId}', '${req.body.title}', '${req.body.body}')`;

        db.query(sql, (err, results) => {
            try {
                if (err) throw err;
                res.send({status: 200, data: results});
                console.log("SQL: ", results)
            }
            catch (err) {
                console.log({ status: 500, err })
                res.send({ status: 500, err })
            }
        });

    });
}


exports.getBlogs = (req, res) => {
    db.connect(function (err) {
        console.log("Query on Get Blogs");
        var sql = `SELECT * FROM blogs_t`;

        db.query(sql, (err, results) => {
            try {
                if (err) throw err;
                res.send({status: 200, data: results});
                console.log("SQL: ", results)
            }
            catch (err) {
                console.log({ status: 500, err })
                res.send({ status: 500, err })
            }
        });

    });
}

exports.updateBlogs = (req, res) => {
    console.log(req.body);
    db.connect(function (err) {
        console.log("Query on Update Blogs");
        var sql = `UPDATE blogs_t SET title = '${req.body.title}', body = '${req.body.body}' WHERE id = ${req.body.id}`;

        db.query(sql, (err, results) => {
            try {
                if (err) throw err;
                res.send({status: 200, data: results});
                console.log("SQL: ", results)
            }
            catch (err) {
                console.log({ status: 500, err })
                res.send({ status: 500, err })
            }
        });

    });
}


exports.deleteBlogs = (req, res) => {
    let id = req.params.id.split(":")[1]
    console.log(id)
    db.connect(function (err) {
        console.log("Query on Delete Blogs");
        var sql = `DELETE FROM blogs_t WHERE id = '${id}'`;

        db.query(sql, (err, results) => {
            try {
                if (err) throw err;
                res.send({status: 200, data: results});
                console.log("SQL: ", results)
            }
            catch (err) {
                console.log({ status: 500, err })
                res.send({ status: 500, err })
            }
        });

    });
}

