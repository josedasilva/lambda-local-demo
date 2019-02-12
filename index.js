
exports.handler = (event, context, callback) => {

    console.log("---Event-----");
    console.log(event);

    console.log("---Context-----");
    console.log(context);

    callback(null, { "status": "ok" });

};
