# OD AI HUB — Modern AI Talent-to-Innovation Ecosystem

> **A stronger Odisha through AI.**  
> *Learn. Build. Innovate. Scale.*  
> Location: Berhampur, Ganjam, Odisha, India

---

## 🏛️ Brand & Platform Overview

**OD AI HUB** is an AI talent-to-innovation ecosystem based in Berhampur, Odisha, empowering students, professionals, institutions, and businesses to learn, build, innovate, and scale.

### Exact Brand Colour Identity
The visual identity has been calibrated to the exact brand palette:

| Token | Hex Value | RGB Value | Usage |
|---|---|---|---|
| **Warm Ivory** | `#F7F1E9` | `rgb(247, 241, 233)` | Primary page canvas & light background |
| **Champagne** | `#E8D4B5` | `rgb(232, 212, 181)` | Secondary backgrounds, pill containers, soft glows |
| **Dusty Rose** | `#D9BFC1` | `rgb(217, 191, 193)` | Subtle ambient gradients & organic ribbon accents |
| **Muted Mauve** | `#A98791` / `#5C444C` | `rgb(169, 135, 145)` | Editorial subheadings & high-contrast body copy |
| **Deep Burgundy** | `#492A38` | `rgb(73, 42, 56)` | Supporting headlines & dark section depth |
| **Dark Plum** | `#291D29` | `rgb(41, 29, 41)` | Main headings, primary buttons, footer & cinema backdrop |
| **Antique Bronze** | `#AD784B` | `rgb(173, 120, 75)` | Signature italic "*Odisha*", highlights, icons |
| **Soft White** | `#FFFDFC` | `rgb(255, 253, 252)` | Card surfaces & crisp inner highlights |

---

## 🎥 Native Story Video Integration

The story video is seamlessly integrated as an organic storytelling canvas rather than a conventional embedded player:
- **Feathered Edge Masking**: Uses `-webkit-mask-image` and radial gradient feathering that dissolves the video perimeter softly into the surrounding `#F7F1E9` Warm Ivory background.
- **No Player Boxes or Intrusive Controls**: Thick borders, dark container frames, and permanent scrubber bars have been removed from the preview.
- **Restrained Warm Colour Grading**: Subtle post-grading overlay harmonizes the footage with the Warm Ivory and Champagne brand tones without distorting the underlying video.
- **Full Cinema Modal**: Clicking "Watch Full Video" or the preview opens [`FullVideoModal.tsx`](src/components/VideoSection/FullVideoModal.tsx) in a Dark Plum (`#291D29`) theater with custom scrubbing, volume controls, and time display.
- **Reduced Motion Support**: Automatically respects `prefers-reduced-motion` to pause preview autoplay.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📂 Architecture & Folder Structure

```
src/
├── components/
│   ├── 3d/
│   │   ├── OdishaConstellationCanvas.tsx  # 3D interactive glowing network of Odisha
│   │   ├── FlowingRibbonsCanvas.tsx       # Parametric metallic bronze/champagne silk ribbons
│   │   └── CTA3DScene.tsx                 # Luminous 3D innovation core
│   ├── Navigation/
│   │   ├── Navbar.tsx                     # Responsive navigation with active indicators
│   │   ├── Logo.tsx                       # Custom orbital SVG emblem
│   │   └── DestinationToast.tsx           # Preview notification for non-home links
│   ├── Hero/
│   │   ├── Hero.tsx                       # Editorial hero & 3D layout
│   │   └── BrandLoader.tsx                # Cinematic opening sequence
│   ├── VideoSection/
│   │   ├── VideoPlayer.tsx                # Natively integrated feathered video preview
│   │   └── FullVideoModal.tsx             # Dark Plum cinema modal with complete playback
│   ├── Pillars/
│   │   └── PillarsBar.tsx                 # 5 Pillars: Learn, Build, Innovate, Launch, Scale
│   ├── WhyUs/
│   │   ├── BentoHighlights.tsx            # Bento cards: Why Us + Impact + Featured Events
│   │   └── WhyUsSection.tsx               # 6 core pedagogical & career pillars
│   ├── Ecosystem/
│   │   └── EcosystemSection.tsx           # 5 interactive 3D cards with drag & tabs
│   ├── Statistics/
│   │   └── StatisticsSection.tsx          # Scroll-triggered animated numerical counters
│   ├── About/
│   │   └── AboutSection.tsx               # Berhampur HQ mission & global talent corridors
│   ├── Testimonials/
│   │   └── SuccessStoriesSection.tsx      # Student stories (Rohan, Ananya, Siddharth)
│   ├── FAQ/
│   │   └── FAQSection.tsx                 # Interactive accordion
│   ├── CTA/
│   │   └── FinalCTASection.tsx            # Deep plum final conversion section
│   ├── Footer/
│   │   └── Footer.tsx                     # Full footer with legal, links, and address
│   └── EnquiryModal/
│       └── EnquiryModal.tsx               # Admissions & partnerships modal with confetti
├── styles/
│   └── index.css                          # Custom design tokens, feathered masks, glassmorphism
├── App.tsx                                # Main application root
└── main.tsx                               # Entrypoint
```
