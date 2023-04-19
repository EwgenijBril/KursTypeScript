var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
var userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
    massages: {
        error: "Error"
    }
};
var createError = function (msg) {
    throw new Error(msg);
};
var logBrtMsg = function (_a) {
    var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.massages.error;
    if (isBirthdayData) {
        return "Congrats ".concat(userNameData.toUpperCase(), ", age: ").concat(ageData + 1);
    }
    else {
        return createError(error);
    }
};
console.log(logBrtMsg(userData));
