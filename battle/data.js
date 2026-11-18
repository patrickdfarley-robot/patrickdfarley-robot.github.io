/* ROB64 space-battle wallpaper — sample data file.
 * Copy to `data.js` next to battle.html, or generate it from the week's real numbers.
 * Must be plain JS that sets window.ROB64_DATA (no fetch is used; file:// safe).
 * Every field is optional — see SCHEMA.md for defaults, clamps, and visual mappings.
 */
window.ROB64_DATA = {
  // Seed source: any change here reshuffles ship shapes, positions, and event targets.
  generated: "2026-11-15T20:40:00-05:00",

  // Reporting window (metadata only; not rendered).
  window: { start: "2026-11-09", end: "2026-11-15" },

  factions: {
    order:   { name: "Order",   hue: 200, strength: 0.72 }, // work completed this week
    entropy: { name: "Entropy", hue: 18,  strength: 0.41 }  // work still pending
  },

  // Capital ships. Renderer uses at most 4 per faction (8 total).
  capitals: [
    { id: "ord-1", faction: "order",   size: 0.90, integrity: 0.86, activity: 0.70, label: "VIGIL" },
    { id: "ord-2", faction: "order",   size: 0.55, integrity: 0.93, activity: 0.50, label: "LEDGER" },
    { id: "ord-3", faction: "order",   size: 0.35, integrity: 0.99, activity: 0.80, label: "COURIER" },
    { id: "ent-1", faction: "entropy", size: 0.75, integrity: 0.58, activity: 0.60, label: "BACKLOG" },
    { id: "ent-2", faction: "entropy", size: 0.40, integrity: 0.80, activity: 0.30, label: "DRIFT" }
  ],

  // Fighters. Renderer instantiates at most 48 (first 48 valid entries).
  fighters: [
    { id: "f01", faction: "order",   speed: 0.70, aggression: 0.80, lifetime: 0.60 },
    { id: "f02", faction: "order",   speed: 0.55, aggression: 0.60, lifetime: 0.70 },
    { id: "f03", faction: "order",   speed: 0.80, aggression: 0.70, lifetime: 0.40 },
    { id: "f04", faction: "order",   speed: 0.45, aggression: 0.40, lifetime: 0.80 },
    { id: "f05", faction: "order",   speed: 0.65, aggression: 0.75, lifetime: 0.55 },
    { id: "f06", faction: "order",   speed: 0.60, aggression: 0.50, lifetime: 0.65 },
    { id: "f07", faction: "order",   speed: 0.72, aggression: 0.66, lifetime: 0.50 },
    { id: "f08", faction: "order",   speed: 0.50, aggression: 0.35, lifetime: 0.75 },
    { id: "f09", faction: "order",   speed: 0.62, aggression: 0.58, lifetime: 0.62 },
    { id: "f10", faction: "order",   speed: 0.58, aggression: 0.72, lifetime: 0.48 },
    { id: "f11", faction: "entropy", speed: 0.60, aggression: 0.55, lifetime: 0.50 },
    { id: "f12", faction: "entropy", speed: 0.75, aggression: 0.65, lifetime: 0.45 },
    { id: "f13", faction: "entropy", speed: 0.40, aggression: 0.30, lifetime: 0.70 },
    { id: "f14", faction: "entropy", speed: 0.55, aggression: 0.50, lifetime: 0.60 },
    { id: "f15", faction: "entropy", speed: 0.68, aggression: 0.45, lifetime: 0.55 },
    { id: "f16", faction: "entropy", speed: 0.50, aggression: 0.60, lifetime: 0.52 }
  ],

  // Discrete beats along the 150 s loop; t is the fraction of the loop (0..1).
  events: [
    { t: 0.06, faction: "order",   kind: "launch", magnitude: 0.5 },
    { t: 0.14, faction: "order",   kind: "strike", magnitude: 0.7 },
    { t: 0.22, faction: "entropy", kind: "strike", magnitude: 0.4 },
    { t: 0.31, faction: "entropy", kind: "loss",   magnitude: 0.6 },
    { t: 0.42, faction: "order",   kind: "strike", magnitude: 0.5 },
    { t: 0.50, faction: "entropy", kind: "launch", magnitude: 0.4 },
    { t: 0.58, faction: "entropy", kind: "strike", magnitude: 0.6 },
    { t: 0.66, faction: "order",   kind: "loss",   magnitude: 0.3 },
    { t: 0.74, faction: "order",   kind: "strike", magnitude: 0.8 },
    { t: 0.83, faction: "entropy", kind: "loss",   magnitude: 0.8 },
    { t: 0.92, faction: "order",   kind: "launch", magnitude: 0.6 }
  ],

  metrics: {
    commits: 23,          // -> debris density
    fleetAVolume: 14,     // -> extra lit windows on order hulls
    fleetBVolume: 9,      // -> extra lit windows on entropy hulls
    minutesLogged: 420,   // -> engine glow intensity (saturates at 600)
    calendarDensity: 0.55,// -> fighter busyness & fire rate
    uptimePct: 0.98       // -> starfield brightness
  },

  // Scene temper: -1 fully yin (the task list shrank — resolution,
  // consolidation) .. +1 fully yang (it grew — ambition, expansion), 0
  // balanced. Both poles are positive characters; this is never a score, and
  // must not drive anything that reads as damage. Absent means 0.
  temper: 0.42
};
