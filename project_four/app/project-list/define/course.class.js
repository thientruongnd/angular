"use strict";
var Course = (function () {
    function Course(id, name, price, picture, summary, cat) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.summary = summary;
        this.price = price;
        this.cat = cat;
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=course.class.js.map