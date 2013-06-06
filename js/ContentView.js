var ContentView = Backbone.View.extend({
	/*
	 * Initialize with the template-id
	 */
	initialize: function(options) {
		this.view = options.view;
	},
	
	/*
	 * Get the template content and render it into a new div-element
	 */
	render: function() {
		var template = $(this.view).html();
		$(this.el).html(template);

		return this;
	}
});