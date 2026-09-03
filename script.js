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
