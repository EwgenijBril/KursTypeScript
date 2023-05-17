// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
function playMedia(_a) {
    var _b = _a === void 0 ? {
        name: "example",
        type: один,
        из: из,
        типов: типов,
        format: один,
        из: из,
        форматов: форматов,
    } : _a, name = _b.name, type = _b.type, format = _b.format, subtitles = _b.subtitles, marks = _b.marks;
    var marksLog;
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    console.log("Media ".concat(name).concat(format, " is ").concat(type, "\n    Marks: ").concat(marksLog, "\n    Subtitles: ").concat(subtitles !== null && subtitles !== void 0 ? subtitles : "none"));
    // помните что это за оператор ??
    return "Media started";
}
playMedia({
    name: "WoW",
    format: один,
    из: из,
    форматов: форматов,
    type: один,
    из: из,
    типов: типов,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
});
