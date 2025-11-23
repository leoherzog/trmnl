# Home Assistant People Locations

This TRMNL plugin displays the location of people from your Home Assistant instance. It supports displaying up to 4 people in a grid layout.

## Features

- **Flexible Layout**: Automatically adjusts grid based on the number of columns (1 or 2).
- **Status Icons**: Displays icons based on the person's zone (e.g., Home, Away, Work).
- **Customizable**: Supports 12-hour and 24-hour time formats based on your TRMNL settings.
- **Empty State**: Shows a friendly message if no people are found.

## Configuration

### JSON Structure

The plugin expects a JSON object with a `people` array. Each person object should have the following fields:

```json
{
  "people": [
    {
      "name": "Leo Herzog",
      "zone": "home",
      "entity_id": "person.leo_herzog",
      "zone_icon": "mdi:home"
    },
    {
      "name": "Megan Herzog",
      "zone": "not_home",
      "entity_id": "person.megan_herzog",
      "zone_icon": "mdi:account-arrow-right"
    }
  ]
}
```

### Home Assistant Setup

To use this plugin, you'll need to set up an automation or script in Home Assistant to send this JSON data to your TRMNL device via a webhook.

## License

MIT
