# TARGET MAKINA Astro Site

TARGET MAKINA icin hazirlanmis statik kurumsal web sitesi. Proje Astro uzerinde calisir, Netlify'ye statik cikti olarak yayinlanir ve CNC hizmetleri, makina parkuru, sektorler, kaynaklar, blog/haberler ve iletisim sayfalarini icerir.

## Teknoloji

- Astro 6
- Tailwind CSS 4
- Eski tasarimdan tasinan Bootstrap/jQuery tabanli bolum CSS ve scriptleri
- Netlify Forms
- Netlify redirect ve cache header ayarlari

## Komutlar

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Proje Yapisi

```text
src/
  components/     Ortak Astro bilesenleri
  layouts/        Base layout, SEO meta, ortak header/footer
  pages/          Route ureten Astro sayfalari
  styles/         Global Tailwind ve ortak stiller
public/
  assets/         Eski sablon assetleri ve statik gorseller
  images/         Logo ve statik gorseller
  robots.txt
  sitemap.xml
netlify.toml      Deploy, header ve 301 redirect ayarlari
```

## Formlar

Aktif formlar Netlify Forms ile calisir:

- `teklif`: Ortak teklif popup formu
- `iletisim`: Iletisim sayfasi formu
- `hizli-teklif`: Ana sayfa hizli teklif formu

Tum formlar basarili gonderimden sonra `/tesekkurler/` sayfasina yonlenir.

## Notlar

- Eski `.html` URL'ler `netlify.toml` icinde yeni Turkce rotalara 301 ile yonlendirilir.
- Gorsel optimizasyonu icin `src/assets` altindaki gorseller `OptimizedImage.astro` uzerinden Astro Image pipeline'a girer.
- Inline CSS icindeki statik public asset referanslari root-relative `/assets/...` olarak yazilmalidir.
- Yeni sayfa eklendiginde `public/sitemap.xml` de guncellenmelidir.
