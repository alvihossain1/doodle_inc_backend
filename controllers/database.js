var mysql = require('mysql');

exports.databaseConnection = () => {
    var db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blogsdb'
    });
    
    
    db.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    
        console.log('connected as id ' + db.threadId);
    });

    return db;
}





