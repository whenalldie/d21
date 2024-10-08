var currentPage = 1;
jQuery(function(e) {
	e("#latest-more").click(function() {
	    currentPage++;
	    
	    $("#latest-reset").click(function() {
	        $('html, body').animate({scrollTop:$('#latest').position().top}, 'slow');
	        currentPage = 1;
	        $(".latest-item .item:nth-child(12)").nextAll().remove();
	        $("#latest-more").show();
	        $("#latest-reset").hide();
	        $(".latest-all").hide();
	        $("#latest-more").text('Tampilkan Lainnya');
	    });
		var t = e(this);
		e.ajax({
			url: d21.ajaxUrl,
			dataType: 'json',
			data: {
                action: 'latest_load_more',
                paged: currentPage,
            },
			type: "POST",
			beforeSend: function(e) {
				t.text('Loading...');
			},
			success: function(e) {
			    if(currentPage > e.max || currentPage > 4) {
                    $('#latest-more').hide();
                    $(".latest-all").show();
                    return false;
                }
				$("html, body").animate({
					scrollTop: t.offset().top - 55
				}, 1500), e.html && t.text('Tampilkan Lainnya').prev().before(e.html) && $('.latest-item').append(e.html),
				currentPage > 4 && $("#latest-more").hide();
				if(currentPage > 1) {
				    $("#latest-reset").show();
				} else {
				    $("#latest-reset").hide();
				}
				if(currentPage > 4) {
				    $(".latest-all").show();
				} else {
				    $(".latest-all").hide();
				}
			}
		});
	});
});
