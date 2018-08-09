//导入模块 内部逻辑
function require(arr, callback) {
    var script = document.createElement('script');
    script.setAttribute('data-main', arr);
    document.body[0].appendChild(script);
    if (callback) {
        callback && callback;
    }
}
//定义模块 内部逻辑
function define(str, arr, callback) {
    if (str === '' || str !== '') {
        var script = document.createElement('script');
        script.setAttribute('src', arr);
        document.body[0].appendChild(script);
        if (callback) {
            return callback && callback;
        }
    }
}