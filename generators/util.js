module.exports.camelCase = myString =>
	myString.replace(/-([a-z])/g, function(g) {
		return g[1].toUpperCase();
	});

module.exports.capCamelCase = myString => {
	let ret = myString.replace(/-([a-z])/g, function(g) {
		return g[1].toUpperCase();
	});
	return ret[0].toUpperCase() + ret.slice(1);
};

module.exports.underscore = myString =>
	myString.replace(/-/g, function(g) {
		return "_";
	});

module.exports.underscoreCapital = myString =>
	myString
		.replace(/-/g, function(g) {
			return "_";
		})
		.toUpperCase();
// return ret[0].toUpperCase() + ret.slice(1);;
