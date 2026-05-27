/**
 * Layout.js - Shared component injector (NO SERVER REQUIRED)
 * All component HTML is embedded directly as template literals.
 * Works with file:// protocol - just open HTML in browser.
 */
(function() {
  'use strict';

  // ==================== COMPONENT TEMPLATES ====================

  var HEADER_HTML = '<div class="sutong-sitetop">\
  <div class="container">\
    <span class="fl sutong-mo-header-menu">\
      <i class="qico qico-caidan"></i>\
    </span>\
    <div class="sutong-sitetop-left wow fadeInLeft">\
      <p class="email">\
        <i class="qico qico-youxiang"></i>\
        <a aria-label="email" href="mailto:info@targetmakina.com.tr">info@targetmakina.com.tr</a>\
      </p>\
    </div>\
    <div class="sutong-sitetop-right wow fadeInRight">\
      <span class="sutong-mo-header-search">\
        <i class="qico qico-search3"></i>\
      </span>\
      <div class="sutong-search">\
        <span><i class="qico qico-search3"></i></span>\
      </div>\
      <div class="line"></div>\
      <div class="lang-selector header-lang notranslate">\
        <div class="current-lang">\
          <img src="assets/tpl-common/common/images/flags.png" width="30" height="20" alt="EN" style="object-position: -384px -38px">\
          <em>EN</em>\
        </div>\
      </div>\
      <div class="sutong-share">\
        <a aria-label="instagram" href="https://www.instagram.com/halil_senturk35/?hl=tr" rel="nofollow" target="_blank">\
          <i class="iconfont iconfont-instagram"></i>\
        </a>\
        <a aria-label="facebook" href="https://www.facebook.com/halil.senturk.545195" rel="nofollow" target="_blank">\
          <i class="iconfont iconfont-facebook"></i>\
        </a>\
      </div>\
    </div>\
  </div>\
</div>\
\
<div class="sutong-search-box search-box-only">\
  <div class="box">\
    <form class="serchbox cl" name="search" action="javascript:void(0)">\
      <input type="hidden" name="type" value="product">\
      <input class="submit_text" type="text" name="keys" placeholder="Arama">\
      <button aria-label="submit" type="submit" class="submit_btn">\
        <i class="qico qico-search"></i>\
      </button>\
    </form>\
    <a aria-label="close" class="close" href="javascript:void(0)">\
      <i class="qico qico-guanbi"></i>\
    </a>\
  </div>\
</div>\
\
<div class="sutong-mo-leftmenu">\
  <div class="tit cl">\
    <h6>Tüm Kategoriler</h6>\
    <span><i class="qico qico-guanbi"></i></span>\
  </div>\
  <ul>\
    <li>\
      <a aria-label="Hizmetler" href="capabilities.html">Hizmetler</a>\
      <i class="qico qico-down sutong-down-btn"></i>\
      <ul>\
        <li><a aria-label="5 Eksen CNC İşleme" href="5-axis-cnc-machining.html">5 Eksen CNC İşleme</a></li>\
        <li><a aria-label="CNC Frezeleme" href="cnc-milling.html">CNC Frezeleme</a></li>\
        <li><a aria-label="CNC Tornalama" href="cnc-turning.html">CNC Tornalama</a></li>\
        <li><a aria-label="Parça Montajı" href="components-assembly.html">Parça Montajı</a></li>\
        <li><a aria-label="Dişli İmalatı" href="gear-customization.html">Dişli İmalatı</a></li>\
        <li><a aria-label="Sac Şekillendirme" href="sheet-metal-fabrication.html">Sac Şekillendirme</a></li>\
      </ul>\
    </li>\
    <li>\
      <a aria-label="Kaynaklar" href="resource.html">Kaynaklar</a>\
      <i class="qico qico-down sutong-down-btn"></i>\
      <ul>\
        <li>\
          <a aria-label="Örnek Çalışmalar" href="case-studies.html">Örnek Çalışmalar</a>\
          <i class="qico qico-down sutong-down-btn"></i>\
          <ul>\
            <li><a aria-label="Otomotiv Parçaları" href="automobile-components.html">Otomotiv Parçaları</a></li>\
            <li><a aria-label="Günlük Tüketim Ürünleri" href="daily-consumable.html">Günlük Tüketim Ürünleri</a></li>\
            <li><a aria-label="Spor Ekipmanları" href="competitive-sports.html">Spor Ekipmanları</a></li>\
            <li><a aria-label="Makina ve Aktarım" href="machinery-and-transmission.html">Makina ve Aktarım</a></li>\
          </ul>\
        </li>\
        <li><a aria-label="Malzemeler" href="materials.html">Malzemeler</a></li>\
        <li><a aria-label="Yüzey Kaplama" href="surface-treatment.html">Yüzey Kaplama</a></li>\
        <li><a aria-label="SSS" href="faq.html">SSS</a></li>\
      </ul>\
    </li>\
          <li>\
        <a aria-label="Makina Parkuru" href="makina-parkuru.html">Makina Parkuru</a>\
        <i class="qico qico-down"></i>\
        <ul>\
          <li><a aria-label="Sodick VL400Q" href="sodick-vl400q.html">Sodick VL400Q</a></li>\
          <li><a aria-label="Sodick AQ537L" href="sodick-aq537l.html">Sodick AQ537L</a></li>\
          <li><a aria-label="DMG Ecomill 600V" href="dmg-ecomill-600v.html">DMG Ecomill 600V</a></li>\
          <li><a aria-label="DMG Ecomill 70" href="dmg-ecomill-70.html">DMG Ecomill 70</a></li>\
          <li><a aria-label="Hexagon CMM" href="hexagon-cmm.html">Hexagon CMM</a></li>\
        </ul>\
      </li>\
          <li>\
      <a aria-label="Makina Parkuru" href="makina-parkuru.html">Makina Parkuru</a>\
      <i class="qico qico-down sutong-down-btn"></i>\
      <ul>\
        <li><a aria-label="Sodick VL400Q" href="sodick-vl400q.html">Sodick VL400Q</a></li>\
        <li><a aria-label="Sodick AQ537L" href="sodick-aq537l.html">Sodick AQ537L</a></li>\
        <li><a aria-label="DMG Ecomill 600V" href="dmg-ecomill-600v.html">DMG Ecomill 600V</a></li>\
        <li><a aria-label="DMG Ecomill 70" href="dmg-ecomill-70.html">DMG Ecomill 70</a></li>\
        <li><a aria-label="Hexagon CMM" href="hexagon-cmm.html">Hexagon CMM</a></li>\
      </ul>\
    </li>\
    <li><a aria-label="Haberler" href="news.html">Haberler</a></li>\
    <li><a aria-label="Hakkımızda" href="about-us.html">Hakkımızda</a></li>\
    <li><a aria-label="İletişim" href="contact-us.html">İletişim</a></li>\
  </ul>\
</div>\
\
<div class="sutong-header">\
  <div class="container">\
    <div class="sutong-logo wow fadeInLeft">\
      <a aria-label="home" href="index.html">\
        <img src="assets/images/target-makina-logo.png" alt="TARGET MAKİNA" >\
      </a>\
    </div>\
    <div class="sutong-header-right wow fadeInRight">\
      <div class="sutong-nav">\
        <ul>\
          <li>\
            <a aria-label="Hizmetler" href="capabilities.html">Hizmetler</a>\
            <ul>\
              <li><a aria-label="5 Eksen CNC İşleme" href="5-axis-cnc-machining.html">5 Eksen CNC İşleme</a></li>\
              <li><a aria-label="CNC Frezeleme" href="cnc-milling.html">CNC Frezeleme</a></li>\
              <li><a aria-label="CNC Tornalama" href="cnc-turning.html">CNC Tornalama</a></li>\
              <li><a aria-label="Parça Montajı" href="components-assembly.html">Parça Montajı</a></li>\
              <li><a aria-label="Dişli İmalatı" href="gear-customization.html">Dişli İmalatı</a></li>\
              <li><a aria-label="Sac Şekillendirme" href="sheet-metal-fabrication.html">Sac Şekillendirme</a></li>\
            </ul>\
          </li>\
          <li>\
            <a aria-label="Kaynaklar" href="resource.html">Kaynaklar</a>\
            <ul>\
              <li>\
                <a aria-label="Örnek Çalışmalar" href="case-studies.html">Örnek Çalışmalar</a>\
                <i class="qico qico-right"></i>\
                <ul style="display:block;">\
                  <li><a aria-label="Otomotiv Parçaları" href="automobile-components.html">Otomotiv Parçaları</a></li>\
                  <li><a aria-label="Günlük Tüketim Ürünleri" href="daily-consumable.html">Günlük Tüketim Ürünleri</a></li>\
                  <li><a aria-label="Spor Ekipmanları" href="competitive-sports.html">Spor Ekipmanları</a></li>\
                  <li><a aria-label="Makina ve Aktarım" href="machinery-and-transmission.html">Makina ve Aktarım</a></li>\
                </ul>\
              </li>\
              <li><a aria-label="Malzemeler" href="materials.html">Malzemeler</a></li>\
              <li><a aria-label="Yüzey Kaplama" href="surface-treatment.html">Yüzey Kaplama</a></li>\
              <li><a aria-label="SSS" href="faq.html">SSS</a></li>\
            </ul>\
          </li>\
              <li>\
      <a aria-label="Makina Parkuru" href="makina-parkuru.html">Makina Parkuru</a>\
      <i class="qico qico-down sutong-down-btn"></i>\
      <ul>\
        <li><a aria-label="Sodick VL400Q" href="sodick-vl400q.html">Sodick VL400Q</a></li>\
        <li><a aria-label="Sodick AQ537L" href="sodick-aq537l.html">Sodick AQ537L</a></li>\
        <li><a aria-label="DMG Ecomill 600V" href="dmg-ecomill-600v.html">DMG Ecomill 600V</a></li>\
        <li><a aria-label="DMG Ecomill 70" href="dmg-ecomill-70.html">DMG Ecomill 70</a></li>\
        <li><a aria-label="Hexagon CMM" href="hexagon-cmm.html">Hexagon CMM</a></li>\
      </ul>\
    </li>\
    <li><a aria-label="Haberler" href="news.html">Haberler</a></li>\
          <li><a aria-label="Hakkımızda" href="about-us.html">Hakkımızda</a></li>\
          <li><a aria-label="İletişim" href="contact-us.html">İletişim</a></li>\
        </ul>\
      </div>\
      <a aria-label="Teklif Al" class="quote cd-popup-trigger" href="javascript:void(0)">Teklif Al</a>\
      <span class="sutong-mo-header-menu">\
        <i class="qico qico-caidan"></i>\
      </span>\
    </div>\
  </div>\
</div>';

  var FOOTER_HTML = '<footer>\
  <div class="rightint-footer">\
    <div class="container">\
      <div class="row">\
        <div class="rightint-foot-logo col-lg-3 col-md-6 col-12">\
          <img src="assets/images/target-makina-logo.png" alt="TARGET MAKİNA">\
        </div>\
        <div class="rightint-foot-list col-lg-3 col-md-6 col-12">\
          <h5>Hızlı Bağlantılar</h5>\
          <ul>\
            <li><a href="capabilities.html">Hizmetler</a></li>\
            <li><a href="resource.html">Kaynaklar</a></li>\
            <li><a href="news.html">Haberler</a></li>\
            <li><a href="makina-parkuru.html">Makina Parkuru</a></li>\
            <li><a href="about-us.html">Hakkımızda</a></li>\
            <li><a href="contact-us.html">İletişim</a></li>\
            <li><a href="blog.html">Blog</a></li>\
          </ul>\
        </div>\
        <div class="rightint-foot-list col-lg-3 col-md-6 col-12">\
          <h5>Hizmetler</h5>\
          <ul>\
            <li><a href="5-axis-cnc-machining.html">5 Eksen CNC İşleme</a></li>\
            <li><a href="cnc-milling.html">CNC Frezeleme</a></li>\
            <li><a href="cnc-turning.html">CNC Tornalama</a></li>\
            <li><a href="components-assembly.html">Parça Montajı</a></li>\
            <li><a href="gear-customization.html">Dişli İmalatı</a></li>\
            <li><a href="sheet-metal-fabrication.html">Sac Şekillendirme</a></li>\
          </ul>\
        </div>\
        <div class="rightint-foot-contact col-lg-3 col-md-6 col-12">\
          <h5>İletişim</h5>\
          <p>Adres: Evka 3 Mahallesi 129/6 Sokak No:17 Bornova İzmir</p>\
          <p>Tel: <a href="tel:905443563972">0544 356 39 72</a></p>\
          <p>E-mail: <a href="mailto:info@targetmakina.com.tr">info@targetmakina.com.tr</a></p>\
        </div>\
      </div>\
    </div>\
  </div>\
  <div class="rightint-copyright">\
    <div class="container">\
      <p>\
        Copyright &copy; TARGET MAKİNA All Rights Reserved - \
        <a href="privacy.html" target="_blank" rel="nofollow" aria-label="Privacy policy">Privacy Policy</a>\
      </p>\
      <div class="share">\
        <a href="https://www.instagram.com/halil_senturk35/?hl=tr" aria-label="instagram" rel="nofollow" target="_blank">\
          <i class="iconfont iconfont-instagram"></i>\
        </a>\
        <a href="https://www.facebook.com/halil.senturk.545195" aria-label="facebook" rel="nofollow" target="_blank">\
          <i class="iconfont iconfont-facebook"></i>\
        </a>\
      </div>\
    </div>\
  </div>\
</footer>';

  var SIDEBAR_HTML = '<div class="derun-side-bar">\
  <a href="tel:905443563972" target="_blank" aria-label="tel">\
    <i class="qico qico-tel"></i>\
  </a>\
  <a href="https://api.whatsapp.com/send?phone=905443563972" target="_blank" aria-label="whatsapp" rel="nofollow">\
    <i class="qico qico-whatsapp"></i>\
  </a>\
  <a href="mailto:info@targetmakina.com.tr" target="_blank" aria-label="email">\
    <i class="qico qico-email"></i>\
  </a>\
  <a href="javascript:void(0)" aria-label="inquiry" class="cd-popup-trigger">\
    <i class="qico qico-comments2"></i>\
  </a>\
</div>';

  var POPUP_HTML = '<section class="click-popup custom-pop-inquiry">\
  <div class="div_info">\
    <a aria-label="close" href="javascript:void(0)" title="close" class="cd-popup-close img-replace qico qico-guanbi"></a>\
    <div class="crm_inquiry_form_boxcustom_inquiry_form_1767162044577484">\
      <div class="container">\
        <div class="row">\
          <div class="col-lg-12 inqury_title_box text-center">\
            <h2 class="inqury_title_text" style="margin-bottom: 10px;">Ücretsiz Teklif Alın</h2>\
            <div class="inqury_titl_desc">Temsilcimiz en kısa sürede sizinle iletişime geçecektir.</div>\
          </div>\
        </div>\
        <div class="row">\
          <div class="col-lg-12">\
            <form action="javascript:void(0)" class="inqury-form form" id="inqury-form" novalidate>\
              <input type="hidden" name="form_id" value="64172332903379" hidden title="form_id">\
              <input type="hidden" value="" id="pagetitle" name="pagetitle" title="pagetitle">\
              <div class="input-wrap text-wrap full">\
                <div class="input-label required">E-posta</div>\
                <div class="input-wrap-box">\
                  <input name="email" type="text" class="one-line-input" placeholder="Lütfen e-posta adresinizi girin" required maxlength="100" title="email">\
                  <div class="char-count"></div>\
                </div>\
              </div>\
              <div class="input-wrap text-wrap full">\
                <div class="input-label">Ad Soyad</div>\
                <div class="input-wrap-box">\
                  <input name="name" type="text" class="one-line-input" placeholder="Lütfen adınızı girin" maxlength="100" title="name">\
                  <div class="char-count"></div>\
                </div>\
              </div>\
              <div class="input-wrap phone-wrap full">\
                <div class="input-label required">Telefon</div>\
                <div class="d-flex input-wrap-box">\
                  <select class="selectpicker form-control" id="phoneCode" data-container="body" data-live-search="true" title="Kod" data-hide-disabled="true" name="code" data-size="10" required></select>\
                  <div class="phone-wrap-input-content">\
                    <input name="mobile" type="number" placeholder="Lütfen telefon numaranızı girin" class="phone_number" required maxlength="16" title="mobile">\
                    <div class="char-count"></div>\
                  </div>\
                </div>\
              </div>\
              <div class="input-wrap text-wrap full">\
                <div class="input-label">Firma Adı</div>\
                <div class="input-wrap-box">\
                  <input name="company" type="text" class="one-line-input" placeholder="Lütfen firma adınızı girin" maxlength="200" title="company">\
                  <div class="char-count"></div>\
                </div>\
              </div>\
              <div class="input-wrap textarea-wrap full">\
                <div class="input-label required">Mesaj</div>\
                <textarea name="message" cols="30" rows="10" class="textarea-input" placeholder="Lütfen mesajınızı buraya yazın" required maxlength="1000" title="message"></textarea>\
                <span class="char-count">0/1000</span>\
              </div>\
              <div class="input-wrap full">\
                <div class="text-center">\
                  <button type="submit" class="inqury_submit submit create-form-submit" aria-label="submit">Gönder</button>\
                </div>\
              </div>\
            </form>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
</section>';

  // ==================== CSS FILES TO LOAD ====================
  var COMPONENT_CSS = [
    'assets/inst/3579/4204/482129/sections/sutong_head/index.css',
    'assets/inst/3579/4204/482129/sections/lang_selector_1760403311325535/index.css',
    'assets/inst/3579/4204/482129/sections/rightint_foot/index.css',
    'assets/inst/3579/4204/482129/sections/deus_side_bar_1767162044631331/index.css',
    'assets/tpl-common/common/css/form.css',
    'assets/tpl-common/common/css/bootstrap-select.min.css',
    'assets/inst/3579/4204/482129/sections/custom_pop_inquiry_form_1767162044970915/index.css',
    'assets/inst/3579/4204/482129/sections/custom_inquiry_form_1767162044577484/index.css'
  ];

  // ==================== INJECT COMPONENTS ====================
  function injectComponents() {
    // Load CSS into <head>
    COMPONENT_CSS.forEach(function(href) {
      if (!document.querySelector('link[href="' + href + '"]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        document.head.appendChild(link);
      }
    });

    // Inject HTML into placeholders
    var header = document.getElementById('site-header');
    if (header) header.innerHTML = HEADER_HTML;

    var footer = document.getElementById('site-footer');
    if (footer) footer.innerHTML = FOOTER_HTML;

    var sidebar = document.getElementById('site-sidebar');
    if (sidebar) sidebar.innerHTML = SIDEBAR_HTML;

    var popup = document.getElementById('quote-popup');
    if (popup) popup.innerHTML = POPUP_HTML;

    // Initialize interactive features
    initLazyLoading();
    initPopupTriggers();
    initMobileMenu();
    initStickyHeader();
    initActiveNav();
    initAramaBox();
    initWow();
  }

  // ==================== FEATURES ====================

  function initLazyLoading() {
    var lazyImages = [].slice.call(document.querySelectorAll('img[data-src]'));
    var lazyBgImages = [].slice.call(document.querySelectorAll('[data-bg]'));
    var lazys = lazyImages;

    if ('IntersectionObserver' in window && (lazys.length > 0 || lazyBgImages.length > 0)) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.intersectionRatio > 0) {
            var src = entry.target.getAttribute('data-src');
            var bgUrl = entry.target.getAttribute('data-bg');
            if (src) {
              entry.target.setAttribute('src', src);
              entry.target.removeAttribute('data-src');
            }
            if (bgUrl) {
              var style = entry.target.getAttribute('style') || '';
              entry.target.setAttribute('style', 'background-image:url(' + bgUrl + ');' + style);
              entry.target.removeAttribute('data-bg');
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: [0, 0.1], rootMargin: '50px' });

      lazys.concat(lazyBgImages).forEach(function(el) {
        observer.observe(el);
      });
    }
  }

  function initPopupTriggers() {
    document.addEventListener('click', function(e) {
      var trigger = e.target.closest('.cd-popup-trigger');
      if (trigger) {
        e.preventDefault();
        var popup = document.querySelector('.click-popup');
        if (popup) { popup.classList.add('is-visible'); document.body.style.overflow = 'hidden'; }
      }
      var closeBtn = e.target.closest('.cd-popup-close');
      if (closeBtn) {
        e.preventDefault();
        var p = closeBtn.closest('.click-popup');
        if (p) { p.classList.remove('is-visible'); document.body.style.overflow = ''; }
      }
      if (e.target.classList && e.target.classList.contains('click-popup')) {
        e.target.classList.remove('is-visible');
        document.body.style.overflow = '';
      }
    });
  }

  function initMobileMenu() {
    document.addEventListener('click', function(e) {
      var menuBtn = e.target.closest('.sutong-mo-header-menu');
      if (menuBtn) {
        e.preventDefault();
        var m = document.querySelector('.sutong-mo-leftmenu');
        if (m) m.classList.toggle('open');
      }
      var closeSpan = e.target.closest('.sutong-mo-leftmenu .tit span');
      if (closeSpan) {
        var m2 = document.querySelector('.sutong-mo-leftmenu');
        if (m2) m2.classList.remove('open');
      }
      var downBtn = e.target.closest('.sutong-down-btn');
      if (downBtn) {
        e.preventDefault();
        var sub = downBtn.nextElementSibling;
        if (sub && sub.tagName === 'UL') { sub.classList.toggle('show'); downBtn.classList.toggle('active'); }
      }
    });
  }

  function initStickyHeader() {
    var header = document.querySelector('.sutong-header');
    if (!header) return;
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) { header.classList.add('fixed'); }
      else { header.classList.remove('fixed'); }
    }, { passive: true });
  }

  function initActiveNav() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.sutong-nav a, .sutong-mo-leftmenu a');
    navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
        var parentLi = link.closest('li');
        if (parentLi) parentLi.classList.add('active');
      }
    });
  }

  function initAramaBox() {
    document.addEventListener('click', function(e) {
      var searchBtn = e.target.closest('.sutong-mo-header-search, .sutong-search');
      if (searchBtn) {
        e.preventDefault();
        var sb = document.querySelector('.sutong-search-box');
        if (sb) sb.classList.add('open');
      }
      var closeArama = e.target.closest('.sutong-search-box .close');
      if (closeArama) {
        e.preventDefault();
        var sb2 = document.querySelector('.sutong-search-box');
        if (sb2) sb2.classList.remove('open');
      }
    });
  }

  function initWow() {
    if (typeof WOW !== 'undefined') {
      new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false, live: true }).init();
    }
  }

  // ==================== RUN ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }
})();
