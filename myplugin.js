(function() {
	 $.fn.extend({
		myplugin: function(options) {
			var opts, that;
			that = $.fn.myplugin;
		 	opts = $.extend({}, that.default_options, options);
			return $(this).each(function(i, el) {
				that.init(el, opts);
			});
		}
	 });
	$.extend($.fn.myplugin, {
		default_options: {
		},
		init: function(el, opts) {
			console.log(el);
		}
	});
}).call(this);

