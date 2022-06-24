//子コンポーネント定義
const footerContent = {
	template: 
	`
	<div class="container">

		<div class="menu-wrap">
			<nav class="footer-nav">
				<ul class="menu1">
					<li><a href="#" class="under-line">ホーム</a></li>
					<li><a href="#" class="under-line">寄付・福祉活動</a></li>
					<li><a href="#" class="under-line">お問い合わせ</a></li>
				</ul>
				<ul class="menu2">
					<li><a href="#" class="under-line">会員規約</a></li>
					<li><a href="#" class="under-line">サイトポリシー</a></li>
				</ul>
			</nav>
		</div>

		<div class="logo-wrap">
			<h1><a href="#"><img src="img/logo_matecland_s.svg" alt="マテックランドロゴ" class="logo"></a></h1>
			<small>&copy; 2022 EMS Inc.</small>
		</div>

		<div class="border-line"></div>

		<div class="group-wrap">
			<h2>マテックグループ</h2>
			<ul>
				<li><a href="#"><img src="img/logo_matec.svg" alt="マテック"></a></li>
				<li><a href="#"><img src="img/logo_elv.svg" alt="エルバ北海道"></a></li>
				<li><a href="#"><img src="img/logo_dispo.svg" alt="dispo."></a></li>
				<li><a href="#"><img src="img/logo_ems.svg" alt="EMS"></a></li>
			</ul>
		</div>
		
	</div>`,
};


/////////////////////////////////////////////////////////
// propsの定義方法
//
// 定義1
// props:['title','score'],
//
// 定義2
// props:{
//   title: { //プロパティ名
//     type: String, //データ型
//     default: 'Vue.js', //デフォルト値
//   },
//   score: {
//     type: Nubmer,
//     default: 0
//   }
// },
//
// 定義3
// props:{
//   title: String, //プロパティ名: データ型
//   score: Number
// }
