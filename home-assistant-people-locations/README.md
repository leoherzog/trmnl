# Home Assistant People Locations

This TRMNL plugin displays the location of people from your Home Assistant instance. It supports displaying up to 4 people in a grid layout.

## Features

- **Flexible Layout**: Automatically adjusts grid based on the number of columns (1 or 2).
- **Status Icons**: Displays icons based on the person's zone (e.g., Home, Away, Work).
- **Customizable**: Supports 12-hour and 24-hour time formats based on your TRMNL settings.
- **Empty State**: Shows a friendly message if no people are found.

## Configuration

### JSON Structure

The webhook payload is a JSON object whose top-level keys become the plugin's merge variables. Send a `people` array and a `last_update` timestamp string. Each person object should have the following fields:

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
  ],
  "last_update": "2025-08-25T17:42:14.561531-04:00"
}
```

> The `zone_icon` value is a [Material Design Icons](https://pictogrammer.com/library/mdi/) identifier (e.g. `mdi:home`, `mdi:account-arrow-right`). The bundled `people.example.json` and `last_update.example.json` files show the resolved value of each individual merge variable.

### Home Assistant Setup

To use this plugin, you'll need to set up an automation or script in Home Assistant to send this JSON data to your TRMNL device via a webhook.

## License

MIT
