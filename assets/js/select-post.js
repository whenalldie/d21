jQuery((function(t) {
	t("#playlist_tags").select2(), t("#LK21_PLAYLIST").select2({
		ajax: {
			url: d21.ajaxUrl,
			dataType: "json",
			delay: 250,
			data: function(t) {
				return {
					data: t.term,
					action: "getpostdata"
				}
			},
			processResults: function(a) {
				var e = [];
				return a && t.each(a, (function(t, a) {
					e.push({
						id: a[0],
						text: a[1]
					})
				})), {
					results: e
				}
			},
			cache: !0
		},
		minimumInputLength: 3
	})
}));
