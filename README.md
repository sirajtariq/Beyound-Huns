# Beyond Huns — Landing Page

Lightweight, responsive React landing page for Beyond Huns (facility management & janitorial services, Islamabad).

## Quick start

```bash
npm install
npm run dev      # local development
npm run build    # production build -> dist/
```

## Project structure

```
src/
  data/          <- ALL content lives here (edit these files only to update the site)
    site.js        brand, contact info, nav links, hero content
    services.js    service groups & items
    whyUs.js       about text + why-choose-us points
    packages.js    janitor packages & enterprise plan
    sectors.js     client sectors + stats
    clients.js     client portfolio list
  components/
    common/        reusable UI (Container, SectionHeading, Button)
    layout/        Header, Footer
    sections/      one file per page section
  hooks/           useScrolled
  styles/          global.css (design tokens + all styles)
```

## How to update content

- New service  -> add an object in `src/data/services.js`
- Price change -> edit `src/data/packages.js`
- New client   -> add a string in `src/data/clients.js`
- Phone/email  -> edit `src/data/site.js` (updates site-wide)

No component code needs to change when data changes.
