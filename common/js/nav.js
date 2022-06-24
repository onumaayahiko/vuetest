// JavaScript Document


$(function(){
	function openMenu(navBtn){
		navBtn.next().animate({height: "100%"}, "fast");
		navBtn.addClass("nav-btn-close");
		navBtn.removeClass("nav-btn-open");
		$("body").addClass("scroll-block");
	}
	
	function closeMenu(navBtn){
		navBtn.next().animate({height: "0"}, "fast");
		$(".level1 a").removeClass("on");
		$(".level1 ul").hide();
		navBtn.addClass("nav-btn-open");
		navBtn.removeClass("nav-btn-close");
		$("body").removeClass("scroll-block");
	}
	
	// メニューボタンのクリックイベント（モバイルビュー）
	$(".nav-btn").on("click", function(){
		if($(this).hasClass("nav-btn-open")){
			openMenu($(this));
		}else{
			closeMenu($(this));
		}
	});
	
	// メニュー外クリックで閉じる（モバイルビュー）
	$(".global-nav").on("click", function(event){
		if (event.target == event.currentTarget) {  //子要素でイベント発生させない
			if($(".nav-btn").hasClass("nav-btn-close")){
				closeMenu($(".nav-btn"));
			}
		}
	});
	
	var mobileSize = 1024; //モバイルの画面サイズ
	
	
	// ヘッダー
	// 画面のサイズ判定
	var windowWidth = window.innerWidth; //スクロールバーも含んだサイズ
	$(window).resize(function(){
		if(windowWidth == window.innerWidth){
			return; //横幅が変わらない時はキャンセル
		}
		windowWidth = window.innerWidth; //スクロールバーも含んだサイズ
		$(".level1").removeClass("on");
		$(".level2-block").hide();
		
		$(".footer-level1").removeClass("on");
		if (windowWidth > mobileSize) {
			$(".footer-level2-block").show();
			$(".footer-level2-block").css("display", "");
		}else{
			$(".footer-level2-block").hide();
		}
	});
	
	// PCサイズの時のナビゲーションイベント
	$(".level1").mouseover(function(){
		if (windowWidth > mobileSize){
			$(this).children(".level2-block").stop().slideDown("fast");
		}
	});
	$(".level1").mouseout(function(){
		if (windowWidth > mobileSize){
			$(this).children(".level2-block").stop().slideUp("fast");
		}
	});
	
	// モバイルサイズの時のナビゲーションイベント
	$(".level1 > a").on("click", function(){
		if (windowWidth <= mobileSize) {
			$(".select-list").slideUp("fast");
			$(this).parent().siblings().find(".level2-block").slideUp("fast");
			$(this).parent().siblings().removeClass("on");
			if($(this).parent().hasClass("on")){
				$(this).next(".level2-block").slideUp("fast");
				$(this).parent().removeClass("on");
			}else{
				$(this).next(".level2-block").slideDown("fast");
				$(this).parent().addClass("on");
			}
			if($(this).siblings().parent().find("ul").length){
				return false; //遷移させない
			}
		}
	});
	

	// フッター
	// モバイルサイズの時のナビゲーションイベント
	$(".footer-level1 > a").on("click", function(){
		if (windowWidth <= mobileSize) {
			$(this).parent().siblings().find(".footer-level2-block").slideUp("fast");
			$(this).parent().siblings().removeClass("on");
			if($(this).parent().hasClass("on")){
				$(this).next(".footer-level2-block").slideUp("fast");
				$(this).parent().removeClass("on");
			}else{
				$(this).next(".footer-level2-block").slideDown("fast");
				$(this).parent().addClass("on");
			}
			if($(this).siblings().parent().find("ul").length){
				return false; //遷移させない
			}
		}
	});
	
	
	// 言語切替ボタン
	$(".select-btn").on("click", function(){
		$(this).children(".select-list").slideToggle("fast");
		$(this).parent().siblings().find(".level2-block").slideUp("fast");
		$(this).parent().siblings().removeClass("on");
	});
	$(".select-btn").mouseleave(function(){
		if (windowWidth > mobileSize){
			$(this).children(".select-list").slideUp("fast");
		}
	});

	
	
	// スムーズスクロール
	var adjust = 0; // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
	var speed = 500; // スクロールの速度（ミリ秒）
	if (windowWidth <= mobileSize) {
		adjust = -$('.header-block').outerHeight(); //モバイルサイズ以下の時はヘッダー分ずらす
	}
	// 【トップページボタン】スクロールが80に達したらボタン表示
	var topBtn=$('.page-top');
	$(window).scroll(function() {
		if ($(this).scrollTop() > 80) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	// 【トップページボタン】スクロールしてトップへ
	topBtn.click(function () {
		$('body,html').animate({scrollTop: 0}, speed);
/*		return false;*/
	});
	// 【ページ内リンク】#で始まるa要素をクリックした場合に処理
	$('a[href^="#"]').click(function(){
		var href= $(this).attr("href"); // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
		var target = $(href == "#" || href == "" ? 'html' : href); // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
		var position = target.offset().top + adjust; // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
		$('body,html').animate({scrollTop:position}, speed);
		return false;
	});
	// 【ページ外からのページ内リンク】
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function(){
			var target = $(urlHash);
			var position = target.offset().top + adjust;
			$('body,html').animate({scrollTop:position}, speed);
		}, 100);
	}
});