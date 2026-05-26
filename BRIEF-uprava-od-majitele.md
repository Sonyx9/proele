# Brief pro Claude Code – úpravy webu PROELLE podle poznámek majitele

> Vstupní zpětná vazba od majitele (po prvním návrhu webu). Sepsáno jako úkolový list. Úkoly jsou seřazeny podle priority. U každého úkolu je popis, akceptační kritérium a poznámka, kde v kódu hledat.
>
> **Hlavní soubor webu:** `src/pages/index.astro`
> **Styly:** `src/styles/global.css`
> **Statické soubory:** `public/`

---

## 0. KRITICKÁ ZMĚNA – název firmy v celém webu

**Úkol:** Všude přejmenovat `PROELE` → `PROELLE` (vždy velkými písmeny).

- V `<title>`, v meta description, v hero (`<p class="hero-display ...">PROELE</p>`), ve footeru (logo + firma `PROELE instal s.r.o.` → `PROELLE instal s.r.o.`), v copyrightu, v citacích z referencí ("Proelle zajistila …" → "PROELLE zajistila …").
- Pozor: i v komentářích/alt textech, kdekoli se vyskytuje.

**Akceptační kritérium:** `grep -i "proele"` v celém repu vrací pouze `PROELLE`, nikde žádné `Proelle`, `proelle`, `PROELE` apod. Jediné povolené psaní je velkými písmeny `PROELLE`.

**Souborové místo:** `src/pages/index.astro` (řádky 107, 128, 377, 459, 460, 486, 493 + případně jinde), `README.md`, `package.json` (`name` pole pokud obsahuje), případně `astro.config.mjs`.

---

## 1. Hero / leader – nová fotka a oprava textů

**Kontext od majitele:**
> "Webovky super návrh – jediné co bych poprosil upravit tu hlavní fotku protože vysoké napětí bude asi to jediné co dělat nebudeme. Ale obrázek pána v klasickém rozvaděči nebude vadit."
> "Současný má chyby v textech."
> "Asi klidně fotka technika v rozvaděči NN nízkého napětí např. na chodbě bytového domu, nebo v kancelářském objektu."

**Úkoly:**

1. Vyměnit hero fotku `public/hero-elektrikar.png` za fotku, kde **NENÍ vysoké napětí** (žádné VN rozvodny, žádné izolátory na sloupech apod.). Místo toho:
   - technik v **NN rozvaděči** (nízké napětí) v chodbě bytového domu, nebo
   - technik v rozvaděči v kancelářském / komerčním objektu.
   - Lze využít existující fotky z disku majitele (viz složka, kterou majitel zmiňuje) nebo fotky schválené HILTI (na serveru). **Před výběrem konkrétního obrázku se zeptat majitele / Lukáše**, kterou variantu preferuje.
2. Projít texty v hero sekci (`<section id="hero">`, řádky cca 114–183 v `src/pages/index.astro`) a opravit chyby:
   - eyebrow/podnadpis: `"Od projektu po revizi. Jeden tým, jedna odpovědnost."`
   - hlavní H1: `"Komplexní elektro a požární bezpečnost"`
   - alt fotky: `"Elektrikář při práci v rozvodně"` → upravit, aby odpovídal nové fotce (např. `"Elektrikář při práci v NN rozvaděči"`).
   - meta description (řádek 108): `"Komplexní elektroinstalace a požární bezpečnost pro bytová družstva, SVJ, developery i průmyslové provozy. Certifikovaní specialisté Hilti. Praha a okolí."` – zkontrolovat, že nikde není narážka na "vysoké napětí" / "VN".
3. **Důležité:** v textech webu **nikde** se nesmí objevit zmínka, že firma dělá vysoké napětí. Projít celý `index.astro` a zkontrolovat (zejména sekci Služby, kartu "Silnoproud a slaboproud" a sekci Reference).

**Akceptační kritérium:** Hero zobrazuje NN scénu, alt text odpovídá fotce, žádná zmínka o VN/vysokém napětí v textech webu, hlavní heading bez překlepů.

---

## 2. Logo – nahrazení textového "PROELE" reálným logem

**Kontext:** Majitel poslal finální logo ve vektorech (SVG / AI / PDF) na sdílenou složku.

**Úkoly:**

1. Najít nahrané logo ve složce projektu (pravděpodobně `public/` nebo `assets/`). Pokud je v jiné složce na disku (mimo repo), zkopírovat do `public/logo.svg` (preferovat SVG).
2. V hero (řádek ~128) a ve footeru (řádek ~459) nahradit textový `<p>PROELE</p>` / `<h3>PROELE</h3>` za `<img src="/logo.svg" alt="PROELLE" />` se stylováním:
   - V hero: bílé/světlé logo na tmavém pozadí (případně přidat CSS filtr `brightness(0) invert(1)` pokud je logo černé), výška cca 32–40 px.
   - Ve footeru: stejná varianta, výška ~32 px, zachovat červený akcent (border-left), nebo logo samotné akcent obsahuje.
3. Pokud je k dispozici i monochromatická / inverzní verze loga, použít ji pro tmavé pozadí, místo CSS filtru.
4. Přidat **favicon** odvozený z loga (`public/favicon.svg` nebo `.ico`) a propojit v `<head>`.

**Akceptační kritérium:** V hero i ve footeru je zobrazené reálné logo (ne text), favicon funguje, logo je vektorové (SVG), čitelné na pozadí, název firmy v kódu `alt` atributu je `PROELLE`.

---

## 3. Rozšířit sekci o **Požárních ucpávkách** (Hilti + Dunamenti)

**Kontext:** Majitel chce explicitně přidat více informací k požárním ucpávkám a systémům, které firma umí (**Hilti** a **Dunamenti**).

**Úkoly:**

1. Vytvořit novou samostatnou sekci `<section id="pozarni-ucpavky">` (umístit logicky za sekci Služby `#section-a` nebo před Proč my). Přidat ji i do top navigace (`topNav` v front-matteru).
2. Obsah sekce (přesné texty od majitele – použít beze změny, jen rozdělit do bloků):

   **Nadpis:** "Požární ucpávky"

   **Úvodní odstavec (3 odrážky / mini-karty):**
   - Zabrání rychlému šíření požáru – díky tomu je více času na evakuaci a příjezd hasičů.
   - Zamezí průniku škodlivých plynů – kouř bývá často nebezpečnější než samotný oheň.
   - Pomáhá zachovat stabilitu budovy déle během požáru.

   **Hlavní text (delší pasáž):**
   > Realizace požárních ucpávek není jen „úřední šiml", ale kritický prvek bezpečnosti každé budovy. Pokud byste je vynechali, dům se v případě požáru začne chovat jako dýmka – oheň a jedovatý kouř se budou šířit neřízeně skrze otvory pro kabely a trubky.
   >
   > Zde jsou hlavní důvody, proč jsou ucpávky nezbytné:

   **Čtyři pod-bloky (akordeon nebo karty 2×2):**

   **1. Rozdělení budovy na požární úseky**
   Budovy jsou projektovány tak, aby byly rozděleny do menších celků (požárních úseků). Pokud v jednom úseku začne hořet, ucpávky zajistí, aby se oheň nepřelil do sousedních místností nebo pater po dobu desítek minut (např. 30, 60 nebo 90 minut).
   *Cíl: Udržet požár „v jedné krabici".*

   **2. Ochrana únikových cest**
   Největším zabijákem při požáru není žár, ale kouř a toxické zplodiny. Instalace ucpávek brání pronikání kouře do chodeb a schodišť, kudy musí lidé bezpečně utéct. Bez těsnění se kouř šíří šachtami a prostupy rychlostí blesku.

   **3. Ochrana nosné konstrukce**
   Požární ucpávky pomáhají udržet stabilitu budovy. Zabraňují tomu, aby horké plyny oslabily nosné konstrukce v místech, kde jimi prochází instalace, což by mohlo vést k předčasnému zřícení objektu.

   **4. Zákonné a normové požadavky**
   V České republice je realizace ucpávek povinností vyplývající z legislativy (např. vyhláška o technických podmínkách požární ochrany staveb).
   - **Kolaudace:** Bez revizní zprávy a řádného označení ucpávek štítky budovu legálně nezkolaudujete.
   - **Pojišťovny:** Pokud dojde k požáru a zjistí se, že ucpávky chyběly nebo byly neodborně provedeny, pojišťovna pravděpodobně krátí nebo zcela odmítne pojistné plnění.

3. Pod hlavním textem vizuální pás se dvěma "systémovými partnery":
   - **Hilti** (PROELLE je certifikovaný specialista)
   - **Dunamenti**

   Zobrazit jako dvě karty nebo loga vedle sebe s krátkým textem typu *"Pracujeme s certifikovanými systémy Hilti a Dunamenti."* Loga partnerů buď stáhnout z jejich tiskového kitu, nebo prozatím použít textové názvy s typografickým zvýrazněním (potvrdit s majitelem, zda má loga partnerů k dispozici).

4. Přidat CTA na konci sekce: "Poptat realizaci požárních ucpávek →" odkazující na `#kontakt`.

**Akceptační kritérium:** Sekce existuje, je v navigaci, texty jsou převzaty doslova podle zadání majitele, jsou viditelně uvedeni systémoví partneři Hilti a Dunamenti, sekce vypadá konzistentně se zbytkem webu (stejné rounded-3xl karty, stejný eyebrow styl).

---

## 4. Oprava FAQ – lhůta revizí podle počtu osob

**Kontext od majitele:**
> "U tohoto FAQ jen drobnost – lhůta záleží podle počtů osob v budově, při více než 200 je lhůta 2 roky."

**Úkol:** V `faqSections` (front-matter `src/pages/index.astro`, řádky cca 48–99) v sekci "Revize a legislativa" upravit otázku **"Jak často se musí provádět revize elektroinstalace?"** – do odpovědi doplnit informaci o 2letém intervalu pro budovy s více než 200 osobami.

**Nová odpověď (návrh, upravitelný):**
> "Lhůty se liší podle typu objektu, prostředí a **počtu osob v budově**. U administrativních budov je standardní lhůta 5 let, **u objektů, kde se trvale pohybuje více než 200 osob, je lhůta 2 roky**. U prostor s rizikem výbuchu nebo ve venkovním prostředí jsou lhůty kratší. Rádi vám doporučíme správný interval pro váš objekt."

**Akceptační kritérium:** Odpověď obsahuje zmínku o 2leté lhůtě nad 200 osob, ostatní texty FAQ nedotčeny.

---

## 5. Mobilní verze – proladit

**Kontext od majitele:**
> "Mobilní verzi jsem zatím neladil – mrkni prosím, jestli je tenhle styl a textace za tebe OK. Jakmile to potvrdíš, doladím vše tak, aby to perfektně sedělo (doplním loga apod.)."

**Úkol:** Projít celý web v mobilním viewportu (375 px, 414 px) a opravit:

1. Hero: hlavní H1 (`text-5xl md:text-7xl`) – ověřit, že na malém displeji není ořezaný a má smysluplné zalomení. Případně přidat `text-4xl sm:text-5xl md:text-7xl`.
2. Fixní CTA `Zavolat / Napsat` (řádek ~149): aktuálně `fixed left-1/2 top-4` – ověřit, že nepřekrývá menu hamburger, a na mobilu má dostatek paddingu na klik.
3. Kontaktní box vpravo dole v hero (řádek ~172): má `hidden ... md:block` – ok, ale ověřit, zda by mobile uživateli neměla jít zobrazit alternativní CTA karta.
4. Karta "Silnoproud a slaboproud" (řádky ~196–217): výška `h-[360px]` může na mobilu způsobit nečitelnost textu (text v overlay přes pozadí). Otestovat a případně udělat `min-h-[360px]`.
5. Sekce Proč my – grid `lg:grid-cols-[1fr_1.35fr]` se na mobilu skládá pod sebe; ověřit, že fotka i statistický overlay (`absolute bottom-6 right-6`) drží správnou pozici.
6. FAQ akordeony: na mobilu by měl být `details > summary` s dostatečně velkou klikací plochou.
7. Footer grid `md:grid-cols-4` – ověřit, že na mobilu jdou sloupce pod sebe čitelně.

**Akceptační kritérium:** Vizuálně OK na 375 px a 414 px, žádný horizontální scroll, všechna tlačítka klikatelná, žádný text mimo viewport.

---

## 6. Fotky – nahradit Unsplash placeholdery reálnými/HILTI fotkami

**Kontext od majitele:**
> "Můžeš použít fotky serveru i klidně jiné, na serveru jsou fotky schválené přímo HILTI."

**Úkoly:**

1. Najít fotky v majitelově sdílené složce (server / disk) a vybrat:
   - Hero (viz bod 1)
   - 3 fotky pro sekci Reference (Bytové domy, Komerční objekty, Průmyslové provozy) – aktuálně Unsplash (řádky 300–304).
   - Pozadí "Proč my" karty (řádek 274) – aktuálně Unsplash.
   - Pozadí CTA sekce (řádek 356) – aktuálně Unsplash.
   - Fotka v testimonialu (řádek 395) – aktuálně Unsplash.
2. Stáhnout fotky do `public/images/` a referencovat lokálně (např. `/images/reference-bytovy-dum.jpg`). **Nikdy ne externí URL** – závisí na cizí službě.
3. Pro fotky se zaměřit na NN práce, požární ucpávky, rozvaděče v bytových/komerčních objektech. **Žádné VN.**
4. Optimalizovat (WebP nebo komprimované JPG, max ~250 KB / fotka).

**Akceptační kritérium:** Žádný `images.unsplash.com` v `src/`. Všechny fotky lokální, popisné názvy souborů, alt texty doplněné.

---

## 7. (Otevřené k potvrzení s majitelem) Sekce **Dodavatelé / Partneři**

**Kontext od majitele:**
> "Bylo by možné doplnit dodavatele nebo už se to nedělá?"

**Úkol:** Tento bod **NEIMPLEMENTOVAT zatím** – nejdřív se zeptat majitele/Lukáše, zda chce:

- (a) samostatnou sekci "Naši dodavatelé / partneři" s logy (Hilti, Dunamenti, případně další), nebo
- (b) jen krátkou zmínku v rámci sekce Proč my / Požární ucpávky, nebo
- (c) vynechat.

Po potvrzení doimplementovat. Pokud se rozhodne pro (a), bude potřeba získat loga dodavatelů.

---

## 8. Drobnosti k pročištění (low priority)

1. **Formspree ID** (řádek 411): `action="https://formspree.io/f/your-form-id"` – nahradit reálným ID, jinak formulář neodesílá.
2. **Sociální sítě** ve footeru (řádky 462–463): href=`"#"` – buď doplnit reálné odkazy (FB, LinkedIn), nebo skrýt.
3. **Linky "Ochrana osobních údajů" a "Obchodní podmínky"** (řádky 479–480): href=`"#"` – buď udělat stránky nebo skrýt do doby, než budou hotové.
4. **Copyright rok** (řádek 493): `© 2025` → aktuální `© 2026`. Lépe dynamicky: `{new Date().getFullYear()}`.
5. **Testimonial autor** (Mgr. Jana Nováková) – ověřit s majitelem, zda jde o reálnou referenci nebo placeholder; pokud placeholder, nahradit reálnou (nebo skrýt sekci do té doby).
6. **Statistiky 150+ projektů, 10+ let v oboru** – ověřit s majitelem reálná čísla.

---

## Workflow pro Claude Code

1. **Začni změnou názvu** (bod 0) – globální najdi/nahraď, ať máš čistý startovní stav.
2. **Logo + hero** (body 1, 2) – ovlivní celkový dojem.
3. **Sekce požárních ucpávek** (bod 3) – největší obsahový přírůstek.
4. **FAQ oprava** (bod 4) – rychlá změna.
5. **Mobile pass** (bod 5) – po dokončení obsahových změn.
6. **Fotky** (bod 6) – jakmile Lukáš dodá reálné fotky.
7. **Drobnosti** (bod 8) – na konec.
8. **Sekce dodavatelů** (bod 7) – až po potvrzení.

Po každém větším bloku spustit `npm run dev` a vizuálně ověřit. Před commit-em `npm run build`, aby šla produkce.

---

## Otevřené otázky k vyjasnění s Lukášem / majitelem

1. Která konkrétní fotka má jít do hero? (bytový dům / kancelář / něco z HILTI knihovny)
2. Kde přesně leží nově nahrané logo (cesta na disku)?
3. Sekce "Dodavatelé" – ano/ne/jakou formou (bod 7)?
4. Loga partnerů (Hilti, Dunamenti) – má je majitel k dispozici, nebo je máme stáhnout z brand kitů?
5. Reálná čísla pro statistiky (projekty, roky) a testimonial.
6. Formspree účet / ID, sociální sítě, právní stránky.
