# Codex Agent Instructie – Statische website AiNed Learning Community

## Doel
Ontwikkel een statische, responsive website op basis van de analyse in `ained_learning_community_export.txt`.

De website presenteert het voorstel voor een AiNed Learning Community rond:

**Human-Centered Physical AI – Cognitive Care Robotics**

De site moet geschikt zijn om het concept helder, professioneel en overtuigend te presenteren aan onderwijsinstellingen, mkb-bedrijven, zorgorganisaties en mogelijke consortiumdeelnemers.

Maak geen inhoudelijke wijzigingen in de bronanalyse. Gebruik de tekst uit `ained_learning_community_export.txt` als inhoudelijke basis en structureer deze geschikt voor webpresentatie.

---

## Technische uitgangspunten

Ontwikkel een statische website met:

- HTML
- CSS
- JavaScript

Gebruik geen backend.

De site moet lokaal kunnen draaien door `index.html` te openen in een browser.

Gebruik bij voorkeur deze bestandsstructuur:

```text
/
├── index.html
├── thema-ziekenhuis.html
├── thema-verpleeghuis.html
├── thema-thuiszorg.html
├── thema-therapie.html
├── learning-community.html
├── deelnemers.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── data/
    └── content.js
```

Een alternatief met één `index.html` en client-side routing mag ook, mits alle gevraagde pagina’s duidelijk als aparte secties of routes beschikbaar zijn.

---

## Pagina’s

Maak minimaal de volgende pagina’s.

### 1. Homepage

Bestand:

```text
index.html
```

Doel:
Een heldere introductie geven op het vraagstuk.

Inhoud:
- Titel: **Human-Centered Physical AI for Cognitive Care Robotics**
- Ondertitel: **Een Learning Community voor sociaal adaptieve zorgrobotica**
- Beschrijving van het vraagstuk:
  - zorgdruk;
  - personeelstekorten;
  - vergrijzing;
  - robots die technisch functioneren maar sociaal nog onvoldoende aansluiten;
  - noodzaak om AI, robotica, zorgpraktijk en onderwijs gezamenlijk te verbinden.
- Korte uitleg van het AiNed Learning Community-principe:
  - case-based learning;
  - mkb, onderwijs en zorgorganisaties;
  - praktijkcases;
  - leermodules;
  - duurzame kennisontwikkeling.
- Overzichtskaarten naar de vier cases:
  - ziekenhuis;
  - verpleeghuis;
  - thuiszorg;
  - therapie/revalidatie.
- Call-to-action naar:
  - Learning Community-pagina;
  - deelnemerspagina.

Gebruik een hero-sectie, panels en overzichtskaarten.

---

### 2. Thema / Casepagina Ziekenhuis

Bestand:

```text
thema-ziekenhuis.html
```

Titel:
**Context-Aware Ward Assistant**

Context:
Ziekenhuis, verpleegafdeling, mobiele servicerobot.

Inhoudelijke onderdelen:
- context;
- praktijkvraag;
- AI-componenten;
- leerdoelen;
- betrokken partijen;
- concrete activiteiten;
- leermodule.

Gebruik accordions voor minimaal:
- AI-componenten;
- leerdoelen;
- activiteiten;
- leermodule.

---

### 3. Thema / Casepagina Verpleeghuis

Bestand:

```text
thema-verpleeghuis.html
```

Titel:
**Emotionally Adaptive Dementia Support Robot**

Context:
Verpleeghuis, bewoners met dementie, sociale robot.

Inhoudelijke onderdelen:
- context;
- praktijkvraag;
- AI-componenten;
- leerdoelen;
- betrokken partijen;
- concrete activiteiten;
- leermodule.

Gebruik accordions.

---

### 4. Thema / Casepagina Thuiszorg

Bestand:

```text
thema-thuiszorg.html
```

Titel:
**Adaptive Home Care Companion**

Context:
Thuiszorg, zelfstandig wonende ouderen, mobiele assistentrobot.

Inhoudelijke onderdelen:
- context;
- praktijkvraag;
- AI-componenten;
- leerdoelen;
- betrokken partijen;
- concrete activiteiten;
- leermodule.

Gebruik accordions.

---

### 5. Thema / Casepagina Therapie en Revalidatie

Bestand:

```text
thema-therapie.html
```

Titel:
**AI-Augmented Rehabilitation Robot**

Context:
Therapie en revalidatie, robotondersteunde oefeningen.

Inhoudelijke onderdelen:
- context;
- praktijkvraag;
- AI-componenten;
- leerdoelen;
- betrokken partijen;
- concrete activiteiten;
- leermodule.

Gebruik accordions.

---

### 6. Learning Community-pagina

Bestand:

```text
learning-community.html
```

Titel:
**Learning Community Structuur**

Inhoud:
- concept van de Learning Community;
- didactische visie;
- strategische kernpartners;
- managementrollen:
  - penvoerder;
  - learning community lead;
  - learning lead;
- vier operationele lagen:
  - practice labs;
  - multidisciplinaire caseteams;
  - reflection & learning layer;
  - knowledge transfer layer;
- structuur van een case-cyclus:
  - probleemverkenning;
  - co-design;
  - experimenteren;
  - reflectie;
  - borging in leermodules;
- typische activiteiten:
  - case-activiteiten;
  - leeractiviteiten;
  - ecosysteemactiviteiten;
- mogelijke positionering.

Gebruik panels, cards, timeline-component en accordions.

---

### 7. Deelnemerspagina

Bestand:

```text
deelnemers.html
```

Titel:
**Deelnemers en Leerbehoeften**

Beschrijf per stakeholdergroep:
- wat zij missen aan kennis en ervaring;
- wat zij nodig hebben;
- hoe zij dit kunnen leren.

Stakeholdergroepen:
- zorgprofessionals;
- mkb-bedrijven / robotleveranciers;
- managers en innovatieleads;
- docenten;
- studenten.

Gebruik per stakeholdergroep een card of panel met accordion-secties:
- missen;
- nodig;
- leren via.

---

## Navigatie

Maak een consistente navigatiebalk op alle pagina’s.

Navigatie-items:
- Home
- Ziekenhuis
- Verpleeghuis
- Thuiszorg
- Therapie
- Learning Community
- Deelnemers

De navigatie moet responsive zijn:
- desktop: horizontale navigatie;
- mobiel: hamburger-menu.

Markeer de actieve pagina visueel.

---

## Zoekfunctie

Voeg een zoekfunctie toe.

Eisen:
- Zoekveld zichtbaar in de header of bovenaan de pagina.
- Zoek door alle pagina-inhoud of door een centrale content-index.
- Resultaten tonen:
  - paginatitel;
  - korte snippet;
  - link naar de juiste pagina.
- Zoekresultaten verschijnen direct tijdens typen of na submit.
- De zoekfunctie moet volledig client-side werken in JavaScript.

Gebruik bijvoorbeeld een array met index-items in `data/content.js`:

```js
const searchIndex = [
  {
    title: "Context-Aware Ward Assistant",
    url: "thema-ziekenhuis.html",
    keywords: "ziekenhuis verpleegafdeling servicerobot multimodale AI computer vision context aware decision making"
  }
];
```

---

## Designrichting

Gebruik een modern, professioneel thema dat past bij:
- AI;
- zorginnovatie;
- onderwijs;
- publiek-private samenwerking.

Stijl:
- rustig;
- helder;
- technologisch;
- betrouwbaar;
- toegankelijk.

Gebruik een consistent kleurenpalet.

Aanbevolen kleurenpalet:

```css
:root {
  --color-primary: #123C69;
  --color-secondary: #2F80ED;
  --color-accent: #00A896;
  --color-highlight: #F2C94C;
  --color-background: #F7FAFC;
  --color-surface: #FFFFFF;
  --color-text: #1F2933;
  --color-muted: #6B7280;
  --color-border: #E5E7EB;
}
```

Typografie:
- Gebruik een moderne sans-serif font stack:
```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Layout:
- max-width container;
- ruime witruimte;
- cards/panels;
- duidelijke typografische hiërarchie;
- subtiele schaduwen;
- afgeronde hoeken;
- goede leesbaarheid.

Gebruik responsive CSS:
- desktop;
- tablet;
- mobiel.

---

## Componenten

Implementeer minimaal:

### Panels
Voor inhoudelijke blokken.

### Cards
Voor thema-overzichten en stakeholdergroepen.

### Accordions
Voor verdiepende tekst.

### Timeline
Voor de case-cyclus op de Learning Community-pagina.

### Search results panel
Voor de zoekfunctie.

### CTA-blokken
Voor verwijzingen naar relevante pagina’s.

---

## Contentstructuur per casepagina

Gebruik per case ongeveer deze structuur:

```html
<section class="page-hero">
  <p class="eyebrow">Case</p>
  <h1>Context-Aware Ward Assistant</h1>
  <p>Beschrijving van de case.</p>
</section>

<section class="panel">
  <h2>Praktijkvraag</h2>
  <p>Hoe kan een zorgrobot sociale en klinische context herkennen en zijn gedrag daarop aanpassen?</p>
</section>

<section class="accordion-group">
  <article class="accordion">
    <button class="accordion-trigger">AI-componenten</button>
    <div class="accordion-content">
      ...
    </div>
  </article>
</section>
```

---

## Interactie

Schrijf JavaScript voor:

1. Hamburger-menu
2. Accordions
3. Zoekfunctie
4. Actieve navigatie-state

Gebruik vanilla JavaScript.

Zorg dat de site ook bruikbaar blijft als JavaScript gedeeltelijk faalt.

---

## Toegankelijkheid

Let op:

- semantische HTML;
- voldoende kleurcontrast;
- duidelijke focus-states;
- buttons voor accordions;
- `aria-expanded` voor accordions;
- labels voor zoekveld;
- nav-element voor navigatie;
- goede heading-structuur.

---

## SEO en metadata

Voeg per pagina toe:

- unieke title;
- meta description;
- Open Graph tags;
- taalinstelling `lang="nl"`.

Voorbeeld:

```html
<html lang="nl">
<head>
  <title>Context-Aware Ward Assistant | Cognitive Care Robotics</title>
  <meta name="description" content="Casepagina over sociaal adaptieve zorgrobotica op verpleegafdelingen.">
</head>
```

---

## Inhoudelijke randvoorwaarden

Gebruik de volgende centrale positionering:

**Human-Centered Physical AI Learning Community**

Ondertitel:

**Learning to design, deploy and evaluate socially adaptive healthcare robotics**

Alternatief:

**Cognitive Care Robotics Living Labs**

Ondertitel:

**Case-based learning for trustworthy physical AI in healthcare**

Gebruik deze formuleringen consequent.

---

## Belangrijke inhoudelijke nuance

Positioneer het voorstel niet als een technisch R&D-project waarin nieuwe robots worden ontwikkeld.

Positioneer het als een praktijkgericht leer-ecosysteem waarin deelnemers leren hoe bestaande zorgrobots sociaal adaptief, verantwoord en contextbewust kunnen worden ingezet in zorgcontexten.

De nadruk ligt op:

- leren;
- toepassen;
- co-creëren;
- evalueren;
- leermodules ontwikkelen;
- kennis overdraagbaar maken.

---

## Verwachte output

Lever een complete werkende statische website op met:

- alle HTML-pagina’s;
- CSS;
- JavaScript;
- eventuele content-data;
- duidelijke bestandsstructuur;
- consistente navigatie;
- responsive ontwerp;
- werkende accordions;
- werkende zoekfunctie.

Controleer dat alle interne links werken.

Controleer dat alle pagina’s mobiel bruikbaar zijn.

Controleer dat de zoekfunctie resultaten oplevert voor termen zoals:

- robotica
- ziekenhuis
- dementie
- thuiszorg
- revalidatie
- learning community
- AI-componenten
- zorgprofessionals
- mkb
- studenten
