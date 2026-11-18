/* ROB64 Landfall — SYNTHETIC sample data, safe to publish.
 * Mirrors the built-in sample in colony.html. The real colony-data.js is
 * written by scripts/fleet-data.py to OneDrive and to a local test copy and is
 * never committed. See SCHEMA.md § Privacy.
 */
window.ROB64_COLONY = {
  generated: '2026-11-16T00:00:00-05:00',
  window: { start: '2026-11-16', end: '2026-11-22' },
  planet: { skyHue: 206, groundHue: 28, rockHue: 20, vegHue: 142,
            terrain: 'ridges', moons: 2, ring: true, weather: 'dust' },
  colony: { extent: 0.58, bustle: 0.55, industry: 0.52, community: 0.48,
            terraform: 0.45 },
  temper: 0.22,
  structures: [
    { kind: 'lander',  label: 'LANDFALL',  scale: 0.9, stage: 1 },
    { kind: 'fab',     label: 'COMMITS',   scale: 0.62, stage: 1 },
    { kind: 'hab',     label: 'CALENDAR',  scale: 0.54, stage: 1 },
    { kind: 'rig',     label: 'TASK CHURN', scale: 0.4, stage: 1 },
    { kind: 'dome',    label: 'TRAINING',  scale: 0.38, stage: 1 },
    { kind: 'mast',    label: 'NOTES',     scale: 0.3, stage: 1 }
  ],
  events: [
    { t: 0.06, kind: 'build',      magnitude: 0.5 },
    { t: 0.13, kind: 'haul',       magnitude: 0.4 },
    { t: 0.21, kind: 'gather',     magnitude: 0.6 },
    { t: 0.28, kind: 'build',      magnitude: 0.7 },
    { t: 0.34, kind: 'expedition', magnitude: 0.5 },
    { t: 0.42, kind: 'survey',     magnitude: 0.4 },
    { t: 0.49, kind: 'build',      magnitude: 0.45 },
    { t: 0.55, kind: 'gather',     magnitude: 0.5 },
    { t: 0.63, kind: 'haul',       magnitude: 0.6 },
    { t: 0.70, kind: 'incursion',  magnitude: 0.4 },
    { t: 0.78, kind: 'build',      magnitude: 0.55 },
    { t: 0.85, kind: 'expedition', magnitude: 0.45 },
    { t: 0.92, kind: 'gather',     magnitude: 0.5 }
  ],
  metrics: { uptimePct: 1 }
};
