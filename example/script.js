// ========================================
// Coffee Festa 2026 - JavaScript
// ========================================

// jQueryの $(document).ready() を使用
// ページの読み込みが完了してから処理を実行
$(document).ready(function () {
  // ========================================
  // ハンバーガーメニューの開閉
  // ========================================
  $('#hamburger').on('click', function () {
    // ハンバーガーボタンに is-active クラスを切り替え
    $(this).toggleClass('is-active');

    // モバイルメニューに is-open クラスを切り替え
    $('#mobile-menu').toggleClass('is-open');
  });

  // メニューリンクをクリックしたらメニューを閉じる
  $('.mobile-menu__link').on('click', function () {
    $('#hamburger').removeClass('is-active');
    $('#mobile-menu').removeClass('is-open');
  });

  // ========================================
  // 予約ボタンのクリック処理
  // ========================================
  $('#reserve-btn').on('click', function () {
    alert('予約開始時にお知らせします！\n（※これはサンプルのアラートです）');
  });

  // ========================================
  // スクロール時のヘッダー効果
  // ========================================
  $(window).on('scroll', function () {
    // スクロール量が100px以上ならヘッダーに影を追加
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('is-scrolled');
    } else {
      $('.header').removeClass('is-scrolled');
    }
  });

  // ========================================
  // コンソールにメッセージを表示（デバッグ用）
  // ========================================
  console.log('Coffee Festa 2026 のスクリプトが読み込まれました！');
  console.log('開発者ツールのConsoleで確認できます。');
});
