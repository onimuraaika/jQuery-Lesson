$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','#FFCCE5');
  });
});

//$(function(){処理内容})
//「処理内容」に$('セレクタ').on('click', function(){クリック時の処理内容})
//「クリック時の処理内容」

//childrenはHTMLセレクタ要素直下の子要素全てに適応される