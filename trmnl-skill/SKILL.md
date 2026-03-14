---
name: trmnl
description: Build plugins for TRMNL e-paper displays using the TRMNL Framework v2
---

# trmnl

Build HTML/CSS plugins for TRMNL e-paper devices using Framework v2 — an open-source adaptive front-end framework for electronic ink displays.

## When to use

When the user asks to create, modify, or debug a TRMNL plugin, screen layout, or e-paper display template.

## Instructions

Read the relevant docs from `docs/` in this skill's directory before writing any markup. The docs are the source of truth — they cover every class, modifier, and engine available.

### Quick reference: doc categories

| Category | Files |
|----------|-------|
| **Foundation** | `structure.md`, `screen.md`, `view.md`, `layout.md`, `title_bar.md`, `mashup.md`, `columns.md` |
| **Layout utilities** | `flex.md`, `grid.md`, `size.md`, `spacing.md`, `gap.md`, `aspect_ratio.md` |
| **Typography** | `title.md`, `value.md`, `label.md`, `description.md`, `rich_text.md`, `text.md` |
| **Components** | `item.md`, `divider.md`, `table.md`, `chart.md`, `progress.md`, `image.md` |
| **Styling** | `background.md`, `border.md`, `outline.md`, `rounded.md`, `image_stroke.md`, `text_stroke.md` |
| **Responsive** | `responsive.md`, `responsive_test.md`, `visibility.md`, `scale.md` |
| **Engines** | `clamp.md`, `overflow.md`, `table_overflow.md`, `content_limiter.md`, `format_value.md`, `fit_value.md`, `pixel_perfect.md`, `framework_runtime.md` |
| **Guides** | `v2_overview.md`, `upgrade_guide.md`, `enhancement_guide.md`, `troubleshooting_guide.md`, `trmnl_x_guide.md` |

### Core rules

1. **Fixed hierarchy.** `Screen` > (`Mashup` >) `View` > `Layout` + optional `Title Bar`. Never deviate.
2. **One Layout per View.** Never nest layouts. Use `flex`, `grid`, or `columns` inside Layout.
3. **Title Bar is a sibling** of Layout, not a child.
4. **Plugin authors provide only** `<div class="layout">...</div>` and optionally `<div class="title_bar">...</div>`. The platform wraps these in Screen and View automatically.
5. **For local/standalone development**, provide the full hierarchy: Screen > View > Layout.

### Devices and breakpoints

| Device | Class | Dimensions | Bit depth | Breakpoint |
|--------|-------|-----------|-----------|------------|
| TRMNL OG | `screen--og` | 800x480 | 1-bit | `md:` (800px+) |
| TRMNL OG V2 | `screen--og` | 800x480 | 2-bit | `md:` (800px+) |
| TRMNL V2 | `screen--v2` | 1040x780 | 4-bit | `lg:` (1024px+) |
| Kindle 2024 | `screen--amazon_kindle_2024` | 718x540 | 4-bit | `sm:` (600px+) |

Orientation: `screen--portrait` swaps width/height. Use `portrait:` prefix in utility classes.

Bit-depth prefixes: `1bit:`, `2bit:`, `4bit:` — target specific display capabilities.

### Layout decision tree

- **Grid**: fixed column structures, aligned content (see `grid.md`)
- **Flex**: content-sized, flexible arrangements (see `flex.md`)
- **Columns**: variable-length lists with automatic overflow handling (see `columns.md`)

### Text hierarchy

| Element | Use for | Sizes |
|---------|---------|-------|
| `value` | Large numbers/metrics | xxsmall through peta (12 sizes) |
| `title` | Headings | small, base, large, xlarge, xxlarge |
| `label` | Labels, tags | small, base, large, xlarge, xxlarge + style variants |
| `description` | Body/secondary text | base, large, xlarge, xxlarge |
| `rich_text` | Formatted paragraphs | Wraps content with alignment options |

All support `data-clamp="N"` for line clamping with ellipsis.

### Color palette

16 shades: `black`, `gray-10`, `gray-15`, `gray-20`, `gray-25`, `gray-30`, `gray-35`, `gray-40`, `gray-45`, `gray-50`, `gray-55`, `gray-60`, `gray-65`, `gray-70`, `gray-75`, `white`.

Use as `text--{shade}` or `bg--{shade}`. On 1-bit displays, dithering simulates grayscale.

### E-ink constraints

- **No animations** — content is rendered as a static screenshot
- **Test all bit-depths** (1-bit, 2-bit, 4-bit) — appearance varies significantly
- **Charts**: always set `animation: false` in Highcharts/Chartkick config
- **Pixel-perfect**: use `data-pixel-perfect="true"` for crisp text on 1-bit displays
- **Dark mode**: supported via `screen--dark-mode` (inverts colors, preserves images)

### Common patterns

**Single full-screen plugin:**
```html
<div class="layout layout--col">
  <div class="flex flex--col gap--small">
    <span class="title">Heading</span>
    <span class="description">Some text</span>
  </div>
</div>
<div class="title_bar">
  <img class="image" src="icon.svg" />
  <span class="title">Plugin Name</span>
</div>
```

**Mashup (two side-by-side views):**
```html
<div class="screen">
  <div class="mashup mashup--1Lx1R">
    <div class="view view--half_vertical">
      <div class="layout">...</div>
    </div>
    <div class="view view--half_vertical">
      <div class="layout">...</div>
    </div>
  </div>
</div>
```

**Data table with overflow:**
```html
<table class="table" data-table-limit="true">
  <thead><tr><th><span class="label">Col</span></th></tr></thead>
  <tbody><tr><td><span class="label">Data</span></td></tr></tbody>
</table>
```

### Troubleshooting

- Only one `layout` element per view — multiple/nested layouts break rendering
- Elements like `label` cannot contain nested elements — use `rich_text` for complex content
- Clamping doesn't work on elements with rich text inside — use `rich_text` + `content_limiter` instead
- Always read `troubleshooting_guide.md` when debugging layout issues
