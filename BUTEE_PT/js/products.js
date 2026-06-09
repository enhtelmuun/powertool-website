/* =============================================================
   POWERTOOL — Бүтээгдэхүүний каталог render логик / Catalog renderer
   Depends on: js/products-data.js  (window.PT_CATALOG)
   Renders the hub (#catalog) and the detail page (#detail),
   and provides the shared language switch + burger menu.
   ============================================================= */
(function () {
  'use strict';
  var C = window.PT_CATALOG || { categories: [], products: [] };

  /* bilingual -> two spans toggled by CSS; plain string -> as is */
  function bi(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return '<span class="lang-mn">' + (o.mn || '') + '</span>' +
           '<span class="lang-en">' + (o.en || '') + '</span>';
  }
  function byId(id) {
    for (var i = 0; i < C.products.length; i++) { if (C.products[i].id === id) return C.products[i]; }
    return null;
  }
  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&]+)').exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }
  function badges(arr) {
    if (!arr || !arr.length) return '';
    return '<div class="badges">' + arr.map(function (b) {
      return '<span class="badge">' + b + '</span>';
    }).join('') + '</div>';
  }

  /* ---------------- HUB ---------------- */
  function card(p) {
    return '<a class="prod-card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="thumb"><span class="brand-chip">' + p.brand + '</span>' +
        '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.opacity=0">' +
      '</div>' +
      '<div class="body">' +
        '<div class="ptype">' + bi(p.type) + '</div>' +
        '<h3>' + p.name + '</h3>' +
        '<div class="ptag">' + bi(p.tagline) + '</div>' +
        badges((p.badges || []).slice(0, 3)) +
        '<span class="more"><span class="lang-mn">Дэлгэрэнгүй</span>' +
          '<span class="lang-en">View details</span><span class="arr">&rarr;</span></span>' +
      '</div></a>';
  }

  function renderHub(el) {
    var html = '';
    C.categories.forEach(function (cat) {
      var items = C.products.filter(function (p) { return p.category === cat.id; });
      html += '<section class="cat-section" id="' + cat.id + '"><div class="wrap">' +
        '<div class="cat-head">' +
          '<div class="brand-tag">' + cat.brand + '</div>' +
          '<h2>' + bi(cat.name) + '</h2>' +
          '<p>' + bi(cat.intro) + '</p>' +
        '</div>' +
        '<div class="prod-grid">' + items.map(card).join('') + '</div>' +
      '</div></section>';
    });
    el.innerHTML = html;
  }

  /* ---------------- DETAIL ---------------- */
  function specTable(g, models) {
    var multi = models && models.length > 1;
    var head = '';
    if (multi) {
      head = '<thead><tr><th class="k"></th>' + models.map(function (m) {
        return '<th>' + m.label + '</th>';
      }).join('') + '</tr></thead>';
    }
    var rows = g.rows.map(function (r) {
      var cells;
      if (r.vals) {
        cells = r.vals.map(function (v) { return '<td class="v">' + v + '</td>'; }).join('');
      } else {
        cells = '<td class="v"' + (multi ? ' colspan="' + models.length + '"' : '') + '>' + bi(r.v) + '</td>';
      }
      return '<tr><td class="k">' + bi(r.k) + '</td>' + cells + '</tr>';
    }).join('');
    return '<div class="spec-group"><h3>' + bi(g.title) + '</h3>' +
      '<table class="spec-table">' + head + '<tbody>' + rows + '</tbody></table></div>';
  }

  function renderDetail(el, p) {
    if (!p) {
      el.innerHTML = '<section class="not-found"><div class="wrap">' +
        '<h1><span class="lang-mn">Бүтээгдэхүүн олдсонгүй</span>' +
            '<span class="lang-en">Product not found</span></h1>' +
        '<p><span class="lang-mn">Уучлаарай, энэ бүтээгдэхүүн байхгүй байна.</span>' +
           '<span class="lang-en">Sorry, this product does not exist.</span></p>' +
        '<a class="btn btn-primary" href="products.html">' +
          '<span class="lang-mn">Бүх бүтээгдэхүүн</span><span class="lang-en">All products</span></a>' +
        '</div></section>';
      return;
    }
    document.title = 'POWERTOOL — ' + p.name;

    var hl = (p.highlights || []).map(function (h) {
      return '<div class="hl-item"><span class="dot">&#10003;</span><span>' + bi(h) + '</span></div>';
    }).join('');
    var specs = (p.specGroups || []).map(function (g) { return specTable(g, p.models); }).join('');

    el.innerHTML =
      '<section class="detail-hero"><div class="wrap">' +
        '<a class="back-link" href="products.html">&larr; ' +
          '<span class="lang-mn">Бүтээгдэхүүн</span><span class="lang-en">Products</span></a>' +
        '<div class="detail-grid">' +
          '<div class="detail-media"><img src="' + p.img + '" alt="' + p.name + '" onerror="this.style.opacity=0"></div>' +
          '<div class="detail-info">' +
            '<div class="brand-tag">' + p.brand + '</div>' +
            '<div class="ptype">' + bi(p.type) + '</div>' +
            '<h1>' + p.name + '</h1>' +
            '<p class="lead">' + bi(p.summary) + '</p>' +
            badges(p.badges) +
            '<div class="detail-actions">' +
              '<a class="btn btn-primary" href="index.html#contact">' +
                '<span class="lang-mn">Санал авах</span><span class="lang-en">Request a quote</span></a>' +
              '<a class="btn btn-ghost" href="products.html">' +
                '<span class="lang-mn">Бусад бүтээгдэхүүн</span><span class="lang-en">Other products</span></a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div></section>' +
      (hl ? '<section class="detail-section"><div class="wrap">' +
            '<h2><span class="lang-mn">Онцлог</span><span class="lang-en">Highlights</span></h2>' +
            '<div class="highlights">' + hl + '</div></div></section>' : '') +
      (specs ? '<section class="specs"><div class="wrap">' +
            '<h2><span class="lang-mn">Техникийн үзүүлэлт</span><span class="lang-en">Specifications</span></h2>' +
            specs + '</div></section>' : '') +
      '<section class="detail-cta"><div class="wrap">' +
        '<h2><span class="lang-mn">Сонирхож байна уу?</span><span class="lang-en">Interested?</span></h2>' +
        '<p><span class="lang-mn">Үнийн санал, техникийн зөвлөгөө авах бол бидэнтэй холбогдоно уу.</span>' +
           '<span class="lang-en">Contact us for pricing and technical advice.</span></p>' +
        '<a class="btn btn-primary" href="index.html#contact">' +
          '<span class="lang-mn">Холбоо барих</span><span class="lang-en">Contact us</span></a>' +
      '</div></section>';
  }

  /* ---------------- SHARED CHROME (lang + burger) ---------------- */
  window.setLanguage = function (lang) {
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('powertool_lang', lang); } catch (e) {}
    var mn = document.getElementById('btn-mn'), en = document.getElementById('btn-en');
    if (mn && en) {
      mn.classList.toggle('active', lang === 'mn');
      en.classList.toggle('active', lang === 'en');
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var hub = document.getElementById('catalog');
    if (hub) renderHub(hub);
    var detail = document.getElementById('detail');
    if (detail) renderDetail(detail, byId(qs('id')));

    var burger = document.getElementById('burger'), links = document.getElementById('navlinks');
    if (burger && links) {
      burger.addEventListener('click', function () { links.classList.toggle('open'); });
    }

    var saved = 'mn';
    try { saved = localStorage.getItem('powertool_lang') || 'mn'; } catch (e) {}
    window.setLanguage(saved);
  });
})();
