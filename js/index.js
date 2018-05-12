$(function() {
	$(document).on('mousemove', function(e) {
		var event = e || window.event;
		//console.log(event);
		function getDis(item) {
			var item = $(item);
			var x = item.offset().left + 64 / 2;
			var y = item.offset().top + 64 / 2;
			var a = Math.abs(event.clientX - x);
			var b = Math.abs(event.clientY - y);
			return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
		}

		for (var i = 0; i < $('img').length; i++) {
            var d = getDis($('img')[i]);
            d = Math.min(d, 200);
            var num = (200 - d) / 200 * 64 + 64;
            $($('img')[i]).css({
                'height':num+'px',
                'width':num+'px'
            })
		}
	});
});
