# Komponenten- und Sektionen-Inventar für die neue Website von TeeRamik

## 1. Ziel dieses Dokuments

Dieses Dokument definiert alle zentralen Komponenten und Seitensektionen der neuen TeeRamik-Website.  
Es dient als Referenz für Cursor, Design und Entwicklung, damit die Website modular, konsistent und wartbar aufgebaut werden kann.

Ziele:

- einheitliche Komponentenlogik schaffen
- Wiederverwendbarkeit sicherstellen
- Seitensektionen klar benennen
- visuelle und funktionale Rollen definieren
- technische Umsetzung strukturieren
- unnötige Einzel-Sonderlösungen vermeiden

Wichtig:  
Dieses Dokument beschreibt keine Pixel-Designs, sondern ein strukturiertes System aus UI-Bausteinen und Inhaltssektionen.

---

## 2. Grundprinzipien des Komponenten-Systems

### Prinzip 1: Wiederverwendung vor Einzellösung
Komponenten sollen möglichst mehrfach einsetzbar sein und nicht für jede Seite neu erfunden werden.

### Prinzip 2: Inhalt und Struktur trennen
Bausteine sollen strukturell stabil sein, während Inhalte austauschbar bleiben.

### Prinzip 3: Editorial statt Template-Beliebigkeit
Die Komponenten sollen nicht wie generische Standard-Widgets wirken, sondern eine ruhige, hochwertige, kuratierte Website unterstützen.

### Prinzip 4: Responsive zuerst mitdenken
Jede Komponente muss auf Desktop, Tablet und Mobilgeräten sinnvoll funktionieren.

### Prinzip 5: Klare CTA-Hierarchie
Komponenten mit Aktionen müssen primäre, sekundäre und serviceorientierte Handlungen sauber abbilden können.

---

## 3. Globale Layout-Komponenten

## 3.1 Announcement Bar
**Funktion:**  
Kurzer Hinweis für Saisonales, Aktionen oder Servicehinweise.

**Typische Inhalte:**
- Frühlingsneuheiten
- Geschenkberatung
- Teeliste anfordern
- Öffnungszeitenhinweis

**Anforderungen:**
- kompakt
- austauschbar
- optional klickbar
- mobil gut lesbar

---

## 3.2 Header
**Funktion:**  
Globale Orientierung und Navigation.

**Bestandteile:**
- Logo
- Hauptnavigation
- Utility-Navigation oder Schnelllinks
- ggf. CTA
- mobiler Menübutton

**Anforderungen:**
- ruhig und klar
- sticky optional, aber dezent
- mobil kompakt
- schnelle Kontaktwege integrierbar

---

## 3.3 Navigation
**Funktion:**  
Hauptwege durch die Website.

**Primäre Punkte:**
- Tee
- Keramik
- Geschenkideen
- Aktuelles
- Über uns
- Beratung & Bestellung
- Kontakt

**Anforderungen:**
- keine komplexen Mega-Menüs in Version 1
- klare Hierarchie
- mobil leicht bedienbar

---

## 3.4 Mobile Menu
**Funktion:**  
Navigation auf kleinen Screens.

**Soll enthalten:**
- Hauptnavigation
- Telefon / Kontakt
- ggf. Teeliste
- schnelle Servicewege

**Anforderungen:**
- große Klickflächen
- übersichtlich
- nicht überladen
- CTA sichtbar

---

## 3.5 Footer
**Funktion:**  
Abschluss, Orientierung, Rechtliches, Kontakt.

**Bestandteile:**
- Footer-Navigation
- Kontaktinformationen
- Öffnungszeiten
- Impressum
- Datenschutz
- Cookie-Einstellungen
- optional Social Media

**Anforderungen:**
- informativ
- gut scanbar
- nicht zu massiv
- mobil klar gegliedert

---

## 4. Struktur-Komponenten

## 4.1 Section Container
**Funktion:**  
Definiert Breite, Innenabstände und vertikale Rhythmik einer Sektion.

**Anforderungen:**
- konsistente Maximalbreiten
- responsive Padding
- unterschiedliche Varianten möglich:
  - Standard
  - schmaler Textcontainer
  - breiter Bild-/Kartencontainer

---

## 4.2 Section Heading
**Funktion:**  
Einheitlicher Aufbau für Sektionstitel.

**Bestandteile:**
- kleine Eyebrow optional
- Hauptüberschrift
- Einleitung optional
- CTA optional

**Anforderungen:**
- klar wiedererkennbar
- gut für Startseite und Unterseiten
- flexibel in Textlänge

---

## 4.3 Page Hero
**Funktion:**  
Einleitungssektion für Unterseiten.

**Bestandteile:**
- Seitentitel
- Einleitung
- optional Bild
- optional 1–2 CTAs

**Verwendung:**
- Tee
- Keramik
- Geschenkideen
- Aktuelles
- Über uns
- Beratung & Bestellung
- Kontakt

---

## 4.4 Hero Section
**Funktion:**  
Hauptauftritt der Startseite.

**Bestandteile:**
- Headline
- Subline
- primäre und sekundäre CTAs
- Hero-Bild

**Anforderungen:**
- emotional + funktional
- mobil CTA-früh
- Bildwirkung stark, aber nicht dominant zulasten des Textes

---

## 5. Navigierende Inhaltskomponenten

## 5.1 Quick Access Grid
**Funktion:**  
Schnelleinstieg nach Bedürfnis.

**Bestandteile:**
- 4 bis 6 Kacheln
- Titel
- Kurztext
- optional Icon oder Bild
- Link

**Verwendung:**
- vor allem Startseite
- optional auch auf Service-Seiten

---

## 5.2 Category Teaser Section
**Funktion:**  
Präsentiert große Inhaltswelten.

**Bestandteile:**
- 2 bis 4 Teaser-Module
- Bild
- Überschrift
- Kurztext
- CTA

**Verwendung:**
- Startseite
- Tee
- Keramik
- Geschenkideen

---

## 5.3 Link / CTA Cluster
**Funktion:**  
Mehrere inhaltlich zusammenhängende Handlungsoptionen gruppieren.

**Verwendung:**
- Servicebereiche
- Kontaktblöcke
- Geschenkideen
- Beratungsseiten

---

## 6. Inhalts- und Verkaufssektionen

## 6.1 Seasonal Highlights Section
**Funktion:**  
Aktuelle Themen, saisonale Inhalte oder redaktionelle Highlights hervorheben.

**Bestandteile:**
- Sektionstitel
- 2 bis 4 Highlight Cards
- optional CTA zur Aktuelles-Seite

**Verwendung:**
- Startseite
- Aktuelles-Seite

---

## 6.2 Gift Ideas Section
**Funktion:**  
Geschenklogik sichtbar machen und Conversion fördern.

**Bestandteile:**
- Headline
- kurzer Einleitungstext
- Anlass-Kacheln oder Budget-Kacheln
- CTA zur Beratung

**Verwendung:**
- Startseite
- Geschenkideen-Seite

---

## 6.3 Recommendations / Favorites Section
**Funktion:**  
Kuratierende Kompetenz zeigen und Orientierung geben.

**Bestandteile:**
- Headline
- kurze Einleitung
- 3 bis 4 Empfehlungsmodule
- CTA

**Verwendung:**
- Startseite
- Tee
- Aktuelles
- Keramik

---

## 6.4 Trust / Why Us Section
**Funktion:**  
Vertrauen und Markenargumente sichtbar machen.

**Bestandteile:**
- Headline
- 3 bis 5 Trust Cards
- optional kurzer Einleitungstext

**Typische Inhalte:**
- persönlich ausgewählt
- lokal in Wedel
- besondere Geschenkideen
- Beratung
- schöne Kombinationen

**Verwendung:**
- Startseite
- Geschenkideen
- Über uns

---

## 6.5 About Teaser Section
**Funktion:**  
Persönlichkeit und Hintergrund anteasern.

**Bestandteile:**
- Bild
- Überschrift
- kurzer Text
- CTA

**Verwendung:**
- Startseite
- ggf. Kontaktseite

---

## 6.6 Editorial Feature Block
**Funktion:**  
Ein besonders wichtiges Thema visuell stärker darstellen.

**Bestandteile:**
- großes Bild oder visuelle Fläche
- Headline
- Text
- CTA

**Verwendung:**
- Saisonales
- besondere Empfehlungen
- Geschenk-Specials
- Laden-Highlights

---

## 7. Karten- und Inhaltselemente

## 7.1 Standard Card
**Funktion:**  
Allgemeiner Container für Inhalte.

**Varianten:**
- Text-Card
- Bild-Card
- Link-Card
- CTA-Card

---

## 7.2 Feature Card
**Funktion:**  
Hebt ein Thema, Angebot oder einen Nutzen hervor.

**Bestandteile:**
- Titel
- kurzer Text
- Link oder CTA
- optional Bild

---

## 7.3 Trust Card
**Funktion:**  
Ein Nutzenargument oder Vertrauenselement kompakt darstellen.

**Bestandteile:**
- Icon optional
- Titel
- kurzer unterstützender Text

---

## 7.4 Highlight Card
**Funktion:**  
Saisonale oder redaktionelle Empfehlung zeigen.

**Bestandteile:**
- Bild
- Headline
- kurzer Text
- CTA

---

## 7.5 Category Card
**Funktion:**  
Einstieg in Produkt- oder Themenbereiche.

**Bestandteile:**
- Bild oder Icon
- Titel
- kurzer Text
- Link

---

## 7.6 Service Card
**Funktion:**  
Präsentiert eine konkrete Handlungsoption.

**Verwendung:**
- Teeliste anfordern
- Geschenkberatung
- telefonisch bestellen
- Laden besuchen

---

## 8. Text-Bild-Komponenten

## 8.1 Text Image Section
**Funktion:**  
Kombiniert Bild und Inhalt für ruhigere, markenstärkere Abschnitte.

**Bestandteile:**
- Bild links oder rechts
- Headline
- Text
- CTA optional

**Verwendung:**
- Über uns
- Keramik im Einsatz
- Laden & Atmosphäre
- Über-uns-Teaser

---

## 8.2 Image Teaser
**Funktion:**  
Visueller Einstieg in ein Thema.

**Bestandteile:**
- Bild
- Overlay oder darunterliegende Textgruppe
- Link

---

## 9. Service- und Conversion-Komponenten

## 9.1 Service Options Section
**Funktion:**  
Mehrere konkrete Servicewege klar darstellen.

**Bestandteile:**
- Headline
- Einleitung
- 3 bis 4 Service Cards

**Verwendung:**
- Startseite
- Beratung & Bestellung

---

## 9.2 CTA Section
**Funktion:**  
Einen klaren Handlungsimpuls setzen.

**Bestandteile:**
- kurze Headline
- unterstützender Text
- 1–2 CTAs

**Verwendung:**
- Seitenabschluss
- Zwischen-CTA
- redaktionelle Übergänge

---

## 9.3 CTA Stack
**Funktion:**  
Mehrere CTA-Typen logisch gruppieren.

**Typen:**
- primär
- sekundär
- serviceorientiert

**Anforderungen:**
- klare Priorität
- nicht alle gleich stark gestaltet

---

## 9.4 Contact Block
**Funktion:**  
Kontaktinformationen und direkte Handlungen bündeln.

**Bestandteile:**
- Adresse
- Öffnungszeiten
- Telefon
- E-Mail / Formular
- Route / Karte

**Verwendung:**
- Startseite
- Kontaktseite
- Beratung & Bestellung

---

## 9.5 FAQ Section
**Funktion:**  
Häufige Fragen niedrigschwellig beantworten.

**Verwendung:**
- Beratung & Bestellung
- Kontakt
- optional Geschenkideen

---

## 10. Formular-Komponenten

## 10.1 Contact Form Section
**Funktion:**  
Allgemeine Kontaktaufnahme ermöglichen.

**Felder:**
- Name
- E-Mail oder Telefon
- Nachricht

---

## 10.2 Consultation Form Section
**Funktion:**  
Beratung oder Bestellanfrage strukturieren.

**Felder:**
- Name
- E-Mail / Telefon
- Wofür suchen Sie etwas?
- Anlass
- Budget
- bis wann
- Nachricht

---

## 10.3 Form Field
**Funktion:**  
Einzelne, konsistent gestaltete Formularfelder.

**Anforderungen:**
- Label
- Input / Textarea / Select
- Fehlerzustand
- Hilfetext optional
- responsive und barrierearm

---

## 11. Seitenspezifische Sektionen

## 11.1 Startseite
Verwendete Hauptsektionen:
- Announcement Bar
- Header
- Hero Section
- Quick Access Grid
- Category Teaser Section
- Seasonal Highlights Section
- Gift Ideas Section
- Trust / Why Us Section
- Recommendations Section
- About Teaser Section
- Service Options Section
- Contact Block
- Footer

---

## 11.2 Tee
Verwendete Hauptsektionen:
- Page Hero
- Category Card Grid
- Taste / Need Selection Grid
- Seasonal Highlights
- Recommendations Section
- Orientation Help Text Block
- CTA Section
- Crosslink Section

---

## 11.3 Keramik
Verwendete Hauptsektionen:
- Page Hero
- Category Section
- Text Image Section
- Highlights Grid
- Gift Teaser Section
- Trust / Why Keramik Section
- CTA Section

---

## 11.4 Geschenkideen
Verwendete Hauptsektionen:
- Page Hero
- Anlass-Kacheln
- Budget-Kacheln
- Geschenkset-Module
- Zielgruppen- oder Empfänger-Module
- Beratungssektion
- Trust Section
- CTA Section

---

## 11.5 Aktuelles
Verwendete Hauptsektionen:
- Page Hero
- Editorial Feature Block
- Seasonal Highlights
- New In Store Grid
- Recommendations Section
- Crosslink Section

---

## 11.6 Über uns
Verwendete Hauptsektionen:
- Page Hero / Intro
- Storytelling Text Section
- Philosophy Section
- Text Image Section
- Marken / Auswahl Section
- CTA Section

---

## 11.7 Beratung & Bestellung
Verwendete Hauptsektionen:
- Page Hero
- Service Options Section
- Prozess / Steps Section
- Consultation Form Section
- FAQ Section
- CTA Section
- Contact Block optional

---

## 11.8 Kontakt
Verwendete Hauptsektionen:
- Page Hero / Intro
- Contact Block
- Map / Location Section
- Contact Form Section
- Ladenbesuchs-Teaser
- FAQ Kurzsektion

---

## 12. Zustände und Varianten

Viele Komponenten benötigen mehrere Varianten.

## Beispielhafte Varianten
- Hero: groß / kompakt
- Card: bildlastig / textlastig / CTA
- CTA Section: hell / dunkel / neutral
- Section Heading: mit Eyebrow / ohne Eyebrow / mit CTA
- Form Section: allgemein / beratungsorientiert
- Trust Section: 3er / 4er / 5er Grid

---

## 13. Priorisierung für Cursor

Wenn Cursor die Website baut, sollen Komponenten in dieser Reihenfolge gedacht und umgesetzt werden:

### Stufe 1 – Fundament
- Header
- Navigation
- Footer
- Section Container
- Section Heading
- Buttons
- Karten-Grundsystem

### Stufe 2 – Kernsektionen
- Hero Section
- Page Hero
- Quick Access Grid
- Category Teaser Section
- Service Options Section
- Contact Block

### Stufe 3 – Content-Sektionen
- Seasonal Highlights
- Gift Ideas Section
- Trust Section
- Recommendations Section
- Text Image Section
- FAQ Section

### Stufe 4 – Formulare und Feinschliff
- Contact Form
- Consultation Form
- CTA-Varianten
- responsive Optimierungen
- Interaktionszustände

---

## 14. Naming-Konvention für Cursor

Empfohlene Component-Namen:

- `AnnouncementBar`
- `SiteHeader`
- `MainNav`
- `MobileMenu`
- `SiteFooter`
- `HeroSection`
- `PageHero`
- `SectionHeading`
- `SectionContainer`
- `QuickAccessGrid`
- `CategoryTeaserSection`
- `SeasonalHighlightsSection`
- `GiftIdeasSection`
- `WhyTeeramikSection`
- `RecommendationsSection`
- `AboutTeaserSection`
- `ServiceOptionsSection`
- `ContactBlock`
- `TextImageSection`
- `EditorialFeatureBlock`
- `FeatureCard`
- `TrustCard`
- `HighlightCard`
- `ServiceCard`
- `CTASection`
- `CTAStack`
- `FAQSection`
- `ContactFormSection`
- `ConsultationFormSection`

---

## 15. Zusammenfassung in einem Satz

Das Komponenten- und Sektionen-Inventar definiert die modulare Struktur der TeeRamik-Website so, dass Cursor eine konsistente, ruhige, hochwertige und erweiterbare Markenwebsite aufbauen kann – ohne gestalterische oder technische Beliebigkeit.
