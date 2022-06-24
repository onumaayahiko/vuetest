//子コンポーネント定義
const content = {
	template: 
	`
	<div class="container">
		<section class="section1">
			<h2 class="page-title"><img src="img/membership_m.svg" alt="" class="icon">タイトル<span>スパンspan</span></h2>
			<h3 class="section-title">見出し<span>スパンspan</span></h3>
			<div>
				<a href="" class="link-btn1">ボタン</a>
				<a href="" class="link-btn1"><span class="material-symbols-rounded mail"></span>ボタン</a>
				<a href="" class="link-btn1"><img src="img/cart_s.svg" alt="" class="icon">ボタン</a>
			</div>
			<div>
				<a href="" class="link-btn2">ボタン</a>
				<a href="" class="link-btn2"><span class="material-symbols-rounded mail"></span>ボタン</a>
				<a href="" class="link-btn2"><img src="img/cart_s.svg" alt="" class="icon">ボタン</a>
			</div>
			<div><p>あいうえおかきくけこ<br>さしすせそたちつてと</p></div>
			<div><p>あいうえおかきくけこ<br>さしすせそたちつてと</p></div>
			<div><a href="" class="text-link">ボタン</a></div>
		</section>
		<div class="page-top"><span class="material-symbols-rounded arrow_up"></span></div>
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
