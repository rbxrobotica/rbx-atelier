/* global React */
// Tiny inline-SVG icons matching lucide-react stroke style (1.5px, square caps).
// We avoid loading lucide-react in the prototype; visuals match the production set.
const I = (path, vb = "0 0 24 24") => ({ size = 16, color = "currentColor", strokeWidth = 1.5, ...rest } = {}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={vb} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" {...rest}>
    {path}
  </svg>
);

const Icon = {
  Cockpit:    I(<><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>),
  Decisions:  I(<><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>),
  Timeline:   I(<><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></>),
  Risk:       I(<><path d="M12 2L2 22h20L12 2z"/><path d="M12 9v5"/><path d="M12 17h.01"/></>),
  Agents:     I(<><circle cx="12" cy="7" r="4"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/></>),
  Hypothesis: I(<><path d="M9 3h6"/><path d="M10 3v7l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/></>),
  Bell:       I(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></>),
  User:       I(<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>),
  Plus:       I(<><path d="M12 5v14M5 12h14"/></>),
  ArrowRight: I(<><path d="M5 12h14M13 6l6 6-6 6"/></>),
  ArrowUp:    I(<><path d="M12 19V5M6 11l6-6 6 6"/></>),
  ArrowDown:  I(<><path d="M12 5v14M6 13l6 6 6-6"/></>),
  Check:      I(<><path d="M5 12l5 5L20 7"/></>),
  X:          I(<><path d="M6 6l12 12M18 6L6 18"/></>),
  Search:     I(<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>),
  Settings:   I(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.97 7.97 0 0 0 0-6l2-1.2-2-3.4-2.3.9a8 8 0 0 0-5.2-3L11.5 0h-3l-.4 2.3a8 8 0 0 0-5.2 3l-2.3-.9-2 3.4 2 1.2a7.97 7.97 0 0 0 0 6l-2 1.2 2 3.4 2.3-.9a8 8 0 0 0 5.2 3L8.5 24h3l.4-2.3a8 8 0 0 0 5.2-3l2.3.9 2-3.4-2-1.2z"/></>),
  Filter:     I(<><path d="M3 4h18l-7 9v6l-4 2v-8L3 4z"/></>),
  Eye:        I(<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></>),
  Activity:   I(<><path d="M22 12h-4l-3 9-6-18-3 9H2"/></>),
  Layers:     I(<><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>),
  Sigma:      I(<><path d="M18 4H6l6 8-6 8h12"/></>),
  Lock:       I(<><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>),
};
window.Icon = Icon;
