# Enlight Business

Two Next.js apps in one repo:

| Folder | Role |
|--------|------|
| `enlight/` | **New design** — active development |
| `enlight-v1/` | **Old design** — archive / reference |

Same route and component structure in both — compare file-by-file.

## Run

```bash
# New version
cd enlight && npm install && npm run dev

# Old version (reference)
cd enlight-v1 && npm install && npm run dev -- -p 3001
```

- New: http://localhost:3000  
- Old: http://localhost:3001  

## New version notes

`enlight` keeps the same pages/components as v1. UI is placeholder + design tokens.

Keep as-is while redesigning:

- `src/app/api/*`
- `src/lib/*`
- `src/utils/blogUtils.js`
