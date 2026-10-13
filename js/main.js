/* ============================================================
   史致远 · 个人作品集  —  交互脚本
   1. 粒子汇聚开场   2. 视差滚动   3. 项目模态框
   4. 数字滚动/技能条 5. 导航状态   6. 复制微信
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
   * 0. 项目数据
   * ---------------------------------------------------------- */
  var PROJECTS = [
    {
      id: "xiaoyou",
      cat: "综艺内容运营",
      title: "央视综艺《笑有新生 2》",
      desc: "春晚同一喜剧团队打造的语言类选拔综艺，参与内容运营与现场统筹。",
      stat: "14亿+",
      statLabel: "第一季全网讨论量",
      cover: { type: "img", src: "assets/xiaoyou_cover.jpg", alt: "央视文艺《笑有新生》2026 主视觉", pos: "50% 50%" },
      year: "2026.08",
      role: "央视（北京）娱乐传媒有限公司 · 内容三部编导",
      chips: ["内容运营", "现场统筹", "道具台口"],
      bg: "《笑有新生 2》由春晚同一喜剧团队打造，是语言类节目选拔综艺。第一季全网讨论量高达 14 亿+，第二季录制涉及喜剧训练营多档节目的集中产出，需要严密的现场统筹与台口衔接。",
      roleText: "担任内容三部编导，前期负责统筹现场组，后期负责确认道具台口，贯穿录制前后场。",
      process: [
        "前期统筹现场组：对接喜剧训练营节目排期、人员动线与录制现场秩序；",
        "后期转战道具台口：逐项确认 20+ 项节目的道具清单与上下场节奏；",
        "串联导演组、嘉宾与舞美技术多方信息，保障录制流程零卡壳。"
      ],
      stats: [
        { n: "14亿+", l: "第一季全网讨论量" },
        { n: "20+ 项", l: "落地喜剧节目" },
        { n: "30+ 场", l: "训练营录制保障（约）" }
      ],
      bars: [
        { label: "节目落地", pct: 90, display: "20+ 项" },
        { label: "现场完成度", pct: 96, display: "顺利录制" }
      ],
      points: ["观众展演小获成功，获得节目组认可"],
      images: []
    },
    {
      id: "youku",
      cat: "大型活动执行",
      title: "优酷 88VIP 超酷音乐盛典",
      desc: "大型线上线下联动音乐盛典，负责台本撰写与现场流程卡点。",
      stat: "8.7亿",
      statLabel: "微博话题阅读量",
      cover: { type: "img", src: "assets/youku_pass.jpg", alt: "优酷88VIP超酷音乐盛典导演组全通证", pos: "50% 43%" },
      year: "2026.08",
      role: "优酷 88VIP 超酷音乐盛典 · 导演组",
      chips: ["台本撰写", "流程卡点", "台口对接"],
      bg: "优酷 88VIP 超酷音乐盛典是一场大型线上线下联动演出，15 位艺人同台、30 个大小环节交织，直播节奏以秒计。前期内容筹备与现场流程管控缺一不可。",
      roleText: "担任导演组成员，负责前期台本类内容撰写，现场负责流程卡点与台口对接。",
      process: [
        "前期协助完成台本、主持人逐字稿、游戏环节设计与嘉宾采访提纲；",
        "执行期与各台口逐一对接台本，对齐节目逻辑与排练动线；",
        "现场进行流程卡点，把控 15 位艺人、30 个小环节的精准衔接。"
      ],
      stats: [
        { n: "120万+", l: "抢票预约量" },
        { n: "8.7亿+", l: "微博话题阅读量" },
        { n: "15+30", l: "位艺人 · 个环节全完成" }
      ],
      bars: [
        { label: "抢票预约", pct: 92, display: "120万+" },
        { label: "话题热度", pct: 96, display: "8.7亿+" },
        { label: "环节完成", pct: 100, display: "30/30" }
      ],
      points: ["全部环节按台本顺序顺利完成，直播无重大事故"],
      images: [
        { src: "assets/youku_stage.jpg", alt: "盛典直播现场" },
        { src: "assets/youku_illus.jpg", alt: "盛典视觉物料" }
      ]
    },
    {
      id: "davos",
      cat: "国际会展统筹",
      title: "天津夏季达沃斯论坛",
      desc: "世界经济论坛新领军者年会，统筹 7000+ 张证件与会务手册制作。",
      stat: "7000+",
      statLabel: "证件统筹全流程",
      cover: { type: "img", src: "assets/davos_stage.jpg", alt: "天津夏季达沃斯论坛开幕式" },
      year: "2023.05",
      role: "论坛筹备办公室 · 会务手册组",
      chips: ["证件统筹", "会务手册", "跨部门协同"],
      bg: "天津夏季达沃斯论坛（世界经济论坛新领军者年会）是万名嘉宾参会的国际级会展，证件注册分发与会务信息传达是大会顺畅运行的生命线。",
      roleText: "任职筹备办公室会务手册组，负责证件统筹与会务手册内容工作。",
      process: [
        "参与中方证件注册、制作与分发全流程，逐批核对信息、跟进进度；",
        "协助会务手册框架搭建与内容编撰，多轮修订校对；",
        "跨部门协同各工作组，响应参会嘉宾与工作人员的证件与信息需求。"
      ],
      stats: [
        { n: "7000+ 张", l: "证件注册统筹" },
        { n: "10000+", l: "参会嘉宾保障（约）" },
        { n: "全案", l: "会务手册获多方好评" }
      ],
      bars: [
        { label: "证件统筹", pct: 95, display: "7000+ 张" },
        { label: "手册完成", pct: 92, display: "全案交付" }
      ],
      points: ["大型活动参与以及跨部门协作经验，可应用于会展业务的策划与执行"],
      images: [
        { src: "assets/davos_stage.jpg", alt: "论坛开幕式现场" },
        { src: "assets/davos_pass.jpg", alt: "证件统筹工作记录" }
      ]
    },
    {
      id: "youdao",
      cat: "直播与账号运营",
      title: "网易有道 · 品牌直播运营",
      desc: "升学事业部品牌项目常态化直播，粉丝 20 万+ 的持续运营。",
      stat: "20万+",
      statLabel: "微信视频号粉丝",
      cover: { type: "img", src: "assets/youdao_studio.jpg", alt: "网易有道直播间 B3-YD-05", pos: "50% 45%" },
      year: "2026.09 - 2026.11",
      role: "网之易信息技术（北京）有限公司 · 有道事业群品牌组",
      chips: ["直播运营", "内容策划", "SOP 搭建"],
      bg: "有道升学事业部品牌项目需要常态化直播：既要稳定的内容供给（脚本、逐字稿、短视频），也要场场可复盘的直播运营方法论，把单场爆发沉淀为账号资产。",
      roleText: "担任品牌组内容策划 & 直播运营，全程跟播并负责内容供给侧。",
      process: [
        "全程跟播：实时优化直播节奏、关注在线人数与互动数据；",
        "内容供给：完成视频脚本、主持人及嘉宾逐字稿，剪辑短视频；",
        "方法论沉淀：竞品调研 + 搭建直播 SOP，让运营动作可复制。"
      ],
      stats: [
        { n: "20万+", l: "微信视频号粉丝" },
        { n: "4万+", l: "场均观看人数" },
        { n: "102%", l: "合作主播转粉率" }
      ],
      bars: [
        { label: "场均观看", pct: 80, display: "4万+" },
        { label: "场均曝光", pct: 90, display: "30万+" },
        { label: "转粉率", pct: 102, display: "102%" },
        { label: "抖音粉丝", pct: 60, display: "3万+" }
      ],
      points: ["直播运营经验覆盖策划、预热、跟播、复盘完整闭环"],
      images: []
    },
    {
      id: "ip",
      cat: "智能媒体运营",
      title: "个人内容 IP 矩阵",
      desc: "小红书 × 网易 Lofter 多平台创作，总阅读量 300w+ 的长期主义者。",
      stat: "300w+",
      statLabel: "Lofter 系列总阅读量",
      cover: { type: "img", src: "assets/xhs_wall.jpg", alt: "小红书账号内容墙" },
      year: "长期运营",
      role: "独立创作者 / 账号运营者",
      chips: ["小红书", "网易 Lofter", "内容创作"],
      bg: "从新传考研知识分享到音乐剧 REPO，再到基于原作世界观的同人创作——以创作者身份理解内容生态：什么选题有长尾、什么表达有共鸣，数据说了算。",
      roleText: "独立完成选题、创作、排版、发布与数据复盘的全流程。",
      process: [
        "小红书 · 新传考研：原创 25+ 道题目及答案解析，构建知识体系内容；",
        "小红书 · 音乐剧 Report：10+ 篇原创观剧repo，运营同好聚集地；",
        "网易 Lofter：持续输出同人文章 20 万字，角色人设还原度获 tag 总榜前列。"
      ],
      stats: [
        { n: "300w+", l: "Lofter 总阅读量" },
        { n: "6w", l: "单篇最高阅读" },
        { n: "1000+", l: "小红书累计获赞" }
      ],
      bars: [
        { label: "总阅读量", pct: 96, display: "300w+" },
        { label: "单篇峰值", pct: 85, display: "6w" },
        { label: "累计获赞", pct: 70, display: "1000+" },
        { label: "浏览量", pct: 62, display: "1w+" }
      ],
      points: ["每年考研季均有自然流量，验证内容的长尾价值"],
      links: [
        { label: "音乐剧《奇美拉》观前指南｜当梦境被修剪", tag: "音乐剧REPO", url: "https://mp.weixin.qq.com/s/4dB0Tf_t3phGmWALYL7Lyg" },
        { label: "当乘风姐姐的完美人设如瓷般碎裂", tag: "热点评论", url: "https://mp.weixin.qq.com/s/qZ2LP3Nb978Jz4bk59YbFg" }
      ],
      images: [
        { src: "assets/xhs_wall.jpg", alt: "小红书内容墙" },
        { src: "assets/shouzhang.jpg", alt: "手帐创作日常" }
      ]
    }
  ];

  /* ----------------------------------------------------------
   * 1. 粒子汇聚开场
   * ---------------------------------------------------------- */
  var intro = document.getElementById("intro");
  var canvas = document.getElementById("intro-canvas");
  var ctx = canvas.getContext("2d");
  var caption = document.querySelector(".intro-caption");
  var skipBtn = document.getElementById("intro-skip");
  var W, H, DPR, particles = [], rafId = null, startT = 0, phase = "fly";

  var PALETTE = ["#C8552C", "#E08A4E", "#F6C944", "#EF8A7A", "#9DBB9A"];

  function setupCanvas() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function buildTargets(text) {
    var off = document.createElement("canvas");
    off.width = W; off.height = H;
    var o = off.getContext("2d");
    var fs = Math.min(W / (text.length * 1.05), H * 0.42);
    o.font = '900 ' + fs + 'px "Noto Serif SC", "Source Han Serif SC", SimSun, serif';
    o.textAlign = "center"; o.textBaseline = "middle";
    o.fillStyle = "#fff";
    o.fillText(text, W / 2, H / 2);
    var data = o.getImageData(0, 0, W, H).data;
    var pts = [];
    var gap = Math.max(3, Math.round(W / 300));
    for (var y = 0; y < H; y += gap) {
      for (var x = 0; x < W; x += gap) {
        if (data[(y * W + x) * 4 + 3] > 128) pts.push({ x: x, y: y });
      }
    }
    // 上限 2600 个粒子保证流畅
    while (pts.length > 2600) {
      pts.splice(Math.floor(Math.random() * pts.length), 1);
    }
    return pts;
  }

  function initParticles() {
    var targets = buildTargets("史致远");
    particles = targets.map(function (t) {
      var edge = Math.random();
      var sx, sy;
      if (edge < 0.25) { sx = Math.random() * W; sy = -30; }            // 上
      else if (edge < 0.5) { sx = W + 30; sy = Math.random() * H; }     // 右
      else if (edge < 0.75) { sx = Math.random() * W; sy = H + 30; }    // 下
      else { sx = -30; sy = Math.random() * H; }                        // 左
      return {
        x: sx, y: sy,
        tx: t.x + (Math.random() - 0.5) * 2, ty: t.y + (Math.random() - 0.5) * 2,
        vx: 0, vy: 0,
        size: 1.2 + Math.random() * 1.8,
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        delay: Math.random() * 300
      };
    });
  }

  function tick(ts) {
    if (!startT) startT = ts;
    var t = ts - startT;
    ctx.clearRect(0, 0, W, H);

    if (phase === "dissolve") {
      var alive = false;
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.vy += 0.5; p.x += p.vx; p.y += p.vy; p.vx *= 0.99;
        p.size *= 0.965;
        if (p.size > 0.4 && p.y < H + 40) alive = true;
        ctx.globalAlpha = Math.min(1, p.size);
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!alive) { finishIntro(); return; }
    } else {
      for (var j = 0; j < particles.length; j++) {
        var q = particles[j];
        if (t > q.delay) {
          // 弹簧汇聚
          q.vx += (q.tx - q.x) * 0.022;
          q.vy += (q.ty - q.y) * 0.022;
          q.vx *= 0.86; q.vy *= 0.86;
          q.x += q.vx; q.y += q.vy;
          // 轻微呼吸
          var wob = Math.sin(ts / 500 + j) * 0.4;
          ctx.fillStyle = q.color;
          ctx.globalAlpha = 0.92;
          ctx.beginPath(); ctx.arc(q.x, q.y + wob, q.size, 0, 6.2832); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      // 汇聚完成 → 展示文案 → 短暂停留 → 溶解
      if (phase === "fly" && t > 1900) { phase = "hold"; caption.classList.add("show"); }
      if (phase === "hold" && t > 3100) beginDissolve();
    }
    rafId = requestAnimationFrame(tick);
  }

  function beginDissolve() {
    if (phase === "dissolve") return;
    phase = "dissolve";
    caption.classList.remove("show");
    intro.classList.add("gone");
    for (var i = 0; i < particles.length; i++) {
      particles[i].vx = (Math.random() - 0.5) * 6;
      particles[i].vy = -(2 + Math.random() * 3);
    }
  }

  function finishIntro() {
    if (rafId) cancelAnimationFrame(rafId);
    intro.remove();
    document.body.classList.add("loaded");
    window.dispatchEvent(new Event("intro-done"));
  }

  function startIntro() {
    if (reduceMotion) { intro.remove(); document.body.classList.add("loaded"); return; }
    setupCanvas();
    initParticles();
    rafId = requestAnimationFrame(tick);
    skipBtn.addEventListener("click", beginDissolve);
    window.addEventListener("resize", function () {
      if (phase === "fly" || phase === "hold") { setupCanvas(); initParticles(); }
    }, { once: false });
  }

  /* ----------------------------------------------------------
   * 2. 项目卡片渲染 + 模态框
   * ---------------------------------------------------------- */
  var grid = document.getElementById("proj-grid");
  var modal = document.getElementById("proj-modal");
  var pmBody = document.getElementById("pm-body");
  var pmPrev = document.getElementById("pm-prev");
  var pmNext = document.getElementById("pm-next");
  var currentIdx = 0;
  var lastFocus = null;

  function renderGrid() {
    var html = "";
    PROJECTS.forEach(function (p, i) {
      var cover;
      if (p.cover.type === "img") {
        var posAttr = p.cover.pos ? ' style="object-position:' + p.cover.pos + '"' : "";
        cover = '<img src="' + p.cover.src + '"' + posAttr + ' alt="' + (p.cover.alt || p.title) + '" loading="lazy">';
      } else {
        cover =
          '<div class="cover--typo" role="img" aria-label="' + p.title + '封面">' +
            (p.cover.live ? '<span class="cover-live">LIVE</span>' : '') +
            '<span class="cover-big">' + p.cover.big + "</span>" +
            '<span class="cover-sub">' + p.cover.sub + "</span>" +
          "</div>";
      }
      html +=
        '<button class="proj-card reveal" style="--d:' + (i * 0.08) + 's" type="button" data-idx="' + i + '" aria-haspopup="dialog">' +
          '<div class="proj-cover"><span class="proj-cat">' + p.cat + "</span>" + cover + "</div>" +
          '<div class="proj-body">' +
            "<h3>" + p.title + "</h3>" +
            "<p>" + p.desc + "</p>" +
            '<div class="proj-stat-row"><b>' + p.stat + "</b><span>" + p.statLabel + "</span></div>" +
            '<span class="proj-more">查看完整复盘 <b>→</b></span>' +
          "</div>" +
        "</button>";
    });
    grid.innerHTML = html;
    grid.querySelectorAll(".proj-card").forEach(function (card) {
      card.addEventListener("click", function () { openModal(+card.dataset.idx); });
    });
  }

  function coverHTML(p) {
    if (p.cover.type === "img") {
      var posStyle = p.cover.pos ? ' style="object-position:' + p.cover.pos + '"' : "";
      return '<img src="' + p.cover.src + '"' + posStyle + ' alt="' + (p.cover.alt || p.title) + '">';
    }
    return '<div class="cover--typo">' +
      (p.cover.live ? '<span class="cover-live">LIVE</span>' : "") +
      '<span class="cover-big">' + p.cover.big + '</span><span class="cover-sub">' + p.cover.sub + "</span></div>";
  }

  function renderModal(i) {
    currentIdx = (i + PROJECTS.length) % PROJECTS.length;
    var p = PROJECTS[currentIdx];
    var statsHTML = p.stats.map(function (s) {
      return '<div class="pm-stat"><b>' + s.n + "</b><span>" + s.l + "</span></div>";
    }).join("");
    var barsHTML = p.bars.map(function (b) {
      return '<div class="bar-row"><span>' + b.label + '</span><div class="bar-track"><div class="bar-fill" data-w="' + b.pct + '"><b>' + b.display + "</b></div></div></div>";
    }).join("");
    var galleryHTML = p.images.length
      ? '<div class="pm-gallery">' + p.images.map(function (im) { return '<img src="' + im.src + '" alt="' + im.alt + '" loading="lazy">'; }).join("") + "</div>"
      : "";
    var linksHTML = p.links && p.links.length
      ? '<div class="pm-section"><h4>作品直达 · 点击跳转</h4><div class="pm-links">' +
        p.links.map(function (l) {
          return '<a class="pm-link" href="' + l.url + '" target="_blank" rel="noopener"><b>' + l.label + '</b><i>' + l.tag + " ↗</i></a>";
        }).join("") + "</div></div>"
      : "";
    pmBody.innerHTML =
      '<div class="pm-hero">' + coverHTML(p) +
        '<div class="pm-hero-meta"><h3 id="pm-title">' + p.title + "</h3>" +
          '<div class="pm-chips"><span>🕒 ' + p.year + "</span>" + p.chips.map(function (c) { return "<span>" + c + "</span>"; }).join("") + "</div>" +
        "</div></div>" +
      '<div class="pm-section"><h4>项目背景</h4><p>' + p.bg + "</p></div>" +
      '<div class="pm-section"><h4>我的角色</h4><p>' + p.role + " —— " + p.roleText + "</p></div>" +
      '<div class="pm-section"><h4>解决过程</h4><ul>' + p.process.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>" +
      '<div class="pm-section"><h4>量化成果</h4><div class="pm-stats">' + statsHTML + '</div><div class="pm-bars">' + barsHTML + "</div>" +
        (p.points.length ? "<ul>" + p.points.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : "") +
      "</div>" + linksHTML + galleryHTML;

    var prev = PROJECTS[(currentIdx - 1 + PROJECTS.length) % PROJECTS.length];
    var next = PROJECTS[(currentIdx + 1) % PROJECTS.length];
    pmPrev.querySelector("span").textContent = prev.title;
    pmNext.querySelector("span").textContent = next.title;

    // 条形图入场动画
    setTimeout(function () {
      pmBody.querySelectorAll(".bar-fill").forEach(function (b) {
        b.style.width = Math.min(b.dataset.w, 100) + "%";
      });
    }, 250);
    pmBody.scrollTop = 0;
  }

  function openModal(i) {
    lastFocus = document.activeElement;
    renderModal(i);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  pmPrev.addEventListener("click", function () { renderModal(currentIdx - 1); });
  pmNext.addEventListener("click", function () { renderModal(currentIdx + 1); });
  modal.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") renderModal(currentIdx - 1);
    if (e.key === "ArrowRight") renderModal(currentIdx + 1);
  });

  /* ----------------------------------------------------------
   * 3. 视差滚动 + 进度条 + 导航高亮
   * ---------------------------------------------------------- */
  var pEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var pCache = [];
  var ticking = false;

  function cacheParallax() {
    pCache = pEls.map(function (el) {
      var r = el.getBoundingClientRect();
      var top = r.top + window.pageYOffset;
      return { el: el, top: top, h: r.height, speed: parseFloat(el.dataset.parallax || "0.15") };
    });
  }
  function parallaxUpdate() {
    var vh = window.innerHeight;
    var sy = window.pageYOffset;
    pCache.forEach(function (c) {
      var delta = (sy + vh / 2) - (c.top + c.h / 2);
      c.el.style.transform = "translateY(" + (-delta * c.speed).toFixed(1) + "px)";
    });
    // 进度条
    var doc = document.documentElement;
    var max = doc.scrollHeight - vh;
    document.getElementById("progress-bar").style.width = (max > 0 ? (sy / max) * 100 : 0) + "%";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(parallaxUpdate); }
  }, { passive: true });
  window.addEventListener("resize", function () { cacheParallax(); });
  window.addEventListener("load", function () { cacheParallax(); parallaxUpdate(); });

  // 导航高亮
  var navLinks = document.querySelectorAll(".nav-links a");
  var sections = ["about", "work", "projects", "academic", "skills", "contact"].map(function (id) { return document.getElementById(id); });
  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        navLinks.forEach(function (a) { a.classList.toggle("active", a.dataset.nav === en.target.id); });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { if (s) navObserver.observe(s); });

  /* ----------------------------------------------------------
   * 4. Reveal / 数字滚动 / 技能条
   * ---------------------------------------------------------- */
  function animateCount(el) {
    var target = parseFloat(el.dataset.count);
    var dec = parseInt(el.dataset.decimals || "0", 10);
    var dur = 1400, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var k = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - k, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      en.target.querySelectorAll("[data-count]").forEach(animateCount);
      if (en.target.hasAttribute("data-count")) animateCount(en.target);
      en.target.querySelectorAll(".bar-fill").forEach(function (b) {
        var w = parseFloat(b.style.getPropertyValue("--w")) || 0;
        b.style.width = Math.min(w, 100) + "%";
      });
      revealObserver.unobserve(en.target);
    });
  }, { threshold: 0.18 });

  function observeReveals() {
    document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });
    document.querySelectorAll(".stat b [data-count], .stat [data-count]").forEach(function (el) {
      // hero 数字：随 body.loaded 一起触发
      if (!el.closest(".reveal")) {
        var done = false;
        var io = new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting && !done) { done = true; animateCount(el); io.disconnect(); }
          });
        }, { threshold: 0.4 });
        io.observe(el);
      }
    });
  }

  /* ----------------------------------------------------------
   * 5. 复制微信
   * ---------------------------------------------------------- */
  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }
  document.getElementById("copy-wechat").addEventListener("click", function () {
    var num = this.dataset.wechat;
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = num; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); showToast("已复制微信号 ✦ " + num); }
      catch (e) { showToast("微信号：" + num); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(num).then(function () { showToast("已复制微信号 ✦ " + num); }, fallback);
    } else fallback();
  });

  /* ----------------------------------------------------------
   * 启动
   * ---------------------------------------------------------- */
  renderGrid();
  observeReveals();
  startIntro();
  // 兜底：若开场因异常未移除，8s 后强制放行
  setTimeout(function () {
    if (document.getElementById("intro")) { intro.remove(); document.body.classList.add("loaded"); }
  }, 9000);
})();
