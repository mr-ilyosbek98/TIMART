/* ═══════════════════════════════════════════════════════════════════
   TIMART.UZ — common.js
   Umumiy ma'lumotlar qatlami (Store data layer).

   MAQSAD: categories/shops/orders/halalCerts standart ma'lumotlari va
   ularning localStorage bilan saqlash mantiqi — ENDI BITTA JOYDA.
   Har bir HTML fayl shu faylga <script src="common.js"></script> orqali
   ulanadi va o'z Store obyektida shu funksiyalarga delegatsiya qiladi.

   NEGA: 9 faylda bir xil kod nusxalangani ko'p marta sinxronizatsiya
   xatolariga olib keldi (categories, shops, orders, halalCerts —
   barchasi turli vaqtda bir-biridan uzilib qolgan edi). Bu fayl
   shu klassdagi xatolarni ildizidan yo'q qiladi: bitta joyda tuzatilgan
   narsa avtomatik barcha sahifalarda ishlaydi.

   QO'SHIMCHA: try/catch bilan himoyalangan — agar localStorage'dagi
   ma'lumot buzilgan bo'lsa, standart qiymatga qaytadi, sahifa
   buzilmaydi (Frontend-bosqichidagi mustahkamlik tamoyili).
   ═══════════════════════════════════════════════════════════════════ */

const TimartShared = {

  // ── CATEGORIES ──
  _defaultCategories: [
    { id:"food",       name:"Oziq-ovqat",    nameKo:"식품",    icon:"🥩", count:847,  subcats:["Go'sht","Sabzavot","Meva","Non","Sut mahsulotlari","Ichimlik"] },
    { id:"halal",      name:"Halol mahsulot", nameKo:"할랄",   icon:"☪️", count:312,  subcats:["Halol go'sht","Halol taom","Halol kosmetika"] },
    { id:"realty",     name:"Ko'chmas mulk",  nameKo:"부동산", icon:"🏠", count:156,  subcats:["Ijara","Kvartira","Xona","Ofis"] },
    { id:"elec",       name:"Elektronika",    nameKo:"전자제품",icon:"📱", count:423,  subcats:["Telefon","Noutbuk","TV","Kamera"] },
    { id:"clothes",    name:"Kiyim-kechak",   nameKo:"의류",   icon:"👗", count:634,  subcats:["Erkak","Ayol","Bola","Sport"] },
    { id:"cars",       name:"Avtomobil",      nameKo:"자동차", icon:"🚗", count:89,   subcats:["Sotish","Ehtiyot qism","Servis"] },
    { id:"jobs",       name:"Ish o'rinlari",  nameKo:"구직",   icon:"💼", count:203,  subcats:["Ishchi","Oshpaz","Haydovchi","Qurilish"] },
    { id:"services",   name:"Xizmatlar",      nameKo:"서비스", icon:"🔧", count:178,  subcats:["Tarjimon","Yurist","Shifokor","Ta'mirlash"] },
    { id:"kids",       name:"Bolalar",        nameKo:"유아용품",icon:"🧸", count:291,  subcats:["O'yinchoq","Kiyim","Arava","Kitob"] },
    { id:"beauty",     name:"Go'zallik",      nameKo:"뷰티",   icon:"💄", count:167,  subcats:["Makiyaj","Parfyum","Soch","Teri parvarishi"] },
    { id:"furniture",  name:"Mebel",          nameKo:"가구",   icon:"🛋️", count:134,  subcats:["Stol-stul","Krovat","Shkaf","Dekor"] },
    { id:"books",      name:"Kitob & Hobby",  nameKo:"도서",   icon:"📚", count:98,   subcats:["Kitob","Musiqa","Sport","Kolleksiya"] }
  ],

  getCategories() {
    try {
      const saved = localStorage.getItem("timart_categories");
      return saved ? JSON.parse(saved) : this._defaultCategories;
    } catch (e) { console.warn("timart_categories buzilgan", e); return this._defaultCategories; }
  },
  setCategories(val) {
    localStorage.setItem("timart_categories", JSON.stringify(val));
  },

  // ── SHOPS ──
  _defaultShops: [
    {
      id:"shop_001", ownerId:"user_003", name:"Bobur's Halol Market", nameKo:"보부르 할랄 마켓",
      description:"Koreyadagi eng yaxshi halol oshxona va mahsulot do'koni. 2019 yildan beri faoliyatda.",
      logo:"https://ui-avatars.com/api/?name=BH&background=2ECC8A&color=fff&size=200",
      bannerColor:"linear-gradient(135deg,#1A9962,#0D1526)", tag:"Halol oshxona va market",
      city:"Ansan", address:"경기도 안산시 단원구 원곡동 789-12", phone:"+82-10-5555-9999",
      lat:37.3219, lng:126.8309,
      workHours:"10:00-22:00", category:"halal", isHalol:true, halalCertId:"cert_002",
      rating:4.8, reviewCount:234, followerCount:1240, plan:"business", isVerified:true,
      productCount:118, createdAt:"2025-08-20"
    },
    {
      id:"shop_002", ownerId:"user_001", name:"Alisher Electronics", nameKo:"알리셔 전자제품",
      description:"Ikkinchi qo'l va yangi elektronika mahsulotlari. Barcha mahsulotlar tekshirilgan.",
      logo:"https://ui-avatars.com/api/?name=AE&background=C9A84C&color=080D1A&size=200",
      bannerColor:"linear-gradient(135deg,#9A7A30,#0D1526)", tag:"Yangi va ikkinchi qo'l texnika",
      city:"Hwaseong", address:"경기도 화성시 향남읍 발안로 123", phone:"+82-10-1234-5678",
      lat:37.1996, lng:126.8312,
      workHours:"09:00-21:00", category:"elec", isHalol:false, halalCertId:null,
      rating:4.5, reviewCount:89, followerCount:456, plan:"premium", isVerified:true,
      productCount:61, createdAt:"2025-09-01"
    },
    {
      id:"shop_003", ownerId:"user_002", name:"Sunny Telecom", nameKo:"써니 텔레콤",
      description:"Yangi va ikkinchi qo'l telefonlar, aksessuarlar, ekran almashtirish xizmati.",
      logo:"https://ui-avatars.com/api/?name=ST&background=4A9EF5&color=fff&size=200",
      bannerColor:"linear-gradient(135deg,#7A1F2E,#2A0A10)", tag:"New & Used phones",
      city:"Ansan", address:"경기도 안산시 단원구 원곡동 321", phone:"+82-10-7777-3333",
      lat:37.3198, lng:126.8275,
      workHours:"10:00-20:00", category:"elec", isHalol:false, halalCertId:null,
      rating:4.6, reviewCount:142, followerCount:610, plan:"business", isVerified:true,
      productCount:61, createdAt:"2025-07-11"
    },
    {
      id:"shop_004", ownerId:"user_003", name:"Mazza Oshxona", nameKo:"마짜 식당",
      description:"O'zbek va Markaziy Osiyo milliy taomlari. Osh, manti, somsa — har kuni yangi.",
      logo:"https://ui-avatars.com/api/?name=MO&background=E84B6A&color=fff&size=200",
      bannerColor:"linear-gradient(135deg,#9A2030,#0D1526)", tag:"Milliy taomlar",
      city:"Suwon", address:"경기도 수원시 팔달구 232", phone:"+82-10-4444-8181",
      lat:37.2636, lng:127.0286,
      workHours:"11:00-22:00", category:"food", isHalol:true, halalCertId:"cert_005",
      rating:4.9, reviewCount:301, followerCount:1890, plan:"business", isVerified:true,
      productCount:5, createdAt:"2025-05-02"
    }
  ],

  getShops() {
    try {
      const saved = localStorage.getItem("timart_shops_data");
      return saved ? JSON.parse(saved) : this._defaultShops;
    } catch (e) { console.warn("timart_shops_data buzilgan", e); return this._defaultShops; }
  },
  setShops(val) {
    localStorage.setItem("timart_shops_data", JSON.stringify(val));
  },

  // ── ORDERS (statik demo + checkout.html'dan kelgan real buyurtmalar birlashtiriladi) ──
  _defaultOrders: [
    {
      id:"ord_001", buyerId:"user_002", sellerId:"user_001", listingId:"lst_001",
      items:[{title:"Yangi qo'y go'shti",price:28000,qty:2,photo:"https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=100"}],
      subtotal:56000, deliveryFee:0, discount:5600, total:50400,
      paymentMethod:"kakao_pay", paymentId:"kakao_2026061701",
      status:"completed", cashback:504,
      deliveryAddr:{ name:"Zulfiya", phone:"+82-10-8765-4321", address:"경기도 안산시 단원구 원곡동 456" },
      deliveryTime:"14:00-16:00", note:"Eshikni 2 marta taqillatsin",
      couponCode:"TIMART10", createdAt:"2026-06-15", completedAt:"2026-06-15"
    },
    {
      id:"ord_002", buyerId:"user_002", sellerId:"user_002", listingId:"lst_002",
      items:[{title:"Samsung Galaxy S24 Ultra",price:850000,qty:1,photo:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100"}],
      subtotal:850000, deliveryFee:3500, discount:0, total:853500,
      paymentMethod:"naver_pay", paymentId:"naver_2026061601",
      status:"delivering", cashback:4268,
      deliveryAddr:{ name:"Zulfiya", phone:"+82-10-8765-4321", address:"경기도 안산시 단원구 원곡동 456" },
      deliveryTime:"10:00-12:00", note:null, couponCode:null,
      createdAt:"2026-06-16"
    },
    {
      id:"ord_003", buyerId:"user_001", sellerId:"user_003", listingId:"lst_004", shopId:"shop_001",
      items:[{title:"Osh porasi (2 kishilik)",price:15000,qty:3,photo:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100"}],
      subtotal:45000, deliveryFee:0, discount:0, total:45000,
      paymentMethod:"cash", paymentId:null,
      status:"confirmed", cashback:225,
      deliveryAddr:{ name:"Alisher", phone:"+82-10-1234-5678", address:"경기도 화성시 향남읍 발안로 123" },
      deliveryTime:"19:00-21:00", note:"Ko'proq zira qo'ysın", couponCode:null,
      createdAt:"2026-06-17"
    }
  ],

  getOrders() {
    let real = [];
    try {
      const saved = localStorage.getItem("timart_orders");
      real = saved ? JSON.parse(saved) : [];
    } catch (e) { console.warn("timart_orders buzilgan", e); real = []; }
    return [...this._defaultOrders, ...real];
  },
  setOrders(val) {
    localStorage.setItem("timart_orders", JSON.stringify(val.filter(o => !this._defaultOrders.some(d => d.id === o.id))));
  },

  // ── HALAL CERTS ──
  _defaultHalalCerts: [
    { id:"cert_001", shopId:null, listingId:"lst_001", certNumber:"KHC-2025-8847", issuer:"Korea Halal Authority", validFrom:"2025-01-01", validTo:"2026-12-31", isActive:true },
    { id:"cert_002", shopId:"shop_001", listingId:null, certNumber:"KHC-2025-5521", issuer:"Korea Muslim Federation", validFrom:"2025-03-01", validTo:"2027-02-28", isActive:true }
  ],

  getHalalCerts() {
    try {
      const saved = localStorage.getItem("timart_halal_certs_admin");
      return saved ? JSON.parse(saved) : this._defaultHalalCerts;
    } catch (e) { console.warn("timart_halal_certs_admin buzilgan", e); return this._defaultHalalCerts; }
  },
  setHalalCerts(val) {
    localStorage.setItem("timart_halal_certs_admin", JSON.stringify(val));
  }

};


/* ═══════════════════════════════════════════════════════════════════
   MOSQUES — statik ro'yxat + hamjamiyat tomonidan qo'shilgan
   (admin tasdiqlagan) masjidlar birlashtiriladi.
   ═══════════════════════════════════════════════════════════════════ */
TimartShared._defaultMosques = [
    { id:"msj_001", name:"Namyang Islam", city:"Hwaseong", address:"경기 화성시 남양읍 남양시장로 81 3F", lat:37.2186, lng:126.7939, phone:null, rating:5.0, reviewCount:1 },
    { id:"msj_002", name:"Ansan Central Musalla", city:"Ansan", address:"경기 안산시 단원구 원곡동 산업단지", lat:37.3219, lng:126.8309, phone:"010-4321-7788", rating:4.8, reviewCount:62 },
    { id:"msj_003", name:"Suwon Islamic Center", city:"Suwon", address:"경기 수원시 팔달구 매산로 14", lat:37.2636, lng:127.0286, phone:"010-9988-2211", rating:4.6, reviewCount:34 },
    { id:"msj_004", name:"Hwaseong Hyangnam Masjid", city:"Hwaseong", address:"경기 화성시 향남읍 행정타운로 45", lat:37.1996, lng:126.8312, phone:"010-2333-6944", rating:4.9, reviewCount:88 }
  ],

TimartShared.getMosques = function() {
  try {
    const approved = JSON.parse(localStorage.getItem("timart_mosques_pending") || "[]").filter(m=>m.status==="approved");
    return [...this._defaultMosques, ...approved];
  } catch (e) { console.warn("timart_mosques_pending buzilgan", e); return this._defaultMosques; }
};

/* ═══════════════════════════════════════════════════════════════════
   REVIEWS — statik demo sharhlar va foydalanuvchi yozgan real sharhlar
   BITTA umumiy formatga normallashtiriladi:
   { id, authorName, rating, text, createdAt, targetType, targetId, sellerId }
   - targetType/targetId: 'listing'|'seller'|'shop' + tegishli ID
   - sellerId: faqat targetType bo'yicha emas, to'g'ridan-to'g'ri sotuvchi
     reytingini hisoblash uchun qo'shimcha maydon (submitReview() shu
     maydonni to'ldiradi, statik 'seller' yozuvlar uchun ham to'ldiriladi)
   ═══════════════════════════════════════════════════════════════════ */
TimartShared._defaultReviews = [
    { id:"rev_001", userId:"user_002", userName:"Zulfiya T.", targetId:"user_001", targetType:"seller", rating:5, text:"Juda yaxshi sotuvchi! Mahsulot tavsifda aytilganidek. Tez javob berdi.", createdAt:"2026-06-15" },
    { id:"rev_002", userId:"user_001", userName:"Alisher K.", targetId:"shop_001", targetType:"shop", rating:5, text:"Halol taomlar juda mazali. Ansan yaqinida eng yaxshi o'zbek oshxonasi!", createdAt:"2026-06-12" },
    { id:"rev_003", userId:"user_003", userName:"Bobur Y.", targetId:"lst_002", targetType:"listing", rating:4, text:"Telefon yaxshi holda. Faqat batareya biroz kamaygan.", createdAt:"2026-06-16" }
  ],

TimartShared.getReviews = function() {
  const staticReviews = this._defaultReviews.map(r => ({
    id: r.id, authorName: r.userName, rating: r.rating, text: r.text, createdAt: r.createdAt,
    targetType: r.targetType, targetId: r.targetId,
    sellerId: r.targetType === "seller" ? r.targetId : null,
    isSubmitted: false // statik demo ma'lumot — agregatsiyada qayta sanalmasligi uchun belgi
  }));
  let submitted = [];
  try {
    const raw = JSON.parse(localStorage.getItem("timart_reviews") || "[]");
    submitted = raw.map(r => ({
      id: r.id, authorName: r.reviewerName, rating: r.rating, text: r.text, createdAt: r.createdAt,
      targetType: "listing", targetId: r.listingId, sellerId: r.sellerId,
      isSubmitted: true // real, foydalanuvchi yozgan sharh
    }));
  } catch (e) { console.warn("timart_reviews buzilgan", e); submitted = []; }
  return [...staticReviews, ...submitted];
};

/* ═══════════════════════════════════════════════════════════════════
   AUTH — login holati, sahifalar orasida bir xil (9 faylda dublikat edi)
   ═══════════════════════════════════════════════════════════════════ */
const Auth = {
  currentUser: null,

  init() {
    const saved = localStorage.getItem("timart_user");
    if (saved) {
      this.currentUser = JSON.parse(saved);
    } else {
      this.currentUser = Store.currentUser;
      localStorage.setItem("timart_user", JSON.stringify(this.currentUser));
    }
    return this.currentUser;
  },

  signIn(userData) {
    this.currentUser = userData;
    localStorage.setItem("timart_user", JSON.stringify(userData));
    return userData;
  },

  signOut() {
    this.currentUser = null;
    localStorage.removeItem("timart_user");
    window.location.href = "index.html";
  },

  isAdmin()   { return this.currentUser?.role === "admin"; },
  isSeller()  { return ["seller","admin"].includes(this.currentUser?.role); },
  isPremium() { return ["premium","business"].includes(this.currentUser?.plan); },
  isBusiness(){ return this.currentUser?.plan === "business"; }
};


/* ═══════════════════════════════════════════════════════════════════
   UTILS — formatlash, modal, toast va boshqa yordamchi funksiyalar
   ═══════════════════════════════════════════════════════════════════ */
const Utils = {
  safeParseLS(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.warn(`localStorage["${key}"] buzilgan, standart qiymat ishlatildi`, e);
      return fallback;
    }
  },
  getFavorites() {
    return Utils.safeParseLS("timart_favorites", []);
  },
  toggleFavoriteId(id, price) {
    let favs = Utils.getFavorites();
    const idx = favs.indexOf(id);
    let isFav;
    if (idx === -1) {
      favs.push(id);
      isFav = true;
      // Narx pasayishi bildirishnomasi uchun — sevimliga qo'shilgan vaqtdagi narxni saqlaymiz
      if (price !== undefined) {
        const prices = Utils.safeParseLS("timart_favorite_prices", {});
        prices[id] = price;
        localStorage.setItem("timart_favorite_prices", JSON.stringify(prices));
      }
    } else {
      favs.splice(idx, 1);
      isFav = false;
      const prices = Utils.safeParseLS("timart_favorite_prices", {});
      delete prices[id];
      localStorage.setItem("timart_favorite_prices", JSON.stringify(prices));
    }
    localStorage.setItem("timart_favorites", JSON.stringify(favs));
    return isFav;
  },
  // ── Sevimlilarda narx pasayishi — Store.listings bilan solishtirib aniqlaydi ──
  checkFavoritePriceDrops(listings) {
    const prices = Utils.safeParseLS("timart_favorite_prices", {});
    const drops = [];
    Object.entries(prices).forEach(([id, oldPrice]) => {
      const listing = listings.find(l => l.id === id);
      if (listing && listing.price < oldPrice) {
        drops.push({ id, title: listing.title, oldPrice, newPrice: listing.price });
      }
    });
    return drops;
  },
  // ── Xarita tugmalari — Kakao/Naver ilovasiga yo'naltirish (API kalit kerak emas) ──
  mapButtonsHtml(name, address, lat, lng) {
    const kakaoUrl = (lat && lng)
      ? `https://map.kakao.com/link/map/${encodeURIComponent(name||address)},${lat},${lng}`
      : `https://map.kakao.com/link/search/${encodeURIComponent(address||name)}`;
    const naverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(address||name)}`;
    return `
      <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();window.open('${kakaoUrl}','_blank')">KakaoMap</button>
      <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();window.open('${naverUrl}','_blank')">NaverMap</button>`;
  },
  formatKRW(n) {
    if (!n && n !== 0) return "—";
    if (n >= 1000000) return `₩${(n/1000000).toFixed(1)}M`;
    if (n >= 10000)   return `₩${Math.round(n/1000).toLocaleString()}K`;
    return `₩${n.toLocaleString()}`;
  },

  formatKRWFull(n) {
    return `₩${(n||0).toLocaleString()}`;
  },

  timeAgo(dateStr) {
    const d = new Date(dateStr), now = new Date();
    const diff = (now - d) / 1000;
    if (diff < 60)   return "hozirgina";
    if (diff < 3600) return `${Math.floor(diff/60)} daqiqa oldin`;
    if (diff < 86400)return `${Math.floor(diff/3600)} soat oldin`;
    if (diff < 604800) return `${Math.floor(diff/86400)} kun oldin`;
    return d.toLocaleDateString("uz-UZ");
  },

  shortDate(dateStr) {
    const d = new Date(dateStr);
    return `${d.getDate()}-${d.toLocaleString("uz-UZ",{month:"short"})} ${d.getFullYear()}`;
  },

  // Karrot-style GPS distance (Haversine, km)
  distanceKm(lat1, lng1, lat2, lng2) {
    if ([lat1,lng1,lat2,lng2].some(v => v === undefined || v === null)) return null;
    const R = 6371, toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2-lat1), dLng = toRad(lng2-lng1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLng/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  },

  formatDist(km) {
    if (km === null || km === undefined) return "";
    if (km < 1) return `${Math.round(km*1000)} m`;
    return `${km.toFixed(1)} km`;
  },

  stars(rating, max=5) {
    let html = '<div class="stars">';
    for (let i=1; i<=max; i++) {
      const f = rating >= i ? "filled" : rating >= i-0.5 ? "half" : "";
      html += `<span class="star ${f}">★</span>`;
    }
    return html + "</div>";
  },

  badge(text, color="slate") {
    return `<span class="badge badge-${color}">${text}</span>`;
  },

  statusBadge(status, map) {
    const s = map[status] || { label: status, color:"slate" };
    return `<span class="badge badge-${s.color}">${s.label}</span>`;
  },

  toast(msg, type="success", duration=3500) {
    const icons = {
      success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"/></svg>',
      error:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><triangle/><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    };
    const container = document.getElementById("toast-container") || (() => {
      const el = document.createElement("div");
      el.id = "toast-container";
      el.className = "toast-container";
      document.body.appendChild(el);
      return el;
    })();
    const el = document.createElement("div");
    el.className = `toast ${type}`;
    el.innerHTML = `<span class="toast-icon">${icons[type]||icons.success}</span><span class="toast-text">${msg}</span>`;
    container.appendChild(el);
    setTimeout(() => el.remove(), duration);
  },

  // ── #15-band: telefon "Orqaga" tugmasi bilan sinxronlash ──
  // Modal ochilganda — history'ga yozamiz. Yopilganda — orqaga qaytamiz
  // (popstate orqali). Natija: telefon tugmasi modalni TO'G'RI yopadi,
  // butun sahifadan chiqib ketmaydi.
  openModal(id) {
    document.getElementById(id)?.classList.add("open");
    history.pushState({ timartModal: id }, "", location.href);
  },
  closeModal(id) {
    document.getElementById(id)?.classList.remove("open");
    if (history.state?.timartModal === id) history.back();
  },

  animateCounter(el, target, duration=1200) {
    const start = 0, step = target / (duration / 16);
    let cur = start;
    const format = el.dataset.format || "number";
    const run = () => {
      cur = Math.min(cur + step, target);
      if (format === "krw") el.textContent = Utils.formatKRW(cur);
      else el.textContent = Math.floor(cur).toLocaleString();
      if (cur < target) requestAnimationFrame(run);
    };
    run();
  },

  uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },

  debounce(fn, delay=300) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), delay); };
  },

  getCurrentPrayer() {
    const now = new Date();
    const hhmm = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
    const times = Store.prayerTimes.times;
    let current = times[times.length-1];
    for (let i=0; i<times.length; i++) {
      if (hhmm >= times[i].time) current = times[i];
    }
    return current;
  },

  getNextPrayer() {
    const now = new Date();
    const hhmm = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
    const times = Store.prayerTimes.times;
    for (let i=0; i<times.length; i++) {
      if (hhmm < times[i].time) return times[i];
    }
    return times[0]; // bomdod — ertaga
  }
};


/* ═══════════════════════════════════════════════════════════════════
   DIASPORA YORDAM — faqat vositachi: ro'yxat ko'rsatamiz, xizmatni o'zimiz
   ko'rsatmaymiz. Rasmiy raqamlar (1345, 1350, 1644-0644, elchixona) —
   tasdiqlangan manbalardan (mfa.uz, Korea hukumat saytlari). Pul
   o'tkazish/dafn agentliklari kabi aniq biznes nomlari TO'QIB
   CHIQARILMAYDI — admin tasdiqlagandan keyin qo'shiladi (xavfsizlik
   tamoyili: noaniq/tasdiqlanmagan moliyaviy va diniy ma'lumot bermaslik).
   ═══════════════════════════════════════════════════════════════════ */
TimartShared._defaultDiasporaHelp = [
  // ── Elchixona / Favqulodda — rasmiy, tasdiqlangan manbadan (mfa.uz) ──
  { id:"dh_embassy_01", category:"embassy", name:"O'zbekiston Respublikasi Elchixonasi — Seul",
    address:"Diplomatic Center, Seocho-gu, Seoul", phone:"02-574-6554, 02-577-3660",
    notes:"Rasmiy sayt: uzbekistan.or.kr · Qo'ng'iroq qilishdan oldin saytda joriy ma'lumotni tasdiqlang.", verified:true },
  { id:"dh_embassy_02", category:"embassy", name:"Koreya umumiy favqulodda raqamlari",
    address:"Butun Koreya bo'yicha", phone:"112 (politsiya) · 119 (tez yordam/o't o'chirish)",
    notes:"Tilni so'rang — tarjimon xizmati mavjud.", verified:true },

  // ── Mehnat huquqi — Koreya hukumati rasmiy ko'p tilli xizmatlari (o'zbek tili mavjud) ──
  { id:"dh_labor_01", category:"labor_rights", name:"1345 — Immigratsiya markazi (Immigration Contact Center)",
    address:"Butun Koreya bo'yicha, telefon orqali", phone:"1345 (ichkarida) / 82-1345 (chet eldan)",
    languages:"20 til, jumladan o'zbek", hours:"Dush-Juma 09:00-22:00",
    notes:"Vize, ro'yxatdan o'tish, immigratsiya savollari uchun rasmiy davlat xizmati.", verified:true },
  { id:"dh_labor_02", category:"labor_rights", name:"1350 — Mehnat huquqi telefon xizmati",
    address:"Butun Koreya bo'yicha, telefon orqali", phone:"1350",
    notes:"Ish haqi to'lanmasligi, shartnoma buzilishi, mehnat sharoiti shikoyatlari — Mehnat vazirligi rasmiy xizmati.", verified:true },
  { id:"dh_labor_03", category:"labor_rights", name:"1644-0644 — Migrant ishchilar yordam markazi",
    address:"Butun Koreya bo'yicha, telefon orqali", phone:"1644-0644 (yoki 1644-0655)",
    languages:"O'zbek tili mavjud (9-til)", notes:"Ish haqi, immigratsiya, turar-joy, hatto vafot/dafn masalalarida ham yordam beradi.", verified:true },

  // ── Pul o'tkazish — admin tasdiqlagan agentlik hali qo'shilmagan ──
  // (Aniq biznes nomi to'qib chiqarilmaydi — moliyaviy xavfsizlik tamoyili)

  // ── Diniy dafn marosimi — hozircha rasmiy yordam markazi orqali yo'naltiriladi ──
  { id:"dh_funeral_01", category:"funeral", name:"1644-0644 — Migrant ishchilar yordam markazi (vafot/dafn bo'limi)",
    address:"Butun Koreya bo'yicha, telefon orqali", phone:"1644-0644",
    notes:"Bu rasmiy xizmat vafot va dafn masalalarida ham yo'naltirish beradi. Diniy marosim uchun yaqin atrofdagi masjid/imom bilan ham bog'lanishingiz mumkin (Masjidlar bo'limi).", verified:true },

  // ── Vaqf jamg'armasi — VAQTINCHALIK YO'L (B-yo'l): to'lov tizimi yo'qligi sababli
  // TIMART pulni o'zi ushlamaydi. Hamkor tashkilot hisob raqami hali admin tomonidan
  // tasdiqlanmagan — shu sabab "verified:false" va aniq ogohlantirish bilan. Admin
  // haqiqiy hamkor (masjid/jamiyat tashkiloti) hisobini tasdiqlagandan keyin yangilanadi.
  { id:"dh_waqf_01", category:"waqf_donation", name:"Hamkor tashkilot hisob raqami — hali tasdiqlanmagan",
    address:"", phone:"",
    notes:"⚠️ Admin hali haqiqiy hamkor tashkilot (masjid/jamiyat) hisobini tasdiqlamagan. Hozircha sadaqa yubormang — bu yer yangilanguncha kuting.", verified:false }
];

TimartShared.getDiasporaHelp = function(category) {
  let admin = [];
  try {
    const saved = localStorage.getItem("timart_diaspora_help");
    admin = saved ? JSON.parse(saved) : [];
  } catch (e) { console.warn("timart_diaspora_help buzilgan", e); admin = []; }
  const all = [...this._defaultDiasporaHelp, ...admin];
  return category ? all.filter(h => h.category === category) : all;
};

TimartShared.setDiasporaHelp = function(adminEntries) {
  localStorage.setItem("timart_diaspora_help", JSON.stringify(adminEntries));
};

/* ═══════════════════════════════════════════════════════════════════
   VAQF — O'Z-O'ZIDAN E'LON QILINGAN HISSALAR (B-yo'l, vaqtinchalik)
   TIMART pulni o'zi ushlamaydi — bu shaxsiy e'lon, KAFOLAT EMAS.
   To'lov tizimi ishga tushganda, bu butunlay almashtiriladi (checkout'da
   1% avtomatik usuliga qaytiladi — haqiqiy pul harakati bilan).
   ═══════════════════════════════════════════════════════════════════ */
TimartShared.getWaqfPledges = function() {
  try {
    return JSON.parse(localStorage.getItem("timart_waqf_pledges") || "[]");
  } catch (e) { console.warn("timart_waqf_pledges buzilgan", e); return []; }
};

TimartShared.addWaqfPledge = function(amount, note) {
  const pledges = this.getWaqfPledges();
  pledges.push({ id: "pledge_" + Date.now(), amount, note: note || "", date: new Date().toISOString() });
  localStorage.setItem("timart_waqf_pledges", JSON.stringify(pledges));
  return pledges;
};

/* ═══════════════════════════════════════════════════════════════════
   VALYUTA KURSI — #7-band: ko'p valyuta. Bir martalik API so'rovi
   barcha kerakli valyutalarni qaytaradi (fawazahmed0/currency-api —
   bepul, kalit kerak emas, cheklovsiz). Migrant diaspora ko'p
   ishlatadigan: UZS, USD, RUB, EUR, KZT. Foydalanuvchi qaysisini
   ko'rishni tanlay oladi (homepage widget'da).
   ═══════════════════════════════════════════════════════════════════ */
const SUPPORTED_CURRENCIES = { uzs:"UZS", usd:"USD", rub:"RUB", eur:"EUR", kzt:"KZT" };
const DEFAULT_RATES = { uzs: 7.97, usd: 0.00072, rub: 0.063, eur: 0.00067, kzt: 0.36 };

TimartShared.getExchangeRate = function() {
  try {
    const saved = localStorage.getItem("timart_exchange_rate");
    return saved ? JSON.parse(saved) : { rates: DEFAULT_RATES, updatedAt: "2026-06-22", source: "standart" };
  } catch (e) { console.warn("timart_exchange_rate buzilgan", e); return { rates: DEFAULT_RATES, updatedAt: "2026-06-22", source: "standart" }; }
};

TimartShared.setExchangeRate = function(rates, date, source) {
  localStorage.setItem("timart_exchange_rate", JSON.stringify({ rates, updatedAt: date, source: source || "admin" }));
};

TimartShared.refreshExchangeRateFromAPI = async function() {
  const current = this.getExchangeRate();
  const hoursSinceUpdate = (Date.now() - new Date(current.updatedAt).getTime()) / 36e5;
  if (current.source === "api" && hoursSinceUpdate < 6) {
    return current; // hali yangi — qayta so'rov yubormaymiz
  }
  try {
    const res = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/krw.json");
    if (!res.ok) throw new Error("API javob bermadi: " + res.status);
    const data = await res.json();
    if (!data.krw) throw new Error("Kurs ma'lumoti topilmadi");
    const rates = {};
    Object.keys(SUPPORTED_CURRENCIES).forEach(code => { if (data.krw[code]) rates[code] = data.krw[code]; });
    if (Object.keys(rates).length === 0) throw new Error("Hech qanday valyuta kursi topilmadi");
    this.setExchangeRate(rates, new Date().toISOString().slice(0,10), "api");
    return this.getExchangeRate();
  } catch (e) {
    console.warn("Valyuta API'dan yangilab bo'lmadi (tarmoq/CDN muammosi) — admin/standart qiymat ishlatiladi", e);
    return current; // o'zgarishsiz qaytaramiz — sahifa buzilmaydi
  }
};

/* ═══════════════════════════════════════════════════════════════════
   HUJJAT MUDDATI ESLATMALARI — shaxsiy, foydalanuvchi o'zi kiritadi.
   TIMART KAFOLAT BERMAYDI — bu shaxsiy eslatma vositasi, rasmiy hujjat
   nazorati emas. Har bir foydalanuvchi (uid) uchun alohida saqlanadi.
   ═══════════════════════════════════════════════════════════════════ */
TimartShared.getDocumentReminders = function(uid) {
  try {
    const all = JSON.parse(localStorage.getItem("timart_document_reminders") || "{}");
    return all[uid] || [];
  } catch (e) { console.warn("timart_document_reminders buzilgan", e); return []; }
};

TimartShared.addDocumentReminder = function(uid, name, expiryDate) {
  let all = {};
  try { all = JSON.parse(localStorage.getItem("timart_document_reminders") || "{}"); } catch (e) { all = {}; }
  if (!all[uid]) all[uid] = [];
  all[uid].push({ id: "doc_" + Date.now(), name, expiryDate });
  localStorage.setItem("timart_document_reminders", JSON.stringify(all));
  return all[uid];
};

TimartShared.deleteDocumentReminder = function(uid, id) {
  let all = {};
  try { all = JSON.parse(localStorage.getItem("timart_document_reminders") || "{}"); } catch (e) { all = {}; }
  if (all[uid]) all[uid] = all[uid].filter(d => d.id !== id);
  localStorage.setItem("timart_document_reminders", JSON.stringify(all));
  return all[uid] || [];
};

/* ═══════════════════════════════════════════════════════════════════
   DIASPORA KALENDARI — O'zbek/Islom + Koreya rasmiy bayramlari.
   Sanalar internetdan tasdiqlangan (2026-yil). Islom sanalari oy
   ko'rinishiga qarab ±1 kun farq qilishi mumkin — bu eslatiladi.
   Admin yangi yil sanalarini qo'shishi kerak (2027+ uchun).
   ═══════════════════════════════════════════════════════════════════ */
TimartShared._defaultCalendarEvents = [
  // 2026 — qolgan voqealar (o'tganlari avtomatik filtrlanadi)
  { id:"cal_ashura_2026", name:"Ashura kuni", date:"2026-06-25", type:"islamic" },
  { id:"cal_constitution_kr_2026", name:"Koreya Konstitutsiya kuni (davlat muassasalari yopiq)", date:"2026-07-17", type:"korean" },
  { id:"cal_liberation_kr_2026", name:"Koreya Ozodlik kuni (bank/davlat muassasalari yopiq)", date:"2026-08-17", type:"korean" },
  { id:"cal_mavlid_2026", name:"Mavlid (Muhammad alayhissalom tug'ilgan kuni)", date:"2026-08-24", type:"islamic" },
  { id:"cal_independence_uz_2026", name:"O'zbekiston Mustaqillik kuni", date:"2026-09-01", type:"uzbek" },
  { id:"cal_chuseok_kr_2026", name:"Chuseok — Koreya milliy bayrami (bank/davlat muassasalari yopiq, 3 kun)", date:"2026-09-24", type:"korean" },
  { id:"cal_foundation_kr_2026", name:"Koreya Davlat asoschilik kuni", date:"2026-10-05", type:"korean" },
  { id:"cal_hangeul_kr_2026", name:"Hangeul kuni (Koreya alifbosi bayrami)", date:"2026-10-09", type:"korean" },
  { id:"cal_christmas_kr_2026", name:"Rojdestvo (Koreya rasmiy dam olish kuni)", date:"2026-12-25", type:"korean" }
];

TimartShared.getCalendarEvents = function(onlyUpcoming) {
  let admin = [];
  try { admin = JSON.parse(localStorage.getItem("timart_calendar_events") || "[]"); } catch (e) { admin = []; }
  const all = [...this._defaultCalendarEvents, ...admin];
  const filtered = onlyUpcoming ? all.filter(e => new Date(e.date) >= new Date(new Date().toDateString())) : all;
  return filtered.sort((a,b) => new Date(a.date) - new Date(b.date));
};

TimartShared.setCalendarEvents = function(adminEvents) {
  localStorage.setItem("timart_calendar_events", JSON.stringify(adminEvents));
};

/* ═══════════════════════════════════════════════════════════════════
   toggleFav — global funksiya, barcha 9 faylda onclick="toggleFav(...)"
   orqali chaqiriladi. Endi 3-parametr (narx) ixtiyoriy — berilsa,
   sevimliga qo'shilgan vaqtdagi narx saqlanadi (narx pasayishi
   bildirishnomasi uchun).
   ═══════════════════════════════════════════════════════════════════ */
function toggleFav(id, btn, price) {
  const isFav = Utils.toggleFavoriteId(id, price);
  btn.classList.toggle("active", isFav);
  btn.querySelector("svg").setAttribute("fill", isFav ? "currentColor" : "none");
  Utils.toast(isFav ? "Sevimlilarga qo'shildi ❤️" : "Sevimlilardan olib tashlandi", isFav?"success":"warning");
}


/* ═══════════════════════════════════════════════════════════════════
   LISTINGS — MARKETPLACE'NING ASOSIY MA'LUMOTI.
   KRITIK TUZATISH: avval bu massiv HECH QANDAY saqlash qatlamiga ega
   emas edi — yangi e'lon, tahrirlash, o'chirish, status o'zgarishi
   SAHIFA YANGILANGANDA YO'QOLIB QOLARDI. Endi har bir o'zgarish
   localStorage'ga yoziladi — birinchi yuklanishda standart ma'lumot
   "urug'lanadi", shundan keyin localStorage YAGONA haqiqiy manba.
   ═══════════════════════════════════════════════════════════════════ */
TimartShared._defaultListings = [
    {
      id:"lst_001", title:"Yangi qo'y go'shti — bugun so'yilgan", titleKo:"신선한 양고기 오늘 도축", titleRu:"Свежая баранина — сегодня забита",
      category:"food", subcategory:"Go'sht", price:28000, priceNeg:true,
      photos:["https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600"],
      city:"Hwaseong", userId:"user_001", sellerName:"Alisher Karimov",
      status:"active", isPremium:true, isHalol:true, halalCertId:"cert_001", isFlashSale:true,
      views:847, favorites:34, chatCount:12, condition:"new",
      tags:["qo'y","go'sht","halol","fresh","yangí"], deliveryType:"direct",
      createdAt:"2026-06-10", expiresAt:"2026-08-10"
    },
    {
      id:"lst_002", title:"Samsung Galaxy S24 Ultra — 6 oy ishlatilgan", titleKo:"삼성 갤럭시 S24 울트라 중고", titleRu:"Samsung Galaxy S24 Ultra б/у 6 месяцев",
      category:"elec", subcategory:"Telefon", price:850000, priceNeg:false,
      photos:["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600"],
      city:"Ansan", userId:"user_002", sellerName:"Zulfiya Toshmatova",
      status:"active", isPremium:false, isHalol:false, halalCertId:null,
      views:423, favorites:67, chatCount:28, condition:"like_new",
      tags:["samsung","s24","ultra","telefon"], deliveryType:"pickup",
      createdAt:"2026-06-12", expiresAt:"2026-07-12"
    },
    {
      id:"lst_003", title:"Hwaseong 1 xonali kvartira — ijara", titleKo:"화성 원룸 임대", titleRu:"Аренда однокомнатной квартиры Хвасон",
      category:"realty", subcategory:"Ijara", price:450000, priceNeg:true,
      photos:["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600"],
      city:"Hwaseong", userId:"user_003", sellerName:"Bobur Yusupov",
      status:"active", isPremium:true, isHalol:false, halalCertId:null,
      views:1204, favorites:89, chatCount:41, condition:"new",
      tags:["ijara","kvartira","hwaseong","1xona"], deliveryType:"pickup",
      createdAt:"2026-06-08", expiresAt:"2026-08-08",
      // ── Ijara — 16.8-bo'lim: egalik o'tmaydi, faqat foydalanish huquqi ──
      isRental:true, rentUnit:"oy", rentPrice:450000, depositAmount:900000,
      lateReturnPolicy:"foiz emas — qo'shimcha kun narxi bo'yicha xizmat haqi",
      // ── G'arar-siz stock-lock — 16.3-bo'lim ──
      stockQty:1, lockedBy:null, lockedUntil:null,
      // ── Ihtisab — adolatli narx nazorati — 16.10-bo'lim ──
      priceFairnessFlag:"fair"
    },
    {
      id:"lst_004", title:"Halol oshxona — barcha taomlari halol", titleKo:"할랄 식당 모든 음식 할랄 인증", titleRu:"Халяль ресторан — все блюда халяль",
      category:"halal", subcategory:"Halol taom", price:15000, priceNeg:false,
      photos:["https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"],
      city:"Ansan", userId:"user_003", sellerName:"Bobur Yusupov", shopId:"shop_001",
      status:"active", isPremium:true, isHalol:true, halalCertId:"cert_002",
      views:2891, favorites:156, chatCount:87, condition:"new",
      tags:["halol","oshxona","ansan","uzbek"], deliveryType:"free",
      createdAt:"2026-06-01", expiresAt:"2026-09-01"
    },
    {
      id:"lst_005", title:"Bola aravasi — CYBEX Priam", titleKo:"유모차 사이벡스 프리엄 판매", titleRu:"Детская коляска CYBEX Priam",
      category:"kids", subcategory:"Arava", price:320000, priceNeg:true,
      photos:["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600"],
      city:"Suwon", userId:"user_001", sellerName:"Alisher Karimov",
      status:"active", isPremium:false, isHalol:false, halalCertId:null,
      views:234, favorites:23, chatCount:8, condition:"good",
      tags:["arava","bola","cybex","suwon"], deliveryType:"pickup",
      createdAt:"2026-06-14", expiresAt:"2026-07-14"
    },
    {
      id:"lst_006", title:"Oshpaz kerak — halol oshxonaga", titleKo:"할랄 식당 요리사 구직", titleRu:"Требуется повар в халяль ресторан",
      category:"jobs", subcategory:"Oshpaz", price:2800000, priceNeg:false,
      photos:["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"],
      city:"Hwaseong", userId:"user_003", sellerName:"Bobur Yusupov", shopId:"shop_001",
      status:"active", isPremium:true, isHalol:false, halalCertId:null,
      views:567, favorites:12, chatCount:34, condition:"new",
      tags:["oshpaz","ish","oylik","hwaseong"], deliveryType:"pickup",
      createdAt:"2026-06-13", expiresAt:"2026-08-13"
    },
    {
      id:"lst_007", title:"O'zbek milliy kiyimlari — atlas, shoyi", titleKo:"우즈베크 전통 의상 아틀라스", titleRu:"Узбекская национальная одежда — атлас, шёлк",
      category:"clothes", subcategory:"Ayol", price:85000, priceNeg:true,
      photos:["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"],
      city:"Ansan", userId:"user_002", sellerName:"Zulfiya Toshmatova",
      status:"active", isPremium:false, isHalol:false, halalCertId:null,
      views:389, favorites:45, chatCount:18, condition:"new",
      tags:["atlas","shoyi","kiyim","milliy","uzbek"], deliveryType:"cj",
      createdAt:"2026-06-11", expiresAt:"2026-07-11"
    },
    {
      id:"lst_008", title:"Hyundai Sonata 2022 — borishga tayyor", titleKo:"현대 소나타 2022년식 판매", titleRu:"Hyundai Sonata 2022 — в хорошем состоянии",
      category:"cars", subcategory:"Sotish", price:18500000, priceNeg:true,
      photos:["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600"],
      city:"Suwon", userId:"user_001", sellerName:"Alisher Karimov",
      status:"active", isPremium:true, isHalol:false, halalCertId:null,
      views:1567, favorites:78, chatCount:23, condition:"good",
      tags:["hyundai","sonata","2022","mashina"], deliveryType:"pickup",
      createdAt:"2026-06-09", expiresAt:"2026-08-09"
    }
  ],

TimartShared.getListings = function() {
  try {
    const saved = localStorage.getItem("timart_listings_data");
    if (saved) return JSON.parse(saved);
    // Birinchi marta — standart ma'lumotni localStorage'ga "urug'lab" qo'yamiz
    localStorage.setItem("timart_listings_data", JSON.stringify(this._defaultListings));
    return JSON.parse(JSON.stringify(this._defaultListings));
  } catch (e) {
    console.warn("timart_listings_data buzilgan", e);
    return this._defaultListings;
  }
};

TimartShared.setListings = function(val) {
  localStorage.setItem("timart_listings_data", JSON.stringify(val));
};

/* ═══════════════════════════════════════════════════════════════════
   "QAERDA KO'P" — diaspora faolligi shahar bo'yicha. 0 YANGI MA'LUMOT —
   mavjud shops/listings/mosques'dagi 'city' maydonini agregatsiya
   qilamiz. Yangi kelganlar uchun "qaysi shaharda jamoa kattaroq"
   ko'rsatkichi.
   ═══════════════════════════════════════════════════════════════════ */
TimartShared.getCityActivity = function() {
  const counts = {};
  const add = (city) => { if (!city) return; counts[city] = (counts[city]||0) + 1; };

  this.getShops().forEach(s => add(s.city));
  this.getListings().filter(l => l.status === "active").forEach(l => add(l.city));
  this.getMosques().forEach(m => add(m.city));

  return Object.entries(counts)
    .map(([city, count]) => ({ city, count }))
    .sort((a,b) => b.count - a.count);
};

/* ═══════════════════════════════════════════════════════════════════
   HAFTALIK DIASPORA HISOBOTI — admin qo'lda yaratadi (kamroq yuk,
   haftada 1 marta). Foydalanuvchi hali ko'rmagan bo'lsa "YANGI"
   belgisi ko'rsatiladi (localStorage orqali kuzatiladi).
   ═══════════════════════════════════════════════════════════════════ */
TimartShared.getWeeklyReports = function() {
  try {
    return JSON.parse(localStorage.getItem("timart_weekly_reports") || "[]");
  } catch (e) { console.warn("timart_weekly_reports buzilgan", e); return []; }
};

TimartShared.setWeeklyReports = function(reports) {
  localStorage.setItem("timart_weekly_reports", JSON.stringify(reports));
};

TimartShared.getLatestWeeklyReport = function() {
  const reports = this.getWeeklyReports();
  return reports.sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt))[0] || null;
};

TimartShared.isWeeklyReportUnseen = function(report) {
  if (!report) return false;
  const lastSeen = localStorage.getItem("timart_weekly_report_seen");
  return lastSeen !== report.id;
};

TimartShared.markWeeklyReportSeen = function(reportId) {
  localStorage.setItem("timart_weekly_report_seen", reportId);
};

/* ═══════════════════════════════════════════════════════════════════
   .ICS FAYL — foydalanuvchi voqeani o'z telefon kalendariga qo'shishi
   uchun. Hech qanday API/tashqi xizmat emas — brauzer o'zi fayl
   yaratadi, Google/Apple Calendar avtomatik taniydi.
   ═══════════════════════════════════════════════════════════════════ */
Utils.downloadICS = function(title, dateStr, description) {
  const date = dateStr.replace(/-/g, "");
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT",
    `DTSTART:${date}`, `DTEND:${date}`,
    `SUMMARY:${title}`, `DESCRIPTION:${description || ""}`,
    `UID:${Date.now()}@timart.uz`,
    "END:VEVENT", "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `${title.replace(/[^\w\s]/g,"")}.ics`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
};


/* ═══════════════════════════════════════════════════════════════════
   USERS — 9 faylda nusxalangan va allaqachon bir-biridan uzilib qolgan
   edi (masalan: admin_01'ning isBusinessApproved maydoni profile.html'da
   bor, business.html'da yo'q edi — shu sabab "Biznes Panel" sidebar'da
   ko'rinmasdi). Endi listings/categories kabi yagona manba.
   ═══════════════════════════════════════════════════════════════════ */
TimartShared._defaultUsers = [
    { uid:"user_001", name:"Alisher Karimov",    phone:"+82-10-1234-5678", role:"seller", plan:"premium",  city:"Hwaseong", isVerified:true,  isBusinessApproved:false, shopRequestStatus:null,    createdAt:"2025-09-01" },
    { uid:"user_002", name:"Zulfiya Toshmatova", phone:"+82-10-8765-4321", role:"user",   plan:"free",     city:"Ansan",    isVerified:false, isBusinessApproved:false, shopRequestStatus:null,    createdAt:"2025-10-15" },
    { uid:"user_003", name:"Bobur Yusupov",      phone:"+82-10-5555-9999", role:"seller", plan:"premium",  city:"Suwon",    isVerified:true,  isBusinessApproved:true,  shopRequestStatus:"approved", createdAt:"2025-08-20" },
    { uid:"admin_01", name:"Admin Timart",        phone:"+82-10-0000-0001", role:"admin",  plan:"business", city:"Seoul",    isVerified:true,  isBusinessApproved:true,  shopRequestStatus:"approved", createdAt:"2025-07-01" }
  ],

TimartShared.getUsers = function() {
  try {
    const saved = localStorage.getItem("timart_users_data");
    if (saved) return JSON.parse(saved);
    localStorage.setItem("timart_users_data", JSON.stringify(this._defaultUsers));
    return JSON.parse(JSON.stringify(this._defaultUsers));
  } catch (e) {
    console.warn("timart_users_data buzilgan", e);
    return this._defaultUsers;
  }
};

TimartShared.setUsers = function(val) {
  localStorage.setItem("timart_users_data", JSON.stringify(val));
};

/* ═══════════════════════════════════════════════════════════════════
   #15-band: GLOBAL popstate tinglovchisi — telefon "Orqaga" tugmasi
   bilan ochiq modallarni sinxronlash. Utils.openModal() har safar
   history'ga yozadi; foydalanuvchi telefon tugmasini bossa, shu
   yerda mos modal yopiladi (butun sahifadan chiqib ketmaydi).
   ═══════════════════════════════════════════════════════════════════ */
window.addEventListener("popstate", function(e) {
  document.querySelectorAll(".modal-overlay.open").forEach(el => {
    if (!e.state || e.state.timartModal !== el.id) {
      el.classList.remove("open");
    }
  });
});
