# NWS Severe Weather Alerts Plugin for TRMNL

## Overview
This is a TRMNL plugin that displays National Weather Service (NWS) severe weather alerts on e-ink displays. The plugin fetches alert data from the NWS API and renders it using Liquid templates with the TRMNL Framework v2 styling system.

## Architecture

### Files
- `shared.liquid` - Primary template source containing all reusable Liquid templates and components. This file is automatically prepended to the selected layout by the TRMNL system
- `full.liquid` - Full-screen layout that renders `main_content` and `title_bar`
- `half-horizontal.liquid` - Half-screen horizontal layout with side-by-side compact view
- `half-vertical.liquid` - Half-screen vertical layout with stacked alerts
- `quadrant.liquid` - Quarter-screen layout with minimal, essential information only

### Template System
The TRMNL system automatically prepends `shared.liquid` to whichever layout file is being rendered. This means:
- All template definitions are placed in `shared.liquid`
- Layout files only contain minimal rendering logic calling templates from shared
- Templates defined in `shared.liquid` are available to all layout files via `{% render %}` tags

### Data Flow
1. NWS API provides weather alert data via the `features` array
2. TRMNL prepends `shared.liquid` to the selected layout file
3. Liquid templates process this data server-side
4. TRMNL Framework v2 classes style the output for e-ink displays

## Data Structure

### Features Array (NWS Alerts)
```json
{
  "features": [{
    "properties": {
      "event": "Winter Storm Warning",
      "severity": "Severe",
      "description": "Heavy snow expected...",
      "onset": "2025-01-15T18:00:00-05:00",
      "ends": "2025-01-16T06:00:00-05:00"
    }
  }]
}
```

### TRMNL Configuration
```json
{
  "trmnl": {
    "plugin_settings": {
      "custom_fields_values": {
        "timemode": "12_hour" | "24_hour",
        "includefuture": "true" | "false"
      },
      "instance_name": "Weather Alerts"
    },
    "user": {
      "utc_offset": -18000,
      "locale": "en-US"
    },
    "system": {
      "timestamp_utc": 1234567890
    }
  }
}
```

## Display Modes

### Alert Categorization
- **Active Alerts**: `onset ≤ now ≤ ends`
- **Upcoming Alerts**: `onset > now` (only shown if `includefuture == 'true'`)

### Layout Behaviors

#### Full Layout (`layout_size: "full"`)
- Two-column grid layout
- Left column: Active alerts with full details
- Right column: Upcoming alerts (if enabled)
- Shows description and time ranges
- Scrollable lists with max-height constraint

#### Half-Horizontal Layout (`layout_size: "half-horizontal"`)
- Side-by-side flex layout
- Compact alert cards showing event name and severity
- Limited to 3 active and 2 upcoming alerts
- Shows count of additional alerts if more exist

#### Half-Vertical Layout (`layout_size: "half-vertical"`)
- Stacked vertical layout
- Active alerts shown above upcoming
- Limited to 2 alerts per category
- Medium detail level with event, severity, and times

#### Quadrant Layout (`layout_size: "quadrant"`)
- Most compact view for quarter screen
- Shows only the most severe active alert OR next upcoming alert
- Centered display with minimal information
- Falls back to "No Alerts" message when clear

## Key Templates in shared.liquid

### `main_content`
Orchestrates the display based on layout_size parameter, routing to appropriate container template.

### `alerts_container_*`
Layout-specific containers that organize the display:
- `alerts_container_full`: Two-column grid
- `alerts_container_half_horizontal`: Side-by-side flex
- `alerts_container_half_vertical`: Stacked flex
- `alerts_container_quadrant`: Centered minimal view

### `alert_item`
Full alert display with:
- Event name and severity badge
- Description (when space permits)
- Time range with configurable format

### `alert_item_compact`
Minimal alert display for space-constrained layouts:
- Event name only
- Severity badge

### `no_alerts_card`
Empty state display when no alerts exist for a category

### `title_bar`
Standardized NWS branding with:
- NWS logo (SVG)
- Instance name or "Alerts" (quadrant)
- Last update timestamp

## TRMNL Framework v2 Classes Used

### Layout & Positioning
- `view view--full` - Full viewport container
- `flex flex--row` / `flex--col` - Flexbox layouts
- `flex--center-x flex--center-y` - Center content
- `flex--space-between` - Space items evenly
- `grid grid--cols-2` - Two-column grid
- `gap--small`, `gap--medium` - Spacing between items

### Typography
- `title title--small/medium` - Alert event names
- `label label--small` - Section headers and metadata
- `label--inverted` - Severity badges
- `label--underline` - Time ranges
- `dim` - Dimmed text for secondary information

### Visual Enhancement
- `bg--white` - White background for cards
- `rounded--medium` - Rounded corners
- `p--1`, `p--2` - Padding utilities
- `text--center` - Center text alignment

### Images
- `image image-stroke image--dither` - E-ink optimized images

## Configuration

Plugin settings (via `trmnl.plugin_settings.custom_fields_values`):
- `timemode`: "12_hour" or "24_hour" - Time display format
- `includefuture`: "true" or "false" - Show upcoming alerts
- `instance_name`: Custom title for the display

## Time Handling

1. **Timezone Conversion**: All times are converted to user's local timezone using `trmnl.user.utc_offset`
2. **Format Masks**:
   - 12-hour: `%-I:%M%P` (time), `%-m/%-d %-I:%M%P` (datetime)
   - 24-hour: `%H:%M` (time), `%-m/%-d %H:%M` (datetime)
3. **Display Logic**: Active alerts show time range only, upcoming show full datetime

## Important Notes

1. **E-ink Optimization**: Uses dithered images and high contrast for readability
2. **Responsive Design**: Layout adapts based on `layout_size` parameter
3. **Performance**: Lists are limited and scrollable to handle many alerts
4. **Graceful Degradation**: Shows appropriate empty states when no alerts exist
5. **Severity Priority**: Quadrant view shows most severe active alert first

## Development Tips

1. Test with different combinations of active/upcoming alerts
2. Verify timezone handling across different offsets
3. Ensure text remains readable at all layout sizes
4. Use Framework v2 classes exclusively (no custom CSS)
5. Keep layouts simple and high-contrast for e-ink displays
6. Test both 12-hour and 24-hour time formats