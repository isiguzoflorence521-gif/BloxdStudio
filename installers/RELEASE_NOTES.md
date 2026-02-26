# BloxdStudio – Release Notes

## v0.3.0 — Schematic Engine Update
**Released:** 2026-02-24

### ✨ New Features
- Added `schematic-handler.js`
  - Supports loading, parsing, and exporting schematic formats.
  - Introduced validation layer for malformed schematic files.
- Improved integration between `map-engine.js` and texture system.

### 🛠 Improvements
- Optimized texture resolution pipeline in `texture-engine.js`.
- Reduced compile time in `compiler.js` by ~25%.
- Updated templates to support new texture-pack format.

### 🐛 Bug Fixes
- Fixed crash when loading maps with missing block IDs.
- Corrected path resolution issues for internal script templates.
- Resolved memory leak in the map renderer.

---

## v0.2.0 — Texture Engine & Core Systems
**Released:** 2026-02-21

### ✨ New Features
- Introduced `texture-engine.js`
  - Handles texture loading, caching, and atlas generation.
- Added initial `blocks.json` definitions.
- New directory structure:
  - `/core`
  - `/data`
  - `/templates`

### 🛠 Improvements
- First pass of map compilation system (`map-engine.js`).

### 🐛 Bug Fixes
- Fixed incorrect relative paths when running portable `.exe` build.

---

## v0.1.0 — Initial Prototype Release
**Released:** 2026-02-18

### ✨ New Features
- Added core compiler (`compiler.js`).
- First pass of the map engine.
- Introduced `.bloxdschem` concept (not yet finalized).
- Early executable build (`BloxdStudio.exe`).

---

## Upcoming
### 🚧 In Progress
- UI editor for blocks and maps.
- Schematic visualization.
- Asset validation tools.

### 🧩 Planned
- Custom block model support.
- Improved export formats.
- Plugin system for community extensions.
