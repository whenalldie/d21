function fetchResults() {
	$(".typeahead__container").addClass("loading");
	var e = $(".typeahead__container"),
		a = jQuery("#searchInput").val();
	"" === a || a.length < 3 ? (e.removeClass("cancel result"), jQuery(".typeahead__result").html(""), $(".typeahead__container").removeClass("loading")) : jQuery.ajax({
		url: d21.ajaxUrl,
		type: "post",
		data: {
			action: "data_fetch",
			keyword: a
		},
		success: function(a) {
			e.addClass("cancel result"), e.removeClass("loading"), jQuery(".typeahead__result").html(a)
		}
	})
}

function fetchMobile() {
	$(".typeahead__container").addClass("loading");
	var e = $(".typeahead__container"),
		a = jQuery("#searchMobile").val();
	"" === a || a.length < 3 ? (e.removeClass("cancel result"), jQuery("#fetchmobile").html(""), $(".typeahead__container").removeClass("loading")) : jQuery.ajax({
		url: d21.ajaxUrl,
		type: "post",
		data: {
			action: "data_fetch",
			keyword: a
		},
		success: function(a) {
			e.addClass("cancel result"), e.removeClass("loading"), jQuery("#fetchmobile").html(a)
		}
	})
}
