//子コンポーネント定義
const headerContent = {
	template: 
	`
	<div class="container">
		<div class="right">
			<a href="#" class="login">ログイン</a>
		</div>
		<div class="menu-bg" :class="{'menu-bg-open':open, 'menu-bg-close':!open}"></div>
		<button class="menu-btn" :class="{'menu-open':open, 'menu-close':!open}" @click="open=!open"><span></span><span></span></button>
		<div class="nav-wrap" :class="{'menu-hide':!open}">
			<h1><a href="#"><img src="img/logo_matecland_s.svg" alt="マテックランドロゴ" class="logo"></a></h1>
			<nav class="global-nav">
				<ul>
					<li><a href="#" class="under-line">ホーム</a></li>
					<li><a href="#" class="under-line">寄付・福祉活動</a></li>
					<li><a href="#" class="under-line">お問い合わせ</a></li>
				</ul>
			</nav>
		</div>
	</div>`,

	//setup(props, context){};
	//第1引数のpropsには親コンポーネントから渡されたデータが格納される
	//第2引数のcontextにはOptions APIでVueインスタンスに用意されていたemit・attrs・slotsが格納される
	//props内のデータは props.プロパティ名 で指定する
	setup(props, context) {
		let open = Vue.ref(false);
		
		// スクロール禁止
		function no_scroll() {
			// PCでのスクロール禁止
			document.addEventListener("mousewheel", scroll_control, { passive: false });
			// スマホでのタッチ操作でのスクロール禁止
			document.addEventListener("touchmove", scroll_control, { passive: false });

		}
		// スクロール禁止解除
		function return_scroll() {
			// PCでのスクロール禁止解除
			document.removeEventListener("mousewheel", scroll_control, { passive: false });
			// スマホでのタッチ操作でのスクロール禁止解除
			document.removeEventListener('touchmove', scroll_control, { passive: false });
		}

		// スクロール関連メソッド
		function scroll_control(event) {
			event.preventDefault();
			console.log("aaa");

		}
		
		// メニューオープン時はスクロール禁止
		if(open == true){
			no_scroll();
		}else{
			return_scroll();
		}
		
		// //「セール対象」のチェック状態（true：チェック有り、false：チェック無し）
		// let showSaleItem = Vue.ref(false);
		// //「送料無料」のチェック状態（true：チェック有り、false：チェック無し）
		// let showDelvFree = Vue.ref(false);
		// //「並び替え」の選択値（1：標準、2：価格が安い順）
		// let sortOrder = Vue.ref(1);
	
		// // 「並び替え」の選択値が変わったとき呼び出されるメソッFド
		// const sortOrderChanged = (order) => {
		// 	// 現在の選択値を新しい選択値で上書きする
		// 	sortOrder.value = order;
		// }

		// // 絞り込み後の商品リストを返す算出プロパティ
		// const filteredList = Vue.computed(() => { //算出プロパティにはVue.computed(...)をつける
		// 	// 絞り込み後の商品リストを格納する新しい配列
		// 	var newList = [];
		// 	for (var i=0; i<props.products.length; i++) {
				
		// 		// 表示対象かどうかを判定するフラグ
		// 		var isShow = true;
		// 		// i番目の商品が表示対象かどうかを判定する
		// 		if (showSaleItem.value && !props.products[i].isSale) {
		// 		//「セール対象」チェック有りで、セール対象商品ではない場合
		// 		isShow = false;  // この商品は表示しない
		// 		}
		// 		if (showDelvFree.value && props.products[i].delv > 0) {
		// 		//「送料無料」チェック有りで、送料有りの商品の場合
		// 		isShow = false;  // この商品は表示しない
		// 		}
		// 		// 表示対象の商品だけを新しい配列に追加する
		// 		if (isShow) {
		// 		newList.push(props.products[i]);
		// 		}
		// 	}
		// 	// 新しい配列を並び替える
		// 	if (sortOrder.value == 1) {
		// 		// 元の順番にpushしているので並び替え済み
		// 	}
		// 	else if (sortOrder.value == 2) {
		// 		// 価格が安い順に並び替える
		// 		newList.sort(function(a,b){
		// 		return a.price - b.price;
		// 		});
		// 	}
			
		// 	// 絞り込み後の商品リストを返す
		// 	return newList;
		// });
		// return {showSaleItem, showDelvFree, sortOrder, sortOrderChanged, filteredList};
		return {open};
	}
};




