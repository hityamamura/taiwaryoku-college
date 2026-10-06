/* 対話力カレッジ 公式サイト */
(function () {
  'use strict';

  // 公式LINE（変えるときはこの1行だけ）
  var LINE_URL = 'https://line.me/R/ti/p/@320tahuo';

  // 公式LINEのボタン（data-line のついたリンクすべて）
  var lineLinks = document.querySelectorAll('[data-line]');
  for (var i = 0; i < lineLinks.length; i++) {
    lineLinks[i].setAttribute('href', LINE_URL);
    lineLinks[i].setAttribute('target', '_blank');
    lineLinks[i].setAttribute('rel', 'noopener');
  }

  // スマホのメニュー開閉
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    var navLinks = nav.querySelectorAll('a');
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].addEventListener('click', function () { setMenu(false); });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // スクロールに合わせて、ヘッダーの背景とスマホの申込ボタンを出す
  var header = document.getElementById('siteHeader');
  var floatCta = document.getElementById('floatCta');
  var contact = document.getElementById('contact');
  var ticking = false;
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 20);
    if (floatCta) {
      var nearContact = false;
      if (contact) {
        var r = contact.getBoundingClientRect();
        nearContact = r.top < window.innerHeight && r.bottom > 0;
      }
      floatCta.classList.toggle('is-visible', y > 600 && !nearContact);
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();
})();
