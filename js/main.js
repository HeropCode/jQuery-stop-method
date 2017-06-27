$(function () {

  // Initialize
  var $obj = $('.obj'),
    objW = $obj.width(),
    objH = $obj.height(),

    $viewport = $('.viewport'),
    viewW = $viewport.width(),
    viewH = $viewport.height(),

    $speed = $('.speed'),
    duration = parseInt($speed.val()),
    padding = 20;

  // Reset function.
  function reset() {
    $obj
      .finish()
      .css({
        top: padding,
        left: padding
      });
  }

  // When the viewport is resize..
  $(window).on('resize', function () {
    reset();
    objW = $obj.width();
    objH = $obj.height();
    viewW = $viewport.width();
    viewH = $viewport.height();
  });

  // When the speed value changes..
  $speed.on('change', function () {
    duration = parseInt($(this).val());
  });

  // Events
  $('.start').on('click', function () {
    $obj
      .finish() // 애나메이션 동작을 모두 종료
      .css({ // 시작 위치 설정
        top: padding,
        left: padding
      })
      .animate({ // 동작1
        left: viewW - padding - objW
      }, duration)
      .animate({ // 동작2
        top: viewH - padding - objH
      }, duration)
      .animate({ // 동작3
        left: padding
      }, duration);
  });

  $('.stop1').on('click', function () {
    // false: 모든 애니메이션 명령의 대기열(큐)를 종료하지 않음
    // false: 현재 애니메이션 명령의 동작을 마무리하지 않고 다음 동작 실행
    $obj.stop(false, false);
  });
  $('.stop2').on('click', function () {
    // false: 모든 애니메이션 명령의 대기열(큐)를 종료하지 않음
    // true: 현재 애니메이션 명령의 동작을 즉시 마무리하고 다음 동작 실행
    $obj.stop(false, true);
  });
  $('.stop3').on('click', function () {
    // true: 모든 애니메이션 명령의 대기열(큐)를 종료
    // false: 현재 애니메이션 명령의 동작을 마무리하지 않고 다음 동작 실행
    $obj.stop(true, false);
  });
  $('.stop4').on('click', function () {
    // true: 모든 애니메이션 명령의 대기열(큐)를 종료
    // true: 현재 애니메이션 명령의 동작을 즉시 마무리하고 다음 동작 실행
    $obj.stop(true, true);
  });
  $('.finish').on('click', function () {
    // 모든 애니메이션 명령의 대기열을 즉시 마무리
    $obj.finish();
  });

  $('.reset').on('click', function () {
    reset();
  });


});