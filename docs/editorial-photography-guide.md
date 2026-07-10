# Second Season — Editorial Photography Guide

A reference for building a consistent image library that feels like Second Season: warm, quiet, and lived-in — not stock, not luxury, not influencer.

---

## Photography Principles

1. **Looks like it was taken by a thoughtful retired teacher.** Unhurried, observant, slightly literary. The camera notices small details a busy person would miss.
2. **Warm, quiet, natural light.** Morning window light, late afternoon gold, overcast softness. Avoid harsh flash and cold blue office lighting.
3. **Human presence without showing faces.** Hands turning a page, a coat on a chair, two cups on a table, footsteps on a path — life implied, never posed for the camera.
4. **Real moments over perfect composition.** A slightly crooked table setting or an off-center window is fine if the feeling is true.
5. **No luxury lifestyle imagery.** No marble countertops, designer bags, champagne, or “aspirational” interiors meant to sell a status.
6. **No influencer aesthetic.** No flat-lays staged for Instagram, no ring-light portraits, no exaggerated saturation or trendy filters.
7. **No corporate or city-advertising imagery.** No skyline hero shots, no gleaming commercial districts, no tourism-board perfection.
8. **Slightly imperfect is preferred.** A creased napkin, a worn book spine, a chair pulled back mid-meal — signs of actual use.
9. **Calm curiosity.** The image should invite the viewer to linger, not perform or consume.
10. **Places where someone would want to stay.** If the photo makes you want to sit down and not leave, it belongs here.

---

## Folder Structure

```
public/images/editorial/
├── books/
├── cafes/
├── travel/
├── sea/
├── garden/
├── home/
├── meals/
└── window/
```

Use descriptive filenames: `{category}-{subject}-{variant}.jpg`  
Example: `cafes-window-seat-afternoon.jpg`

---

## Category Guidelines

### books

**Mood:** Contemplative, unhurried, intellectual without being academic. The pleasure of reading as a daily ritual.

**Sample subjects:**
- Open book on a wooden desk with reading glasses nearby
- Stack of well-loved paperbacks on a shelf, spines slightly faded
- Hand turning a page (no face visible)
- Bookmark resting in a novel beside a cup of tea
- Books left open on a windowsill catching soft light

**Avoid:**
- Bestseller covers prominently displayed as props
- Sterile library stock photos with perfect symmetry
- E-readers or screens as the main subject
- “Study motivation” aesthetic (highlighters, color-coded notes, laptops)

---

### cafes

**Mood:** Slow afternoon, low noise, a place to stay. Light matters more than the coffee brand.

**Sample subjects:**
- Window seat with a single cup and empty chair beside it
- Soft interior with plants, worn wood, and natural light
- Doorway or entrance of a small neighborhood café (no signage hero shots)
- Table by the glass with afternoon sun on the surface
- Back of a room — quiet, sparse, a few patrons as silhouettes (no faces)

**Avoid:**
- Latte art close-ups as the main subject
- Trendy third-wave branding and industrial chrome
- Crowded brunch scenes with raised glasses
- Neon signs or nightlife energy

---

### travel

**Mood:** Gentle movement, not checklist tourism. The journey as feeling, not destination marketing.

**Sample subjects:**
- Train window with passing landscape blurred softly
- Small bag on a bench at a quiet station
- Footpath through a neighborhood, shot from behind at walking pace
- Map folded on a table (not a phone screen)
- Suitcase corner and coat sleeve — departure implied, not airport glamour

**Avoid:**
- Landmark postcard compositions (temples, towers, “must-see” icons)
- Selfie sticks, posed tourist groups, peace signs
- Luxury hotel lobbies and resort pools
- Packed itinerary energy — rushing between sights

---

### sea

**Mood:** Repetition, breath, horizon without drama. The sea as companion, not adventure sport.

**Sample subjects:**
- Calm shoreline under soft morning or late afternoon light
- Gentle waves at regular intervals — no storm, no surfers
- Empty beach path or wooden steps leading down
- Rocks and tide pools in quiet weather
- Distant horizon with muted sky — more grey-blue than saturated turquoise

**Avoid:**
- Drone aerials of crowded beaches
- Golden-hour bikini / resort marketing
- Dramatic storm waves or extreme sports
- Caribbean-brochure color grading

---

### garden

**Mood:** Seasonal patience. Change that happens slowly and can be watched.

**Sample subjects:**
- Garden path with dappled light through leaves
- Bench under a tree, empty, leaves on the ground
- Close detail of a plant or branch — seasonal color shift
- Watering can or gloves resting on a step (hands optional, no face)
- Small public garden or courtyard — modest, not botanical-garden grandeur

**Avoid:**
- Perfectly manicured estate gardens meant to impress
- Macro flower shots that feel like wallpaper
- Gardening as performance (posed with tools, influencer staging)
- Artificial turf or corporate campus landscaping

---

### home

**Mood:** Lived-in comfort. A home that has accumulated years, not a showroom.

**Sample subjects:**
- Sunlit corner of a room with an armchair and side table
- Curtains moving slightly in a breeze
- Front door ajar with shoes neatly placed inside
- Afternoon light on a wooden floor or simple rug
- Radio, clock, or familiar object on a shelf — quiet domesticity

**Avoid:**
- Interior design magazine perfection
- Minimalist “empty luxury” spaces
- Smart-home gadget hero shots
- Real estate listing photography

---

### meals

**Mood:** Shared time at the table. Food as part of conversation, not cuisine as spectacle.

**Sample subjects:**
- Two place settings with simple dishes — lunch for two, not a feast
- Steam rising from a bowl of soup on a worn table
- Hands reaching for shared side dish (no faces)
- Empty plates after a meal, napkins loosely folded
- Small neighborhood restaurant table by a window

**Avoid:**
- Overhead “food blogger” plating
- Fine dining with white tablecloth formality
- Fast food or chain branding visible
- Elaborate spreads meant to impress on social media

---

### window

**Mood:** Threshold between inside and outside. Looking out, waiting, thinking.

**Sample subjects:**
- Window frame with rain or soft light on the glass
- View from inside — garden, street, or sea partially visible
- Cup or book on the sill, curtain pulled to one side
- Reflection of room in glass — layered, quiet
- Chair positioned to face the window, empty

**Avoid:**
- Floor-to-ceiling penthouse views
- City skyline as status symbol
- Heavily staged “cozy reading nook” influencer setups
- Blown-out windows with no interior context

---

## Article Image Mapping

Recommendations for selecting or commissioning editorial photos. Slugs refer to `data/articles.ts`.

| Article | Slug | Image Category | Visual Mood | Ideal Photo Subject |
|---------|------|----------------|-------------|---------------------|
| 35년 교직 생활 이후 | `after-35-years-teaching` | **books** + **home** | First quiet morning after a long career — relief, not celebration | Open book and reading glasses on a wooden desk in warm morning light; empty chair by a window |
| 좋은 장소를 알아보는 기준 | `how-to-know-a-good-place` | **travel** + **window** | Walking without hurry; a place worth returning to | Quiet city street at dusk, or a window looking onto a calm neighborhood street — soft streetlights, no crowds |
| 햇살이 오래 머무는 카페 | `cafe-where-sunlight-lingers` | **cafes** + **window** | Afternoon stillness; light that stays | Small café interior with plants and long afternoon sun on a window-side table — empty or with a single cup |
| 강릉에서 보낸 이틀 | `two-days-in-gangneung` | **sea** + **travel** | Slow coastal walk; memory over itinerary | Calm ocean shoreline in early morning or soft overcast — empty path, no tourist markers |
| 나이가 들수록 좋아지는 것들 | `things-that-get-better-with-age` | **books** + **home** | Accumulation of time; simple things deepening | Stack of well-loved books on a wooden shelf; worn objects that show years of use |
| 제주의 오후 | `an-afternoon-in-jeju` | **sea** + **cafes** | One long afternoon; a single scene remembered | Café window overlooking calm sea, or shoreline in muted afternoon light — unhurried, not scenic-postcard |
| 오래된 친구와의 점심 | `lunch-with-an-old-friend` | **meals** + **window** | Warm familiarity; conversation without performance | Two place settings at a modest table, soft daylight, or sunlit room suggesting shared time — no faces |

### Notes on implementation (future)

When replacing current `/public/images/` assets:

- Prefer images from the recommended **editorial** category folders.
- One strong hero per article; caption in markdown frontmatter should describe the moment, not the stock source.
- Keep aspect ratios consistent with existing `EditorialImage` usage (`feature`, `card`, `hero`).
- Do not mix categories arbitrarily — if an article maps to **sea** + **cafes**, choose the image that best matches the article’s central scene (for 제주의 오후, café-by-the-sea or quiet shoreline both work; pick the one that matches the opening memory).

---

## Quick Reference: What Second Season Is Not

| Not this | Instead |
|----------|---------|
| Stock photo “happy senior” models | Implied human presence, no faces |
| Luxury travel brochure | Quiet path, small bag, one horizon |
| Food influencer flat-lay | Two bowls, worn table, steam |
| Pinterest-perfect home | Sun on a chair, book left open |
| City tourism campaign | Neighborhood street at walking pace |

---

*This guide is a planning document. Production image paths and page components are unchanged until a separate migration step.*
