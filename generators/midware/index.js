const Generator = require("yeoman-generator");
const midDir = require("../settings").midDir;
const { camelCase, capCamelCase, underscore } = require("../util");

module.exports = class extends Generator {
	constructor(args, opts) {
		// Calling the super constructor is important so our generator is correctly set up
		super(args, opts);
		//console.log(args, opts);
		//console.log(this.destinationRoot())
		this.default = {
			subsys: args.length > 0 ? args[0] : null,
			entity: args.length > 1 ? args[1] : null,
			midDir:
				args.length > 2
					? args[2]
					: this.destinationRoot() + this.destinationPath(midDir)
		};
	}

	async prompting() {
		this.answers = await this.prompt([
			{
				type: "input",
				name: "subsys",
				message: "Your subsys name",
				default: this.default.subsys // Default to current subsys name
			},
			{
				type: "input",
				name: "entity",
				message: "Your entity name",
				default: this.default.entity // Default to current entity name
			},
			{
				type: "input",
				name: "midDir",
				message: "Your midware directory",
				default: this.default.midDir // Default to current entity name
			}
		]);
	}

	generateOrGetSubsys() {
		// this.log(
		// 	"generateOrGetSubsys",
		// 	this.answers.subsys
		// 	//this.answers.midDir,
		// 	//camelCase(this.answers.subsys),
		// );
	}

	generateEntity() {
		//entity
		this.fs.copyTpl(
			this.templatePath("entity.js"),
			this.destinationPath(
				this.answers.midDir +
					this.answers.subsys +
					"/" +
					this.answers.entity +
					"/" +
					this.answers.entity +
					".js"
			),
			{ entityName: capCamelCase(this.answers.entity) }
		);
		//actions
		this.fs.copyTpl(
			this.templatePath("actions.js"),
			this.destinationPath(
				this.answers.midDir +
					this.answers.subsys +
					"/" +
					this.answers.entity +
					"/" +
					this.answers.entity +
					"-actions.js"
			),
			{
				entityName: capCamelCase(this.answers.entity),
				entityNameAction: underscore(this.answers.entity).toUpperCase(),
				entityNameCamel: camelCase(this.answers.entity),
				subsysNameAction: underscore(this.answers.subsys).toUpperCase()
			}
		);
		//list
		this.fs.copyTpl(
			this.templatePath("list.js"),
			this.destinationPath(
				this.answers.midDir +
					this.answers.subsys +
					"/" +
					this.answers.entity +
					"/" +
					this.answers.entity +
					"-list.js"
			),
			{
				entityName: capCamelCase(this.answers.entity),
				entityNameAction: underscore(this.answers.entity).toUpperCase(),
				entityNameCamel: camelCase(this.answers.entity),
				entity: this.answers.entity,
				subsys: this.answers.subsys
			}
		);
		//reducer
		this.fs.copyTpl(
			this.templatePath("reducer.js"),
			this.destinationPath(
				this.answers.midDir +
					this.answers.subsys +
					"/" +
					this.answers.entity +
					"/" +
					this.answers.entity +
					"-reducer.js"
			),
			{
				entityName: capCamelCase(this.answers.entity),
				entityNameAction: underscore(this.answers.entity).toUpperCase(),
				entityNameCamel: camelCase(this.answers.entity),
				entity: this.answers.entity
			}
		);
		//sagas
		this.fs.copyTpl(
			this.templatePath("sagas.js"),
			this.destinationPath(
				this.answers.midDir +
					this.answers.subsys +
					"/" +
					this.answers.entity +
					"/" +
					this.answers.entity +
					"-sagas.js"
			),
			{
				entityName: capCamelCase(this.answers.entity),
				entityNameAction: underscore(this.answers.entity).toUpperCase(),
				entityNameCamel: camelCase(this.answers.entity),
				entity: this.answers.entity
			}
		);
		//selectors
		this.fs.copyTpl(
			this.templatePath("selectors.js"),
			this.destinationPath(
				this.answers.midDir +
					this.answers.subsys +
					"/" +
					this.answers.entity +
					"/" +
					this.answers.entity +
					"-selectors.js"
			),
			{
				entityNameCamel: camelCase(this.answers.entity),
				entityName: capCamelCase(this.answers.entity),
				subsys: this.answers.subsys
			}
		);
		//index
		this.fs.copyTpl(
			this.templatePath("index.js"),
			this.destinationPath(
				this.answers.midDir +
					this.answers.subsys +
					"/" +
					this.answers.entity +
					"/index.js"
			),
			{
				entityNameCamel: camelCase(this.answers.entity),
				entity: this.answers.entity,
				entityName: capCamelCase(this.answers.entity)
			}
		);
		// this.log(
		// 	"generateEntity",
		// 	this.answers.entity,
		// 	camelCase(this.answers.entity),
		// 	capCamelCase(this.answers.entity),
		// 	underscore(this.answers.entity)
		// );
	}
};
