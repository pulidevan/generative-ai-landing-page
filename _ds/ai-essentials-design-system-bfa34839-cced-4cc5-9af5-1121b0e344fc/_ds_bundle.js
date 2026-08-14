/* @ds-bundle: {"format":4,"namespace":"AIEssentialsDesignSystem_bfa348","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"DomainCard","sourcePath":"components/content/DomainCard.jsx"},{"name":"ModuleCard","sourcePath":"components/content/ModuleCard.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"f51927f30e96","components/content/DomainCard.jsx":"fb6b54672266","components/content/ModuleCard.jsx":"9e168378cef9","components/content/PriceCard.jsx":"f5dfc75030fb","components/content/StatBlock.jsx":"aebe79dd8a06","components/content/TestimonialCard.jsx":"4b23624173fd","components/core/Badge.jsx":"21c04a897fef","components/core/Button.jsx":"652894aba64c","components/core/SectionLabel.jsx":"592fce389cbf","components/core/Tag.jsx":"4edce00fe3ee","ui_kits/website/AgentLayer.jsx":"853453401efe","ui_kits/website/Curriculum.jsx":"24e378f42f02","ui_kits/website/Domains.jsx":"92e80a7a7f2e","ui_kits/website/Footer.jsx":"588ec26d57e5","ui_kits/website/Hero.jsx":"e69a9c84b14c","ui_kits/website/Nav.jsx":"a6d53ce6da2e","ui_kits/website/Pricing.jsx":"bd378b6ac565","ui_kits/website/Proof.jsx":"15c8fed8d282"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AIEssentialsDesignSystem_bfa348 = window.AIEssentialsDesignSystem_bfa348 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/**
 * AI Essentials logo. The mark is a gradient "A" monogram that lives on an
 * electric-blue tile (it fades into blue at its terminals, so it is never
 * shown knocked-out on other colors — always on its blue tile).
 *
 * variant: "lockup" (mark + wordmark) | "mark" | "wordmark"
 * theme:   "light" (dark wordmark) | "dark" (light wordmark)
 */
function Logo({
  variant = 'lockup',
  theme = 'light',
  size = 40,
  markSrc = 'assets/logo-mark.png',
  className = '',
  style = {}
}) {
  const wordColor = theme === 'dark' ? 'var(--on-dark-100)' : 'var(--ink-900)';
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: Math.round(size * 0.26),
      background: 'var(--blue-electric)',
      overflow: 'hidden',
      flex: '0 0 auto',
      boxShadow: theme === 'light' ? '0 1px 2px rgba(6,8,20,0.10)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "AI Essentials",
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover'
    }
  }));
  const wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.5,
      letterSpacing: '-0.02em',
      color: wordColor,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "AI Essentials");
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.3,
      ...style
    }
  }, variant !== 'wordmark' && mark, variant !== 'mark' && wordmark);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/DomainCard.jsx
try { (() => {
/**
 * A target-audience row — the "D01 / Business Owners & Founders" list item
 * from the brochure. A code, a title, and a one-line who-it's-for, laid out
 * as a horizontal editorial row with a hairline divider on top.
 */
function DomainCard({
  code,
  title,
  description,
  onDark = false,
  className = '',
  style = {}
}) {
  const border = onDark ? 'var(--on-dark-line)' : 'var(--line)';
  const titleColor = onDark ? 'var(--on-dark-100)' : 'var(--ink-900)';
  const descColor = onDark ? 'var(--on-dark-70)' : 'var(--ink-500)';
  const codeColor = 'var(--blue-electric)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start',
      padding: 'var(--space-6) 0',
      borderTop: `1px solid ${border}`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-wide)',
      color: codeColor,
      paddingTop: 4
    }
  }, code), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h4)',
      letterSpacing: 'var(--tracking-tight)',
      color: titleColor,
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      color: descColor,
      maxWidth: '52ch'
    }
  }, description)));
}
Object.assign(__ds_scope, { DomainCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DomainCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/**
 * A large editorial metric — "100+ systems deployed", "5k+ operators
 * trained". Oversized display number with a tracked caption. The number
 * is the visual object; the label is quiet.
 */
function StatBlock({
  value,
  label,
  color = 'default',
  // default | brand | onDark
  align = 'left',
  className = '',
  style = {}
}) {
  const valueColor = color === 'brand' ? 'var(--blue-electric)' : color === 'onDark' ? 'var(--on-dark-100)' : 'var(--ink-900)';
  const labelColor = color === 'onDark' ? 'var(--on-dark-45)' : 'var(--ink-500)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 0.9,
      color: valueColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
/**
 * A graduate testimonial — five stars, the quote as the hero (editorial
 * scale), and an initials avatar + name + role. Supports a "featured"
 * treatment (serif pull-quote, no card border) for the marquee quote.
 */
function TestimonialCard({
  quote,
  name,
  role,
  initials,
  stars = 5,
  featured = false,
  onDark = false,
  className = '',
  style = {}
}) {
  const textColor = onDark ? 'var(--on-dark-100)' : 'var(--ink-900)';
  const roleColor = onDark ? 'var(--on-dark-45)' : 'var(--ink-500)';
  const border = onDark ? 'var(--on-dark-line)' : 'var(--line)';
  return /*#__PURE__*/React.createElement("figure", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      margin: 0,
      padding: featured ? 0 : 'var(--pad-card)',
      borderRadius: 'var(--radius-md)',
      border: featured ? 'none' : `1px solid ${border}`,
      background: featured ? 'transparent' : onDark ? 'var(--on-dark-fill)' : 'var(--surface-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-label": `${stars} out of 5`,
    style: {
      display: 'flex',
      gap: 3,
      color: 'var(--orange-deploy)',
      fontSize: 'var(--fs-sm)'
    }
  }, Array.from({
    length: stars
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, "\u2605"))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      color: textColor,
      fontFamily: featured ? 'var(--font-serif)' : 'var(--font-display)',
      fontWeight: featured ? 400 : 'var(--fw-medium)',
      fontStyle: featured ? 'italic' : 'normal',
      fontSize: featured ? 'clamp(1.75rem, 3.2vw, 2.75rem)' : 'var(--fs-h4)',
      lineHeight: featured ? 1.2 : 1.35,
      letterSpacing: featured ? '-0.01em' : 'var(--tracking-tight)'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: onDark ? 'var(--on-dark-fill)' : 'var(--surface-sunken)',
      border: `1px solid ${border}`,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: '0.04em',
      color: onDark ? 'var(--on-dark-100)' : 'var(--ink-700)',
      flex: '0 0 auto'
    }
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-sm)',
      color: textColor
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: roleColor
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * A status badge for announcements and availability — e.g.
 * "COHORT 06 // ENROLLMENT OPEN", "FLASH OFFER". Tracked caps with a
 * live dot. Reads as a system status line, not decoration.
 */
function Badge({
  children,
  tone = 'live',
  // live | brand | heat | neutral | onDark
  dot = true,
  className = '',
  style = {}
}) {
  const tones = {
    live: {
      fg: 'var(--navy-900)',
      bg: 'var(--lime-signal)',
      dot: 'var(--navy-900)',
      bd: 'transparent'
    },
    brand: {
      fg: 'var(--white)',
      bg: 'var(--blue-electric)',
      dot: 'var(--lime-signal)',
      bd: 'transparent'
    },
    heat: {
      fg: 'var(--white)',
      bg: 'var(--orange-deploy)',
      dot: 'var(--white)',
      bd: 'transparent'
    },
    neutral: {
      fg: 'var(--ink-700)',
      bg: 'var(--surface-sunken)',
      dot: 'var(--blue-electric)',
      bd: 'var(--line)'
    },
    onDark: {
      fg: 'var(--on-dark-100)',
      bg: 'var(--on-dark-fill)',
      dot: 'var(--lime-signal)',
      bd: 'var(--on-dark-line)'
    }
  };
  const t = tones[tone] || tones.live;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '7px 13px',
      borderRadius: 'var(--radius-pill)',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      lineHeight: 1,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary call-to-action. Confident, flat, editorial. Comes in filled
 * electric, dark, outline, and ghost treatments. Arrow "→" is the house
 * affordance for forward motion (enroll, reserve, deploy).
 */
function Button({
  children,
  variant = 'primary',
  // primary | dark | outline | ghost | heat
  size = 'md',
  // sm | md | lg
  arrow = false,
  disabled = false,
  onDark = false,
  as = 'button',
  className = '',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 'var(--fs-sm)',
      padding: '9px 16px',
      gap: 8,
      radius: 'var(--radius-pill)'
    },
    md: {
      fontSize: 'var(--fs-body)',
      padding: '13px 24px',
      gap: 10,
      radius: 'var(--radius-pill)'
    },
    lg: {
      fontSize: 'var(--fs-lg)',
      padding: '18px 34px',
      gap: 12,
      radius: 'var(--radius-pill)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--blue-electric)',
      color: 'var(--white)',
      border: '1.5px solid var(--blue-electric)'
    },
    dark: {
      background: 'var(--navy-900)',
      color: 'var(--white)',
      border: '1.5px solid var(--navy-900)'
    },
    heat: {
      background: 'var(--orange-deploy)',
      color: 'var(--white)',
      border: '1.5px solid var(--orange-deploy)'
    },
    outline: {
      background: 'transparent',
      color: onDark ? 'var(--on-dark-100)' : 'var(--ink-900)',
      border: `1.5px solid ${onDark ? 'var(--on-dark-line)' : 'var(--line-strong)'}`
    },
    ghost: {
      background: 'transparent',
      color: onDark ? 'var(--on-dark-100)' : 'var(--blue-electric)',
      border: '1.5px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    disabled: as === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      letterSpacing: '-0.01em',
      padding: s.padding,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.985)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: '1.05em',
      transform: 'translateY(-0.5px)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
/**
 * An enrollment price tier — the "₹999 Reserve" / "₹19,999 Full Enrollment"
 * cards from the brochure. Optional strikethrough anchor price, savings note,
 * feature list, highlight flag, and a CTA.
 */
function PriceCard({
  eyebrow,
  price,
  anchor,
  // struck-through original
  note,
  features = [],
  cta = 'Enroll now',
  ctaVariant,
  // overrides default
  highlight = false,
  onDark = false,
  className = '',
  style = {}
}) {
  const bg = highlight ? 'var(--navy-900)' : onDark ? 'var(--on-dark-fill)' : 'var(--surface-card)';
  const isDark = highlight || onDark;
  const textColor = isDark ? 'var(--on-dark-100)' : 'var(--ink-900)';
  const mutedColor = isDark ? 'var(--on-dark-70)' : 'var(--ink-500)';
  const border = highlight ? 'transparent' : onDark ? 'var(--on-dark-line)' : 'var(--line)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      padding: 'var(--pad-card-lg)',
      borderRadius: 'var(--radius-lg)',
      background: bg,
      border: `1px solid ${border}`,
      boxShadow: highlight ? 'var(--shadow-lg)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: highlight ? 'var(--lime-signal)' : onDark ? 'var(--on-dark-45)' : 'var(--ink-500)'
    }
  }, eyebrow), highlight && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "live",
    dot: false
  }, "Best Value")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 0.95,
      color: textColor
    }
  }, price), anchor && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      color: mutedColor,
      textDecoration: 'line-through',
      textDecorationColor: 'var(--red-editorial)'
    }
  }, anchor)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: mutedColor,
      lineHeight: 'var(--lh-normal)'
    }
  }, note), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: isDark ? 'var(--on-dark-70)' : 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: highlight ? 'var(--lime-signal)' : 'var(--blue-electric)',
      flex: '0 0 auto',
      transform: 'translateY(-1px)'
    }
  }, "\u2192"), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant || (highlight ? 'primary' : onDark ? 'outline' : 'dark'),
    onDark: isDark,
    arrow: true,
    style: {
      marginTop: 'auto',
      width: '100%'
    }
  }, cta));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/**
 * The brand's signature tracked-out uppercase micro-label
 * (e.g. "T H E   O U T C O M E", "C O H O R T   0 6"). Used as an
 * eyebrow above headlines and as a section marker. Optionally carries
 * an index code ("W01", "D03") or a leading tick.
 */
function SectionLabel({
  children,
  code,
  color = 'default',
  // default | brand | heat | live | onDark
  tick = false,
  className = '',
  style = {}
}) {
  const colorMap = {
    default: 'var(--ink-500)',
    brand: 'var(--blue-electric)',
    heat: 'var(--orange-deploy)',
    live: 'var(--lime-signal)',
    onDark: 'var(--on-dark-70)'
  };
  const c = colorMap[color] || colorMap.default;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: c,
      lineHeight: 1,
      ...style
    }
  }, tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color === 'live' ? 'var(--lime-signal)' : 'currentColor',
      flex: '0 0 auto'
    }
  }), code && /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      opacity: 0.9
    }
  }, code), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * A tool / capability chip — used for stack tags like "ChatGPT Plus",
 * "Claude Code", "Stripe AI". Quiet, hairline-bordered pills that cluster.
 */
function Tag({
  children,
  variant = 'default',
  // default | solid | brand | onDark
  className = '',
  style = {}
}) {
  const variants = {
    default: {
      background: 'var(--surface-sunken)',
      color: 'var(--ink-700)',
      border: '1px solid var(--line)'
    },
    brand: {
      background: 'var(--blue-tint-06)',
      color: 'var(--blue-electric)',
      border: '1px solid var(--blue-tint-12)'
    },
    solid: {
      background: 'var(--navy-900)',
      color: 'var(--on-dark-100)',
      border: '1px solid var(--navy-900)'
    },
    onDark: {
      background: 'var(--on-dark-fill)',
      color: 'var(--on-dark-100)',
      border: '1px solid var(--on-dark-line)'
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      padding: '6px 13px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ModuleCard.jsx
try { (() => {
/**
 * A curriculum module card — the "W01 / Cognitive Awakening" unit from the
 * brochure. Big index code, title, description, and a row of tool tags.
 * Designed to tile in a grid of 8. Works on light or dark grounds.
 */
function ModuleCard({
  code,
  title,
  description,
  tools = [],
  onDark = false,
  className = '',
  style = {}
}) {
  const border = onDark ? 'var(--on-dark-line)' : 'var(--line)';
  const titleColor = onDark ? 'var(--on-dark-100)' : 'var(--ink-900)';
  const descColor = onDark ? 'var(--on-dark-70)' : 'var(--ink-500)';
  const codeColor = onDark ? 'var(--on-dark-45)' : 'var(--line-strong)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--pad-card)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${border}`,
      background: onDark ? 'var(--on-dark-fill)' : 'var(--surface-card)',
      minHeight: 220,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h3)',
      letterSpacing: 'var(--tracking-tight)',
      color: codeColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, code), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h4)',
      letterSpacing: 'var(--tracking-tight)',
      color: titleColor,
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      color: descColor
    }
  }, description)), tools.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, tools.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    variant: onDark ? 'onDark' : 'default'
  }, t))));
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AgentLayer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AI Essentials — the Agent Layer (dark editorial section)
const {
  SectionLabel,
  Tag
} = window.AIEssentialsDesignSystem_bfa348;
const AGENTS = [{
  group: '01 · Autonomous Agents',
  items: [{
    vendor: 'Anthropic',
    name: 'Claude Agent',
    desc: 'Plans, executes, and self-corrects multi-step tasks end-to-end — no babysitting.'
  }, {
    vendor: 'Anthropic',
    name: 'Computer Use',
    desc: 'Hand it your screen — it clicks, types, and operates software exactly like a human.'
  }, {
    vendor: 'Google',
    name: 'Google Agent',
    desc: "Gemini's native browsing & action agent for hands-free web workflows."
  }]
}, {
  group: '02 · Generative Media',
  items: [{
    vendor: 'Image',
    name: 'Nano Banana',
    desc: "Google's lightning image model for on-brand visuals and surgical edits."
  }, {
    vendor: 'Video',
    name: 'Kling',
    desc: 'Cinematic image-to-video and motion generation with controllable camera work.'
  }, {
    vendor: 'Motion',
    name: 'Refract',
    desc: 'Studio-grade motion graphics and animated brand assets, on demand.'
  }]
}];
function AgentCard({
  vendor,
  name,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--pad-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--on-dark-line)',
      background: 'var(--on-dark-fill)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--lime-signal)'
    }
  }, vendor), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h4)',
      color: 'var(--on-dark-100)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--on-dark-70)'
    }
  }, desc));
}
function AgentLayer() {
  return /*#__PURE__*/React.createElement("section", {
    id: "agent-layer",
    className: "section",
    style: {
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 760,
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "live"
  }, "Agent Layer / 2026"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-2)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 0.98,
      color: 'var(--on-dark-100)'
    }
  }, "Beyond prompting."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--on-dark-70)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: '52ch'
    }
  }, "Deploy autonomous systems that operate software, generate media, and ship products \u2014 while you sleep.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, AGENTS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "onDark"
  }, g.group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement(AgentCard, _extends({
    key: it.name
  }, it)))))))));
}
window.AgentLayer = AgentLayer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AgentLayer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Curriculum.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AI Essentials — the 2026 stack, curriculum grid (8 modules)
const {
  SectionLabel,
  ModuleCard
} = window.AIEssentialsDesignSystem_bfa348;
const MODULES = [{
  code: 'W01',
  title: 'Cognitive Awakening',
  description: 'Rewire your executive mindset. Master reasoning engines, prompt engineering, and deep-search tools.',
  tools: ['ChatGPT Plus', 'Perplexity']
}, {
  code: 'W02',
  title: 'Synthetic Knowledge',
  description: 'Build your corporate brain. Connect files and docs into custom RAG pipelines you can chat with.',
  tools: ['NotebookLM', 'Claude']
}, {
  code: 'W03',
  title: 'Autonomous Fleet',
  description: 'Design agents that think, act, and self-heal. Automate backend tasks and run operations 24/7.',
  tools: ['Make.com', 'Zapier Central']
}, {
  code: 'W04',
  title: 'Voice & Audio Scale',
  description: 'Scale outbound sales and support with hyper-realistic voice agents, avatars, and phone agents.',
  tools: ['ElevenLabs', 'HeyGen']
}, {
  code: 'W05',
  title: 'The Content Factory',
  description: 'Generate stunning images and high-fidelity video in an autonomous, always-on publishing loop.',
  tools: ['Midjourney', 'Higgsfield']
}, {
  code: 'W06',
  title: 'Visual & Design Moat',
  description: 'Generate responsive web frontends instantly and export clean, production-ready React in seconds.',
  tools: ['V0 by Vercel', 'Claude Design']
}, {
  code: 'W07',
  title: 'Vibe Coding',
  description: 'Architect complete React/TypeScript codebases. Direct Claude Code inside Google Antigravity.',
  tools: ['Claude Code', 'Antigravity']
}, {
  code: 'W08',
  title: 'Digital Real Estate',
  description: 'Launch micro-SaaS products and monetize them. Integrate Stripe and databases autonomously.',
  tools: ['Replit Agent', 'Stripe AI']
}];
function Curriculum() {
  return /*#__PURE__*/React.createElement("section", {
    id: "curriculum",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    code: "Curriculum // 8 Modules",
    color: "brand"
  }, "The 2026 Stack"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-2)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 0.98,
      color: 'var(--ink-900)'
    }
  }, "The exact tools", /*#__PURE__*/React.createElement("br", null), "dominating the market.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: '38ch'
    }
  }, "Pure, production-ready agentic workflows. No theory \u2014 the state-of-the-art stack, deployed live across 20 classes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-4)'
    }
  }, MODULES.map(m => /*#__PURE__*/React.createElement(ModuleCard, _extends({
    key: m.code
  }, m))))));
}
window.Curriculum = Curriculum;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Curriculum.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Domains.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AI Essentials — target domains (who this is built for)
const {
  SectionLabel,
  DomainCard
} = window.AIEssentialsDesignSystem_bfa348;
const DOMAINS = [{
  code: 'D01',
  title: 'Business Owners & Founders',
  description: 'Automate operations, scale outbound sales, and cut overhead using autonomous agents.'
}, {
  code: 'D02',
  title: 'Data Analysts & Pros',
  description: 'Automate reporting and build local RAG pipelines for company data.'
}, {
  code: 'D03',
  title: 'Designers & UX',
  description: 'Generate studio-grade motion assets and UX/UI components at 100x speed.'
}, {
  code: 'D04',
  title: 'Content Creators',
  description: 'Run a one-person media empire. Automate viral content workflows.'
}, {
  code: 'D05',
  title: 'Software Developers',
  description: 'Master Vibe Coding. Orchestrate complete codebases using Antigravity.'
}];
function Domains() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "brand"
  }, "Target Domains"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-display-3)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.05,
      color: 'var(--ink-900)'
    }
  }, "Who this sprint is built for."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: '34ch'
    }
  }, "Five operator archetypes. One stack. We position you for the market.")), /*#__PURE__*/React.createElement("div", null, DOMAINS.map(d => /*#__PURE__*/React.createElement(DomainCard, _extends({
    key: d.code
  }, d)))))));
}
window.Domains = Domains;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Domains.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// AI Essentials — footer
const {
  Logo,
  SectionLabel
} = window.AIEssentialsDesignSystem_bfa348;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--white)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingBlock: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    size: 36,
    markSrc: window.__resources && window.__resources.logoMark || "../../assets/logo-mark.png"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-h4)',
      lineHeight: 1.25,
      color: 'var(--ink-700)'
    }
  }, "Learn less. Deploy more. Small team, massive output.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Program"), ['Curriculum', 'Agent Layer', 'Placement', 'Pricing'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--ink-500)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--ink-500)',
      textDecoration: 'none'
    }
  }, "aiessentials.in"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--ink-500)',
      textDecoration: 'none'
    }
  }, "hello@aiessentials.in"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-16)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, "AI Essentials // CAIO Sprint"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--ink-300)'
    }
  }, "\xA9 2026 AI Essentials. All rights reserved."))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// AI Essentials — hero. Headline is the hero; one idea; deep negative space.
const {
  Badge,
  Button,
  SectionLabel,
  StatBlock
} = window.AIEssentialsDesignSystem_bfa348;
function Hero() {
  const jump = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 72,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'clamp(40px, 7vw, 96px)',
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "live"
  }, "Cohort 06 // Enrollment Open"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: false
  }, "8 Weeks \xB7 20 Live Classes")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-1)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 0.95,
      color: 'var(--ink-900)',
      textWrap: 'balance'
    }
  }, "Become a", /*#__PURE__*/React.createElement("br", null), "Chief AI Officer."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--ink-500)',
      maxWidth: '54ch'
    }
  }, "Build functional apps, automate marketing, and scale operations without headcount \u2014 on the 2026 bleeding-edge stack. Stop studying AI. Start deploying it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: () => jump('pricing')
  }, "Reserve your seat"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => jump('curriculum')
  }, "View curriculum")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: 'var(--space-16)',
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "100+",
    label: "Systems Deployed",
    color: "brand"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "5k+",
    label: "Operators Trained"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "Placement Guidance"
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// AI Essentials — sticky top navigation
const {
  Logo,
  Button
} = window.AIEssentialsDesignSystem_bfa348;
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Curriculum', 'Agent Layer', 'Proof', 'Pricing'];
  const jump = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 72,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      background: scrolled ? 'rgba(249,250,252,0.86)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      transition: 'background var(--dur), border-color var(--dur)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    size: 34,
    markSrc: window.__resources && window.__resources.logoMark || "../../assets/logo-mark.png"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => jump(l.toLowerCase().replace(' ', '-')),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 500,
      color: 'var(--ink-700)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: () => jump('pricing')
  }, "Reserve seat")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
// AI Essentials — enrollment pricing (dark section, closing CTA)
const {
  SectionLabel,
  Badge,
  PriceCard,
  Logo
} = window.AIEssentialsDesignSystem_bfa348;
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    className: "section",
    style: {
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "heat"
  }, "Flash Offer \xB7 Valid Until June 15"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-2)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 0.98,
      color: 'var(--on-dark-100)',
      textWrap: 'balance'
    }
  }, "Stop studying AI.", /*#__PURE__*/React.createElement("br", null), "Start deploying it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--on-dark-70)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: '46ch'
    }
  }, "8 weeks. 20 live classes. One operator-grade certification. Your seat in Cohort 06 is open now.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 'var(--space-6)',
      maxWidth: 880,
      margin: '0 auto',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    eyebrow: "Reserve Seat",
    price: "\u20B9999",
    note: "Applies to full enrollment \u2014 secure your Cohort 06 seat.",
    features: ['Locks your Cohort 06 place', 'Fully credited to enrollment', 'Fully refundable'],
    cta: "Reserve seat",
    onDark: true
  }), /*#__PURE__*/React.createElement(PriceCard, {
    eyebrow: "Full Enrollment",
    price: "\u20B919,999",
    anchor: "\u20B925,999",
    note: "Full value \u2014 save \u20B96,000. Enrollment closes the moment Cohort 06 begins.",
    features: ['8 weeks · 20 live classes', '100% placement guidance', 'Premium tool discounts + credits', 'Operator-grade certification'],
    cta: "Enroll now",
    highlight: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-8)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--on-dark-45)',
      letterSpacing: '0.02em'
    }
  }, "No guarantees. Success relies entirely on your execution.")));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AI Essentials — proof / graduate outcomes (testimonials)
const {
  SectionLabel,
  TestimonialCard
} = window.AIEssentialsDesignSystem_bfa348;
const QUOTES = [{
  quote: 'The CAIO Sprint is the single highest-ROI investment I\u2019ve made in my 15-year career. I automated 3 departments in 90 days.',
  name: 'Priya K.',
  role: 'Founder, Series A Startup',
  initials: 'PK'
}, {
  quote: 'They invented a new title for me — Chief AI Officer — after I shipped our internal GPT.',
  name: 'Rahul M.',
  role: 'Marketing Director, MNC',
  initials: 'RM'
}, {
  quote: 'The vibe coding module alone saved us \u20B94 lakhs in developer costs — and I deployed it on a Sunday afternoon.',
  name: 'Deepa S.',
  role: 'Agency Owner',
  initials: 'DS'
}, {
  quote: 'I built and deployed a client portal without knowing React. Worth 10x the entry price.',
  name: 'Tech Agency Owner',
  role: 'Verified Graduate',
  initials: 'T'
}];
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    id: "proof",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    code: "Proof // Graduate Outcomes",
    color: "heat"
  }, "Results, not theory"), /*#__PURE__*/React.createElement(TestimonialCard, {
    featured: true,
    stars: 0,
    quote: '\u201CI used to pay an agency \u20B950,000 a month for what I now automate in 2 hours on a Sunday. This isn\u2019t a course — it\u2019s a corporate cheat code.\u201D',
    name: "Scale-Up Founder",
    role: "Verified Graduate",
    initials: "S"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'var(--space-4)'
    }
  }, QUOTES.slice(0, 2).map(q => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: q.initials
  }, q))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-4)'
    }
  }, QUOTES.slice(2).map(q => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: q.initials
  }, q))))));
}
window.Proof = Proof;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.DomainCard = __ds_scope.DomainCard;

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

})();
