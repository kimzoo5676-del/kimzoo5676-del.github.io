// 모바일 메뉴: 햄버거 버튼이 nav 목록을 열고 닫는다.
// (styles.css의 .nav-menu.open 규칙과 한 쌍)
(function () {
  var toggle = document.querySelector('.mobile-toggle');
  var menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Infra / Backend 보기 전환: 헤더 버튼(data-set-track)이 <html data-track> 을 바꾸고,
// 고른 값을 localStorage 와 주소(?track=)에 남겨 다른 페이지 · 공유 링크에서도 이어지게 한다.
// (첫 값은 각 페이지 head 의 인라인 스크립트가 정한다. track.css 와 한 쌍)
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-set-track]');

  function apply(track, push) {
    root.setAttribute('data-track', track);
    try { localStorage.setItem('track', track); } catch (e) { /* 저장소를 못 쓰면 이 페이지에서만 바뀐다 */ }
    document.querySelectorAll('.track-toggle [data-set-track]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-track') === track ? 'true' : 'false');
    });
    if (push && window.history && history.replaceState) {
      var url = new URL(location.href);
      url.searchParams.set('track', track);
      history.replaceState(null, '', url);
    }
  }

  apply(root.getAttribute('data-track') || 'infra', false);
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-set-track'), true);
    });
  });
})();

// 스크롤 리빌: 요소가 화면에 들어오면 부드럽게 떠오르며 나타납니다.
// (styles.css의 .reveal / .visible 규칙과 한 쌍)
(function () {
  if (!('IntersectionObserver' in window)) return; // 미지원 브라우저는 그냥 항상 표시

  var els = document.querySelectorAll(
    '.section-header, .highlight-card, .value-card, .skill-row, ' +
    '.project-card, .timeline-item, .detail-block, .detail-meta'
  );

  els.forEach(function (el) {
    el.classList.add('reveal');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) {
    io.observe(el);
  });
})();
