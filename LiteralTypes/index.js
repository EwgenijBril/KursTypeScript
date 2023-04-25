var msg = "Hello";
msg = "Hello";
var port3000 = 3000;
var port3001 = 3001;
var startServer = function (protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on ".concat(protocol, "//sserver:").concat(port));
    }
    else {
        console.log("Invalid port");
    }
    return "Server started";
};
startServer("https", 3001);
var createAnimation = function (id, animName, limingFunc, duration, iterCount) {
    if (limingFunc === void 0) { limingFunc = "ease"; }
    //const elem  = document.querySelector(`#${id}`) as HTMLElement;
    // if ( elem ) {
    console.log("".concat(animName, " ").concat(limingFunc, " ").concat(duration, " ").concat(iterCount));
    //elem.style.animation  = `${animName} ${limingFunc} ${duration} ${iterCount}`
    //}
};
createAnimation('id', 'fade', 'ease-in', 5, 'infinite');
