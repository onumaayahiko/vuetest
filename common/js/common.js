// JavaScript Document


// 数字の位取り（今のところ使わない）
/*Vue.filter('numberFormat', function(val){
	var num = Number(val);
	return num.toLocaleString();
});*/


$(function(){
	var mobileSize = 1024; //モバイルの画面サイズ

	// スムーズスクロール
	var adjust = 0; // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
	var speed = 500; // スクロールの速度（ミリ秒）
	if (windowWidth <= mobileSize) {
/*
		adjust = -$('.header-block').outerHeight(); //モバイルサイズ以下の時はヘッダー分ずらす
*/
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


// JSON.stringifyしたときにタイムゾーンがJST（日本時間）からUTC（世界標準）に置き換わってしまう問題を解決
Date.prototype.toJSON = function() {
    return this.getFullYear() + '-' + ('0'+(this.getMonth()+1)).slice(-2) + '-' + ('0'+this.getDate()).slice(-2) + 'T' +
     ('0'+this.getHours()).slice(-2) + ':' + ('0'+this.getMinutes()).slice(-2) + ':' + ('0'+this.getSeconds()).slice(-2) + '.000Z';
}
