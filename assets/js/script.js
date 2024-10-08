var isMobile = function() {
	var t, e = !1;
	return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
};
(jQuery),
function(c, d) {
	var p = c();
	c.fn.dropdownHover = function(l) {
		return "ontouchstart" in document ? this : (p = p.add(this.parent()), this.each(function() {
			function e() {
				n.parents(".navbar").find(".navbar-toggle").is(":visible") || (d.clearTimeout(t), d.clearTimeout(i), i = d.setTimeout(function() {
					p.find(":focus").blur(), !0 === a.instantlyCloseOthers && p.removeClass("open"), d.clearTimeout(i), n.attr("aria-expanded", "true"), o.addClass("open"), n.trigger(r)
				}, a.hoverDelay))
			}
			var t, i, n = c(this),
				o = n.parent(),
				s = {
					delay: c(this).data("delay"),
					hoverDelay: c(this).data("hover-delay"),
					instantlyCloseOthers: c(this).data("close-others")
				},
				r = "show.bs.dropdown",
				a = c.extend(!0, {}, {
					delay: 500,
					hoverDelay: 0,
					instantlyCloseOthers: !0
				}, l, s);
			o.hover(function(t) {
				return !o.hasClass("open") && !n.is(t.target) || void e()
			}, function() {
				d.clearTimeout(i), t = d.setTimeout(function() {
					n.attr("aria-expanded", "false"), o.removeClass("open"), n.trigger("hide.bs.dropdown")
				}, a.delay)
			}), n.hover(function(t) {
				return !o.hasClass("open") && !o.is(t.target) || void e()
			}), o.find(".dropdown-submenu").each(function() {
				var e, i = c(this);
				i.hover(function() {
					d.clearTimeout(e), i.children(".dropdown-menu").show(), i.siblings().children(".dropdown-menu").hide()
				}, function() {
					var t = i.children(".dropdown-menu");
					e = d.setTimeout(function() {
						t.hide()
					}, a.delay)
				})
			})
		}))
	}, c(document).ready(function() {
		c('[data-hover="dropdown"]').dropdownHover()
	})
}(jQuery, window),
function(i) {
	i.fn.equalHeights = function() {
		var e = 0,
			t = i(this);
		return t.each(function() {
			var t = i(this).innerHeight();
			e < t && (e = t)
		}), t.css("height", e)
	}, i("[data-equal]").each(function() {
		var t = i(this),
			e = t.data("equal");
		t.find(e).equalHeights()
	})
}(jQuery),
window.onscroll = function() {
	20 < document.body.scrollTop || 20 < document.documentElement.scrollTop ? $("#go-top").fadeTo("fast", .7) : $("#go-top").hide()
};
	showMore = function() {
		"auto" == $(".toggle-more").css("overflow") ? ($("#movie-detail").addClass("content-wrapper"), $(".toggle-more").css("overflow", "hidden").css("height", $(".content-wrapper img").height() + 10), $(".show-more").html('TAMPILKAN LEBIH BANYAK <b class="caret"></b>')) : ($("#movie-detail").removeClass("content-wrapper"), $(".toggle-more").css("overflow", "auto").css("height", "auto"), $(".show-more").html('TAMPILKAN LEBIH SEDIKIT <b class="caret" style="transform: rotate(180deg)"></b>'))
	},
	showPopSocial = function(t) {
		return window.open(t, "", "menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=700"), !1
	},
	openPopUpVideo = function(t) {
		window.open(t, "", "width=700,height=394,top=50,left=" + (document.documentElement.clientWidth - 700))
	},
	bioskopOn = function() {
		$("#bioskop-mode").show(), $("#player").removeAttr("class"), $("#player").addClass("player-bioskop"), $("#bioskop-mode .btn").animate({
			opacity: .3
		}, 18e4)
	},
	bioskopOff = function() {
		$("#player").removeClass("player-bioskop").addClass("player embed-responsive embed-responsive-16by9"), $("#bioskop-mode").hide()
	},
	setLandscape = function() {
		screen.orientation && screen.orientation.lock ? screen.orientation.lock('landscape') : ''
	};
fullScreen = function() {
	var t = document.getElementById("player-iframe");
	t.requestFullscreen ? (t.requestFullscreen(), setLandscape()) : t.mozRequestFullScreen ? (t.mozRequestFullScreen(), setLandscape()) : t.webkitRequestFullscreen && (t.webkitRequestFullscreen(), setLandscape())
};
$(window).resize(function() {
	$(".mega-item").removeAttr("style"), $(".mega-item").equalHeights(), $("#populer .widget-item").removeAttr("style"), $("#populer .widget-item").equalHeights(), $("#newseries .widget-item").removeAttr("style"), $("#newseries .widget-item").equalHeights(), $("#recomendation .widget-item").removeAttr("style"), $("#recomendation .widget-item").equalHeights()
}), $(document).ready(function() {
	$(".mega-item").equalHeights(), 
	$(".playlist-item").equalHeights(), 
	$("#newseries .widget-item").equalHeights(), 
	$("#populer .widget-item").equalHeights(), 
	$("#recomendation .widget-item").equalHeights(), 
	$(".fancybox").fancybox({
		openEffect: "none",
		closeEffect: "none",
		helpers: {
			media: {}
		}
	}), $("#go-top").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, "slow")
	}), $("#accordion .panel").on("show.bs.collapse hide.bs.collapse", function(t) {
		"show" == t.type ? $(this).removeClass("panel-default").addClass("panel-primary") : $(this).removeClass("panel-primary").addClass("panel-default")
	}), $(".toggle-more").css("height", $(".content-wrapper img").height() + 10).css("overflow", "hidden"), $(".form-filter #orderby").change(function() {
		$(".form-filter").attr("action", $(this).val())
	})
});

let btnRekom = document.querySelector(".purple-bg");
if (null !== btnRekom) {
    let e = document.querySelector(".purple-bg").innerText;

    function t(t) {
        (e && null !== e || void 0 !== e) && t.matches && (document.querySelector(".purple-bg").innerText = "");
    }
    document.querySelector(".pink-bg").innerText;
    var i = window.matchMedia("(min-width:768px) and (max-width: 991px)");

    function n(t) {
        (e && null !== e || void 0 !== e) && t.matches && (document.querySelector(".purple-bg").innerText = e);
    }
    t(i), i.addEventListener("change", function() {
        t(i);
    });
    var mobile = window.matchMedia("(max-width: 767px)");

    function o(t) {
        (e && null !== e || void 0 !== e) && t.matches && (document.querySelector(".purple-bg").innerText = e);
    }
    n(mobile), mobile.addEventListener("change", function() {
        n(mobile);
    });
    var l = window.matchMedia("(min-width: 992px)");
    o(l), l.addEventListener("change", function() {
        o(l);
    });
}
let btnPlaylist = document.querySelector(".pink-bg");
if (null !== btnPlaylist) {
    let a = document.querySelector(".pink-bg").innerText;

    function r(e) {
        (a && null !== a || void 0 !== a) && e.matches && (document.querySelector(".pink-bg").innerText = "");
    }
    var i = window.matchMedia("(min-width:768px) and (max-width: 991px)");

    function c(e) {
        (a && null !== a || void 0 !== a) && e.matches && (document.querySelector(".pink-bg").innerText = a);
    }
    r(i), i.addEventListener("change", function() {
        r(i);
    });
    var mobile = window.matchMedia("(max-width: 767px)");

    function d(e) {
        (a && null !== a || void 0 !== a) && e.matches && (document.querySelector(".pink-bg").innerText = a);
    }
    c(mobile), mobile.addEventListener("change", function() {
        c(mobile);
    });
    var l = window.matchMedia("(min-width: 992px)");
    d(l), l.addEventListener("change", function() {
        d(l);
    });
}

function removehash() {
    setTimeout(function() {
        history.replaceState("", document.title, window.location.pathname);
    }, 1);
}

$(document).ready(function() {
    $(window).resize(function() {
    	$("#seriespopuler .widget-item").removeAttr("style"), $("#seriespopuler .widget-item").equalHeights();
    });
    $('.sidebar').theiaStickySidebar({
    	additionalMarginTop: 10,
    	containerSelector: '.featured'
    });
    setInterval(function() {
		$('.load-more .btn-success').fadeTo(100, 0.1).fadeTo(200, 1.0);
	}, 1000);
	$("#seriespopuler .widget-item").removeAttr("style"), $("#seriespopuler .widget-item").equalHeights();
});
if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        const deferredPrompt = e;
        const installButton = document.getElementById('installApp');
        installButton.addEventListener('click', () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(choiceResult => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('App installed');
                } else {
                    console.log('App installation declined');
                }
            });
        });
    });
}

function setCookiePwa(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function getCookiePwa(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookieNotice(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function getCookieNotice(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookiePopup(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function getCookiePopup(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookieLeft(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function getCookieLeft(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookieRight(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function getCookieRight(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookieFooter(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function getCookieFooter(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var closeBanner = function() {
    $('.banner_pwa').hide();
    setCookiePwa("bannerPwa", "bannerPwa", 10);
}
var closeNotice = function() {
    $(".notice").hide(), 
    setCookieNotice("notice",'notice', 10);
};
var closePopup = function() {
    $("#idmuvi-popup").hide(), 
    setCookiePopup("adsPopup",'adsPopup', 10);
};
var closeLeft = function() {
    $(".idmuvi-floatbanner-left").hide(), 
    setCookieLeft("adsLeft",'adsLeft', 10);
};
var closeRight = function() {
    $(".idmuvi-floatbanner-right").hide(), 
    setCookieRight("adsRight",'adsRight', 10);
};
var closeFooter = function() {
    $(".idmuvi-floatbanner-footer").hide(), 
    setCookieFooter("adsFooter",'adsFooter', 10);
};
$(document).ready(function() {
    if (getCookiePwa('bannerPwa') ) {
        $('.banner_pwa').hide();
    }
    if (getCookieNotice('notice')) {
        $('.notice').hide();
    }
    if (getCookiePopup('adsPopup')) {
        $('#idmuvi-popup').hide();
    }
    if (getCookieLeft('adsLeft')) {
        $('.idmuvi-floatbanner-left').hide();
    }
    if (getCookieRight('adsRight')) {
        $('.idmuvi-floatbanner-right').hide();
    }
    if (getCookieFooter('adsFooter')) {
        $('.idmuvi-floatbanner-footer').hide();
    }
});
if(d21.adblockPlayer == true) {
    setTimeout(function () {
        const canary = document.querySelector('div#detectPlayer');
        const style = getComputedStyle(canary);
        
        if (style.display === 'none') {
            $(".adblock").show();
            $("#fullscreen").attr("onclick",null);
        }else{
            $("#fullscreen").attr("onclick","fullScreen()");
        }
    }, 2000);
}
if(d21.adblock == true) {
    setTimeout(function () {
        const canary = document.querySelector('div#detect');
        const style = getComputedStyle(canary);
        if (style.display === 'none') {
            $(".adblock").show();
        }else{
            $(".adblock").hide();
        }
    }, 2000);
}
function myClear() {
	var t = $(".typeahead__container");
	document.getElementById("searchInput").value = "", 
	document.getElementById("searchMobile").value = "", 
	t.removeClass("cancel result")
}
function showToast(options) {
	var element = document.createElement("div");
	element.className = "toast";
	element.textContent = options;
	document.body.appendChild(element);
	setTimeout(function() {
		document.body.removeChild(element);
	}, 2E3);
}
$(document).ready(function() {
    var modalContent = document.querySelector(".modal-content");
    if (d21.bookMark) {
        var getPath = d21.bookmarkPages.split('/');
        var lastSegment = getPath.pop() || getPath.pop();
        const newPath = "/" + lastSegment + "/";
    	const bookmarks = {
    		maxWidget: d21.bookmarkLimit,
    		maxAll: d21.bookmarkLimit,
    		emptyText: d21.bookMarkEmpty,
    		moreText: d21.viewAllBookmark,
    		currentText: d21.onBookmarkPage,
    		morePage: newPath,
    		deleteText: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M20.5 6h-17"/><path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6"/><path stroke-linecap="round" d="M18.374 15.4c-.177 2.654-.266 3.981-1.131 4.79c-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3"/></g></svg>'
    	};
    	!function(d) {
    		let ignielbookmark = JSON.parse(localStorage.getItem("ignielBookmark")) || [];
    		d.querySelector(".ignielBookmark").querySelector("i").innerHTML = ignielbookmark.length;
    		const bmCek = () => {
    			if (ignielbookmark.length > 0) {
    				ignielbookmark.forEach((e) => {
    					if (d.getElementById("bm-" + e.id)) {
    						d.getElementById("bm-" + e.id).checked = true;
    						if(d.getElementById("bm-" + e.id).checked = true) {
    						    $(".single.ignielBookmarkPost").removeClass("btn-primary").addClass("btn-success");
    						}
    					}
    				})
    			}
    		};
    		const bmRender = () => {
    			localStorage.setItem("ignielBookmark", JSON.stringify(ignielbookmark));
    			d.querySelector(".ignielBookmark").querySelector("i").innerHTML = ignielbookmark.length;
    			let bmContainer = d.querySelector(".bookmark-inner"),
    				bmContainerAll = d.querySelector(".ignielBookmarks"),
    				bmBuild = "";
    			if (ignielbookmark.length > 0) {
    				let max = bookmarks.maxWidget,
    					more = false;
    				if (d.location.pathname == bookmarks.morePage) {
    					max = bookmarks.maxAll
    				} else {
    					max = bookmarks.maxWidget;
    					if (ignielbookmark.length > max) {
    						more = true
    					}
    				}
    				ignielbookmark.slice(0, max).forEach((e) => {
    					bmBuild += '<li data-id="' + e.id + '"><div class="bm-thumb" ' + (d21.bookMarkImage ? '' : 'style="display:none;"') + '><a href="' + e.url + '" title="' + e.title + '"><img alt="' + e.title + '" src="' + e.img + '" title="' + e.title + '"></a></div><div class="bm-title max-line-2" style="max-height:120px;padding-left: ' + (d21.bookMarkImage ? '0' : '2.5rem') + '"><a class="max-line-2 fw-600" href="' + e.url + '" title="' + e.title + '">' + e.title + '</a><p><i class="fa-star"></i> IMDb ' + e.rating + '</br>' + e.category + ', ' + e.country + ', ' + e.quality + ', ' + e.year + '</br><a href="https://www.youtube.com/watch?v=' + e.trailer + '" class="btn btn-default btn-xs fancybox" title="' + e.title + '" target="_blank" rel="nofollow">TRAILER</a></p></div><div class="bm-delete" role="button">' + bookmarks.deleteText + "</div>"
    				});
    				bmContainer.innerHTML += "</ul>";
    				if (d.location.pathname == bookmarks.morePage) {
    					bmContainer.innerHTML = bookmarks.currentText;
    					if (bmContainerAll) bmContainerAll.innerHTML = "<ul>" + bmBuild + "</ul>"
    				} else {
    					bmContainer.innerHTML = "<ul>" + bmBuild;
    					if (more) {
    						bmContainer.innerHTML += '<li class="bm-more"><a class="btn btn-primary" href="' + bookmarks.morePage + '" title="' + bookmarks.moreText + '">' + bookmarks.moreText + " (+" + (ignielbookmark.length - max) + ")</a></li>"
    					}
    				}
    			} else {
    				bmContainer && (bmContainer.innerHTML = bookmarks.emptyText);
    				bmContainerAll && (bmContainerAll.innerHTML = bookmarks.emptyText)
    			}
    			bmDel()
    		};
    		const bmAdd = (a) => {
    		    if(ignielbookmark.length > d21.limitBookmark) {
    		        showToast('Bookmark Limit');
    		        return false;
    		    }else{
        			ignielbookmark.push(a);
        			bmRender();
        			showToast('Bookmark added');
        			$(".single.ignielBookmarkPost").removeClass("btn-priamry").addClass("btn-success");
    		    }
    		};
    		const bmRem = (id) => {
    			ignielbookmark = ignielbookmark.filter((obj) => obj.id !== id);
    			bmRender();
    			if (d.getElementById("bm-" + id)) {
    				d.getElementById("bm-" + id).checked = false;
    				if(d.getElementById("bm-" + id).checked = false) {
    					$(".single.ignielBookmarkPost").removeClass("btn-success").addClass("btn-primary");
    				}
    			}
    			showToast('Bookmark removed');
    			$(".single.ignielBookmarkPost").removeClass("btn-success").addClass("btn-primary");
    		};
    		const bmDel = () => {
    			const a = d.querySelectorAll(".bm-delete");
    			if (a.length > 0) {
    				a.forEach((e) => {
    					const dId = e.parentNode.getAttribute("data-id");
    					e.addEventListener("click", () => {
    						bmRem(dId)
    					})
    				})
    			}
    		};
    		const ignielBookmark = () => {
    			const a = d.querySelectorAll(".ignielBookmarkPost input");
    			if (a.length > 0) {
    				a.forEach((e) => {
    					e.addEventListener("change", () => {
    						const bmId = e.id.split("-")[1],
    							bmParent = e.parentNode,
    							bookmarkItem = {
    								id: bmId,
    								img: bmParent.querySelector("label").getAttribute("data-img"),
    								title: bmParent.querySelector("label").getAttribute("data-title"),
    								url: bmParent.querySelector("label").getAttribute("data-url"),
    								category: bmParent.querySelector("label").getAttribute("data-category"),
    								rating: bmParent.querySelector("label").getAttribute("data-rating"),
    								country: bmParent.querySelector("label").getAttribute("data-country"),
    								quality: bmParent.querySelector("label").getAttribute("data-quality"),
    								year: bmParent.querySelector("label").getAttribute("data-year"),
    								trailer: bmParent.querySelector("label").getAttribute("data-trailer"),
    								durasi: bmParent.querySelector("label").getAttribute("data-durasi"),
    							};
    						if (ignielbookmark) {
    							const findId = ignielbookmark.find((obj) => obj.id === bmId);
    							if (findId) {
    								bmRem(bmId)
    							} else {
    								bmAdd(bookmarkItem)
    							}
    						} else {
    							bmAdd(bookmarkItem)
    						}
    					})
    				})
    			}
    		};
    		d.location.pathname == bookmarks.morePage && bmRender();
    		d.querySelector(".ignielBookmark").addEventListener("click", () => {
    			bmRender()
    		});
    		d.addEventListener("scroll", () => {
    			bmCek;
    			ignielBookmark
    		});
    		ignielBookmark();
    		bmCek()
    	}(document);
    	var bmModal = document.getElementById('bmOpen');
    	var bmBtn = document.getElementById('bmBtn');
    	var bmClose = document.getElementById('bmClose');
    	bmBtn.onclick = function() {
    		openBookmarkModal()
    	};
    	bmClose.onclick = function() {
    		closeBookmarkModal()
    	};
    
    	function openBookmarkModal() {
    		bmModal.style.display = 'block';
    		setTimeout(function() {
    			bmModal.style.opacity = '1'
    		}, 10);
    		window.onclick = function(event) {
    			if (event.target === bmModal) {
    				closeBookmarkModal()
    			}
    		};
    		modalContent.onclick = function(event) {
    			event.stopPropagation()
    		}
    	}
    
    	function closeBookmarkModal() {
    		bmModal.style.opacity = '0';
    		setTimeout(function() {
    			bmModal.style.display = 'none'
    		}, 300)
    	}
    	bmBtn.style.setProperty('display', 'flex', 'important')
    } else {
    	const hideElements = (className) => {
    		const elements = document.querySelectorAll(className);
    		elements.forEach((element) => {
    			element.style.display = 'none'
    		})
    	};
    	hideElements('.ignielBookmark');
    	hideElements('.ignielBookmarkPost')
    }
    const theme = document.documentElement.getAttribute("data-theme");
    const that = document.getElementById("light-button");
    const item = document.getElementById("dark-button");
    if ("light" === theme) {
    	that.classList.add("active");
    	item.classList.remove("active");
    } else {
    	if ("dark" === theme) {
    		item.classList.add("active");
    		that.classList.remove("active");
    	}
    }
    that.onclick = function() {
    	document.documentElement.setAttribute("data-theme", "light");
    	localStorage.setItem("theme", "light");
    };
    item.onclick = function() {
    	document.documentElement.setAttribute("data-theme", "dark");
    	localStorage.setItem("theme", "dark");
    };
    if(localStorage.getItem("theme") == 'dark') {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    if(localStorage.getItem("theme") == 'light') {
        document.documentElement.setAttribute("data-theme", "light");
    }
});
