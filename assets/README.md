# Assets

| File | Used for | Notes |
| :--- | :--- | :--- |
| `banner.svg` | The hero image at the top of this README | 1280×320, dark background, renders as-is on GitHub |
| `social-preview.svg` | Source for the repository's social preview card | Must be exported to PNG before upload |

Both files are hand-authored SVG — edit them as text, no design tool required.
Colors match the badge row: `#38bdf8` → `#818cf8` → `#c084fc` on `#0b1220`.

## Exporting the social preview

GitHub only accepts PNG, JPG, or GIF for Settings → General → Social preview,
so convert the SVG at exactly 1280×640:

```bash
# Option 1: svgexport
npx --yes svgexport assets/social-preview.svg social-preview.png 1280:640

# Option 2: open the SVG in a browser and screenshot at a 1280×640 viewport
```

Then upload `social-preview.png` under **Settings → General → Social preview**
and check it renders legibly at small card size.
