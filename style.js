$(function () {

    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function () {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href = $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? "html" : href);
      // 移動先を数値で取得
      var position = target.offset().top - 100;
      // スムーススクロール
      $("body,html").animate(
        { scrollTop: position, scrollLeft: 0 },
        speed,
        "swing"
      );
      return false;
    });
  });


  $(document).ready(function(){
    function toggleChangeBtn() {
        var slideIndex = $('.slide').index($('.active'));/*activeクラスがついている要素(現在表示中のスライド)のindexを取得*/
        $('.button').show();/*両ボタンを表示*/
        if(slideIndex == 0){/*一番最初の要素が表示されているとき*/
            $('.prev').hide();/*prevボタンを隠す。*/
        }else if(slideIndex == $('.slide').length - 1){/*一番最後の要素が表示されているとき*/
            $('.next').hide();/*nextボタンを隠す。*/
        }
    }

    toggleChangeBtn();

    $('.next').click(function() {/*nextボタンを押したとき*/
        var $displaySlide = $('.active');/*現在表示中のスライドを取得*/
        $displaySlide.removeClass('active');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
        $displaySlide.next().addClass('active');/*次のスライドにactiveクラスをつけ、表示させる。*/
        toggleChangeBtn();/*nextボタンを隠すか判断*/

        var $activeMaru = $('.maru-active');
        $activeMaru.removeClass('maru-active');
        $activeMaru.next().addClass('maru-active');
    });
    $('.prev').click(function() {/*prevボタンを押したとき*/
       var $displaySlide = $('.active');/*現在表示中のスライドを取得*/
       $displaySlide.removeClass('active');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
       $displaySlide.prev().addClass('active');/*前のスライドにactiveクラスをつけ、表示させる。*/
       toggleChangeBtn();/*prevボタンを隠すか判断*/

       var $activeMaru = $('.maru-active');
        $activeMaru.removeClass('maru-active');
        $activeMaru.prev().addClass('maru-active');
    });
})




