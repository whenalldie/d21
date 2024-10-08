jQuery(document).ready(function($) {
	var wrg = 'Warning';
	var nte = 'Note';
	var ero = 'Error';
	var delay = (function() {
		var timer = 0;
		return function(callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
	})();
	var constyle = 'color:#119c17;font-family:helvetica,arial;font-size:15px';
	$('.dbmvs-tab-content').click(function() {
		var type = $(this).attr('data-type');
		$('.dbmvs-tab-content').removeClass('button-primary');
		$(this).addClass('button-primary');
		$('.cctype').val(type);
		$("#bulk-importer-click").hide();
		$("#import_all").hide();
		//$("#reset_all").hide();

	});

	$('.scraper-type').click(function() {
		var type = $(this).attr('data-control');
		$('.scraper-type').removeClass('button-primary');
		$(this).addClass('button-primary');
		if ($("#type-lk21").hasClass("button-primary")) {
			$('.dbmvs-forms-response').removeClass('hidden');
			$('.dbmvs-forms-response-imdb').addClass('hidden');
		}
		if ($("#type-imdb").hasClass("button-primary")) {
			$('.dbmvs-forms-response').addClass('hidden');
			$('.dbmvs-forms-response-imdb').removeClass('hidden');
		}
		if ($("#type-lk21-mobile").hasClass("button-primary")) {
			$('.dbmvs-forms-response').removeClass('hidden');
			$('.dbmvs-forms-response-imdb').addClass('hidden');
		}
		if ($("#type-imdb-mobile").hasClass("button-primary")) {
			$('.dbmvs-forms-response').addClass('hidden');
			$('.dbmvs-forms-response-imdb').removeClass('hidden');
		}

	});

	function show_history() {
		$('#scraper_response_history').show();
		$("#dbmovies-logs-box ul").append('<li class="jump"><span class="type green">Filter</span> ' + sCp.completed + '</li>');
	}

	function forbidden() {
		$('#scraper_response_history').show();
		$("#dbmovies-logs-box ul").append('<li class="jump">' + sCp.forbidden + '</li>');
	}

	function search_history() {
		$('#scraper_response_history').show();
		$("#dbmovies-logs-box ul").append('<li class="jump"><span class="type green">Search</span> ' + sCp.completed + '</li>');
	}

	function cimport(id, permalink, postdate, nonce, type) {
		$('#c' + id).hide();
		$('#' + id).removeClass('scimport');
		$('#' + id).addClass('fadeInDown');
		$('#' + id).addClass('preimport');
		$("#bulk-importer-click").hide();
		$("#import_all").hide();
		//$("#reset_all").hide();
		$.ajax({
			url: sCp.url,
			type: 'post',
			data: {
				id: id,
				postdate: postdate,
				permalink: permalink,
				nonce: nonce,
				type: type,
				action: 'scraper_app_post'
			},
			error: function(response) {
				//console.log(response);
			},
			success: function(response) {
				$("#dbmovies-logs-box ul").append(response);
				$('#' + id).removeClass('preimport');
				$('#' + id).addClass('scimported');
				$('#' + id).addClass('jump');
			}
		});
	}

	$(document).on('submit', '#scraper-filter', function() {
		var that = $(this);
		var ajaxurl = sCp.url;
		$('#scraper_response').addClass('scclick');
		$('#scpfilter').prop('disabled', true);
		$('#scpfilter').val(sCp.filtering);
		$.ajax({
			url: ajaxurl,
			type: 'post',
			data: that.serialize(),
			error: function(response) {
				console.log(response);
			},
			success: function(response) {
				show_history();
				$('#scraper_response').removeClass('scclick');
				$('#scpfilter').prop('disabled', false);
				$('#scpfilter').val(sCp.filter);
				$('#scraper_response').html(response);
				$("#bulk-importer-click").show();
				$("#import_all").show();
				$('.pagex').click(function() {
					var page = $(this).data('page');
					$('#page').val(page);
					$('#scpfilter').trigger('click');
					$("#import_all").hide();
				});
				$('.cimport').click(function() {
					var id = $(this).data('id');
					var permalink = $(this).data('permalink');
					var postdate = $(this).data('postdate');
					var type = $(this).data('type');
					var nonce = $(this).data('nonce');
					cimport(id, permalink, postdate, nonce, type);
					return false;
				});
			},
		});
		return false;
	});

	function search_dbmovies() {
		var ajaxurl = sCp.url
		var term = $('#term').val();
		var type = $('#stype').val();
		var action = $('#saction').val();
		var page = $('#spage').val();
		var nonce = $('#nonce').val();
		$('#scraper_response').addClass('dbclick');
		$('#scpsearch').prop('disabled', true);
		$('#scpsearch').val(sCp.loading);
		$("#bulk-importer-click").hide();
		$("#import_all").hide();
		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {
				type: type,
				term: term,
				page: page,
				action: action,
				nonce: nonce
			},
			error: function(response) {
				console.log(response);
			},
			success: function(response) {
				search_history();
				$('#scraper_response').removeClass('dbclick');
				$('#scpsearch').prop('disabled', false);
				$('#scpsearch').val(sCp.search);
				$('#scraper_response').html(response);
				$('.pagex').click(function() {
					var page = $(this).data('page');
					$('#spage').val(page);
					$('#scpsearch').trigger('click');
				});
				$('.cimport').click(function() {
					var id = $(this).data('id');
					var permalink = $(this).data('permalink');
					var postdate = $(this).data('postdate');
					var type = $(this).data('type');
					var nonce = $(this).data('nonce');
					cimport(id, permalink, postdate, nonce, type);
					return false;
				});
			},
		});
	}

	$(document).on('submit', '#scraper-search', function() {
		search_dbmovies();
		return false;
	});

	$('.resetfil').click(function() {
		$('#page').val('1')
	});

	$('#import_all').click(function() {
		$("#bulk-importer-click").hide();
		$("#import_all").hide();
		$(".cimport").trigger('click');
		return false;
	});
	$('#reset_all').click(function(e) {
		e.preventDefault();
		$("#dbmovies-logs-box ul").empty();
		$("#dbmovies-logs-box ul").append('<li class="jump"><span class="type">dbmvs</span>Log cleaned</li>');
		return false;
	});

	$("#dbmovies-logs-box ul").append('<li class="jump"><span class="type">dbmvs</span>' + sCp.welcomeText + '</li>');

});
