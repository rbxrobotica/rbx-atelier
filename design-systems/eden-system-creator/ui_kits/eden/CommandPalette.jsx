/* CommandPalette.jsx — ⌘K dialog */

function CommandPalette({ open, onClose, go }) {
  if (!open) return null;
  const groups = [
    { title: 'Actions', items: [
      { icon: 'plus',     label: 'Create mission',            scope: 'NEW',     onClick: () => { onClose(); go('create'); } },
      { icon: 'radio-tower', label: 'Open Agent Council',     scope: 'GOTO',    onClick: () => { onClose(); go('council'); } },
      { icon: 'shield',   label: 'Open Governance & Audit',   scope: 'GOTO',    onClick: () => { onClose(); go('governance'); } },
      { icon: 'workflow', label: 'Open System Map',           scope: 'GOTO',    onClick: () => { onClose(); go('map'); } },
    ]},
    { title: 'Systems', items: [
      { icon: 'layers', label: 'Strategos · open',  scope: 'SYSTEM', onClick: () => { onClose(); go('system'); } },
      { icon: 'layers', label: 'Thalamus · open',   scope: 'SYSTEM', onClick: () => { onClose(); go('system'); } },
      { icon: 'layers', label: 'Robson · open',     scope: 'SYSTEM', onClick: () => { onClose(); go('system'); } },
    ]},
    { title: 'Missions', items: [
      { icon: 'target', label: '4HN-021 · auth via rbx-identity', scope: 'MISSION', onClick: () => { onClose(); go('council'); } },
      { icon: 'target', label: '4HN-019 · GitOps canary patch',   scope: 'MISSION', onClick: () => { onClose(); } },
    ]},
  ];
  return (
    <>
      <div className="eden-palette-scrim" onClick={onClose} />
      <div className="eden-palette" role="dialog" aria-label="Command palette">
        <input className="eden-palette__input" autoFocus placeholder="Run command, create mission, jump to system…" />
        <div className="eden-palette__list">
          {groups.map(g => (
            <React.Fragment key={g.title}>
              <div className="eden-palette__group">{g.title}</div>
              {g.items.map((it, i) => (
                <div key={i} className="eden-palette__item" onClick={it.onClick}>
                  <i data-lucide={it.icon} />
                  <span>{it.label}</span>
                  <span className="scope">{it.scope}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { CommandPalette });
