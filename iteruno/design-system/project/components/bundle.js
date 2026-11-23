/* @ds-bundle: {"format": 4, "namespace": "Iteruno", "components": [{"name": "Logo"}, {"name": "Icon"}, {"name": "Button"}, {"name": "TextField"}, {"name": "Select"}, {"name": "Checkbox"}, {"name": "Form"}, {"name": "Badge"}, {"name": "Alert"}, {"name": "NavBar"}, {"name": "Hero"}, {"name": "Section"}, {"name": "Grid"}, {"name": "ServiceCard"}, {"name": "PriceCard"}, {"name": "CourseCard"}, {"name": "Testimonial"}, {"name": "Accordion"}, {"name": "Steps"}, {"name": "Timeline"}, {"name": "ContactCTA"}, {"name": "Footer"}, {"name": "ThemeToggle"}]} */
/* Iteruno Design System · componentes Svelte 5 compilados pelo Vite (IIFE). window.Iteruno = { mount, unmount, html, Button, … }. Sem dependências externas. */
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
this.Iteruno = (function() {
  "use strict";
  var _commit_callbacks, _discard_callbacks, _pending, _blocking_pending, _deferred, _scheduled, _new_effects, _dirty_reactions, _skipped_branches, _unskipped_branches, _decrement_queued, _Batch_instances, is_deferred_fn, is_skipped_fn, resolve_fn, process_fn, traverse_fn, find_earlier_batch_fn, intersects_fn, merge_fn, defer_effects_fn, commit_fn, unlink_fn, _anchor, _hydrate_open, _props, _children, _effect, _main_effect, _pending_effect, _failed_effect, _offscreen_fragment, _local_pending_count, _pending_count, _pending_count_update_queued, _dirty_reactions2, _effect_pending, _effect_pending_subscriber, _Boundary_instances, hydrate_resolved_content_fn, hydrate_failed_content_fn, create_reset_fn, is_destroyed_fn, hydrate_pending_content_fn, render_fn, resolve_fn2, run_fn, update_pending_count_fn, handle_error_fn, _batches, _onscreen, _offscreen, _outroing, _transition, _commit, _discard, _a;
  const DEV = false;
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var includes = Array.prototype.includes;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;
  const noop = () => {
  };
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  function deferred() {
    var resolve;
    var reject;
    var promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const MANAGED_EFFECT = 1 << 24;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const PAUSED = 1 << 8;
  const CONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const REACTION_RAN = 1 << 15;
  const DESTROYING = 1 << 25;
  const EFFECT_TRANSPARENT = 1 << 16;
  const EAGER_EFFECT = 1 << 17;
  const HEAD_EFFECT = 1 << 18;
  const EFFECT_PRESERVED = 1 << 19;
  const USER_EFFECT = 1 << 20;
  const EFFECT_OFFSCREEN = 1 << 25;
  const REACTION_IS_UPDATING = 1 << 21;
  const ASYNC = 1 << 22;
  const ERROR_VALUE = 1 << 23;
  const STATE_SYMBOL = Symbol("$state");
  const COMPONENT_SYMBOL = Symbol("component");
  const LEGACY_PROPS = Symbol("legacy props");
  const LOADING_ATTR_SYMBOL = Symbol("");
  const ATTRIBUTES_CACHE = Symbol("attributes");
  const CLASS_CACHE = Symbol("class");
  const STYLE_CACHE = Symbol("style");
  const TEXT_CACHE = Symbol("text");
  const FORM_RESET_HANDLER = Symbol("form reset");
  const STALE_REACTION = new class StaleReactionError extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  const IS_XHTML = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
  );
  const ELEMENT_NODE = 1;
  const TEXT_NODE = 3;
  const COMMENT_NODE = 8;
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const PROPS_IS_IMMUTABLE = 1;
  const PROPS_IS_UPDATED = 1 << 2;
  const PROPS_IS_BINDABLE = 1 << 3;
  const PROPS_IS_LAZY_INITIAL = 1 << 4;
  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const HYDRATION_START = "[";
  const HYDRATION_START_ELSE = "[!";
  const HYDRATION_START_FAILED = "[?";
  const HYDRATION_END = "]";
  const HYDRATION_ERROR = {};
  const UNINITIALIZED = Symbol("uninitialized");
  const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
  const NAMESPACE_SVG = "http://www.w3.org/2000/svg";
  const NAMESPACE_MATHML = "http://www.w3.org/1998/Math/MathML";
  const ATTACHMENT_KEY = "@attach";
  function derived_inert() {
    {
      console.warn(`https://svelte.dev/e/derived_inert`);
    }
  }
  function hydration_mismatch(location) {
    {
      console.warn(`https://svelte.dev/e/hydration_mismatch`);
    }
  }
  function select_multiple_invalid_value() {
    {
      console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
    }
  }
  function svelte_boundary_reset_noop() {
    {
      console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
    }
  }
  let hydrating = false;
  function set_hydrating(value) {
    hydrating = value;
  }
  let hydrate_node;
  function set_hydrate_node(node) {
    if (node === null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return hydrate_node = node;
  }
  function hydrate_next() {
    return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
  }
  function reset(node) {
    if (!hydrating) return;
    if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    hydrate_node = node;
  }
  function next(count = 1) {
    if (hydrating) {
      var i = count;
      var node = hydrate_node;
      while (i--) {
        node = /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node);
      }
      hydrate_node = node;
    }
  }
  function skip_nodes(remove = true) {
    var depth = 0;
    var node = hydrate_node;
    while (true) {
      if (node.nodeType === COMMENT_NODE) {
        var data = (
          /** @type {Comment} */
          node.data
        );
        if (data === HYDRATION_END) {
          if (depth === 0) return node;
          depth -= 1;
        } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE || // "[1", "[2", etc. for if blocks
        data[0] === "[" && !isNaN(Number(data.slice(1)))) {
          depth += 1;
        }
      }
      var next2 = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      if (remove) node.remove();
      node = next2;
    }
  }
  function read_hydration_instruction(node) {
    if (!node || node.nodeType !== COMMENT_NODE) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return (
      /** @type {Comment} */
      node.data
    );
  }
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  function lifecycle_outside_component(name) {
    {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }
  function async_derived_orphan() {
    {
      throw new Error(`https://svelte.dev/e/async_derived_orphan`);
    }
  }
  function each_key_duplicate(a, b, value) {
    {
      throw new Error(`https://svelte.dev/e/each_key_duplicate`);
    }
  }
  function effect_in_teardown(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function props_invalid_value(key) {
    {
      throw new Error(`https://svelte.dev/e/props_invalid_value`);
    }
  }
  function state_descriptors_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  function svelte_boundary_reset_onerror() {
    {
      throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
    }
  }
  let tracing_mode_flag = false;
  function get_parent_context(context) {
    let parent = context.p;
    while (parent !== null && parent.c === null) {
      parent = parent.p;
    }
    return parent?.c ?? null;
  }
  function get_or_init_context_map(context, name) {
    if (context === null) {
      lifecycle_outside_component();
    }
    return context.c ?? (context.c = new Map(get_parent_context(context) || void 0));
  }
  let component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  function getContext(key) {
    const context_map = get_or_init_context_map(component_context);
    const result = (
      /** @type {T} */
      context_map.get(key)
    );
    return result;
  }
  function setContext(key, context) {
    const context_map = get_or_init_context_map(component_context);
    context_map.set(key, context);
    return context;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      i: false,
      c: null,
      e: null,
      s: props,
      x: null,
      r: (
        /** @type {Effect} */
        active_effect
      ),
      l: null
    };
  }
  function pop(component) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    var effects = context.e;
    if (effects !== null) {
      context.e = null;
      for (var fn of effects) {
        create_user_effect(fn);
      }
    }
    context.i = true;
    component_context = context.p;
    return mark_as_component(component);
  }
  function mark_as_component(component = {}) {
    define_property(component, COMPONENT_SYMBOL, { value: true });
    return component;
  }
  function is_runes() {
    return true;
  }
  let micro_tasks = [];
  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0 && !is_flushing_sync) {
      var tasks = micro_tasks;
      queueMicrotask(() => {
        if (tasks === micro_tasks) run_micro_tasks();
      });
    }
    micro_tasks.push(fn);
  }
  function flush_tasks() {
    while (micro_tasks.length > 0) {
      run_micro_tasks();
    }
  }
  const STATUS_MASK = -7169;
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function update_derived_status(derived2) {
    if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
      set_signal_status(derived2, CLEAN);
    } else {
      set_signal_status(derived2, MAYBE_DIRTY);
    }
  }
  function defer_effect(effect2, dirty_reactions) {
    if ((effect2.f & DIRTY) !== 0) {
      dirty_reactions.set(effect2, DIRTY);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0 && dirty_reactions.get(effect2) !== DIRTY) {
      dirty_reactions.set(effect2, MAYBE_DIRTY);
    }
    set_signal_status(effect2, CLEAN);
  }
  function autofocus(dom, value) {
    if (value) {
      const body = document.body;
      dom.autofocus = true;
      queue_micro_task(() => {
        if (document.activeElement === body) {
          dom.focus();
        }
      });
    }
  }
  function remove_textarea_child(dom) {
    if (hydrating && /* @__PURE__ */ get_first_child(dom) !== null) {
      clear_text_content(dom);
    }
  }
  let listening_to_form_reset = false;
  function add_form_reset_listener() {
    if (!listening_to_form_reset) {
      listening_to_form_reset = true;
      document.addEventListener(
        "reset",
        (evt) => {
          Promise.resolve().then(() => {
            if (!evt.defaultPrevented) {
              for (
                const e of
                /**@type {HTMLFormElement} */
                evt.target.elements
              ) {
                e[FORM_RESET_HANDLER]?.();
              }
            }
          });
        },
        // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
        { capture: true }
      );
    }
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function listen_to_event_and_reset_event(element2, event, handler, on_reset = handler) {
    element2.addEventListener(event, () => without_reactive_context(handler));
    const prev = (
      /** @type {any} */
      element2[FORM_RESET_HANDLER]
    );
    if (prev) {
      element2[FORM_RESET_HANDLER] = () => {
        prev();
        on_reset(true);
      };
    } else {
      element2[FORM_RESET_HANDLER] = () => on_reset(true);
    }
    add_form_reset_listener();
  }
  function flatten(blockers, sync, async, fn) {
    const d = derived;
    var pending = blockers.filter((b) => !b.settled);
    var deriveds = sync.map(d);
    if (async.length === 0 && pending.length === 0) {
      fn(deriveds);
      return;
    }
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    var restore = capture();
    var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
    function finish(async2) {
      if ((parent.f & DESTROYED) !== 0) {
        return;
      }
      restore();
      try {
        fn([...deriveds, ...async2]);
      } catch (error) {
        invoke_error_boundary(error, parent);
      }
      unset_context();
    }
    var decrement_pending = increment_pending();
    if (async.length === 0) {
      blocker_promise.then(() => finish([])).finally(decrement_pending);
      return;
    }
    function run() {
      Promise.all(async.map((expression) => /* @__PURE__ */ async_derived(expression))).then(finish).catch((error) => invoke_error_boundary(error, parent)).finally(decrement_pending);
    }
    if (blocker_promise) {
      blocker_promise.then(() => {
        if ((parent.f & DESTROYED) !== 0) {
          decrement_pending();
          return;
        }
        restore();
        run();
        unset_context();
      });
    } else {
      run();
    }
  }
  function capture() {
    var previous_effect = (
      /** @type {Effect} */
      active_effect
    );
    var previous_reaction = active_reaction;
    var previous_component_context = component_context;
    var previous_batch2 = (
      /** @type {Batch} */
      current_batch
    );
    return function restore(activate_batch = true) {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_component_context);
      if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
        previous_batch2?.activate();
        previous_batch2?.apply();
      }
    };
  }
  function unset_context(deactivate_batch = true) {
    set_active_effect(null);
    set_active_reaction(null);
    set_component_context(null);
    if (deactivate_batch) current_batch?.deactivate();
  }
  function increment_pending() {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    var boundary2 = effect2.b;
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var blocking = !!boundary2?.is_rendered();
    boundary2?.update_pending_count(1, batch);
    batch.increment(blocking, effect2);
    return () => {
      boundary2?.update_pending_count(-1, batch);
      batch.decrement(blocking, effect2);
    };
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags2 = DERIVED | DIRTY;
    if (active_effect !== null) {
      active_effect.f |= EFFECT_PRESERVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags2,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        UNINITIALIZED
      ),
      wv: 0,
      parent: active_effect,
      ac: null
    };
    return signal;
  }
  const OBSOLETE = Symbol("obsolete");
  // @__NO_SIDE_EFFECTS__
  function async_derived(fn, label, location) {
    let parent = (
      /** @type {Effect | null} */
      active_effect
    );
    if (parent === null) {
      async_derived_orphan();
    }
    var promise = (
      /** @type {Promise<V>} */
      /** @type {unknown} */
      void 0
    );
    var signal = source(
      /** @type {V} */
      UNINITIALIZED
    );
    var should_suspend = !active_reaction;
    var deferreds = /* @__PURE__ */ new Set();
    async_effect(() => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      var d = deferred();
      promise = d.promise;
      try {
        Promise.resolve(fn()).then(d.resolve, (e) => {
          if (e !== STALE_REACTION) d.reject(e);
        }).finally(unset_context);
      } catch (error) {
        d.reject(error);
        unset_context();
      }
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      if (should_suspend) {
        if ((effect2.f & REACTION_RAN) !== 0) {
          var decrement_pending = increment_pending();
        }
        if (
          // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
          parent.b?.is_rendered()
        ) {
          batch.async_deriveds.get(effect2)?.reject(OBSOLETE);
        } else {
          for (const d2 of deferreds.values()) {
            d2.reject(OBSOLETE);
          }
        }
        deferreds.add(d);
        batch.async_deriveds.set(effect2, d);
      }
      const handler = (value, error = void 0) => {
        decrement_pending?.();
        deferreds.delete(d);
        if (error === OBSOLETE) return;
        batch.activate();
        if (error) {
          signal.f |= ERROR_VALUE;
          internal_set(signal, error);
        } else {
          if ((signal.f & ERROR_VALUE) !== 0) {
            signal.f ^= ERROR_VALUE;
          }
          internal_set(signal, value);
        }
        batch.deactivate();
      };
      d.promise.then(handler, (e) => handler(null, e || "unknown"));
    });
    teardown(() => {
      for (const d of deferreds) {
        d.reject(OBSOLETE);
      }
    });
    return new Promise((fulfil) => {
      function next2(p) {
        function go() {
          if (p === promise) {
            fulfil(signal);
          } else {
            next2(promise);
          }
        }
        p.then(go, go);
      }
      next2(promise);
    });
  }
  // @__NO_SIDE_EFFECTS__
  function user_derived(fn) {
    const d = /* @__PURE__ */ derived(fn);
    push_reaction_value(d);
    return d;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    var parent = derived2.parent;
    if (!is_destroying_effect && parent !== null && derived2.v !== UNINITIALIZED && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
    (parent.f & (DESTROYED | INERT)) !== 0) {
      derived_inert();
      return derived2.v;
    }
    set_active_effect(parent);
    {
      try {
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    if (!derived2.equals(value)) {
      derived2.wv = increment_write_version();
      if (!current_batch?.is_fork || derived2.deps === null) {
        if (current_batch !== null) {
          current_batch.capture(derived2, value, true);
          previous_batch?.capture(derived2, value, true);
        } else {
          derived2.v = value;
        }
        if (derived2.deps === null) {
          set_signal_status(derived2, CLEAN);
          return;
        }
      }
    }
    if (is_destroying_effect) {
      return;
    }
    if (batch_values !== null) {
      if (effect_tracking() || current_batch?.is_fork) {
        batch_values.set(derived2, value);
      }
    } else {
      update_derived_status(derived2);
    }
  }
  function freeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown || e.ac) {
        e.teardown?.();
        if (e.ac !== null) {
          without_reactive_context(() => {
            e.ac.abort(STALE_REACTION);
            e.ac = null;
          });
        }
        if (e.fn !== null) e.teardown = noop;
        remove_reactions(e, 0);
        destroy_effect_children(e);
      }
    }
  }
  function unfreeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown && e.fn !== null) {
        update_effect(e);
      }
    }
  }
  let first_batch = null;
  let last_batch = null;
  let current_batch = null;
  let previous_batch = null;
  let batch_values = null;
  let last_scheduled_effect = null;
  let is_flushing_sync = false;
  let is_processing = false;
  let collected_effects = null;
  let legacy_updates = null;
  var flush_count = 0;
  var source_stacks = /* @__PURE__ */ new Set();
  let uid = 1;
  const _Batch = class _Batch {
    constructor() {
      __privateAdd(this, _Batch_instances);
      __publicField(this, "id", uid++);
      /** True as soon as `#process` was called */
      __publicField(this, "started", false);
      __publicField(this, "linked", true);
      /** @type {Batch | null} */
      __publicField(this, "prev", null);
      /** @type {Batch | null} */
      __publicField(this, "next", null);
      /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
      __publicField(this, "async_deriveds", /* @__PURE__ */ new Map());
      /**
       * The current values of any signals that are updated in this batch.
       * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
       * The keys of this map are identical to `this.previous`
       * @type {Map<Value, [any, boolean]>}
       */
      __publicField(this, "current", /* @__PURE__ */ new Map());
      /**
       * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
       * The keys of this map are identical to `this.current`
       * @type {Map<Value, any>}
       */
      __publicField(this, "previous", /* @__PURE__ */ new Map());
      /**
       * When the batch is committed (and the DOM is updated), we need to remove old branches
       * and append new ones by calling the functions added inside (if/each/key/etc) blocks
       * @type {Set<(batch: Batch) => void>}
       */
      __privateAdd(this, _commit_callbacks, /* @__PURE__ */ new Set());
      /**
       * If a fork is discarded, we need to destroy any effects that are no longer needed
       * @type {Set<(batch: Batch) => void>}
       */
      __privateAdd(this, _discard_callbacks, /* @__PURE__ */ new Set());
      /**
       * The number of async effects that are currently in flight
       */
      __privateAdd(this, _pending, 0);
      /**
       * Async effects that are currently in flight, _not_ inside a pending boundary
       * @type {Map<Effect, number>}
       */
      __privateAdd(this, _blocking_pending, /* @__PURE__ */ new Map());
      /**
       * A deferred that resolves when the batch is committed, used with `settled()`
       * TODO replace with Promise.withResolvers once supported widely enough
       * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
       */
      __privateAdd(this, _deferred, null);
      /**
       * Effects that were scheduled in this batch but not yet 'resolved' into the
       * root effects that need to be flushed. Resolving — the upwards traversal that
       * marks the path to each effect on the shared effect tree (see #resolve) — is
       * deferred until the batch is processed, so that the markers are created and
       * consumed within a single traversal. Scheduling into other batches (which can
       * happen concurrently, e.g. while a batch is committed) can therefore never
       * observe (and be confused by) this batch's markers.
       * May contain duplicates — deduplication happens during resolving
       * @type {Effect[]}
       */
      __privateAdd(this, _scheduled, []);
      /**
       * Effects created while this batch was active.
       * @type {Effect[]}
       */
      __privateAdd(this, _new_effects, []);
      /**
       * Deferred effects (which run after async work has completed) and their status (DIRTY or MAYBE_DIRTY)
       * @type {Map<Effect, number>}
       */
      __privateAdd(this, _dirty_reactions, /* @__PURE__ */ new Map());
      /**
       * A map of branches that still exist, but will be destroyed when this batch
       * is committed — we skip over these during `process`.
       * The value contains child effects that were dirty/maybe_dirty before being reset,
       * so they can be rescheduled if the branch survives.
       * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
       */
      __privateAdd(this, _skipped_branches, /* @__PURE__ */ new Map());
      /**
       * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
       * @type {Set<Effect>}
       */
      __privateAdd(this, _unskipped_branches, /* @__PURE__ */ new Set());
      __publicField(this, "is_fork", false);
      __privateAdd(this, _decrement_queued, false);
      if (last_batch === null) {
        first_batch = last_batch = this;
      } else {
        last_batch.next = this;
        this.prev = last_batch;
      }
      last_batch = this;
    }
    /**
     * Add an effect to the #skipped_branches map and reset its children
     * @param {Effect} effect
     */
    skip_effect(effect2) {
      if (!__privateGet(this, _skipped_branches).has(effect2)) {
        __privateGet(this, _skipped_branches).set(effect2, { d: [], m: [] });
      }
      __privateGet(this, _unskipped_branches).delete(effect2);
    }
    /**
     * Remove an effect from the #skipped_branches map and reschedule
     * any tracked dirty/maybe_dirty child effects
     * @param {Effect} effect
     * @param {(e: Effect) => void} callback
     */
    unskip_effect(effect2, callback = (e) => this.schedule(e)) {
      var tracked = __privateGet(this, _skipped_branches).get(effect2);
      if (tracked) {
        __privateGet(this, _skipped_branches).delete(effect2);
        for (var e of tracked.d) {
          set_signal_status(e, DIRTY);
          callback(e);
        }
        for (e of tracked.m) {
          set_signal_status(e, MAYBE_DIRTY);
          callback(e);
        }
      }
      __privateGet(this, _unskipped_branches).add(effect2);
    }
    /**
     * Associate a change to a given source with the current
     * batch, noting its previous and current values
     * @param {Value} source
     * @param {any} value
     * @param {boolean} [is_derived]
     */
    capture(source2, value, is_derived = false) {
      if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
        this.previous.set(source2, source2.v);
      }
      if ((source2.f & ERROR_VALUE) === 0) {
        this.current.set(source2, [value, is_derived]);
        batch_values?.set(source2, value);
      }
      if (!this.is_fork) {
        source2.v = value;
      }
    }
    activate() {
      current_batch = this;
    }
    deactivate() {
      current_batch = null;
      batch_values = null;
    }
    flush() {
      try {
        if (DEV) ;
        is_processing = true;
        current_batch = this;
        __privateMethod(this, _Batch_instances, process_fn).call(this);
      } finally {
        flush_count = 0;
        last_scheduled_effect = null;
        collected_effects = null;
        legacy_updates = null;
        is_processing = false;
        current_batch = null;
        batch_values = null;
        old_values.clear();
      }
    }
    discard() {
      for (const fn of __privateGet(this, _discard_callbacks)) fn(this);
      __privateGet(this, _discard_callbacks).clear();
      for (const deferred2 of this.async_deriveds.values()) {
        deferred2.reject(OBSOLETE);
      }
      __privateMethod(this, _Batch_instances, unlink_fn).call(this);
      __privateGet(this, _deferred)?.resolve();
    }
    /**
     * @param {Effect} effect
     */
    register_created_effect(effect2) {
      __privateGet(this, _new_effects).push(effect2);
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     */
    increment(blocking, effect2) {
      __privateSet(this, _pending, __privateGet(this, _pending) + 1);
      if (blocking) {
        let blocking_pending_count = __privateGet(this, _blocking_pending).get(effect2) ?? 0;
        __privateGet(this, _blocking_pending).set(effect2, blocking_pending_count + 1);
      }
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     */
    decrement(blocking, effect2) {
      __privateSet(this, _pending, __privateGet(this, _pending) - 1);
      if (blocking) {
        let blocking_pending_count = __privateGet(this, _blocking_pending).get(effect2) ?? 0;
        if (blocking_pending_count === 1) {
          __privateGet(this, _blocking_pending).delete(effect2);
        } else {
          __privateGet(this, _blocking_pending).set(effect2, blocking_pending_count - 1);
        }
      }
      if (__privateGet(this, _decrement_queued)) return;
      __privateSet(this, _decrement_queued, true);
      queue_micro_task(() => {
        __privateSet(this, _decrement_queued, false);
        if (this.linked) {
          this.flush();
        }
      });
    }
    /**
     * @param {Map<Effect, number>} dirty_reactions
     */
    transfer_reactions(dirty_reactions) {
      for (const [effect2, status] of dirty_reactions) {
        this.add_dirty_reaction(effect2, status);
      }
      dirty_reactions.clear();
    }
    /**
     * @param {Effect} effect
     * @param {number} status
     */
    add_dirty_reaction(effect2, status) {
      if (status === DIRTY || __privateGet(this, _dirty_reactions).get(effect2) !== DIRTY) {
        __privateGet(this, _dirty_reactions).set(effect2, status);
      }
    }
    /** @param {(batch: Batch) => void} fn */
    oncommit(fn) {
      __privateGet(this, _commit_callbacks).add(fn);
    }
    /** @param {(batch: Batch) => void} fn */
    ondiscard(fn) {
      __privateGet(this, _discard_callbacks).add(fn);
    }
    settled() {
      return (__privateGet(this, _deferred) ?? __privateSet(this, _deferred, deferred())).promise;
    }
    static ensure() {
      if (current_batch === null) {
        const batch = current_batch = new _Batch();
        if (!is_processing && !is_flushing_sync) {
          queue_micro_task(() => {
            if (!batch.started) {
              batch.flush();
            }
          });
        }
      }
      return current_batch;
    }
    apply() {
      {
        batch_values = null;
        return;
      }
    }
    /**
     *
     * @param {Effect} effect
     */
    schedule(effect2) {
      last_scheduled_effect = effect2;
      if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
        effect2.b.defer_effect(effect2);
        return;
      }
      __privateGet(this, _scheduled).push(effect2);
    }
  };
  _commit_callbacks = new WeakMap();
  _discard_callbacks = new WeakMap();
  _pending = new WeakMap();
  _blocking_pending = new WeakMap();
  _deferred = new WeakMap();
  _scheduled = new WeakMap();
  _new_effects = new WeakMap();
  _dirty_reactions = new WeakMap();
  _skipped_branches = new WeakMap();
  _unskipped_branches = new WeakMap();
  _decrement_queued = new WeakMap();
  _Batch_instances = new WeakSet();
  is_deferred_fn = function() {
    if (this.is_fork) return true;
    for (const effect2 of __privateGet(this, _blocking_pending).keys()) {
      if (!__privateMethod(this, _Batch_instances, is_skipped_fn).call(this, effect2)) {
        return true;
      }
    }
    return false;
  };
  /**
   * Whether `effect` is inside a branch that this batch skips
   * @param {Effect} effect
   */
  is_skipped_fn = function(effect2) {
    for (var e = (
      /** @type {Effect | null} */
      effect2
    ); e !== null; e = e.parent) {
      if (__privateGet(this, _skipped_branches).has(e)) return true;
    }
    return false;
  };
  /**
   * Convert the effects that were scheduled in this batch into the root effects
   * that need to be traversed, marking the path to each effect (by clearing the
   * `CLEAN` flag on ancestor branches) so that the traversal can find them.
   * This happens right before traversal rather than at scheduling time, so that
   * the markers left on the (shared) effect tree are created and consumed within
   * a single traversal — scheduling into other batches can never observe them
   * @returns {Effect[]}
   */
  resolve_fn = function() {
    var roots = [];
    for (const effect2 of __privateGet(this, _scheduled)) {
      if ((effect2.f & DESTROYED) !== 0 || (effect2.f & (DIRTY | MAYBE_DIRTY)) === 0) continue;
      var e = effect2;
      var covered = false;
      while (e.parent !== null) {
        e = e.parent;
        var flags2 = e.f;
        if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
          if ((flags2 & CLEAN) === 0) {
            covered = true;
            break;
          }
          e.f ^= CLEAN;
        }
      }
      if (!covered) {
        roots.push(e);
      }
    }
    __privateSet(this, _scheduled, []);
    return roots;
  };
  process_fn = function() {
    var _a2, _b, _c;
    this.started = true;
    for (const [e, status] of __privateGet(this, _dirty_reactions)) {
      set_signal_status(e, status);
      this.schedule(e);
    }
    this.apply();
    var effects = collected_effects = [];
    var render_effects = [];
    var updates = legacy_updates = [];
    while (__privateGet(this, _scheduled).length > 0) {
      if (flush_count++ > 1e3) {
        __privateMethod(this, _Batch_instances, unlink_fn).call(this);
        infinite_loop_guard();
      }
      for (const root2 of __privateMethod(this, _Batch_instances, resolve_fn).call(this)) {
        try {
          __privateMethod(this, _Batch_instances, traverse_fn).call(this, root2, effects, render_effects);
        } catch (e) {
          reset_all(root2);
          if (!__privateMethod(this, _Batch_instances, is_deferred_fn).call(this)) this.discard();
          throw e;
        }
      }
    }
    current_batch = null;
    if (updates.length > 0) {
      var batch = _Batch.ensure();
      for (const e of updates) {
        batch.schedule(e);
      }
    }
    collected_effects = null;
    legacy_updates = null;
    if (__privateMethod(this, _Batch_instances, is_deferred_fn).call(this)) {
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, render_effects);
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, effects);
      for (const [e, t] of __privateGet(this, _skipped_branches)) {
        reset_branch(e, t);
      }
      if (updates.length > 0) {
        /** @type {unknown} */
        __privateMethod(_a2 = current_batch, _Batch_instances, process_fn).call(_a2);
      }
      return;
    }
    const earlier_batch = __privateMethod(this, _Batch_instances, find_earlier_batch_fn).call(this);
    if (earlier_batch) {
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, render_effects);
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, effects);
      __privateMethod(_b = earlier_batch, _Batch_instances, merge_fn).call(_b, this);
      return;
    }
    __privateGet(this, _dirty_reactions).clear();
    for (const fn of __privateGet(this, _commit_callbacks)) fn(this);
    __privateGet(this, _commit_callbacks).clear();
    previous_batch = this;
    flush_queued_effects(render_effects);
    flush_queued_effects(effects);
    previous_batch = null;
    __privateGet(this, _deferred)?.resolve();
    var next_batch = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      current_batch
    );
    if (__privateGet(this, _pending) === 0 && (__privateGet(this, _scheduled).length === 0 || next_batch !== null)) {
      __privateMethod(this, _Batch_instances, unlink_fn).call(this);
    }
    if (next_batch !== null) {
      old_values.clear();
      __privateMethod(_c = next_batch, _Batch_instances, process_fn).call(_c);
    }
  };
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  traverse_fn = function(root2, effects, render_effects) {
    root2.f ^= CLEAN;
    var effect2 = root2.first;
    while (effect2 !== null) {
      var flags2 = effect2.f;
      var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
      var skip = is_skippable_branch || (flags2 & INERT) !== 0 || __privateGet(this, _skipped_branches).has(effect2);
      if (!skip && effect2.fn !== null) {
        if (is_branch) {
          effect2.f ^= CLEAN;
        } else if ((flags2 & EFFECT) !== 0) {
          effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((flags2 & BLOCK_EFFECT) !== 0) this.add_dirty_reaction(effect2, MAYBE_DIRTY);
          update_effect(effect2);
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      while (effect2 !== null) {
        var next2 = effect2.next;
        if (next2 !== null) {
          effect2 = next2;
          break;
        }
        effect2 = effect2.parent;
      }
    }
  };
  find_earlier_batch_fn = function() {
    for (var batch = this.prev; batch !== null; batch = batch.prev) {
      if (!batch.is_fork && __privateMethod(this, _Batch_instances, intersects_fn).call(this, batch)) return batch;
    }
    return null;
  };
  /** @param {Batch} batch */
  intersects_fn = function(batch) {
    for (const [source2, [, is_derived]] of this.current) {
      if (is_derived) continue;
      if (batch.current.has(source2)) return true;
    }
    return false;
  };
  /**
   * @param {Batch} batch
   */
  merge_fn = function(batch) {
    var _a2;
    for (const [source2, value] of batch.current) {
      if (!this.previous.has(source2) && batch.previous.has(source2)) {
        this.previous.set(source2, batch.previous.get(source2));
      }
      this.current.set(source2, value);
    }
    for (const [effect2, deferred2] of batch.async_deriveds) {
      const d = this.async_deriveds.get(effect2);
      if (d) deferred2.promise.then(d.resolve).catch(d.reject);
    }
    batch.async_deriveds.clear();
    this.transfer_reactions(__privateGet(batch, _dirty_reactions));
    const mark = (value) => {
      var reactions = value.reactions;
      if (reactions === null) return;
      if ((value.f & DERIVED) !== 0 && (value.f & (DIRTY | MAYBE_DIRTY)) === 0) {
        return;
      }
      for (const reaction of reactions) {
        var flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark(
            /** @type {Derived} */
            reaction
          );
        } else {
          var effect2 = (
            /** @type {Effect} */
            reaction
          );
          if (flags2 & (ASYNC | BLOCK_EFFECT) && !this.async_deriveds.has(effect2)) {
            __privateGet(this, _dirty_reactions).delete(effect2);
            set_signal_status(effect2, DIRTY);
            this.schedule(effect2);
          }
        }
      }
    };
    for (const source2 of this.current.keys()) {
      mark(source2);
    }
    this.oncommit(() => batch.discard());
    __privateMethod(_a2 = batch, _Batch_instances, unlink_fn).call(_a2);
    current_batch = this;
    __privateMethod(this, _Batch_instances, process_fn).call(this);
  };
  /**
   * @param {Effect[]} effects
   */
  defer_effects_fn = function(effects) {
    for (var i = 0; i < effects.length; i += 1) {
      defer_effect(effects[i], __privateGet(this, _dirty_reactions));
    }
  };
  commit_fn = function() {
    var _a2, _b;
    for (let batch = first_batch; batch !== null; batch = batch.next) {
      var is_earlier = batch.id < this.id;
      var sources = [];
      for (const [source3, [value, is_derived]] of this.current) {
        if (batch.current.has(source3)) {
          var batch_value = (
            /** @type {[any, boolean]} */
            batch.current.get(source3)[0]
          );
          if (is_earlier && value !== batch_value) {
            batch.current.set(source3, [value, is_derived]);
          } else {
            continue;
          }
        }
        sources.push(source3);
      }
      if (is_earlier) {
        for (const [effect2, deferred2] of this.async_deriveds) {
          const d = batch.async_deriveds.get(effect2);
          if (d) deferred2.promise.then(d.resolve).catch(d.reject);
        }
      }
      var current = [...batch.current.keys()].filter(
        (source3) => !/** @type {[any, boolean]} */
        batch.current.get(source3)[1]
      );
      if (!batch.started || current.length === 0) continue;
      var others = current.filter((source3) => !this.current.has(source3));
      if (others.length === 0) {
        if (is_earlier) {
          batch.discard();
        }
      } else if (sources.length > 0) {
        if (is_earlier) {
          for (const unskipped of __privateGet(this, _unskipped_branches)) {
            batch.unskip_effect(unskipped, (e) => {
              var _a3;
              if ((e.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                batch.schedule(e);
              } else {
                __privateMethod(_a3 = batch, _Batch_instances, defer_effects_fn).call(_a3, [e]);
              }
            });
          }
        }
        batch.activate();
        var marked = /* @__PURE__ */ new Set();
        var checked = /* @__PURE__ */ new Map();
        for (var source2 of sources) {
          mark_effects(source2, others, marked, checked);
        }
        checked = /* @__PURE__ */ new Map();
        var current_unequal = [...batch.current].filter(([c, v1]) => {
          const v2 = this.current.get(c);
          if (!v2) return true;
          return v2[0] !== v1[0] || v2[1] !== v1[1];
        }).map(([c]) => c);
        if (current_unequal.length > 0) {
          for (const effect2 of __privateGet(this, _new_effects)) {
            if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
              if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
                set_signal_status(effect2, DIRTY);
                batch.schedule(effect2);
              } else {
                batch.add_dirty_reaction(effect2, DIRTY);
              }
            }
          }
        }
        if (__privateGet(batch, _scheduled).length > 0 && !__privateGet(batch, _decrement_queued)) {
          batch.apply();
          for (var root2 of __privateMethod(_a2 = batch, _Batch_instances, resolve_fn).call(_a2)) {
            __privateMethod(_b = batch, _Batch_instances, traverse_fn).call(_b, root2, [], []);
          }
        }
        batch.deactivate();
      }
    }
  };
  unlink_fn = function() {
    if (!this.linked) return;
    var prev = this.prev;
    var next2 = this.next;
    if (prev === null) {
      first_batch = next2;
    } else {
      prev.next = next2;
    }
    if (next2 === null) {
      last_batch = prev;
    } else {
      next2.prev = prev;
    }
    this.linked = false;
  };
  let Batch = _Batch;
  function flushSync(fn) {
    var was_flushing_sync = is_flushing_sync;
    var prev_previous_batch = previous_batch;
    previous_batch = null;
    is_flushing_sync = true;
    try {
      var result;
      if (fn) ;
      while (true) {
        flush_tasks();
        if (current_batch === null) {
          return (
            /** @type {T} */
            result
          );
        }
        current_batch.flush();
      }
    } finally {
      is_flushing_sync = was_flushing_sync;
      previous_batch = prev_previous_batch;
    }
  }
  function infinite_loop_guard() {
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      invoke_error_boundary(error, last_scheduled_effect);
    }
  }
  let eager_block_effects = null;
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    var i = 0;
    while (i < length) {
      var effect2 = effects[i++];
      if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
        eager_block_effects = /* @__PURE__ */ new Set();
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
          unlink_effect(effect2);
        }
        if (eager_block_effects?.size > 0) {
          old_values.clear();
          for (const e of eager_block_effects) {
            if ((e.f & (DESTROYED | INERT)) !== 0) continue;
            const ordered_effects = [e];
            let ancestor = e.parent;
            while (ancestor !== null) {
              if (eager_block_effects.has(ancestor)) {
                eager_block_effects.delete(ancestor);
                ordered_effects.push(ancestor);
              }
              ancestor = ancestor.parent;
            }
            for (let j = ordered_effects.length - 1; j >= 0; j--) {
              const e2 = ordered_effects[j];
              if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
              update_effect(e2);
            }
          }
          eager_block_effects.clear();
        }
      }
    }
    eager_block_effects = null;
  }
  function mark_effects(value, sources, marked, checked) {
    if (marked.has(value)) return;
    marked.add(value);
    if (value.reactions !== null) {
      for (const reaction of value.reactions) {
        const flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark_effects(
            /** @type {Derived} */
            reaction,
            sources,
            marked,
            checked
          );
        } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
          set_signal_status(reaction, DIRTY);
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  function depends_on(reaction, sources, checked) {
    const depends = checked.get(reaction);
    if (depends !== void 0) return depends;
    if (reaction.deps !== null) {
      for (const dep of reaction.deps) {
        if (includes.call(sources, dep)) {
          return true;
        }
        if ((dep.f & DERIVED) !== 0 && depends_on(
          /** @type {Derived} */
          dep,
          sources,
          checked
        )) {
          checked.set(
            /** @type {Derived} */
            dep,
            true
          );
          return true;
        }
      }
    }
    checked.set(reaction, false);
    return false;
  }
  function schedule_effect(effect2) {
    current_batch.schedule(effect2);
  }
  function reset_branch(effect2, tracked) {
    if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
      return;
    }
    if ((effect2.f & DIRTY) !== 0) {
      tracked.d.push(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      tracked.m.push(effect2);
    }
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_branch(e, tracked);
      e = e.next;
    }
  }
  function reset_all(effect2) {
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_all(e);
      e = e.next;
    }
  }
  let eager_effects = /* @__PURE__ */ new Set();
  const old_values = /* @__PURE__ */ new Map();
  let eager_effects_deferred = false;
  function source(v, stack) {
    var signal = {
      f: 0,
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function state(v, stack) {
    const s = source(v);
    push_reaction_value(s);
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false, trackable = true) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    return s;
  }
  function set(source2, value, should_proxy = false) {
    if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !current_sources.has(source2))) {
      state_unsafe_mutation();
    }
    let new_value = should_proxy ? proxy(value) : value;
    return internal_set(source2, new_value, legacy_updates);
  }
  var seen = null;
  var count_deps = 0;
  function internal_set(source2, value, updated_during_traversal = null) {
    if (!source2.equals(value)) {
      if (is_destroying_effect) {
        old_values.set(source2, value);
      } else if (!old_values.has(source2)) {
        old_values.set(source2, source2.v);
      }
      var batch = Batch.ensure();
      batch.capture(source2, value);
      if ((source2.f & DERIVED) !== 0) {
        const derived2 = (
          /** @type {Derived} */
          source2
        );
        if ((source2.f & DIRTY) !== 0) {
          execute_derived(derived2);
        }
        if (batch_values === null) {
          update_derived_status(derived2);
        }
      }
      source2.wv = increment_write_version();
      seen = null;
      count_deps = 0;
      mark_reactions(source2, DIRTY, updated_during_traversal);
      seen = null;
      if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
      if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
        flush_eager_effects();
      }
    }
    return value;
  }
  function flush_eager_effects() {
    eager_effects_deferred = false;
    for (const effect2 of eager_effects) {
      if ((effect2.f & CLEAN) !== 0) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      let dirty;
      try {
        dirty = is_dirty(effect2);
      } catch {
        dirty = true;
      }
      if (dirty) {
        update_effect(effect2);
      }
    }
    eager_effects.clear();
  }
  function increment(source2) {
    set(source2, source2.v + 1);
  }
  function mark_reactions(signal, status, updated_during_traversal) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var length = reactions.length;
    count_deps += length;
    if (count_deps > 1e5 && seen === null) seen = /* @__PURE__ */ new Set();
    if (seen !== null) {
      if (seen.has(signal)) return;
      seen.add(signal);
    }
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags2 = reaction.f;
      var not_dirty = (flags2 & DIRTY) === 0;
      if (not_dirty) {
        set_signal_status(reaction, status);
      }
      if ((flags2 & EAGER_EFFECT) !== 0) {
        eager_effects.add(
          /** @type {Effect} */
          reaction
        );
      } else if ((flags2 & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          reaction
        );
        batch_values?.delete(derived2);
        mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
      } else if (not_dirty) {
        var effect2 = (
          /** @type {Effect} */
          reaction
        );
        if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
          eager_block_effects.add(effect2);
        }
        if (updated_during_traversal !== null) {
          updated_during_traversal.push(effect2);
        } else {
          schedule_effect(effect2);
        }
      }
    }
  }
  function proxy(value) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value || COMPONENT_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = /* @__PURE__ */ state(0);
    var parent_version = update_version;
    var with_parent = (fn) => {
      if (update_version === parent_version) {
        return fn();
      }
      var reaction = active_reaction;
      var version2 = update_version;
      set_active_reaction(null);
      set_update_version(parent_version);
      var result = fn();
      set_active_reaction(reaction);
      set_update_version(version2);
      return result;
    };
    if (is_proxied_array) {
      sources.set("length", /* @__PURE__ */ state(
        /** @type {any[]} */
        value.length
      ));
    }
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            with_parent(() => {
              var s2 = /* @__PURE__ */ state(descriptor.value);
              sources.set(prop2, s2);
              return s2;
            });
          } else {
            set(s, descriptor.value, true);
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              const s2 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(prop2, s2);
              increment(version);
            }
          } else {
            set(s, UNINITIALIZED);
            increment(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
            s = with_parent(() => {
              var p = proxy(exists ? target[prop2] : UNINITIALIZED);
              var s2 = /* @__PURE__ */ state(p);
              return s2;
            });
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get(s);
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          this.has?.(target, prop2);
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          var s = sources.get(prop2);
          if (s !== void 0) {
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return void 0;
            }
            if (descriptor && "value" in descriptor) {
              descriptor.value = value2;
            } else {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || (active_effect !== null || active_reaction !== null) && (!has || get_descriptor(target, prop2)?.writable)) {
            if (s === void 0) {
              s = with_parent(() => {
                var p = has ? proxy(target[prop2]) : UNINITIALIZED;
                var s2 = /* @__PURE__ */ state(p);
                return s2;
              });
              sources.set(prop2, s);
            }
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || get_descriptor(target, prop2)?.writable) {
              s = with_parent(() => /* @__PURE__ */ state(void 0));
              set(s, proxy(value2));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            var p = with_parent(() => proxy(value2));
            set(s, p);
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor?.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            increment(version);
          }
          return true;
        },
        ownKeys(target) {
          get(version);
          var own_keys = Reflect.ownKeys(target).filter((key2) => {
            var source3 = sources.get(key2);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key in target)) {
              own_keys.push(key);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  function get_proxied_value(value) {
    try {
      if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
        return value[STATE_SYMBOL];
      }
    } catch {
    }
    return value;
  }
  function is(a, b) {
    return Object.is(get_proxied_value(a), get_proxied_value(b));
  }
  var $window;
  var is_firefox;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    is_firefox = /Firefox/.test(navigator.userAgent);
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    var text_prototype = Text.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    if (is_extensible(element_prototype)) {
      element_prototype[CLASS_CACHE] = void 0;
      element_prototype[ATTRIBUTES_CACHE] = null;
      element_prototype[STYLE_CACHE] = void 0;
      element_prototype.__e = void 0;
    }
    if (is_extensible(text_prototype)) {
      text_prototype[TEXT_CACHE] = void 0;
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return (
      /** @type {TemplateNode | null} */
      first_child_getter.call(node)
    );
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return (
      /** @type {TemplateNode | null} */
      next_sibling_getter.call(node)
    );
  }
  function child(node, is_text) {
    if (!hydrating) {
      return /* @__PURE__ */ get_first_child(node);
    }
    var child2 = /* @__PURE__ */ get_first_child(hydrate_node);
    if (child2 === null) {
      child2 = hydrate_node.appendChild(create_text());
    } else if (is_text && child2.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      child2?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    if (is_text) {
      merge_text_nodes(
        /** @type {Text} */
        child2
      );
    }
    set_hydrate_node(child2);
    return child2;
  }
  function first_child(node, is_text = false) {
    if (!hydrating) {
      var first = /* @__PURE__ */ get_first_child(node);
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
    if (is_text) {
      if (hydrate_node?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        hydrate_node?.before(text2);
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
        /** @type {Text} */
        hydrate_node
      );
    }
    return hydrate_node;
  }
  function only_child(node, is_text = false) {
    if (!hydrating) {
      return /* @__PURE__ */ get_first_child(node);
    }
    var first = child(node, is_text);
    reset(node);
    return first;
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = hydrating ? hydrate_node : node;
    var last_sibling;
    while (count--) {
      last_sibling = next_sibling;
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    if (!hydrating) {
      return next_sibling;
    }
    if (is_text) {
      if (next_sibling?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        if (next_sibling === null) {
          last_sibling?.after(text2);
        } else {
          next_sibling.before(text2);
        }
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
        /** @type {Text} */
        next_sibling
      );
    }
    set_hydrate_node(next_sibling);
    return next_sibling;
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  function should_defer_append() {
    return false;
  }
  function create_element(tag, namespace, is2) {
    if (namespace == null || namespace === NAMESPACE_HTML) {
      return (
        /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
        is2 ? document.createElement(tag, { is: is2 }) : document.createElement(tag)
      );
    }
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      is2 ? document.createElementNS(namespace, tag, { is: is2 }) : document.createElementNS(namespace, tag)
    );
  }
  function create_comment(data = "") {
    return document.createComment(data);
  }
  function merge_text_nodes(text2) {
    if (
      /** @type {string} */
      text2.nodeValue.length < 65536
    ) {
      return;
    }
    let next2 = text2.nextSibling;
    while (next2 !== null && next2.nodeType === TEXT_NODE) {
      next2.remove();
      text2.nodeValue += /** @type {string} */
      next2.nodeValue;
      next2 = text2.nextSibling;
    }
  }
  function handle_error(error) {
    var effect2 = active_effect;
    if (effect2 === null) {
      active_reaction.f |= ERROR_VALUE;
      return error;
    }
    if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
      throw error;
    }
    invoke_error_boundary(error, effect2);
  }
  function invoke_error_boundary(error, effect2) {
    if (error === HYDRATION_ERROR) {
      throw error;
    }
    if (effect2 !== null && (effect2.f & DESTROYED) !== 0) {
      return;
    }
    while (effect2 !== null) {
      if ((effect2.f & BOUNDARY_EFFECT) !== 0 && (effect2.f & (DESTROYED | DESTROYING)) === 0) {
        if ((effect2.f & REACTION_RAN) === 0) {
          throw error;
        }
        try {
          effect2.b.error(error);
          return;
        } catch (e) {
          error = e;
        }
      }
      effect2 = effect2.parent;
    }
    throw error;
  }
  function validate_effect(rune) {
    if (active_effect === null) {
      if (active_reaction === null) {
        effect_orphan();
      }
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown();
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn) {
    var parent = active_effect;
    if (parent !== null && (parent.f & INERT) !== 0) {
      type |= INERT;
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes: null,
      f: type | DIRTY | CONNECTED,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      b: parent && parent.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    current_batch?.register_created_effect(effect2);
    var e = effect2;
    if ((type & EFFECT) !== 0) {
      if (collected_effects !== null) {
        collected_effects.push(effect2);
      } else {
        Batch.ensure().schedule(effect2);
      }
    } else if (fn !== null) {
      try {
        update_effect(effect2);
      } catch (e2) {
        destroy_effect(effect2);
        throw e2;
      }
      if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
      (e.f & EFFECT_PRESERVED) === 0) {
        e = e.first;
        if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
          e.f |= EFFECT_TRANSPARENT;
        }
      }
    }
    if (e !== null) {
      e.parent = parent;
      if (parent !== null) {
        push_effect(e, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ?? (derived2.effects = [])).push(e);
      }
    }
    return effect2;
  }
  function effect_tracking() {
    return active_reaction !== null && !untracking;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect();
    var flags2 = (
      /** @type {Effect} */
      active_effect.f
    );
    var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.i;
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ?? (context.e = [])).push(fn);
    } else {
      return create_user_effect(fn);
    }
  }
  function create_user_effect(fn) {
    return create_effect(EFFECT | USER_EFFECT, fn);
  }
  function component_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn);
  }
  function async_effect(fn) {
    return create_effect(ASYNC | EFFECT_PRESERVED, fn);
  }
  function render_effect(fn, flags2 = 0) {
    return create_effect(RENDER_EFFECT | flags2, fn);
  }
  function template_effect(fn, sync = [], async = [], blockers = []) {
    flatten(blockers, sync, async, (values) => {
      create_effect(RENDER_EFFECT, () => {
        fn(...values.map(get));
      });
    });
  }
  function block(fn, flags2 = 0) {
    var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
    return effect2;
  }
  function managed(fn, flags2 = 0) {
    var effect2 = create_effect(MANAGED_EFFECT | flags2, fn);
    return effect2;
  }
  function branch(fn) {
    return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } catch (error) {
        invoke_error_boundary(error, effect2.parent);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      const controller = effect2.ac;
      if (controller !== null) {
        without_reactive_context(() => {
          controller.abort(STALE_REACTION);
        });
      }
      var next2 = effect2.next;
      if ((effect2.f & ROOT_EFFECT) !== 0) {
        effect2.parent = null;
      } else {
        destroy_effect(effect2, remove_dom);
      }
      effect2 = next2;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next2 = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next2;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
      remove_effect_dom(
        effect2.nodes.start,
        /** @type {TemplateNode} */
        effect2.nodes.end
      );
      removed = true;
    }
    effect2.f |= DESTROYING;
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    var transitions = effect2.nodes && effect2.nodes.t;
    if (transitions !== null) {
      for (const transition of transitions) {
        transition.stop();
      }
    }
    execute_effect_teardown(effect2);
    effect2.f ^= DESTROYING;
    effect2.f |= DESTROYED;
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
  }
  function remove_effect_dom(node, end) {
    while (node !== null) {
      var next2 = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
      node.remove();
      node = next2;
    }
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next2 = effect2.next;
    if (prev !== null) prev.next = next2;
    if (next2 !== null) next2.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next2;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback, destroy = true) {
    var transitions = [];
    effect2.f |= PAUSED;
    pause_children(effect2, transitions, true);
    var fn = () => {
      if (destroy) destroy_effect(effect2);
      if (callback) callback();
    };
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition of transitions) {
        transition.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transitions.push(transition);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      if ((child2.f & ROOT_EFFECT) === 0) {
        var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
        pause_children(child2, transitions, transparent ? local : false);
      }
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    effect2.f &= ~PAUSED;
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & PAUSED) !== 0) return;
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      set_signal_status(effect2, DIRTY);
      Batch.ensure().schedule(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transition.in();
        }
      }
    }
  }
  function move_effect(effect2, fragment) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    while (node !== null) {
      var next2 = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
      fragment.append(node);
      node = next2;
    }
  }
  let is_destroying_effect = false;
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let current_sources = null;
  function push_reaction_value(value) {
    if (active_reaction !== null && ((active_reaction.f & REACTION_IS_UPDATING) !== 0 || (active_reaction.f & DERIVED) !== 0)) {
      (current_sources ?? (current_sources = /* @__PURE__ */ new Set())).add(value);
    }
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let update_version = read_version;
  function set_update_version(value) {
    update_version = value;
  }
  function increment_write_version() {
    return ++write_version;
  }
  function is_dirty(reaction) {
    var flags2 = reaction.f;
    if ((flags2 & DIRTY) !== 0) {
      return true;
    }
    if ((flags2 & MAYBE_DIRTY) !== 0) {
      var dependencies = (
        /** @type {Value[]} */
        reaction.deps
      );
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        var dependency = dependencies[i];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
      if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
      // traversal of the graph in the other batches still happens
      batch_values === null) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    if (current_sources !== null && current_sources.has(signal)) {
      return;
    }
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          false
        );
      } else if (effect2 === reaction) {
        if (root2) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_sources = current_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var previous_update_version = update_version;
    var flags2 = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    current_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    update_version = ++read_version;
    if (reaction.ac !== null) {
      without_reactive_context(() => {
        reaction.ac.abort(STALE_REACTION);
      });
      reaction.ac = null;
    }
    try {
      reaction.f |= REACTION_IS_UPDATING;
      var fn = (
        /** @type {Function} */
        reaction.fn
      );
      var result = fn();
      reaction.f |= REACTION_RAN;
      var deps = update_dependencies(reaction);
      if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (var i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;
        if (previous_reaction.deps !== null) {
          for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
            previous_reaction.deps[i2].rv = read_version;
          }
        }
        if (previous_deps !== null) {
          for (const dep of previous_deps) {
            dep.rv = read_version;
          }
        }
        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(.../** @type {Source[]} */
            untracked_writes);
          }
        }
      }
      if ((reaction.f & ERROR_VALUE) !== 0) {
        reaction.f ^= ERROR_VALUE;
      }
      return result;
    } catch (error) {
      update_dependencies(reaction);
      return handle_error(error);
    } finally {
      reaction.f ^= REACTION_IS_UPDATING;
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      current_sources = previous_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      update_version = previous_update_version;
    }
  }
  function update_dependencies(reaction) {
    var _a2;
    var deps = reaction.deps;
    var is_fork = current_batch?.is_fork;
    if (new_deps !== null) {
      var i;
      if (!is_fork) {
        remove_reactions(reaction, skipped_deps);
      }
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
        for (i = skipped_deps; i < deps.length; i++) {
          ((_a2 = deps[i]).reactions ?? (_a2.reactions = [])).push(reaction);
        }
      }
    } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    return deps;
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !includes.call(new_deps, dependency))) {
      var derived2 = (
        /** @type {Derived} */
        dependency
      );
      if ((derived2.f & CONNECTED) !== 0) {
        derived2.f ^= CONNECTED;
      }
      if (derived2.v !== UNINITIALIZED) {
        update_derived_status(derived2);
      }
      if (derived2.ac !== null) {
        without_reactive_context(() => {
          derived2.ac.abort(STALE_REACTION);
          derived2.ac = null;
          set_signal_status(derived2, DIRTY);
        });
      }
      freeze_derived_effects(derived2);
      remove_reactions(derived2, 0);
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags2 = effect2.f;
    if ((flags2 & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    active_effect = effect2;
    try {
      if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var dep;
      if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) ;
    } finally {
      active_effect = previous_effect;
    }
  }
  async function tick() {
    await Promise.resolve();
    flushSync();
  }
  function get(signal) {
    var flags2 = signal.f;
    var is_derived = (flags2 & DERIVED) !== 0;
    if (active_reaction !== null && !untracking) {
      var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
      if (!destroyed && (current_sources === null || !current_sources.has(signal))) {
        var deps = active_reaction.deps;
        if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
          if (signal.rv < read_version) {
            signal.rv = read_version;
            if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
              skipped_deps++;
            } else if (new_deps === null) {
              new_deps = [signal];
            } else {
              new_deps.push(signal);
            }
          }
        } else {
          active_reaction.deps ?? (active_reaction.deps = []);
          if (!includes.call(active_reaction.deps, signal)) {
            active_reaction.deps.push(signal);
          }
          var reactions = signal.reactions;
          if (reactions === null) {
            signal.reactions = [active_reaction];
          } else if (!includes.call(reactions, active_reaction)) {
            reactions.push(active_reaction);
          }
        }
      }
    }
    if (is_destroying_effect && old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      if (is_destroying_effect) {
        var value = derived2.v;
        if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
          value = execute_derived(derived2);
        }
        old_values.set(derived2, value);
        return value;
      }
      var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (active_reaction.f & CONNECTED) !== 0;
      var is_new = (derived2.f & REACTION_RAN) === 0;
      if (is_dirty(derived2)) {
        if (should_connect) {
          derived2.f |= CONNECTED;
        }
        update_derived(derived2);
      }
      if (should_connect && !is_new) {
        unfreeze_derived_effects(derived2);
        reconnect(derived2);
      }
    }
    if (batch_values?.has(signal)) {
      return batch_values.get(signal);
    }
    if ((signal.f & ERROR_VALUE) !== 0) {
      throw signal.v;
    }
    return signal.v;
  }
  function reconnect(derived2) {
    derived2.f |= CONNECTED;
    if (derived2.deps === null) return;
    for (const dep of derived2.deps) {
      var reactions = dep.reactions;
      if (reactions === null) {
        dep.reactions = [derived2];
      } else if (!includes.call(reactions, derived2)) {
        reactions.push(derived2);
      }
      if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
        unfreeze_derived_effects(
          /** @type {Derived} */
          dep
        );
        reconnect(
          /** @type {Derived} */
          dep
        );
      }
    }
  }
  function depends_on_old_values(derived2) {
    if (derived2.v === UNINITIALIZED) return true;
    if (derived2.deps === null) return false;
    for (const dep of derived2.deps) {
      if (old_values.has(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
        /** @type {Derived} */
        dep
      )) {
        return true;
      }
    }
    return false;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  function is_capture_event(name) {
    return name.endsWith("capture") && name !== "gotpointercapture" && name !== "lostpointercapture";
  }
  const DELEGATED_EVENTS = [
    "beforeinput",
    "click",
    "change",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
  ];
  function can_delegate_event(event_name) {
    return DELEGATED_EVENTS.includes(event_name);
  }
  const ATTRIBUTE_ALIASES = {
    // no `class: 'className'` because we handle that separately
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
  };
  function normalize_attribute(name) {
    name = name.toLowerCase();
    return ATTRIBUTE_ALIASES[name] ?? name;
  }
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  const RAW_TEXT_ELEMENTS = (
    /** @type {const} */
    ["textarea", "script", "style", "title"]
  );
  function is_raw_text_element(name) {
    return RAW_TEXT_ELEMENTS.includes(
      /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
      name
    );
  }
  const event_symbol = Symbol("events");
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event);
      }
      if (!event.cancelBubble) {
        return without_reactive_context(() => {
          return handler?.call(this, event);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      target_handler.__removed = false;
      queue_micro_task(() => {
        if (!target_handler.__removed) {
          dom.addEventListener(event_name, target_handler, options);
        }
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function delegated(event_name, element2, handler) {
    (element2[event_symbol] ?? (element2[event_symbol] = {}))[event_name] = handler;
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  let last_propagated_event = null;
  let last_propagated_event_clear_scheduled = false;
  function handle_event_propagation(event) {
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event.type;
    var path = event.composedPath?.() || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event.target
    );
    last_propagated_event = event;
    if (!last_propagated_event_clear_scheduled) {
      last_propagated_event_clear_scheduled = true;
      setTimeout(() => {
        last_propagated_event_clear_scheduled = false;
        last_propagated_event = null;
      });
    }
    var path_idx = 0;
    var handled_at = last_propagated_event === event && event[event_symbol];
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event[event_symbol] = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event.target;
    if (current_target === handler_element) return;
    define_property(event, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        if (current_target === handler_element) break;
        try {
          var delegated2 = current_target[event_symbol]?.[event_name];
          if (delegated2 != null && (!/** @type {any} */
          current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          event.target === current_target)) {
            delegated2.call(current_target, event);
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event.cancelBubble) break;
        path_idx++;
        current_target = path_idx < path.length ? (
          /** @type {Element} */
          path[path_idx]
        ) : null;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event[event_symbol] = handler_element;
      delete event.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  const policy = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
      /** @param {string} html */
      createHTML: (html2) => {
        return html2;
      }
    })
  );
  function create_trusted_html(html2) {
    return (
      /** @type {string} */
      policy?.createHTML(html2) ?? html2
    );
  }
  function create_fragment_from_html(html2) {
    var elem = create_element("template");
    elem.innerHTML = create_trusted_html(html2.replaceAll("<!>", "\x3C!---->"));
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes === null) {
      effect2.nodes = { start, end, a: null, t: null };
    }
  }
  // @__NO_SIDE_EFFECTS__
  function from_html(content, flags2) {
    var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node = /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function from_namespace(content, flags2, ns = "svg") {
    var has_start = !content.startsWith("<!>");
    var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
    var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
    var node;
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (!node) {
        var fragment = (
          /** @type {DocumentFragment} */
          create_fragment_from_html(wrapped)
        );
        var root2 = (
          /** @type {Element} */
          /* @__PURE__ */ get_first_child(fragment)
        );
        if (is_fragment) {
          node = document.createDocumentFragment();
          while (/* @__PURE__ */ get_first_child(root2)) {
            node.appendChild(
              /** @type {TemplateNode} */
              /* @__PURE__ */ get_first_child(root2)
            );
          }
        } else {
          node = /** @type {Element} */
          /* @__PURE__ */ get_first_child(root2);
        }
      }
      var clone = (
        /** @type {TemplateNode} */
        node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function from_svg(content, flags2) {
    return /* @__PURE__ */ from_namespace(content, flags2, "svg");
  }
  function text(value = "") {
    if (!hydrating) {
      var t = create_text(value + "");
      assign_nodes(t, t);
      return t;
    }
    var node = hydrate_node;
    if (node.nodeType !== TEXT_NODE) {
      node.before(node = create_text());
      set_hydrate_node(node);
    } else {
      merge_text_nodes(
        /** @type {Text} */
        node
      );
    }
    assign_nodes(node, node);
    return node;
  }
  function comment() {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (hydrating) {
      var effect2 = (
        /** @type {Effect & { nodes: EffectNodes }} */
        active_effect
      );
      if ((effect2.f & REACTION_RAN) === 0 || effect2.nodes.end === null) {
        effect2.nodes.end = hydrate_node;
      }
      hydrate_next();
      return;
    }
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  function props_id() {
    var _a2;
    if (hydrating && hydrate_node && hydrate_node.nodeType === COMMENT_NODE && hydrate_node.textContent?.startsWith(`$`)) {
      const id = hydrate_node.textContent.substring(1);
      hydrate_next();
      return id;
    }
    (_a2 = window.__svelte ?? (window.__svelte = {})).uid ?? (_a2.uid = 1);
    return `c${window.__svelte.uid++}`;
  }
  function createSubscriber(start) {
    let subscribers = 0;
    let version = source(0);
    let stop;
    return () => {
      if (effect_tracking()) {
        get(version);
        render_effect(() => {
          if (subscribers === 0) {
            stop = untrack(() => start(() => increment(version)));
          }
          subscribers += 1;
          return () => {
            queue_micro_task(() => {
              subscribers -= 1;
              if (subscribers === 0) {
                stop?.();
                stop = void 0;
                increment(version);
              }
            });
          };
        });
      }
    };
  }
  var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
  function boundary(node, props, children, transform_error) {
    new Boundary(node, props, children, transform_error);
  }
  class Boundary {
    /**
     * @param {TemplateNode} node
     * @param {BoundaryProps} props
     * @param {((anchor: Node) => void)} children
     * @param {((error: unknown) => unknown) | undefined} [transform_error]
     */
    constructor(node, props, children, transform_error) {
      __privateAdd(this, _Boundary_instances);
      /** @type {Boundary | null} */
      __publicField(this, "parent");
      __publicField(this, "is_pending", false);
      /**
       * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
       * Inherited from parent boundary, or defaults to identity.
       * @type {(error: unknown) => unknown}
       */
      __publicField(this, "transform_error");
      /** @type {TemplateNode} */
      __privateAdd(this, _anchor);
      /** @type {TemplateNode | null} */
      __privateAdd(this, _hydrate_open, hydrating ? hydrate_node : null);
      /** @type {BoundaryProps} */
      __privateAdd(this, _props);
      /** @type {((anchor: Node) => void)} */
      __privateAdd(this, _children);
      /** @type {Effect} */
      __privateAdd(this, _effect);
      /** @type {Effect | null} */
      __privateAdd(this, _main_effect, null);
      /** @type {Effect | null} */
      __privateAdd(this, _pending_effect, null);
      /** @type {Effect | null} */
      __privateAdd(this, _failed_effect, null);
      /** @type {DocumentFragment | null} */
      __privateAdd(this, _offscreen_fragment, null);
      __privateAdd(this, _local_pending_count, 0);
      __privateAdd(this, _pending_count, 0);
      __privateAdd(this, _pending_count_update_queued, false);
      /** @type {Map<Effect, number>} */
      __privateAdd(this, _dirty_reactions2, /* @__PURE__ */ new Map());
      /**
       * A source containing the number of pending async deriveds/expressions.
       * Only created if `$effect.pending()` is used inside the boundary,
       * otherwise updating the source results in needless `Batch.ensure()`
       * calls followed by no-op flushes
       * @type {Source<number> | null}
       */
      __privateAdd(this, _effect_pending, null);
      __privateAdd(this, _effect_pending_subscriber, createSubscriber(() => {
        __privateSet(this, _effect_pending, source(__privateGet(this, _local_pending_count)));
        return () => {
          __privateSet(this, _effect_pending, null);
        };
      }));
      __privateSet(this, _anchor, node);
      __privateSet(this, _props, props);
      __privateSet(this, _children, (anchor) => {
        var effect2 = (
          /** @type {Effect} */
          active_effect
        );
        effect2.b = this;
        effect2.f |= BOUNDARY_EFFECT;
        children(anchor);
      });
      this.parent = /** @type {Effect} */
      active_effect.b;
      this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
      __privateSet(this, _effect, block(() => {
        if (hydrating) {
          const comment_data = read_hydration_instruction(
            /** @type {TemplateNode} */
            __privateGet(this, _hydrate_open)
          );
          hydrate_next();
          const server_rendered_pending = comment_data === HYDRATION_START_ELSE;
          const server_rendered_failed = comment_data.startsWith(HYDRATION_START_FAILED);
          if (server_rendered_failed) {
            const serialized_error = JSON.parse(comment_data.slice(HYDRATION_START_FAILED.length));
            __privateMethod(this, _Boundary_instances, hydrate_failed_content_fn).call(this, serialized_error);
          } else if (server_rendered_pending) {
            __privateMethod(this, _Boundary_instances, hydrate_pending_content_fn).call(this);
          } else {
            __privateMethod(this, _Boundary_instances, hydrate_resolved_content_fn).call(this);
          }
        } else {
          __privateMethod(this, _Boundary_instances, render_fn).call(this);
        }
      }, flags));
      if (hydrating) {
        __privateSet(this, _anchor, hydrate_node);
      }
    }
    /**
     * Defer an effect inside a pending boundary until the boundary resolves
     * @param {Effect} effect
     */
    defer_effect(effect2) {
      defer_effect(effect2, __privateGet(this, _dirty_reactions2));
    }
    /**
     * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
     * @returns {boolean}
     */
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!__privateGet(this, _props).pending;
    }
    /**
     * Update the source that powers `$effect.pending()` inside this boundary,
     * and controls when the current `pending` snippet (if any) is removed.
     * Do not call from inside the class
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    update_pending_count(d, batch) {
      __privateMethod(this, _Boundary_instances, update_pending_count_fn).call(this, d, batch);
      __privateSet(this, _local_pending_count, __privateGet(this, _local_pending_count) + d);
      if (!__privateGet(this, _effect_pending) || __privateGet(this, _pending_count_update_queued)) return;
      __privateSet(this, _pending_count_update_queued, true);
      queue_micro_task(() => {
        __privateSet(this, _pending_count_update_queued, false);
        if (__privateGet(this, _effect_pending)) {
          internal_set(__privateGet(this, _effect_pending), __privateGet(this, _local_pending_count));
        }
      });
    }
    get_effect_pending() {
      __privateGet(this, _effect_pending_subscriber).call(this);
      return get(
        /** @type {Source<number>} */
        __privateGet(this, _effect_pending)
      );
    }
    /** @param {unknown} error */
    error(error) {
      if (error === HYDRATION_ERROR) {
        throw error;
      }
      if (!__privateGet(this, _props).onerror && !__privateGet(this, _props).failed) {
        throw error;
      }
      if (current_batch?.is_fork) {
        if (__privateGet(this, _main_effect)) current_batch.skip_effect(__privateGet(this, _main_effect));
        if (__privateGet(this, _pending_effect)) current_batch.skip_effect(__privateGet(this, _pending_effect));
        if (__privateGet(this, _failed_effect)) current_batch.skip_effect(__privateGet(this, _failed_effect));
        current_batch.oncommit(() => {
          if (!__privateMethod(this, _Boundary_instances, is_destroyed_fn).call(this)) __privateMethod(this, _Boundary_instances, handle_error_fn).call(this, error);
        });
      } else {
        __privateMethod(this, _Boundary_instances, handle_error_fn).call(this, error);
      }
    }
  }
  _anchor = new WeakMap();
  _hydrate_open = new WeakMap();
  _props = new WeakMap();
  _children = new WeakMap();
  _effect = new WeakMap();
  _main_effect = new WeakMap();
  _pending_effect = new WeakMap();
  _failed_effect = new WeakMap();
  _offscreen_fragment = new WeakMap();
  _local_pending_count = new WeakMap();
  _pending_count = new WeakMap();
  _pending_count_update_queued = new WeakMap();
  _dirty_reactions2 = new WeakMap();
  _effect_pending = new WeakMap();
  _effect_pending_subscriber = new WeakMap();
  _Boundary_instances = new WeakSet();
  hydrate_resolved_content_fn = function() {
    try {
      __privateSet(this, _main_effect, branch(() => __privateGet(this, _children).call(this, __privateGet(this, _anchor))));
    } catch (error) {
      this.error(error);
    }
  };
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  hydrate_failed_content_fn = function(error) {
    const failed = __privateGet(this, _props).failed;
    const { reset: reset2, invoke_onerror } = __privateMethod(this, _Boundary_instances, create_reset_fn).call(this, error);
    queue_micro_task(invoke_onerror);
    if (!failed) return;
    __privateSet(this, _failed_effect, branch(() => {
      failed(
        __privateGet(this, _anchor),
        () => error,
        () => reset2
      );
    }));
  };
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  create_reset_fn = function(error) {
    var did_reset = false;
    var calling_on_error = false;
    const reset2 = () => {
      if (__privateMethod(this, _Boundary_instances, is_destroyed_fn).call(this)) return;
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      if (__privateGet(this, _failed_effect) !== null) {
        pause_effect(__privateGet(this, _failed_effect), () => {
          __privateSet(this, _failed_effect, null);
        });
      }
      __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
        __privateMethod(this, _Boundary_instances, render_fn).call(this);
      });
    };
    const invoke_onerror = () => {
      if (__privateMethod(this, _Boundary_instances, is_destroyed_fn).call(this)) return;
      try {
        calling_on_error = true;
        __privateGet(this, _props).onerror?.(error, reset2);
        calling_on_error = false;
      } catch (err) {
        invoke_error_boundary(err, __privateGet(this, _effect) && __privateGet(this, _effect).parent);
      }
    };
    return { reset: reset2, invoke_onerror };
  };
  is_destroyed_fn = function() {
    return (__privateGet(this, _effect).f & (DESTROYED | DESTROYING)) !== 0;
  };
  hydrate_pending_content_fn = function() {
    const pending = __privateGet(this, _props).pending;
    if (!pending) return;
    this.is_pending = true;
    __privateSet(this, _pending_effect, branch(() => pending(__privateGet(this, _anchor))));
    queue_micro_task(() => {
      if (__privateMethod(this, _Boundary_instances, is_destroyed_fn).call(this)) return;
      var fragment = __privateSet(this, _offscreen_fragment, document.createDocumentFragment());
      var anchor = create_text();
      var handled = false;
      fragment.append(anchor);
      __privateSet(this, _main_effect, __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
        try {
          return branch(() => __privateGet(this, _children).call(this, anchor));
        } catch (error) {
          try {
            this.error(error);
            handled = true;
          } catch (error2) {
            invoke_error_boundary(error2, __privateGet(this, _effect).parent);
          }
          return null;
        }
      }));
      if (__privateGet(this, _main_effect) === null) {
        __privateSet(this, _offscreen_fragment, null);
        if (handled) __privateMethod(this, _Boundary_instances, resolve_fn2).call(
          this,
          /** @type {Batch} */
          current_batch
        );
        return;
      }
      if (__privateGet(this, _pending_count) === 0) {
        __privateGet(this, _anchor).before(fragment);
        __privateSet(this, _offscreen_fragment, null);
        pause_effect(
          /** @type {Effect} */
          __privateGet(this, _pending_effect),
          () => {
            __privateSet(this, _pending_effect, null);
          }
        );
        __privateMethod(this, _Boundary_instances, resolve_fn2).call(
          this,
          /** @type {Batch} */
          current_batch
        );
      }
    });
  };
  render_fn = function() {
    try {
      this.is_pending = this.has_pending_snippet();
      __privateSet(this, _pending_count, 0);
      __privateSet(this, _local_pending_count, 0);
      __privateSet(this, _main_effect, branch(() => {
        __privateGet(this, _children).call(this, __privateGet(this, _anchor));
      }));
      if (__privateGet(this, _pending_count) > 0) {
        var fragment = __privateSet(this, _offscreen_fragment, document.createDocumentFragment());
        move_effect(__privateGet(this, _main_effect), fragment);
        const pending = (
          /** @type {(anchor: Node) => void} */
          __privateGet(this, _props).pending
        );
        __privateSet(this, _pending_effect, branch(() => pending(__privateGet(this, _anchor))));
      } else {
        __privateMethod(this, _Boundary_instances, resolve_fn2).call(
          this,
          /** @type {Batch} */
          current_batch
        );
      }
    } catch (error) {
      this.error(error);
    }
  };
  /**
   * @param {Batch} batch
   */
  resolve_fn2 = function(batch) {
    this.is_pending = false;
    batch.transfer_reactions(__privateGet(this, _dirty_reactions2));
  };
  /**
   * @template T
   * @param {() => T} fn
   */
  run_fn = function(fn) {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_ctx = component_context;
    set_active_effect(__privateGet(this, _effect));
    set_active_reaction(__privateGet(this, _effect));
    set_component_context(__privateGet(this, _effect).ctx);
    try {
      Batch.ensure();
      return fn();
    } finally {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_ctx);
    }
  };
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count_fn = function(d, batch) {
    var _a2;
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        __privateMethod(_a2 = this.parent, _Boundary_instances, update_pending_count_fn).call(_a2, d, batch);
      }
      return;
    }
    __privateSet(this, _pending_count, __privateGet(this, _pending_count) + d);
    if (__privateGet(this, _pending_count) === 0) {
      __privateMethod(this, _Boundary_instances, resolve_fn2).call(this, batch);
      if (__privateGet(this, _pending_effect)) {
        pause_effect(__privateGet(this, _pending_effect), () => {
          __privateSet(this, _pending_effect, null);
        });
      }
      if (__privateGet(this, _offscreen_fragment)) {
        __privateGet(this, _anchor).before(__privateGet(this, _offscreen_fragment));
        __privateSet(this, _offscreen_fragment, null);
      }
    }
  };
  /**
   * @param {unknown} error
   */
  handle_error_fn = function(error) {
    if (__privateGet(this, _main_effect)) {
      destroy_effect(__privateGet(this, _main_effect));
      __privateSet(this, _main_effect, null);
    }
    if (__privateGet(this, _pending_effect)) {
      destroy_effect(__privateGet(this, _pending_effect));
      __privateSet(this, _pending_effect, null);
    }
    if (__privateGet(this, _failed_effect)) {
      destroy_effect(__privateGet(this, _failed_effect));
      __privateSet(this, _failed_effect, null);
    }
    if (hydrating) {
      set_hydrate_node(
        /** @type {TemplateNode} */
        __privateGet(this, _hydrate_open)
      );
      next();
      set_hydrate_node(skip_nodes());
    }
    let failed = __privateGet(this, _props).failed;
    const handle_error_result = (transformed_error) => {
      if (__privateMethod(this, _Boundary_instances, is_destroyed_fn).call(this)) return;
      const { reset: reset2, invoke_onerror } = __privateMethod(this, _Boundary_instances, create_reset_fn).call(this, transformed_error);
      invoke_onerror();
      if (failed && !__privateMethod(this, _Boundary_instances, is_destroyed_fn).call(this)) {
        __privateSet(this, _failed_effect, __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
          try {
            return branch(() => {
              var effect2 = (
                /** @type {Effect} */
                active_effect
              );
              effect2.b = this;
              effect2.f |= BOUNDARY_EFFECT;
              failed(
                __privateGet(this, _anchor),
                () => transformed_error,
                () => reset2
              );
            });
          } catch (error2) {
            invoke_error_boundary(
              error2,
              /** @type {Effect} */
              __privateGet(this, _effect).parent
            );
            return null;
          }
        }));
      }
    };
    queue_micro_task(() => {
      if (__privateMethod(this, _Boundary_instances, is_destroyed_fn).call(this)) return;
      var result;
      try {
        result = this.transform_error(error);
      } catch (e) {
        invoke_error_boundary(e, __privateGet(this, _effect) && __privateGet(this, _effect).parent);
        return;
      }
      if (result !== null && typeof result === "object" && typeof /** @type {any} */
      result.then === "function") {
        result.then(
          handle_error_result,
          /** @param {unknown} e */
          (e) => invoke_error_boundary(e, __privateGet(this, _effect) && __privateGet(this, _effect).parent)
        );
      } else {
        handle_error_result(result);
      }
    });
  };
  function set_text(text2, value) {
    var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
    if (str !== /** @type {any} */
    (text2[TEXT_CACHE] ?? (text2[TEXT_CACHE] = text2.nodeValue))) {
      text2[TEXT_CACHE] = str;
      text2.nodeValue = `${str}`;
    }
  }
  function mount(component, options) {
    return _mount(component, options);
  }
  const listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
    init_operations();
    var component = void 0;
    var unmount2 = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      boundary(
        /** @type {TemplateNode} */
        anchor_node,
        {
          pending: () => {
          }
        },
        (anchor_node2) => {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          if (context) ctx.c = context;
          if (events) {
            props.$$events = events;
          }
          if (hydrating) {
            assign_nodes(
              /** @type {TemplateNode} */
              anchor_node2,
              null
            );
          }
          component = Component(anchor_node2, props) || mark_as_component();
          if (hydrating) {
            active_effect.nodes.end = hydrate_node;
            if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
            hydrate_node.data !== HYDRATION_END) {
              hydration_mismatch();
              throw HYDRATION_ERROR;
            }
          }
          pop();
        },
        transformError
      );
      var registered_events = /* @__PURE__ */ new Set();
      var event_handle = (events2) => {
        for (var i = 0; i < events2.length; i++) {
          var event_name = events2[i];
          if (registered_events.has(event_name)) continue;
          registered_events.add(event_name);
          var passive = is_passive_event(event_name);
          for (const node of [target, document]) {
            var counts = listeners.get(node);
            if (counts === void 0) {
              counts = /* @__PURE__ */ new Map();
              listeners.set(node, counts);
            }
            var count = counts.get(event_name);
            if (count === void 0) {
              node.addEventListener(event_name, handle_event_propagation, { passive });
              counts.set(event_name, 1);
            } else {
              counts.set(event_name, count + 1);
            }
          }
        }
      };
      event_handle(array_from(all_registered_events));
      root_event_handles.add(event_handle);
      return () => {
        for (var event_name of registered_events) {
          for (const node of [target, document]) {
            var counts = (
              /** @type {Map<string, number>} */
              listeners.get(node)
            );
            var count = (
              /** @type {number} */
              counts.get(event_name)
            );
            if (--count == 0) {
              node.removeEventListener(event_name, handle_event_propagation);
              counts.delete(event_name);
              if (counts.size === 0) {
                listeners.delete(node);
              }
            } else {
              counts.set(event_name, count);
            }
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          anchor_node.parentNode?.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount2);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function unmount(component, options) {
    const fn = mounted_components.get(component);
    if (fn) {
      mounted_components.delete(component);
      return fn(options);
    }
    return Promise.resolve();
  }
  class BranchManager {
    /**
     * @param {TemplateNode} anchor
     * @param {boolean} transition
     */
    constructor(anchor, transition = true) {
      /** @type {TemplateNode} */
      __publicField(this, "anchor");
      /** @type {Map<Batch, Key>} */
      __privateAdd(this, _batches, /* @__PURE__ */ new Map());
      /**
       * Map of keys to effects that are currently rendered in the DOM.
       * These effects are visible and actively part of the document tree.
       * Example:
       * ```
       * {#if condition}
       * 	foo
       * {:else}
       * 	bar
       * {/if}
       * ```
       * Can result in the entries `true->Effect` and `false->Effect`
       * @type {Map<Key, Effect>}
       */
      __privateAdd(this, _onscreen, /* @__PURE__ */ new Map());
      /**
       * Similar to #onscreen with respect to the keys, but contains branches that are not yet
       * in the DOM, because their insertion is deferred.
       * @type {Map<Key, Branch>}
       */
      __privateAdd(this, _offscreen, /* @__PURE__ */ new Map());
      /**
       * Keys of effects that are currently outroing
       * @type {Set<Key>}
       */
      __privateAdd(this, _outroing, /* @__PURE__ */ new Set());
      /**
       * Whether to pause (i.e. outro) on change, or destroy immediately.
       * This is necessary for `<svelte:element>`
       */
      __privateAdd(this, _transition, true);
      /**
       * @param {Batch} batch
       */
      __privateAdd(this, _commit, (batch) => {
        if (!__privateGet(this, _batches).has(batch)) return;
        var key = (
          /** @type {Key} */
          __privateGet(this, _batches).get(batch)
        );
        var onscreen = __privateGet(this, _onscreen).get(key);
        if (onscreen) {
          resume_effect(onscreen);
          __privateGet(this, _outroing).delete(key);
        } else {
          var offscreen = __privateGet(this, _offscreen).get(key);
          if (offscreen) {
            resume_effect(offscreen.effect);
            __privateGet(this, _onscreen).set(key, offscreen.effect);
            __privateGet(this, _offscreen).delete(key);
            offscreen.fragment.lastChild.remove();
            this.anchor.before(offscreen.fragment);
            onscreen = offscreen.effect;
          }
        }
        for (const [b, k] of __privateGet(this, _batches)) {
          __privateGet(this, _batches).delete(b);
          if (b === batch) {
            break;
          }
          const offscreen2 = __privateGet(this, _offscreen).get(k);
          if (offscreen2) {
            destroy_effect(offscreen2.effect);
            __privateGet(this, _offscreen).delete(k);
          }
        }
        for (const [k, effect2] of __privateGet(this, _onscreen)) {
          if (k === key || __privateGet(this, _outroing).has(k)) continue;
          const on_destroy = () => {
            const keys = Array.from(__privateGet(this, _batches).values());
            if (keys.includes(k)) {
              var fragment = document.createDocumentFragment();
              move_effect(effect2, fragment);
              fragment.append(create_text());
              __privateGet(this, _offscreen).set(k, { effect: effect2, fragment });
            } else {
              destroy_effect(effect2);
            }
            __privateGet(this, _outroing).delete(k);
            __privateGet(this, _onscreen).delete(k);
          };
          if (__privateGet(this, _transition) || !onscreen) {
            __privateGet(this, _outroing).add(k);
            pause_effect(effect2, on_destroy, false);
          } else {
            on_destroy();
          }
        }
      });
      /**
       * @param {Batch} batch
       */
      __privateAdd(this, _discard, (batch) => {
        __privateGet(this, _batches).delete(batch);
        const keys = Array.from(__privateGet(this, _batches).values());
        for (const [k, branch2] of __privateGet(this, _offscreen)) {
          if (!keys.includes(k)) {
            destroy_effect(branch2.effect);
            __privateGet(this, _offscreen).delete(k);
          }
        }
      });
      this.anchor = anchor;
      __privateSet(this, _transition, transition);
    }
    /**
     *
     * @param {any} key
     * @param {null | ((target: TemplateNode) => void)} fn
     */
    ensure(key, fn) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var defer = should_defer_append();
      if (fn && !__privateGet(this, _onscreen).has(key) && !__privateGet(this, _offscreen).has(key)) {
        if (defer) {
          var fragment = document.createDocumentFragment();
          var target = create_text();
          fragment.append(target);
          __privateGet(this, _offscreen).set(key, {
            effect: branch(() => fn(target)),
            fragment
          });
        } else {
          __privateGet(this, _onscreen).set(
            key,
            branch(() => fn(this.anchor))
          );
        }
      }
      __privateGet(this, _batches).set(batch, key);
      if (defer) {
        for (const [k, effect2] of __privateGet(this, _onscreen)) {
          if (k === key) {
            batch.unskip_effect(effect2);
          } else {
            batch.skip_effect(effect2);
          }
        }
        for (const [k, branch2] of __privateGet(this, _offscreen)) {
          if (k === key) {
            batch.unskip_effect(branch2.effect);
          } else {
            batch.skip_effect(branch2.effect);
          }
        }
        batch.oncommit(__privateGet(this, _commit));
        batch.ondiscard(__privateGet(this, _discard));
      } else {
        if (hydrating) {
          this.anchor = hydrate_node;
        }
        __privateGet(this, _commit).call(this, batch);
      }
    }
  }
  _batches = new WeakMap();
  _onscreen = new WeakMap();
  _offscreen = new WeakMap();
  _outroing = new WeakMap();
  _transition = new WeakMap();
  _commit = new WeakMap();
  _discard = new WeakMap();
  function if_block(node, fn, elseif = false) {
    var marker;
    if (hydrating) {
      marker = hydrate_node;
      hydrate_next();
    }
    var branches = new BranchManager(node);
    var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
    function update_branch(key, fn2) {
      if (hydrating) {
        var data = read_hydration_instruction(
          /** @type {TemplateNode} */
          marker
        );
        if (key !== parseInt(data.substring(1))) {
          var anchor = skip_nodes();
          set_hydrate_node(anchor);
          branches.anchor = anchor;
          set_hydrating(false);
          branches.ensure(key, fn2);
          set_hydrating(true);
          return;
        }
      }
      branches.ensure(key, fn2);
    }
    block(() => {
      var has_branch = false;
      fn((fn2, key = 0) => {
        has_branch = true;
        update_branch(key, fn2);
      });
      if (!has_branch) {
        update_branch(-1, null);
      }
    }, flags2);
  }
  function index(_, i) {
    return i;
  }
  function pause_effects(state2, to_destroy, controlled_anchor) {
    var transitions = [];
    var length = to_destroy.length;
    var group;
    var remaining = to_destroy.length;
    for (var i = 0; i < length; i++) {
      let effect2 = to_destroy[i];
      pause_effect(
        effect2,
        () => {
          if (group) {
            group.pending.delete(effect2);
            group.done.add(effect2);
            if (group.pending.size === 0) {
              var groups = (
                /** @type {Set<EachOutroGroup>} */
                state2.outrogroups
              );
              destroy_effects(state2, array_from(group.done));
              groups.delete(group);
              if (groups.size === 0) {
                state2.outrogroups = null;
              }
            }
          } else {
            remaining -= 1;
          }
        },
        false
      );
    }
    if (remaining === 0) {
      var fast_path = transitions.length === 0 && controlled_anchor !== null && state2.pending.size === 0;
      if (fast_path) {
        var anchor = (
          /** @type {Element} */
          controlled_anchor
        );
        var parent_node = (
          /** @type {Element} */
          anchor.parentNode
        );
        clear_text_content(parent_node);
        parent_node.append(anchor);
        state2.items.clear();
      }
      destroy_effects(state2, to_destroy, !fast_path);
    } else {
      group = {
        pending: new Set(to_destroy),
        done: /* @__PURE__ */ new Set()
      };
      (state2.outrogroups ?? (state2.outrogroups = /* @__PURE__ */ new Set())).add(group);
    }
  }
  function destroy_effects(state2, to_destroy, remove_dom = true) {
    var preserved_effects;
    if (state2.pending.size > 0) {
      preserved_effects = /* @__PURE__ */ new Set();
      for (const keys of state2.pending.values()) {
        for (const key of keys) {
          preserved_effects.add(
            /** @type {EachItem} */
            state2.items.get(key).e
          );
        }
      }
    }
    for (var i = 0; i < to_destroy.length; i++) {
      var e = to_destroy[i];
      if (preserved_effects?.has(e)) {
        e.f |= EFFECT_OFFSCREEN;
        const fragment = document.createDocumentFragment();
        move_effect(e, fragment);
      } else {
        destroy_effect(to_destroy[i], remove_dom);
      }
    }
  }
  var offscreen_anchor;
  function each(node, flags2, get_collection, get_key, render_fn2, fallback_fn = null) {
    var anchor = node;
    var items = /* @__PURE__ */ new Map();
    var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(parent_node)) : parent_node.appendChild(create_text());
    }
    if (hydrating) {
      hydrate_next();
    }
    var fallback = null;
    var each_array = /* @__PURE__ */ derived_safe_equal(() => {
      var collection = get_collection();
      return (
        /** @type {V[]} */
        is_array(collection) ? collection : collection == null ? [] : array_from(collection)
      );
    });
    var pending = /* @__PURE__ */ new Map();
    var first_run = true;
    function commit(batch) {
      if ((state2.effect.f & DESTROYED) !== 0) {
        return;
      }
      state2.pending.delete(batch);
      var array = get(each_array);
      state2.fallback = fallback;
      reconcile(state2, array, anchor, flags2, get_key);
      if (fallback !== null) {
        if (array.length === 0) {
          if ((fallback.f & EFFECT_OFFSCREEN) === 0) {
            resume_effect(fallback);
          } else {
            fallback.f ^= EFFECT_OFFSCREEN;
            move(fallback, null, anchor);
          }
        } else {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
    }
    function discard(batch) {
      state2.pending.delete(batch);
    }
    var effect2 = block(() => {
      var array = (
        /** @type {V[]} */
        get(each_array)
      );
      var length = array.length;
      let mismatch = false;
      if (hydrating) {
        var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
        if (is_else !== (length === 0)) {
          anchor = skip_nodes();
          set_hydrate_node(anchor);
          set_hydrating(false);
          mismatch = true;
        }
      }
      var keys = /* @__PURE__ */ new Set();
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var defer = should_defer_append();
      for (var index2 = 0; index2 < length; index2 += 1) {
        if (hydrating && hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
        hydrate_node.data === HYDRATION_END) {
          anchor = /** @type {Comment} */
          hydrate_node;
          mismatch = true;
          set_hydrating(false);
        }
        var value = array[index2];
        var key = get_key(value, index2);
        var item = first_run ? null : items.get(key);
        if (item) {
          if (item.v) internal_set(item.v, value);
          if (item.i) internal_set(item.i, index2);
          if (defer) {
            batch.unskip_effect(item.e);
          }
        } else {
          item = create_item(
            items,
            first_run ? anchor : offscreen_anchor ?? (offscreen_anchor = create_text()),
            value,
            key,
            index2,
            render_fn2,
            flags2,
            get_collection
          );
          if (!first_run) {
            item.e.f |= EFFECT_OFFSCREEN;
          }
          items.set(key, item);
        }
        keys.add(key);
      }
      if (length === 0 && fallback_fn && !fallback) {
        if (first_run) {
          fallback = branch(() => fallback_fn(anchor));
        } else {
          fallback = branch(() => fallback_fn(offscreen_anchor ?? (offscreen_anchor = create_text())));
          fallback.f |= EFFECT_OFFSCREEN;
        }
      }
      if (length > keys.size) {
        {
          each_key_duplicate();
        }
      }
      if (hydrating && length > 0) {
        set_hydrate_node(skip_nodes());
      }
      if (!first_run) {
        pending.set(batch, keys);
        if (defer) {
          for (const [key2, item2] of items) {
            if (!keys.has(key2)) {
              batch.skip_effect(item2.e);
            }
          }
          batch.oncommit(commit);
          batch.ondiscard(discard);
        } else {
          commit(batch);
        }
      }
      if (mismatch) {
        set_hydrating(true);
      }
      get(each_array);
    });
    var state2 = { effect: effect2, items, pending, outrogroups: null, fallback };
    first_run = false;
    if (hydrating) {
      anchor = hydrate_node;
    }
  }
  function skip_to_branch(effect2) {
    while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
      effect2 = effect2.next;
    }
    return effect2;
  }
  function reconcile(state2, array, anchor, flags2, get_key) {
    var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
    var length = array.length;
    var items = state2.items;
    var current = skip_to_branch(state2.effect.first);
    var seen2;
    var prev = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var effect2;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        effect2 = /** @type {EachItem} */
        items.get(key).e;
        if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
          effect2.nodes?.a?.measure();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(effect2);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key).e;
      if (state2.outrogroups !== null) {
        for (const group of state2.outrogroups) {
          group.pending.delete(effect2);
          group.done.delete(effect2);
        }
      }
      if ((effect2.f & INERT) !== 0) {
        resume_effect(effect2);
        if (is_animated) {
          effect2.nodes?.a?.unfix();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(effect2);
        }
      }
      if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
        effect2.f ^= EFFECT_OFFSCREEN;
        if (effect2 === current) {
          move(effect2, null, anchor);
        } else {
          var next2 = prev ? prev.next : current;
          if (effect2 === state2.effect.last) {
            state2.effect.last = effect2.prev;
          }
          if (effect2.prev) effect2.prev.next = effect2.next;
          if (effect2.next) effect2.next.prev = effect2.prev;
          link(state2, prev, effect2);
          link(state2, effect2, next2);
          move(effect2, next2, anchor);
          prev = effect2;
          matched = [];
          stashed = [];
          current = skip_to_branch(prev.next);
          continue;
        }
      }
      if (effect2 !== current) {
        if (seen2 !== void 0 && seen2.has(effect2)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen2.delete(stashed[j]);
            }
            link(state2, a.prev, b.next);
            link(state2, prev, a);
            link(state2, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen2.delete(effect2);
            move(effect2, current, anchor);
            link(state2, effect2.prev, effect2.next);
            link(state2, effect2, prev === null ? state2.effect.first : prev.next);
            link(state2, prev, effect2);
            prev = effect2;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current !== effect2) {
          (seen2 ?? (seen2 = /* @__PURE__ */ new Set())).add(current);
          stashed.push(current);
          current = skip_to_branch(current.next);
        }
        if (current === null) {
          continue;
        }
      }
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        matched.push(effect2);
      }
      prev = effect2;
      current = skip_to_branch(effect2.next);
    }
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        if (group.pending.size === 0) {
          destroy_effects(state2, array_from(group.done));
          state2.outrogroups?.delete(group);
        }
      }
      if (state2.outrogroups.size === 0) {
        state2.outrogroups = null;
      }
    }
    if (current !== null || seen2 !== void 0) {
      var to_destroy = [];
      if (seen2 !== void 0) {
        for (effect2 of seen2) {
          if ((effect2.f & INERT) === 0) {
            to_destroy.push(effect2);
          }
        }
      }
      while (current !== null) {
        if ((current.f & INERT) === 0 && current !== state2.fallback) {
          to_destroy.push(current);
        }
        current = skip_to_branch(current.next);
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].nodes?.a?.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].nodes?.a?.fix();
          }
        }
        pause_effects(state2, to_destroy, controlled_anchor);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        if (to_animate === void 0) return;
        for (effect2 of to_animate) {
          effect2.nodes?.a?.apply();
        }
      });
    }
  }
  function create_item(items, anchor, value, key, index2, render_fn2, flags2, get_collection) {
    var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? /* @__PURE__ */ mutable_source(value, false, false) : source(value) : null;
    var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
    return {
      v,
      i,
      e: branch(() => {
        render_fn2(anchor, v ?? value, i ?? index2, get_collection);
        return () => {
          items.delete(key);
        };
      })
    };
  }
  function move(effect2, next2, anchor) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    var dest = next2 && (next2.f & EFFECT_OFFSCREEN) === 0 ? (
      /** @type {EffectNodes} */
      next2.nodes.start
    ) : anchor;
    while (node !== null) {
      var next_node = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      dest.before(node);
      if (node === end) {
        return;
      }
      node = next_node;
    }
  }
  function link(state2, prev, next2) {
    if (prev === null) {
      state2.effect.first = next2;
    } else {
      prev.next = next2;
    }
    if (next2 === null) {
      state2.effect.last = prev;
    } else {
      next2.prev = prev;
    }
  }
  function html$1(node, get_value, is_controlled = false, svg = false, mathml = false, skip_warning = false) {
    var anchor = node;
    var value = "";
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      if (hydrating) {
        anchor = set_hydrate_node(/* @__PURE__ */ get_first_child(parent_node));
      }
    }
    template_effect(() => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      if (value === (value = get_value() ?? "")) {
        if (hydrating) hydrate_next();
        return;
      }
      if (is_controlled && !hydrating) {
        effect2.nodes = null;
        parent_node.innerHTML = /** @type {string} */
        value;
        if (value !== "") {
          assign_nodes(
            /** @type {TemplateNode} */
            /* @__PURE__ */ get_first_child(parent_node),
            /** @type {TemplateNode} */
            parent_node.lastChild
          );
        }
        return;
      }
      if (effect2.nodes !== null) {
        remove_effect_dom(
          effect2.nodes.start,
          /** @type {TemplateNode} */
          effect2.nodes.end
        );
        effect2.nodes = null;
      }
      if (value === "") return;
      if (hydrating) {
        hydrate_node.data;
        var next2 = hydrate_next();
        var last = next2;
        while (next2 !== null && (next2.nodeType !== COMMENT_NODE || /** @type {Comment} */
        next2.data !== "")) {
          last = next2;
          next2 = /* @__PURE__ */ get_next_sibling(next2);
        }
        if (next2 === null) {
          hydration_mismatch();
          throw HYDRATION_ERROR;
        }
        assign_nodes(hydrate_node, last);
        anchor = set_hydrate_node(next2);
        return;
      }
      var ns = svg ? NAMESPACE_SVG : mathml ? NAMESPACE_MATHML : void 0;
      var wrapper = (
        /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
        create_element(svg ? "svg" : mathml ? "math" : "template", ns)
      );
      wrapper.innerHTML = /** @type {any} */
      value;
      var node2 = svg || mathml ? wrapper : (
        /** @type {HTMLTemplateElement} */
        wrapper.content
      );
      assign_nodes(
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(node2),
        /** @type {TemplateNode} */
        node2.lastChild
      );
      if (svg || mathml) {
        while (/* @__PURE__ */ get_first_child(node2)) {
          anchor.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ get_first_child(node2)
          );
        }
      } else {
        anchor.before(node2);
      }
    });
  }
  function snippet(node, get_snippet, ...args) {
    var branches = new BranchManager(node);
    block(() => {
      const snippet2 = get_snippet() ?? null;
      branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
    }, EFFECT_TRANSPARENT);
  }
  function createRawSnippet(fn) {
    return (anchor, ...params) => {
      var snippet2 = fn(...params);
      var element2;
      if (hydrating) {
        element2 = /** @type {Element} */
        hydrate_node;
        hydrate_next();
      } else {
        var html2 = snippet2.render().trim();
        var fragment = create_fragment_from_html(html2);
        element2 = /** @type {Element} */
        /* @__PURE__ */ get_first_child(fragment);
        anchor.before(element2);
      }
      const result = snippet2.setup?.(element2);
      assign_nodes(element2, element2);
      if (typeof result === "function") {
        teardown(result);
      }
    };
  }
  function element(node, get_tag, is_svg, render_fn2, get_namespace, location) {
    let was_hydrating = hydrating;
    if (hydrating) {
      hydrate_next();
    }
    var element2 = null;
    if (hydrating && hydrate_node.nodeType === ELEMENT_NODE) {
      element2 = /** @type {Element} */
      hydrate_node;
      hydrate_next();
    }
    var anchor = (
      /** @type {TemplateNode} */
      hydrating ? hydrate_node : node
    );
    var branches = new BranchManager(anchor, false);
    block(() => {
      const next_tag = get_tag() || null;
      var ns = next_tag === "svg" ? NAMESPACE_SVG : void 0;
      if (next_tag === null) {
        branches.ensure(null, null);
        return;
      }
      branches.ensure(next_tag, (anchor2) => {
        if (next_tag) {
          var is_hydrating = hydrating;
          element2 = hydrating ? (
            /** @type {Element} */
            element2
          ) : create_element(next_tag, ns);
          assign_nodes(element2, element2);
          if (render_fn2) {
            var tmp_comment = null;
            if (hydrating && is_raw_text_element(next_tag)) {
              element2.append(tmp_comment = document.createComment(""));
            }
            var child_anchor = hydrating ? /* @__PURE__ */ get_first_child(element2) : element2.appendChild(create_text());
            if (hydrating) {
              if (child_anchor === null) {
                set_hydrating(false);
              } else {
                set_hydrate_node(child_anchor);
              }
            }
            render_fn2(element2, child_anchor);
            tmp_comment?.remove();
          }
          active_effect.nodes.end = element2;
          if (!is_hydrating) anchor2.before(element2);
        }
        if (hydrating) {
          set_hydrate_node(anchor2);
        }
      });
      return () => {
      };
    }, EFFECT_TRANSPARENT);
    teardown(() => {
    });
    if (was_hydrating) {
      set_hydrating(true);
      set_hydrate_node(anchor);
    }
  }
  function attach(node, get_fn) {
    var fn = void 0;
    var e;
    managed(() => {
      if (fn !== (fn = get_fn())) {
        if (e) {
          destroy_effect(e);
          e = null;
        }
        if (fn) {
          e = branch(() => {
            effect(() => (
              /** @type {(node: Element) => void} */
              fn(node)
            ));
          });
        }
      }
    });
  }
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx$1() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  function clsx(value) {
    if (typeof value === "object") {
      return clsx$1(value);
    } else {
      return value ?? "";
    }
  }
  const whitespace = [..." 	\n\r\f \v\uFEFF"];
  function to_class(value, hash, directives) {
    var classname = value == null ? "" : "" + value;
    if (directives) {
      for (var key of Object.keys(directives)) {
        if (directives[key]) {
          classname = classname ? classname + " " + key : key;
        } else if (classname.length) {
          var len = key.length;
          var a = 0;
          while ((a = classname.indexOf(key, a)) >= 0) {
            var b = a + len;
            if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
              classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
            } else {
              a = b;
            }
          }
        }
      }
    }
    return classname === "" ? null : classname;
  }
  function append_styles(styles, important = false) {
    var separator = important ? " !important;" : ";";
    var css = "";
    for (var key of Object.keys(styles)) {
      var value = styles[key];
      if (value != null && value !== "") {
        css += " " + key + ": " + value + separator;
      }
    }
    return css;
  }
  function to_css_name(name) {
    if (name[0] !== "-" || name[1] !== "-") {
      return name.toLowerCase();
    }
    return name;
  }
  function to_style(value, styles) {
    if (styles) {
      var new_style = "";
      var normal_styles;
      var important_styles;
      if (Array.isArray(styles)) {
        normal_styles = styles[0];
        important_styles = styles[1];
      } else {
        normal_styles = styles;
      }
      if (value) {
        value = String(value).replaceAll(/\/\*.*?\*\//g, "").trim();
        var in_str = false;
        var in_apo = 0;
        var in_comment = false;
        var reserved_names = [];
        if (normal_styles) {
          reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
        }
        if (important_styles) {
          reserved_names.push(...Object.keys(important_styles).map(to_css_name));
        }
        var start_index = 0;
        var name_index = -1;
        const len = value.length;
        for (var i = 0; i < len; i++) {
          var c = value[i];
          if (in_comment) {
            if (c === "/" && value[i - 1] === "*") {
              in_comment = false;
            }
          } else if (in_str) {
            if (in_str === c) {
              in_str = false;
            }
          } else if (c === "/" && value[i + 1] === "*") {
            in_comment = true;
          } else if (c === '"' || c === "'") {
            in_str = c;
          } else if (c === "(") {
            in_apo++;
          } else if (c === ")") {
            in_apo--;
          }
          if (!in_comment && in_str === false && in_apo === 0) {
            if (c === ":" && name_index === -1) {
              name_index = i;
            } else if (c === ";" || i === len - 1) {
              if (name_index !== -1) {
                var name = to_css_name(value.substring(start_index, name_index).trim());
                if (!reserved_names.includes(name)) {
                  if (c !== ";") {
                    i++;
                  }
                  var property = value.substring(start_index, i).trim();
                  new_style += " " + property + ";";
                }
              }
              start_index = i + 1;
              name_index = -1;
            }
          }
        }
      }
      if (normal_styles) {
        new_style += append_styles(normal_styles);
      }
      if (important_styles) {
        new_style += append_styles(important_styles, true);
      }
      new_style = new_style.trim();
      return new_style === "" ? null : new_style;
    }
    return value == null ? null : String(value);
  }
  function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
    var prev = (
      /** @type {any} */
      dom[CLASS_CACHE]
    );
    if (hydrating || prev !== value || prev === void 0) {
      var next_class_name = to_class(value, hash, next_classes);
      if (!hydrating || next_class_name !== dom.getAttribute("class")) {
        if (next_class_name == null) {
          dom.removeAttribute("class");
        } else if (is_html) {
          dom.className = next_class_name;
        } else {
          dom.setAttribute("class", next_class_name);
        }
      }
      dom[CLASS_CACHE] = value;
    } else if (next_classes && prev_classes !== next_classes) {
      for (var key in next_classes) {
        var is_present = !!next_classes[key];
        if (prev_classes == null || is_present !== !!prev_classes[key]) {
          dom.classList.toggle(key, is_present);
        }
      }
    }
    return next_classes;
  }
  function update_styles(dom, prev = {}, next2, priority) {
    for (var key in next2) {
      var value = next2[key];
      if (prev[key] !== value) {
        if (next2[key] == null) {
          dom.style.removeProperty(key);
        } else {
          dom.style.setProperty(key, value, priority);
        }
      }
    }
  }
  function set_style(dom, value, prev_styles, next_styles) {
    var prev = (
      /** @type {any} */
      dom[STYLE_CACHE]
    );
    if (hydrating || prev !== value) {
      var next_style_attr = to_style(value, next_styles);
      if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
        if (next_style_attr == null) {
          dom.removeAttribute("style");
        } else {
          dom.style.cssText = next_style_attr;
        }
      }
      dom[STYLE_CACHE] = value;
    } else if (next_styles) {
      if (Array.isArray(next_styles)) {
        update_styles(dom, prev_styles?.[0], next_styles[0]);
        update_styles(dom, prev_styles?.[1], next_styles[1], "important");
      } else {
        update_styles(dom, prev_styles, next_styles);
      }
    }
    return next_styles;
  }
  function set_selected(option, selected) {
    if (selected) {
      if (!option.hasAttribute("selected")) option.setAttribute("selected", "");
    } else {
      option.removeAttribute("selected");
    }
  }
  function set_default_select_value(select, value) {
    var mounting = !("__defaultValue" in select);
    if (!mounting && select.__defaultValue === value) return;
    select.__defaultValue = value;
    apply_default_select_value(select, !mounting || "__value" in select);
  }
  function apply_default_select_value(select, preserve) {
    var value = select.__defaultValue;
    var multiple = select.multiple;
    var values = multiple ? value ?? [] : null;
    if (multiple && !is_array(values)) return;
    var index2 = select.selectedIndex;
    var selected = preserve && multiple ? new Set(select.selectedOptions) : null;
    for (var option of select.options) {
      var option_value = get_option_value(option);
      set_selected(
        option,
        multiple ? (
          /** @type {any[]} */
          values.includes(option_value)
        ) : is(option_value, value)
      );
    }
    if (!preserve) return;
    if (selected !== null) {
      for (option of select.options) {
        var was_selected = selected.has(option);
        if (option.selected !== was_selected) option.selected = was_selected;
      }
    } else if (select.selectedIndex !== index2) {
      select.selectedIndex = index2;
    }
  }
  function select_option(select, value, mounting = false) {
    if (select.multiple) {
      if (value == void 0) {
        return;
      }
      if (!is_array(value)) {
        return select_multiple_invalid_value();
      }
      for (var option of select.options) {
        option.selected = value.includes(get_option_value(option));
      }
      return;
    }
    for (option of select.options) {
      var option_value = get_option_value(option);
      if (is(option_value, value)) {
        option.selected = true;
        return;
      }
    }
    if (!mounting || value !== void 0) {
      select.selectedIndex = -1;
    }
  }
  function init_select(select) {
    var observer = new MutationObserver((entries) => {
      if (entries.every(is_selectedcontent_mutation)) return;
      if ("__defaultValue" in select) {
        apply_default_select_value(select, false);
      }
      if ("__value" in select) {
        select_option(select, select.__value);
      }
    });
    observer.observe(select, {
      // Listen to option element changes
      childList: true,
      subtree: true,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: true,
      attributeFilter: ["value"]
    });
    teardown(() => {
      observer.disconnect();
    });
  }
  function bind_select_value(select, get2, set2 = get2) {
    var batches = /* @__PURE__ */ new WeakSet();
    var mounting = true;
    listen_to_event_and_reset_event(select, "change", (is_reset) => {
      var query = is_reset ? "[selected]" : ":checked";
      var value;
      if (select.multiple) {
        value = [].map.call(select.querySelectorAll(query), get_option_value);
      } else {
        var selected_option = select.querySelector(query) ?? // will fall back to first non-disabled option if no option is selected
        select.querySelector("option:not([disabled])");
        value = selected_option && get_option_value(selected_option);
      }
      set2(value);
      select.__value = value;
      if (current_batch !== null) {
        batches.add(current_batch);
      }
    });
    effect(() => {
      var value = get2();
      if (select === document.activeElement) {
        var batch = (
          /** @type {Batch} */
          current_batch
        );
        if (batches.has(batch)) {
          return;
        }
      }
      select_option(select, value, mounting);
      if (mounting && value === void 0) {
        var selected_option = select.querySelector(":checked");
        if (selected_option !== null) {
          value = get_option_value(selected_option);
          set2(value);
        }
      }
      select.__value = value;
      mounting = false;
    });
  }
  function get_option_value(option) {
    if ("__value" in option) {
      return option.__value;
    } else {
      return option.value;
    }
  }
  function is_selectedcontent_mutation(entry) {
    if (
      /** @type {Element} */
      entry.target.closest("selectedcontent") !== null
    ) {
      return true;
    }
    if (entry.type === "childList") {
      var nodes = [...entry.addedNodes, ...entry.removedNodes];
      return nodes.length > 0 && nodes.every((node) => node.nodeName === "SELECTEDCONTENT");
    }
    return false;
  }
  const CLASS = Symbol("class");
  const STYLE = Symbol("style");
  const IS_CUSTOM_ELEMENT = Symbol("is custom element");
  const IS_HTML = Symbol("is html");
  const LINK_TAG = IS_XHTML ? "link" : "LINK";
  const INPUT_TAG = IS_XHTML ? "input" : "INPUT";
  const OPTION_TAG = IS_XHTML ? "option" : "OPTION";
  const SELECT_TAG = IS_XHTML ? "select" : "SELECT";
  const PROGRESS_TAG = IS_XHTML ? "progress" : "PROGRESS";
  function remove_input_defaults(input) {
    if (!hydrating) return;
    var already_removed = false;
    var remove_defaults = () => {
      if (already_removed) return;
      already_removed = true;
      if (input.hasAttribute("value")) {
        var value = input.value;
        set_attribute(input, "value", null);
        input.value = value;
      }
      if (input.hasAttribute("checked")) {
        var checked = input.checked;
        set_attribute(input, "checked", null);
        input.checked = checked;
      }
    };
    input[FORM_RESET_HANDLER] = remove_defaults;
    queue_micro_task(remove_defaults);
    add_form_reset_listener();
  }
  function set_attribute(element2, attribute, value, skip_warning) {
    var attributes = get_attributes(element2);
    if (hydrating) {
      attributes[attribute] = element2.getAttribute(attribute);
      if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === LINK_TAG) {
        return;
      }
    }
    var previous = attributes[attribute];
    if (previous === (attributes[attribute] = value)) return;
    if (attribute === "loading") {
      element2[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element2.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element2).has(attribute)) {
      element2[attribute] = value;
    } else if (
      // while hydrating, skip a number or boolean whose string the server already rendered
      !(hydrating && (typeof value === "number" || typeof value === "boolean") && previous === String(value))
    ) {
      element2.setAttribute(attribute, value);
    }
  }
  function set_attributes(element2, prev, next2, css_hash, should_remove_defaults = false, skip_warning = false) {
    if (hydrating && should_remove_defaults && element2.nodeName === INPUT_TAG) {
      if (!("defaultValue" in next2 || "defaultChecked" in next2)) {
        remove_input_defaults(
          /** @type {HTMLInputElement} */
          element2
        );
      }
    }
    var attributes = get_attributes(element2);
    var is_custom_element = attributes[IS_CUSTOM_ELEMENT];
    var preserve_attribute_case = !attributes[IS_HTML];
    let is_hydrating_custom_element = hydrating && is_custom_element;
    if (is_hydrating_custom_element) {
      set_hydrating(false);
    }
    var current = prev || {};
    var is_option_element = element2.nodeName === OPTION_TAG;
    var is_select_element = element2.nodeName === SELECT_TAG;
    try {
      for (var key in prev) {
        if (!(key in next2) && key[0] + key[1] !== "$$") {
          next2[key] = null;
        }
      }
      if (next2.class) {
        next2.class = clsx(next2.class);
      } else if (css_hash || next2[CLASS]) {
        next2.class = null;
      }
      if (next2[STYLE]) {
        next2.style ?? (next2.style = null);
      }
      var setters = get_setters(element2);
      if (element2.nodeName === INPUT_TAG && "type" in next2 && ("value" in next2 || "__value" in next2)) {
        var type = next2.type;
        if (type !== current.type || type === void 0 && element2.hasAttribute("type")) {
          current.type = type;
          set_attribute(element2, "type", type, skip_warning);
        }
      }
      for (const key2 in next2) {
        let value = next2[key2];
        if (is_option_element && key2 === "value" && value == null) {
          element2.value = element2.__value = "";
          current[key2] = value;
          continue;
        }
        if (key2 === "class") {
          var is_html = element2.namespaceURI === "http://www.w3.org/1999/xhtml";
          set_class(element2, is_html, value, css_hash, prev?.[CLASS], next2[CLASS]);
          current[key2] = value;
          current[CLASS] = next2[CLASS];
          continue;
        }
        if (key2 === "style") {
          set_style(element2, value, prev?.[STYLE], next2[STYLE]);
          current[key2] = value;
          current[STYLE] = next2[STYLE];
          continue;
        }
        var prev_value = current[key2];
        if (value === prev_value && !(value === void 0 && element2.hasAttribute(key2))) {
          continue;
        }
        current[key2] = value;
        var prefix = key2[0] + key2[1];
        if (prefix === "$$") continue;
        if (prefix === "on") {
          const opts = {};
          const event_handle_key = "$$" + key2;
          let event_name = key2.slice(2);
          var is_delegated = can_delegate_event(event_name);
          if (is_capture_event(event_name)) {
            event_name = event_name.slice(0, -7);
            opts.capture = true;
          }
          if (!is_delegated && prev_value) {
            if (value != null) continue;
            element2.removeEventListener(event_name, current[event_handle_key], opts);
            current[event_handle_key] = null;
          }
          if (is_delegated) {
            delegated(event_name, element2, value);
            delegate([event_name]);
          } else if (value != null) {
            let handle = function(evt) {
              current[key2].call(this, evt);
            };
            current[event_handle_key] = create_event(event_name, element2, handle, opts);
          }
        } else if (key2 === "style") {
          set_attribute(element2, key2, value);
        } else if (key2 === "autofocus") {
          autofocus(
            /** @type {HTMLElement} */
            element2,
            Boolean(value)
          );
        } else if (!is_custom_element && (key2 === "__value" || key2 === "value" && value != null)) {
          element2.__value = value;
          if (prev_value == null || // @ts-ignore
          element2.value !== value || value === 0 && element2.nodeName === PROGRESS_TAG) {
            element2.value = value;
          }
        } else if (key2 === "selected" && is_option_element) {
          set_selected(
            /** @type {HTMLOptionElement} */
            element2,
            value
          );
        } else {
          var name = key2;
          if (!preserve_attribute_case) {
            name = normalize_attribute(name);
          }
          var is_default = name === "defaultValue" || name === "defaultChecked";
          if (is_select_element && name === "defaultValue") continue;
          if (value == null && !is_custom_element && !is_default) {
            attributes[key2] = null;
            if (name === "value" || name === "checked") {
              let input = (
                /** @type {HTMLInputElement} */
                element2
              );
              const use_default = prev === void 0;
              if (name === "value") {
                let previous = input.defaultValue;
                input.removeAttribute(name);
                input.defaultValue = previous;
                input.value = input.__value = use_default ? previous : null;
              } else {
                let previous = input.defaultChecked;
                input.removeAttribute(name);
                input.defaultChecked = previous;
                input.checked = use_default ? previous : false;
              }
            } else {
              element2.removeAttribute(key2);
            }
          } else if (is_default || (is_custom_element || typeof value !== "string") && setters.has(name)) {
            element2[name] = value;
            if (name in attributes) attributes[name] = UNINITIALIZED;
          } else if (typeof value !== "function") {
            set_attribute(element2, name, value, skip_warning);
          }
        }
      }
    } finally {
      if (is_hydrating_custom_element) {
        set_hydrating(true);
      }
    }
    return current;
  }
  function attribute_effect(element2, fn, sync = [], async = [], blockers = [], css_hash, should_remove_defaults = false, skip_warning = false) {
    flatten(blockers, sync, async, (values) => {
      var prev = void 0;
      var effects = {};
      var is_select = element2.nodeName === SELECT_TAG;
      var inited = false;
      managed(() => {
        var next2 = fn(...values.map(get));
        var current = set_attributes(
          element2,
          prev,
          next2,
          css_hash,
          should_remove_defaults,
          skip_warning
        );
        if (inited && is_select) {
          var select2 = (
            /** @type {HTMLSelectElement} */
            element2
          );
          if ("defaultValue" in next2) {
            set_default_select_value(select2, next2.defaultValue);
          }
          if ("value" in next2) {
            select_option(select2, next2.value);
          }
        }
        for (let symbol of Object.getOwnPropertySymbols(effects)) {
          if (!next2[symbol]) destroy_effect(effects[symbol]);
        }
        for (let symbol of Object.getOwnPropertySymbols(next2)) {
          var n = next2[symbol];
          if (symbol.description === ATTACHMENT_KEY && (!prev || n !== prev[symbol])) {
            if (effects[symbol]) destroy_effect(effects[symbol]);
            effects[symbol] = branch(() => attach(element2, () => n));
          }
          current[symbol] = n;
        }
        prev = current;
      });
      if (is_select) {
        var select = (
          /** @type {HTMLSelectElement} */
          element2
        );
        effect(() => {
          var attrs = (
            /** @type {Record<string | symbol, any>} */
            prev
          );
          if ("defaultValue" in attrs) {
            set_default_select_value(select, attrs.defaultValue);
          }
          select_option(select, attrs.value, true);
          init_select(select);
        });
      }
      inited = true;
    });
  }
  function get_attributes(element2) {
    return (
      /** @type {Record<string | symbol, unknown>} **/
      /** @type {any} */
      element2[ATTRIBUTES_CACHE] ?? (element2[ATTRIBUTES_CACHE] = {
        [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
        [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
      })
    );
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element2) {
    var cache_key = element2.getAttribute("is") || element2.nodeName;
    var setters = setters_cache.get(cache_key);
    if (setters) return setters;
    setters_cache.set(cache_key, setters = /* @__PURE__ */ new Set());
    var descriptors;
    var proto = element2;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
        key !== "innerHTML" && key !== "textContent" && key !== "innerText") {
          setters.add(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  let supported = null;
  function is_supported() {
    if (supported === null) {
      var select = create_element("select");
      select.innerHTML = create_trusted_html("<option><span>t</span></option>");
      supported = /** @type {Element} */
      select.firstChild?.firstChild?.nodeType === 1;
    }
    return supported;
  }
  function customizable_select(element2, rich_fn) {
    var was_hydrating = hydrating;
    if (!is_supported()) {
      set_hydrating(false);
      element2.textContent = "";
      element2.append(create_comment(""));
    }
    try {
      rich_fn();
    } finally {
      if (was_hydrating) {
        if (hydrating) {
          reset(element2);
        } else {
          set_hydrating(true);
          set_hydrate_node(element2);
        }
      }
    }
  }
  function bind_value(input, get2, set2 = get2) {
    var batches = /* @__PURE__ */ new WeakSet();
    listen_to_event_and_reset_event(input, "input", async (is_reset) => {
      var value = is_reset ? input.defaultValue : input.value;
      value = is_numberlike_input(input) ? to_number(value) : value;
      set2(value);
      if (current_batch !== null) {
        batches.add(current_batch);
      }
      await tick();
      if (value !== (value = get2())) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        var length = input.value.length;
        input.value = value ?? "";
        if (end !== null) {
          var new_length = input.value.length;
          if (start === end && end === length && new_length > length) {
            input.selectionStart = new_length;
            input.selectionEnd = new_length;
          } else {
            input.selectionStart = start;
            input.selectionEnd = Math.min(end, new_length);
          }
        }
      }
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the updated value from the input instead.
      hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
      // TODO Svelte 6: remove input.value check and set to empty string?
      untrack(get2) == null && input.value
    ) {
      set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
      if (current_batch !== null) {
        batches.add(current_batch);
      }
    }
    render_effect(() => {
      var value = get2();
      if (input === document.activeElement) {
        var batch = (
          /** @type {Batch} */
          current_batch
        );
        if (batches.has(batch)) {
          return;
        }
      }
      if (is_numberlike_input(input) && value === to_number(input.value)) {
        return;
      }
      if (input.type === "date" && !value && !input.value) {
        return;
      }
      if (value !== input.value) {
        input.value = value ?? "";
      }
    });
  }
  function bind_checked(input, get2, set2 = get2) {
    listen_to_event_and_reset_event(input, "change", (is_reset) => {
      var value = is_reset ? input.defaultChecked : input.checked;
      set2(value);
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the update value from the input instead.
      hydrating && input.defaultChecked !== input.checked || // If defaultChecked is set, then checked == defaultChecked
      untrack(get2) == null
    ) {
      set2(input.checked);
    }
    render_effect(() => {
      var value = get2();
      input.checked = Boolean(value);
    });
  }
  function is_numberlike_input(input) {
    var type = input.type;
    return type === "number" || type === "range";
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
  }
  function bind_this(element_or_component = mark_as_component(), update, get_value, get_parts) {
    var component_effect = (
      /** @type {ComponentContext} */
      component_context.r
    );
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (!is_bound_this(get_value(...parts), element_or_component)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        let p = parent;
        while (p !== component_effect && p.parent !== null && p.parent.f & DESTROYING) {
          p = p.parent;
        }
        const teardown2 = () => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        };
        const original_teardown = p.teardown;
        p.teardown = () => {
          teardown2();
          original_teardown?.();
        };
      };
    });
    return element_or_component;
  }
  let is_store_binding = false;
  function capture_store_binding(fn) {
    var previous_is_store_binding = is_store_binding;
    try {
      is_store_binding = false;
      return [fn(), is_store_binding];
    } finally {
      is_store_binding = previous_is_store_binding;
    }
  }
  const rest_props_handler = {
    get(target, key) {
      if (target.exclude.has(key)) return;
      return target.props[key];
    },
    set(target, key) {
      return false;
    },
    getOwnPropertyDescriptor(target, key) {
      if (target.exclude.has(key)) return;
      if (key in target.props) {
        return {
          enumerable: true,
          configurable: true,
          value: target.props[key]
        };
      }
    },
    has(target, key) {
      if (target.exclude.has(key)) return false;
      return key in target.props;
    },
    ownKeys(target) {
      return Reflect.ownKeys(target.props).filter((key) => !target.exclude.has(key));
    }
  };
  // @__NO_SIDE_EFFECTS__
  function rest_props(props, exclude, name) {
    return new Proxy({ props, exclude }, rest_props_handler);
  }
  function prop(props, key, flags2, fallback) {
    var runes = true;
    var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
    var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
    var fallback_value = (
      /** @type {V} */
      fallback
    );
    var fallback_dirty = true;
    var fallback_signal = (
      /** @type {Derived<V> | undefined} */
      void 0
    );
    var get_fallback = () => {
      if (lazy && runes) {
        fallback_signal ?? (fallback_signal = /* @__PURE__ */ derived(
          /** @type {() => V} */
          fallback
        ));
        return get(fallback_signal);
      }
      if (fallback_dirty) {
        fallback_dirty = false;
        fallback_value = lazy ? untrack(
          /** @type {() => V} */
          fallback
        ) : (
          /** @type {V} */
          fallback
        );
      }
      return fallback_value;
    };
    let setter;
    if (bindable) {
      var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
      setter = get_descriptor(props, key)?.set ?? (is_entry_props && key in props ? (v) => props[key] = v : void 0);
    }
    var initial_value;
    var is_store_sub = false;
    if (bindable) {
      [initial_value, is_store_sub] = capture_store_binding(() => (
        /** @type {V} */
        props[key]
      ));
    } else {
      initial_value = /** @type {V} */
      props[key];
    }
    if (initial_value === void 0 && fallback !== void 0) {
      initial_value = get_fallback();
      if (setter) {
        props_invalid_value();
        setter(initial_value);
      }
    }
    var getter;
    {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        return value;
      };
    }
    if ((flags2 & PROPS_IS_UPDATED) === 0) {
      return getter;
    }
    if (setter) {
      var legacy_parent = props.$$legacy;
      return (
        /** @type {() => V} */
        (function(value, mutation) {
          if (arguments.length > 0) {
            if (!mutation || legacy_parent || is_store_sub) {
              setter(mutation ? getter() : value);
            }
            return value;
          }
          return getter();
        })
      );
    }
    var overridden = false;
    var d = ((flags2 & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
      overridden = false;
      return getter();
    });
    if (bindable) get(d);
    var parent_effect = (
      /** @type {Effect} */
      active_effect
    );
    return (
      /** @type {() => V} */
      (function(value, mutation) {
        if (arguments.length > 0) {
          const new_value = mutation ? get(d) : bindable ? proxy(value) : value;
          set(d, new_value);
          overridden = true;
          if (fallback_value !== void 0) {
            fallback_value = new_value;
          }
          return value;
        }
        if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
          return d.v;
        }
        return get(d);
      })
    );
  }
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined") {
    ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(PUBLIC_VERSION);
  }
  const ICONS = { "monitor": ["M4.5 4h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-9a1.5 1.5 0 0 1 1.5 -1.5Z", "M12 16L12 20", "M8 20L16 20"], "laptop": ["M6 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1Z", "M2.5 19L21.5 19"], "hard-drive": ["M6 2.5h12a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-15a2 2 0 0 1 2 -2Z", "M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0", "M12 10h.01", "M12.5 10.5L16 15", "M7 18.5h.01", "M17 18.5h.01"], "wrench": ["M11.38 10.36L4.5 17.23A1.6 1.6 0 0 0 6.77 19.5L13.64 12.62A4.2 4.2 0 1 0 19.13 7.13L16.67 9.6L14.4 7.33L16.87 4.87A4.2 4.2 0 1 0 11.38 10.36"], "terminal": ["M4.5 4h15a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-13a1.5 1.5 0 0 1 1.5 -1.5Z", "M7 9L10 12L7 15", "M12 15L17 15"], "server": ["M4.5 3.5h15a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-4a1.5 1.5 0 0 1 1.5 -1.5Z", "M4.5 13.5h15a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-4a1.5 1.5 0 0 1 1.5 -1.5Z", "M7 7h.01", "M7 17h.01", "M11 7L17 7", "M11 17L17 17"], "cpu": ["M7.5 6h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5h-9a1.5 1.5 0 0 1 -1.5 -1.5v-9a1.5 1.5 0 0 1 1.5 -1.5Z", "M10 9.5h4a0.5 0.5 0 0 1 0.5 0.5v4a0.5 0.5 0 0 1 -0.5 0.5h-4a0.5 0.5 0 0 1 -0.5 -0.5v-4a0.5 0.5 0 0 1 0.5 -0.5Z", "M9.5 2.5L9.5 6", "M14.5 2.5L14.5 6", "M9.5 18L9.5 21.5", "M14.5 18L14.5 21.5", "M2.5 9.5L6 9.5", "M2.5 14.5L6 14.5", "M18 9.5L21.5 9.5", "M18 14.5L21.5 14.5"], "upload": ["M12 15L12 4", "M7.5 8.5L12 4L16.5 8.5", "M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"], "camera": ["M3 8.5A1.5 1.5 0 0 1 4.5 7h3l1.5-2.5h6L16.5 7h3A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z", "M8.5 12.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"], "image": ["M4.5 4h15a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-13a1.5 1.5 0 0 1 1.5 -1.5Z", "M6.75 9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0", "M20.5 15L16 10.5L5.5 20"], "clock": ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M12 7L12 12L15.5 14"], "calendar": ["M5 5h14a1.5 1.5 0 0 1 1.5 1.5v12.5a1.5 1.5 0 0 1 -1.5 1.5h-14a1.5 1.5 0 0 1 -1.5 -1.5v-12.5a1.5 1.5 0 0 1 1.5 -1.5Z", "M3.5 10L20.5 10", "M8 3L8 7", "M16 3L16 7"], "map-pin": ["M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11Z", "M9.75 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0 -4.5 0"], "video": ["M4.5 6h9.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5h-9.5a1.5 1.5 0 0 1 -1.5 -1.5v-9a1.5 1.5 0 0 1 1.5 -1.5Z", "M15.5 10.5L21 7.5L21 16.5L15.5 13.5Z"], "home": ["M3.5 10.5L12 3.5L20.5 10.5", "M5.5 9v11h13V9", "M10 20v-5h4v5"], "check": ["M5 12.5L9.5 17L19 7.5"], "check-circle": ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M8 12.5L11 15.5L16.5 9.5"], "alert-triangle": ["M12 3.5L21.5 20L2.5 20Z", "M12 9.5L12 14", "M12 17h.01"], "x": ["M6 6L18 18", "M18 6L6 18"], "x-circle": ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M9 9L15 15", "M15 9L9 15"], "minus-circle": ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M8 12L16 12"], "chevron-down": ["M6 9L12 15L18 9"], "chevron-right": ["M9 6L15 12L9 18"], "chevron-left": ["M15 6L9 12L15 18"], "arrow-right": ["M4.5 12L19 12", "M13 6L19 12L13 18"], "plus": ["M12 5L12 19", "M5 12L19 12"], "menu": ["M4 7L20 7", "M4 12L20 12", "M4 17L20 17"], "info": ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M12 11L12 16.5", "M12 7.75h.01"], "shield-data": ["M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6Z", "M8.75 12L11 14.25L15.5 9.75"], "file-text": ["M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8Z", "M14 3v5h5", "M8.5 13L15.5 13", "M8.5 16.5L13.5 16.5"], "message": ["M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v10a1.5 1.5 0 0 1-1.5 1.5H9l-5 4Z", "M8 9L16 9", "M8 12.5L13 12.5"], "phone": ["M8.5 2.5h7a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-15a2 2 0 0 1 2 -2Z", "M12 18h.01"], "mail": ["M4.5 5h15a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-11a1.5 1.5 0 0 1 1.5 -1.5Z", "M3.5 6L12 13L20.5 6"], "user": ["M8 8a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", "M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5"], "log-in": ["M14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14", "M3.5 12L14.5 12", "M10.5 8L14.5 12L10.5 16"], "search": ["M4 10.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0", "M15.25 15.25L20.5 20.5"], "hourglass": ["M6.5 3L17.5 3", "M6.5 21L17.5 21", "M7.5 3v3.2c0 1.2.6 2.3 1.6 3L12 12l-2.9 2.8a3.8 3.8 0 0 0-1.6 3V21", "M16.5 3v3.2c0 1.2-.6 2.3-1.6 3L12 12l2.9 2.8c1 .7 1.6 1.8 1.6 3V21"], "package": ["M3.5 7.5L12 3L20.5 7.5L20.5 16.5L12 21L3.5 16.5Z", "M3.5 7.5L12 12L20.5 7.5", "M12 12L12 21"], "whatsapp": ["M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.3A8.5 8.5 0 1 1 20.5 11.5Z", "M9.2 8.3c.3-.4.9-.4 1.2 0l.9 1.4c.2.3.1.7-.1.9l-.7.7a5.5 5.5 0 0 0 2.2 2.2l.7-.7c.2-.2.6-.3.9-.1l1.4.9c.4.3.4.9 0 1.2l-.6.6c-.6.6-1.5.7-2.3.4a9 9 0 0 1-4.4-4.4c-.3-.8-.2-1.7.4-2.3Z"], "globe": ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M3 12L21 12", "M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9s1.3-6.3 3.8-9Z"], "code": ["M8 7L3.5 12L8 17", "M16 7L20.5 12L16 17", "M14 4L10 20"], "book-open": ["M12 6.5c-1.5-1.5-3.5-2-6-2H3.5v13H6c2.5 0 4.5.5 6 2 1.5-1.5 3.5-2 6-2h2.5v-13H18c-2.5 0-4.5.5-6 2Z", "M12 6.5L12 19.5"], "graduation-cap": ["M2.5 9.5L12 5L21.5 9.5L12 14Z", "M6.5 11.6V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.4", "M21.5 9.5L21.5 15"], "play-circle": ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M10 8.5L15.5 12L10 15.5Z"], "wifi-off": ["M3 3L21 21", "M8.5 16.5a5 5 0 0 1 7 0", "M5 13a10 10 0 0 1 5.3-2.8", "M12 20h.01", "M1.5 9.5A15 15 0 0 1 6 6.6", "M12 5c3.9 0 7.5 1.6 10.5 4.5", "M15.5 10.5A10 10 0 0 1 19 13"], "refresh": ["M20.5 12a8.5 8.5 0 1 1-2.5-6L20.5 8", "M20.5 3.5L20.5 8L16 8"], "download": ["M12 4L12 15", "M7.5 10.5L12 15L16.5 10.5", "M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"], "external-link": ["M14 4h6v6", "M20 4L11 13", "M18 13.5v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6h5"], "star": ["M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8Z"], "sun": ["M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0", "M12 2v2", "M12 20v2", "M4.93 4.93l1.41 1.41", "M17.66 17.66l1.41 1.41", "M2 12h2", "M20 12h2", "M4.93 19.07l1.41-1.41", "M17.66 6.34l1.41-1.41"], "moon": ["M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z"] };
  const ICON_NAMES = Object.keys(ICONS);
  var rest_excludes$q = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "size",
    "label",
    "strokeWidth",
    "class"
  ]);
  var root$r = /* @__PURE__ */ from_svg(`<path></path>`);
  var root_1$l = /* @__PURE__ */ from_svg(`<svg></svg>`);
  function Icon($$anchor, $$props) {
    push($$props, true);
    let size = prop($$props, "size", 3, 20), strokeWidth = prop($$props, "strokeWidth", 3, 1.75), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$q);
    const paths = /* @__PURE__ */ user_derived(() => ICONS[$$props.name] || []);
    var svg = root_1$l();
    attribute_effect(svg, () => ({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: size(),
      height: size(),
      fill: "none",
      stroke: "currentColor",
      "stroke-width": strokeWidth(),
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      focusable: "false",
      class: `itr-icon ${klass() ?? ""}`,
      role: $$props.label ? "img" : void 0,
      "aria-label": $$props.label || void 0,
      "aria-hidden": $$props.label ? void 0 : "true",
      ...rest
    }));
    each(svg, 21, () => get(paths), index, ($$anchor2, d) => {
      var path = root$r();
      template_effect(() => set_attribute(path, "d", get(d)));
      append($$anchor2, path);
    });
    reset(svg);
    append($$anchor, svg);
    pop();
  }
  const SYMBOL = { offset: "-16.145 -4.145", rotate: "45 54 42", rects: [{ "x": "40", "y": "31", "width": "28", "height": "22", "rx": "3" }, { "x": "10", "y": "36", "width": "22", "height": "12", "rx": "2" }, { "x": "76", "y": "36", "width": "22", "height": "12", "rx": "2" }], lines: ["M32 42L40 42", "M68 42L76 42", "M54 53L54 62"], arcs: ["M22 72a8 8 0 0 1 8 8", "M22 64a16 16 0 0 1 16 16", "M22 56a24 24 0 0 1 24 24"] };
  const WORDMARK = ["M8.72 100V0H25.44V100Z M64.68 100V15.41H44.62V0H101.16V15.41H81.25V100Z M120.35 100V0H168.02V14.97H136.92V42.01H163.81V56.98H136.92V85.03H168.02V100Z M232.12 100 221.37 63.52H207.12V100H190.55V0H222.82Q233.28 0 238.59 3.63Q243.9 7.27 245.71 13.95Q247.53 20.64 247.53 31.69Q247.53 42.44 245.42 49.56Q243.31 56.69 236.92 60.03L249.56 100ZM230.96 31.69Q230.96 24.42 230.16 21.08Q229.36 17.73 226.89 16.35Q224.42 14.97 218.9 14.97H207.12V48.55H218.9Q224.42 48.55 226.89 47.17Q229.36 45.78 230.16 42.37Q230.96 38.95 230.96 31.69Z M327.91 0V55.96Q327.91 75.58 326.16 84.52Q324.42 93.46 318.46 97.31Q312.5 101.16 298.84 101.16Q285.17 101.16 279.22 97.31Q273.26 93.46 271.58 84.52Q269.91 75.58 269.91 55.96V0H286.48V62.21Q286.48 73.84 287.14 78.42Q287.79 82.99 290.26 84.59Q292.73 86.19 298.84 86.19Q305.09 86.19 307.56 84.59Q310.03 82.99 310.68 78.42Q311.34 73.84 311.34 62.21V0Z M396.8 100 369.77 38.23H369.19V100H353.2V0H369.77L395.64 58.72H396.22V0H412.21V100Z M436.05 50Q436.05 27.03 437.65 17.22Q439.24 7.41 445.49 3.12Q451.74 -1.16 466.42 -1.16Q481.1 -1.16 487.35 3.12Q493.6 7.41 495.28 17.3Q496.95 27.18 496.95 50Q496.95 72.82 495.28 82.7Q493.6 92.59 487.35 96.88Q481.1 101.16 466.42 101.16Q451.74 101.16 445.49 96.88Q439.24 92.59 437.65 82.78Q436.05 72.97 436.05 50ZM480.38 50Q480.38 31.25 479.58 24.35Q478.78 17.44 476.16 15.62Q473.55 13.81 466.42 13.81Q459.3 13.81 456.76 15.62Q454.22 17.44 453.42 24.27Q452.62 31.1 452.62 50Q452.62 68.9 453.42 75.73Q454.22 82.56 456.76 84.38Q459.3 86.19 466.42 86.19Q473.55 86.19 476.16 84.38Q478.78 82.56 479.58 75.65Q480.38 68.75 480.38 50Z", "M6.98 158V131.66H0.61V128H17.44V131.66H11.08V158Z M50.18 158V128H64.48V131.58H54.28V141.04H63.13V144.61H54.28V154.42H64.48V158Z M106.55 158.35Q102.54 158.35 100.71 157.13Q98.88 155.91 98.24 152.79Q97.61 149.67 97.61 143Q97.61 136.37 98.24 133.25Q98.88 130.14 100.73 128.89Q102.58 127.65 106.55 127.65Q107.86 127.65 109.23 127.83Q110.6 128 111.43 128.31V131.62Q109.12 131.23 107.38 131.23Q104.59 131.23 103.5 131.97Q102.41 132.71 102.08 134.98Q101.75 137.24 101.75 143Q101.75 148.76 102.08 151.02Q102.41 153.29 103.5 154.03Q104.59 154.77 107.38 154.77Q109.82 154.77 111.52 154.38V157.74Q110.6 158 109.19 158.17Q107.77 158.35 106.55 158.35Z M158.34 158 149.14 136.76H148.97V158H145V128H149.27L158.17 148.54H158.34V128H162.31V158Z M196.57 143Q196.57 136.07 197.1 133.08Q197.62 130.09 199.47 128.87Q201.33 127.65 205.64 127.65Q209.96 127.65 211.81 128.87Q213.67 130.09 214.19 133.08Q214.71 136.07 214.71 143Q214.71 149.93 214.19 152.92Q213.67 155.91 211.81 157.13Q209.96 158.35 205.64 158.35Q201.33 158.35 199.47 157.13Q197.62 155.91 197.1 152.92Q196.57 149.93 196.57 143ZM210.61 143Q210.61 137.03 210.31 134.74Q210 132.45 209.07 131.84Q208.13 131.23 205.64 131.23Q203.16 131.23 202.24 131.84Q201.33 132.45 201.02 134.72Q200.72 136.98 200.72 143Q200.72 149.02 201.02 151.28Q201.33 153.55 202.24 154.16Q203.16 154.77 205.64 154.77Q208.13 154.77 209.07 154.16Q210 153.55 210.31 151.26Q210.61 148.97 210.61 143Z M249.02 158V128H253.16V154.34H262.19V158Z M294.23 143Q294.23 136.07 294.75 133.08Q295.27 130.09 297.13 128.87Q298.98 127.65 303.3 127.65Q307.61 127.65 309.47 128.87Q311.32 130.09 311.84 133.08Q312.37 136.07 312.37 143Q312.37 149.93 311.84 152.92Q311.32 155.91 309.47 157.13Q307.61 158.35 303.3 158.35Q298.98 158.35 297.13 157.13Q295.27 155.91 294.75 152.92Q294.23 149.93 294.23 143ZM308.27 143Q308.27 137.03 307.96 134.74Q307.66 132.45 306.72 131.84Q305.78 131.23 303.3 131.23Q300.81 131.23 299.9 131.84Q298.98 132.45 298.67 134.72Q298.37 136.98 298.37 143Q298.37 149.02 298.67 151.28Q298.98 153.55 299.9 154.16Q300.81 154.77 303.3 154.77Q305.78 154.77 306.72 154.16Q307.66 153.55 307.96 151.26Q308.27 148.97 308.27 143Z M354.83 145.05V141.56H362.68V157.52Q361.11 157.87 359.1 158.11Q357.09 158.35 355.44 158.35Q351.43 158.35 349.49 157.15Q347.55 155.95 346.78 152.77Q346.02 149.58 346.02 143Q346.02 136.46 346.78 133.28Q347.55 130.09 349.51 128.87Q351.47 127.65 355.57 127.65Q357.27 127.65 359.25 127.89Q361.24 128.13 362.59 128.52V131.84Q359.01 131.23 357.05 131.23Q353.74 131.23 352.43 131.84Q351.12 132.45 350.62 134.8Q350.12 137.16 350.12 143Q350.12 148.41 350.47 150.76Q350.82 153.12 351.91 153.99Q353 154.86 355.44 154.86Q357.09 154.86 358.71 154.56V145.05Z M397.2 158V128H401.34V158Z M450.34 158 448.51 150.33H440.05L438.27 158H434.17L441.54 128H447.2L454.53 158ZM444.41 132.45H444.15L440.88 146.79H447.68Z M486.4 157.74V154.29Q490.15 154.77 492.72 154.77Q494.38 154.77 495.36 154.53Q496.34 154.29 496.9 153.73Q497.43 153.2 497.6 152.24Q497.78 151.28 497.78 149.72Q497.78 147.58 497.58 146.68Q497.38 145.79 496.71 145.42Q496.03 145.05 494.38 144.79L489.67 144Q487.31 143.61 486.55 141.76Q485.78 139.9 485.78 136.15Q485.78 131.44 487.81 129.55Q489.84 127.65 494.07 127.65Q495.9 127.65 497.75 127.85Q499.61 128.04 500.74 128.35V131.71Q497.95 131.23 495.07 131.23Q493.28 131.23 492.28 131.49Q491.28 131.75 490.76 132.32Q490.23 132.88 490.06 133.76Q489.88 134.63 489.88 136.07Q489.88 137.9 490.06 138.7Q490.23 139.51 490.73 139.84Q491.24 140.17 492.41 140.34L496.86 141.08Q498.6 141.39 499.67 142.06Q500.74 142.74 501.35 144.31Q501.88 145.79 501.88 149.24Q501.88 152.77 501.07 154.75Q500.26 156.74 498.56 157.54Q496.86 158.35 493.94 158.35Q492.19 158.35 490.1 158.17Q488.01 158 486.4 157.74Z"];
  const WORDMARK_CURTO = "M8.72 100V0H25.44V100Z M64.68 100V15.41H44.62V0H101.16V15.41H81.25V100Z M120.35 100V0H168.02V14.97H136.92V42.01H163.81V56.98H136.92V85.03H168.02V100Z M232.12 100 221.37 63.52H207.12V100H190.55V0H222.82Q233.28 0 238.59 3.63Q243.9 7.27 245.71 13.95Q247.53 20.64 247.53 31.69Q247.53 42.44 245.42 49.56Q243.31 56.69 236.92 60.03L249.56 100ZM230.96 31.69Q230.96 24.42 230.16 21.08Q229.36 17.73 226.89 16.35Q224.42 14.97 218.9 14.97H207.12V48.55H218.9Q224.42 48.55 226.89 47.17Q229.36 45.78 230.16 42.37Q230.96 38.95 230.96 31.69Z M327.91 0V55.96Q327.91 75.58 326.16 84.52Q324.42 93.46 318.46 97.31Q312.5 101.16 298.84 101.16Q285.17 101.16 279.22 97.31Q273.26 93.46 271.58 84.52Q269.91 75.58 269.91 55.96V0H286.48V62.21Q286.48 73.84 287.14 78.42Q287.79 82.99 290.26 84.59Q292.73 86.19 298.84 86.19Q305.09 86.19 307.56 84.59Q310.03 82.99 310.68 78.42Q311.34 73.84 311.34 62.21V0Z M396.8 100 369.77 38.23H369.19V100H353.2V0H369.77L395.64 58.72H396.22V0H412.21V100Z M436.05 50Q436.05 27.03 437.65 17.22Q439.24 7.41 445.49 3.12Q451.74 -1.16 466.42 -1.16Q481.1 -1.16 487.35 3.12Q493.6 7.41 495.28 17.3Q496.95 27.18 496.95 50Q496.95 72.82 495.28 82.7Q493.6 92.59 487.35 96.88Q481.1 101.16 466.42 101.16Q451.74 101.16 445.49 96.88Q439.24 92.59 437.65 82.78Q436.05 72.97 436.05 50ZM480.38 50Q480.38 31.25 479.58 24.35Q478.78 17.44 476.16 15.62Q473.55 13.81 466.42 13.81Q459.3 13.81 456.76 15.62Q454.22 17.44 453.42 24.27Q452.62 31.1 452.62 50Q452.62 68.9 453.42 75.73Q454.22 82.56 456.76 84.38Q459.3 86.19 466.42 86.19Q473.55 86.19 476.16 84.38Q478.78 82.56 479.58 75.65Q480.38 68.75 480.38 50Z";
  const BOX = { horizontal: { w: 706.16, h: 158 }, curto: { w: 650.11, h: 100 }, wordmark: { w: 503.49, h: 158 }, "wordmark-curto": { w: 503.49, h: 100 }, simbolo: { w: 75.711, h: 78.355 }, avatar: { w: 100, h: 100 } };
  const LOCKUP = { horizontal: { symbolScale: 2.01645, textX: 202.67 }, curto: { symbolScale: 1.27624, textX: 146.62 }, avatar: { symbolX: 26.81, symbolY: 18, symbolScale: 0.61259, textX: 22.31, textY: 75, textScale: 0.11 } };
  const simbolo = ($$anchor) => {
    var g_1 = root_2$g();
    var g_2 = child(g_1);
    var node = child(g_2);
    each(node, 17, () => SYMBOL.rects, index, ($$anchor2, r2) => {
      var rect = root$q();
      template_effect(() => {
        set_attribute(rect, "x", get(r2).x);
        set_attribute(rect, "y", get(r2).y);
        set_attribute(rect, "width", get(r2).width);
        set_attribute(rect, "height", get(r2).height);
        set_attribute(rect, "rx", get(r2).rx);
      });
      append($$anchor2, rect);
    });
    var node_1 = sibling(node);
    each(node_1, 17, () => SYMBOL.lines, index, ($$anchor2, d) => {
      var path = root_1$k();
      template_effect(() => set_attribute(path, "d", get(d)));
      append($$anchor2, path);
    });
    reset(g_2);
    var node_2 = sibling(g_2);
    each(node_2, 17, () => SYMBOL.arcs, index, ($$anchor2, d) => {
      var path_1 = root_1$k();
      template_effect(() => set_attribute(path_1, "d", get(d)));
      append($$anchor2, path_1);
    });
    reset(g_1);
    template_effect(() => {
      set_attribute(g_1, "transform", `translate(${SYMBOL.offset})`);
      set_attribute(g_2, "transform", `rotate(${SYMBOL.rotate})`);
    });
    append($$anchor, g_1);
  };
  var rest_excludes$p = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "tone",
    "height",
    "title",
    "decorative",
    "class"
  ]);
  var root$q = /* @__PURE__ */ from_svg(`<rect></rect>`);
  var root_1$k = /* @__PURE__ */ from_svg(`<path></path>`);
  var root_2$g = /* @__PURE__ */ from_svg(`<g class="itr-logo__simbolo" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><g><!><!></g><!></g>`);
  var root_3$a = /* @__PURE__ */ from_svg(`<circle class="itr-logo__fundo" cx="50" cy="50" r="50"></circle><g><!></g><g><path class="itr-logo__texto"></path></g>`, 1);
  var root_4$8 = /* @__PURE__ */ from_svg(`<path class="itr-logo__texto"></path><path class="itr-logo__texto"></path>`, 1);
  var root_5$6 = /* @__PURE__ */ from_svg(`<path class="itr-logo__texto"></path>`);
  var root_6$4 = /* @__PURE__ */ from_svg(`<g><!></g><g><path class="itr-logo__texto"></path></g>`, 1);
  var root_7$3 = /* @__PURE__ */ from_svg(`<g><!></g><g><path class="itr-logo__texto"></path><path class="itr-logo__texto"></path></g>`, 1);
  var root_8$1 = /* @__PURE__ */ from_svg(`<svg><!></svg>`);
  function Logo($$anchor, $$props) {
    push($$props, true);
    let variant = prop($$props, "variant", 3, "horizontal"), tone = prop($$props, "tone", 3, "cor"), title = prop($$props, "title", 3, "Iteruno Tecnologias"), decorative = prop($$props, "decorative", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$p);
    const g = /* @__PURE__ */ user_derived(() => BOX[variant()] || BOX.horizontal);
    const h = /* @__PURE__ */ user_derived(() => $$props.height ?? (variant() === "simbolo" || variant() === "avatar" ? 40 : 32));
    const w = /* @__PURE__ */ user_derived(() => Math.round(get(g).w / get(g).h * get(h) * 100) / 100);
    var svg = root_8$1();
    attribute_effect(svg, () => ({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${get(g).w ?? ""} ${get(g).h ?? ""}`,
      width: get(w),
      height: get(h),
      class: `itr-logo itr-logo--${variant() ?? ""} itr-logo--${tone() ?? ""} ${klass() ?? ""}`,
      focusable: "false",
      role: decorative() ? void 0 : "img",
      "aria-label": decorative() ? void 0 : title(),
      "aria-hidden": decorative() ? "true" : void 0,
      ...rest
    }));
    var node_3 = child(svg);
    {
      var consequent = ($$anchor2) => {
        var fragment = root_3$a();
        var g_3 = sibling(first_child(fragment));
        var node_4 = child(g_3);
        simbolo(node_4);
        reset(g_3);
        var g_4 = sibling(g_3);
        var path_2 = only_child(g_4);
        template_effect(() => {
          set_attribute(g_3, "transform", `translate(${LOCKUP.avatar.symbolX} ${LOCKUP.avatar.symbolY}) scale(${LOCKUP.avatar.symbolScale})`);
          set_attribute(g_4, "transform", `translate(${LOCKUP.avatar.textX} ${LOCKUP.avatar.textY}) scale(${LOCKUP.avatar.textScale})`);
          set_attribute(path_2, "d", WORDMARK_CURTO);
        });
        append($$anchor2, fragment);
      };
      var consequent_1 = ($$anchor2) => {
        simbolo($$anchor2);
      };
      var consequent_2 = ($$anchor2) => {
        var fragment_2 = root_4$8();
        var path_3 = first_child(fragment_2);
        var path_4 = sibling(path_3);
        template_effect(() => {
          set_attribute(path_3, "d", WORDMARK[0]);
          set_attribute(path_4, "d", WORDMARK[1]);
        });
        append($$anchor2, fragment_2);
      };
      var consequent_3 = ($$anchor2) => {
        var path_5 = root_5$6();
        template_effect(() => set_attribute(path_5, "d", WORDMARK_CURTO));
        append($$anchor2, path_5);
      };
      var consequent_4 = ($$anchor2) => {
        var fragment_3 = root_6$4();
        var g_5 = first_child(fragment_3);
        var node_5 = child(g_5);
        simbolo(node_5);
        reset(g_5);
        var g_6 = sibling(g_5);
        var path_6 = only_child(g_6);
        template_effect(() => {
          set_attribute(g_5, "transform", `scale(${LOCKUP.curto.symbolScale})`);
          set_attribute(g_6, "transform", `translate(${LOCKUP.curto.textX} 0)`);
          set_attribute(path_6, "d", WORDMARK_CURTO);
        });
        append($$anchor2, fragment_3);
      };
      var alternate = ($$anchor2) => {
        var fragment_4 = root_7$3();
        var g_7 = first_child(fragment_4);
        var node_6 = child(g_7);
        simbolo(node_6);
        reset(g_7);
        var g_8 = sibling(g_7);
        var path_7 = child(g_8);
        var path_8 = sibling(path_7);
        reset(g_8);
        template_effect(() => {
          set_attribute(g_7, "transform", `scale(${LOCKUP.horizontal.symbolScale})`);
          set_attribute(g_8, "transform", `translate(${LOCKUP.horizontal.textX} 0)`);
          set_attribute(path_7, "d", WORDMARK[0]);
          set_attribute(path_8, "d", WORDMARK[1]);
        });
        append($$anchor2, fragment_4);
      };
      if_block(node_3, ($$render) => {
        if (variant() === "avatar") $$render(consequent);
        else if (variant() === "simbolo") $$render(consequent_1, 1);
        else if (variant() === "wordmark") $$render(consequent_2, 2);
        else if (variant() === "wordmark-curto") $$render(consequent_3, 3);
        else if (variant() === "curto") $$render(consequent_4, 4);
        else $$render(alternate, -1);
      });
    }
    reset(svg);
    append($$anchor, svg);
    pop();
  }
  var rest_excludes$o = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "arcs",
    "step",
    "width",
    "opacity",
    "class"
  ]);
  var root$p = /* @__PURE__ */ from_svg(`<path class="itr-sinal__arc"></path>`);
  var root_1$j = /* @__PURE__ */ from_svg(`<svg></svg>`);
  function Sinal($$anchor, $$props) {
    let arcs = prop($$props, "arcs", 3, 6), step = prop($$props, "step", 3, 60), width = prop($$props, "width", 3, 14), opacity = prop($$props, "opacity", 3, 0.22), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$o);
    const size = 400;
    const radii = /* @__PURE__ */ user_derived(() => Array.from({ length: arcs() }, (_, i) => (i + 1) * step()));
    var svg = root_1$j();
    attribute_effect(svg, () => ({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 400 400",
      class: `itr-sinal ${klass() ?? ""}`,
      "aria-hidden": "true",
      focusable: "false",
      ...rest
    }));
    each(svg, 20, () => get(radii), (r2) => r2, ($$anchor2, r2) => {
      var path = root$p();
      template_effect(() => {
        set_attribute(path, "d", `M${size - r2} 400 A${r2 ?? ""} ${r2 ?? ""} 0 0 1 400 ${size - r2}`);
        set_attribute(path, "stroke-width", width());
        set_attribute(path, "stroke-opacity", opacity());
      });
      append($$anchor2, path);
    });
    reset(svg);
    append($$anchor, svg);
  }
  var root$o = /* @__PURE__ */ from_html(`<span> </span>`);
  function Ph($$anchor, $$props) {
    push($$props, true);
    let text$1 = prop($$props, "text", 3, ""), klass = prop($$props, "class", 3, "");
    const partes = /* @__PURE__ */ user_derived(() => String(text$1() ?? "").split(/(\[\[[^\]]*\]\])/g).filter((s) => s !== ""));
    var fragment = comment();
    var node = first_child(fragment);
    each(node, 17, () => get(partes), index, ($$anchor2, p) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var span = root$o();
          var text_1 = only_child(span, true);
          template_effect(() => {
            set_class(span, 1, `itr-ph ${klass() ?? ""}`);
            set_text(text_1, get(p));
          });
          append($$anchor3, span);
        };
        var d = /* @__PURE__ */ user_derived(() => get(p).startsWith("[["));
        var alternate = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, get(p)));
          append($$anchor3, text_2);
        };
        if_block(node_1, ($$render) => {
          if (get(d)) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      append($$anchor2, fragment_1);
    });
    append($$anchor, fragment);
    pop();
  }
  var rest_excludes$n = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "size",
    "block",
    "href",
    "type",
    "disabled",
    "loading",
    "icon",
    "iconEnd",
    "label",
    "class",
    "children"
  ]);
  var root$n = /* @__PURE__ */ from_html(`<span class="itr-spinner" aria-hidden="true"></span>`);
  var root_1$i = /* @__PURE__ */ from_html(`<!> <span class="itr-btn__label"><!></span> <!>`, 1);
  var root_2$f = /* @__PURE__ */ from_html(`<a><!></a>`);
  var root_3$9 = /* @__PURE__ */ from_html(`<button><!></button>`);
  function Button($$anchor, $$props) {
    push($$props, true);
    const content = ($$anchor2) => {
      var fragment = root_1$i();
      var node = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var span = root$n();
          append($$anchor3, span);
        };
        var consequent_1 = ($$anchor3) => {
          Icon($$anchor3, {
            get name() {
              return $$props.icon;
            },
            size: 20
          });
        };
        if_block(node, ($$render) => {
          if (loading()) $$render(consequent);
          else if ($$props.icon) $$render(consequent_1, 1);
        });
      }
      var span_1 = sibling(node, 2);
      var node_1 = child(span_1);
      {
        var consequent_2 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          snippet(node_2, () => $$props.children);
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, $$props.label));
          append($$anchor3, text$1);
        };
        if_block(node_1, ($$render) => {
          if ($$props.children) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      reset(span_1);
      var node_3 = sibling(span_1, 2);
      {
        var consequent_3 = ($$anchor3) => {
          Icon($$anchor3, {
            get name() {
              return $$props.iconEnd;
            },
            size: 20
          });
        };
        if_block(node_3, ($$render) => {
          if ($$props.iconEnd && !loading()) $$render(consequent_3);
        });
      }
      append($$anchor2, fragment);
    };
    let variant = prop($$props, "variant", 3, "primary"), size = prop($$props, "size", 3, "m"), block2 = prop($$props, "block", 3, false), type = prop($$props, "type", 3, "button"), disabled = prop($$props, "disabled", 3, false), loading = prop($$props, "loading", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$n);
    const cls = /* @__PURE__ */ user_derived(() => [
      "itr-btn",
      `itr-btn--${variant()}`,
      `itr-btn--${size()}`,
      block2() && "itr-btn--block",
      klass()
    ].filter(Boolean).join(" "));
    var fragment_5 = comment();
    var node_4 = first_child(fragment_5);
    {
      var consequent_4 = ($$anchor2) => {
        var a = root_2$f();
        attribute_effect(a, () => ({
          href: disabled() ? void 0 : $$props.href,
          class: get(cls),
          "aria-disabled": disabled() ? "true" : void 0,
          role: disabled() ? "link" : void 0,
          ...rest
        }));
        var node_5 = child(a);
        content(node_5);
        reset(a);
        append($$anchor2, a);
      };
      var alternate_1 = ($$anchor2) => {
        var button = root_3$9();
        attribute_effect(button, () => ({
          type: type(),
          class: get(cls),
          disabled: disabled() || loading(),
          "aria-busy": loading() ? "true" : void 0,
          ...rest
        }));
        var node_6 = child(button);
        content(node_6);
        reset(button);
        append($$anchor2, button);
      };
      if_block(node_4, ($$render) => {
        if ($$props.href !== void 0) $$render(consequent_4);
        else $$render(alternate_1, -1);
      });
    }
    append($$anchor, fragment_5);
    pop();
  }
  var rest_excludes$m = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "label",
    "hint",
    "error",
    "optional",
    "multiline",
    "rows",
    "mono",
    "type",
    "value",
    "name",
    "placeholder",
    "maxlength",
    "required",
    "disabled",
    "class"
  ]);
  var root$m = /* @__PURE__ */ from_html(`<span class="itr-field__opt">(opcional)</span>`);
  var root_1$h = /* @__PURE__ */ from_html(`<p class="itr-field__hint"> </p>`);
  var root_2$e = /* @__PURE__ */ from_html(`<textarea></textarea>`);
  var root_3$8 = /* @__PURE__ */ from_html(`<input/>`);
  var root_4$7 = /* @__PURE__ */ from_html(`<p class="itr-field__error"><!><span> </span></p>`);
  var root_5$5 = /* @__PURE__ */ from_html(`<p class="itr-field__count"> </p>`);
  var root_6$3 = /* @__PURE__ */ from_html(`<div class="itr-field__foot"><!> <!></div>`);
  var root_7$2 = /* @__PURE__ */ from_html(`<div><label class="itr-field__label"> <!></label> <!> <!> <!></div>`);
  function TextField($$anchor, $$props) {
    const uid2 = props_id();
    push($$props, true);
    let optional = prop($$props, "optional", 3, false), multiline = prop($$props, "multiline", 3, false), rows = prop($$props, "rows", 3, 5), mono = prop($$props, "mono", 3, false), type = prop($$props, "type", 3, "text"), value = prop($$props, "value", 15, ""), required = prop($$props, "required", 3, false), disabled = prop($$props, "disabled", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$m);
    const fid = /* @__PURE__ */ user_derived(() => $$props.id || `itr-tf-${uid2}`);
    const counter = /* @__PURE__ */ user_derived(() => multiline() && $$props.maxlength);
    const describedBy = /* @__PURE__ */ user_derived(() => [
      $$props.hint && `${get(fid)}-hint`,
      $$props.error && `${get(fid)}-err`,
      get(counter) && `${get(fid)}-cnt`
    ].filter(Boolean).join(" ") || void 0);
    const cls = /* @__PURE__ */ user_derived(() => [
      "itr-input",
      multiline() && "itr-input--area",
      mono() && "itr-input--mono",
      $$props.error && "is-invalid"
    ].filter(Boolean).join(" "));
    var div = root_7$2();
    var label_1 = child(div);
    var text2 = child(label_1, true);
    var node = sibling(text2);
    {
      var consequent = ($$anchor2) => {
        var span = root$m();
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (optional()) $$render(consequent);
      });
    }
    reset(label_1);
    var node_1 = sibling(label_1, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var p = root_1$h();
        var text_1 = only_child(p, true);
        template_effect(() => {
          set_attribute(p, "id", `${get(fid) ?? ""}-hint`);
          set_text(text_1, $$props.hint);
        });
        append($$anchor2, p);
      };
      if_block(node_1, ($$render) => {
        if ($$props.hint) $$render(consequent_1);
      });
    }
    var node_2 = sibling(node_1, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var textarea = root_2$e();
        remove_textarea_child(textarea);
        attribute_effect(textarea, () => ({
          id: get(fid),
          name: $$props.name,
          rows: rows(),
          placeholder: $$props.placeholder,
          maxlength: $$props.maxlength,
          required: required(),
          disabled: disabled(),
          class: get(cls),
          "aria-invalid": $$props.error ? "true" : void 0,
          "aria-describedby": get(describedBy),
          ...rest
        }));
        bind_value(textarea, value);
        append($$anchor2, textarea);
      };
      var alternate = ($$anchor2) => {
        var input = root_3$8();
        var event_handler = (e) => value(e.currentTarget.value);
        attribute_effect(
          input,
          () => ({
            id: get(fid),
            type: type(),
            name: $$props.name,
            placeholder: $$props.placeholder,
            maxlength: $$props.maxlength,
            required: required(),
            disabled: disabled(),
            value: value(),
            oninput: event_handler,
            class: get(cls),
            "aria-invalid": $$props.error ? "true" : void 0,
            "aria-describedby": get(describedBy),
            ...rest
          }),
          void 0,
          void 0,
          void 0,
          void 0,
          true
        );
        append($$anchor2, input);
      };
      if_block(node_2, ($$render) => {
        if (multiline()) $$render(consequent_2);
        else $$render(alternate, -1);
      });
    }
    var node_3 = sibling(node_2, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var div_1 = root_6$3();
        var node_4 = child(div_1);
        {
          var consequent_3 = ($$anchor3) => {
            var p_1 = root_4$7();
            var node_5 = child(p_1);
            Icon(node_5, { name: "alert-triangle", size: 16 });
            var span_1 = sibling(node_5);
            var text_2 = only_child(span_1, true);
            reset(p_1);
            template_effect(() => {
              set_attribute(p_1, "id", `${get(fid) ?? ""}-err`);
              set_text(text_2, $$props.error);
            });
            append($$anchor3, p_1);
          };
          if_block(node_4, ($$render) => {
            if ($$props.error) $$render(consequent_3);
          });
        }
        var node_6 = sibling(node_4, 2);
        {
          var consequent_4 = ($$anchor3) => {
            var p_2 = root_5$5();
            var text_3 = only_child(p_2);
            template_effect(
              ($0) => {
                set_attribute(p_2, "id", `${get(fid) ?? ""}-cnt`);
                set_text(text_3, `${$0 ?? ""} de ${$$props.maxlength ?? ""}`);
              },
              [() => String(value() || "").length]
            );
            append($$anchor3, p_2);
          };
          if_block(node_6, ($$render) => {
            if (get(counter)) $$render(consequent_4);
          });
        }
        reset(div_1);
        append($$anchor2, div_1);
      };
      if_block(node_3, ($$render) => {
        if ($$props.error || get(counter)) $$render(consequent_5);
      });
    }
    reset(div);
    template_effect(() => {
      set_class(div, 1, `itr-field ${disabled() ? "is-disabled" : ""} ${klass() ?? ""}`);
      set_attribute(label_1, "for", get(fid));
      set_text(text2, $$props.label);
    });
    append($$anchor, div);
    pop();
  }
  var rest_excludes$l = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "label",
    "hint",
    "error",
    "optional",
    "options",
    "placeholder",
    "value",
    "name",
    "required",
    "disabled",
    "class",
    "children"
  ]);
  var root$l = /* @__PURE__ */ from_html(`<span class="itr-field__opt">(opcional)</span>`);
  var root_1$g = /* @__PURE__ */ from_html(`<p class="itr-field__hint"> </p>`);
  var root_2$d = /* @__PURE__ */ from_html(`<option disabled=""> </option>`);
  var root_3$7 = /* @__PURE__ */ from_html(`<option> </option>`);
  var select_content = /* @__PURE__ */ from_html(`<!><!><!>`, 1);
  var root_4$6 = /* @__PURE__ */ from_html(`<div class="itr-field__foot"><p class="itr-field__error"><!><span> </span></p></div>`);
  var root_5$4 = /* @__PURE__ */ from_html(`<div><label class="itr-field__label"> <!></label> <!> <div class="itr-select"><select><!></select> <!></div> <!></div>`);
  function Select($$anchor, $$props) {
    const uid2 = props_id();
    push($$props, true);
    let optional = prop($$props, "optional", 3, false), options = prop($$props, "options", 19, () => []), value = prop($$props, "value", 15, ""), required = prop($$props, "required", 3, false), disabled = prop($$props, "disabled", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$l);
    const fid = /* @__PURE__ */ user_derived(() => $$props.id || `itr-sel-${uid2}`);
    const describedBy = /* @__PURE__ */ user_derived(() => [
      $$props.hint && `${get(fid)}-hint`,
      $$props.error && `${get(fid)}-err`
    ].filter(Boolean).join(" ") || void 0);
    var div = root_5$4();
    var label_1 = child(div);
    var text2 = child(label_1, true);
    var node = sibling(text2);
    {
      var consequent = ($$anchor2) => {
        var span = root$l();
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (optional()) $$render(consequent);
      });
    }
    reset(label_1);
    var node_1 = sibling(label_1, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var p = root_1$g();
        var text_1 = only_child(p, true);
        template_effect(() => {
          set_attribute(p, "id", `${get(fid) ?? ""}-hint`);
          set_text(text_1, $$props.hint);
        });
        append($$anchor2, p);
      };
      if_block(node_1, ($$render) => {
        if ($$props.hint) $$render(consequent_1);
      });
    }
    var div_1 = sibling(node_1, 2);
    var select = child(div_1);
    attribute_effect(select, () => ({
      id: get(fid),
      name: $$props.name,
      required: required(),
      disabled: disabled(),
      class: `itr-input itr-select__control ${$$props.error ? "is-invalid" : ""}`,
      "aria-invalid": $$props.error ? "true" : void 0,
      "aria-describedby": get(describedBy),
      ...rest
    }));
    customizable_select(select, () => {
      var anchor = child(select);
      var fragment = select_content();
      var node_2 = first_child(fragment);
      {
        var consequent_2 = ($$anchor2) => {
          var option = root_2$d();
          var text_2 = only_child(option, true);
          option.value = option.__value = "";
          template_effect(() => set_text(text_2, $$props.placeholder));
          append($$anchor2, option);
        };
        if_block(node_2, ($$render) => {
          if ($$props.placeholder) $$render(consequent_2);
        });
      }
      var node_3 = sibling(node_2);
      each(node_3, 17, options, (o) => o.value, ($$anchor2, o) => {
        var option_1 = root_3$7();
        var text_3 = only_child(option_1, true);
        var option_1_value = {};
        template_effect(() => {
          option_1.disabled = get(o).disabled;
          set_text(text_3, get(o).label);
          if (option_1_value !== (option_1_value = get(o).value)) {
            option_1.value = (option_1.__value = option_1_value) ?? "";
          }
        });
        append($$anchor2, option_1);
      });
      var node_4 = sibling(node_3);
      snippet(node_4, () => $$props.children ?? noop);
      append(anchor, fragment);
    });
    var node_5 = sibling(select, 2);
    Icon(node_5, { name: "chevron-down", size: 20, class: "itr-select__chevron" });
    reset(div_1);
    var node_6 = sibling(div_1, 2);
    {
      var consequent_3 = ($$anchor2) => {
        var div_2 = root_4$6();
        var p_1 = child(div_2);
        var node_7 = child(p_1);
        Icon(node_7, { name: "alert-triangle", size: 16 });
        var span_1 = sibling(node_7);
        var text_4 = only_child(span_1, true);
        reset(p_1);
        reset(div_2);
        template_effect(() => {
          set_attribute(p_1, "id", `${get(fid) ?? ""}-err`);
          set_text(text_4, $$props.error);
        });
        append($$anchor2, div_2);
      };
      if_block(node_6, ($$render) => {
        if ($$props.error) $$render(consequent_3);
      });
    }
    reset(div);
    template_effect(() => {
      set_class(div, 1, `itr-field ${disabled() ? "is-disabled" : ""} ${klass() ?? ""}`);
      set_attribute(label_1, "for", get(fid));
      set_text(text2, $$props.label);
    });
    bind_select_value(select, value);
    append($$anchor, div);
    pop();
  }
  var rest_excludes$k = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "label",
    "description",
    "error",
    "checked",
    "name",
    "value",
    "required",
    "disabled",
    "class"
  ]);
  var root$k = /* @__PURE__ */ from_html(`<span class="itr-check__desc"> </span>`);
  var root_1$f = /* @__PURE__ */ from_html(`<p class="itr-field__error"><!><span> </span></p>`);
  var root_2$c = /* @__PURE__ */ from_html(`<div><label class="itr-check"><input/> <span class="itr-check__body"><span class="itr-check__label"> </span> <!></span></label> <!></div>`);
  function Checkbox($$anchor, $$props) {
    const uid2 = props_id();
    push($$props, true);
    let checked = prop($$props, "checked", 15, false), required = prop($$props, "required", 3, false), disabled = prop($$props, "disabled", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$k);
    const fid = /* @__PURE__ */ user_derived(() => $$props.id || `itr-cb-${uid2}`);
    var div = root_2$c();
    var label_1 = child(div);
    var input = child(label_1);
    attribute_effect(
      input,
      () => ({
        type: "checkbox",
        id: get(fid),
        class: `itr-checkbox ${$$props.error ? "is-invalid" : ""}`,
        name: $$props.name,
        value: $$props.value,
        required: required(),
        disabled: disabled(),
        "aria-invalid": $$props.error ? "true" : void 0,
        "aria-describedby": $$props.error ? `${get(fid)}-err` : void 0,
        ...rest
      }),
      void 0,
      void 0,
      void 0,
      void 0,
      true
    );
    var span = sibling(input, 2);
    var span_1 = child(span);
    var text2 = only_child(span_1, true);
    var node = sibling(span_1, 2);
    {
      var consequent = ($$anchor2) => {
        var span_2 = root$k();
        var text_1 = only_child(span_2, true);
        template_effect(() => set_text(text_1, $$props.description));
        append($$anchor2, span_2);
      };
      if_block(node, ($$render) => {
        if ($$props.description) $$render(consequent);
      });
    }
    reset(span);
    reset(label_1);
    var node_1 = sibling(label_1, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var p = root_1$f();
        var node_2 = child(p);
        Icon(node_2, { name: "alert-triangle", size: 16 });
        var span_3 = sibling(node_2);
        var text_2 = only_child(span_3, true);
        reset(p);
        template_effect(() => {
          set_attribute(p, "id", `${get(fid) ?? ""}-err`);
          set_text(text_2, $$props.error);
        });
        append($$anchor2, p);
      };
      if_block(node_1, ($$render) => {
        if ($$props.error) $$render(consequent_1);
      });
    }
    reset(div);
    template_effect(() => {
      set_class(div, 1, `itr-field ${disabled() ? "is-disabled" : ""} ${klass() ?? ""}`);
      set_attribute(label_1, "for", get(fid));
      set_text(text2, $$props.label);
    });
    bind_checked(input, checked);
    append($$anchor, div);
    pop();
  }
  var rest_excludes$j = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "errors",
    "summaryTitle",
    "novalidate",
    "class",
    "children"
  ]);
  var root$j = /* @__PURE__ */ from_html(`<li><a> </a></li>`);
  var root_1$e = /* @__PURE__ */ from_html(`<div class="itr-form__summary" role="alert" tabindex="-1"><!> <div><p class="itr-form__summary-title"> </p> <ul></ul></div></div>`);
  var root_2$b = /* @__PURE__ */ from_html(`<form><!> <!></form>`);
  function Form($$anchor, $$props) {
    const uid2 = props_id();
    push($$props, true);
    let errors = prop($$props, "errors", 19, () => []), summaryTitle = prop($$props, "summaryTitle", 3, "Corrija os campos abaixo para enviar"), novalidate = prop($$props, "novalidate", 3, true), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$j);
    let summary = /* @__PURE__ */ state(null);
    user_effect(() => {
      if (errors().length && get(summary)) get(summary).focus();
    });
    var form = root_2$b();
    attribute_effect(form, () => ({
      class: `itr-form ${klass() ?? ""}`,
      novalidate: novalidate(),
      ...rest
    }));
    var node = child(form);
    {
      var consequent = ($$anchor2) => {
        var div = root_1$e();
        var node_1 = child(div);
        Icon(node_1, {
          name: "alert-triangle",
          size: 20,
          class: "itr-form__summary-icon"
        });
        var div_1 = sibling(node_1, 2);
        var p = child(div_1);
        var text2 = only_child(p, true);
        var ul = sibling(p, 2);
        each(ul, 21, errors, (e) => e.id, ($$anchor3, e) => {
          var li = root$j();
          var a = child(li);
          var text_1 = only_child(a, true);
          reset(li);
          template_effect(() => {
            set_attribute(a, "href", `#${get(e).id ?? ""}`);
            set_text(text_1, get(e).message);
          });
          append($$anchor3, li);
        });
        reset(ul);
        reset(div_1);
        reset(div);
        bind_this(div, ($$value) => set(summary, $$value), () => get(summary));
        template_effect(() => {
          set_attribute(div, "aria-labelledby", `itr-form-${uid2}-t`);
          set_attribute(p, "id", `itr-form-${uid2}-t`);
          set_text(text2, summaryTitle());
        });
        append($$anchor2, div);
      };
      if_block(node, ($$render) => {
        if (errors().length) $$render(consequent);
      });
    }
    var node_2 = sibling(node, 2);
    snippet(node_2, () => $$props.children ?? noop);
    reset(form);
    append($$anchor, form);
    pop();
  }
  var rest_excludes$i = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "columns",
    "class",
    "children"
  ]);
  var root$i = /* @__PURE__ */ from_html(`<div><!></div>`);
  function FormRow($$anchor, $$props) {
    let columns = prop($$props, "columns", 3, 1), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$i);
    var div = root$i();
    attribute_effect(div, () => ({
      class: `itr-form__row itr-form__row--${columns() ?? ""} ${klass() ?? ""}`,
      ...rest
    }));
    var node = child(div);
    snippet(node, () => $$props.children ?? noop);
    reset(div);
    append($$anchor, div);
  }
  var rest_excludes$h = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "note",
    "class",
    "children"
  ]);
  var root$h = /* @__PURE__ */ from_html(`<p class="itr-form__note"> </p>`);
  var root_1$d = /* @__PURE__ */ from_html(`<div><!></div> <!>`, 1);
  function FormActions($$anchor, $$props) {
    let klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$h);
    var fragment = root_1$d();
    var div = first_child(fragment);
    attribute_effect(div, () => ({ class: `itr-form__actions ${klass() ?? ""}`, ...rest }));
    var node = child(div);
    snippet(node, () => $$props.children ?? noop);
    reset(div);
    var node_1 = sibling(div, 2);
    {
      var consequent = ($$anchor2) => {
        var p = root$h();
        var text2 = only_child(p, true);
        template_effect(() => set_text(text2, $$props.note));
        append($$anchor2, p);
      };
      if_block(node_1, ($$render) => {
        if ($$props.note) $$render(consequent);
      });
    }
    append($$anchor, fragment);
  }
  var rest_excludes$g = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "title",
    "description",
    "items",
    "icon",
    "href",
    "linkLabel",
    "headingLevel",
    "class"
  ]);
  var root$g = /* @__PURE__ */ from_html(`<p class="itr-service__desc"> </p>`);
  var root_1$c = /* @__PURE__ */ from_html(`<li><!><span> </span></li>`);
  var root_2$a = /* @__PURE__ */ from_html(`<ul class="itr-service__list"></ul>`);
  var root_3$6 = /* @__PURE__ */ from_html(`<a class="itr-link itr-service__link"><span> </span><!></a>`);
  var root_4$5 = /* @__PURE__ */ from_html(`<article><span class="itr-service__pad"><!></span> <!> <!> <!> <!></article>`);
  function ServiceCard($$anchor, $$props) {
    push($$props, true);
    let items = prop($$props, "items", 19, () => []), icon = prop($$props, "icon", 3, "wrench"), linkLabel = prop($$props, "linkLabel", 3, "Saiba mais"), headingLevel = prop($$props, "headingLevel", 3, 3), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$g);
    var article = root_4$5();
    attribute_effect(article, () => ({ class: `itr-service ${klass() ?? ""}`, ...rest }));
    var span = child(article);
    var node = child(span);
    Icon(node, {
      get name() {
        return icon();
      },
      size: 28
    });
    reset(span);
    var node_1 = sibling(span, 2);
    element(node_1, () => `h${headingLevel()}`, false, ($$element, $$anchor2) => {
      set_class($$element, 0, "itr-service__title");
      var text$1 = text();
      template_effect(() => set_text(text$1, $$props.title));
      append($$anchor2, text$1);
    });
    var node_2 = sibling(node_1, 2);
    {
      var consequent = ($$anchor2) => {
        var p = root$g();
        var text_1 = only_child(p, true);
        template_effect(() => set_text(text_1, $$props.description));
        append($$anchor2, p);
      };
      if_block(node_2, ($$render) => {
        if ($$props.description) $$render(consequent);
      });
    }
    var node_3 = sibling(node_2, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var ul = root_2$a();
        each(ul, 21, items, index, ($$anchor3, it) => {
          var li = root_1$c();
          var node_4 = child(li);
          Icon(node_4, { name: "check", size: 16 });
          var span_1 = sibling(node_4);
          var text_2 = only_child(span_1, true);
          reset(li);
          template_effect(() => set_text(text_2, get(it)));
          append($$anchor3, li);
        });
        reset(ul);
        append($$anchor2, ul);
      };
      if_block(node_3, ($$render) => {
        if (items().length) $$render(consequent_1);
      });
    }
    var node_5 = sibling(node_3, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var a = root_3$6();
        var span_2 = child(a);
        var text_3 = only_child(span_2, true);
        var node_6 = sibling(span_2);
        Icon(node_6, { name: "arrow-right", size: 20 });
        reset(a);
        template_effect(() => {
          set_attribute(a, "href", $$props.href);
          set_text(text_3, linkLabel());
        });
        append($$anchor2, a);
      };
      if_block(node_5, ($$render) => {
        if ($$props.href) $$render(consequent_2);
      });
    }
    reset(article);
    append($$anchor, article);
    pop();
  }
  var rest_excludes$f = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "tone",
    "icon",
    "size",
    "outline",
    "label",
    "class",
    "children"
  ]);
  var root$f = /* @__PURE__ */ from_html(`<span><!><span> <!></span></span>`);
  function Badge($$anchor, $$props) {
    let tone = prop($$props, "tone", 3, "neutro"), size = prop($$props, "size", 3, "m"), outline = prop($$props, "outline", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$f);
    var span = root$f();
    attribute_effect(span, () => ({
      class: `itr-badge itr-badge--${tone() ?? ""} ${size() === "l" ? "itr-badge--l" : ""} ${outline() ? "itr-badge--outline" : ""} ${klass() ?? ""}`,
      ...rest
    }));
    var node = child(span);
    {
      var consequent = ($$anchor2) => {
        {
          let $0 = /* @__PURE__ */ user_derived(() => size() === "l" ? 16 : 14);
          Icon($$anchor2, {
            get name() {
              return $$props.icon;
            },
            get size() {
              return get($0);
            }
          });
        }
      };
      if_block(node, ($$render) => {
        if ($$props.icon) $$render(consequent);
      });
    }
    var span_1 = sibling(node);
    var text2 = child(span_1, true);
    var node_1 = sibling(text2);
    snippet(node_1, () => $$props.children ?? noop);
    reset(span_1);
    reset(span);
    template_effect(() => set_text(text2, $$props.label));
    append($$anchor, span);
  }
  var rest_excludes$e = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "tone",
    "title",
    "text",
    "icon",
    "onclose",
    "closeLabel",
    "role",
    "class",
    "children",
    "action"
  ]);
  var root$e = /* @__PURE__ */ from_html(`<p class="itr-alert__title"> </p>`);
  var root_1$b = /* @__PURE__ */ from_html(`<p><!></p>`);
  var root_2$9 = /* @__PURE__ */ from_html(`<div class="itr-alert__text"><!><!></div>`);
  var root_3$5 = /* @__PURE__ */ from_html(`<div class="itr-alert__action"><!></div>`);
  var root_4$4 = /* @__PURE__ */ from_html(`<button type="button" class="itr-iconbtn itr-alert__close"><!></button>`);
  var root_5$3 = /* @__PURE__ */ from_html(`<div><!> <div class="itr-alert__body"><!> <!> <!></div> <!></div>`);
  function Alert($$anchor, $$props) {
    const ICON = {
      info: "info",
      aviso: "alert-triangle",
      sucesso: "check-circle",
      erro: "x-circle",
      neutro: "info"
    };
    let tone = prop($$props, "tone", 3, "info"), closeLabel = prop($$props, "closeLabel", 3, "Fechar aviso"), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$e);
    var div = root_5$3();
    attribute_effect(div, () => ({
      class: `itr-alert itr-alert--${tone() ?? ""} ${klass() ?? ""}`,
      role: $$props.role ?? (tone() === "erro" ? "alert" : "status"),
      ...rest
    }));
    var node = child(div);
    {
      let $0 = /* @__PURE__ */ user_derived(() => $$props.icon || ICON[tone()] || "info");
      Icon(node, {
        get name() {
          return get($0);
        },
        size: 20,
        class: "itr-alert__icon"
      });
    }
    var div_1 = sibling(node, 2);
    var node_1 = child(div_1);
    {
      var consequent = ($$anchor2) => {
        var p = root$e();
        var text_1 = only_child(p, true);
        template_effect(() => set_text(text_1, $$props.title));
        append($$anchor2, p);
      };
      if_block(node_1, ($$render) => {
        if ($$props.title) $$render(consequent);
      });
    }
    var node_2 = sibling(node_1, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var div_2 = root_2$9();
        var node_3 = child(div_2);
        {
          var consequent_1 = ($$anchor3) => {
            var p_1 = root_1$b();
            var node_4 = child(p_1);
            Ph(node_4, {
              get text() {
                return $$props.text;
              }
            });
            reset(p_1);
            append($$anchor3, p_1);
          };
          if_block(node_3, ($$render) => {
            if ($$props.text) $$render(consequent_1);
          });
        }
        var node_5 = sibling(node_3);
        snippet(node_5, () => $$props.children ?? noop);
        reset(div_2);
        append($$anchor2, div_2);
      };
      if_block(node_2, ($$render) => {
        if ($$props.text || $$props.children) $$render(consequent_2);
      });
    }
    var node_6 = sibling(node_2, 2);
    {
      var consequent_3 = ($$anchor2) => {
        var div_3 = root_3$5();
        var node_7 = child(div_3);
        snippet(node_7, () => $$props.action);
        reset(div_3);
        append($$anchor2, div_3);
      };
      if_block(node_6, ($$render) => {
        if ($$props.action) $$render(consequent_3);
      });
    }
    reset(div_1);
    var node_8 = sibling(div_1, 2);
    {
      var consequent_4 = ($$anchor2) => {
        var button = root_4$4();
        var node_9 = child(button);
        Icon(node_9, { name: "x", size: 20 });
        reset(button);
        template_effect(() => set_attribute(button, "aria-label", closeLabel()));
        delegated("click", button, function(...$$args) {
          $$props.onclose?.apply(this, $$args);
        });
        append($$anchor2, button);
      };
      if_block(node_8, ($$render) => {
        if ($$props.onclose) $$render(consequent_4);
      });
    }
    reset(div);
    append($$anchor, div);
  }
  delegate(["click"]);
  var rest_excludes$d = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "links",
    "cta",
    "logoHref",
    "current",
    "class"
  ]);
  var root$d = /* @__PURE__ */ from_html(`<li><a class="itr-nav__link"> </a></li>`);
  var root_1$a = /* @__PURE__ */ from_html(`<header><div class="itr-nav__bar"><a class="itr-nav__brand" aria-label="Iteruno Tecnologias, página inicial"><!></a> <nav class="itr-nav__links" aria-label="Principal"><ul class="itr-nav__list"></ul></nav> <!> <details class="itr-nav__menu"><summary class="itr-nav__toggle"><!><!> <span class="itr-visually-hidden">Menu</span></summary> <div class="itr-nav__panel"><nav aria-label="Principal no celular"><ul class="itr-nav__plist"></ul></nav> <!></div></details></div></header>`);
  function NavBar($$anchor, $$props) {
    const uid2 = props_id();
    push($$props, true);
    let links = prop($$props, "links", 19, () => []), logoHref = prop($$props, "logoHref", 3, "/"), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$d);
    const isCurrent = (l) => l.current || $$props.current !== void 0 && l.href === $$props.current;
    var header = root_1$a();
    attribute_effect(header, () => ({ class: `itr-nav ${klass() ?? ""}`, ...rest }));
    var div = child(header);
    var a = child(div);
    var node = child(a);
    Logo(node, { variant: "horizontal", height: 32, decorative: true });
    reset(a);
    var nav = sibling(a, 2);
    var ul = child(nav);
    each(ul, 21, links, (l) => l.href, ($$anchor2, l) => {
      var li = root$d();
      var a_1 = child(li);
      var text2 = only_child(a_1, true);
      reset(li);
      template_effect(
        ($0) => {
          set_attribute(a_1, "href", get(l).href);
          set_attribute(a_1, "aria-current", $0);
          set_text(text2, get(l).label);
        },
        [() => isCurrent(get(l)) ? "page" : void 0]
      );
      append($$anchor2, li);
    });
    reset(ul);
    reset(nav);
    var node_1 = sibling(nav, 2);
    {
      var consequent = ($$anchor2) => {
        Button($$anchor2, {
          variant: "primary",
          get href() {
            return $$props.cta.href;
          },
          get icon() {
            return $$props.cta.icon;
          },
          get label() {
            return $$props.cta.label;
          },
          class: "itr-nav__cta"
        });
      };
      if_block(node_1, ($$render) => {
        if ($$props.cta) $$render(consequent);
      });
    }
    var details = sibling(node_1, 2);
    var summary = child(details);
    var node_2 = child(summary);
    Icon(node_2, { name: "menu", size: 24, class: "itr-nav__ico-menu" });
    var node_3 = sibling(node_2);
    Icon(node_3, { name: "x", size: 24, class: "itr-nav__ico-x" });
    next(2);
    reset(summary);
    var div_1 = sibling(summary, 2);
    var nav_1 = child(div_1);
    var ul_1 = child(nav_1);
    each(ul_1, 21, links, (l) => l.href, ($$anchor2, l) => {
      var li_1 = root$d();
      var a_2 = child(li_1);
      var text_1 = only_child(a_2, true);
      reset(li_1);
      template_effect(
        ($0) => {
          set_attribute(a_2, "href", get(l).href);
          set_attribute(a_2, "aria-current", $0);
          set_text(text_1, get(l).label);
        },
        [() => isCurrent(get(l)) ? "page" : void 0]
      );
      append($$anchor2, li_1);
    });
    reset(ul_1);
    reset(nav_1);
    var node_4 = sibling(nav_1, 2);
    {
      var consequent_1 = ($$anchor2) => {
        Button($$anchor2, {
          variant: "primary",
          size: "l",
          block: true,
          get href() {
            return $$props.cta.href;
          },
          get icon() {
            return $$props.cta.icon;
          },
          get label() {
            return $$props.cta.label;
          }
        });
      };
      if_block(node_4, ($$render) => {
        if ($$props.cta) $$render(consequent_1);
      });
    }
    reset(div_1);
    reset(details);
    reset(div);
    reset(header);
    template_effect(() => {
      set_attribute(a, "href", logoHref());
      set_attribute(details, "id", `itr-nav-${uid2}`);
    });
    append($$anchor, header);
    pop();
  }
  var rest_excludes$c = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "promise",
    "columns",
    "contact",
    "legal",
    "year",
    "sign",
    "class",
    "children"
  ]);
  var root$c = /* @__PURE__ */ from_html(`<p class="itr-footer__promise"> </p>`);
  var root_1$9 = /* @__PURE__ */ from_html(`<li><a><!><span> </span></a></li>`);
  var root_2$8 = /* @__PURE__ */ from_html(`<nav class="itr-footer__col"><p class="itr-label itr-footer__title"> </p> <ul></ul></nav>`);
  var root_3$4 = /* @__PURE__ */ from_html(`<a><!><span><!></span></a>`);
  var root_4$3 = /* @__PURE__ */ from_html(`<span class="itr-footer__text"><!><span><!></span></span>`);
  var root_5$2 = /* @__PURE__ */ from_html(`<li><!></li>`);
  var root_6$2 = /* @__PURE__ */ from_html(`<a><!><span> </span></a>`);
  var root_7$1 = /* @__PURE__ */ from_html(`<li><span class="itr-footer__text"><!><span><!></span></span></li>`);
  var root_8 = /* @__PURE__ */ from_html(`<div class="itr-footer__col"><p class="itr-label itr-footer__title">Contato</p> <ul><!> <!> <!> <!></ul></div>`);
  var root_9 = /* @__PURE__ */ from_html(` <!>`, 1);
  var root_10 = /* @__PURE__ */ from_html(`<p class="itr-footer__sign"> </p>`);
  var root_11 = /* @__PURE__ */ from_html(`<footer><div class="itr-footer__grid"><div class="itr-footer__brand"><!> <!></div> <!> <!></div> <div class="itr-footer__base"><div class="itr-footer__lines"><p class="itr-footer__legal"> <!></p> <!></div> <!></div></footer>`);
  function Footer($$anchor, $$props) {
    push($$props, true);
    let columns = prop($$props, "columns", 19, () => []), year = prop($$props, "year", 19, () => (/* @__PURE__ */ new Date()).getFullYear()), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$c);
    const pendente = (s) => /\[\[/.test(String(s || ""));
    var footer = root_11();
    attribute_effect(footer, () => ({ class: `itr-footer ${klass() ?? ""}`, ...rest }));
    var div = child(footer);
    var div_1 = child(div);
    var node = child(div_1);
    Logo(node, { variant: "horizontal", height: 28 });
    var node_1 = sibling(node, 2);
    {
      var consequent = ($$anchor2) => {
        var p = root$c();
        var text2 = only_child(p, true);
        template_effect(() => set_text(text2, $$props.promise));
        append($$anchor2, p);
      };
      if_block(node_1, ($$render) => {
        if ($$props.promise) $$render(consequent);
      });
    }
    reset(div_1);
    var node_2 = sibling(div_1, 2);
    each(node_2, 17, columns, (col) => col.title, ($$anchor2, col) => {
      var nav = root_2$8();
      var p_1 = child(nav);
      var text_1 = only_child(p_1, true);
      var ul = sibling(p_1, 2);
      each(ul, 21, () => get(col).links, (l) => l.label, ($$anchor3, l) => {
        var li = root_1$9();
        var a = child(li);
        var node_3 = child(a);
        {
          var consequent_1 = ($$anchor4) => {
            Icon($$anchor4, {
              get name() {
                return get(l).icon;
              },
              size: 16
            });
          };
          if_block(node_3, ($$render) => {
            if (get(l).icon) $$render(consequent_1);
          });
        }
        var span = sibling(node_3);
        var text_2 = only_child(span, true);
        reset(a);
        reset(li);
        template_effect(() => {
          set_attribute(a, "href", get(l).href);
          set_attribute(a, "rel", get(l).external ? "noopener" : void 0);
          set_attribute(a, "target", get(l).external ? "_blank" : void 0);
          set_text(text_2, get(l).label);
        });
        append($$anchor3, li);
      });
      reset(ul);
      reset(nav);
      template_effect(() => {
        set_attribute(nav, "aria-label", get(col).title);
        set_text(text_1, get(col).title);
      });
      append($$anchor2, nav);
    });
    var node_4 = sibling(node_2, 2);
    {
      var consequent_8 = ($$anchor2) => {
        var div_2 = root_8();
        var ul_1 = sibling(child(div_2), 2);
        var node_5 = child(ul_1);
        {
          var consequent_3 = ($$anchor3) => {
            var li_1 = root_5$2();
            var node_6 = child(li_1);
            {
              var consequent_2 = ($$anchor4) => {
                var a_1 = root_3$4();
                var node_7 = child(a_1);
                Icon(node_7, { name: "whatsapp", size: 16 });
                var span_1 = sibling(node_7);
                var node_8 = child(span_1);
                Ph(node_8, {
                  get text() {
                    return $$props.contact.whatsapp;
                  }
                });
                reset(span_1);
                reset(a_1);
                template_effect(() => set_attribute(a_1, "href", $$props.contact.whatsappHref));
                append($$anchor4, a_1);
              };
              var alternate = ($$anchor4) => {
                var span_2 = root_4$3();
                var node_9 = child(span_2);
                Icon(node_9, { name: "whatsapp", size: 16 });
                var span_3 = sibling(node_9);
                var node_10 = child(span_3);
                Ph(node_10, {
                  get text() {
                    return $$props.contact.whatsapp;
                  }
                });
                reset(span_3);
                reset(span_2);
                append($$anchor4, span_2);
              };
              if_block(node_6, ($$render) => {
                if ($$props.contact.whatsappHref) $$render(consequent_2);
                else $$render(alternate, -1);
              });
            }
            reset(li_1);
            append($$anchor3, li_1);
          };
          if_block(node_5, ($$render) => {
            if ($$props.contact.whatsapp) $$render(consequent_3);
          });
        }
        var node_11 = sibling(node_5, 2);
        {
          var consequent_5 = ($$anchor3) => {
            var li_2 = root_5$2();
            var node_12 = child(li_2);
            {
              var consequent_4 = ($$anchor4) => {
                var span_4 = root_4$3();
                var node_13 = child(span_4);
                Icon(node_13, { name: "mail", size: 16 });
                var span_5 = sibling(node_13);
                var node_14 = child(span_5);
                Ph(node_14, {
                  get text() {
                    return $$props.contact.email;
                  }
                });
                reset(span_5);
                reset(span_4);
                append($$anchor4, span_4);
              };
              var d = /* @__PURE__ */ user_derived(() => pendente($$props.contact.email));
              var alternate_1 = ($$anchor4) => {
                var a_2 = root_6$2();
                var node_15 = child(a_2);
                Icon(node_15, { name: "mail", size: 16 });
                var span_6 = sibling(node_15);
                var text_3 = only_child(span_6, true);
                reset(a_2);
                template_effect(() => {
                  set_attribute(a_2, "href", `mailto:${$$props.contact.email ?? ""}`);
                  set_text(text_3, $$props.contact.email);
                });
                append($$anchor4, a_2);
              };
              if_block(node_12, ($$render) => {
                if (get(d)) $$render(consequent_4);
                else $$render(alternate_1, -1);
              });
            }
            reset(li_2);
            append($$anchor3, li_2);
          };
          if_block(node_11, ($$render) => {
            if ($$props.contact.email) $$render(consequent_5);
          });
        }
        var node_16 = sibling(node_11, 2);
        {
          var consequent_6 = ($$anchor3) => {
            var li_3 = root_7$1();
            var span_7 = child(li_3);
            var node_17 = child(span_7);
            Icon(node_17, { name: "map-pin", size: 16 });
            var span_8 = sibling(node_17);
            var node_18 = child(span_8);
            Ph(node_18, {
              get text() {
                return $$props.contact.address;
              }
            });
            reset(span_8);
            reset(span_7);
            reset(li_3);
            append($$anchor3, li_3);
          };
          if_block(node_16, ($$render) => {
            if ($$props.contact.address) $$render(consequent_6);
          });
        }
        var node_19 = sibling(node_16, 2);
        {
          var consequent_7 = ($$anchor3) => {
            var li_4 = root_7$1();
            var span_9 = child(li_4);
            var node_20 = child(span_9);
            Icon(node_20, { name: "clock", size: 16 });
            var span_10 = sibling(node_20);
            var node_21 = child(span_10);
            Ph(node_21, {
              get text() {
                return $$props.contact.hours;
              }
            });
            reset(span_10);
            reset(span_9);
            reset(li_4);
            append($$anchor3, li_4);
          };
          if_block(node_19, ($$render) => {
            if ($$props.contact.hours) $$render(consequent_7);
          });
        }
        reset(ul_1);
        reset(div_2);
        append($$anchor2, div_2);
      };
      if_block(node_4, ($$render) => {
        if ($$props.contact) $$render(consequent_8);
      });
    }
    reset(div);
    var div_3 = sibling(div, 2);
    var div_4 = child(div_3);
    var p_2 = child(div_4);
    var text_4 = child(p_2);
    var node_22 = sibling(text_4);
    {
      var consequent_9 = ($$anchor2) => {
        var fragment_1 = root_9();
        var text_5 = first_child(fragment_1, true);
        text_5.nodeValue = " · ";
        var node_23 = sibling(text_5);
        Ph(node_23, {
          get text() {
            return $$props.legal;
          }
        });
        append($$anchor2, fragment_1);
      };
      if_block(node_22, ($$render) => {
        if ($$props.legal) $$render(consequent_9);
      });
    }
    reset(p_2);
    var node_24 = sibling(p_2, 2);
    {
      var consequent_10 = ($$anchor2) => {
        var p_3 = root_10();
        var text_6 = only_child(p_3, true);
        template_effect(() => set_text(text_6, $$props.sign));
        append($$anchor2, p_3);
      };
      if_block(node_24, ($$render) => {
        if ($$props.sign) $$render(consequent_10);
      });
    }
    reset(div_4);
    var node_25 = sibling(div_4, 2);
    snippet(node_25, () => $$props.children ?? noop);
    reset(div_3);
    reset(footer);
    template_effect(() => set_text(text_4, `© ${year() ?? ""} Iteruno Tecnologias`));
    append($$anchor, footer);
    pop();
  }
  var rest_excludes$b = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "eyebrow",
    "title",
    "text",
    "primary",
    "secondary",
    "tone",
    "pattern",
    "headingLevel",
    "class",
    "art",
    "children"
  ]);
  var root$b = /* @__PURE__ */ from_html(`<p class="itr-label itr-hero__eyebrow"> </p>`);
  var root_1$8 = /* @__PURE__ */ from_html(`<p class="itr-hero__text"> </p>`);
  var root_2$7 = /* @__PURE__ */ from_html(`<div class="itr-hero__actions"><!> <!></div>`);
  var root_3$3 = /* @__PURE__ */ from_html(`<div class="itr-hero__art"><!></div>`);
  var root_4$2 = /* @__PURE__ */ from_html(`<section><div class="itr-hero__inner"><div class="itr-hero__body"><!> <!> <!> <!> <!></div> <!></div></section>`);
  function Hero($$anchor, $$props) {
    push($$props, true);
    let tone = prop($$props, "tone", 3, "fundo"), pattern = prop($$props, "pattern", 3, true), headingLevel = prop($$props, "headingLevel", 3, 1), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$b);
    const inverse = /* @__PURE__ */ user_derived(() => tone() === "marca");
    var section = root_4$2();
    attribute_effect(section, () => ({
      class: `itr-hero itr-hero--${tone() ?? ""} ${klass() ?? ""}`,
      ...rest
    }));
    var div = child(section);
    var div_1 = child(div);
    var node = child(div_1);
    {
      var consequent = ($$anchor2) => {
        var p = root$b();
        var text_1 = only_child(p, true);
        template_effect(() => set_text(text_1, $$props.eyebrow));
        append($$anchor2, p);
      };
      if_block(node, ($$render) => {
        if ($$props.eyebrow) $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    element(node_1, () => `h${headingLevel()}`, false, ($$element, $$anchor2) => {
      set_class($$element, 0, "itr-hero__title");
      var text_2 = text();
      template_effect(() => set_text(text_2, $$props.title));
      append($$anchor2, text_2);
    });
    var node_2 = sibling(node_1, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var p_1 = root_1$8();
        var text_3 = only_child(p_1, true);
        template_effect(() => set_text(text_3, $$props.text));
        append($$anchor2, p_1);
      };
      if_block(node_2, ($$render) => {
        if ($$props.text) $$render(consequent_1);
      });
    }
    var node_3 = sibling(node_2, 2);
    {
      var consequent_4 = ($$anchor2) => {
        var div_2 = root_2$7();
        var node_4 = child(div_2);
        {
          var consequent_2 = ($$anchor3) => {
            {
              let $0 = /* @__PURE__ */ user_derived(() => get(inverse) ? "inverse" : "primary");
              Button($$anchor3, {
                get variant() {
                  return get($0);
                },
                size: "l",
                get href() {
                  return $$props.primary.href;
                },
                get icon() {
                  return $$props.primary.icon;
                },
                get label() {
                  return $$props.primary.label;
                }
              });
            }
          };
          if_block(node_4, ($$render) => {
            if ($$props.primary) $$render(consequent_2);
          });
        }
        var node_5 = sibling(node_4, 2);
        {
          var consequent_3 = ($$anchor3) => {
            {
              let $0 = /* @__PURE__ */ user_derived(() => get(inverse) ? "inverse-ghost" : "secondary");
              Button($$anchor3, {
                get variant() {
                  return get($0);
                },
                size: "l",
                get href() {
                  return $$props.secondary.href;
                },
                get icon() {
                  return $$props.secondary.icon;
                },
                get label() {
                  return $$props.secondary.label;
                }
              });
            }
          };
          if_block(node_5, ($$render) => {
            if ($$props.secondary) $$render(consequent_3);
          });
        }
        reset(div_2);
        append($$anchor2, div_2);
      };
      if_block(node_3, ($$render) => {
        if ($$props.primary || $$props.secondary) $$render(consequent_4);
      });
    }
    var node_6 = sibling(node_3, 2);
    snippet(node_6, () => $$props.children ?? noop);
    reset(div_1);
    var node_7 = sibling(div_1, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var div_3 = root_3$3();
        var node_8 = child(div_3);
        snippet(node_8, () => $$props.art);
        reset(div_3);
        append($$anchor2, div_3);
      };
      var consequent_6 = ($$anchor2) => {
        var div_4 = root_3$3();
        var node_9 = child(div_4);
        Sinal(node_9, { class: "itr-hero__sinal" });
        reset(div_4);
        append($$anchor2, div_4);
      };
      if_block(node_7, ($$render) => {
        if ($$props.art) $$render(consequent_5);
        else if (pattern()) $$render(consequent_6, 1);
      });
    }
    reset(div);
    reset(section);
    append($$anchor, section);
    pop();
  }
  var rest_excludes$a = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "description",
    "price",
    "period",
    "items",
    "action",
    "featured",
    "featuredLabel",
    "note",
    "headingLevel",
    "class"
  ]);
  var root$a = /* @__PURE__ */ from_html(`<span class="itr-price__flag"><!></span>`);
  var root_1$7 = /* @__PURE__ */ from_html(`<p class="itr-price__desc"> </p>`);
  var root_2$6 = /* @__PURE__ */ from_html(`<span class="itr-price__period"> </span>`);
  var root_3$2 = /* @__PURE__ */ from_html(`<li><!><span><!></span></li>`);
  var root_4$1 = /* @__PURE__ */ from_html(`<ul class="itr-price__list"></ul>`);
  var root_5$1 = /* @__PURE__ */ from_html(`<div class="itr-price__action"><!></div>`);
  var root_6$1 = /* @__PURE__ */ from_html(`<p class="itr-price__note"><!></p>`);
  var root_7 = /* @__PURE__ */ from_html(`<article><!> <!> <!> <p class="itr-price__value"><span class="itr-price__amount"><!></span> <!></p> <!> <!> <!></article>`);
  function PriceCard($$anchor, $$props) {
    push($$props, true);
    let items = prop($$props, "items", 19, () => []), featured = prop($$props, "featured", 3, false), featuredLabel = prop($$props, "featuredLabel", 3, "Mais procurado"), headingLevel = prop($$props, "headingLevel", 3, 3), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$a);
    var article = root_7();
    attribute_effect(article, () => ({
      class: `itr-price ${featured() ? "itr-price--featured" : ""} ${klass() ?? ""}`,
      ...rest
    }));
    var node = child(article);
    {
      var consequent = ($$anchor2) => {
        var span = root$a();
        var node_1 = child(span);
        Badge(node_1, {
          tone: "marca",
          get label() {
            return featuredLabel();
          },
          icon: "star"
        });
        reset(span);
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (featured()) $$render(consequent);
      });
    }
    var node_2 = sibling(node, 2);
    element(node_2, () => `h${headingLevel()}`, false, ($$element, $$anchor2) => {
      set_class($$element, 0, "itr-price__name");
      var text$1 = text();
      template_effect(() => set_text(text$1, $$props.name));
      append($$anchor2, text$1);
    });
    var node_3 = sibling(node_2, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var p = root_1$7();
        var text_1 = only_child(p, true);
        template_effect(() => set_text(text_1, $$props.description));
        append($$anchor2, p);
      };
      if_block(node_3, ($$render) => {
        if ($$props.description) $$render(consequent_1);
      });
    }
    var p_1 = sibling(node_3, 2);
    var span_1 = child(p_1);
    var node_4 = child(span_1);
    Ph(node_4, {
      get text() {
        return $$props.price;
      }
    });
    reset(span_1);
    var node_5 = sibling(span_1, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var span_2 = root_2$6();
        var text_2 = only_child(span_2, true);
        template_effect(() => set_text(text_2, $$props.period));
        append($$anchor2, span_2);
      };
      if_block(node_5, ($$render) => {
        if ($$props.period) $$render(consequent_2);
      });
    }
    reset(p_1);
    var node_6 = sibling(p_1, 2);
    {
      var consequent_3 = ($$anchor2) => {
        var ul = root_4$1();
        each(ul, 21, items, index, ($$anchor3, it) => {
          var li = root_3$2();
          var node_7 = child(li);
          Icon(node_7, { name: "check", size: 16 });
          var span_3 = sibling(node_7);
          var node_8 = child(span_3);
          Ph(node_8, {
            get text() {
              return get(it);
            }
          });
          reset(span_3);
          reset(li);
          append($$anchor3, li);
        });
        reset(ul);
        append($$anchor2, ul);
      };
      if_block(node_6, ($$render) => {
        if (items().length) $$render(consequent_3);
      });
    }
    var node_9 = sibling(node_6, 2);
    {
      var consequent_4 = ($$anchor2) => {
        var div = root_5$1();
        var node_10 = child(div);
        {
          let $0 = /* @__PURE__ */ user_derived(() => featured() ? "primary" : "secondary");
          Button(node_10, {
            get variant() {
              return get($0);
            },
            block: true,
            get href() {
              return $$props.action.href;
            },
            get icon() {
              return $$props.action.icon;
            },
            get label() {
              return $$props.action.label;
            }
          });
        }
        reset(div);
        append($$anchor2, div);
      };
      if_block(node_9, ($$render) => {
        if ($$props.action) $$render(consequent_4);
      });
    }
    var node_11 = sibling(node_9, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var p_2 = root_6$1();
        var node_12 = child(p_2);
        Ph(node_12, {
          get text() {
            return $$props.note;
          }
        });
        reset(p_2);
        append($$anchor2, p_2);
      };
      if_block(node_11, ($$render) => {
        if ($$props.note) $$render(consequent_5);
      });
    }
    reset(article);
    append($$anchor, article);
    pop();
  }
  var rest_excludes$9 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "title",
    "description",
    "format",
    "duration",
    "next",
    "seats",
    "seatsTone",
    "action",
    "icon",
    "badge",
    "headingLevel",
    "class"
  ]);
  var root$9 = /* @__PURE__ */ from_html(`<p class="itr-course__desc"> </p>`);
  var root_1$6 = /* @__PURE__ */ from_html(`<dt>Formato</dt><dd><!></dd>`, 1);
  var root_2$5 = /* @__PURE__ */ from_html(`<dt>Duração</dt><dd><!></dd>`, 1);
  var root_3$1 = /* @__PURE__ */ from_html(`<dt>Próxima turma</dt><dd><!></dd>`, 1);
  var root_4 = /* @__PURE__ */ from_html(`<dl class="itr-course__meta"><!> <!> <!></dl>`);
  var root_5 = /* @__PURE__ */ from_html(`<div class="itr-course__foot"><!> <!></div>`);
  var root_6 = /* @__PURE__ */ from_html(`<article><div class="itr-course__top"><span class="itr-course__pad"><!></span> <!></div> <!> <!> <!> <!></article>`);
  function CourseCard($$anchor, $$props) {
    push($$props, true);
    let seatsTone = prop($$props, "seatsTone", 3, "marca"), icon = prop($$props, "icon", 3, "book-open"), headingLevel = prop($$props, "headingLevel", 3, 3), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$9);
    var article = root_6();
    attribute_effect(article, () => ({ class: `itr-course ${klass() ?? ""}`, ...rest }));
    var div = child(article);
    var span = child(div);
    var node = child(span);
    Icon(node, {
      get name() {
        return icon();
      },
      size: 24
    });
    reset(span);
    var node_1 = sibling(span, 2);
    {
      var consequent = ($$anchor2) => {
        {
          let $0 = /* @__PURE__ */ user_derived(() => $$props.badge.tone || "neutro");
          Badge($$anchor2, {
            get tone() {
              return get($0);
            },
            get label() {
              return $$props.badge.label;
            }
          });
        }
      };
      if_block(node_1, ($$render) => {
        if ($$props.badge) $$render(consequent);
      });
    }
    reset(div);
    var node_2 = sibling(div, 2);
    element(node_2, () => `h${headingLevel()}`, false, ($$element, $$anchor2) => {
      set_class($$element, 0, "itr-course__title");
      var text$1 = text();
      template_effect(() => set_text(text$1, $$props.title));
      append($$anchor2, text$1);
    });
    var node_3 = sibling(node_2, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var p = root$9();
        var text_1 = only_child(p, true);
        template_effect(() => set_text(text_1, $$props.description));
        append($$anchor2, p);
      };
      if_block(node_3, ($$render) => {
        if ($$props.description) $$render(consequent_1);
      });
    }
    var node_4 = sibling(node_3, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var dl = root_4();
        var node_5 = child(dl);
        {
          var consequent_2 = ($$anchor3) => {
            var fragment_2 = root_1$6();
            var dd = sibling(first_child(fragment_2));
            var node_6 = child(dd);
            Ph(node_6, {
              get text() {
                return $$props.format;
              }
            });
            reset(dd);
            append($$anchor3, fragment_2);
          };
          if_block(node_5, ($$render) => {
            if ($$props.format) $$render(consequent_2);
          });
        }
        var node_7 = sibling(node_5, 2);
        {
          var consequent_3 = ($$anchor3) => {
            var fragment_3 = root_2$5();
            var dd_1 = sibling(first_child(fragment_3));
            var node_8 = child(dd_1);
            Ph(node_8, {
              get text() {
                return $$props.duration;
              }
            });
            reset(dd_1);
            append($$anchor3, fragment_3);
          };
          if_block(node_7, ($$render) => {
            if ($$props.duration) $$render(consequent_3);
          });
        }
        var node_9 = sibling(node_7, 2);
        {
          var consequent_4 = ($$anchor3) => {
            var fragment_4 = root_3$1();
            var dd_2 = sibling(first_child(fragment_4));
            var node_10 = child(dd_2);
            Ph(node_10, {
              get text() {
                return $$props.next;
              }
            });
            reset(dd_2);
            append($$anchor3, fragment_4);
          };
          if_block(node_9, ($$render) => {
            if ($$props.next) $$render(consequent_4);
          });
        }
        reset(dl);
        append($$anchor2, dl);
      };
      if_block(node_4, ($$render) => {
        if ($$props.format || $$props.duration || $$props.next) $$render(consequent_5);
      });
    }
    var node_11 = sibling(node_4, 2);
    {
      var consequent_8 = ($$anchor2) => {
        var div_1 = root_5();
        var node_12 = child(div_1);
        {
          var consequent_6 = ($$anchor3) => {
            Badge($$anchor3, {
              get tone() {
                return seatsTone();
              },
              get label() {
                return $$props.seats;
              },
              icon: "user"
            });
          };
          if_block(node_12, ($$render) => {
            if ($$props.seats) $$render(consequent_6);
          });
        }
        var node_13 = sibling(node_12, 2);
        {
          var consequent_7 = ($$anchor3) => {
            Button($$anchor3, {
              variant: "primary",
              size: "s",
              get href() {
                return $$props.action.href;
              },
              get icon() {
                return $$props.action.icon;
              },
              get label() {
                return $$props.action.label;
              }
            });
          };
          if_block(node_13, ($$render) => {
            if ($$props.action) $$render(consequent_7);
          });
        }
        reset(div_1);
        append($$anchor2, div_1);
      };
      if_block(node_11, ($$render) => {
        if ($$props.seats || $$props.action) $$render(consequent_8);
      });
    }
    reset(article);
    append($$anchor, article);
    pop();
  }
  var rest_excludes$8 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "quote",
    "name",
    "role",
    "photo",
    "card",
    "class"
  ]);
  var root$8 = /* @__PURE__ */ from_html(`<img alt=""/>`);
  var root_1$5 = /* @__PURE__ */ from_html(`<br/><span class="itr-testimonial__role"><!></span>`, 1);
  var root_2$4 = /* @__PURE__ */ from_html(`<figure><span class="itr-testimonial__mark" aria-hidden="true">“</span> <blockquote class="itr-testimonial__text"><p><!></p></blockquote> <figcaption class="itr-testimonial__author"><span class="itr-testimonial__avatar" aria-hidden="true"><!></span> <span><span class="itr-testimonial__name"><!></span><!></span></figcaption></figure>`);
  function Testimonial($$anchor, $$props) {
    push($$props, true);
    let card = prop($$props, "card", 3, true), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$8);
    const initials = /* @__PURE__ */ user_derived(() => String($$props.name || "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join(""));
    var figure = root_2$4();
    attribute_effect(figure, () => ({
      class: `itr-testimonial ${card() ? "itr-testimonial--card" : ""} ${klass() ?? ""}`,
      ...rest
    }));
    var blockquote = sibling(child(figure), 2);
    var p = child(blockquote);
    var node = child(p);
    Ph(node, {
      get text() {
        return $$props.quote;
      }
    });
    reset(p);
    reset(blockquote);
    var figcaption = sibling(blockquote, 2);
    var span = child(figcaption);
    var node_1 = child(span);
    {
      var consequent = ($$anchor2) => {
        var img = root$8();
        template_effect(() => set_attribute(img, "src", $$props.photo));
        append($$anchor2, img);
      };
      var alternate = ($$anchor2) => {
        var text$1 = text();
        template_effect(() => set_text(text$1, get(initials)));
        append($$anchor2, text$1);
      };
      if_block(node_1, ($$render) => {
        if ($$props.photo) $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    reset(span);
    var span_1 = sibling(span, 2);
    var span_2 = child(span_1);
    var node_2 = child(span_2);
    Ph(node_2, {
      get text() {
        return $$props.name;
      }
    });
    reset(span_2);
    var node_3 = sibling(span_2);
    {
      var consequent_1 = ($$anchor2) => {
        var fragment_1 = root_1$5();
        var span_3 = sibling(first_child(fragment_1));
        var node_4 = child(span_3);
        Ph(node_4, {
          get text() {
            return $$props.role;
          }
        });
        reset(span_3);
        append($$anchor2, fragment_1);
      };
      if_block(node_3, ($$render) => {
        if ($$props.role) $$render(consequent_1);
      });
    }
    reset(span_1);
    reset(figcaption);
    reset(figure);
    append($$anchor, figure);
    pop();
  }
  var rest_excludes$7 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "title",
    "text",
    "whatsapp",
    "message",
    "email",
    "buttonLabel",
    "emailLabel",
    "meta",
    "card",
    "pattern",
    "symbol",
    "headingLevel",
    "href",
    "class"
  ]);
  var root$7 = /* @__PURE__ */ from_html(`<p class="itr-cta__text"> </p>`);
  var root_1$4 = /* @__PURE__ */ from_html(`<p class="itr-cta__meta"><!></p>`);
  var root_2$3 = /* @__PURE__ */ from_html(`<section><!> <div class="itr-cta__inner"><div class="itr-cta__body"><!> <!> <!> <!></div> <div class="itr-cta__actions"><!> <!></div></div></section>`);
  function ContactCTA($$anchor, $$props) {
    push($$props, true);
    let title = prop($$props, "title", 3, "Vamos resolver isso?"), message = prop($$props, "message", 3, "Olá! Vim pelo site da Iteruno e preciso de ajuda com "), buttonLabel = prop($$props, "buttonLabel", 3, "Chamar no WhatsApp"), emailLabel = prop($$props, "emailLabel", 3, "Enviar e-mail"), card = prop($$props, "card", 3, false), pattern = prop($$props, "pattern", 3, true), symbol = prop($$props, "symbol", 3, true), headingLevel = prop($$props, "headingLevel", 3, 2), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$7);
    const digits = /* @__PURE__ */ user_derived(() => String($$props.whatsapp || "").replace(/\D/g, ""));
    const waHref = /* @__PURE__ */ user_derived(() => $$props.href || (get(digits) ? `https://wa.me/${get(digits)}${message() ? "?text=" + encodeURIComponent(message()) : ""}` : "#"));
    var section = root_2$3();
    attribute_effect(section, () => ({
      class: `itr-cta ${card() ? "itr-cta--card" : ""} ${klass() ?? ""}`,
      ...rest
    }));
    var node = child(section);
    {
      var consequent = ($$anchor2) => {
        Sinal($$anchor2, { class: "itr-cta__sinal", arcs: 5 });
      };
      if_block(node, ($$render) => {
        if (pattern()) $$render(consequent);
      });
    }
    var div = sibling(node, 2);
    var div_1 = child(div);
    var node_1 = child(div_1);
    {
      var consequent_1 = ($$anchor2) => {
        Logo($$anchor2, { variant: "simbolo", height: 48, decorative: true });
      };
      if_block(node_1, ($$render) => {
        if (symbol()) $$render(consequent_1);
      });
    }
    var node_2 = sibling(node_1, 2);
    element(node_2, () => `h${headingLevel()}`, false, ($$element, $$anchor2) => {
      set_class($$element, 0, "itr-cta__title");
      var text_1 = text();
      template_effect(() => set_text(text_1, title()));
      append($$anchor2, text_1);
    });
    var node_3 = sibling(node_2, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var p = root$7();
        var text_2 = only_child(p, true);
        template_effect(() => set_text(text_2, $$props.text));
        append($$anchor2, p);
      };
      if_block(node_3, ($$render) => {
        if ($$props.text) $$render(consequent_2);
      });
    }
    var node_4 = sibling(node_3, 2);
    {
      var consequent_3 = ($$anchor2) => {
        var p_1 = root_1$4();
        var node_5 = child(p_1);
        Ph(node_5, {
          get text() {
            return $$props.meta;
          }
        });
        reset(p_1);
        append($$anchor2, p_1);
      };
      if_block(node_4, ($$render) => {
        if ($$props.meta) $$render(consequent_3);
      });
    }
    reset(div_1);
    var div_2 = sibling(div_1, 2);
    var node_6 = child(div_2);
    Button(node_6, {
      variant: "inverse",
      size: "l",
      get href() {
        return get(waHref);
      },
      icon: "whatsapp",
      get label() {
        return buttonLabel();
      }
    });
    var node_7 = sibling(node_6, 2);
    {
      var consequent_4 = ($$anchor2) => {
        Button($$anchor2, {
          variant: "inverse-ghost",
          size: "l",
          get href() {
            return `mailto:${$$props.email ?? ""}`;
          },
          icon: "mail",
          get label() {
            return emailLabel();
          }
        });
      };
      if_block(node_7, ($$render) => {
        if ($$props.email) $$render(consequent_4);
      });
    }
    reset(div_2);
    reset(div);
    reset(section);
    append($$anchor, section);
    pop();
  }
  var rest_excludes$6 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "title",
    "open",
    "name",
    "class",
    "children"
  ]);
  var root$6 = /* @__PURE__ */ from_html(`<details><summary class="itr-acc__summary"><span> </span><!></summary> <div class="itr-acc__content"><!></div></details>`);
  function AccordionItem($$anchor, $$props) {
    push($$props, true);
    let open = prop($$props, "open", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$6);
    const ctx = getContext("itr-acc");
    const group = /* @__PURE__ */ user_derived(() => $$props.name ?? ctx);
    var details = root$6();
    attribute_effect(details, () => ({
      class: `itr-acc__item ${klass() ?? ""}`,
      id: $$props.id,
      open: open(),
      name: get(group),
      ...rest
    }));
    var summary = child(details);
    var span = child(summary);
    var text2 = only_child(span, true);
    var node = sibling(span);
    Icon(node, { name: "chevron-down", size: 20, class: "itr-acc__chevron" });
    reset(summary);
    var div = sibling(summary, 2);
    var node_1 = child(div);
    snippet(node_1, () => $$props.children ?? noop);
    reset(div);
    reset(details);
    template_effect(() => set_text(text2, $$props.title));
    append($$anchor, details);
    pop();
  }
  var rest_excludes$5 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "exclusive",
    "name",
    "class",
    "children"
  ]);
  var root$5 = /* @__PURE__ */ from_html(`<p><!></p>`);
  var root_1$3 = /* @__PURE__ */ from_html(`<div><!> <!></div>`);
  function Accordion($$anchor, $$props) {
    const uid2 = props_id();
    push($$props, true);
    let items = prop($$props, "items", 19, () => []), exclusive = prop($$props, "exclusive", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$5);
    const group = untrack(() => exclusive() ? $$props.name || `itr-acc-${uid2}` : void 0);
    setContext("itr-acc", group);
    var div = root_1$3();
    attribute_effect(div, () => ({ class: `itr-acc ${klass() ?? ""}`, ...rest }));
    var node = child(div);
    each(node, 19, items, (it, i) => it.id || i, ($$anchor2, it) => {
      AccordionItem($$anchor2, {
        get id() {
          return get(it).id;
        },
        get title() {
          return get(it).title;
        },
        get open() {
          return get(it).open;
        },
        get name() {
          return group;
        },
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = comment();
          var node_1 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var fragment_2 = comment();
              var node_2 = first_child(fragment_2);
              html$1(node_2, () => get(it).html);
              append($$anchor4, fragment_2);
            };
            var alternate = ($$anchor4) => {
              var p = root$5();
              var node_3 = child(p);
              Ph(node_3, {
                get text() {
                  return get(it).content;
                }
              });
              reset(p);
              append($$anchor4, p);
            };
            if_block(node_1, ($$render) => {
              if (get(it).html) $$render(consequent);
              else $$render(alternate, -1);
            });
          }
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
    });
    var node_4 = sibling(node, 2);
    snippet(node_4, () => $$props.children ?? noop);
    reset(div);
    append($$anchor, div);
    pop();
  }
  var rest_excludes$4 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "tone",
    "narrow",
    "flush",
    "eyebrow",
    "title",
    "lead",
    "display",
    "center",
    "headingLevel",
    "id",
    "class",
    "children"
  ]);
  var root$4 = /* @__PURE__ */ from_html(`<p class="itr-label itr-section__eyebrow"> </p>`);
  var root_1$2 = /* @__PURE__ */ from_html(`<p class="itr-section__lead"> </p>`);
  var root_2$2 = /* @__PURE__ */ from_html(`<div><!> <!> <!></div>`);
  var root_3 = /* @__PURE__ */ from_html(`<section><div><!> <!></div></section>`);
  function Section($$anchor, $$props) {
    let tone = prop($$props, "tone", 3, "fundo"), narrow = prop($$props, "narrow", 3, false), flush = prop($$props, "flush", 3, false), display = prop($$props, "display", 3, false), center = prop($$props, "center", 3, false), headingLevel = prop($$props, "headingLevel", 3, 2), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$4);
    var section = root_3();
    attribute_effect(section, () => ({
      class: `itr-section itr-section--${tone() ?? ""} ${flush() ? "itr-section--flush" : ""} ${klass() ?? ""}`,
      id: $$props.id,
      ...rest
    }));
    var div = child(section);
    var node = child(div);
    {
      var consequent_3 = ($$anchor2) => {
        var div_1 = root_2$2();
        var node_1 = child(div_1);
        {
          var consequent = ($$anchor3) => {
            var p = root$4();
            var text2 = only_child(p, true);
            template_effect(() => set_text(text2, $$props.eyebrow));
            append($$anchor3, p);
          };
          if_block(node_1, ($$render) => {
            if ($$props.eyebrow) $$render(consequent);
          });
        }
        var node_2 = sibling(node_1, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var fragment = comment();
            var node_3 = first_child(fragment);
            element(node_3, () => `h${headingLevel()}`, false, ($$element, $$anchor4) => {
              attribute_effect($$element, () => ({
                class: `itr-section__title ${display() ? "itr-section__title--display" : ""}`
              }));
              var text_1 = text();
              template_effect(() => set_text(text_1, $$props.title));
              append($$anchor4, text_1);
            });
            append($$anchor3, fragment);
          };
          if_block(node_2, ($$render) => {
            if ($$props.title) $$render(consequent_1);
          });
        }
        var node_4 = sibling(node_2, 2);
        {
          var consequent_2 = ($$anchor3) => {
            var p_1 = root_1$2();
            var text_2 = only_child(p_1, true);
            template_effect(() => set_text(text_2, $$props.lead));
            append($$anchor3, p_1);
          };
          if_block(node_4, ($$render) => {
            if ($$props.lead) $$render(consequent_2);
          });
        }
        reset(div_1);
        template_effect(() => set_class(div_1, 1, `itr-section__head ${center() ? "itr-section__head--center" : ""}`));
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if ($$props.eyebrow || $$props.title || $$props.lead) $$render(consequent_3);
      });
    }
    var node_5 = sibling(node, 2);
    snippet(node_5, () => $$props.children ?? noop);
    reset(div);
    reset(section);
    template_effect(() => set_class(div, 1, `itr-section__inner ${narrow() ? "itr-section__inner--narrow" : ""}`));
    append($$anchor, section);
  }
  var rest_excludes$3 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "columns",
    "class",
    "children"
  ]);
  var root$3 = /* @__PURE__ */ from_html(`<div><!></div>`);
  function Grid($$anchor, $$props) {
    let columns = prop($$props, "columns", 3, "auto"), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$3);
    var div = root$3();
    attribute_effect(div, () => ({
      class: `itr-grid itr-grid--${columns() ?? ""} ${klass() ?? ""}`,
      ...rest
    }));
    var node = child(div);
    snippet(node, () => $$props.children ?? noop);
    reset(div);
    append($$anchor, div);
  }
  var rest_excludes$2 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "columns",
    "headingLevel",
    "class"
  ]);
  var root$2 = /* @__PURE__ */ from_html(`<p class="itr-steps__text"><!></p>`);
  var root_1$1 = /* @__PURE__ */ from_html(`<li class="itr-steps__item"><span class="itr-steps__num" aria-hidden="true"></span> <div class="itr-steps__body"><!> <!></div></li>`);
  var root_2$1 = /* @__PURE__ */ from_html(`<ol></ol>`);
  function Steps($$anchor, $$props) {
    let items = prop($$props, "items", 19, () => []), columns = prop($$props, "columns", 3, "auto"), headingLevel = prop($$props, "headingLevel", 3, 3), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$2);
    var ol = root_2$1();
    attribute_effect(ol, () => ({
      class: `itr-steps itr-steps--${columns() ?? ""} ${klass() ?? ""}`,
      ...rest
    }));
    each(ol, 21, items, index, ($$anchor2, it, i) => {
      var li = root_1$1();
      var span = child(li);
      span.textContent = i + 1;
      var div = sibling(span, 2);
      var node = child(div);
      element(node, () => `h${headingLevel()}`, false, ($$element, $$anchor3) => {
        set_class($$element, 0, "itr-steps__title");
        var text$1 = text();
        template_effect(() => set_text(text$1, get(it).title));
        append($$anchor3, text$1);
      });
      var node_1 = sibling(node, 2);
      {
        var consequent = ($$anchor3) => {
          var p = root$2();
          var node_2 = child(p);
          Ph(node_2, {
            get text() {
              return get(it).text;
            }
          });
          reset(p);
          append($$anchor3, p);
        };
        if_block(node_1, ($$render) => {
          if (get(it).text) $$render(consequent);
        });
      }
      reset(div);
      reset(li);
      append($$anchor2, li);
    });
    reset(ol);
    append($$anchor, ol);
  }
  var rest_excludes$1 = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "headingLevel",
    "class"
  ]);
  var root$1 = /* @__PURE__ */ from_html(`<p class="itr-timeline__text"><!></p>`);
  var root_1 = /* @__PURE__ */ from_html(`<li><span class="itr-timeline__dot" aria-hidden="true"><!></span> <p class="itr-timeline__when"><!></p> <!> <!></li>`);
  var root_2 = /* @__PURE__ */ from_html(`<ol></ol>`);
  function Timeline($$anchor, $$props) {
    push($$props, true);
    let items = prop($$props, "items", 19, () => []), headingLevel = prop($$props, "headingLevel", 3, 3), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes$1);
    const pendente = (it) => it.pending || /\[\[/.test(`${it.when || ""} ${it.title || ""} ${it.text || ""}`);
    var ol = root_2();
    attribute_effect(ol, () => ({ class: `itr-timeline ${klass() ?? ""}`, ...rest }));
    each(ol, 21, items, index, ($$anchor2, it) => {
      var li = root_1();
      var span = child(li);
      var node = child(span);
      {
        var consequent = ($$anchor3) => {
          Icon($$anchor3, {
            get name() {
              return get(it).icon;
            },
            size: 16
          });
        };
        if_block(node, ($$render) => {
          if (get(it).icon) $$render(consequent);
        });
      }
      reset(span);
      var p = sibling(span, 2);
      var node_1 = child(p);
      Ph(node_1, {
        get text() {
          return get(it).when;
        }
      });
      reset(p);
      var node_2 = sibling(p, 2);
      element(node_2, () => `h${headingLevel()}`, false, ($$element, $$anchor3) => {
        set_class($$element, 0, "itr-timeline__title");
        Ph($$anchor3, {
          get text() {
            return get(it).title;
          }
        });
      });
      var node_3 = sibling(node_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var p_1 = root$1();
          var node_4 = child(p_1);
          Ph(node_4, {
            get text() {
              return get(it).text;
            }
          });
          reset(p_1);
          append($$anchor3, p_1);
        };
        if_block(node_3, ($$render) => {
          if (get(it).text) $$render(consequent_1);
        });
      }
      reset(li);
      template_effect(($0) => set_class(li, 1, `itr-timeline__item ${$0 ?? ""}`), [
        () => pendente(get(it)) ? "itr-timeline__item--pendente" : ""
      ]);
      append($$anchor2, li);
    });
    reset(ol);
    append($$anchor, ol);
    pop();
  }
  var rest_excludes = /* @__PURE__ */ new Set([
    "$$slots",
    "$$events",
    "$$legacy",
    "labelEscuro",
    "labelClaro",
    "size",
    "variant",
    "hidden",
    "class"
  ]);
  var root = /* @__PURE__ */ from_html(`<button><span class="itr-tt__escuro"><!><span class="itr-btn__label"> </span></span> <span class="itr-tt__claro"><!><span class="itr-btn__label"> </span></span></button>`);
  function ThemeToggle($$anchor, $$props) {
    let labelEscuro = prop($$props, "labelEscuro", 3, "Tema escuro"), labelClaro = prop($$props, "labelClaro", 3, "Tema claro"), size = prop($$props, "size", 3, "s"), variant = prop($$props, "variant", 3, "ghost"), hidden = prop($$props, "hidden", 3, false), klass = prop($$props, "class", 3, ""), rest = /* @__PURE__ */ rest_props($$props, rest_excludes);
    var button = root();
    attribute_effect(button, () => ({
      type: "button",
      class: `itr-btn itr-btn--${variant() ?? ""} itr-btn--${size() ?? ""} itr-tt ${klass() ?? ""}`,
      "data-tema-toggle": true,
      hidden: hidden(),
      ...rest
    }));
    var span = child(button);
    var node = child(span);
    Icon(node, { name: "moon", size: 20 });
    var span_1 = sibling(node);
    var text2 = only_child(span_1, true);
    reset(span);
    var span_2 = sibling(span, 2);
    var node_1 = child(span_2);
    Icon(node_1, { name: "sun", size: 20 });
    var span_3 = sibling(node_1);
    var text_1 = only_child(span_3, true);
    reset(span_2);
    reset(button);
    template_effect(() => {
      set_text(text2, labelEscuro());
      set_text(text_1, labelClaro());
    });
    append($$anchor, button);
  }
  function validar(form) {
    const erros = [];
    for (const el of form.querySelectorAll("input, select, textarea")) {
      if (!el.name || el.disabled) continue;
      const lab = form.querySelector(`label[for="${el.id}"]`);
      const rotulo = ((lab?.querySelector(".itr-check__label") || lab)?.textContent || el.name).replace(/\(opcional\)/i, "").trim();
      const vazio = el.type === "checkbox" ? !el.checked : !String(el.value || "").trim();
      let message = "";
      if (el.required && vazio) message = el.type === "checkbox" ? `Marque "${rotulo}".` : `Preencha ${rotulo.toLowerCase()}.`;
      else if (!vazio && el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) message = "Informe um e-mail válido, como nome@exemplo.com.br.";
      else if (!vazio && el.dataset.tipo === "telefone" && !/^\d{10,11}$/.test(el.value.replace(/\D/g, ""))) message = "Informe um telefone com DDD, como (11) 90000-0000.";
      else if (!vazio && el.minLength > 0 && String(el.value).length < el.minLength) message = `Use pelo menos ${el.minLength} caracteres.`;
      if (message) erros.push({ id: el.id, name: el.name, message });
    }
    return erros;
  }
  const lib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Accordion,
    AccordionItem,
    Alert,
    Badge,
    Button,
    Checkbox,
    ContactCTA,
    CourseCard,
    Footer,
    Form,
    FormActions,
    FormRow,
    Grid,
    Hero,
    ICONS,
    ICON_NAMES,
    Icon,
    Logo,
    NavBar,
    Ph,
    PriceCard,
    Section,
    Select,
    ServiceCard,
    Sinal,
    Steps,
    Testimonial,
    TextField,
    ThemeToggle,
    Timeline,
    validar
  }, Symbol.toStringTag, { value: "Module" }));
  const html = (s) => createRawSnippet(() => ({ render: () => `<div style="display:contents">${s}</div>` }));
  const api = { ...lib, mount, unmount, html, versao: "1.1.0" };
  if (typeof window !== "undefined") window.Iteruno = Object.assign(window.Iteruno || {}, api);
  return api;
})();
