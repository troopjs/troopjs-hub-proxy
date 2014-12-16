/**
 * @license MIT http://troopjs.mit-license.org/
 */
/*globals require:false*/
require({
	"baseUrl" : "bower_components",
	"packages" : [ "when", "poly", "troopjs-compose", "troopjs-core", "mu-merge", "mu-getargs", "mu-unique", "mu-selector-set", "mu-jquery-destroy", "troopjs-pubsub" ].map(function (name) {
		var main;
		var location;

		switch (name) {
			case "when":
				main = name;
				break;

			case "poly":
				main = "es5";
				break;

			case "troopjs-pubsub":
				location = "..";
				break;
		}

		return {
			"name": name,
			"location": location,
			"main": main
		}
	})
});