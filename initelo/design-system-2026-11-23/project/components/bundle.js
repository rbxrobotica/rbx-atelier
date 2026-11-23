/* @ds-bundle: {"format":4,"namespace":"IniteloDesignSystem_b8cd96","components":[{"name":"CourseCard","sourcePath":"components/cards/CourseCard.jsx"},{"name":"EmptyState","sourcePath":"components/cards/EmptyState.jsx"},{"name":"LessonCard","sourcePath":"components/cards/LessonCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CourseSeal","sourcePath":"components/core/CourseSeal.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Stepper","sourcePath":"components/feedback/Stepper.jsx"},{"name":"BudgetTable","sourcePath":"components/finance/BudgetTable.jsx"},{"name":"DueDate","sourcePath":"components/finance/DueDate.jsx"},{"name":"FlowTag","sourcePath":"components/finance/FlowTag.jsx"},{"name":"Money","sourcePath":"components/finance/Money.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"LessonList","sourcePath":"components/navigation/LessonList.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"PromptSuggestion","sourcePath":"components/tutor/PromptSuggestion.jsx"},{"name":"TutorMessage","sourcePath":"components/tutor/TutorMessage.jsx"},{"name":"TutorPanel","sourcePath":"components/tutor/TutorPanel.jsx"},{"name":"VerifyChecklist","sourcePath":"components/tutor/VerifyChecklist.jsx"}],"sourceHashes":{"components/cards/CourseCard.jsx":"52188adb63a9","components/cards/EmptyState.jsx":"72a35c66a066","components/cards/LessonCard.jsx":"7a830bb84964","components/core/Badge.jsx":"0111355e671d","components/core/Button.jsx":"67c1a74973c5","components/core/CourseSeal.jsx":"b2a3cdee2c79","components/core/Icon.jsx":"8b19fe490c77","components/core/IconButton.jsx":"51c96711042b","components/core/Logo.jsx":"f8e6816f897d","components/feedback/Alert.jsx":"66070480da58","components/feedback/ProgressBar.jsx":"06830d6abbe5","components/feedback/Skeleton.jsx":"f534e422de11","components/feedback/Spinner.jsx":"57c94c55b5bd","components/feedback/Stepper.jsx":"5398efacada6","components/finance/BudgetTable.jsx":"050871c6ebd8","components/finance/DueDate.jsx":"619a2bb56287","components/finance/FlowTag.jsx":"637ee63d622a","components/finance/Money.jsx":"8c67d99507e4","components/forms/Checkbox.jsx":"fc519aff1f73","components/forms/Radio.jsx":"757158383686","components/forms/Select.jsx":"1a2c6cd774a4","components/forms/TextField.jsx":"1925f823001b","components/navigation/Breadcrumb.jsx":"ca89a0bbc05f","components/navigation/LessonList.jsx":"4417301bc1dc","components/navigation/Tabs.jsx":"5e6c8ceffac7","components/navigation/TopNav.jsx":"300e17240af4","components/tutor/PromptSuggestion.jsx":"a5be09fceaee","components/tutor/TutorMessage.jsx":"b7ba15701358","components/tutor/TutorPanel.jsx":"4b9ce6602efa","components/tutor/VerifyChecklist.jsx":"15064e5d8264","ui_kits/plataforma/App.jsx":"bb344a9714b5","ui_kits/plataforma/CoursePage.jsx":"2ff79da61d2c","ui_kits/plataforma/ExercisePage.jsx":"059950e4f100","ui_kits/plataforma/LessonPage.jsx":"f8a2e9598566","ui_kits/plataforma/data.js":"81b0186c7591"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IniteloDesignSystem_b8cd96 = window.IniteloDesignSystem_b8cd96 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/CourseSeal.jsx
try { (() => {
/** Selo de curso: etiqueta de caderno com número da formação, cor e padrão do curso. */
function CourseSeal({
  number = '01',
  title,
  kind = 'Formação',
  curso,
  variant = 'etiqueta',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-selo' + (variant === 'compacto' ? ' ini-selo--compact' : '') + ' ' + className,
    "data-curso": curso
  }, /*#__PURE__*/React.createElement("span", {
    className: "ini-selo__num"
  }, number), /*#__PURE__*/React.createElement("span", {
    className: "ini-selo__corpo"
  }, variant !== 'compacto' && /*#__PURE__*/React.createElement("span", {
    className: "ini-selo__kind"
  }, kind), /*#__PURE__*/React.createElement("span", {
    className: "ini-selo__title"
  }, title)));
}
Object.assign(__ds_scope, { CourseSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CourseSeal.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_SRC = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js';
let loading = null;
function ready() {
  return typeof window !== 'undefined' && window.lucide && window.lucide.icons;
}
function ensure() {
  if (typeof window === 'undefined' || ready()) return Promise.resolve();
  if (!loading) {
    loading = new Promise(function (res) {
      var s = document.querySelector('script[src*="lucide"]');
      var own = !s;
      if (own) {
        s = document.createElement('script');
        s.src = LUCIDE_SRC;
        s.async = true;
      }
      s.addEventListener('load', function () {
        res();
      });
      s.addEventListener('error', function () {
        res();
      });
      if (own) document.head.appendChild(s);
      var n = 0;
      var t = setInterval(function () {
        if (ready() || ++n > 100) {
          clearInterval(t);
          res();
        }
      }, 100);
    });
  }
  return loading;
}
function pascal(n) {
  return n.split('-').map(function (p) {
    return p.charAt(0).toUpperCase() + p.slice(1);
  }).join('');
}
/** Ícone Lucide (traço 1.75, cantos arredondados). Carrega a biblioteca sozinho se a página ainda não a incluiu. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  label,
  className = '',
  style
}) {
  const [, tick] = React.useState(0);
  React.useEffect(function () {
    if (ready()) return;
    let on = true;
    ensure().then(function () {
      if (on) tick(function (n) {
        return n + 1;
      });
    });
    return function () {
      on = false;
    };
  }, []);
  let node = ready() ? window.lucide.icons[pascal(name)] : null;
  if (node && node[0] === 'svg') node = node[2];
  const a11y = label ? {
    role: 'img',
    'aria-label': label
  } : {
    'aria-hidden': true
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: 'ini-icon ' + className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, a11y), (node || []).map(function (n, i) {
    return React.createElement(n[0], Object.assign({}, n[1], {
      key: i
    }));
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/EmptyState.jsx
try { (() => {
/** Estado vazio: diz o que falta e qual é o próximo passo. */
function EmptyState({
  icon = 'file-text',
  title,
  description,
  action,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'ini-empty ' + className
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ini-empty__icon",
    name: icon,
    size: 28
  }), /*#__PURE__*/React.createElement("p", {
    className: "ini-empty__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ini-empty__desc"
  }, description), action && /*#__PURE__*/React.createElement("div", {
    className: "ini-empty__action"
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Selo curto de status — sempre texto, com ícone opcional; nunca só cor. */
function Badge({
  tone = 'neutral',
  icon,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-badge' + (tone !== 'neutral' ? ' ini-badge--' + tone : '') + ' ' + className
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    strokeWidth: 2
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/LessonCard.jsx
try { (() => {
const ST = {
  done: ['success', 'circle-check', 'Concluída'],
  current: ['info', 'circle-dot', 'Em andamento'],
  available: ['neutral', null, 'Disponível'],
  locked: ['neutral', 'lock', 'Bloqueada']
};
/** Linha-card de aula ou exercício dentro de um módulo. */
function LessonCard({
  index,
  title,
  meta,
  status = 'available',
  kind = 'aula',
  href,
  onOpen,
  className = ''
}) {
  const s = ST[status] || ST.available;
  const locked = status === 'locked';
  const Tag = href && !locked ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    className: 'ini-lessoncard ini-lessoncard--' + status + ' ' + className,
    href: Tag === 'a' ? href : undefined,
    type: Tag === 'button' ? 'button' : undefined,
    "aria-disabled": locked || undefined,
    onClick: locked ? undefined : onOpen
  }, /*#__PURE__*/React.createElement("span", {
    className: "ini-lessoncard__idx",
    "aria-hidden": "true"
  }, status === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 20,
    strokeWidth: 2.25
  }) : locked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 18
  }) : index), /*#__PURE__*/React.createElement("span", {
    className: "ini-lessoncard__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ini-lessoncard__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "ini-lessoncard__meta"
  }, [kind === 'exercicio' ? 'Exercício' : 'Aula ' + index, meta].filter(Boolean).join(' · '))), /*#__PURE__*/React.createElement("span", {
    className: "ini-lessoncard__end"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: s[0],
    icon: s[1]
  }, s[2]), !locked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  })));
}
Object.assign(__ds_scope, { LessonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/LessonCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Botão de ação. O rótulo começa com verbo no infinitivo ("Começar", "Conferir respostas"). */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  loadingLabel = 'Carregando…',
  disabled = false,
  fullWidth = false,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['ini-btn', 'ini-btn--' + variant, size !== 'md' ? 'ini-btn--' + size : '', fullWidth ? 'ini-btn--full' : '', loading ? 'is-loading' : '', className].filter(Boolean).join(' ');
  const isz = size === 'sm' ? 16 : 20;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement("span", {
    className: "ini-spinner",
    "aria-hidden": "true"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: isz
  }) : null, /*#__PURE__*/React.createElement("span", null, loading ? loadingLabel : children), !loading && iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: isz
  }) : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    "aria-busy": loading || undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Botão só com ícone — exige label (vira aria-label e title). */
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  className = '',
  ...rest
}) {
  const cls = ['ini-iconbtn', size === 'sm' ? 'ini-iconbtn--sm' : '', variant === 'outlined' ? 'ini-iconbtn--outlined' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 22
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function I({
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ini-logo__i",
    style: color ? {
      color: color
    } : undefined
  }, "\u0131", /*#__PURE__*/React.createElement("span", {
    className: "ini-logo__pingo",
    style: color ? {
      background: color
    } : undefined
  }));
}
/** Assinatura Initelo (PROPOSTA): logotipo tipográfico com os "pingos nos is" + símbolo. */
function Logo({
  variant = 'horizontal',
  tone = 'clara',
  size = 28,
  shape = 'quadrado',
  knockout,
  className = '',
  label = 'Initelo',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-logo ini-logo--' + tone + ' ' + className,
    style: Object.assign({
      fontSize: size
    }, style),
    role: "img",
    "aria-label": label
  }, variant !== 'wordmark' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: 'ini-logo__sym' + (shape === 'redondo' ? ' ini-logo__sym--round' : '')
  }, /*#__PURE__*/React.createElement(I, {
    color: tone === 'mono' ? knockout : undefined
  })), variant !== 'simbolo' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "ini-logo__word"
  }, /*#__PURE__*/React.createElement(I, null), "n", /*#__PURE__*/React.createElement(I, null), "telo"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const ICONS = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  error: 'circle-alert'
};
/** Aviso em linha: informação, sucesso, atenção ou erro — sempre com ícone e texto. */
function Alert({
  tone = 'info',
  title,
  children,
  action,
  onClose,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'ini-alert ini-alert--' + tone + ' ' + className,
    role: tone === 'error' ? 'alert' : 'status'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ini-alert__icon",
    name: ICONS[tone],
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    className: "ini-alert__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "ini-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("span", null, children), action && /*#__PURE__*/React.createElement("div", {
    className: "ini-alert__action"
  }, action)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ini-alert__close",
    size: "sm",
    icon: "x",
    label: "Fechar aviso",
    onClick: onClose
  }));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Barra de progresso com rótulo e valor por escrito ("5 de 24 aulas"). */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  valueText,
  tone = 'action',
  size = 'md',
  className = ''
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value / max * 100)));
  const done = pct >= 100;
  const text = valueText || (done ? 'Concluído' : pct + '%');
  const cls = ['ini-progress', tone === 'course' ? 'ini-progress--course' : '', size === 'sm' ? 'ini-progress--sm' : '', done ? 'is-complete' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-progress__head"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ini-progress__label"
  }, label) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    className: "ini-progress__value ini-num"
  }, done && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 16
  }), text)), /*#__PURE__*/React.createElement("div", {
    className: "ini-progress__track",
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuetext": text,
    "aria-label": typeof label === 'string' ? label : 'Progresso'
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-progress__fill",
    style: {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/** Marcador de carregamento com a forma do conteúdo que vai chegar. */
function Skeleton({
  width = '100%',
  height = 14,
  lines,
  className = '',
  style
}) {
  if (lines) return /*#__PURE__*/React.createElement("span", {
    className: 'ini-skel-lines ' + className,
    "aria-hidden": "true"
  }, Array.from({
    length: lines
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ini-skel",
      style: {
        width: i === lines - 1 ? '60%' : '100%',
        height: height
      }
    });
  }));
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-skel ' + className,
    "aria-hidden": "true",
    style: Object.assign({
      width: width,
      height: height
    }, style)
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/cards/CourseCard.jsx
try { (() => {
const CTA = {
  available: 'Conhecer o curso',
  'in-progress': 'Continuar curso',
  done: 'Rever o curso'
};
/** Card de curso com faixa na cor e no padrão da formação. */
function CourseCard({
  title,
  description,
  number = '01',
  curso,
  meta,
  status = 'available',
  progress = 0,
  progressText,
  href = '#',
  onOpen,
  loading = false,
  className = ''
}) {
  if (loading) return /*#__PURE__*/React.createElement("article", {
    className: 'ini-card ini-coursecard ' + className,
    "aria-busy": "true",
    "aria-label": "Carregando curso"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-coursecard__band",
    style: {
      background: 'var(--surface-sunken)',
      borderColor: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ini-coursecard__body"
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: "40%",
    height: 12
  }), /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: "85%",
    height: 24
  }), /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    lines: 2
  }), /*#__PURE__*/React.createElement("div", {
    className: "ini-coursecard__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: 150,
    height: 44
  }))));
  return /*#__PURE__*/React.createElement("article", {
    className: 'ini-card ini-coursecard ' + className,
    "data-curso": curso
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-coursecard__band"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ini-coursecard__num",
    "aria-hidden": "true"
  }, number)), /*#__PURE__*/React.createElement("div", {
    className: "ini-coursecard__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ini-coursecard__kind ini-overline"
  }, "Forma\xE7\xE3o ", number), /*#__PURE__*/React.createElement("h3", {
    className: "ini-coursecard__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ini-coursecard__desc"
  }, description), meta && /*#__PURE__*/React.createElement("span", {
    className: "ini-coursecard__meta"
  }, meta), /*#__PURE__*/React.createElement("div", {
    className: "ini-coursecard__foot"
  }, status === 'in-progress' && /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    tone: "course",
    size: "sm",
    value: progress,
    label: "Seu progresso",
    valueText: progressText
  }), status === 'done' && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success",
    icon: "circle-check"
  }, "Curso conclu\xEDdo"), status === 'soon' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    icon: "clock"
  }, "Em breve") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: status === 'in-progress' ? 'primary' : 'secondary',
    href: href,
    onClick: onOpen,
    iconRight: "arrow-right"
  }, CTA[status]))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/** Indicador de espera curto, com texto. */
function Spinner({
  size = 20,
  label = 'Carregando…',
  showLabel = true,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-spinner-wrap ' + className,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ini-spinner",
    style: {
      fontSize: size
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: showLabel ? 'ini-spinner-wrap__label' : 'ini-sr'
  }, label));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Stepper.jsx
try { (() => {
/** Etapas de um exercício: Monte a tabela → Pergunte à IA → Confira → Decida. */
function Stepper({
  steps = [],
  current = 0,
  compact = false,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: 'ini-steps' + (compact ? ' ini-steps--compact' : '') + ' ' + className
  }, steps.map(function (s, i) {
    const st = i < current ? 'done' : i === current ? 'current' : 'todo';
    const lab = typeof s === 'string' ? s : s.label;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: 'ini-step ini-step--' + st,
      "aria-current": st === 'current' ? 'step' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "ini-step__dot",
      "aria-hidden": "true"
    }, st === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16,
      strokeWidth: 2.5
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "ini-step__label"
    }, st === 'done' && /*#__PURE__*/React.createElement("span", {
      className: "ini-sr"
    }, "Conclu\xEDda: "), compact && st === 'current' ? 'Etapa ' + (i + 1) + ' de ' + steps.length + ' · ' + lab : lab), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "ini-step__line",
      "aria-hidden": "true"
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/finance/DueDate.jsx
try { (() => {
const ICON = {
  paid: 'circle-check',
  overdue: 'circle-alert',
  soon: 'clock'
};
/** Vencimento por extenso: "vence dia 10", "entra dia 5", "vence em 3 dias (dia 10)". */
function DueDate({
  day,
  kind = 'expense',
  status = 'upcoming',
  daysLeft,
  date,
  icon = true,
  className = ''
}) {
  let text;
  if (kind === 'income') text = 'entra dia ' + day;else if (status === 'paid') text = 'paga' + (date ? ' em ' + date : '');else if (status === 'overdue') text = 'venceu dia ' + day;else if (status === 'soon') text = 'vence ' + (daysLeft === 0 ? 'hoje' : daysLeft === 1 ? 'amanhã' : 'em ' + daysLeft + ' dias') + ' (dia ' + day + ')';else text = 'vence dia ' + day;
  const st = kind === 'income' ? 'income' : status;
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-due ini-due--' + st + ' ' + className
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICON[st] || 'calendar',
    size: 16
  }), text);
}
Object.assign(__ds_scope, { DueDate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/DueDate.jsx", error: String((e && e.message) || e) }); }

// components/finance/FlowTag.jsx
try { (() => {
/** Rótulo de tipo de lançamento: Entrada (seta para dentro) ou Despesa (seta para fora). */
function FlowTag({
  kind = 'expense',
  className = ''
}) {
  const inc = kind === 'income';
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-flow ini-flow--' + kind + ' ' + className
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: inc ? 'arrow-down-left' : 'arrow-up-right',
    size: 16,
    strokeWidth: 2
  }), inc ? 'Entrada' : 'Despesa');
}
Object.assign(__ds_scope, { FlowTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/FlowTag.jsx", error: String((e && e.message) || e) }); }

// components/finance/Money.jsx
try { (() => {
function formatBRL(v) {
  const p = Math.abs(Number(v) || 0).toFixed(2).split('.');
  return 'R$\u00a0' + p[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + p[1];
}
/** Valor em reais: R$ 1.234,56, algarismos tabulares, sinal + para entrada e − para despesa. */
function Money({
  value,
  kind = 'neutral',
  showSign,
  className = ''
}) {
  const neg = kind === 'neutral' && Number(value) < 0;
  const sign = kind === 'income' ? '+' : kind === 'expense' || neg ? '\u2212' : '';
  const show = showSign !== undefined ? showSign : kind !== 'neutral' || neg;
  return /*#__PURE__*/React.createElement("span", {
    className: 'ini-money ini-num' + (kind !== 'neutral' ? ' ini-money--' + kind : '') + ' ' + className
  }, show && sign ? /*#__PURE__*/React.createElement("span", {
    className: "ini-money__sign"
  }, sign) : null, formatBRL(value));
}
Object.assign(__ds_scope, { Money });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/Money.jsx", error: String((e && e.message) || e) }); }

// components/finance/BudgetTable.jsx
try { (() => {
/** Tabela de orçamento do mês: data, descrição, tipo, valor e saldo após cada lançamento. Vira lista empilhada abaixo de 560 px. */
function BudgetTable({
  rows = [],
  caption = 'Orçamento do mês',
  description,
  showBalance = true,
  loading = false,
  error,
  emptyTitle = 'Nenhum lançamento ainda',
  emptyDescription = 'Comece pela entrada principal do mês — por exemplo, o salário do dia 5.',
  emptyAction,
  className = ''
}) {
  let bal = 0,
    inc = 0,
    exp = 0;
  const calc = rows.map(function (r) {
    const ok = typeof r.value === 'number';
    if (ok) {
      if (r.kind === 'income') {
        inc += r.value;
        bal += r.value;
      } else {
        exp += r.value;
        bal -= r.value;
      }
    }
    return Object.assign({}, r, {
      ok: ok,
      balance: bal
    });
  });
  const cols = showBalance ? 5 : 4;
  const pad = showBalance ? /*#__PURE__*/React.createElement("td", {
    className: "c-pad"
  }) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: 'ini-budget ' + className,
    "aria-busy": loading || undefined
  }, error && /*#__PURE__*/React.createElement("div", {
    className: "ini-budget__alert"
  }, /*#__PURE__*/React.createElement(__ds_scope.Alert, {
    tone: "error",
    title: "N\xE3o foi poss\xEDvel carregar a tabela"
  }, error)), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("caption", null, caption, description && /*#__PURE__*/React.createElement("small", null, description)), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Data"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Tipo"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "is-num"
  }, "Valor"), showBalance && /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "is-num"
  }, "Saldo ap\xF3s"))), /*#__PURE__*/React.createElement("tbody", null, loading ? [0, 1, 2, 3].map(function (i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      className: "c-date"
    }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
      width: 44
    })), /*#__PURE__*/React.createElement("td", {
      className: "c-desc"
    }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
      width: i % 2 ? '70%' : '50%',
      height: 16
    })), /*#__PURE__*/React.createElement("td", {
      className: "c-kind"
    }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
      width: 64
    })), /*#__PURE__*/React.createElement("td", {
      className: "c-value is-num"
    }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
      width: 90,
      style: {
        marginLeft: 'auto'
      }
    })), showBalance && /*#__PURE__*/React.createElement("td", {
      className: "c-balance is-num"
    }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
      width: 90,
      style: {
        marginLeft: 'auto'
      }
    })));
  }) : calc.length === 0 ? /*#__PURE__*/React.createElement("tr", {
    className: "is-empty"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: cols
  }, /*#__PURE__*/React.createElement(__ds_scope.EmptyState, {
    icon: "table",
    title: emptyTitle,
    description: emptyDescription,
    action: emptyAction
  }))) : calc.map(function (r) {
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      className: r.error ? 'is-error' : undefined
    }, /*#__PURE__*/React.createElement("td", {
      className: "c-date ini-num"
    }, r.date), /*#__PURE__*/React.createElement("td", {
      className: "c-desc"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ini-budget__desc"
    }, r.description), r.day != null && /*#__PURE__*/React.createElement("span", {
      className: "ini-budget__sub"
    }, /*#__PURE__*/React.createElement(__ds_scope.DueDate, {
      day: r.day,
      kind: r.kind,
      status: r.status,
      daysLeft: r.daysLeft,
      date: r.date
    })), r.error && /*#__PURE__*/React.createElement("span", {
      className: "ini-budget__rowerr"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "circle-alert",
      size: 16
    }), r.error)), /*#__PURE__*/React.createElement("td", {
      className: "c-kind"
    }, /*#__PURE__*/React.createElement(__ds_scope.FlowTag, {
      kind: r.kind
    })), /*#__PURE__*/React.createElement("td", {
      className: "c-value is-num"
    }, r.ok ? /*#__PURE__*/React.createElement(__ds_scope.Money, {
      value: r.value,
      kind: r.kind
    }) : /*#__PURE__*/React.createElement("span", {
      className: "ini-money"
    }, "\u2014")), showBalance && /*#__PURE__*/React.createElement("td", {
      className: "c-balance is-num"
    }, r.ok ? /*#__PURE__*/React.createElement(__ds_scope.Money, {
      value: r.balance
    }) : /*#__PURE__*/React.createElement("span", {
      className: "ini-money"
    }, "\u2014")));
  })), !loading && calc.length > 0 && /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "row",
    colSpan: 3
  }, "Total de entradas"), /*#__PURE__*/React.createElement("td", {
    className: "is-num"
  }, /*#__PURE__*/React.createElement(__ds_scope.Money, {
    value: inc,
    kind: "income"
  })), pad), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "row",
    colSpan: 3
  }, "Total de despesas"), /*#__PURE__*/React.createElement("td", {
    className: "is-num"
  }, /*#__PURE__*/React.createElement(__ds_scope.Money, {
    value: exp,
    kind: "expense"
  })), pad), /*#__PURE__*/React.createElement("tr", {
    className: "is-total"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row",
    colSpan: 3
  }, "Saldo previsto do m\xEAs"), /*#__PURE__*/React.createElement("td", {
    className: "is-num"
  }, /*#__PURE__*/React.createElement(__ds_scope.Money, {
    value: inc - exp
  })), pad))));
}
Object.assign(__ds_scope, { BudgetTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/BudgetTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Caixa de seleção com rótulo e detalhe opcional — base das listas de conferência. */
function Checkbox({
  label,
  detail,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ini-check', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "ini-check__input",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ini-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    className: "ini-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), detail && /*#__PURE__*/React.createElement("span", {
    className: "ini-check__detail"
  }, detail)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Opção única dentro de um grupo (mesmo name). */
function Radio({
  label,
  detail,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ini-check', 'ini-check--radio', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    className: "ini-check__input",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ini-check__box",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ini-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), detail && /*#__PURE__*/React.createElement("span", {
    className: "ini-check__detail"
  }, detail)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seleção nativa com a mesma moldura do TextField. */
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  disabled = false,
  id,
  className = '',
  children,
  ...rest
}) {
  const uid = React.useId();
  const fid = id || uid;
  const mid = fid + '-msg';
  const cls = ['ini-field', error ? 'is-error' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ini-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ini-field__control"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "ini-field__input",
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error || hint ? mid : undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(function (o) {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "ini-field__affix"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), error ? /*#__PURE__*/React.createElement("p", {
    className: "ini-field__msg ini-field__msg--error",
    id: mid
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, error)) : hint ? /*#__PURE__*/React.createElement("p", {
    className: "ini-field__msg",
    id: mid
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Campo de texto com rótulo, dica e erro. Use prefix="R$" + numeric para valores. */
function TextField({
  label,
  hint,
  error,
  prefix,
  suffix,
  multiline = false,
  rows = 3,
  numeric = false,
  optional = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const uid = React.useId();
  const fid = id || uid;
  const mid = fid + '-msg';
  const cls = ['ini-field', error ? 'is-error' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ini-field__label",
    htmlFor: fid
  }, label, optional && /*#__PURE__*/React.createElement("span", {
    className: "ini-field__opt"
  }, " (opcional)")), /*#__PURE__*/React.createElement("div", {
    className: "ini-field__control"
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "ini-field__affix"
  }, prefix), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    className: 'ini-field__input' + (numeric ? ' ini-field__input--num ini-num' : ''),
    rows: multiline ? rows : undefined,
    inputMode: numeric ? 'decimal' : undefined,
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error || hint ? mid : undefined
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "ini-field__affix"
  }, suffix)), error ? /*#__PURE__*/React.createElement("p", {
    className: "ini-field__msg ini-field__msg--error",
    id: mid
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, error)) : hint ? /*#__PURE__*/React.createElement("p", {
    className: "ini-field__msg",
    id: mid
  }, hint) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Trilha de navegação: curso › módulo › aula. */
function Breadcrumb({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Voc\xEA est\xE1 em",
    className: className
  }, /*#__PURE__*/React.createElement("ol", {
    className: "ini-crumbs"
  }, items.map(function (it, i) {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: it.onClick
    }, it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    }));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LessonList.jsx
try { (() => {
const STATUS = {
  done: {
    icon: 'circle-check',
    text: 'Concluída'
  },
  current: {
    icon: 'circle-dot',
    text: 'Em andamento'
  },
  available: {
    icon: 'circle',
    text: 'Disponível'
  },
  locked: {
    icon: 'lock',
    text: 'Bloqueada'
  }
};
/** Lista de aulas de um módulo, com estado em ícone + texto. */
function LessonList({
  title,
  lessons = [],
  onSelect,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: 'ini-lessons ' + className,
    "aria-label": title || 'Aulas do módulo'
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "ini-lessons__title ini-overline"
  }, title), /*#__PURE__*/React.createElement("ol", {
    className: "ini-lessons__list"
  }, lessons.map(function (l) {
    const st = l.status || 'available';
    const s = STATUS[st];
    const locked = st === 'locked';
    return /*#__PURE__*/React.createElement("li", {
      key: l.id
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: 'ini-lesson ini-lesson--' + st,
      "aria-current": st === 'current' ? 'step' : undefined,
      "aria-disabled": locked || undefined,
      onClick: function () {
        if (!locked && onSelect) onSelect(l);
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      className: "ini-lesson__icon",
      name: s.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      className: "ini-lesson__text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ini-lesson__name"
    }, l.title), /*#__PURE__*/React.createElement("span", {
      className: "ini-lesson__meta"
    }, [l.kind === 'exercicio' ? 'Exercício' : null, s.text, l.duration].filter(Boolean).join(' · ')))));
  })));
}
Object.assign(__ds_scope, { LessonList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LessonList.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Abas para alternar painéis da mesma tela (ex.: Aula · Aulas do módulo · Tutor no mobile). */
function Tabs({
  items = [],
  value,
  onChange,
  label,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": label,
    className: 'ini-tabs ' + className
  }, items.map(function (it) {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      type: "button",
      "aria-selected": on,
      tabIndex: on ? 0 : -1,
      className: "ini-tab",
      onClick: function () {
        onChange && onChange(it.id);
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
/** Barra superior da plataforma: marca, links principais e conta. Abaixo de 768 px os links viram menu. */
function TopNav({
  links = [],
  user,
  compact = false,
  homeHref = '#',
  onHome,
  onMenu,
  onNavigate,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: 'ini-topnav' + (compact ? ' ini-topnav--compact' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-topnav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ini-topnav__brand",
    href: homeHref,
    onClick: onHome
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: compact ? 26 : 30,
    label: "Initelo \u2014 p\xE1gina inicial"
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Principal",
    className: "ini-topnav__nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ini-topnav__links"
  }, links.map(function (l) {
    return /*#__PURE__*/React.createElement("li", {
      key: l.label
    }, /*#__PURE__*/React.createElement("a", {
      className: "ini-topnav__link",
      href: l.href || '#',
      "aria-current": l.current ? 'page' : undefined,
      onClick: onNavigate ? function (e) {
        onNavigate(l, e);
      } : undefined
    }, l.label));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ini-topnav__right"
  }, children, user && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ini-avatar",
    "aria-label": 'Conta de ' + user.name,
    title: user.name
  }, user.initials), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ini-topnav__menu",
    icon: "menu",
    label: "Abrir menu",
    onClick: onMenu
  }))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/tutor/PromptSuggestion.jsx
try { (() => {
/** Ficha com uma sugestão de pergunta para a IA, em fonte monoespaçada, com ações de usar e copiar. */
function PromptSuggestion({
  title = 'Sugestão de pergunta para a IA',
  children,
  hint = 'Troque os valores pelos seus antes de enviar.',
  onUse,
  useLabel = 'Usar esta pergunta',
  onCopy,
  className = ''
}) {
  const [copied, setCopied] = React.useState(false);
  function copy() {
    const t = typeof children === 'string' ? children : '';
    try {
      navigator.clipboard && navigator.clipboard.writeText(t);
    } catch (e) {}
    setCopied(true);
    onCopy && onCopy(t);
    setTimeout(function () {
      setCopied(false);
    }, 2000);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: 'ini-prompt ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-prompt__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 18
  }), title), /*#__PURE__*/React.createElement("p", {
    className: "ini-prompt__text"
  }, children), hint && /*#__PURE__*/React.createElement("p", {
    className: "ini-prompt__hint"
  }, hint), /*#__PURE__*/React.createElement("div", {
    className: "ini-prompt__actions"
  }, onUse && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "corner-down-right",
    onClick: function () {
      onUse(typeof children === 'string' ? children : '');
    }
  }, useLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    icon: copied ? 'check' : 'copy',
    onClick: copy
  }, copied ? 'Copiado' : 'Copiar')));
}
Object.assign(__ds_scope, { PromptSuggestion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tutor/PromptSuggestion.jsx", error: String((e && e.message) || e) }); }

// components/tutor/TutorMessage.jsx
try { (() => {
/** Mensagem da conversa com o tutor. Respostas da IA trazem o lembrete "confira antes de usar". */
function TutorMessage({
  from = 'tutor',
  status,
  verify = true,
  author,
  children,
  className = ''
}) {
  const who = author || (from === 'student' ? 'Você' : 'Tutor de IA');
  return /*#__PURE__*/React.createElement("div", {
    className: 'ini-msg ini-msg--' + from + ' ' + className
  }, /*#__PURE__*/React.createElement("span", {
    className: "ini-msg__who"
  }, from === 'tutor' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 14
  }), who), /*#__PURE__*/React.createElement("div", {
    className: "ini-msg__bubble"
  }, status === 'loading' ? /*#__PURE__*/React.createElement("span", {
    className: "ini-msg__dots",
    role: "status"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), "Escrevendo a resposta\u2026") : children), from === 'tutor' && !status && verify && /*#__PURE__*/React.createElement("span", {
    className: "ini-msg__check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "list-checks",
    size: 14
  }), "Resposta de IA \u2014 confira antes de usar"));
}
Object.assign(__ds_scope, { TutorMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tutor/TutorMessage.jsx", error: String((e && e.message) || e) }); }

// components/tutor/TutorPanel.jsx
try { (() => {
/** Painel do tutor de IA: conversa, sugestões, campo de pergunta e lembrete de conferência. */
function TutorPanel({
  title = 'Tutor de IA',
  messages = [],
  suggestions = [],
  onSend,
  loading = false,
  error,
  onRetry,
  onClose,
  placeholder = 'Escreva sua pergunta…',
  draft,
  disclaimer = 'A IA pode errar. Confira valores e premissas antes de decidir.',
  emptyText = 'Pergunte sobre a aula ou peça ajuda para montar uma pergunta. O tutor explica; quem decide é você.',
  className = ''
}) {
  const [text, setText] = React.useState(draft || '');
  React.useEffect(function () {
    if (draft != null) setText(draft);
  }, [draft]);
  function send(t) {
    const v = String(t != null ? t : text).trim();
    if (!v || loading) return;
    onSend && onSend(v);
    setText('');
  }
  const empty = messages.length === 0 && !loading && !error;
  return /*#__PURE__*/React.createElement("section", {
    className: 'ini-tutor ' + className,
    "aria-label": title
  }, /*#__PURE__*/React.createElement("header", {
    className: "ini-tutor__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ini-tutor__title"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 20
  }), title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: "sm",
    icon: "x",
    label: "Fechar tutor",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "ini-tutor__body",
    "aria-live": "polite"
  }, empty ? /*#__PURE__*/React.createElement("div", {
    className: "ini-tutor__empty"
  }, /*#__PURE__*/React.createElement("p", null, emptyText), suggestions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ini-tutor__chips"
  }, suggestions.map(function (s, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "ini-chip",
      onClick: function () {
        send(s);
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "corner-down-right",
      size: 16
    }), /*#__PURE__*/React.createElement("span", null, s));
  }))) : messages.map(function (m) {
    return /*#__PURE__*/React.createElement(__ds_scope.TutorMessage, {
      key: m.id,
      from: m.from,
      verify: m.verify
    }, m.text);
  }), loading && /*#__PURE__*/React.createElement(__ds_scope.TutorMessage, {
    status: "loading"
  }), error && /*#__PURE__*/React.createElement(__ds_scope.Alert, {
    tone: "error",
    title: "N\xE3o foi poss\xEDvel obter a resposta",
    action: onRetry ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
      size: "sm",
      variant: "secondary",
      icon: "rotate-ccw",
      onClick: onRetry
    }, "Tentar novamente") : null
  }, error)), /*#__PURE__*/React.createElement("form", {
    className: "ini-tutor__foot",
    onSubmit: function (e) {
      e.preventDefault();
      send();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-tutor__composer"
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    "aria-label": "Sua pergunta para o tutor",
    multiline: true,
    rows: 2,
    placeholder: placeholder,
    value: text,
    onChange: function (e) {
      setText(e.target.value);
    },
    disabled: loading
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    icon: "send",
    disabled: !text.trim() || loading
  }, "Enviar")), /*#__PURE__*/React.createElement("p", {
    className: "ini-tutor__note"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "list-checks",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, disclaimer))));
}
Object.assign(__ds_scope, { TutorPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tutor/TutorPanel.jsx", error: String((e && e.message) || e) }); }

// components/tutor/VerifyChecklist.jsx
try { (() => {
/** Lista de conferência: o aluno confere valores e premissas da resposta da IA antes de decidir. */
function VerifyChecklist({
  title = 'Confira antes de decidir',
  description,
  items = [],
  checked,
  defaultChecked = [],
  onChange,
  doneTitle = 'Tudo conferido',
  doneDescription,
  className = ''
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const val = checked || inner;
  function toggle(id) {
    const next = val.indexOf(id) >= 0 ? val.filter(function (x) {
      return x !== id;
    }) : val.concat(id);
    if (!checked) setInner(next);
    onChange && onChange(next);
  }
  const n = items.filter(function (i) {
    return val.indexOf(i.id) >= 0;
  }).length;
  const done = items.length > 0 && n === items.length;
  const sub = done ? doneDescription : description;
  return /*#__PURE__*/React.createElement("section", {
    className: 'ini-verify' + (done ? ' is-complete' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "ini-verify__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ini-verify__icon",
    name: done ? 'circle-check' : 'list-checks',
    size: 24
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "ini-verify__title"
  }, done ? doneTitle : title), sub && /*#__PURE__*/React.createElement("p", {
    className: "ini-verify__sub"
  }, sub))), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    size: "sm",
    value: n,
    max: items.length || 1,
    valueText: n + ' de ' + items.length + ' itens conferidos'
  }), /*#__PURE__*/React.createElement("ul", {
    className: "ini-verify__list"
  }, items.map(function (it) {
    return /*#__PURE__*/React.createElement("li", {
      key: it.id
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      label: it.label,
      detail: it.detail,
      checked: val.indexOf(it.id) >= 0,
      onChange: function () {
        toggle(it.id);
      }
    }));
  })));
}
Object.assign(__ds_scope, { VerifyChecklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tutor/VerifyChecklist.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/App.jsx
try { (() => {
(function () {
  function App() {
    const [tela, setTela] = React.useState(window.INI_TELA || 'curso');
    const go = t => {
      setTela(t);
      window.scrollTo(0, 0);
    };
    if (tela === 'aula') return /*#__PURE__*/React.createElement(window.LessonPage, {
      go: go
    });
    if (tela === 'exercicio') return /*#__PURE__*/React.createElement(window.ExercisePage, {
      go: go
    });
    return /*#__PURE__*/React.createElement(window.CoursePage, {
      go: go
    });
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/CoursePage.jsx
try { (() => {
(function () {
  const {
    TopNav,
    Button,
    CourseSeal,
    LessonCard,
    Icon,
    Logo,
    Badge
  } = window.IniteloDesignSystem_b8cd96;
  const K = window.INI_KIT;
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "k-foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ini-container"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Initelo \xB7 initelo.com"), /*#__PURE__*/React.createElement("span", null, "Conte\xFAdo educacional. N\xE3o \xE9 recomenda\xE7\xE3o financeira individual.")));
  }
  function CoursePage({
    go
  }) {
    const [open, setOpen] = React.useState(1);
    return /*#__PURE__*/React.createElement("div", {
      className: "k-app",
      "data-curso": "financas",
      "data-screen-label": "P\xE1gina do curso"
    }, /*#__PURE__*/React.createElement(TopNav, {
      links: K.links,
      user: K.user
    }), /*#__PURE__*/React.createElement("section", {
      className: "kc-hero ini-padrao"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ini-container kc-hero__in"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "ini-overline kc-kicker"
    }, "Forma\xE7\xE3o 01 \xB7 Curso on-line"), /*#__PURE__*/React.createElement("h1", {
      className: "kc-title"
    }, "Finan\xE7as pessoais com IA"), /*#__PURE__*/React.createElement("p", {
      className: "kc-lead"
    }, "Aprenda a usar a IA para organizar as contas do m\xEAs, comparar cen\xE1rios e revisar suas hip\xF3teses \u2014 conferindo cada resultado antes de decidir."), /*#__PURE__*/React.createElement("ul", {
      className: "kc-meta"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
      name: "layers",
      size: 18
    }), "5 m\xF3dulos"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
      name: "book-open",
      size: 18
    }), "24 aulas e exerc\xEDcios"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 18
    }), "Cerca de 12 horas"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 18
    }), "No seu ritmo")), /*#__PURE__*/React.createElement("div", {
      className: "kc-cta"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => go('aula')
    }, "Come\xE7ar pelo m\xF3dulo 1"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      href: "#modulos"
    }, "Ver os m\xF3dulos")), /*#__PURE__*/React.createElement("p", {
      className: "kc-note"
    }, "A IA ajuda a pensar. Quem decide \xE9 voc\xEA.")), /*#__PURE__*/React.createElement("aside", {
      className: "kc-method",
      "aria-label": "Como funciona cada exerc\xEDcio"
    }, /*#__PURE__*/React.createElement(CourseSeal, {
      number: "01",
      title: "Finan\xE7as pessoais com IA"
    }), /*#__PURE__*/React.createElement("p", {
      className: "kc-method__t"
    }, "Todo exerc\xEDcio segue quatro passos"), /*#__PURE__*/React.createElement("ol", null, K.metodo.map((m, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "kc-method__n"
    }, i + 1), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, m[0]), m[1]))))))), /*#__PURE__*/React.createElement("main", {
      className: "ini-container kc-body"
    }, /*#__PURE__*/React.createElement("section", {
      className: "kc-sec",
      "aria-labelledby": "kc-obj"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "kc-obj"
    }, "Ao final do curso, voc\xEA vai conseguir"), /*#__PURE__*/React.createElement("ul", {
      className: "kc-goals"
    }, K.objetivos.map((o, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20,
      strokeWidth: 2.25
    }), /*#__PURE__*/React.createElement("span", null, o))))), /*#__PURE__*/React.createElement("section", {
      className: "kc-sec",
      id: "modulos",
      "aria-labelledby": "kc-mod"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "kc-mod"
    }, "M\xF3dulos"), /*#__PURE__*/React.createElement("div", {
      className: "kc-mods"
    }, K.modulos.map(m => {
      const on = open === m.n;
      return /*#__PURE__*/React.createElement("div", {
        className: "kc-mod",
        key: m.n
      }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "kc-mod__head",
        "aria-expanded": on,
        onClick: () => setOpen(on ? 0 : m.n)
      }, /*#__PURE__*/React.createElement("span", {
        className: "kc-mod__n",
        "aria-hidden": "true"
      }, m.n), /*#__PURE__*/React.createElement("span", {
        className: "kc-mod__t"
      }, /*#__PURE__*/React.createElement("b", null, m.titulo), /*#__PURE__*/React.createElement("span", null, m.meta)), /*#__PURE__*/React.createElement(Icon, {
        name: on ? 'chevron-up' : 'chevron-down',
        size: 22
      }))), on && /*#__PURE__*/React.createElement("div", {
        className: "kc-mod__body"
      }, m.resumo && /*#__PURE__*/React.createElement("p", null, m.resumo), m.aulas ? m.aulas.map((a, i) => /*#__PURE__*/React.createElement(LessonCard, {
        key: a.id,
        index: a.index,
        kind: a.kind,
        title: a.title,
        meta: i === 0 ? a.meta : a.meta + ' · conclua a anterior para liberar',
        status: i === 0 ? 'available' : 'locked',
        onOpen: () => go('aula')
      })) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
        icon: "lock"
      }, "Liberado ao concluir o m\xF3dulo ", m.n - 1))));
    }))), /*#__PURE__*/React.createElement("section", {
      className: "kc-sec",
      "aria-labelledby": "kc-aut"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "kc-aut"
    }, "Quem ensina"), /*#__PURE__*/React.createElement("div", {
      className: "kc-authors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kc-author"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kc-author__av",
      "aria-hidden": "true"
    }, "C"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Cau\xEA"), /*#__PURE__*/React.createElement("p", null, "Economista formado pela FEA-USP. Autor do conte\xFAdo de finan\xE7as do curso."))), /*#__PURE__*/React.createElement("div", {
      className: "kc-author"
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "simbolo",
      shape: "redondo",
      size: 56,
      label: ""
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Fundador da Initelo"), /*#__PURE__*/React.createElement("p", null, "Respons\xE1vel por IA e tecnologia: o tutor, os exerc\xEDcios de pergunta e confer\xEAncia e a plataforma."))))), /*#__PURE__*/React.createElement("section", {
      className: "kc-final",
      "data-surface": "inverse"
    }, /*#__PURE__*/React.createElement("p", null, "Pronto para organizar o seu m\xEAs?"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: () => go('aula')
    }, "Come\xE7ar pelo m\xF3dulo 1"))), /*#__PURE__*/React.createElement(Footer, null));
  }
  Object.assign(window, {
    CoursePage,
    KitFooter: Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/CoursePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/ExercisePage.jsx
try { (() => {
(function () {
  const {
    TopNav,
    Breadcrumb,
    ProgressBar,
    Stepper,
    BudgetTable,
    PromptSuggestion,
    TutorMessage,
    VerifyChecklist,
    TextField,
    Button,
    Alert,
    EmptyState,
    Icon
  } = window.IniteloDesignSystem_b8cd96;
  const K = window.INI_KIT;
  const STEPS = ['Monte a tabela', 'Pergunte à IA', 'Confira', 'Decida'];
  function ExercisePage({
    go
  }) {
    const narrow = K.useNarrow('(max-width: 767px)');
    const [asked, setAsked] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [checked, setChecked] = React.useState(['valores', 'datas']);
    const [decision, setDecision] = React.useState('');
    const [done, setDone] = React.useState(false);
    const all = checked.length === K.conferencia.length;
    const current = done ? 4 : !asked ? 1 : !all ? 2 : 3;
    function ask() {
      setAsked(true);
      setLoading(true);
      setTimeout(() => setLoading(false), 1400);
    }
    function reset() {
      setAsked(false);
      setLoading(false);
      setChecked([]);
      setDecision('');
      setDone(false);
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "k-app",
      "data-curso": "financas",
      "data-screen-label": "Exerc\xEDcio"
    }, /*#__PURE__*/React.createElement(TopNav, {
      links: K.links,
      user: K.user
    }), /*#__PURE__*/React.createElement("div", {
      className: "kl-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ini-container kl-bar__in"
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: 'Finanças pessoais com IA',
        onClick: e => {
          e.preventDefault();
          go('curso');
        }
      }, {
        label: 'Módulo 1',
        onClick: e => {
          e.preventDefault();
          go('aula');
        }
      }, {
        label: 'Exercício'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "kl-bar__prog"
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      size: "sm",
      tone: "course",
      label: "Seu progresso no curso",
      value: done ? 2 : 1,
      max: 24,
      valueText: (done ? 2 : 1) + ' de 24 aulas'
    })))), /*#__PURE__*/React.createElement("main", {
      className: "ini-container"
    }, /*#__PURE__*/React.createElement("header", {
      className: "ke-head"
    }, /*#__PURE__*/React.createElement("p", {
      className: "ini-overline"
    }, "M\xF3dulo 1 \xB7 Exerc\xEDcio \xB7 cerca de 15 min"), /*#__PURE__*/React.createElement("h1", null, "Sal\xE1rio no dia 5, contas ao longo do m\xEAs"), /*#__PURE__*/React.createElement("p", null, "O sal\xE1rio entra no dia 5 e as contas vencem em datas diferentes. Monte a tabela, pe\xE7a \xE0 IA o saldo depois de cada pagamento e confira a resposta antes de decidir o que fazer com o que sobra.")), /*#__PURE__*/React.createElement("div", {
      className: "ke-steps"
    }, /*#__PURE__*/React.createElement(Stepper, {
      steps: STEPS,
      current: current,
      compact: narrow
    })), /*#__PURE__*/React.createElement("div", {
      className: "ke-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ke-col"
    }, /*#__PURE__*/React.createElement("section", {
      className: "ke-sec ke-s1",
      "aria-labelledby": "ke-h1"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "ke-sec__h",
      id: "ke-h1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ke-sec__n"
    }, "1"), "Monte a tabela"), /*#__PURE__*/React.createElement("p", {
      className: "ke-sec__p"
    }, "Estes s\xE3o valores de exemplo. Quando quiser, troque pelos seus: uma linha para cada entrada ou conta, em ordem de data."), /*#__PURE__*/React.createElement(BudgetTable, {
      caption: "Or\xE7amento do m\xEAs",
      description: "Dezembro de 2026 \xB7 valores de exemplo",
      rows: K.linhas
    })), /*#__PURE__*/React.createElement("section", {
      className: "ke-sec ke-s4",
      "aria-labelledby": "ke-h4"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "ke-sec__h",
      id: "ke-h4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ke-sec__n"
    }, "4"), "Decida"), done ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Exerc\xEDcio conclu\xEDdo",
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary",
        iconRight: "arrow-right",
        onClick: () => go('curso')
      }, "Voltar ao curso")
    }, "Voc\xEA conferiu 5 de 5 itens e registrou a sua decis\xE3o. A pr\xF3xima aula j\xE1 est\xE1 liberada.") : /*#__PURE__*/React.createElement("div", {
      className: "ke-decide"
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "O que voc\xEA decide fazer com o saldo de R$ 1.116,35?",
      multiline: true,
      rows: 3,
      placeholder: "Escreva com suas palavras. Ex.: separar o dinheiro do mercado e guardar o restante.",
      value: decision,
      onChange: e => setDecision(e.target.value),
      disabled: !all,
      hint: all ? 'Não existe resposta certa: a decisão é sua.' : undefined
    }), /*#__PURE__*/React.createElement("div", {
      className: "ke-decide__row"
    }, !all ? /*#__PURE__*/React.createElement("p", {
      className: "ke-decide__lock"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16
    }), "Dispon\xEDvel depois de conferir os 5 itens.") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(Button, {
      disabled: !all || !decision.trim(),
      onClick: () => setDone(true)
    }, "Registrar minha decis\xE3o"))))), /*#__PURE__*/React.createElement("div", {
      className: "ke-col"
    }, /*#__PURE__*/React.createElement("section", {
      className: "ke-sec ke-s2",
      "aria-labelledby": "ke-h2"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "ke-sec__h",
      id: "ke-h2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ke-sec__n"
    }, "2"), "Pergunte \xE0 IA"), /*#__PURE__*/React.createElement(PromptSuggestion, {
      onUse: ask,
      useLabel: asked ? 'Perguntar de novo' : 'Usar esta pergunta'
    }, K.pergunta), asked ? /*#__PURE__*/React.createElement("div", {
      className: "ke-answer",
      "aria-live": "polite"
    }, loading ? /*#__PURE__*/React.createElement(TutorMessage, {
      status: "loading"
    }) : /*#__PURE__*/React.createElement(TutorMessage, null, K.resposta)) : /*#__PURE__*/React.createElement(EmptyState, {
      icon: "message-circle",
      title: "A resposta da IA aparece aqui",
      description: "Envie a pergunta sugerida ou escreva a sua. Depois, confira a resposta antes de usar."
    })), /*#__PURE__*/React.createElement("section", {
      className: "ke-sec ke-s3",
      "aria-labelledby": "ke-h3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "ke-sec__h",
      id: "ke-h3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ke-sec__n"
    }, "3"), "Confira a resposta"), asked && !loading ? /*#__PURE__*/React.createElement(VerifyChecklist, {
      title: "Confira antes de decidir",
      description: "Compare a resposta da IA com a sua tabela, item por item.",
      items: K.conferencia,
      checked: checked,
      onChange: setChecked,
      doneDescription: "Valores, contas e premissas conferidos. Agora a decis\xE3o \xE9 sua."
    }) : /*#__PURE__*/React.createElement(EmptyState, {
      icon: "list-checks",
      title: "Nada para conferir ainda",
      description: "A lista de confer\xEAncia aparece quando a IA responder."
    })), /*#__PURE__*/React.createElement("div", {
      className: "ke-s4",
      style: {
        order: 5
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "rotate-ccw",
      onClick: reset
    }, "Recome\xE7ar o exerc\xEDcio"))))), /*#__PURE__*/React.createElement(window.KitFooter, null));
  }
  Object.assign(window, {
    ExercisePage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/ExercisePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/LessonPage.jsx
try { (() => {
(function () {
  const {
    TopNav,
    Breadcrumb,
    Tabs,
    LessonList,
    ProgressBar,
    Alert,
    Button,
    TutorPanel
  } = window.IniteloDesignSystem_b8cd96;
  const K = window.INI_KIT;
  const PTS = [{
    d: 5,
    l: 'Salário',
    inc: true
  }, {
    d: 10,
    l: 'Aluguel'
  }, {
    d: 15,
    l: 'Energia'
  }, {
    d: 20,
    l: 'Internet'
  }, {
    d: 28,
    l: 'Cartão'
  }];
  function MonthLine() {
    return /*#__PURE__*/React.createElement("div", {
      className: "k-line",
      role: "img",
      "aria-label": "Linha do m\xEAs: o sal\xE1rio entra no dia 5; o aluguel vence no dia 10, a energia no dia 15, a internet no dia 20 e o cart\xE3o no dia 28."
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-line__axis"
    }), PTS.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.d,
      className: 'k-line__pt' + (p.inc ? ' is-inc' : ''),
      style: {
        left: p.d / 31 * 100 + '%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-line__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "k-line__lab"
    }, /*#__PURE__*/React.createElement("b", null, "dia ", p.d), p.l))));
  }
  function LessonPage({
    go
  }) {
    const [tab, setTab] = React.useState('aula');
    const [msgs, setMsgs] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const lessons = K.modulos[0].aulas.map((a, i) => ({
      id: a.id,
      title: a.title,
      kind: a.kind,
      duration: a.meta.replace(' de leitura', ''),
      status: i === 0 ? 'current' : 'locked'
    }));
    function ask(t) {
      setMsgs(m => m.concat({
        id: 's' + m.length,
        from: 'student',
        text: t
      }));
      setLoading(true);
      setTimeout(() => {
        setMsgs(m => m.concat({
          id: 't' + m.length,
          from: 'tutor',
          text: K.respostaTutor
        }));
        setLoading(false);
      }, 1200);
    }
    function openTutor() {
      setTab('tutor');
      window.scrollTo(0, 0);
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "k-app",
      "data-curso": "financas",
      "data-screen-label": "Tela de aula"
    }, /*#__PURE__*/React.createElement(TopNav, {
      links: K.links,
      user: K.user
    }), /*#__PURE__*/React.createElement("div", {
      className: "kl-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ini-container kl-bar__in"
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: 'Finanças pessoais com IA',
        onClick: e => {
          e.preventDefault();
          go('curso');
        }
      }, {
        label: 'Módulo 1'
      }, {
        label: 'Aula 1'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "kl-bar__prog"
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      size: "sm",
      tone: "course",
      label: "Seu progresso no curso",
      value: 0,
      max: 24,
      valueText: "0 de 24 aulas"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "ini-container kl-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kl-tabs"
    }, /*#__PURE__*/React.createElement(Tabs, {
      label: "Se\xE7\xF5es da aula",
      value: tab,
      onChange: setTab,
      items: [{
        id: 'aula',
        label: 'Aula',
        icon: 'book-open'
      }, {
        id: 'modulo',
        label: 'Módulo',
        icon: 'list'
      }, {
        id: 'tutor',
        label: 'Tutor de IA',
        icon: 'message-circle'
      }]
    })), /*#__PURE__*/React.createElement("aside", {
      className: 'kl-pane kl-side' + (tab === 'modulo' ? ' is-on' : '')
    }, /*#__PURE__*/React.createElement(LessonList, {
      title: "M\xF3dulo 1 \xB7 O dinheiro do m\xEAs",
      lessons: lessons
    })), /*#__PURE__*/React.createElement("main", {
      className: 'kl-pane' + (tab === 'aula' ? ' is-on' : '')
    }, /*#__PURE__*/React.createElement("article", {
      className: "kl-article"
    }, /*#__PURE__*/React.createElement("p", {
      className: "ini-overline"
    }, "M\xF3dulo 1 \xB7 Aula 1 \xB7 12 min de leitura"), /*#__PURE__*/React.createElement("h1", null, "Como organizar o dinheiro do m\xEAs"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Antes de pedir ajuda \xE0 IA, voc\xEA precisa enxergar o seu m\xEAs: quando o dinheiro entra, quando cada conta vence e quanto sobra entre uma data e outra."), /*#__PURE__*/React.createElement("h2", null, "Comece pelo calend\xE1rio, n\xE3o pela planilha"), /*#__PURE__*/React.createElement("p", null, "Muitos apertos do m\xEAs n\xE3o v\xEAm de gastar demais, e sim de datas desencontradas: a conta vence antes de o sal\xE1rio entrar. Por isso, o primeiro passo \xE9 colocar as datas em ordem."), /*#__PURE__*/React.createElement("figure", {
      className: "kl-fig"
    }, /*#__PURE__*/React.createElement(MonthLine, null), /*#__PURE__*/React.createElement("figcaption", null, "Linha do m\xEAs de exemplo. C\xEDrculo cheio: entrada. Quadrado vazado: despesa com vencimento.")), /*#__PURE__*/React.createElement("h2", null, "Tr\xEAs perguntas antes de abrir a IA"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Quanto entra, e em que dia?"), /*#__PURE__*/React.createElement("li", null, "Quais contas t\xEAm dia certo para vencer \u2014 e de quanto \xE9 cada uma?"), /*#__PURE__*/React.createElement("li", null, "O que ainda n\xE3o tem valor fechado, como mercado e transporte?")), /*#__PURE__*/React.createElement("p", null, "Com essas respostas anotadas, a sua pergunta para a IA fica ", /*#__PURE__*/React.createElement("span", {
      className: "ini-grifo"
    }, "completa e f\xE1cil de conferir"), "."), /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "A IA n\xE3o conhece as suas contas"
    }, "Ela s\xF3 trabalha com o que voc\xEA escrever. Se um valor ficar de fora, a resposta pode parecer certa e estar incompleta."), /*#__PURE__*/React.createElement("h2", null, "O que a IA pode fazer aqui"), /*#__PURE__*/React.createElement("p", null, "Organizar a lista por data, calcular o saldo depois de cada pagamento e mostrar em que dia o dinheiro fica curto. O que fazer com essa informa\xE7\xE3o continua sendo uma decis\xE3o sua."), /*#__PURE__*/React.createElement("div", {
      className: "kl-nav"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "arrow-left",
      onClick: () => go('curso')
    }, "Voltar ao curso"), /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-right",
      onClick: () => go('exercicio')
    }, "Concluir aula e ir para o exerc\xEDcio")))), /*#__PURE__*/React.createElement("aside", {
      className: 'kl-pane kl-tutor' + (tab === 'tutor' ? ' is-on' : '')
    }, /*#__PURE__*/React.createElement(TutorPanel, {
      messages: msgs,
      loading: loading,
      onSend: ask,
      suggestions: K.sugestoesTutor,
      emptyText: "Ficou com d\xFAvida nesta aula? Pergunte. O tutor explica e mostra as contas; quem decide \xE9 voc\xEA."
    })), tab === 'aula' && /*#__PURE__*/React.createElement("div", {
      className: "kl-dock"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "message-circle",
      onClick: openTutor
    }, "Perguntar ao tutor"), /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-right",
      onClick: () => go('exercicio')
    }, "Concluir aula"))), /*#__PURE__*/React.createElement(window.KitFooter, null));
  }
  Object.assign(window, {
    LessonPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/LessonPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/data.js
try { (() => {
/* Dados fictícios da jornada do primeiro curso */
window.INI_KIT = {
  links: [{
    label: 'Cursos',
    current: true
  }, {
    label: 'Minhas aulas'
  }, {
    label: 'Ajuda'
  }],
  user: {
    name: 'Marina Souza',
    initials: 'MS'
  },
  objetivos: ['Formular perguntas claras para a IA sobre situações financeiras do dia a dia.', 'Montar o orçamento do mês com entradas, despesas e datas de vencimento.', 'Comparar cenários — pagar à vista ou parcelar, antecipar ou esperar — com as contas à mostra.', 'Conferir os valores e as premissas de cada resposta da IA.', 'Revisar suas hipóteses quando a situação mudar.', 'Tomar suas decisões com base no que você mesmo conferiu.'],
  metodo: [['Monte', 'Reúna seus valores e datas em uma tabela.'], ['Pergunte', 'Use ou adapte a pergunta sugerida para a IA.'], ['Confira', 'Compare valores, contas e premissas com a sua tabela.'], ['Decida', 'Escreva, com suas palavras, o que você vai fazer.']],
  modulos: [{
    n: 1,
    titulo: 'O dinheiro do mês',
    meta: '5 aulas · cerca de 1 h 10 min',
    aulas: [{
      id: 'm1a1',
      index: 1,
      title: 'Como organizar o dinheiro do mês',
      meta: '12 min de leitura'
    }, {
      id: 'm1a2',
      index: 2,
      kind: 'exercicio',
      title: 'Salário no dia 5, contas ao longo do mês',
      meta: '15 min'
    }, {
      id: 'm1a3',
      index: 3,
      title: 'Como fazer uma boa pergunta para a IA',
      meta: '10 min de leitura'
    }, {
      id: 'm1a4',
      index: 4,
      title: 'Despesas fixas e variáveis',
      meta: '10 min de leitura'
    }, {
      id: 'm1a5',
      index: 5,
      kind: 'exercicio',
      title: 'O seu mês em uma tabela',
      meta: '20 min'
    }]
  }, {
    n: 2,
    titulo: 'Perguntar bem, conferir sempre',
    meta: '5 aulas · cerca de 2 h',
    resumo: 'Como dar contexto à IA, pedir as contas à mostra e identificar o que ela presumiu.'
  }, {
    n: 3,
    titulo: 'Comparar cenários antes de decidir',
    meta: '5 aulas · cerca de 2 h 30 min',
    resumo: 'À vista ou parcelado, antecipar ou esperar: como montar dois cenários e comparar com os mesmos critérios.'
  }, {
    n: 4,
    titulo: 'Dívidas, juros e parcelas',
    meta: '5 aulas · cerca de 3 h',
    resumo: 'Entender o custo de uma dívida, simular renegociações e conferir os cálculos de juros.'
  }, {
    n: 5,
    titulo: 'Reserva e planos de longo prazo',
    meta: '4 aulas · cerca de 3 h',
    resumo: 'Definir uma reserva para imprevistos e revisar o plano quando a vida muda.'
  }],
  linhas: [{
    id: 's',
    date: '05/12',
    day: 5,
    description: 'Salário',
    kind: 'income',
    value: 4200
  }, {
    id: 'a',
    date: '10/12',
    day: 10,
    description: 'Aluguel',
    kind: 'expense',
    value: 1450
  }, {
    id: 'e',
    date: '15/12',
    day: 15,
    description: 'Energia elétrica',
    kind: 'expense',
    value: 186.4
  }, {
    id: 'i',
    date: '20/12',
    day: 20,
    description: 'Internet',
    kind: 'expense',
    value: 119.9
  }, {
    id: 'c',
    date: '28/12',
    day: 28,
    description: 'Cartão de crédito',
    kind: 'expense',
    value: 1327.35
  }],
  pergunta: 'Meu salário de R$ 4.200,00 entra no dia 5. Tenho estas contas no mês: aluguel de R$ 1.450,00 (vence dia 10), energia de R$ 186,40 (dia 15), internet de R$ 119,90 (dia 20) e cartão de R$ 1.327,35 (dia 28). Monte uma tabela com o saldo depois de cada pagamento, mostre as contas que você fez e diga o que você presumiu.',
  resposta: 'Saldo depois de cada pagamento:\n\n05/12 · Salário  + R$ 4.200,00 → R$ 4.200,00\n10/12 · Aluguel  − R$ 1.450,00 → R$ 2.750,00\n15/12 · Energia  − R$ 186,40 → R$ 2.563,60\n20/12 · Internet  − R$ 119,90 → R$ 2.443,70\n28/12 · Cartão  − R$ 1.327,35 → R$ 1.116,35\n\nTotal de despesas: R$ 3.083,65.\nSaldo no fim do mês: R$ 1.116,35.\n\nO que presumi: que não há outras despesas no mês, como mercado e transporte, e que cada conta é paga no dia do vencimento.',
  conferencia: [{
    id: 'valores',
    label: 'Os valores da resposta são os mesmos da sua tabela?',
    detail: 'Aluguel R$ 1.450,00 · energia R$ 186,40 · internet R$ 119,90 · cartão R$ 1.327,35'
  }, {
    id: 'datas',
    label: 'As datas estão certas?',
    detail: 'Salário no dia 5 · vencimentos nos dias 10, 15, 20 e 28'
  }, {
    id: 'soma',
    label: 'A soma das despesas confere com a sua?',
    detail: 'Refaça na calculadora: deve dar R$ 3.083,65'
  }, {
    id: 'saldo',
    label: 'O saldo final confere?',
    detail: 'R$ 4.200,00 − R$ 3.083,65 = R$ 1.116,35'
  }, {
    id: 'premissas',
    label: 'As premissas da IA valem para o seu mês?',
    detail: 'Ela presumiu que não há outras despesas, como mercado e transporte.'
  }],
  sugestoesTutor: ['Como organizo contas que vencem antes do salário?', 'Qual é a diferença entre despesa fixa e variável?', 'Me ajude a listar as minhas contas do mês.'],
  respostaTutor: 'Posso ajudar. Para não presumir nada, preciso de duas informações: em que dia o seu dinheiro entra e quais contas vencem antes desse dia, com os valores. Com isso, mostro o saldo em cada data — e você confere se bate com as suas contas.',
  useNarrow: function (q) {
    var s = React.useState(function () {
      return window.matchMedia(q).matches;
    });
    React.useEffect(function () {
      var mq = window.matchMedia(q);
      var f = function () {
        s[1](mq.matches);
      };
      mq.addEventListener('change', f);
      return function () {
        mq.removeEventListener('change', f);
      };
    }, [q]);
    return s[0];
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.LessonCard = __ds_scope.LessonCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CourseSeal = __ds_scope.CourseSeal;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.BudgetTable = __ds_scope.BudgetTable;

__ds_ns.DueDate = __ds_scope.DueDate;

__ds_ns.FlowTag = __ds_scope.FlowTag;

__ds_ns.Money = __ds_scope.Money;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.LessonList = __ds_scope.LessonList;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.PromptSuggestion = __ds_scope.PromptSuggestion;

__ds_ns.TutorMessage = __ds_scope.TutorMessage;

__ds_ns.TutorPanel = __ds_scope.TutorPanel;

__ds_ns.VerifyChecklist = __ds_scope.VerifyChecklist;

})();
