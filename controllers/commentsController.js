const { databaseConnection } = require('./database');
var db = databaseConnection();

exports.createComments = (req, res) => {
    console.log(req.body);
    db.connect(function (err) {
        console.log("Query on Create Blog");
        var sql = `INSERT INTO comments_t(id, blogId, name, email, body) VALUES ('${req.body.id}', '${req.body.blogId}', '${req.body.name}', '${req.body.email}', '${req.body.body}')`;

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


exports.getComments = (req, res) => {
    let id = req.params.id.split(":")[1]
    db.connect(function (err) {
        console.log("Query on Get Comments");
        var sql = `SELECT * FROM comments_t WHERE blogId = '${id}'`;

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

exports.updateComments = (req, res) => {
   console.log("HERE", req.body)
    db.connect(function (err) {
        console.log("Query on Update Comments");
        var sql = `UPDATE comments_t SET name = '${req.body.name}', email = '${req.body.email}', body = '${req.body.body}' WHERE id = '${req.body.id}'`;

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


exports.deleteComments = (req, res) => {
    let id = req.params.id.split(":")[1]
    console.log("HERE: ", id)
    db.connect(function (err) {
        console.log("Query on Delete Comments");
        var sql = `DELETE FROM comments_t WHERE id = '${id}'`;

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