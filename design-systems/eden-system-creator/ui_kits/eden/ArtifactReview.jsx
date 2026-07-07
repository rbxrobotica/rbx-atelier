/* ArtifactReview.jsx — diff/ADR review screen */

function ArtifactReview({ go }) {
  return (
    <div className="eden-page" data-screen-label="artifact" style={{ maxWidth: 1280 }}>
      <div className="eden-page__head">
        <div>
          <div className="eden-page__eyebrow">ARTIFACT · ADR-014 · DRAFT · BY AURELIO</div>
          <h1 className="eden-page__title">Auth via rbx-identity</h1>
        </div>
        <div className="eden-page__actions">
          <Button variant="ghost" icon="arrow-left" onClick={() => go('council')}>Back to council</Button>
          <Button icon="message-square">Request revision</Button>
          <Button icon="share">Reassign agent</Button>
          <Button variant="primary" icon="check">Approve artifact</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* ADR body */}
          <div className="eden-card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
              <Eyebrow>ARCHITECTURAL DECISION RECORD · ADR-014</Eyebrow>
              <Mono style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>2.4 KB · 4 SECTIONS · CITES 8 SOURCES</Mono>
            </div>

            <h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 500 }}>Status</h3>
            <p style={{ color: 'var(--fg-1)', margin: 0, fontSize: 14 }}>Proposed. Pending orchestrator approval. Council confidence 0.84.</p>

            <h3 style={{ margin: '20px 0 6px', fontSize: 18, fontWeight: 500 }}>Context</h3>
            <p style={{ color: 'var(--fg-1)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
              Strategos currently bundles its own session middleware. The same pattern repeats across Robson and TruthMetal, with diverging implementations of SAML, refresh, and revocation. rbx-identity now exposes a stable adapter package at v2.1.
            </p>

            <h3 style={{ margin: '20px 0 6px', fontSize: 18, fontWeight: 500 }}>Decision</h3>
            <p style={{ color: 'var(--fg-1)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
              Adopt rbx-identity as the canonical authentication source for Strategos. Extract session, SSO, and token verification into the adapter package. Migration is staged across two PRs and remains reversible inside one release cycle.
            </p>

            <h3 style={{ margin: '20px 0 6px', fontSize: 18, fontWeight: 500 }}>Consequences</h3>
            <ul style={{ color: 'var(--fg-1)', margin: 0, fontSize: 14, lineHeight: 1.65, paddingLeft: 20 }}>
              <li>Session refresh under SAML must be re-validated before EXECUTE.</li>
              <li>Robson and TruthMetal converge on the same adapter in subsequent missions.</li>
              <li>Secret-rotation policy on edge workers is reclassified as a governance risk.</li>
              <li>Observability emits a new event class. Thalamus eval coverage extended.</li>
            </ul>
          </div>

          {/* Diff */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <Eyebrow>DIFF · strategos/middleware/session.ts</Eyebrow>
              <Mono style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>+58 / -23 lines · 1 of 4 files</Mono>
            </div>
            <div className="eden-diff">
              <div className="eden-diff__head">
                <span>strategos/middleware/session.ts</span>
                <span>proposal · PR-1</span>
              </div>
              <div className="eden-diff__body">
                <div className="eden-diff__row"><span className="ln">42</span><span>{`export async function attachSession(req: Request) {`}</span></div>
                <div className="eden-diff__row rm"><span className="ln">43</span><span>{`-  const token = req.cookies['strategos_jwt'];`}</span></div>
                <div className="eden-diff__row rm"><span className="ln">44</span><span>{`-  if (!token) return null;`}</span></div>
                <div className="eden-diff__row rm"><span className="ln">45</span><span>{`-  const payload = await verifyLegacy(token);`}</span></div>
                <div className="eden-diff__row add"><span className="ln">43</span><span>{`+  const session = await identity.verifyFromCookie(req);`}</span></div>
                <div className="eden-diff__row add"><span className="ln">44</span><span>{`+  if (!session) return null;`}</span></div>
                <div className="eden-diff__row add"><span className="ln">45</span><span>{`+  recordTrace(session, 'attach');`}</span></div>
                <div className="eden-diff__row"><span className="ln">46</span><span>{`  return mapToActor(session);`}</span></div>
                <div className="eden-diff__row"><span className="ln">47</span><span>{`}`}</span></div>
              </div>
            </div>
          </div>

          {/* Plan */}
          <div className="eden-card" style={{ padding: 20 }}>
            <Eyebrow>IMPLEMENTATION PLAN · PR-PLAN.md</Eyebrow>
            <ol style={{ margin: '12px 0 0', paddingLeft: 20, color: 'var(--fg-1)', fontSize: 13, lineHeight: 1.7 }}>
              <li>Add rbx-identity@2.1 to Strategos. Pin via lockfile.</li>
              <li>Introduce <Mono>identity.verifyFromCookie</Mono> adapter. Cover with 14 tests.</li>
              <li>Replace <Mono>verifyLegacy</Mono> behind feature flag <Mono>auth.adapter.identity</Mono>.</li>
              <li>Migrate session refresh path. Validate under SAML staging.</li>
              <li>Update runbook and observability schema. Emit <Mono>auth.adapter.identity</Mono> event class.</li>
              <li>Open PR-1 (adapter, flagged off). Council second-pass review.</li>
              <li>Open PR-2 (cutover). Reviewer approval gate.</li>
            </ol>
          </div>
        </div>

        {/* SIDE — meta + trace */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="eden-card" style={{ padding: 16 }}>
            <Eyebrow>METADATA</Eyebrow>
            <div style={{ marginTop: 10, fontSize: 12, display: 'grid', gridTemplateColumns: '90px 1fr', gap: 8 }}>
              <span className="eden-label">Authored</span><span>aurelio · architect</span>
              <span className="eden-label">Reviewed</span><span style={{ color: 'var(--fg-3)' }}>pending</span>
              <span className="eden-label">Mission</span><Mono>4HN-021 · run #214</Mono>
              <span className="eden-label">Decision</span><Mono>D-0042</Mono>
              <span className="eden-label">Model</span><Mono>claude-opus-4</Mono>
              <span className="eden-label">Cost</span><Mono>$0.18</Mono>
              <span className="eden-label">Tokens</span><Mono>5,402</Mono>
            </div>
          </div>

          <div className="eden-card" style={{ padding: 16 }}>
            <Eyebrow>RELATED ARTIFACTS</Eyebrow>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {EDEN_DATA.artifacts.filter(a => a.id !== 'ADR-014').map(a => (
                <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderTop: '1px solid var(--border)', fontSize: 12 }}>
                  <Mono style={{ fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.14em' }}>{a.kind}</Mono>
                  <span style={{ flex: 1 }}>{a.title}</span>
                  <Chip tone={a.status === 'ready' ? 'approved' : a.status === 'review' ? 'review' : 'drafting'}>{a.status.toUpperCase()}</Chip>
                </div>
              ))}
            </div>
          </div>

          <div className="eden-card" style={{ padding: 16 }}>
            <Eyebrow>DECISION TRACE</Eyebrow>
            <div className="eden-timeline" style={{ marginTop: 10 }}>
              <div className="eden-tl-row" data-state="approved">
                <span className="when">12:41</span>
                <div className="what"><div className="title">Policy check passed</div><div className="who">thalamus · policy v4.2</div></div>
              </div>
              <div className="eden-tl-row" data-state="council">
                <span className="when">12:38</span>
                <div className="what"><div className="title">ADR proposed</div><div className="who">aurelio · architect</div></div>
              </div>
              <div className="eden-tl-row" data-state="review">
                <span className="when">12:35</span>
                <div className="what"><div className="title">Council convened</div><div className="who">orchestrator · {EDEN_DATA.user.name}</div></div>
              </div>
              <div className="eden-tl-row">
                <span className="when">12:30</span>
                <div className="what"><div className="title">Mission briefed</div><div className="who">orchestrator</div></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { ArtifactReview });
