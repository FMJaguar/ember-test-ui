App = Em.Application.create();

App.Router.map(function() {
	this.route('appIndex', { path: '/app/index' });
	this.route('colorlist', { path: '/color/list' });
	this.resource('color', { path: '/color/:id' });
});

App.AppIndexRoute = Em.Route.extend({
	renderTemplate: function() {
		this.render('app/index');
	}
});

App.ColorRoute = Em.Route.extend({
});

App.ColorlistRoute = Em.Route.extend({
});

App.IndexRoute = Em.Route.extend({
	model: function() {
		return [];
	}
});

App.Colors = {
	data : {
		1 : 'a',
		2 : 'b',
		3 : 'c'
	},
	find : function (id) {
		return this.data[id];
	}
};
