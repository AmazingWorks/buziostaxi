(function($) {
	$.fn.defaultvalue = function() {
		// Scope
		var elements = this;
		var args = arguments;
		var c = 0;

		return(
			elements.each(function() {
				// Default values within scope
				var el = $(this);
				var def = args[c++];
				el.css({'color' : '#7b90a3'});
				el.val(def).focus(function() {
					if(el.val() == def) {
						el.css({'color' : '#455A6B'});
						el.val("");
					}
					el.blur(function() {
						if(el.val() == "") {
							el.css({'color' : '#7b90a3'});
							el.val(def);
						}
					});
				});

			})
		);
	}
})(jQuery)

$(document).ready(function(){
	$(".linha").each(function(){
		var tamanho = $(this).prev("span.texto").width();
		$(this).css("margin-left", tamanho + 5);
	})
})