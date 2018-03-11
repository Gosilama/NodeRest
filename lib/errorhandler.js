exports.handlerr = (err, str, req) => {
    var title = 'Error in ' + req.method + ' ' + req.url;

    notifier.notify({
        title: title,
        message: str
    });
};