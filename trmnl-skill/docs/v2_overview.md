# Framework v2 Overview

Welcome to Framework v2 - the first open-source e-paper adaptive front-end framework. This release introduces support for multiple devices, orientations, and bit-depths, while making layouts and utilities smarter and more automatic. The overview highlights the key improvements, new features, and breaking changes, and points you to detailed guides for upgrading and getting the most out of v2.

### Highlights

- **Adaptive in Context:** the framework automatically adapts to the current bit-depth, size, and orientation. Layouts adjust with automatic enhancement on richer devices and graceful degradation on limited ones.
- **Expanded palette:** from 1-bit (2 shades) to 4-bit (16 shades).
- **Dynamic Engines:** engines like [Overflow](/framework/docs/overflow) and [Clamp](/framework/docs/clamp) are now smart enough to calculate available space themselves. No more hard-coded pixel values required.
- **Backwards compatibility:** existing code continues to work, enhancing automatically when displayed on more capable devices.

### What's New

- **New utilities:** [Scale](/framework/docs/scale) , [Visibility](/framework/docs/visibility) , [Aspect Ratio](/framework/docs/aspect_ratio) , [Rounded](/framework/docs/rounded) .
- **New element:** [Divider](/framework/docs/divider) .
- **New component:** [Progress](/framework/docs/progress) bar.
- **Table overflow engine:** [Table Overflow](/framework/docs/table_overflow) - new engine for tables, automatically handling row overflows and adding an “and X more” row.
- **Extended utilities:** [Text](/framework/docs/text) , [Border](/framework/docs/border) , and [Background](/framework/docs/background) are now adaptive across bit-depths and contexts.

### What's Enhanced

- **Clamp engine:** [Clamp](/framework/docs/clamp) rebuilt as a true JavaScript DOM engine, integrated with other engines like [Overflow](/framework/docs/overflow) .
- **Overflow engine:** [Overflow](/framework/docs/overflow) adds smarter features like smart columns, clamp-aware distribution, group headers, and harmonious group columns.
- **Content limiter engine:** [Content Limiter](/framework/docs/content_limiter) enhanced to drop fixed values and calculate available space dynamically.
- **Item component:** [Item](/framework/docs/item) adds new meta-emphasis classes to emphasise items.
- **Table component:** [Table](/framework/docs/table) adds new style variants, including small tables, large tables, and index tables.

### What's Changed

- **Border utility:** [Border](/framework/docs/border) expanded from 1-bit only → now works across 1, 2, and 4-bit spaces. Requires new class names.
- **Clamping:** [Title](/framework/docs/title) , [Label](/framework/docs/label) , and [Description](/framework/docs/description) are now unclamped by default. Developers must explicitly clamp if needed.

### Start Here

- Upgrading from v1? → [Upgrade Guide](/framework/docs/upgrade_guide) .
- Looking to take advantage of new features? → [Enhancement Guide](/framework/docs/enhancement_guide) .

Next

[Upgrade Guide Steps to upgrade your plugins to Framework v2](/framework/docs/upgrade_guide)
