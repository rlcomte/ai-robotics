# AiNed Learning Community Site

Static multi-page website for the AiNed Learning Community proposal:

**Human-Centered Physical AI for Cognitive Care Robotics**

The site presents the concept, case pages, learning community structure, participant learning needs, and call-related criteria for a practice-oriented learning ecosystem around socially adaptive healthcare robotics.

## Stack

- Vite
- Vanilla HTML, CSS and JavaScript
- Static build output in `dist/`

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Pages

- `index.html` - homepage
- `thema-ziekenhuis.html` - Context-Aware Ward Assistant
- `thema-verpleeghuis.html` - Emotionally Adaptive Dementia Support Robot
- `thema-thuiszorg.html` - Adaptive Home Care Companion
- `thema-therapie.html` - AI-Augmented Rehabilitation Robot
- `learning-community.html` - learning community structure
- `deelnemers.html` - participants and learning needs

## GitHub Pages

The Vite base path is configured for the GitHub repository:

```js
base: "/ai-robotics/"
```

For GitHub Pages, publish the contents of `dist/` after running:

```bash
npm run build
```

Expected Pages URL:

```text
https://rlcomte.github.io/ai-robotics/
```

## Source Material

The website content is based on:

- `ained_learning_community_export.txt`
- `08_05_26_Call_for_Proposals_AiNed_Learning_Communities_2026.pdf`
- `CODEX_AGENT_INSTRUCTIES_AINED_WEBSITE.md`
