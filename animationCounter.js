/* ===========================================================
 *				    start: 0,//开始数字
*					end: null,//结束数字
*					step: 1,//跳动几个
*					delay: 1000,//速度
*					txt: ""//单位
 *
 * ========================================================== */


(function($){

	$.fn.animationCounter = function(options) {
		return this.each(function() {
			try {
				var element = $(this);

				var defaults = {
					start: 0,
					end: null,
					step: 1,
					delay: 1000,
					txt: ""
				}

				var settings = $.extend(defaults, options || {})

				var nb_start = settings.start;
				var nb_end = settings.end;

 				element.text(nb_start + settings.txt);

				var counter = function() {
					// Definition of conditions of arrest
					if (nb_end != null && nb_start >= nb_end) {
						return;
					}
					// incrementation
					nb_start = nb_start + settings.step;
					// display
					element.text(nb_start + settings.txt);
				}

				// Timer
				// Launches every "settings.delay"
				setInterval(counter, settings.delay);

			} catch(e){
				alert( e + ' at line ' + e.lineNumber );
			}
		});
	};

})(jQuery);
