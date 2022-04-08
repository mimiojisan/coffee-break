/*=================================================*/
/*宣言*/
/*=================================================*/

const button = document.getElementById("menu-trigger");
const header = document.getElementById("header");


// ボタンが押されたらクラスを追加する
button.addEventListener('click', function (){
    if ( header.classList.contains("header") == true ) {
        header.classList.remove("header");
    } else {
        header.classList.add("header");
    };
 });