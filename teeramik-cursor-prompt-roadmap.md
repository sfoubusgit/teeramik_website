# Prompt-Roadmap für Cursor – TeeRamik Website Schritt für Schritt umsetzen

## 1. Ziel dieses Dokuments

Diese Prompt-Roadmap ersetzt einen einzelnen großen Master-Prompt durch mehrere aufeinander aufbauende Arbeitsphasen.  
Sie ist dafür gedacht, in Cursor **schrittweise** verwendet zu werden, damit die Website sauber, modular und konsistent entsteht.

Die Roadmap hilft dabei:

- Cursor weniger Interpretationsspielraum zu geben
- zuerst das Fundament und dann die Seiten zu bauen
- Konsistenz im UI-System zu sichern
- Inhalte strukturiert zu integrieren
- Iterationen kontrollierbar zu halten

Wichtig:  
Alle relevanten Referenzdokumente liegen im Ordner:

`/docs`

Jeder Prompt in dieser Roadmap bezieht sich auf diese Dateien.

---

## 2. Empfohlene Arbeitslogik

Die Website soll in folgenden Phasen entstehen:

1. **Analyse und Projektverständnis**
2. **Technisches Fundament und Projektstruktur**
3. **Designsystem und globale UI-Basis**
4. **Komponentenbibliothek**
5. **Startseite**
6. **Unterseiten**
7. **Formulare, SEO, Accessibility und Responsivität**
8. **Finales Refactoring und Qualitätscheck**

Wichtig:
- Jeden Prompt erst dann ausführen, wenn die vorherige Phase sinnvoll abgeschlossen ist.
- Cursor soll nach jeder Phase kurz zusammenfassen, was umgesetzt wurde.
- Nicht mehrere Phasen gleichzeitig vermischen.

---

# Phase 1 – Analyse und Projektverständnis

## Ziel
Cursor soll zuerst alle Dokumente lesen, das Zielbild verstehen und daraus eine belastbare Umsetzungslogik ableiten.

## Prompt 1 für Cursor

```md
Lesen Sie zuerst alle relevanten Projektdokumente im Ordner `/docs` sorgfältig und erstellen Sie **noch keinen finalen Seitenbau**.

Verwenden Sie insbesondere diese Dateien:

- `/docs/teeramik-hybridkonzept.md`
- `/docs/teeramik-umsetzungsmodell.md`
- `/docs/teeramik-startseiten-wireframe.md`
- `/docs/teeramik-startseite-sie-version.md`
- `/docs/teeramik-ui-designsystem-brief.md`
- `/docs/teeramik-technische-projekt-spezifikation.md`
- `/docs/teeramik-content-mapping-hauptseiten.md`
- `/docs/teeramik-komponenten-sektionen-inventar.md`

Ihre Aufgabe in diesem Schritt:

1. Fassen Sie das Zielbild der Website kurz zusammen.
2. Beschreiben Sie die gewünschte Markenwirkung.
3. Leiten Sie die wichtigsten Seiten und Komponenten ab.
4. Schlagen Sie eine sinnvolle technische und strukturelle Projektarchitektur vor.
5. Nennen Sie die wichtigsten Umsetzungsrisiken, die bei der Entwicklung vermieden werden müssen.

Wichtig:
- Bauen Sie in diesem Schritt noch keine finalen Seiten.
- Treffen Sie keine generischen Template-Entscheidungen.
- Arbeiten Sie ausschließlich auf Basis der Dokumente in `/docs`.

Geben Sie die Antwort strukturiert aus als:
- Zielbild
- Markenwirkung
- Seitenstruktur
- Komponentenstruktur
- technische Struktur
- Risiken / Dinge, die vermieden werden sollen
```

---

# Phase 2 – Technisches Fundament und Projektstruktur

## Ziel
Cursor soll das Projekt sauber aufsetzen, bevor visuelle oder inhaltliche Details ausgebaut werden.

## Prompt 2 für Cursor

```md
Setzen Sie jetzt auf Basis der Dokumente in `/docs` das technische Fundament des Projekts um.

Vorgaben:
- Next.js
- React
- TypeScript
- Tailwind CSS

Ihre Aufgabe:

1. Legen Sie die Projektstruktur an.
2. Erstellen Sie die Haupt-Routen für:
   - `/`
   - `/tee`
   - `/keramik`
   - `/geschenkideen`
   - `/aktuelles`
   - `/ueber-uns`
   - `/beratung-bestellung`
   - `/kontakt`
   - `/impressum`
   - `/datenschutz`
3. Erstellen Sie eine sinnvolle Komponentenordner-Struktur.
4. Legen Sie eine Content-Struktur an, damit Inhalte nicht direkt hart in die Seiten geschrieben werden.
5. Bereiten Sie das Projekt so vor, dass Designsystem und Komponenten im nächsten Schritt sauber ergänzt werden können.

Wichtig:
- In diesem Schritt noch keine finalen visuellen Seiten bauen.
- Fokus auf saubere Struktur, Wartbarkeit und Erweiterbarkeit.
- Orientieren Sie sich an `/docs/teeramik-technische-projekt-spezifikation.md`.

Geben Sie am Ende eine kurze Zusammenfassung:
- welche Ordner und Dateien angelegt wurden
- wie die Routing-Struktur aussieht
- wie Content und Komponenten organisiert wurden
```

---

# Phase 3 – Designsystem und globale UI-Basis

## Ziel
Cursor soll zuerst das visuelle Fundament bauen, bevor einzelne Seiten umgesetzt werden.

## Prompt 3 für Cursor

```md
Implementieren Sie jetzt das Designsystem und die globale UI-Basis der TeeRamik-Website.

Verbindliche Referenz:
- `/docs/teeramik-ui-designsystem-brief.md`

Ihre Aufgabe:

1. Übersetzen Sie die Designprinzipien in ein technisches UI-System.
2. Definieren Sie Farben, Typografie, Spacing, Radius und grundlegende Tokens.
3. Konfigurieren Sie Tailwind entsprechend.
4. Erstellen Sie grundlegende UI-Bausteine wie:
   - Buttons
   - Container
   - Section Heading
   - Karten-Basis
   - grundlegende Textstile
5. Sorgen Sie dafür, dass die Website ruhig, warm, hochwertig und editorial wirkt.

Wichtig:
- Kein generischer Standard-Tailwind-Look.
- Keine kalte Tech-/SaaS-Optik.
- Keine aggressive Shop-Ästhetik.
- Diese Phase soll noch kein vollständiger Seitenbau sein.

Geben Sie am Ende kurz an:
- welche Design-Tokens definiert wurden
- welche Basis-UI-Komponenten existieren
- wie das Designsystem technisch organisiert ist
```

---

# Phase 4 – Komponentenbibliothek

## Ziel
Cursor soll alle wiederverwendbaren Website-Bausteine bauen, bevor Seiten daraus zusammengesetzt werden.

## Prompt 4 für Cursor

```md
Bauen Sie jetzt die wiederverwendbare Komponentenbibliothek für die TeeRamik-Website.

Verbindliche Referenz:
- `/docs/teeramik-komponenten-sektionen-inventar.md`

Zu erstellende Komponenten umfassen mindestens:

- `AnnouncementBar`
- `SiteHeader`
- `MainNav`
- `MobileMenu`
- `SiteFooter`
- `HeroSection`
- `PageHero`
- `SectionContainer`
- `SectionHeading`
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
- `FAQSection`
- `ContactFormSection`
- `ConsultationFormSection`

Ihre Aufgabe:

1. Implementieren Sie die Komponenten modular und wiederverwendbar.
2. Nutzen Sie das bereits angelegte Designsystem.
3. Denken Sie Responsivität direkt mit.
4. Sorgen Sie dafür, dass Komponenten nicht generisch, sondern zur TeeRamik-Marke passend wirken.

Wichtig:
- Noch nicht alle Seiten final zusammenbauen.
- Erst die Komponentenbibliothek.
- Komponenten sollen strukturell sauber, semantisch und wartbar sein.

Geben Sie am Ende aus:
- welche Komponenten gebaut wurden
- welche Props oder Strukturentscheidungen gewählt wurden
- welche Komponenten bereits für mehrere Seiten wiederverwendbar sind
```

---

# Phase 5 – Startseite umsetzen

## Ziel
Die Startseite als wichtigste Seite vollständig und hochwertig bauen.

## Prompt 5 für Cursor

```md
Setzen Sie jetzt die vollständige Startseite der TeeRamik-Website um.

Verbindliche Referenzen:
- `/docs/teeramik-startseiten-wireframe.md`
- `/docs/teeramik-startseite-sie-version.md`
- `/docs/teeramik-content-mapping-hauptseiten.md`

Die Startseite soll mindestens folgende Sektionen enthalten:

1. Announcement Bar
2. Header
3. Hero
4. Schnelleinstieg nach Bedürfnis
5. Drei Hauptwelten
6. Saisonale Highlights
7. Geschenkbereich
8. Warum TeeRamik
9. Empfehlungen / Favoriten
10. Über-uns-Teaser
11. Service- und Bestellbereich
12. Kontakt- und Standortbereich
13. Footer

Wichtig:
- Verwenden Sie die „Sie“-Ansprache konsequent.
- Nutzen Sie die Texte aus `/docs/teeramik-startseite-sie-version.md` als primäre Copy-Basis.
- Falls kleine Ergänzungen nötig sind, formulieren Sie im Stil der bestehenden Texte.
- Die Seite soll hochwertig, ruhig, warm und conversion-orientiert wirken.

Achten Sie besonders auf:
- Hero-Wirkung
- CTA-Hierarchie
- mobile Lesbarkeit
- klare Sektionen
- ruhige Bild- und Kartenlogik

Geben Sie am Ende eine kurze Zusammenfassung:
- welche Sektionen umgesetzt wurden
- wie die CTA-Logik gelöst wurde
- welche Stellen für echte Bilder oder finale Assets vorgesehen sind
```

---

# Phase 6 – Unterseiten umsetzen

## Ziel
Die restlichen Hauptseiten auf Basis des Content-Mappings bauen.

## Prompt 6 für Cursor

```md
Setzen Sie jetzt die Haupt-Unterseiten der TeeRamik-Website um.

Verbindliche Referenz:
- `/docs/teeramik-content-mapping-hauptseiten.md`

Erstellen Sie diese Seiten:
- `/tee`
- `/keramik`
- `/geschenkideen`
- `/aktuelles`
- `/ueber-uns`
- `/beratung-bestellung`
- `/kontakt`

Ihre Aufgabe:

1. Setzen Sie jede Seite entsprechend ihres definierten Seitenziels um.
2. Übernehmen Sie die Abschnittslogik aus dem Content-Mapping.
3. Sorgen Sie für konsistente visuelle und strukturelle Qualität.
4. Verwenden Sie vorhandene Komponenten wieder.
5. Achten Sie darauf, dass keine Seite wie eine leere Platzhalterseite wirkt.

Wichtig:
- Jede Seite braucht eine klare CTA-Hierarchie.
- Jede Seite braucht einen verständlichen Einstieg.
- Die Sprache bleibt durchgehend in der „Sie“-Form.
- Stilistisch müssen alle Seiten zum Designsystem passen.

Geben Sie am Ende aus:
- welche Seiten umgesetzt wurden
- welche Komponenten pro Seite wiederverwendet wurden
- wo noch Inhalte oder Assets später verfeinert werden können
```

---

# Phase 7 – Formulare, SEO, Accessibility und Responsivität

## Ziel
Die Website funktional und qualitativ absichern.

## Prompt 7 für Cursor

```md
Überarbeiten und vervollständigen Sie jetzt die Website in Bezug auf Formulare, SEO-Basics, Accessibility und Responsivität.

Verbindliche Referenz:
- `/docs/teeramik-technische-projekt-spezifikation.md`

Ihre Aufgabe:

1. Implementieren oder vervollständigen Sie:
   - Kontaktformular
   - Beratungs- / Bestellanfrageformular
2. Sorgen Sie für:
   - semantische HTML-Struktur
   - saubere Heading-Hierarchie
   - Labels und Fokuszustände
   - ausreichende Klickflächen
   - gute mobile Nutzbarkeit
3. Ergänzen Sie SEO-Basics:
   - Titles
   - Meta Descriptions
   - saubere H1-Struktur
   - interne Verlinkungen
4. Prüfen Sie die Responsivität aller Hauptseiten.
5. Entfernen Sie Layout-Brüche, Overflows und inkonsistente Abstände.

Wichtig:
- Diese Phase ist Qualitätsarbeit, kein Redesign.
- Die bestehende Markenwirkung darf nicht verloren gehen.
- Priorisieren Sie Usability, Klarheit und Konsistenz.

Geben Sie am Ende aus:
- welche Verbesserungen bei Formularen, SEO, Accessibility und Responsivität vorgenommen wurden
- welche Bereiche besonders optimiert wurden
```

---

# Phase 8 – Finales Refactoring und Qualitätscheck

## Ziel
Die gesamte Website in einen sauberen, präsentationsreifen Zustand bringen.

## Prompt 8 für Cursor

```md
Führen Sie jetzt einen finalen Refactoring- und Qualitätscheck für die gesamte TeeRamik-Website durch.

Verwenden Sie alle relevanten Dokumente in `/docs` als abschließende Referenz.

Ihre Aufgabe:

1. Prüfen Sie die gesamte Website auf Konsistenz.
2. Vereinheitlichen Sie Komponenten, Abstände, Typografie und CTA-Stile.
3. Entfernen Sie unnötige Redundanzen im Code.
4. Verbessern Sie bei Bedarf Naming, Struktur und Wiederverwendbarkeit.
5. Prüfen Sie, ob die Website in ihrer Gesamtwirkung wirklich:
   - warm
   - ruhig
   - hochwertig
   - editorial
   - persönlich
   - conversion-orientiert
   wirkt.
6. Prüfen Sie, ob die Website eher wie eine hochwertige lokale Markenwebsite als wie ein generischer Shop wirkt.

Erstellen Sie abschließend eine strukturierte Zusammenfassung:
- Was wurde umgesetzt?
- Welche Stärken hat die aktuelle Version?
- Welche Bereiche sind bereits sehr gut?
- Welche Punkte wären der sinnvollste nächste Ausbau nach Version 1?
```

---

## 3. Empfohlene Nutzung in Cursor

### So verwenden Sie diese Roadmap ideal:
- Phase 1 einzeln ausführen und Ergebnis prüfen
- dann Phase 2
- dann Phase 3
- usw.

### Nicht empfohlen:
- mehrere Prompts gleichzeitig kombinieren
- Cursor alle Phasen auf einmal machen lassen
- das Fundament überspringen und direkt mit Seiten starten

---

## 4. Empfehlung zur Reihenfolge in der Praxis

Wenn Sie schnell zu einem guten sichtbaren Ergebnis kommen wollen, ist diese Reihenfolge ideal:

1. Phase 1
2. Phase 2
3. Phase 3
4. Phase 4
5. Phase 5
6. kurze Sichtprüfung
7. Phase 6
8. Phase 7
9. Phase 8

---

## 5. Zusammenfassung in einem Satz

Diese Prompt-Roadmap sorgt dafür, dass Cursor die neue TeeRamik-Website nicht in einem unkontrollierten Großprompt, sondern in klaren, professionellen Umsetzungsphasen aufbaut – vom Verständnis über System und Komponenten bis zur fertigen Website.
