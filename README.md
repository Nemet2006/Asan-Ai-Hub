# ASAN muraciet Vision AI Demo

Bu repo `ASAN muraciet` informasiya sistemi ucun vizual AI esasli qerar destek platformasinin demo/prototip versiyasidir.

## Layihede neler var

- `Next.js` ile qurulmus Azerbaycanca demo sayt
- Vetendas, qurum operatoru ve nezaret merkezi ucun ayri demo dashboardlar
- Vizual analiz, avtomatik kateqoriyalashdirma ve netice dogrulamasi uzre mehsul ssenarileri
- API ve modul memarligi uzre Express + TypeScript server skeleti
- PostgreSQL ucun ASAN muraciete uyğun verilənlər modeli
- Blueprint, wireframe ve UI istiqameti uzre yenilenmis senedler

## Esas bolmeler

- `app/`: Next.js App Router sehifeleri
- `components/`: ortaq UI komponentleri
- `lib/site-data.ts`: demo mehsul ve dashboard melumatlari
- `docs/platform-blueprint.md`: mehsul, texniki memarliq ve KPI mentiqi
- `docs/wireframes.md`: sehife ve dashboard wireframe-leri
- `docs/ui-layout.md`: vizual istiqamet ve brand dili
- `db/schema.sql`: ASAN muraciet ucun PostgreSQL model skeleti
- `server/`: Express API scaffold-u

## Demo meqsedi

Bu layihe asagidaki ehtiyaclari bir yerde gosterir:

- Foto ve video esasli muracietlerin avtomatik analizi
- Vizual materialdan muraciet metninin ilkin draftinin hazirlanmasi
- Kateqoriya, aidiyyet ve prioritetin hesablanmasi
- Qurumun yuklediyi cavab materialinin ilkin muracietle muqayisesi
- Uygunsuzluq hallari ucun xeberdarliq mexanizmi
- API ile inteqrasiya oluna bilen modul esasli arxitektura

## Qeyd

Bu workspace-de Node.js ve npm her zaman elcatan olmaya biler. Buna gore fayllar demo ve scaffold kimi yenilenib, amma lokal icra ayrica yoxlanmalidir.
