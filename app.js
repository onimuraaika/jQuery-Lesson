$(function(){
  $('.box1').on('click',function(){ //クリックするとグレーに変わる
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){ //マウスアウトするとピンクに戻る
    $('.box1').removeClass('box1-ext');
  });
});

//①.click(function)はクリック時の処理を設定
//②.on('イベント名',function)はイベント発生時に実行する処理を設定
//①②を組み合わせて、
//$('セレクタ名').on('click', function(){イベント発生時に実行する処理)}