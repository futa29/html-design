//ハンバーガーメニューをクリックするとナビゲーションが登場
$(".header_menu").click(function(){
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#index_nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

// 項目を選択するとナビゲーションを閉じる
$("#index_nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#index_nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});

//項目以外の場所をクリックしてもナビゲーションを閉じるように設定
$('#index_nav').click(function(){
    $('#index_nav').removeClass('panelactive');
});