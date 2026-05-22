/*!
 * Vrutsa Solutions — Mail Chooser
 * Intercepts clicks on <a href="mailto:..."> links and shows a modal
 * with options: Gmail, Outlook, default mail app, or copy email address.
 * Works regardless of whether the user has a default mail client set.
 */
(function () {
  'use strict';

  var EMAIL = 'contact@vrutsasolutions.com';

  function init() {
    if (document.getElementById('vs-mc-modal')) return; // already initialised

    // ---------- Styles ----------
    var style = document.createElement('style');
    style.textContent = [
      '#vs-mc-modal{display:none;position:fixed;inset:0;z-index:999999;align-items:center;justify-content:center;background:rgba(12,57,111,0.65);font-family:"Manrope",sans-serif;padding:20px;animation:vs-mc-fade .18s ease}',
      '#vs-mc-modal.vs-mc-open{display:flex}',
      '@keyframes vs-mc-fade{from{opacity:0}to{opacity:1}}',
      '.vs-mc-card{background:#fff;border-radius:14px;padding:28px 24px;max-width:380px;width:100%;box-shadow:0 24px 60px rgba(0,0,0,0.28);animation:vs-mc-slide .22s ease;box-sizing:border-box}',
      '@keyframes vs-mc-slide{from{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:1}}',
      '.vs-mc-title{margin:0 0 6px;color:#0C396F;font-family:"DM Serif Display",serif;font-weight:400;font-size:1.45rem;line-height:1.2}',
      '.vs-mc-sub{margin:0 0 18px;color:#475569;font-size:0.92rem;line-height:1.45}',
      '.vs-mc-options{display:flex;flex-direction:column;gap:9px}',
      '.vs-mc-btn{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:9px;text-decoration:none;font-weight:600;font-size:.95rem;font-family:"Manrope",sans-serif;cursor:pointer;border:none;text-align:left;transition:transform .12s,box-shadow .15s,background .15s;line-height:1.2}',
      '.vs-mc-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,0.12)}',
      '.vs-mc-primary{background:#0C396F;color:#fff}',
      '.vs-mc-primary:hover{background:#0a2f5a;color:#fff}',
      '.vs-mc-secondary{background:#1A6FC4;color:#fff}',
      '.vs-mc-secondary:hover{background:#155ba5;color:#fff}',
      '.vs-mc-tertiary{background:#f1f5f9;color:#0C396F}',
      '.vs-mc-tertiary:hover{background:#e2e8f0;color:#0C396F}',
      '.vs-mc-cancel{margin-top:14px;width:100%;padding:10px;border-radius:8px;background:transparent;border:1px solid #cbd5e1;color:#64748b;font-weight:500;cursor:pointer;font-family:"Manrope",sans-serif;font-size:.9rem;transition:background .15s}',
      '.vs-mc-cancel:hover{background:#f8fafc}',
      '.vs-mc-ico{font-size:1.1rem;line-height:1}'
    ].join('');
    document.head.appendChild(style);

    // ---------- Modal HTML ----------
    var modal = document.createElement('div');
    modal.id = 'vs-mc-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'vs-mc-title');
    modal.innerHTML =
      '<div class="vs-mc-card">' +
        '<h3 id="vs-mc-title" class="vs-mc-title">Send us a message</h3>' +
        '<p class="vs-mc-sub">Choose how you would like to email <strong>' + EMAIL + '</strong>:</p>' +
        '<div class="vs-mc-options">' +
          '<a id="vs-mc-gmail" href="#" target="_blank" rel="noopener" class="vs-mc-btn vs-mc-primary"><span class="vs-mc-ico">📧</span>Open in Gmail</a>' +
          '<a id="vs-mc-outlook" href="#" target="_blank" rel="noopener" class="vs-mc-btn vs-mc-secondary"><span class="vs-mc-ico">📧</span>Open in Outlook</a>' +
          '<a id="vs-mc-mailto" href="#" class="vs-mc-btn vs-mc-tertiary"><span class="vs-mc-ico">💻</span>Use my default mail app</a>' +
          '<button id="vs-mc-copy" type="button" class="vs-mc-btn vs-mc-tertiary"><span class="vs-mc-ico">📋</span>Copy email address</button>' +
        '</div>' +
        '<button id="vs-mc-cancel" type="button" class="vs-mc-cancel">Cancel</button>' +
      '</div>';
    document.body.appendChild(modal);

    var elGmail   = modal.querySelector('#vs-mc-gmail');
    var elOutlook = modal.querySelector('#vs-mc-outlook');
    var elMailto  = modal.querySelector('#vs-mc-mailto');
    var elCopy    = modal.querySelector('#vs-mc-copy');
    var elCancel  = modal.querySelector('#vs-mc-cancel');

    function open()  { modal.classList.add('vs-mc-open'); }
    function close() { modal.classList.remove('vs-mc-open'); }

    function parseMailto(href) {
      var noProto = String(href).replace(/^mailto:/i, '');
      var qIdx = noProto.indexOf('?');
      var to = qIdx < 0 ? noProto : noProto.slice(0, qIdx);
      var qs = qIdx < 0 ? '' : noProto.slice(qIdx + 1);
      var params;
      try { params = new URLSearchParams(qs); } catch (e) { params = null; }
      return {
        to: (function () { try { return decodeURIComponent(to); } catch (e) { return to; } })() || EMAIL,
        subject: params ? (params.get('subject') || '') : '',
        body:    params ? (params.get('body')    || '') : ''
      };
    }

    // Intercept mailto: clicks anywhere on the page
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href^="mailto:"], a[href^="MAILTO:"]') : null;
      if (!a) return;
      e.preventDefault();
      var p = parseMailto(a.getAttribute('href'));
      var encTo = encodeURIComponent(p.to);
      var encSu = encodeURIComponent(p.subject);
      var encBo = encodeURIComponent(p.body);
      elGmail.href   = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encTo + '&su=' + encSu + '&body=' + encBo;
      elOutlook.href = 'https://outlook.live.com/mail/deeplink/compose?to=' + encTo + '&subject=' + encSu + '&body=' + encBo;
      elMailto.href  = a.getAttribute('href');
      open();
    });

    elCancel.addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    [elGmail, elOutlook, elMailto].forEach(function (el) {
      el.addEventListener('click', function () { setTimeout(close, 250); });
    });

    function fallbackCopy(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    }

    elCopy.addEventListener('click', function () {
      var original = elCopy.innerHTML;
      var done = function () {
        elCopy.innerHTML = '<span class="vs-mc-ico">✓</span>Copied!';
        setTimeout(function () { elCopy.innerHTML = original; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(EMAIL).then(done, function () { fallbackCopy(EMAIL); done(); });
      } else {
        fallbackCopy(EMAIL); done();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
