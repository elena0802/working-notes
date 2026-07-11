# Second Season — Image Selection Plan (v1)

**Purpose:** Collect and replace hero images for seven published articles **immediately** — no further planning required.

**Sources:** [`editorial-photography-guide.md`](./editorial-photography-guide.md) · [`article-image-mapping-v1.md`](./article-image-mapping-v1.md)

**Uniqueness rule:** No two articles share the same visual theme. Before downloading, confirm the candidate against all seven rows in the checklist at the end.

---

## Collection workflow

1. Search Unsplash or Pexels using the keywords below.
2. Reject any image that shows faces, luxury lifestyle, influencer staging, or tourism-poster composition.
3. Prefer natural light, slight imperfection, and implied human presence (hands/objects only).
4. Download at **2400px+ width** if available; export as JPG, quality 85–90%.
5. Save to the editorial folder path listed per article.
6. Do **not** wire into `data/articles.ts` until all seven files exist and pass the checklist.

### Save paths (editorial library)

```
public/images/editorial/{folder}/{filename}
```

### Future production paths (separate migration step)

When replacing live heroes, copy or symlink into `/public/images/` using the **Production filename** column — or update paths in code to point at `/images/editorial/...` directly.

---

## Article 1 — 35년 교직 생활 이후

| Field | Spec |
|-------|------|
| **Slug** | `after-35-years-teaching` |
| **Editorial folder** | `books/` |
| **Production filename** | `after-teaching.jpg` |

**Exact image concept:**  
Open paperback on a worn wooden desk, reading glasses folded beside it, empty chair edge visible. First quiet morning after retirement — reading for oneself, not for class prep.

**Preferred composition:**  
3/4 angle on desk surface; book slightly off-center; window light entering from left or rear. Medium depth — desk fills most of frame; no face, no computer screen.

**Lighting:**  
Warm **morning** window light, soft shadows, no flash. Color temperature golden-neutral, not orange sunset.

**Mood:**  
Quiet relief · thoughtful · unhurried · literary · calm curiosity

**Unsplash keywords:**  
`open book wooden desk reading glasses morning window light quiet study`

**Pexels keywords:**  
`book desk glasses morning sunlight home office wooden table peaceful`

**Filename recommendation:**  
`public/images/editorial/books/books-morning-desk-glasses.jpg`

**Reject if:** classroom, laptop hero, book stack (→ Article 5), afternoon light, smiling senior portrait

---

## Article 2 — 좋은 장소를 알아보는 기준

| Field | Spec |
|-------|------|
| **Slug** | `how-to-know-a-good-place` |
| **Editorial folder** | `travel/` |
| **Production filename** | `good-place.jpg` |

**Exact image concept:**  
Quiet **neighborhood street at dusk** — empty sidewalk, small shops or residential facades, soft streetlights beginning to glow. A place you would walk again without a map.

**Preferred composition:**  
Eye-level, walking perspective; street receding gently into depth; 1–2 figures max as distant silhouettes (optional). No landmark signage, no wide skyline.

**Lighting:**  
Blue-hour or early dusk; warm streetlamps + cool sky. Even exposure — not HDR neon.

**Mood:**  
Calm judgment · walkable · return visit · evening ease · no tourism hype

**Unsplash keywords:**  
`quiet street dusk evening neighborhood empty sidewalk soft lights residential`

**Pexels keywords:**  
`empty street evening neighborhood dusk calm city walk residential lane`

**Filename recommendation:**  
`public/images/editorial/travel/travel-neighborhood-street-dusk.jpg`

**Reject if:** crowded downtown, famous landmark, café interior (→ Article 3), beach (→ Article 4), window table still life

---

## Article 3 — 햇살이 오래 머무는 카페

| Field | Spec |
|-------|------|
| **Slug** | `cafe-where-sunlight-lingers` |
| **Editorial folder** | `cafes/` |
| **Production filename** | `sunlit-cafe.jpg` |

**Exact image concept:**  
Small café **interior**, window-side table with **afternoon** sun stretching across the surface. Single empty cup or bare table. Plants, worn wood, quiet — light that feels like it stays.

**Preferred composition:**  
Interior shot from inside; window on left or right third; table in foreground; shallow depth acceptable. Alley or garden glimpse through glass — **not** open ocean.

**Lighting:**  
Strong directional **afternoon** sun, long shadows on table, warm but not over-saturated.

**Mood:**  
Stillness · lingering time · low noise · stay awhile · gentle warmth

**Unsplash keywords:**  
`cafe interior window sunlight afternoon empty table plants cozy quiet`

**Pexels keywords:**  
`coffee shop window light afternoon table empty chair plants wooden interior`

**Filename recommendation:**  
`public/images/editorial/cafes/cafes-window-seat-afternoon.jpg`

**Reject if:** latte art close-up, industrial chrome café, morning light, two place settings (→ Article 7), sea-view window (→ Article 6)

---

## Article 4 — 강릉에서 보낸 이틀

| Field | Spec |
|-------|------|
| **Slug** | `two-days-in-gangneung` |
| **Editorial folder** | `sea/` |
| **Production filename** | `gangneung.jpg` |

**Exact image concept:**  
**Seaside walk** — empty path, wooden steps, or compact boardwalk beside **calm** water. Sense of walking forward, not sitting on sand. East-coast quiet; no resort, no surf culture.

**Preferred composition:**  
Path or shoreline leading line into frame; horizon present but secondary; no people or tiny distant figure only. Landscape orientation preferred.

**Lighting:**  
Early morning or soft overcast; muted blues and greys; gentle, not dramatic storm light.

**Mood:**  
Slow travel · repetition of waves · memory of walking · unplanned · breathable

**Unsplash keywords:**  
`coastal walk empty path calm sea morning shoreline wooden steps quiet beach`

**Pexels keywords:**  
`sea path walk empty beach calm ocean morning coast promenade peaceful`

**Filename recommendation:**  
`public/images/editorial/sea/sea-shore-path-morning-walk.jpg`

**Reject if:** postcard blank sand beach, crowded summer shore, surfing, static horizon-only shot (→ conflicts with Jeju if identical), café with sea view

**Uniqueness vs Article 6:**  
강릉 = **motion along the shore** · 제주 = **still stone wall + afternoon light**

---

## Article 5 — 나이가 들수록 좋아지는 것들

| Field | Spec |
|-------|------|
| **Slug** | `things-that-get-better-with-age` |
| **Editorial folder** | `books/` |
| **Production filename** | `with-age.jpg` |

**Exact image concept:**  
**Stack of well-loved books** on a wooden shelf — mixed spines, faded covers, slight wear. Years of reading visible. **No** single open book on desk (→ Article 1).

**Preferred composition:**  
Straight-on or slight angle on shelf; 8–15 books; optional edge of armchair or wall. Tight crop — shelf is the subject.

**Lighting:**  
Soft ambient indoor light or side window glow; even, readable spines; no spotlight drama.

**Mood:**  
Accumulation · depth over time · gratitude · quiet pride · simplicity

**Unsplash keywords:**  
`old books stack wooden shelf worn spines vintage library home`

**Pexels keywords:**  
`bookshelf old books stacked wooden shelf reading collection antique spines`

**Filename recommendation:**  
`public/images/editorial/books/books-worn-stack-shelf.jpg`

**Reject if:** single open book + glasses (→ Article 1), styled color-coordinated book rainbow, e-reader, empty minimalist shelf

---

## Article 6 — 제주의 오후

| Field | Spec |
|-------|------|
| **Slug** | `an-afternoon-in-jeju` |
| **Editorial folder** | `travel/` |
| **Production filename** | *(currently shares `gangneung.jpg` — replace with dedicated file)* `jeju-afternoon.jpg` |

**Exact image concept:**  
**Stone wall and afternoon light** — low volcanic stone wall, quiet village lane or courtyard edge, warm slanting sun, wild grass or moss. Stillness, not walking. Sea may appear as **small background glimpse** only — wall and light lead.

**Preferred composition:**  
Wall runs through frame horizontally or diagonally; golden afternoon light on stone texture; shallow depth. No wide open beach.

**Lighting:**  
Late **afternoon** gold, long shadows on stone, muted warm palette — not saturated sunset poster.

**Mood:**  
One remembered afternoon · stillness · return someday · village quiet · time suspended

**Unsplash keywords:**  
`stone wall afternoon light village lane quiet jeju korea volcanic stone golden hour`

**Pexels keywords:**  
`stone wall afternoon sunlight old village path rustic wall golden light quiet`

**Filename recommendation:**  
`public/images/editorial/travel/travel-jeju-stone-wall-afternoon.jpg`

**Reject if:** open beach hero (→ Article 4), full café interior (→ Article 3), lighthouse landmark, drone seascape, identical file used for Gangneung

**Uniqueness vs Article 4:**  
**Bad:** both → beach · **Good:** Gangneung → path beside water · Jeju → stone wall + afternoon light

---

## Article 7 — 오래된 친구와의 점심

| Field | Spec |
|-------|------|
| **Slug** | `lunch-with-an-old-friend` |
| **Editorial folder** | `meals/` |
| **Production filename** | `lunch-old-friend.jpg` *(replace current `places-01.jpg` usage)* |

**Exact image concept:**  
**Two place settings** at a modest table — simple Korean or neutral dishes, two cups or bowls, chairs angled toward each other. Shared lunch, decades of familiarity. **No faces.**

**Preferred composition:**  
Table seen from slight angle above eye-level; both settings clearly visible; worn wood or simple laminate table. Window light optional at edge of frame.

**Lighting:**  
Soft **daytime** natural light — lunch hour, not candlelit dinner. Warm, even, documentary not styled.

**Mood:**  
Familiarity · trust · conversation without performance · warmth · ordinary sacred

**Unsplash keywords:**  
`two place settings table lunch window light simple meal shared table empty chairs`

**Pexels keywords:**  
`dining table two plates lunch natural light restaurant simple meal wooden table`

**Filename recommendation:**  
`public/images/editorial/meals/meals-two-settings-daylight.jpg`

**Reject if:** single place setting, overhead food-blogger flat-lay, fine dining white tablecloth, faces visible, coffee-only café shot

---

## Master checklist — uniqueness before download

| # | Article | Owns this visual (one line) | Conflicts with |
|---|---------|----------------------------|----------------|
| 1 | 35년 교직 생활 이후 | Open book + glasses, **morning desk** | Art. 5 (stack), Art. 3 (café), Art. 7 (two settings) |
| 2 | 좋은 장소를 알아보는 기준 | **Dusk neighborhood street** | Art. 3 (interior), Art. 4/6 (coast) |
| 3 | 햇살이 오래 머무는 카페 | **Café interior, afternoon window** | Art. 2 (street), Art. 6 (wall/sea) |
| 4 | 강릉에서 보낸 이틀 | **Seaside path, walking** | Art. 6 (beach/wall stillness) |
| 5 | 나이가 들수록 좋아지는 것들 | **Book stack on shelf** | Art. 1 (open book) |
| 6 | 제주의 오후 | **Stone wall, afternoon light** | Art. 4 (shore walk), Art. 3 (café) |
| 7 | 오래된 친구와의 점심 | **Two place settings** | Art. 3 (single cup), single-table articles |

---

## Download log (fill in during collection)

| Article | Source (Unsplash/Pexels URL) | Photographer | Saved path | Approved ☐ |
|---------|------------------------------|--------------|------------|-------------|
| 35년 교직 생활 이후 | | | `editorial/books/books-morning-desk-glasses.jpg` | ☐ |
| 좋은 장소를 알아보는 기준 | | | `editorial/travel/travel-neighborhood-street-dusk.jpg` | ☐ |
| 햇살이 오래 머무는 카페 | | | `editorial/cafes/cafes-window-seat-afternoon.jpg` | ☐ |
| 강릉에서 보낸 이틀 | | | `editorial/sea/sea-shore-path-morning-walk.jpg` | ☐ |
| 나이가 들수록 좋아지는 것들 | | | `editorial/books/books-worn-stack-shelf.jpg` | ☐ |
| 제주의 오후 | | | `editorial/travel/travel-jeju-stone-wall-afternoon.jpg` | ☐ |
| 오래된 친구와의 점심 | | | `editorial/meals/meals-two-settings-daylight.jpg` | ☐ |

---

## Post-collection: production migration (later)

When all seven files are approved:

1. Copy into `/public/images/` using production filenames above **or** update `data/articles.ts` + markdown frontmatter to editorial paths.
2. Update `imageAlt` and `imageCaption` in each article’s markdown frontmatter to match the new scene — moment description, not stock credit in the hero caption.
3. Re-run `npm run build` and visually compare all seven legacy article heroes side-by-side to confirm no two feel like the same shoot.

---

## Quick reference — Second Season filter

From the photography guide, reject immediately if the image has any of:

- Visible faces or “happy senior” stock models  
- Luxury lifestyle, influencer flat-lay, or tourism-board perfection  
- Wrong time of day for the article (morning vs afternoon vs dusk)  
- Wrong scale (interior vs street vs path vs wall)  
- Brand-forward coffee art, landmark hero, or corporate cityscape  

---

*Version 1 · Planning document only · Production code unchanged*
