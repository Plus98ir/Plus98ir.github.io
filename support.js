/* PLUS98IR — support widget (crypto donation).
   One file for the main site and every project page:
     <script src="https://corenetbase.com/support.js" defer></script>
   Adds a floating "Support" button, or binds to any element with the
   [data-support] attribute when the script tag has data-float="0".
   Follows the page language through <html lang>. */
(function () {
  "use strict";
  if (window.P98Support) return;

  var ADDR = "TA53aFyGNfSAcrCaJi9QmA9x5W47nPJcf7";
  var QR_N = 33;
  var QR_PATH = "M0 0h7v1h-7zM8 0h1v1h-1zM13 0h1v1h-1zM16 0h5v1h-5zM23 0h1v1h-1zM26 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h2v1h-2zM13 1h1v1h-1zM22 1h2v1h-2zM26 1h1v1h-1zM32 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM11 2h2v1h-2zM15 2h1v1h-1zM18 2h3v1h-3zM26 2h1v1h-1zM28 2h3v1h-3zM32 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM8 3h2v1h-2zM11 3h3v1h-3zM15 3h1v1h-1zM18 3h2v1h-2zM22 3h2v1h-2zM26 3h1v1h-1zM28 3h3v1h-3zM32 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h1v1h-1zM11 4h1v1h-1zM13 4h2v1h-2zM17 4h3v1h-3zM21 4h1v1h-1zM23 4h1v1h-1zM26 4h1v1h-1zM28 4h3v1h-3zM32 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h2v1h-2zM11 5h1v1h-1zM13 5h2v1h-2zM18 5h1v1h-1zM20 5h2v1h-2zM24 5h1v1h-1zM26 5h1v1h-1zM32 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h7v1h-7zM9 7h1v1h-1zM11 7h1v1h-1zM13 7h1v1h-1zM15 7h8v1h-8zM3 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM14 8h1v1h-1zM16 8h1v1h-1zM19 8h1v1h-1zM21 8h3v1h-3zM27 8h3v1h-3zM31 8h2v1h-2zM1 9h2v1h-2zM5 9h1v1h-1zM9 9h4v1h-4zM14 9h3v1h-3zM20 9h3v1h-3zM24 9h1v1h-1zM26 9h2v1h-2zM29 9h4v1h-4zM0 10h1v1h-1zM3 10h2v1h-2zM6 10h1v1h-1zM9 10h2v1h-2zM12 10h3v1h-3zM17 10h1v1h-1zM19 10h1v1h-1zM21 10h2v1h-2zM25 10h3v1h-3zM29 10h2v1h-2zM32 10h1v1h-1zM0 11h5v1h-5zM8 11h2v1h-2zM11 11h9v1h-9zM21 11h1v1h-1zM26 11h1v1h-1zM31 11h1v1h-1zM0 12h1v1h-1zM2 12h2v1h-2zM5 12h3v1h-3zM9 12h1v1h-1zM12 12h5v1h-5zM18 12h1v1h-1zM20 12h10v1h-10zM31 12h1v1h-1zM2 13h1v1h-1zM4 13h2v1h-2zM7 13h1v1h-1zM9 13h2v1h-2zM12 13h1v1h-1zM18 13h1v1h-1zM20 13h1v1h-1zM23 13h2v1h-2zM26 13h1v1h-1zM28 13h1v1h-1zM31 13h1v1h-1zM1 14h4v1h-4zM6 14h1v1h-1zM8 14h1v1h-1zM10 14h1v1h-1zM20 14h1v1h-1zM22 14h5v1h-5zM29 14h3v1h-3zM1 15h1v1h-1zM5 15h1v1h-1zM7 15h1v1h-1zM10 15h1v1h-1zM13 15h3v1h-3zM17 15h2v1h-2zM21 15h2v1h-2zM28 15h2v1h-2zM31 15h2v1h-2zM0 16h3v1h-3zM5 16h3v1h-3zM10 16h3v1h-3zM15 16h5v1h-5zM22 16h1v1h-1zM24 16h1v1h-1zM26 16h1v1h-1zM28 16h2v1h-2zM31 16h2v1h-2zM0 17h4v1h-4zM9 17h1v1h-1zM11 17h4v1h-4zM18 17h1v1h-1zM21 17h1v1h-1zM24 17h3v1h-3zM29 17h1v1h-1zM0 18h1v1h-1zM5 18h2v1h-2zM8 18h1v1h-1zM11 18h3v1h-3zM17 18h2v1h-2zM20 18h1v1h-1zM22 18h1v1h-1zM26 18h3v1h-3zM30 18h1v1h-1zM32 18h1v1h-1zM1 19h5v1h-5zM7 19h1v1h-1zM9 19h3v1h-3zM14 19h1v1h-1zM20 19h2v1h-2zM23 19h1v1h-1zM27 19h2v1h-2zM31 19h2v1h-2zM2 20h1v1h-1zM4 20h1v1h-1zM6 20h2v1h-2zM9 20h2v1h-2zM13 20h1v1h-1zM15 20h1v1h-1zM17 20h4v1h-4zM23 20h3v1h-3zM28 20h4v1h-4zM2 21h1v1h-1zM4 21h2v1h-2zM7 21h1v1h-1zM10 21h1v1h-1zM12 21h7v1h-7zM20 21h2v1h-2zM24 21h2v1h-2zM31 21h2v1h-2zM0 22h3v1h-3zM4 22h4v1h-4zM12 22h2v1h-2zM16 22h3v1h-3zM20 22h1v1h-1zM22 22h1v1h-1zM24 22h5v1h-5zM32 22h1v1h-1zM1 23h1v1h-1zM4 23h1v1h-1zM8 23h8v1h-8zM17 23h1v1h-1zM20 23h4v1h-4zM27 23h1v1h-1zM29 23h1v1h-1zM31 23h1v1h-1zM0 24h1v1h-1zM6 24h1v1h-1zM8 24h1v1h-1zM10 24h1v1h-1zM14 24h1v1h-1zM16 24h2v1h-2zM20 24h1v1h-1zM23 24h8v1h-8zM8 25h2v1h-2zM12 25h1v1h-1zM15 25h1v1h-1zM20 25h2v1h-2zM24 25h1v1h-1zM28 25h3v1h-3zM0 26h7v1h-7zM20 26h2v1h-2zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h1v1h-1zM30 26h2v1h-2zM0 27h1v1h-1zM6 27h1v1h-1zM9 27h1v1h-1zM12 27h1v1h-1zM14 27h2v1h-2zM21 27h4v1h-4zM28 27h1v1h-1zM32 27h1v1h-1zM0 28h1v1h-1zM2 28h3v1h-3zM6 28h1v1h-1zM11 28h3v1h-3zM15 28h2v1h-2zM18 28h1v1h-1zM20 28h1v1h-1zM24 28h7v1h-7zM32 28h1v1h-1zM0 29h1v1h-1zM2 29h3v1h-3zM6 29h1v1h-1zM8 29h3v1h-3zM13 29h6v1h-6zM20 29h2v1h-2zM23 29h1v1h-1zM26 29h1v1h-1zM28 29h2v1h-2zM31 29h1v1h-1zM0 30h1v1h-1zM2 30h3v1h-3zM6 30h1v1h-1zM10 30h1v1h-1zM12 30h4v1h-4zM17 30h2v1h-2zM21 30h2v1h-2zM24 30h1v1h-1zM28 30h2v1h-2zM32 30h1v1h-1zM0 31h1v1h-1zM6 31h1v1h-1zM9 31h1v1h-1zM11 31h2v1h-2zM14 31h5v1h-5zM20 31h1v1h-1zM24 31h1v1h-1zM28 31h1v1h-1zM0 32h7v1h-7zM9 32h2v1h-2zM16 32h1v1h-1zM18 32h2v1h-2zM22 32h1v1h-1zM24 32h3v1h-3zM28 32h2v1h-2zM31 32h1v1h-1z";

  var me = document.currentScript;
  var FLOAT = !(me && me.getAttribute("data-float") === "0");

  var TXT = {
    en: {
      btn: "Support",
      title: "Buy me a coffee",
      lead: "If these tools helped you, you can support the work with crypto. Every bit keeps the projects free.",
      usdt: "Send <b>USDT</b> on the <b>TRON (TRC20)</b> network.",
      trx: "Send <b>TRX</b> on the <b>TRON</b> network.",
      warn: "TRON network only. Sending from ERC20, BEP20 or any other network will lose the funds.",
      addr: "Wallet address",
      copy: "Copy",
      copied: "Copied",
      scan: "Scan with your wallet app",
      view: "View on Tronscan",
      thanks: "Thank you!",
      close: "Close"
    },
    fa: {
      btn: "حمایت",
      title: "یه قهوه مهمونم کن",
      lead: "اگه این ابزارها به کارت اومدن، می‌تونی با کریپتو حمایت کنی. هر مقدار کمک می‌کنه پروژه‌ها رایگان بمونن.",
      usdt: "<b>USDT</b> را فقط روی شبکه‌ی <b>TRON (TRC20)</b> بفرستید.",
      trx: "<b>TRX</b> را روی شبکه‌ی <b>TRON</b> بفرستید.",
      warn: "فقط شبکه‌ی TRON. ارسال از ERC20، BEP20 یا هر شبکه‌ی دیگر باعث از دست رفتن پول می‌شود.",
      addr: "آدرس کیف پول",
      copy: "کپی",
      copied: "کپی شد",
      scan: "با اپ کیف پولت اسکن کن",
      view: "مشاهده در Tronscan",
      thanks: "ممنونم!",
      close: "بستن"
    }
  };

  var CUP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M6 2v2M10 2v2M14 2v2"/></svg>';
  var COPY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  var X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var WARN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>';
  var TRON = '<svg viewBox="0 0 64 64" aria-hidden="true"><path fill="#ff2d3d" d="M61.6 20.8c-2.9-2.7-6.9-6.8-10.2-9.7l-.2-.1a3.8 3.8 0 0 0-1.1-.6C42.3 9 4.5 1.9 3.8 2a1.4 1.4 0 0 0-.6.2l-.2.2a2.2 2.2 0 0 0-.5.9v.6c4.4 12.3 21.8 52.7 25.2 62.2.2.6.6 1.9 1.4 1.9h.2c.4 0 2.2-2.4 2.2-2.4S62.4 26.8 63.6 24.4a2.4 2.4 0 0 0 .2-.9 2.3 2.3 0 0 0-2.2-2.7zM35.4 26.8l12.7-10.5 7.4 6.8zm-5-.7L8.5 8.1l35.4 6.5zm2 4.8 22.4-3.6-25.6 30.8zM5.6 9.8l23 19.5L25.3 58z"/></svg>';

  var CSS = [
    ":host{all:initial;font-family:inherit}",
    "*{box-sizing:border-box}",
    ".fab{position:fixed;bottom:18px;inset-inline-start:18px;z-index:2147483000;display:flex;align-items:center;gap:8px;",
    "padding:10px 16px 10px 13px;border:1px solid rgba(255,77,90,.55);border-radius:999px;cursor:pointer;",
    "background:linear-gradient(135deg,#ff3b4a,#b3121f);color:#fff;font:600 14px/1 inherit;letter-spacing:.2px;",
    "box-shadow:0 8px 28px rgba(255,40,60,.38),0 0 0 4px rgba(255,59,74,.12);transition:transform .2s,box-shadow .2s;-webkit-tap-highlight-color:transparent}",
    ".fab:hover{transform:translateY(-2px);box-shadow:0 12px 34px rgba(255,40,60,.5),0 0 0 5px rgba(255,59,74,.16)}",
    ".fab svg{width:18px;height:18px;flex:none}",
    ".fab span{font-family:inherit}",
    "@media (max-width:640px){.fab{padding:12px;bottom:14px;inset-inline-start:14px}.fab span{display:none}.fab svg{width:20px;height:20px}}",
    ".ov{position:fixed;inset:0;z-index:2147483001;display:none;align-items:center;justify-content:center;padding:16px;",
    "background:rgba(3,5,10,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}",
    ".ov.on{display:flex;animation:fade .18s ease}",
    "@keyframes fade{from{opacity:0}to{opacity:1}}",
    "@keyframes pop{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}",
    ".card{position:relative;width:min(440px,100%);max-height:calc(100vh - 32px);overflow:auto;border-radius:22px;padding:24px;",
    "background:radial-gradient(120% 70% at 50% -10%,rgba(255,45,61,.22),transparent 60%),#0c111c;color:#e8ecf4;",
    "border:1px solid rgba(255,77,90,.28);box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 40px rgba(255,40,60,.15);",
    "font:14px/1.6 inherit;animation:pop .22s ease}",
    ".card[dir=rtl]{font-family:Vazirmatn,Tahoma,inherit}",
    ".x{position:absolute;top:14px;inset-inline-end:14px;width:34px;height:34px;border-radius:10px;border:1px solid rgba(255,255,255,.1);",
    "background:rgba(255,255,255,.04);color:#aab3c5;cursor:pointer;display:grid;place-items:center}",
    ".x:hover{color:#fff;border-color:rgba(255,77,90,.5)}.x svg{width:16px;height:16px}",
    ".hd{display:flex;align-items:center;gap:12px;margin:0 0 6px;padding-inline-end:40px}",
    ".ic{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;flex:none;color:#fff;",
    "background:linear-gradient(135deg,#ff3b4a,#9e0f1b);box-shadow:0 6px 18px rgba(255,40,60,.35)}.ic svg{width:22px;height:22px}",
    "h2{margin:0;font:700 19px/1.3 inherit;color:#fff}",
    ".lead{margin:6px 0 16px;color:#aab3c5;font-size:13.5px}",
    ".tabs{display:flex;gap:6px;padding:4px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);margin-bottom:14px}",
    ".tabs button{flex:1;border:0;border-radius:9px;padding:9px 8px;cursor:pointer;background:transparent;color:#aab3c5;font:600 13px/1 inherit;",
    "display:flex;align-items:center;justify-content:center;gap:7px}",
    ".tabs button.on{background:linear-gradient(135deg,rgba(255,59,74,.95),rgba(179,18,31,.95));color:#fff;box-shadow:0 4px 14px rgba(255,40,60,.3)}",
    ".tabs i{font-style:normal;font-size:10.5px;font-weight:700;padding:2px 6px;border-radius:6px;background:rgba(255,255,255,.12)}",
    ".coin{width:16px;height:16px;border-radius:50%;display:inline-grid;place-items:center;font:800 9px/1 inherit;color:#fff}",
    ".coin.u{background:#26a17b}.coin.t{background:#fff}.coin.t svg{width:11px;height:11px}",
    ".qrw{display:flex;flex-direction:column;align-items:center;gap:8px;margin:4px 0 14px}",
    ".qr{position:relative;width:204px;height:204px;padding:12px;border-radius:16px;background:#fff;box-shadow:0 0 0 1px rgba(255,77,90,.35),0 10px 30px rgba(255,40,60,.2)}",
    ".qr svg.code{width:100%;height:100%;display:block}",
    ".qr .logo{position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:11px;background:#fff;display:grid;place-items:center;box-shadow:0 0 0 3px #fff}",
    ".qr .logo span{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;color:#fff;font:800 14px/1 Arial,sans-serif}",
    ".qr .logo .u{background:#26a17b}.qr .logo .t{background:#fff;border:1.5px solid #ffd2d6}.qr .logo .t svg{width:22px;height:22px}",
    ".scan{font-size:12px;color:#7d879b}",
    ".note{margin:0 0 10px;font-size:13.5px;color:#dfe5f0;text-align:center}.note b{color:#fff}",
    ".lbl{display:block;font-size:11.5px;color:#7d879b;margin:0 0 6px;text-transform:uppercase;letter-spacing:.6px}",
    ".card[dir=rtl] .lbl{text-transform:none;letter-spacing:0}",
    ".addr{display:flex;align-items:stretch;gap:8px;padding:6px;border-radius:13px;background:#070a12;border:1px solid rgba(255,255,255,.09)}",
    ".addr code{flex:1;min-width:0;padding:8px 8px;font:600 13px/1.4 ui-monospace,SFMono-Regular,Consolas,monospace;color:#fff;word-break:break-all;direction:ltr;text-align:left;user-select:all}",
    ".cp{flex:none;display:flex;align-items:center;gap:6px;padding:0 13px;border-radius:9px;border:1px solid rgba(255,77,90,.45);cursor:pointer;",
    "background:rgba(255,59,74,.12);color:#ff8a94;font:600 13px/1 inherit;transition:background .15s}",
    ".cp:hover{background:rgba(255,59,74,.22);color:#fff}.cp svg{width:15px;height:15px}",
    ".cp.ok{background:rgba(38,161,123,.18);border-color:rgba(38,161,123,.6);color:#5fe0b5}",
    ".warn{display:flex;gap:10px;align-items:flex-start;margin:14px 0 0;padding:11px 12px;border-radius:12px;font-size:12.5px;line-height:1.55;",
    "background:rgba(255,170,40,.08);border:1px solid rgba(255,170,40,.35);color:#ffd28a}.warn svg{width:17px;height:17px;flex:none;margin-top:1px}",
    ".ft{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:14px;font-size:12.5px;color:#7d879b}",
    ".ft a{color:#ff8a94;text-decoration:none}.ft a:hover{color:#fff;text-decoration:underline}",
    "@media (max-width:420px){.card{padding:20px 16px}.qr{width:184px;height:184px}}"
  ].join("");

  var lang = "en", coin = "usdt", host, root, ov, fab, lastFocus;

  function curLang() {
    var l = (document.documentElement.getAttribute("lang") || "").toLowerCase();
    return l.indexOf("fa") === 0 ? "fa" : "en";
  }
  function t(k) { return TXT[lang][k]; }

  function build() {
    host = document.createElement("div");
    host.id = "p98-support";
    root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;
    var st = document.createElement("style");
    st.textContent = CSS;
    root.appendChild(st);

    if (FLOAT) {
      fab = document.createElement("button");
      fab.type = "button";
      fab.className = "fab";
      fab.addEventListener("click", open);
      root.appendChild(fab);
    }

    ov = document.createElement("div");
    ov.className = "ov";
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    root.appendChild(ov);
    document.body.appendChild(host);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && ov.classList.contains("on")) close();
    });
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest && e.target.closest("[data-support]");
      if (el) { e.preventDefault(); open(); }
    });

    paint();
    if (/^#support$/i.test(location.hash)) setTimeout(open, 300);
    window.addEventListener("hashchange", function () { if (/^#support$/i.test(location.hash)) open(); });
    new MutationObserver(function () {
      if (curLang() !== lang) paint();
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }

  function qrSvg() {
    return '<svg class="code" viewBox="0 0 ' + QR_N + " " + QR_N + '" shape-rendering="crispEdges" role="img" aria-label="QR ' + ADDR + '"><path fill="#0b0f19" d="' + QR_PATH + '"/></svg>';
  }

  function paint() {
    lang = curLang();
    if (fab) {
      fab.innerHTML = CUP + "<span>" + t("btn") + "</span>";
      fab.setAttribute("aria-label", t("title"));
    }
    var labels = document.querySelectorAll("[data-support-label]");
    for (var i = 0; i < labels.length; i++) labels[i].textContent = t("btn");

    var dir = lang === "fa" ? "rtl" : "ltr";
    ov.innerHTML =
      '<div class="card" role="dialog" aria-modal="true" aria-labelledby="p98t" dir="' + dir + '" lang="' + lang + '">' +
        '<button class="x" type="button" aria-label="' + t("close") + '">' + X + "</button>" +
        '<div class="hd"><div class="ic">' + CUP + '</div><h2 id="p98t">' + t("title") + "</h2></div>" +
        '<p class="lead">' + t("lead") + "</p>" +
        '<div class="tabs" role="tablist">' +
          '<button type="button" role="tab" data-c="usdt"><span class="coin u">₮</span>USDT <i>TRC20</i></button>' +
          '<button type="button" role="tab" data-c="trx"><span class="coin t">' + TRON + "</span>TRX <i>TRON</i></button>" +
        "</div>" +
        '<p class="note"></p>' +
        '<div class="qrw"><div class="qr">' + qrSvg() + '<div class="logo"></div></div><span class="scan">' + t("scan") + "</span></div>" +
        '<span class="lbl">' + t("addr") + "</span>" +
        '<div class="addr"><code>' + ADDR + '</code><button class="cp" type="button">' + COPY + "<span>" + t("copy") + "</span></button></div>" +
        '<div class="warn">' + WARN + "<span>" + t("warn") + "</span></div>" +
        '<div class="ft"><span>' + t("thanks") + ' ❤</span><a href="https://tronscan.org/#/address/' + ADDR + '" target="_blank" rel="noopener">' + t("view") + "</a></div>" +
      "</div>";

    ov.querySelector(".x").addEventListener("click", close);
    ov.querySelector(".cp").addEventListener("click", copy);
    var tabs = ov.querySelectorAll(".tabs button");
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].addEventListener("click", function () { coin = this.getAttribute("data-c"); setCoin(); });
    }
    setCoin();
  }

  function setCoin() {
    var tabs = ov.querySelectorAll(".tabs button");
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].getAttribute("data-c") === coin;
      tabs[i].classList.toggle("on", on);
      tabs[i].setAttribute("aria-selected", on ? "true" : "false");
    }
    ov.querySelector(".note").innerHTML = t(coin);
    ov.querySelector(".logo").innerHTML = coin === "usdt" ? '<span class="u">₮</span>' : '<span class="t">' + TRON + "</span>";
  }

  function copy() {
    var b = ov.querySelector(".cp");
    function done() {
      b.classList.add("ok");
      b.innerHTML = CHECK + "<span>" + t("copied") + "</span>";
      setTimeout(function () { b.classList.remove("ok"); b.innerHTML = COPY + "<span>" + t("copy") + "</span>"; }, 1800);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(ADDR).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = ADDR;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  function open() {
    if (curLang() !== lang) paint();
    lastFocus = document.activeElement;
    ov.classList.add("on");
    var x = ov.querySelector(".x");
    if (x) x.focus();
  }
  function close() {
    ov.classList.remove("on");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  window.P98Support = { open: open, close: close, address: ADDR };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
