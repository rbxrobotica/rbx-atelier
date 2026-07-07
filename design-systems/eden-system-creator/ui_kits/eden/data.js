/* Éden System Creator — shared mock data
   Static fixtures so the click-thru renders without any state mutations.
   ============================================================== */
const EDEN_DATA = {
  org: 'rbx',
  user: { id: 'lda', initials: 'LD', name: 'Lucas D.', role: 'Orchestrator' },
  env: 'production',

  systems: [
    { id: 'strategos',  name: 'Strategos',  pip: 'ok',   ready: 78, missions: 12, role: 'strategic planning' },
    { id: 'thalamus',   name: 'Thalamus',   pip: 'ok',   ready: 84, missions: 6,  role: 'AI policy / evaluation' },
    { id: 'robson',     name: 'Robson',     pip: 'warn', ready: 62, missions: 9,  role: 'trading execution' },
    { id: 'truthmetal', name: 'TruthMetal', pip: 'ok',   ready: 71, missions: 4,  role: 'groundtruth' },
    { id: 'rbx-identity', name: 'rbx-identity', pip: 'ok', ready: 88, missions: 3,  role: 'identity / SSO' },
    { id: 'rbx-infra',  name: 'rbx-infra',  pip: 'ok',   ready: 92, missions: 5,  role: 'GitOps / K8s' },
  ],

  missions: [
    { id: '4HN-021', system: 'strategos',  title: 'Replace auth module with rbx-identity',           state: 'council',  agents: 6, run: 214, cost: 0.41, autonomy: 'PROPOSE', p: 62, updated: '00:42' },
    { id: '4HN-020', system: 'thalamus',   title: 'Evaluate RAG retrieval drift on policy corpus',   state: 'approved', agents: 3, run: 212, cost: 1.18, autonomy: 'PROPOSE', p: 100, updated: '2h' },
    { id: '4HN-019', system: 'robson',     title: 'Patch GitOps pipeline for canary rollback',       state: 'blocked',  agents: 5, run: 208, cost: 0.92, autonomy: 'EXECUTE', p: 38, updated: '4h' },
    { id: '4HN-018', system: 'rbx-infra',  title: 'Roll observability stack to k3s.04',              state: 'review',   agents: 4, run: 205, cost: 0.27, autonomy: 'PROPOSE', p: 84, updated: '1d' },
    { id: '4HN-017', system: 'truthmetal', title: 'Build evaluation harness for council outputs',    state: 'running',  agents: 3, run: 218, cost: 0.06, autonomy: 'OBSERVE', p: 18, updated: '00:14' },
    { id: '4HN-016', system: 'strategos',  title: 'Draft ADR for situation-room data plane',         state: 'archived', agents: 2, run: 198, cost: 0.07, autonomy: 'OBSERVE', p: 100, updated: '3d' },
  ],

  agents: [
    { id: 'aurelio',  role: 'architect',  name: 'Aurelio',  status: 'active', conf: 0.86, model: 'opus-4',   cost: 0.18, tok: 5402, ctx: 8 },
    { id: 'iza',      role: 'security',   name: 'Iza',      status: 'review', conf: 0.71, model: 'sonnet-4', cost: 0.04, tok: 1902, ctx: 4 },
    { id: 'pedra',    role: 'backend',    name: 'Pedra',    status: 'active', conf: 0.79, model: 'opus-4',   cost: 0.11, tok: 3210, ctx: 6 },
    { id: 'vena',     role: 'frontend',   name: 'Vena',     status: 'idle',   conf: null, model: '—',       cost: 0,    tok: 0,    ctx: 0 },
    { id: 'infra',    role: 'infra',      name: 'Tiago',    status: 'active', conf: 0.68, model: 'sonnet-4', cost: 0.05, tok: 1407, ctx: 5 },
    { id: 'thalamus', role: 'governance', name: 'Thalamus', status: 'observe', conf: 0.93, model: 'policy-4.2', cost: 0, tok: 0, ctx: 12 },
    { id: 'reviewer', role: 'reviewer',   name: 'Otavio',   status: 'idle',   conf: null, model: 'opus-4',   cost: 0,    tok: 0,    ctx: 0 },
    { id: 'docs',     role: 'docs',       name: 'Lara',     status: 'idle',   conf: null, model: 'sonnet-4', cost: 0,    tok: 0,    ctx: 0 },
  ],

  council: [
    {
      agent: 'aurelio',
      stance: 'PROPOSAL',
      title: 'Adopt rbx-identity as the auth source for Strategos.',
      body: 'Extract session, SSO, and token verification into rbx-identity. Strategos consumes the adapter package. Migration is reversible inside one release cycle.',
      refs: ['ADR-014', 'strategos/auth/*', 'rbx-identity@2.1', 'thalamus/policy.v4.2'],
      next: 'Draft adapter package + migration plan.',
    },
    {
      agent: 'iza',
      stance: 'RISK',
      title: 'Secret-rotation gap on Robson edge worker, unrelated but adjacent.',
      body: 'Worker tokens currently rotate manually. Migrating Strategos to rbx-identity will surface the same pattern on Robson. Risk MEDIUM; mitigations available via rbx-infra secret store.',
      refs: ['threat-model.md', 'rbx-infra/secrets.v3'],
      next: 'Open governance entry for rotation policy.',
    },
    {
      agent: 'pedra',
      stance: 'PROPOSAL',
      title: 'Phase rollout in two PRs: adapter, then cutover.',
      body: 'PR-1 introduces rbx-identity adapter package as opt-in. PR-2 cuts over Strategos session middleware. Tests cover both branches. Rollback flips a single flag.',
      refs: ['PR-PLAN.md', 'strategos/middleware'],
      next: 'Draft PR-1 implementation guide.',
    },
    {
      agent: 'thalamus',
      stance: 'OBSERVE',
      title: 'Policy locks autonomy at PROPOSE. Reviewer concurrence required for EXECUTE.',
      body: 'Cost envelope 38% consumed. Council confidence at 0.82. No model drift detected. Decision recorded as D-0042 once council settles.',
      refs: ['policy.v4.2', 'eval/run-214'],
      next: 'Await orchestrator approval.',
    },
  ],

  artifacts: [
    { id: 'ADR-014', kind: 'ADR',       title: 'Auth via rbx-identity',                  status: 'draft',  by: 'aurelio',  meta: '.md · 2.4 kb · 4 sections' },
    { id: 'PR-PLAN', kind: 'PLAN',      title: 'rbx-identity adapter package',           status: 'ready',  by: 'pedra',    meta: '7 PR steps · 3 tests · 2 docs' },
    { id: 'DIFF-1',  kind: 'DIFF',      title: 'strategos/middleware/session.ts',        status: 'draft',  by: 'pedra',    meta: '+58 / -23 lines · 1 file' },
    { id: 'RUNBOOK', kind: 'RUNBOOK',   title: 'Auth migration runbook',                 status: 'review', by: 'lara',     meta: '12 steps · rollback included' },
    { id: 'TEST-7',  kind: 'TEST',      title: 'Session refresh under SAML adapter',     status: 'draft',  by: 'pedra',    meta: 'unit + integration · 14 cases' },
  ],

  decisions: [
    { id: 'D-0042', title: 'Adopt rbx-identity as authentication source for Strategos.', state: 'adopted', consensus: '5/6', conf: 0.84, risk: 'MEDIUM' },
    { id: 'D-0041', title: 'Defer migration of session refresh until SAML is validated.', state: 'deferred', consensus: '3/6', conf: 0.62, risk: 'HIGH' },
    { id: 'D-0040', title: 'Adopt structured artifact storage in Context Vault v2.',     state: 'adopted', consensus: '6/6', conf: 0.91, risk: 'LOW' },
  ],

  audit: [
    { when: '2026-04-23 12:41', actor: 'thalamus',    action: 'POLICY_CHECK',    target: 'mission/4HN-021/run-214', result: 'PASS' },
    { when: '2026-04-23 12:38', actor: 'aurelio',     action: 'PROPOSE',         target: 'ADR-014',                 result: 'OK' },
    { when: '2026-04-23 12:35', actor: 'lda',         action: 'CONVENE_COUNCIL', target: 'mission/4HN-021',         result: 'OK' },
    { when: '2026-04-23 12:30', actor: 'lda',         action: 'BRIEF',           target: 'mission/4HN-021',         result: 'OK' },
    { when: '2026-04-23 11:02', actor: 'reviewer',    action: 'APPROVE',         target: 'D-0040',                  result: 'OK' },
    { when: '2026-04-23 10:48', actor: 'thalamus',    action: 'POLICY_DENY',     target: 'mission/4HN-019/exec',    result: 'BLOCK' },
    { when: '2026-04-23 09:14', actor: 'lda',         action: 'PROMOTE',         target: 'D-0040 / context-vault',  result: 'OK' },
  ],
};

window.EDEN_DATA = EDEN_DATA;
