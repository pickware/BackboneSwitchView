var ContentView = Backbone.View.extend({
	initialize: function(view) {
		this.view = view;
	},
	
	render: function() {
		var template = $(this.view).html();
		$(this.el).html(template);

		return this;
	}
});