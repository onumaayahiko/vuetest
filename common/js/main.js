//親コンポーネント
const app = Vue.createApp();
app.component('header-content', headerContent); //コンポーネントのグローバル登録
app.component('content', content); //コンポーネントのグローバル登録
app.component('footer-content', footerContent); //コンポーネントのグローバル登録
app.mount("#app"); //id="app"要素にマウントされる





///////////////////////////////////////////////////////
// //アプリケーションインスタンスの作成
// const app = Vue.createApp({
//   template: 
//   `
//   ..ここにテンプレート..`,
//   components: {
//     ..ここにインポートするローカルコンポーネント..
//   },
//   setup() {
//     ..ここにリアクティブデータ or 関数 or 算出プロパティ..
//   }
// }).mount("#app");

///////////////////////////////////////////////////////
// //コンポーネントのグローバル登録
// const app = Vue.createApp({});
// app.component('component-a', {
//   /* ... */
// });
// app.component('component-b', {
//   /* ... */
// });
// app.component('component-c', {
//   /* ... */
// });
// app.mount('#app');

///////////////////////////////////////////////////////
// リアクティブ
// リアクティブデータはvar,let,const等で定義して値にVue.ref(...)またはVue.reactive(...)をつける
//
///////////////////////////////////////////////////////
// ref -> 使用できる型（string, boolean, object）
// setup() {
//   const count = ref(0);
//   console.log(count.value); //script内では.valueをつける必要あり
// },
// return {count}; //リアクティブデータを使うには return が必要
//
// template: `
// <div class="container">
//   <button type="button" @click="count++">count is: {{ count }}</button> //テンプレート内では.valueはいらない
// </div>`
//
///////////////////////////////////////////////////////
// reactive -> 使用できる型（object）
// setup() {
//   const state = reactive({
//     count: 0,
//   });
//   console.log(state.count); //通常のobjectと同様の扱い
// },
// return {count};
//
// template: `
// <button type="button" @click="state.count++">
//   count is: {{ state.count }} //通常のobjectと同様の扱い
// </button>`








