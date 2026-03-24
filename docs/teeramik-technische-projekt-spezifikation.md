# Technische Projekt-Spezifikation für die neue Website von TeeRamik

## 1. Ziel dieses Dokuments

Dieses Dokument definiert die technische Grundlage für die Umsetzung der neuen TeeRamik-Website.  
Es dient als Referenz für Cursor, Entwicklung und Projektstruktur.

Ziel ist eine Website, die:

- modern und performant umgesetzt ist
- visuell hochwertig wirkt
- mobil sehr gut funktioniert
- leicht erweiterbar ist
- sauber strukturiert und wartbar bleibt
- auf Basis der vorhandenen Konzept- und Content-Dokumente gebaut werden kann

---

## 2. Projektziel aus technischer Sicht

Die Website soll zunächst als **hochwertiges, responsives Frontend mit klarer Komponentenstruktur** umgesetzt werden.

Der Fokus liegt auf:

- sauberer Informationsarchitektur
- modularer Komponentenlogik
- starker Startseite
- gut strukturierten Hauptseiten
- klaren CTA- und Formularpfaden
- Performance
- Accessibility-Basics
- sauberem Code für spätere Erweiterung

Wichtig:  
Die erste Version muss **nicht sofort ein vollständiger E-Commerce-Shop** sein.  
Sie soll zuerst die Markenwebsite und die Conversion-Pfade für Beratung, Geschenkideen, Teeliste und Kontakt stark umsetzen.

---

## 3. Empfohlener Tech-Stack

## Empfehlung
Für Cursor sollte die Website als **Next.js-Projekt mit React und TypeScript** umgesetzt werden.

## Begründung
- gute Strukturierbarkeit
- komponentenbasiert
- sehr gut für responsive Markenwebsites
- zukunftssicher
- leicht erweiterbar
- SEO-freundlich
- später problemlos mit CMS, Formularhandling oder Shop-Logik erweiterbar

## Empfohlene technische Basis
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- optional: **shadcn/ui** für Basis-Komponenten
- optional: **Framer Motion** für sehr dezente Motion
- Formulare zunächst ohne komplexes Backend, mit vorbereiteten Hooks/Strukturen

## Nicht empfohlen für Version 1
- überkomplexes Headless-CMS direkt zu Beginn
- schwere Animation-Libraries
- unnötig komplexe Shop-Logik
- zu viele Drittanbieter-Abhängigkeiten

---

## 4. Projektumfang für Version 1 (MVP+)

## Pflichtseiten
- Startseite
- Tee
- Keramik
- Geschenkideen
- Aktuelles
- Über uns
- Beratung & Bestellung
- Kontakt

## Systemseiten
- Impressum
- Datenschutz
- Cookie-Hinweis / Platzhalter
- 404-Seite

## Optional später
- Teeliste als eigene Seite oder PDF-Download-Seite
- Detailseiten für Geschenk-Anlässe
- Detailseiten für Teekategorien
- kleiner Shop
- CMS-Anbindung
- Suchfunktion
- Filterlogik
- Blog / Journal

---

## 5. Informationsarchitektur in der technischen Umsetzung

Die Website soll als klare Seitensammlung mit wiederverwendbaren Sektionen gebaut werden.

## Routing-Struktur (Empfehlung)

```text
/
 /tee
 /keramik
 /geschenkideen
 /aktuelles
 /ueber-uns
 /beratung-bestellung
 /kontakt
 /impressum
 /datenschutz
 /404
```

Optional später:

```text
/tee/schwarzer-tee
/tee/gruener-tee
/geschenkideen/geburtstag
/geschenkideen/mitbringsel
/teeliste
```

---

## 6. Komponentenarchitektur

Die Website soll komponentenbasiert aufgebaut werden, damit Inhalte konsistent und erweiterbar bleiben.

## Globale Komponenten
- AnnouncementBar
- Header
- Navigation
- MobileMenu
- Footer
- CTAButton
- SectionContainer
- SectionHeading
- ImageTeaser
- Card
- TrustCard
- ContactBlock
- CTASection
- FormField
- FormSection

## Startseiten-spezifische Komponenten
- HeroSection
- QuickAccessGrid
- CategoryTeaserSection
- SeasonalHighlightsSection
- GiftIdeasSection
- WhyTeeramikSection
- FavoritesSection
- AboutTeaserSection
- ServiceOptionsSection
- LocationSection

## Wiederverwendbare Seiten-Komponenten
- PageHero
- IntroTextBlock
- FeatureGrid
- EditorialCardRow
- TextImageSection
- CTAStack
- FAQSection
- ContactFormSection

---

## 7. Daten- und Content-Struktur

## Grundsatz
Version 1 kann mit lokal gepflegten Inhalten arbeiten.  
Content muss nicht sofort aus einem CMS kommen, sollte aber **strukturiert vorbereitet** werden.

## Empfohlene Struktur
Texte und Inhalte sollen möglichst modular aufgebaut werden, zum Beispiel:
- Seitentitel
- Intro
- CTA-Texte
- Karteninhalte
- Highlight-Items
- Trust-Items
- FAQ-Items

## Empfehlung
Content zunächst in klaren TypeScript-Objekten, JSON oder lokal strukturierten Content-Dateien organisieren.

Beispiel:
- `content/home.ts`
- `content/tee.ts`
- `content/giftIdeas.ts`

So bleibt eine spätere CMS-Migration leichter.

---

## 8. Designsystem in der technischen Umsetzung

Die technische Umsetzung muss auf dem separaten Dokument  
**„teeramik-ui-designsystem-brief.md“** basieren.

## Daraus technisch abzuleiten
- Farbvariablen
- Typografie-Scale
- Spacing-System
- Border-Radius
- Button-Varianten
- Card-Varianten
- Formularstil
- Breakpoints
- Interaktionsverhalten

## Empfehlung
Diese Werte zentral im Projekt definieren:
- Tailwind Theme Tokens
- Utility-Klassen
- ggf. Design-Tokens in einer Config

---

## 9. Responsive Anforderungen

## Pflicht
Die Website muss mobile-first oder mindestens mobile-sauber gedacht und umgesetzt werden.

## Breakpoint-Empfehlung
- mobile
- tablet
- desktop
- large desktop

## Technische Anforderungen
- alle wichtigen CTAs mobil schnell sichtbar
- klickbare Telefonnummer
- keine zu kleinen Touchflächen
- sinnvolle Reihenfolge der Inhaltsblöcke
- Bilder skalieren sauber
- keine Layoutbrüche
- keine horizontalen Overflows

---

## 10. Performance-Anforderungen

Die Website soll leicht und schnell wirken.

## Technische Ziele
- optimierte Bilder
- keine unnötig großen Libraries
- saubere Code-Splitting-Nutzung
- gute Ladeperformance auf Mobilgeräten
- keine überladenen Animationen
- keine unnötigen Third-Party-Skripte in Version 1

## Praktische Vorgaben
- Next.js Image-Komponente nutzen
- nur notwendige Fonts laden
- Font-Weights reduzieren
- Animationen sparsam halten
- wiederverwendbare Komponenten effizient bauen

---

## 11. Accessibility-Standards

Die erste Version soll Accessibility-Basics sauber erfüllen.

## Mindestanforderungen
- semantische HTML-Struktur
- saubere Heading-Hierarchie
- ausreichende Farbkontraste
- sichtbare Fokuszustände
- klickbare Buttons und Links mit klarer Größe
- Formulare mit Labels
- Alt-Texte für Bilder
- sinnvolle Landmark-Struktur
- Navigation per Tastatur grundsätzlich möglich

## Wichtig
Accessibility ist nicht optionales Extra, sondern Teil der Qualitätsanforderung.

---

## 12. SEO-Basics

Die erste Version soll technisch sauber für SEO vorbereitet sein.

## Anforderungen
- pro Seite eindeutiger Title
- Meta Description pro Seite
- saubere H1-Struktur
- sinnvolle H2/H3-Hierarchie
- sprechende URLs
- semantische Inhalte
- gute interne Verlinkung
- Open Graph Basics
- saubere Ladeperformance

## Nicht zwingend in Version 1
- komplexe strukturierte Daten
- erweiterte Schema.org-Implementierung
- Blog-SEO-Architektur

Kann später ergänzt werden.

---

## 13. Formularlogik

## In Version 1 notwendig
- Kontaktformular
- Beratungsformular / Bestellanfrage
- optional einfaches Formular für Teeliste

## Technische Empfehlung
Zunächst mit leicht integrierbarer Struktur bauen, z. B.:
- Frontend-validiert
- später an Formspree, Resend, API-Route oder anderes Backend anschließbar

## Formularfelder
### Kontaktformular
- Name
- E-Mail oder Telefon
- Nachricht

### Beratungsformular
- Name
- E-Mail / Telefon
- Wofür suchen Sie etwas?
- Anlass
- Budget
- gewünschter Zeitraum / bis wann
- Nachricht

## Anforderungen
- klare Labels
- verständliche Fehlermeldungen
- gute mobile Nutzbarkeit
- datenschutzfreundliche Struktur

---

## 14. Bild- und Asset-Handling

## In Version 1
Platzhalterbilder sind erlaubt, aber das System muss auf echte Bilder vorbereitet sein.

## Anforderungen
- saubere Dateistruktur
- konsistente Bildverhältnisse pro Komponententyp
- Alt-Texte vorsehen
- responsive Bilddarstellung
- visuell ruhige Crops

## Empfehlung
Assets strukturieren nach:
- hero
- categories
- seasonal
- gifts
- about
- location

---

## 15. Seitenanforderungen im technischen Sinne

## Startseite
Muss enthalten:
- Hero
- Quick Access
- Hauptwelten
- Saisonale Highlights
- Geschenkbereich
- Trust-Bereich
- Empfehlungen
- Über-uns-Teaser
- Service-Block
- Kontaktblock

## Tee
Muss enthalten:
- Page Hero
- Kategorien
- Geschmack/Bedürfnis
- Empfehlungen
- Teeliste-/Beratungs-CTA
- Crosslinks

## Keramik
Muss enthalten:
- Intro
- Kategorien
- Keramik im Einsatz
- Highlights
- Geschenkbezug
- CTA

## Geschenkideen
Muss enthalten:
- Anlass-Einstiege
- Budget-Einstiege
- Geschenksets
- Beratungs-CTA
- Vertrauensbereich

## Aktuelles
Muss enthalten:
- Saisonale Themen
- Neuheiten
- Empfehlungen
- Verlinkung zu anderen Seiten

## Über uns
Muss enthalten:
- Intro
- Geschichte
- Philosophie
- Ladenbezug
- CTA

## Beratung & Bestellung
Muss enthalten:
- Handlungsoptionen
- Ablauf
- Formular
- FAQ
- CTA

## Kontakt
Muss enthalten:
- Kontaktinfos
- Öffnungszeiten
- Karte / Platzhalter
- Formular
- CTA

---

## 16. Projektstruktur (Empfehlung)

```text
/app
  /page.tsx
  /tee/page.tsx
  /keramik/page.tsx
  /geschenkideen/page.tsx
  /aktuelles/page.tsx
  /ueber-uns/page.tsx
  /beratung-bestellung/page.tsx
  /kontakt/page.tsx

/components
  /layout
  /navigation
  /sections
  /cards
  /forms
  /ui

/content
  home.ts
  tee.ts
  keramik.ts
  giftIdeas.ts
  news.ts
  about.ts
  consultation.ts
  contact.ts

/lib
  utils.ts

/public
  /images
  /icons

/styles
  globals.css
```

---

## 17. Entwicklungsregeln für Cursor

Wenn Cursor dieses Projekt umsetzt, sollen folgende Regeln gelten:

1. Zuerst die Grundstruktur und Komponenten bauen, nicht sofort Feindetails.
2. Design und Komponenten am UI-/Designsystem-Brief ausrichten.
3. Inhalte anhand der bereits vorhandenen TeeRamik-Dokumente umsetzen.
4. Keine generischen Platzhalter-Texte erfinden, wenn konkrete Texte bereits vorliegen.
5. Wiederverwendbarkeit vor schneller Einzellösung priorisieren.
6. Jede Seite responsive mitdenken.
7. Accessibility und semantische Struktur von Anfang an sauber umsetzen.
8. Keine unnötige technische Komplexität einführen.
9. Die Website soll eher eine hochwertige Markenwebsite als ein klassischer Shop sein.
10. Alle zentralen CTA-Pfade sichtbar und funktional anlegen.

---

## 18. Definition of Done für Version 1

Version 1 ist fertig, wenn:

- alle Hauptseiten gebaut sind
- die Seiten responsive funktionieren
- die Navigation vollständig funktioniert
- CTAs sinnvoll gesetzt sind
- Formulare vorhanden und nutzbar vorbereitet sind
- Inhalte aus den Konzeptdokumenten sinnvoll integriert sind
- die visuelle Richtung dem Designsystem entspricht
- keine groben Layout- oder Accessibility-Probleme bestehen
- die Seite modern, hochwertig und konsistent wirkt

---

## 19. Was bewusst noch nicht Teil von Version 1 sein muss

- vollständiger E-Commerce / Warenkorb
- Kundenkonto
- komplexe Produktdatenbank
- Filterlogik auf Shop-Niveau
- CMS-Backend mit Redaktionssystem
- Newsletter-Automation
- erweitertes Tracking-Set-up
- Blogsystem
- Multilingualität

Diese Dinge können später ergänzt werden.

---

## 20. Zusammenfassung in einem Satz

Die neue TeeRamik-Website soll technisch als sauberes, modulares, responsives Next.js-Frontend umgesetzt werden, das die Markenwirkung, Nutzerführung und Conversion-Pfade der vorhandenen Konzeptdokumente hochwertig und wartbar in eine reale Website übersetzt.
