const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`connected DB: ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log(error.message);
        console.log("connection failed");
        process.exit(1);
    })

    module.exports = dbConnection;