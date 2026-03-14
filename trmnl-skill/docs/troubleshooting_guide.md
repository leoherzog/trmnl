# Troubleshooting Guide

Framework v2 is more advanced than earlier versions, which makes it less forgiving of markup that was not intended. This may cause certain layouts or plugins to behave differently. Use this checklist to review your project and bring it in line with the intended usage.

### Troubleshooting Checklist

- **Does your markup contain a single layout element?**
  There should be exactly one element with the [Layout](/framework/docs/layout) class in your markup. Multiple or nested layouts are not supported.

- **Do your elements contain supported content?**
  Elements don't support nesting other elements inside them. For example, [Label](/framework/docs/label) elements can't have nested more labels or any other elements inside them. If you need rich text capability, use the [Rich Text](/framework/docs/rich_text) component instead.

- **Clamping is not working as expected?**
  When using [Clamp](/framework/docs/clamp) on elements like [Label](/framework/docs/label) and [Description](/framework/docs/description) , these elements can't contain rich text. If you want to clamp rich text content, you need to use the [Rich Text](/framework/docs/rich_text) component in tandem with the [Content Limiter](/framework/docs/content_limiter) modulation utility.

Previous

[Enhancement Guide Device, bit-depth, and orientation-responsive patterns for plugins](/framework/docs/enhancement_guide)

Next

[TRMNL X Guide Framework changes for TRMNL X compatibility](/framework/docs/trmnl_x_guide)
