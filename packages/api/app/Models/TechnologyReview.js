/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TechnologyReview extends Model {
	technology() {
		return this.belongsTo('App/Models/Technology');
	}

	user() {
		return this.belongsTo('App/Models/User');
	}
}

module.exports = TechnologyReview;
