# TIMART.UZ — Marketplace Prototip

Korea-based o'zbek diasporasi uchun marketplace. Bu **statik frontend prototip** — barcha ma'lumotlar demo (`Store` obyekti) va `localStorage` orqali ishlaydi, real backend (Firebase) hali ulanmagan.

## 🚀 GitHub Pages orqali ishga tushirish

1. Bu papkadagi barcha fayllarni GitHub repository'ga yuklang (yangi repo yarating, masalan `timart-uz`)
2. Repo sozlamalariga kiring: **Settings → Pages**
3. **Source** bo'limida: `Deploy from a branch` tanlang
4. **Branch**: `main` (yoki `master`), papka: `/ (root)` tanlang → **Save**
5. Bir necha daqiqadan so'ng sayt manzili: `https://<username>.github.io/<repo-nomi>/`

## 📄 Sahifalar

| Fayl | Vazifasi |
|---|---|
| `index.html` | Bosh sahifa — e'lonlar, kategoriyalar |
| `listing-detail.html` | E'lon tafsilotlari |
| `create-listing.html` | Yangi e'lon yaratish |
| `chat.html` | Xabar almashish, narx taklif qilish |
| `checkout.html` | Savat, to'lov, Vaqf sadaqasi |
| `profile.html` | Profil, buyurtmalar, nizo ochish |
| `business.html` | Sotuvchi/biznes panel, Qarz-Hasana va Mudaraba so'rovlari |
| `services.html` | Xizmatlar bo'limi |
| `admin.html` | Admin panel, Shariat kengashi |

## ⚠️ Test qilishda bilib qo'ying

- Har bir sahifa **mustaqil demo-ma'lumot** bilan ishlaydi (umumiy bazasi yo'q)
- `disputes`, `qarz_hasana`, `partnerships`, `waqf_fund` — shu to'rttasi **localStorage** orqali sahifalar orasida sinxronlanadi (bitta brauzerda)
- Login soxta — sahifa ochilganda avtomatik demo-foydalanuvchi bilan kirilgan bo'ladi
- To'lov (Kakao Pay/Naver Pay) — simulyatsiya, real tranzaksiya yo'q
- **Ikki turli qurilma/brauzerda ma'lumot ulashilmaydi** — bu cheklov real backend (Firestore) ulanmaguncha davom etadi

## 🕌 Islom moliyasi modullari (16-bo'lim)

- Xiyor al-'ayb (qaytarish/nizo huquqi) — `profile.html` → `admin.html`
- Vaqf/sadaqa jamg'armasi — `checkout.html` → `admin.html`
- Qarz-Hasana (foizsiz yordam) — `business.html` → `admin.html`
- Mudaraba/Musharaka hamkorlik — `business.html` → `admin.html`
- Ihtisab (adolatli narx nazorati) — `create-listing.html`
- G'arar-siz stock-lock — `chat.html`, `index.html`

Test qilish uchun: bir vargada `business.html`dan so'rov yuboring → `admin.html`ga o'ting → "Shariat kengashi" tabida ko'ring va tasdiqlang/rad eting.
CodeRabbit test
