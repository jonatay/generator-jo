var Generator = require("yeoman-generator");

module.exports = class extends Generator {
	method3() {
		this.log("method 3 just ran");
	}

	method4() {
		this.log("method 4 just ran");
	}
};
