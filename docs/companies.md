# Müştəri şirkətləri — `#partnyorlar` spiralı

Bölmə artıq karusel deyil: bütün müştərilər bir nöqtəli spiralda yerləşir
(`.orbit`, `initClientOrbit()` — `assets/js/main.js`). Logo faylı olan şirkət
ağ dairə içində loqosu ilə, faylı olmayan şirkət isə sadə nöqtə kimi görünür;
adı hər iki halda `<b class="orbit__label">` içindədir və kursor üzərinə
gələndə görünür. Yerdə qalan boşluqları JS-in özü yaratdığı dekorativ nöqtələr
doldurur: oxunacaq qədər böyük olan boş yuvalara mövcud loqolar solğun şəkildə
təkrarlanır (`DECO_LOGO_MIN`), daha kiçikləri isə sadə nöqtə kimi qalır.

640px-dən dar ekranda spiral açılıb adi tor (grid) olur — telefonda loqonu
oxunaqlı saxlayan ölçüdə baloncuqlar spirala sığmır — və dekorativ təkrarlar
gizlədilir.

Logo faylları `assets/img/clients/` qovluğundadır. Yeni logo əlavə etmək üçün
faylı həmin qovluğa qoyub `index.html`-dəki müvafiq `<span class="orbit__dot">`
elementinin içinə `<img src="assets/img/clients/…" alt="…" loading="lazy">`
yazmaq kifayətdir — böyük kənar yuvalar avtomatik olaraq logolu şirkətlərə
verilir.

## Logosu olan şirkətlər (29)

| # | Şirkət | Fayl |
|---|--------|------|
| 1  | AGA İş Mərkəzi | `aga.svg` |
| 2  | Caspian Plaza | `caspian-plaza.svg` |
| 3  | Dəmirçi Tower | `demirchi-tower.svg` |
| 4  | İlk İnşaat | `ilk-insaat.png` |
| 5  | Respublika Diaqnostika Mərkəzi | `rdm.png` |
| 6  | Bakı Sağlamlıq Mərkəzi | `baki-saglamliq.png` |
| 7  | Dünyagöz Klinika | `dunyagoz.png` |
| 8  | Azfen | `azfen.png` |
| 9  | Milla | `milla.svg` |
| 10 | Qəbələ Konserv Zavodu | `qebele-konserv.png` |
| 11 | Azərtoxum | `azertoxum.png` |
| 12 | Garabagh Resort & SPA | `garabagh.svg` |
| 13 | Gashalti Health Hotel | `gashalti.svg` |
| 14 | Zirə Gülçülük | `zira-gulculuk.png` |
| 15 | Şəmkir Agro | `semkir-agro.png` |
| 16 | Greentech | `greentech.png` |
| 17 | Gözəl Seeds | `gozel-seeds.png` |
| 18 | GFC | `gfc.jpg` |
| 19 | Agrofresh | `agrofresh.png` |
| 20 | N1 Çörək Zavodu | `n1-corek.svg` |
| 21 | Bakıxanov Çörək Zavodu | `bakixanov.jpg` |
| 22 | Glassman | `glassman.png` |
| 23 | Azərkarton | `azerkarton.png` |
| 24 | Era Agro | `era-agro.svg` |
| 25 | Agrofavorit | `agrofavorit.png` |
| 26 | Pozitron Agro | `pozitron-agro.jpg` |
| 27 | Ecoprod | `ecoprod.png` |
| 28 | Red Globe | `red-globe.png` |
| 29 | GBS (General Board System) | `gbs.jpg` |

Yoxlanılmalı olanlar:

- **İlk İnşaat** — `ilkconstruction.com` (neft-qaz və dəniz EPC şirkəti). Əgər
  müştəri eyni adlı başqa tikinti şirkətidirsə, bu logo səhvdir. Fayl həm də
  tünd fonla gəlir, ağ dairənin içində tünd kvadrat kimi görünür.
- **Azərtoxum** — `agrodairy.az`-da "Azər Toxum" kimi qeyd olunub; hüquqi şəxsin
  eyni olduğunu təsdiqləmək lazımdır.
- **Bakıxanov Çörək Zavodu** — Facebook səhifəsinin profil şəkli, saytı yoxdur.
- **Pozitron Agro** — Instagram profil şəkli (150 px), saytı yoxdur.
- **Ecoprod** — AzMan Holding saytındakı fayl ağ variantdır; şəffaflıq saxlanılaraq
  yaşıla (`#1aa96b`, saytın öz fonu) boyanıb.
- **Azərkarton** — busy.az kataloqundakı fayl "AKKİK — Azərbaycan Kağız və Karton
  İstehsalı Kombinatı" brendini göstərir; müştərinin öz istəyi ilə istifadə olunur.
- **Agrofavorit** — `agrofavorit.com` domenini Qazaxıstanın "ТОО АГРОФАВОРИТ"
  şirkəti işlədir; müştərinin öz istəyi ilə istifadə olunur. Fayl kiçikdir (80 px).
- **Red Globe** — şirkətin blank (A4 letterhead) faylından kəsilib.
- **GBS** — Instagram profil şəkli (150 px), saytı yoxdur.
- **Caspian Plaza** və **Dəmirçi Tower** — hazır loqo yoxdur; binaların lövhəsindəki
  yazı SVG söz-nişanı kimi yığılıb (Caspian Plaza — serif, Dəmirçi Tower — qalın
  sans, paslı-qəhvəyi rəngdə). Rəsmi loqo tapılsa, faylı əvəz etmək kifayətdir.

## Logosu tapılmayanlar (1)

| # | Şirkət | Səbəb |
|---|--------|-------|
| 1  | Bakinski | sayt yoxdur, kataloqlarda loqo yoxdur |
