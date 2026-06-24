# Prompty pro fotky webu PROELE – Google Nano Banana (Gemini 2.5 Flash Image)

> Sada promptů pro všechny fotky webu. **Hero = editorial styl**, ostatní sekce = **clean / korporátní styl**, ale celkově konzistentní paleta a kompozice.
>
> **Důležitá pravidla pro celou sadu:**
> - **NIKDY** žádné vysoké napětí (no high-voltage transformers, no HV substations, no overhead power lines, no insulators on poles, no warning signs "Pozor vysoké napětí")
> - Pouze **NN rozvaděče** (low-voltage distribution boards), prostředí bytových/komerčních objektů
> - Česká / středoevropská architektura (panelák, kancelářská budova z 90./2000. let, moderní novostavba)
> - Pracovník v montérkách – tmavě modrá nebo šedá pracovní uniforma (bez výrazných firemních log), bezpečnostní obuv, případně helma a brýle
> - Žádné cizí firemní logo na zdi/oblečení (kromě případného HILTI, ale lépe bez)
> - **Aspect ratio doporučuji ladit ke každé sekci zvlášť** – Nano Banana respektuje slovní popisy ("wide cinematic 16:9", "vertical portrait", "square 1:1")
> - Když chcete konzistentní vzhled technika ve více fotkách, použijte **multi-turn editing** v Nano Banana: nejdřív vygenerujte hero, pak řekněte "use the same technician character in this new scene…"

---

## 1. HERO – hlavní leader fotka (editorial styl)

**Sekce:** `<section id="hero">` v `src/pages/index.astro`, soubor `public/hero-elektrikar.png`

**Cíl:** Autentická editorial fotka technika při práci v NN rozvaděči. Působí jako reportážní snímek, ne stock. Hodně prostoru pro text vlevo (pravidlo třetin – pracovník vpravo).

### Hlavní prompt (EN)

```
Editorial documentary photograph of a Czech electrician technician in his 30s-40s working inside a modern low-voltage distribution board (NN rozvaděč) in the hallway of a Czech apartment building. He wears a clean dark-navy work uniform without visible logos, safety glasses pushed up on his forehead, holding a screwdriver and testing a circuit breaker with concentrated expression. The distribution cabinet shows neatly organized circuit breakers, RCDs, and labeled wiring — no high-voltage equipment, no transformers, no warning signs. Soft natural daylight from a window on the left, slight film grain, shallow depth of field with the technician sharp and the background corridor softly blurred. The scene feels real, authentic, calm and professional — like a magazine reportage on skilled trades. Color palette: muted neutral tones, warm beige walls, cool blue uniform, subtle red accent only on a label inside the cabinet. Camera: 35mm lens, f/2.8, ISO 400, slight Kodak Portra 400 film look. Composition: technician positioned in the right third of the frame, leaving the left two-thirds with breathing space for text overlay. Wide cinematic 16:9 aspect ratio, ultra-detailed, photorealistic, high resolution.
```

### Negativní pokyny (pokud Nano Banana řekne "neumím negativy", přidejte do hlavního promptu věty s "no…"):

- no high voltage equipment
- no transformers, no overhead power lines, no HV insulators
- no warning stickers about high voltage
- no visible third-party brand logos
- no stock-photo cliché poses (thumbs up, big smile to camera)
- no industrial factory background — keep it residential/office corridor

### Varianta B (alternativa – kancelářské prostředí)

```
Same setup as previous, but the location is the technical room of a modern Czech office building (clean glass walls visible in the background, polished concrete floor, cable trays on the ceiling). The technician is checking labels on a row of low-voltage breakers in a tall industrial-style metal cabinet. Cool natural light from large windows, more architectural, still editorial — wide 16:9 framing with negative space on the left for headline text.
```

---

## 2. SEKCE REFERENCE – 3 karty (clean styl)

**Sekce:** `<section id="reference">`, soubor `src/pages/index.astro` řádky ~289–320. Aktuálně 3 Unsplash placeholdery.

Všechny tři fotky mají **stejný vizuální klíč**: clean profesionální fotka exteriéru/interiéru, dobré přirozené světlo, lehce nadhled, žádné lidi (nebo zezadu malá silueta), prostor pro overlay text dole. Doporučený aspect ratio **4:3 nebo 1:1** (karty mají `h-[300px]`).

### 2a) Bytové domy a SVJ

```
Clean professional architectural photograph of a recently renovated Czech mid-rise residential apartment building (5–8 floors), late afternoon golden hour light, modern facade with neutral grey and beige render, large windows, balconies with simple metal railings. The building looks well-maintained, common entrance visible at street level with a clean glass door and modern intercom panel. Sidewalk with mature trees framing the lower part of the composition. The photograph feels calm, trustworthy, residential — no people in frame, or one small distant silhouette walking. Color palette: muted neutrals, soft warm light. Style: architectural editorial, similar to Czech real estate magazines. Shot on a 35mm lens, f/5.6, sharp detail, slight cinematic color grade. Square 1:1 composition with the building anchoring the upper two-thirds and street/trees in the lower third.
```

### 2b) Komerční objekty (kanceláře / obchody)

```
Clean professional photograph of a modern Czech mid-sized commercial office building exterior, late afternoon light, glass and aluminum facade with horizontal lines, three to five floors, ground-floor reception visible through large glass front, subtle company-neutral branding (no recognizable real brand). Surrounding context shows clean pavement, a few planters, no traffic. The building looks technologically up-to-date — perfect for a story about CCTV, access control, and structured cabling, but without showing those systems explicitly. Color palette: cool blues and silvers with warm sky reflection. Style: corporate architectural photography, sharp, well-lit, no distortion. Square 1:1 framing, building dominates the frame, slight low-angle perspective for elegance.
```

### 2c) Průmyslové provozy

```
Clean professional photograph of the interior of a modern Czech industrial warehouse or light-manufacturing hall, high ceiling with exposed steel trusses and LED industrial linear lights, polished epoxy concrete floor, large NN low-voltage distribution boards mounted along one wall (silver metal cabinets, neatly labeled), cable trays running along the ceiling. Wide-angle perspective looking down the central aisle. No workers in frame, environment is calm and orderly — no chaotic machinery, no high-voltage equipment, no transformers. Cool industrial daylight from skylights above. Color palette: cool greys, steel, soft blue tones, with a small red emergency stop button as the only accent color. Style: clean industrial editorial photography, sharp, symmetric composition. Square 1:1 framing or 4:3.
```

---

## 3. SEKCE PROČ MY – fotka vedle textové karty

**Sekce:** `<section id="proc-my">`, soubor `src/pages/index.astro` řádky ~273 (aktuálně Unsplash photo-1509391366360).

Tato fotka je vyšší (`min-h-[520px]`), na ní pluje overlay s "150+ projektů" a "10+ let". Potřebuje působit **přirozeně a autenticky** – jako kdyby ji vyfotil někdo, kdo prošel kolem během reálné zakázky v bytovém domě. Žádné nastavené stock-photo pózování. Prostor v pravém dolním rohu pro overlay se statistikami.

### Hlavní prompt (EN)

```
Natural candid documentary photograph taken in the common hallway of a typical Czech residential apartment building (panelák or 1990s-2000s bytový dům), captured during a real renovation job. A Czech electrician in his late 30s is standing in front of an open hallway low-voltage distribution cabinet (NN rozvaděč rozvodny v paneláku), checking a connection — he is not posing for the camera, his attention is fully on the work, slightly leaning forward, one hand inside the cabinet, a small LED headlamp on his forehead or a worklight clipped to the cabinet door. He wears a slightly worn dark-navy work uniform without visible logos, a tool belt around his waist, scuffed safety boots. The cabinet shows real working conditions: rows of circuit breakers neatly arranged, some new and some older being replaced, a few cables temporarily hanging, a small notebook and pen resting on a folded-down panel. The hallway around him is recognizably Czech residential — terrazzo or vinyl floor, painted walls with that typical pale beige or muted green, an apartment door with a doormat visible in the background, mailboxes or a staircase railing on one side, soft natural daylight coming from a hallway window. Imperfections that make it feel real: a small toolbox on the floor, an extension cord running across the tiles, a piece of cardboard protecting the floor under the cabinet. Mood: focused, calm, ordinary working day. Style: natural documentary, like a photo a project manager took on their phone but with editorial quality lighting and composition — NOT stock photography, NOT staged. Color palette: muted neutrals, warm hallway light mixing with cool daylight, slight film grain. Tall vertical composition (3:4 or 4:5 portrait) with the technician and cabinet in the upper-left two thirds, the hallway floor and toolbox in the lower-right area kept calm and uncluttered for graphic overlay. Camera: 35mm lens, f/2.8, shot at eye-level from a slight distance like an observer, slight motion in the technician's hands suggesting real work in progress.
```

### Co dělá fotku přirozenější (kontrola po vygenerování)

Pokud Nano Banana vrátí příliš čistou / stagey fotku, doplňte v dalším promptu / editu:

- "Make it feel less posed — the technician should look genuinely absorbed in the work, not aware of the camera."
- "Add small realistic details: a coffee thermos on the windowsill, work gloves resting on the toolbox, a partially used roll of electrical tape."
- "The lighting should feel like real hallway light, not studio light — slightly uneven, with one side of the technician softer than the other."
- "The technician's uniform should show subtle signs of a workday — small smudges, slightly wrinkled fabric — not freshly pressed."

### Varianta B – širší pohled na chodbu se SVJ kontextem

Pokud chcete ještě více "z domu":

```
Natural candid photograph from inside the common hallway of a Czech 1980s panel apartment building, view down the corridor toward an open electrical cabinet on the wall where a single technician is working. The corridor shows authentic details: numbered apartment doors with name plates, a bulletin board with SVJ notices, a small window at the end of the corridor, terrazzo floor. The technician is in mid-action, half-turned, dark-navy uniform, tool in hand. Soft mixed lighting (window daylight + hallway fluorescent overhead). The image feels like it was taken by a resident passing by — not staged, just real life. Slightly off-center composition, lower-third reserved for graphic overlay area. Style: documentary, photorealistic, magazine-quality but unforced. Tall 3:4 portrait framing.
```

---

## 4. SEKCE CTA – fotka pozadí "Bezplatná konzultace"

**Sekce:** `<section id="kontakt-cta">`, soubor `src/pages/index.astro` řádek ~356 (aktuálně Unsplash photo-1473341304170).

Tato fotka je tmavé pozadí s overlay `rgba(7,16,26,.55–.78)` přes celou plochu, takže potřebuje **tmavé / dramatické** scenérie, ale pořád v duchu NN / požární bezpečnost. Aspect ratio široký, panorama – `16:9` nebo `21:9`.

```
Wide cinematic photograph of a modern Czech apartment building corridor at dusk, soft ambient overhead LED lighting reflecting on polished floor, in the foreground on the left wall a row of compact metal low-voltage distribution boards with subtle illuminated indicator lights, neatly sealed cable penetrations through the wall visible (fire-stopping seals with proper labels). The corridor stretches into deep perspective, empty, calm, professional. Mood: serious, secure, end-of-day quiet. No people. Color palette: deep blues and blacks dominated, single warm accent from a wall lamp, one red status LED visible. Style: architectural cinematic photography, atmospheric, with deep shadows and selective highlights — designed to take a dark blue overlay on top. Wide 16:9 panoramic framing, lots of negative space in the center for headline overlay.
```

---

## 5. TESTIMONIAL – portrétní avatar autorky reference

**Sekce:** `<section>` testimonial po CTA, soubor `src/pages/index.astro` řádky ~372–400. Aktuálně Unsplash photo-1494790108377 (kruhový avatar 40×40 px) + Unsplash photo-1509391366360 (vpravo velké pole).

> ⚠️ **Upozornění:** Pokud testimonial autora ("Mgr. Jana Nováková") **není reálná osoba**, AI-generovaná podobizna fiktivní osoby může působit jako falešná reference. **Doporučuji nejdřív s majitelem zkonzultovat**, zda nepoužít reálnou referenci s reálnou fotkou. Pokud i tak chcete AI avatar:

### 5a) Avatar (kruhový, 1:1)

```
Professional warm portrait of a Czech woman in her late 30s to mid 40s, friendly approachable smile, short to medium-length dark blonde hair, light makeup, wearing a soft cream-colored blouse, neutral office background slightly blurred, natural soft window light from the left, looking directly at camera with calm confidence. Style: corporate headshot, sharp focus on eyes, shallow depth of field, photorealistic, magazine-quality lighting. Square 1:1 composition, head and upper shoulders, plenty of context space around the head for cropping into a small avatar.
```

### 5b) Pravá karta testimonialu (velká fotka)

```
Editorial photograph inside the technical/utility room of a Czech residential building, soft warm light, focus on a clean labeled low-voltage distribution panel with an inspection sticker (date and stamp), the surrounding wall freshly painted, no people in frame. Atmosphere of order, recently completed renovation. Style: editorial, calm, magazine-quality. Wide framing 16:9 or 4:3, with the labeled panel in the right third and softly lit wall on the left.
```

---

## 6. NOVÁ SEKCE POŽÁRNÍ UCPÁVKY (Hilti + Dunamenti)

Pokud do nové sekce o požárních ucpávkách budete chtít vizuál (doporučuji aspoň jeden hlavní obrázek + případně malé ikony pro 4 pod-bloky), zde jsou prompty:

### 6a) Hlavní fotka sekce – realizace požární ucpávky

```
Clean professional close-up photograph of a freshly installed fire-stopping seal (požární ucpávka) around a bundle of electrical cables passing through a concrete wall in a building service shaft. The penetration shows the characteristic reddish-pink color of an intumescent fire-stop sealant (matching Hilti CFS or similar professional system) applied neatly around the cables, with a small metallic inspection label nearby showing date and inspector ID (no real brand visible — generic label). The surrounding concrete is clean and freshly drilled, cables are color-coded and tidily bundled. Natural cool worklight illuminating the scene from above. Composition: hero close-up at slight angle, sharp focus on the seal, background softly out of focus showing more cable trays and pipework extending into the shaft. Style: technical-editorial, sharp, magazine-quality, similar to a manufacturer's case-study photo, but neutral and uncommercial. 4:3 or 3:2 framing.
```

### 6b) Sekundární fotka – technik při instalaci ucpávky

```
Editorial photograph of a Czech fire-protection technician kneeling on the floor of a building service shaft, applying intumescent fire-stop sealant around cable penetrations in a wall. He wears a dark-navy work uniform without visible third-party logos, safety glasses, protective gloves. A caulking gun in his hand, a clean toolbox with various fire-stop products beside him (generic packaging, no real brand). The wall shows multiple penetrations in different stages — one finished and labeled, one being sealed, one prepared with backing material. Warm portable worklight on a tripod illuminates the scene from one side. Atmosphere: focused, careful, technical. Style: documentary editorial, photorealistic, slight grain, muted palette with one red accent (the sealant color), 3:2 or 16:9 framing.
```

### 6c) Ikony pro 4 pod-bloky (vector/illustrated, nebo simple flat photo)

Pokud chcete jednoduché ikony místo fotek, zkuste:

- **Rozdělení na požární úseky:** `Minimalist flat icon of a building cross-section divided into separate sealed compartments, two-color palette (red accent on dividers, neutral grey base), no text, vector style, transparent background.`
- **Ochrana únikových cest:** `Minimalist flat icon of an emergency exit sign with smoke being blocked by a wall, simple stylized lines, two-color palette, vector style, transparent background.`
- **Ochrana nosné konstrukce:** `Minimalist flat icon of a building beam with a protective shield around it, simple stylized lines, two-color palette, vector style, transparent background.`
- **Legislativní požadavky:** `Minimalist flat icon of a clipboard with a stamp and checkmark, paragraph symbol in the corner, two-color palette, vector style, transparent background.`

---

## 7. Tipy specificky pro Nano Banana

Nano Banana (Gemini 2.5 Flash Image) má pár specifik, která stojí za to využít:

1. **Konverzační editing.** Po prvním vygenerování fotky můžete pokračovat: *"Use the same technician, same uniform — now show him in a different scene: standing in front of a finished fire-stop wall, holding the inspection label."* Tím získáte konzistentní postavu napříč webem.
2. **Reference photos.** Můžete nahrát existující fotku jako stylovou referenci a říct *"generate a new photo in this exact lighting and color grade, but with the following scene…"*. Hodí se, pokud máte fotku z HILTI knihovny, kterou chcete stylově napodobit.
3. **Explicitní formát.** Nano Banana občas ignoruje aspect ratio, pokud ho napíšete jen jako "16:9". Lepší fungují popisy: *"wide cinematic horizontal composition, much wider than tall, like a movie still"*.
4. **Negativy jako věty.** Místo negativního promptu napište *"The scene must not contain any high-voltage equipment, transformers, overhead power lines, or warning signs about electrical hazard."* – jako součást hlavního promptu.
5. **Realismus českého prostředí.** Klíčové slovo `Czech` v promptu pomáhá – Nano Banana umí vyladit architekturu a typickou fasádu. Doplňte `Central European architecture, post-1990 commercial building` nebo `panelák-style residential` pro upřesnění.
6. **Text v obrázku.** Nano Banana umí poměrně dobře render textu – pokud chcete na fotce vidět štítek "Revize 05/2026", napište explicitně: *"A small white inspection label with clearly readable text 'Revize 05/2026' attached to the cabinet door."*

---

## 8. Doporučené workflow

1. Vygenerujte **hero fotku** podle promptu 1 (3–4 varianty, vyberte nejlepší).
2. Použijte multi-turn editing v Nano Banana: *"Keep this technician character. Generate 3 more photos with him in: (a) a finished apartment building corridor with completed fire-stop seals; (b) an industrial warehouse low-voltage cabinet; (c) a commercial office utility room."* – tím získáte konzistentní cast pro celý web.
3. Vygenerujte 3 reference fotky (prompty 2a/b/c) **bez lidí**, ať se nemíchají s technikem z hera.
4. Vygenerujte fotku k Proč my (prompt 3) – ideálně se stejným technikem + parťákem.
5. Vygenerujte CTA pozadí (prompt 4) – tady lidé nejsou potřeba.
6. Pokud bude majitel chtít, vygenerujte **požární ucpávky** prompty 6a/b.
7. **Všechny fotky** uložte do `public/images/` s popisnými názvy:
   - `hero-nn-rozvadec.jpg`
   - `reference-bytovy-dum.jpg`
   - `reference-komercni.jpg`
   - `reference-prumysl.jpg`
   - `proc-my-tym-pri-praci.jpg`
   - `cta-chodba-rozvadec.jpg`
   - `pozarni-ucpavka-detail.jpg`
   - `pozarni-ucpavka-technik.jpg`
8. Po stažení proženěte komprimací (TinyPNG / Squoosh) – cíl ~150–250 KB / fotka, WebP nebo kvalitní JPEG.
9. V `index.astro` nahraďte všechny `images.unsplash.com` URL lokálními cestami a doplňte `alt` texty v češtině.

---

## 9. Krátký český "překlad" pro rychlé použití (pokud chcete prompty zadat česky)

Nano Banana umí česky, ale anglické prompty mívají lepší výsledky. Pokud potřebujete rychle vysvětlit kontext česky:

> Vytvoř editorial fotku českého elektrotechnika ve věku 35–45 let, jak pracuje uvnitř moderního NN rozvaděče v chodbě bytového domu. Nosí tmavě modré pracovní oblečení bez log, brýle posunuté na čele, v ruce šroubovák. V rozvaděči vidět jističe, chrániče, popsané kabely – **žádné vysoké napětí**, žádné transformátory, žádné výstražné značky. Měkké denní světlo zleva, mírný filmový zrnitý vzhled, malá hloubka ostrosti. Široký 16:9 formát s prostorem vlevo pro nadpis. Foto působí autenticky, jako reportáž, ne stock.

Tuto formulaci pak doplňte detaily konkrétní sekce.

---

**Poznámka k autorským právům:** Fotky vygenerované Nano Bananou nesou vodoznak SynthID (neviditelný digitální podpis, že jde o AI obsah). Pro běžné použití na webu to nevadí. Pokud chcete na webu uvádět, že fotky jsou ilustrační/AI generované, do patičky případně doplnit drobnou zmínku.
