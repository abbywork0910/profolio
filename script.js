const 選單連結 = document.querySelectorAll('[data-page-link]');
const 頁面 = document.querySelectorAll('.page');
const 選單按鈕 = document.querySelector('.menu-button');
const 導覽列 = document.querySelector('.main-nav');
const 下拉選單按鈕 = document.querySelector('.nav-dropdown-button');
const 下拉選單容器 = document.querySelector('.nav-dropdown');
const 導覽作品連結 = document.querySelectorAll('[data-work-nav]');
const 作品卡片 = document.querySelectorAll('[data-work-card]');
const 詳細區塊 = document.querySelector('#project-detail');
const 圖片燈箱 = document.querySelector('#image-lightbox');
const 燈箱圖片 = 圖片燈箱.querySelector('img');
const 燈箱說明 = 圖片燈箱.querySelector('figcaption');
let 目前圖片清單 = [];
let 目前圖片索引 = 0;

const 作品資料 = {
  food: { 類型:'UI／UX｜行動應用程式', 名稱:'食健', 介紹:'以飲食紀錄為核心的健康管理 APP。專案將餐點新增、營養資訊、生活建議與專家諮詢整合為一段容易追蹤的使用流程。', 重點:['從日常飲食情境出發，整理紀錄、查詢與諮詢需求','規劃首頁、日記與專家諮詢等主要功能入口','透過清楚的視覺層級，降低每日紀錄的操作負擔'], 圖片:['圖片/UI&UX/飲食紀錄app-食健/首頁.png','圖片/UI&UX/飲食紀錄app-食健/mockup_日記.png','圖片/UI&UX/飲食紀錄app-食健/mockup_生活.png','圖片/UI&UX/飲食紀錄app-食健/mockup_專家諮詢.png'], 連結:'https://canva.link/iowjqv8r61stmm2', 手機圖:true },
  coding: { 類型:'UI／UX｜教育應用程式', 名稱:'Coding Learning 可丁程式酷', 介紹:'為兒童設計的程式學習 APP，利用課程、問答與遊戲任務，將抽象的程式概念拆成具體、循序的學習步驟。', 重點:['建立兒童學習者的使用情境與目標','安排課程單元、互動問答與遊戲回饋的學習流程','以遊戲化視覺提升探索與完成任務的動機'], 圖片:['圖片/UI&UX/兒童程式教育app-Coding Learning/首頁.png','圖片/UI&UX/兒童程式教育app-Coding Learning/Home.png','圖片/UI&UX/兒童程式教育app-Coding Learning/class.png','圖片/UI&UX/兒童程式教育app-Coding Learning/class_QA1.png','圖片/UI&UX/兒童程式教育app-Coding Learning/class_test.png','圖片/UI&UX/兒童程式教育app-Coding Learning/class_unit.png','圖片/UI&UX/兒童程式教育app-Coding Learning/Game.png','圖片/UI&UX/兒童程式教育app-Coding Learning/game_adventrue.png','圖片/UI&UX/兒童程式教育app-Coding Learning/game_UI1.png','圖片/UI&UX/兒童程式教育app-Coding Learning/shop.png','圖片/UI&UX/兒童程式教育app-Coding Learning/shop_buy.png'], 連結:'https://canva.link/i443v4mrol8wxb1', 手機圖:true },
  planfit: { 類型:'UI／UX｜網站設計', 名稱:'PlanFIT', 介紹:'個人健身計劃網站，將運動安排、個人資訊與課表管理收斂在一致的網站流程中，讓使用者更容易規劃與追蹤自己的健身目標。', 重點:['整理健身使用者從瀏覽、規劃到追蹤的操作路徑','設計網站首頁、訓練資訊與行事曆等主要頁面','維持資訊層級與操作介面的一致性'], 圖片:['圖片/UI&UX/個人健身計劃網站-PlanFIT/首頁.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/Planfit.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/127.0.0.1_3000_about (1).png','圖片/UI&UX/個人健身計劃網站-PlanFIT/contactus.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/127.0.0.1_3000_contact.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/calender1.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/calender2.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/calender4.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/workout1.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/workout3.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/editpage.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/editpage1.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/changepass.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/folder1.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/Screen Shot 2022-01-12 at 11.06.19 PM.png','圖片/UI&UX/個人健身計劃網站-PlanFIT/logo.png'] },
  gym: { 類型:'海報設計｜活動宣傳', 名稱:'活動宣傳海報', 介紹:'整合球館教練介紹、節慶活動與校隊徵選等宣傳需求，透過清楚的資訊層級與富有運動感的視覺語言，讓受眾快速掌握活動重點。', 重點:['依不同宣傳目的安排人物、標題與活動資訊的閱讀順序','運用色彩、字級與版面建立活力鮮明的視覺風格','兼顧社群曝光與校園、現場張貼情境的辨識性'], 圖片:['圖片/海報設計/高飛教練海報2.png','圖片/海報設計/高飛教練介紹海報-100.jpg','圖片/海報設計/輕鬆萬聖節海報-8.png','圖片/海報設計/徵人傳單A4.png','圖片/海報設計/112元智校羽徵選海報-100.jpg','圖片/海報設計/110徵選海報.png'] },
  puppet: { 類型:'美術｜實體創作', 名稱:'棒偶劇場', 介紹:'以棒偶劇場為主題，從角色、服裝到場景素材逐步完成製作，並以實體演出成果呈現故事與視覺氛圍。', 重點:['依劇場角色需求發展人物造型','設計服裝與場景素材，讓視覺語言保持一致','將設計轉化為實體作品並完成成果展示'], 圖片:[] },
  game: { 類型:'美術｜遊戲創作', 名稱:'遊戲', 介紹:'《減肥吧！豬豬》是一款結合迷宮探索與劇情任務的遊戲。玩家操作小明躲避野狼、機關與小泥獸，完成村莊任務並前往白鸛村取得神奇蘋果，向阿美告白。', 重點:['規劃以迷宮探索、任務與劇情推進交織的遊戲體驗','設計小明、阿美、狼大大等角色，以及關卡、場景與互動元素','依照企畫書的四個關卡需求，整合地圖、道具、機關與故事畫面'], 圖片:[] }
};

// 依棒偶劇場資料夾分類：角色、服裝、場景素材與最終成果。
作品資料.puppet.圖片分類 = [
  { 名稱: '角色設計', 圖片: ['圖片/美術/棒偶劇場/角色設計/工作區域 1-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 2-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 3-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 4-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 5-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 6-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 7-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 8-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 9-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 10-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 11-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 14-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 15-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 16-50.jpg', '圖片/美術/棒偶劇場/角色設計/工作區域 1 複本 17-50.jpg'] },
  { 名稱: '服裝設計', 圖片: ['圖片/美術/棒偶劇場/服裝設計/工作區域 1-20.jpg', '圖片/美術/棒偶劇場/服裝設計/工作區域 2-20.jpg', '圖片/美術/棒偶劇場/服裝設計/工作區域 3-20.jpg', '圖片/美術/棒偶劇場/服裝設計/工作區域 4-20.jpg'] },
  { 名稱: '成果照片', 圖片: ['圖片/美術/棒偶劇場/成果照片/成果照片.JPG', '圖片/美術/棒偶劇場/成果照片/成果照片-2.jpg'] }
];
作品資料.puppet.圖片 = ['圖片/美術/棒偶劇場/成果照片/成果照片.JPG', ...作品資料.puppet.圖片分類.flatMap((分類) => 分類.圖片)];

作品資料.game.圖片分類 = [
  { 名稱: '主視覺設計', 圖片: ['圖片/美術/遊戲/poster.jpg', '圖片/美術/遊戲/logo.png'] },
  { 名稱: '場景與關卡', 圖片: ['圖片/美術/遊戲/關卡圖/game1_1.png', '圖片/美術/遊戲/關卡圖/game3.png', '圖片/美術/遊戲/關卡圖/game4.png', '圖片/美術/遊戲/遊戲房間/room_back-20.jpg'] },
  { 名稱: '故事劇情', 圖片: ['圖片/美術/遊戲/劇情圖/PART1_3.jpg', '圖片/美術/遊戲/劇情圖/PART4.jpg'] },
  { 名稱: '角色設計', 圖片: ['圖片/美術/遊戲/角色設計/黑鶴村阿美.png', '圖片/美術/遊戲/角色設計/狼大大.png', '圖片/美術/遊戲/角色設計/role2_4.png', '圖片/美術/遊戲/角色設計/NPC2_1.png', '圖片/美術/遊戲/角色設計/NPC2_2.png', '圖片/美術/遊戲/角色設計/NPC2_3.png', '圖片/美術/遊戲/角色設計/fat_阿美.png', '圖片/美術/遊戲/角色設計/fat_小明.png'] },
  { 名稱: '角色服裝', 圖片: ['圖片/美術/遊戲/角色造型/clothe1.png', '圖片/美術/遊戲/角色造型/clothe3.png', '圖片/美術/遊戲/角色造型/colthe6.png', '圖片/美術/遊戲/角色造型/colthe7.png', '圖片/美術/遊戲/角色造型/colthe9.png', '圖片/美術/遊戲/角色造型/colthe11.png', '圖片/美術/遊戲/角色造型/colthe12.png', '圖片/美術/遊戲/角色造型/colthe13.png'] },
  { 名稱: '互動元素', 圖片: ['圖片/美術/遊戲/遊戲元素/coin.png', '圖片/美術/遊戲/遊戲元素/tool_backpack.png', '圖片/美術/遊戲/遊戲元素/tool2_bread1.png', '圖片/美術/遊戲/遊戲元素/tool2_bread2.png', '圖片/美術/遊戲/遊戲元素/tool2_bread3.png', '圖片/美術/遊戲/遊戲元素/tool2_flour.png', '圖片/美術/遊戲/遊戲元素/tool2_milk.png'] }
];
作品資料.game.圖片 = ['圖片/美術/遊戲/遊戲封面.jpg', ...作品資料.game.圖片分類.flatMap((分類) => 分類.圖片)];

function 顯示作品詳細(作品代號) {
  const 作品 = 作品資料[作品代號];
  if (!作品) return;
  if (作品.圖片分類) {
    顯示分類作品詳細(作品);
    return;
  }
  const 圖片樣式 = 作品.手機圖 ? '手機圖' : '';
  const 作品連結 = 作品.連結 ? `<a href="${作品.連結}" target="_blank" rel="noreferrer">查看完整設計說明 ↗</a>` : '';
  詳細區塊.innerHTML = `<div class="detail-top"><div><p class="detail-type">${作品.類型}</p><h2>${作品.名稱}</h2></div><button class="detail-close" type="button">收合介紹 ×</button></div><div class="detail-content"><div class="detail-copy"><p>${作品.介紹}</p><h3>設計與參與重點</h3><ul>${作品.重點.map((重點) => `<li>${重點}</li>`).join('')}</ul>${作品連結}</div><div class="detail-gallery">${作品.圖片.map((圖片, 索引) => `<button class="detail-image-button" type="button" data-image-index="${索引}" aria-label="放大檢視第 ${索引 + 1} 張圖片"><img class="${圖片樣式}" src="${圖片}" alt="${作品.名稱}作品圖片 ${索引 + 1}"></button>`).join('')}</div></div>`;
  詳細區塊.classList.add('active');
  詳細區塊.querySelectorAll('[data-image-index]').forEach((按鈕) => 按鈕.addEventListener('click', () => 開啟圖片燈箱(作品.名稱, 作品.圖片, Number(按鈕.dataset.imageIndex))));
  詳細區塊.scrollIntoView({ behavior: 'smooth', block: 'start' });
  詳細區塊.querySelector('.detail-close').addEventListener('click', () => {
    詳細區塊.classList.remove('active');
  });
}

function 顯示分類作品詳細(作品) {
  let 圖片索引 = 1;
  const 分類圖庫 = 作品.圖片分類.map((分類) => {
    const 圖片按鈕 = 分類.圖片.map((圖片, 分類索引) => {
      const 目前索引 = 圖片索引++;
      // 故事劇情的兩張預設圖片皆放大兩倍，以突顯敘事內容。
      const 圖片樣式 = 分類.名稱 === '故事劇情' ? 'game-image-button game-story-feature' : 'game-image-button';
      return `<button class="${圖片樣式}" type="button" data-image-index="${目前索引}" aria-label="放大檢視${分類.名稱}圖片"><img src="${圖片}" alt="${作品.名稱}${分類.名稱}圖片"></button>`;
    }).join('');
    const 分類樣式 = 分類.名稱 === '成果照片' ? 'game-gallery-group game-results-gallery' : 'game-gallery-group';
    return `<section class="${分類樣式}"><h3>${分類.名稱}</h3><div class="game-image-grid">${圖片按鈕}</div></section>`;
  }).join('');

  詳細區塊.innerHTML = `<div class="detail-top"><div><p class="detail-type">${作品.類型}</p><h2>${作品.名稱}</h2></div><button class="detail-close" type="button">收合介紹 ×</button></div><div class="game-intro"><div class="detail-copy"><p>${作品.介紹}</p><h3>設計與參與重點</h3><ul>${作品.重點.map((重點) => `<li>${重點}</li>`).join('')}</ul></div><button class="game-cover" type="button" data-image-index="0" aria-label="放大檢視${作品.名稱}主圖"><img src="${作品.圖片[0]}" alt="${作品.名稱}主圖"></button></div><div class="game-gallery-list">${分類圖庫}</div>`;
  詳細區塊.classList.add('active');
  詳細區塊.querySelectorAll('[data-image-index]').forEach((按鈕) => 按鈕.addEventListener('click', () => 開啟圖片燈箱(作品.名稱, 作品.圖片, Number(按鈕.dataset.imageIndex))));
  詳細區塊.scrollIntoView({ behavior: 'smooth', block: 'start' });
  詳細區塊.querySelector('.detail-close').addEventListener('click', () => 詳細區塊.classList.remove('active'));
}

function 顯示燈箱圖片() {
  const 圖片路徑 = 目前圖片清單[目前圖片索引];
  燈箱圖片.src = 圖片路徑;
  燈箱圖片.alt = `放大檢視作品圖片 ${目前圖片索引 + 1}`;
  燈箱說明.textContent = `${目前圖片索引 + 1} ／ ${目前圖片清單.length}`;
}

function 開啟圖片燈箱(作品名稱, 圖片清單, 圖片索引) {
  目前圖片清單 = 圖片清單;
  目前圖片索引 = 圖片索引;
  圖片燈箱.dataset.workName = 作品名稱;
  顯示燈箱圖片();
  圖片燈箱.classList.add('open');
  圖片燈箱.setAttribute('aria-hidden', 'false');
}

function 關閉圖片燈箱() {
  圖片燈箱.classList.remove('open');
  圖片燈箱.setAttribute('aria-hidden', 'true');
}

圖片燈箱.querySelector('.lightbox-close').addEventListener('click', 關閉圖片燈箱);
圖片燈箱.querySelector('.lightbox-prev').addEventListener('click', () => { 目前圖片索引 = (目前圖片索引 - 1 + 目前圖片清單.length) % 目前圖片清單.length; 顯示燈箱圖片(); });
圖片燈箱.querySelector('.lightbox-next').addEventListener('click', () => { 目前圖片索引 = (目前圖片索引 + 1) % 目前圖片清單.length; 顯示燈箱圖片(); });
圖片燈箱.addEventListener('click', (事件) => { if (事件.target === 圖片燈箱) 關閉圖片燈箱(); });
document.addEventListener('keydown', (事件) => { if (!圖片燈箱.classList.contains('open')) return; if (事件.key === 'Escape') 關閉圖片燈箱(); if (事件.key === 'ArrowLeft') 圖片燈箱.querySelector('.lightbox-prev').click(); if (事件.key === 'ArrowRight') 圖片燈箱.querySelector('.lightbox-next').click(); });

下拉選單按鈕.addEventListener('click', () => {
  const 已開啟 = 下拉選單容器.classList.toggle('open');
  下拉選單按鈕.setAttribute('aria-expanded', String(已開啟));
});

導覽作品連結.forEach((連結) => {
  連結.addEventListener('click', () => {
    下拉選單容器.classList.remove('open');
    下拉選單按鈕.setAttribute('aria-expanded', 'false');
    setTimeout(() => 顯示作品詳細(連結.dataset.workNav), 80);
  });
});
作品卡片.forEach((卡片) => {
  卡片.addEventListener('click', () => 顯示作品詳細(卡片.dataset.workCard));
  卡片.addEventListener('keydown', (事件) => { if (事件.key === 'Enter' || 事件.key === ' ') 顯示作品詳細(卡片.dataset.workCard); });
});

function 顯示頁面() {
  const 目標 = location.hash || '#home';
  const 顯示目標 = 目標 === '#pm-skills' ? '#home' : 目標;
  let 有符合頁面 = false;

  頁面.forEach((頁面元素) => {
    const 是目前頁面 = `#${頁面元素.id}` === 顯示目標;
    頁面元素.classList.toggle('active', 是目前頁面);
    有符合頁面 ||= 是目前頁面;
  });

  if (!有符合頁面) location.hash = '#home';

  選單連結.forEach((連結) => {
    連結.classList.toggle('active', 連結.getAttribute('href') === 顯示目標);
  });

  導覽列.classList.remove('open');
  選單按鈕.setAttribute('aria-expanded', 'false');
  下拉選單容器.classList.remove('open');
  下拉選單按鈕.setAttribute('aria-expanded', 'false');
  if (目標 === '#pm-skills') {
    document.querySelector('#pm-skills').scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

選單按鈕.addEventListener('click', () => {
  const 已開啟 = 導覽列.classList.toggle('open');
  選單按鈕.setAttribute('aria-expanded', String(已開啟));
});

window.addEventListener('hashchange', 顯示頁面);
顯示頁面();
