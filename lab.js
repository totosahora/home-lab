/* 小小科学乐园 · 共享库（供新游戏使用）
 * 用法：<script src="lab.js"></script>（支持 file://）
 * 提供：音效、提示条、计分条、相机（无限画布）、旋钮手柄、回大厅按钮、试玩记录
 * 注意：既有 100 个游戏是独立单文件，不依赖本库；本库面向新游戏开发。
 */
"use strict";
(function () {
  const Lab = {};

  /* ---------- 音效 ---------- */
  let actx = null;
  Lab.tone = function (freq, dur, vol, type) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type || "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(vol || 0.12, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + dur);
      o.connect(g); g.connect(actx.destination);
      o.start(); o.stop(actx.currentTime + dur + 0.02);
    } catch (e) {}
  };
  Lab.pop = f => Lab.tone(f, 0.15, 0.14);
  Lab.fanfare = () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => Lab.pop(f), i * 130));

  /* ---------- 提示条 ---------- */
  let hintEl = null, hintTimer = null;
  Lab.initHint = function () {
    hintEl = document.createElement("div");
    hintEl.id = "labHint";
    hintEl.style.cssText =
      "position:absolute;bottom:14px;left:50%;transform:translateX(-50%);" +
      "background:rgba(30,30,50,0.85);color:#fff;padding:9px 20px;border-radius:24px;" +
      "font-size:15px;z-index:20;pointer-events:auto;transition:opacity 0.6s;" +
      "white-space:nowrap;max-width:80%;text-align:center;cursor:pointer;";
    hintEl.onclick = () => { hintEl.style.opacity = "0"; };
    document.body.appendChild(hintEl);
    return hintEl;
  };
  Lab.showHint = function (text, ms) {
    if (!hintEl) Lab.initHint();
    hintEl.textContent = text;
    hintEl.style.opacity = "1";
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => { hintEl.style.opacity = "0"; }, ms || 2200);
  };

  /* ---------- 计分条 ---------- */
  Lab.initScorebar = function () {
    const el = document.createElement("div");
    el.id = "labScore";
    el.style.cssText =
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);" +
      "background:rgba(30,20,10,0.85);color:#ffd54a;padding:10px 22px;" +
      "border-radius:24px;font-size:18px;font-weight:bold;z-index:20;" +
      "pointer-events:none;white-space:nowrap;";
    document.body.appendChild(el);
    return el;
  };

  /* ---------- 相机（无限画布平移缩放） ---------- */
  Lab.camera = function () {
    const cam = { x: 0, y: 0, k: 1 };
    cam.toWorld = (sx, sy) => [(sx - cam.x) / cam.k, (sy - cam.y) / cam.k];
    cam.zoomAt = (sx, sy, factor) => {
      const k2 = Math.min(4, Math.max(0.3, cam.k * factor));
      const [wx, wy] = cam.toWorld(sx, sy);
      cam.k = k2; cam.x = sx - wx * k2; cam.y = sy - wy * k2;
    };
    cam.apply = (ctx, dpr) =>
      ctx.setTransform(dpr * cam.k, 0, 0, dpr * cam.k, dpr * cam.x, dpr * cam.y);
    return cam;
  };

  /* ---------- 手柄 ---------- */
  Lab.drawKnob = function (ctx, x, y, color, ring, icon, k) {
    k = k || 1;
    ctx.save();
    ctx.beginPath(); ctx.arc(x, y, 15 / k, 0, 7);
    ctx.fillStyle = color; ctx.fill();
    ctx.strokeStyle = ring; ctx.lineWidth = 2 / k; ctx.stroke();
    ctx.fillStyle = ring; ctx.font = "bold " + (17 / k) + "px sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(icon, x, y + 1 / k);
    ctx.restore();
  };

  /* ---------- 画布初始化 ---------- */
  Lab.initCanvas = function (id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    canvas.style.cssText = "position:absolute;inset:0;touch-action:none;display:block;";
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener("resize", resize);
    resize();
    return { canvas, ctx };
  };

  /* ---------- 回大厅 + 试玩记录 ---------- */
  Lab.injectHome = function () {
    const file = location.pathname.split("/").pop() || "index.html";
    if (file === "index.html") return;
    try {
      const p = JSON.parse(localStorage.getItem("lab-played") || "{}");
      p[file] = Date.now();
      localStorage.setItem("lab-played", JSON.stringify(p));
    } catch (e) {}
    const home = document.createElement("div");
    home.textContent = "🏠";
    home.title = "回到大厅";
    home.style.cssText =
      "position:absolute;left:12px;bottom:12px;z-index:30;width:48px;height:48px;" +
      "border-radius:50%;background:rgba(255,255,255,0.92);border:2px solid #ffd54a;" +
      "font-size:24px;display:flex;align-items:center;justify-content:center;" +
      "cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,0.3);user-select:none;";
    home.onclick = () => { location.href = "index.html"; };
    document.body.appendChild(home);
  };

  window.Lab = Lab;
})();
