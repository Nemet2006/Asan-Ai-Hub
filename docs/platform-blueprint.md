# ASAN muraciet Vision AI Blueprint

## Mehsul konsepti

Bu hell `ASAN muraciet` informasiya sistemine AI esasli vizual analiz qati elave edir.

Esas meqsədler:

- Foto ve video materiallarini avtomatik analiz etmek
- Muraciet ucun draft metn yaratmaq
- Kateqoriya, aidiyyet ve prioriteti teyin etmek
- Qurumun yuklediyi netice materialini ilkin muracietle muqayise etmek
- Uyğunsuz cavablari audit ve xeberdarliq mexanizmi ile isarelemek

## Hedef istifadeci rollari

- Vetendas
- Qurum operatoru
- Monitorinq / nezaret merkezi
- Platforma administratoru

## Sehife strukturu

### Ictimai sehifeler

- Ana sehife
- Cagirish / kontekst
- Vetendas axini
- Qurum paneli icmali
- Nezaret merkezi icmali
- Analiz ssenarileri
- API modullari
- Pilot plani
- Senedler
- Elaqe

### Dashboard sehifeleri

- Dashboard index
- Vetendas paneli
- Qurum paneli
- Nezaret paneli

## Sehife mentiqi

### Ana sehife

- Hero: vizual AI deyer teklifi
- 3 merheleli is prinsipi
- Platforma imkanlari
- Inteqre emeliyyat paneli preview-si
- Ekosistem bloklari
- Fayda / deyer kartlari
- Pilot merheleleri
- Sened paketi

### Vetendas axini

- Media yukleme
- AI draft ve kateqoriya teklifi
- Gonderisden once tesdiq
- Status ve netice izleme

### Qurum paneli

- AI triage novbesi
- Risk ve prioritet gorunusu
- Yönlendirme teklifi
- Cavab materialinin qebulu
- Evvel-sonra dogrulama siqnallari

### Nezaret paneli

- KPI overview
- Uygunsuzluq siqnallari
- Qurumlar uzre muqayise
- Model coverage ve override analizi
- Audit trail

### API modullari

- Muraciet yaradılması
- Vizual analiz preview
- Yonlendirme qerari
- Netice media qebulu
- Evvel-sonra compare
- Insight dashboard API

## Esas mehsul xüsusiyyətleri

- Vision AI ile obyekt ve problem askarlanmasi
- Draft muraciet metninin generasiyasi
- Kateqoriya ve aidiyyet teklifi
- Prioritet skorlamasi
- Lokasiya siqnallarinin birlesdirilmesi
- Evvel-sonra vizual muqayise
- Confidence ve xeberdarliq mexanizmi
- Human-in-the-loop override prosesi
- Audit logu ve hesabatlilik

## Sistem mentiqi

### Vizual analiz axini

Input:

- Foto ve ya video
- GPS ve cihaz metadata-si
- Vetendasin qisa qeydi

Output:

- Draft metn
- Kateqoriya
- Aidiyyet
- Prioritet
- Confidence
- Askarlanan vizual siqnallar

Logic:

1. Media preprocessing ve keyfiyyet yoxlamasi.
2. Obyekt, problem tipi ve kontekstual isarelerin çıxarılması.
3. NLP qati ile qisa muraciet tesviri yaratmaq.
4. Biznes qaydalari ve model skorlari ile aidiyyet/priority hesablamak.

### Netice dogrulama axini

Input:

- Ilkin muraciet mediasi
- Qurumun yuklediyi netice mediasi
- Lokasiya ve vaxt metadata-si

Output:

- sameLocation
- issueResolved
- similarityScore
- warningReasons

Logic:

1. Eyni mekan ehtimalini qiymetlendirmek.
2. Eyni obyekt ve problem kontekstini axtarmaq.
3. Deyisiklik askarlama ile problemin aradan qalxib-qalxmamasini yoxlamaq.
4. Zeif uyğundurluq hallari ucun xeberdarliq yaratmaq.

## KPI ve ugur gostəricileri

- Avtomatik kateqoriyalashdirma deqiqliyi
- Prioritet teklifinin operatorla uyğunluq faizi
- Manual triage muddetinin azalmasi
- Orta cavab vaxtinin qisalmasi
- Uygunsuz cavablarin askarlanma nisbəti
- Vetendas memnuniyyeti
- Pilotdan istehsal mərhələsinə kecid faizi

## Tehlukesizlik ve mexfilik

- Rol esasli giris
- Media fayllari ucun audit trail
- Saxlanma siyaseti
- Model versiyalasdirma
- Anonimlesdirmeye yararli pipeline
- Manual override tarixcesi

## Tavsiye olunan stack

### Frontend

- Next.js
- React
- TypeScript

### Backend

- Node.js
- Express
- TypeScript
- JWT esasli servis auth

### Data

- PostgreSQL
- Object storage media fayllari ucun

### AI qati

- Vision model
- Classification / routing rules
- Change detection / verification layer

## Gələcək roadmap

- Cokdilli OCR ve metadata çıxarılması
- Video frame-level analiz
- Region uzre isti noqtelerin proaktiv analizi
- Operator feedback-dən avtomatik re-training pipeline-i
- Qurumlar uzre performans benchmarking
