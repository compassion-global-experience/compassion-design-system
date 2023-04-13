'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$8 = ".gds__button-main___CW7if{align-items:center;appearance:none;background:var(--button-secondary-default-background-color);border-color:var(--button-secondary-default-border-color);border-radius:var(--button-secondary-border-radius);border-style:solid;border-width:var(--button-secondary-border-width);color:var(--button-secondary-default-text-color);cursor:pointer;display:inline-flex;font:var(--button-small-font);gap:var(--margin-2);line-height:1;padding:var(--button-secondary-small-padding-y) var(--button-secondary-small-padding-x)}.gds__button-main___CW7if:focus{outline:none}.gds__button-main___CW7if:not([disabled]):active{box-shadow:var(--button-shadow-active)}.gds__button-main___CW7if .gds__icon___BJbP-{color:var(--button-secondary-default-icon-color)}.gds__button-main___CW7if.gds__medium___xyYvc{font:var(--button-medium-font);padding:var(--button-secondary-medium-padding-y) var(--button-secondary-medium-padding-x)}.gds__button-main___CW7if.gds__large___WvPwP{font:var(--button-large-font);padding:var(--button-secondary-large-padding-y) var(--button-secondary-large-padding-x)}.gds__button-main___CW7if:hover{background:var(--button-secondary-hover-background-color);border-color:var(--button-secondary-hover-border-color);color:var(--button-secondary-hover-text-color)}.gds__button-main___CW7if:hover .gds__icon___BJbP-{color:var(--button-secondary-hover-icon-color)}.gds__button-main___CW7if[disabled]{background:var(--button-secondary-disabled-background-color);border-color:var(--button-secondary-disabled-border-color);color:var(--button-secondary-disabled-text-color);cursor:not-allowed}.gds__button-main___CW7if[disabled] .gds__icon___BJbP-{color:var(--button-secondary-disabled-icon-color)}.gds__button-main___CW7if.gds__primary___L-DlQ{background:var(--button-primary-default-background-color);border-color:var(--button-primary-default-border-color);border-radius:var(--button-primary-border-radius);border-width:var(--button-primary-border-width);color:var(--button-primary-default-text-color);padding:var(--button-primary-small-padding-y) var(--button-primary-small-padding-x)}.gds__button-main___CW7if.gds__primary___L-DlQ .gds__icon___BJbP-{color:var(--button-primary-default-icon-color)}.gds__button-main___CW7if.gds__primary___L-DlQ.gds__medium___xyYvc{padding:var(--button-primary-medium-padding-y) var(--button-primary-medium-padding-x)}.gds__button-main___CW7if.gds__primary___L-DlQ.gds__large___WvPwP{padding:var(--button-primary-large-padding-y) var(--button-primary-large-padding-x)}.gds__button-main___CW7if.gds__primary___L-DlQ:hover{background:var(--button-primary-hover-background-color);border-color:var(--button-primary-hover-border-color);color:var(--button-primary-hover-text-color)}.gds__button-main___CW7if.gds__primary___L-DlQ:hover .gds__icon___BJbP-{color:var(--button-primary-hover-icon-color)}.gds__button-main___CW7if.gds__primary___L-DlQ[disabled]{background:var(--button-primary-disabled-background-color);border-color:var(--button-primary-disabled-border-color);color:var(--button-primary-disabled-text-color)}.gds__button-main___CW7if.gds__primary___L-DlQ[disabled] .gds__icon___BJbP-{color:var(--button-primary-disabled-icon-color)}.gds__button-main___CW7if.gds__tertiary___imHDy{background:var(--button-tertiary-default-background-color);border-bottom-width:1px;border-color:var(--button-tertiary-default-border-color);border-radius:var(--button-tertiary-border-radius);border-width:var(--button-tertiary-border-width);color:var(--button-tertiary-default-text-color);padding:var(--button-tertiary-small-padding-y) var(--button-tertiary-small-padding-x)}.gds__button-main___CW7if.gds__tertiary___imHDy:active{box-shadow:none}.gds__button-main___CW7if.gds__tertiary___imHDy .gds__icon___BJbP-{color:var(--button-tertiary-default-icon-color)}.gds__button-main___CW7if.gds__tertiary___imHDy.gds__medium___xyYvc{padding:var(--button-tertiary-medium-padding-y) var(--button-tertiary-medium-padding-x)}.gds__button-main___CW7if.gds__tertiary___imHDy.gds__large___WvPwP{padding:var(--button-tertiary-large-padding-y) var(--button-tertiary-large-padding-x)}.gds__button-main___CW7if.gds__tertiary___imHDy:hover{background:var(--button-tertiary-hover-background-color);border-color:var(--button-tertiary-hover-border-color);color:var(--button-tertiary-hover-text-color)}.gds__button-main___CW7if.gds__tertiary___imHDy:hover .gds__icon___BJbP-{color:var(--button-tertiary-hover-icon-color)}.gds__button-main___CW7if.gds__tertiary___imHDy[disabled]{background:var(--button-tertiary-disabled-background-color);border-color:var(--button-tertiary-disabled-border-color);color:var(--button-tertiary-disabled-text-color)}.gds__button-main___CW7if.gds__tertiary___imHDy[disabled] .gds__icon___BJbP-{color:var(--button-tertiary-disabled-icon-color)}";
var buttonStyles = {"button-main":"gds__button-main___CW7if","buttonMain":"gds__button-main___CW7if","icon":"gds__icon___BJbP-","medium":"gds__medium___xyYvc","large":"gds__large___WvPwP","primary":"gds__primary___L-DlQ","tertiary":"gds__tertiary___imHDy"};
styleInject(css_248z$8);

/**
 * Get classes from a map of classes and a list of mappings
 * @param map - typically a styles import object from a css module
 * @param input - a key or a list of keys from the map to include in the returned string
 * @param className - a class name to append to the returned string
 */
const getClasses = (map, input, className) => {
    const mappings = [];
    if (Array.isArray(input)) {
        input.forEach((it) => {
            if (typeof it === 'string') {
                mappings.push(it);
            }
        });
    }
    else if (input) {
        mappings.push(input);
    }
    const mapped = mappings.map((key) => map[key]).filter(Boolean);
    if (className) {
        mapped.push(className);
    }
    return mapped.join(' ');
};

const Button = React.forwardRef((props, ref) => {
    const { label, mode = 'primary', size = 'medium', disabled = false, className, style, onClick, children } = props, rest = __rest(props, ["label", "mode", "size", "disabled", "className", "style", "onClick", "children"]);
    const classNames = getClasses(buttonStyles, ['button-main', mode, size], className);
    return (jsxRuntime.jsx("button", Object.assign({ onClick: onClick, className: classNames, disabled: disabled, style: style, ref: ref }, rest, { children: children || label })));
});
Button.displayName = 'Button';

var css_248z$7 = ".gds__modal___354qp{background:var(--modal-background-color);border-radius:var(--modal-border-radius);box-shadow:var(--modal-shadow);left:50%;max-width:var(--modal-default-max-width);position:absolute;top:50%;transform:translate(-50%,-50%);width:100%;z-index:99}.gds__modal-header___MDURr{border-bottom:1px solid var(--modal-border-color);color:var(--modal-header-color);font:var(--modal-header-font);padding:var(--padding-3) var(--padding-5)}.gds__modal-body___Cs9P2{color:var(--modal-body-color);font:var(--modal-body-font)}.gds__modal-footer___V5cNS{align-items:center;border-top:1px solid var(--modal-border-color);display:flex;flex-direction:row;gap:var(--margin-3);justify-content:flex-end;padding:var(--padding-3) var(--padding-5)}.gds__modal-button-close___bWpUw{align-items:center;appearance:none;background:none;border:none;cursor:pointer;display:flex;justify-content:center;margin:0;padding:0;position:absolute;right:var(--padding-5);top:calc(var(--padding-3) + 4px)}.gds__modal___354qp.gds__small___cx4fI{max-width:var(--modal-small-max-width)}.gds__modal___354qp.gds__wide___dkOIM{max-width:var(--modal-wide-max-width)}";
var styles$6 = {"modal":"gds__modal___354qp","modal-header":"gds__modal-header___MDURr","modalHeader":"gds__modal-header___MDURr","modal-body":"gds__modal-body___Cs9P2","modalBody":"gds__modal-body___Cs9P2","modal-footer":"gds__modal-footer___V5cNS","modalFooter":"gds__modal-footer___V5cNS","modal-button-close":"gds__modal-button-close___bWpUw","modalButtonClose":"gds__modal-button-close___bWpUw","small":"gds__small___cx4fI","wide":"gds__wide___dkOIM"};
styleInject(css_248z$7);

var css_248z$6 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}";
var common = {"form-field-row":"gds__form-field-row___NxqOE","formFieldRow":"gds__form-field-row___NxqOE","form-label":"gds__form-label___Q5gAp","formLabel":"gds__form-label___Q5gAp","disabled":"gds__disabled___ETKma","form-input":"gds__form-input___8xTbi","formInput":"gds__form-input___8xTbi","form-field":"gds__form-field___8CpBM","formField":"gds__form-field___8CpBM","small":"gds__small___FDi8W","large":"gds__large___Xq6GZ","form-icon":"gds__form-icon___sBJD6","formIcon":"gds__form-icon___sBJD6","error":"gds__error___kzIwN","select-icon":"gds__select-icon___cG8xd","selectIcon":"gds__select-icon___cG8xd","success":"gds__success___uKsIL","form-hint":"gds__form-hint___fX4e9","formHint":"gds__form-hint___fX4e9","form-label-wrap":"gds__form-label-wrap___zU6W3","formLabelWrap":"gds__form-label-wrap___zU6W3"};
styleInject(css_248z$6);

var css_248z$5 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__form-control___YNS73{align-items:center;display:flex;gap:var(--form-check-radio-gap)}.gds__form-control___YNS73 .gds__form-label___EvKUE{font:var(--form-check-radio-label);margin:0}.gds__form-control___YNS73 input[type=checkbox],.gds__form-control___YNS73 input[type=radio]{appearance:none;background:var(--form-background-color);border:1px solid var(--form-border-color);font:inherit;height:var(--form-check-radio-size-default);margin:0;outline:none;width:var(--form-check-radio-size-default)}.gds__form-control___YNS73 input[type=radio]{border-radius:50%;transition:border .12s ease-in-out}.gds__form-control___YNS73 input[type=radio]:checked{border-color:var(--form-check-radio-default);border-width:var(--form-check-radio-size-inside)}.gds__form-control___YNS73 input[type=radio]:checked:hover{border-color:var(--form-check-radio-hover)}.gds__form-control___YNS73 input[type=radio]:checked:disabled{background:var(--form-disabled-input-color);border-color:var(--form-disabled-border-color)}.gds__form-control___YNS73 input[type=checkbox]:not(:checked).gds__error___Anjwi,.gds__form-control___YNS73 input[type=radio]:not(:checked).gds__error___Anjwi{background:var(--form-background-color);border-color:var(--form-error-border-color)}.gds__form-control___YNS73 input[type=checkbox]{border-radius:var(--form-input-border-radius);transition:background-color .12s ease-in-out}.gds__form-control___YNS73 input[type=checkbox]:checked{background:var(--form-check-radio-default);border-color:var(--form-check-radio-default);font-size:var(--form-check-radio-size-default)}.gds__form-control___YNS73 .gds__form-control-inner___w4CM4{display:inline-flex;position:relative}.gds__form-control___YNS73 .gds__form-control-icon___6-smA{align-items:center;color:var(--form-background-color);display:none;inset:0;justify-content:center;position:absolute}.gds__form-control___YNS73 input[type=checkbox]:checked+.gds__form-control-icon___6-smA{display:flex}.gds__form-control___YNS73 input[type=checkbox]:checked:hover{background:var(--form-check-radio-hover);border-color:var(--form-check-radio-hover)}.gds__form-control___YNS73 input[type=checkbox]:checked:disabled{background:var(--form-disabled-border-color);border-color:var(--form-disabled-border-color)}.gds__form-control___YNS73 input[type=checkbox]:disabled:before{color:var(--form-disabled-input-color)}.gds__form-control___YNS73 input:active,.gds__form-control___YNS73 input:focus,.gds__form-control___YNS73 input:focus-visible,.gds__form-control___YNS73 input:focus-within{border-color:var(--form-focus-border-color)}";
var styles$5 = {"form-control":"gds__form-control___YNS73","formControl":"gds__form-control___YNS73","form-label":"gds__form-label___EvKUE gds__form-label___Q5gAp","formLabel":"gds__form-label___EvKUE gds__form-label___Q5gAp","error":"gds__error___Anjwi","form-control-inner":"gds__form-control-inner___w4CM4","formControlInner":"gds__form-control-inner___w4CM4","form-control-icon":"gds__form-control-icon___6-smA","formControlIcon":"gds__form-control-icon___6-smA"};
styleInject(css_248z$5);

var css_248z$4 = ".gds__icon___-L8ZG{align-items:center;color:var(--icon-color-default);display:inline-flex;font-size:2em;justify-content:center}.gds__icon___-L8ZG.gds__primary___Rjl17{color:var(--icon-color-primary)}.gds__icon___-L8ZG.gds__muted___ZlIvj{color:var(--icon-color-muted)}";
var styles$4 = {"icon":"gds__icon___-L8ZG","primary":"gds__primary___Rjl17","muted":"gds__muted___ZlIvj"};
styleInject(css_248z$4);

const Icon = React.memo(({ icon: IconComponent, size, color, className, mode, style }) => {
    const flavorClass = getClasses(styles$4, mode, className);
    console.log('flavorClass: ', flavorClass);
    return (jsxRuntime.jsx("span", Object.assign({ className: `${styles$4.icon} ${buttonStyles.icon} ${common.formIcon} ${styles$5.formControlIcon} ${flavorClass}`, style: Object.assign(Object.assign({}, style), { fontSize: size, color }) }, { children: jsxRuntime.jsx(IconComponent, {}) })));
});
Icon.displayName = 'Icon';

var IconContext = /*#__PURE__*/React.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight(weight, color, pathsByWeight) {
  var path = pathsByWeight.get(weight);
  if (!!path) return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var IconBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var alt = props.alt,
      color = props.color,
      size = props.size,
      weight = props.weight,
      mirrored = props.mirrored,
      children = props.children,
      renderPath = props.renderPath,
      restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);

  var _useContext = React.useContext(IconContext),
      _useContext$color = _useContext.color,
      contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color,
      contextSize = _useContext.size,
      _useContext$weight = _useContext.weight,
      contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight,
      _useContext$mirrored = _useContext.mirrored,
      contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored,
      restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);

  return React.createElement("svg", Object.assign({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : undefined
  }, restContext, restProps), !!alt && React.createElement("title", null, alt), children, React.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";

var IconBase$1 = IconBase;

/* GENERATED FILE */
var pathsByWeight$3 = /*#__PURE__*/new Map();
pathsByWeight$3.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight$3.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "208 96 128 176 48 96 208 96",
    opacity: "0.2"
  }), React.createElement("polygon", {
    points: "208 96 128 176 48 96 208 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight$3.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"
  }));
});
pathsByWeight$3.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight$3.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight$3.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath$3 = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight$3);
};

var CaretDown = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return React.createElement(IconBase$1, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath$3
  }));
});
CaretDown.displayName = "CaretDown";

var CaretDown$1 = CaretDown;

/* GENERATED FILE */
var pathsByWeight$2 = /*#__PURE__*/new Map();
pathsByWeight$2.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight$2.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight$2.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"
  }));
});
pathsByWeight$2.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight$2.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight$2.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath$2 = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight$2);
};

var Check = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return React.createElement(IconBase$1, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath$2
  }));
});
Check.displayName = "Check";

var Check$1 = Check;

/* GENERATED FILE */
var pathsByWeight$1 = /*#__PURE__*/new Map();
pathsByWeight$1.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "120 124 128 124 128 176 136 176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "16"
  }));
});
pathsByWeight$1.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "12"
  }));
});
pathsByWeight$1.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"
  }));
});
pathsByWeight$1.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "10"
  }));
});
pathsByWeight$1.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "8"
  }));
});
pathsByWeight$1.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "12"
  }));
});

var renderPath$1 = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight$1);
};

var Info = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return React.createElement(IconBase$1, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath$1
  }));
});
Info.displayName = "Info";

var Info$1 = Info;

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var X = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return React.createElement(IconBase$1, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
X.displayName = "X";

var X$1 = X;

const Modal = React.forwardRef((props, ref) => {
    const { title = '', size = 'default', onClose, footerSlot, className, style, children } = props, rest = __rest(props, ["title", "size", "onClose", "footerSlot", "className", "style", "children"]);
    const wrapperClass = getClasses(styles$6, ['modal', size], className);
    const bodyClass = getClasses(styles$6, 'modal-body');
    return (jsxRuntime.jsxs("div", Object.assign({ className: wrapperClass, style: style, ref: ref }, rest, { children: [onClose && jsxRuntime.jsx(ModalClose, { onClick: onClose }), title && (jsxRuntime.jsx("div", Object.assign({ className: getClasses(styles$6, 'modal-header') }, { children: title }))), jsxRuntime.jsx("div", Object.assign({ className: bodyClass }, { children: children })), Boolean(footerSlot) && (jsxRuntime.jsx("div", Object.assign({ className: getClasses(styles$6, 'modal-footer') }, { children: footerSlot })))] })));
});
Modal.displayName = 'Modal';
const ModalClose = ({ onClick }) => (jsxRuntime.jsx("button", Object.assign({ type: "button", className: getClasses(styles$6, 'modal-button-close'), onClick: onClick }, { children: jsxRuntime.jsx(X$1, { size: 24 }) })));

var css_248z$3 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__input-group___qPE1o{align-items:stretch;display:flex;flex-direction:row;margin:var(--form-input-gap) 0}.gds__input-group-adornment___7RjhD{align-items:center;background:var(--form-border-color);border-bottom-left-radius:var(--form-input-border-radius);border-top-left-radius:var(--form-input-border-radius);color:var(--form-icon-color);display:flex;font:var(--form-input-group-text-medium);gap:var(--form-input-gap);justify-content:center;padding:0 var(--form-input-medium-padding-x)}.gds__input-group-adornment___7RjhD.gds__small___DFb-a{font:var(--form-input-group-text-small);padding-left:var(--form-input-small-padding-x);padding-right:var(--form-input-small-padding-x)}.gds__input-group-adornment___7RjhD.gds__large___2-Qt3{font:var(--form-input-group-text-large);padding-left:var(--form-input-large-padding-x);padding-right:var(--form-input-large-padding-x)}.gds__input-group___qPE1o .gds__form-field___t2SOt{border-bottom-right-radius:0;border-top-right-radius:0}.gds__form-field___t2SOt+.gds__input-group-adornment___7RjhD,.gds__input-group-adornment___7RjhD+.gds__form-field___t2SOt{border-radius:0 var(--form-input-border-radius) var(--form-input-border-radius) 0}";
var styles$3 = {"form-field":"gds__form-field___t2SOt gds__form-field___8CpBM","formField":"gds__form-field___t2SOt gds__form-field___8CpBM","error":"gds__error___ZsRFy gds__error___kzIwN","success":"gds__success___-HD6m gds__success___uKsIL","disabled":"gds__disabled___XfcWK gds__disabled___ETKma","input-group":"gds__input-group___qPE1o","inputGroup":"gds__input-group___qPE1o","input-group-adornment":"gds__input-group-adornment___7RjhD","inputGroupAdornment":"gds__input-group-adornment___7RjhD","small":"gds__small___DFb-a","large":"gds__large___2-Qt3"};
styleInject(css_248z$3);

const FieldContainer = ({ id, label = '', state, hint = '', className, children, }) => {
    const containerClassNames = getClasses(common, 'form-field-row', className);
    const labelClassNames = getClasses(common, ['form-label', state]);
    const helperClassNames = getClasses(common, ['form-hint', state]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: containerClassNames }, { children: [label && (jsxRuntime.jsx("label", Object.assign({ className: labelClassNames, htmlFor: id }, { children: label }))), children, hint && jsxRuntime.jsx("span", Object.assign({ className: helperClassNames }, { children: hint }))] })));
};
const InputGroupContainer = ({ id, label = '', state, hint = '', adornmentPosition = 'end', adornmentText = '', adornmentIcon, className, size, children, }) => {
    const startPosition = adornmentPosition === 'start';
    return (jsxRuntime.jsx(FieldContainer, Object.assign({ id: id, label: label, state: state, hint: hint, className: className }, { children: jsxRuntime.jsxs("div", Object.assign({ className: getClasses(styles$3, 'input-group') }, { children: [startPosition && (jsxRuntime.jsx(Adornment, { icon: adornmentIcon, text: adornmentText, size: size })), children, !startPosition && (jsxRuntime.jsx(Adornment, { icon: adornmentIcon, text: adornmentText, size: size }))] })) })));
};
const StateIcon = (props) => {
    const iconSize = props.size === 'small' ? 16 : 20;
    let icon;
    if (props.state === 'success')
        icon = jsxRuntime.jsx(Check$1, { size: iconSize });
    if (props.state === 'error')
        icon = jsxRuntime.jsx(X$1, { size: iconSize });
    if (!icon)
        return null;
    return (jsxRuntime.jsx("span", Object.assign({ className: getClasses(props.classes || common, 'form-icon') }, { children: icon })));
};
const Adornment = ({ icon, text, size, }) => (jsxRuntime.jsxs("div", Object.assign({ className: getClasses(styles$3, ['input-group-adornment', size]) }, { children: [icon || jsxRuntime.jsx(Info$1, { size: 22 }), text && jsxRuntime.jsx("span", { children: text })] })));

const Input = React.forwardRef((props, ref) => {
    const { id, state, type = 'text', placeholder = '', defaultValue = '', size = 'medium', iconRight, iconLeft, className } = props, rest = __rest(props, ["id", "state", "type", "placeholder", "defaultValue", "size", "iconRight", "iconLeft", "className"]);
    const fieldClassNames = getClasses(common, ['form-field', state, size], className);
    return (jsxRuntime.jsxs("div", Object.assign({ className: fieldClassNames }, { children: [iconLeft && jsxRuntime.jsx(FieldIcon, { icon: iconLeft }), jsxRuntime.jsx("input", Object.assign({ ref: ref, id: id, type: type, defaultValue: defaultValue, placeholder: placeholder, disabled: state === 'disabled', className: getClasses(common, 'form-input') }, rest)), iconRight && jsxRuntime.jsx(FieldIcon, { icon: iconRight }), jsxRuntime.jsx(StateIcon, { state: state, size: size })] })));
});
Input.displayName = 'Input';
const FieldIcon = (props) => (jsxRuntime.jsx("span", Object.assign({ className: getClasses(common, 'form-icon') }, { children: props.icon })));

const TextField = React.forwardRef((props, ref) => {
    const { id = '', label = '', state, hint = '', className, fieldClassName } = props, rest = __rest(props, ["id", "label", "state", "hint", "className", "fieldClassName"]);
    return (jsxRuntime.jsx(FieldContainer, Object.assign({ id: id, label: label, state: state, hint: hint, className: className }, { children: jsxRuntime.jsx(Input, Object.assign({ ref: ref, id: id, state: state, className: fieldClassName }, rest)) })));
});
TextField.displayName = 'TextField';

const InputGroup = React.forwardRef((props, ref) => {
    const { id = '', label = '', state, size, hint = '', adornmentPosition = 'end', adornmentText = '', adornmentIcon, className, fieldClassName } = props, rest = __rest(props, ["id", "label", "state", "size", "hint", "adornmentPosition", "adornmentText", "adornmentIcon", "className", "fieldClassName"]);
    return (jsxRuntime.jsx(InputGroupContainer, Object.assign({ id: id, label: label, state: state, size: size, hint: hint, className: className, adornmentPosition: adornmentPosition, adornmentText: adornmentText, adornmentIcon: adornmentIcon }, { children: jsxRuntime.jsx(Input, Object.assign({ ref: ref, id: id, state: state, size: size, className: fieldClassName }, rest)) })));
});
InputGroup.displayName = 'InputGroup';

var css_248z$2 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__error___rdImt textarea.gds__form-input___MLyKp,.gds__success___wHhSy textarea.gds__form-input___MLyKp{padding-right:inherit}textarea.gds__form-input___MLyKp+.gds__form-icon___FeH6L{padding-right:inherit;padding-top:inherit;position:absolute;right:0;top:0}";
var styles$2 = {"form-input":"gds__form-input___MLyKp gds__form-input___8xTbi","formInput":"gds__form-input___MLyKp gds__form-input___8xTbi","form-icon":"gds__form-icon___FeH6L gds__form-icon___sBJD6","formIcon":"gds__form-icon___FeH6L gds__form-icon___sBJD6","error":"gds__error___rdImt gds__error___kzIwN","success":"gds__success___wHhSy gds__success___uKsIL"};
styleInject(css_248z$2);

const TextArea = React.forwardRef((props, ref) => {
    const { id, label = '', state, size, className, fieldClassName, maxLength, onChange, showCounter } = props, rest = __rest(props, ["id", "label", "state", "size", "className", "fieldClassName", "maxLength", "onChange", "showCounter"]);
    const [count, setCount] = React.useState(0);
    const containerClassNames = getClasses(common, 'form-field-row', className);
    const labelClassNames = getClasses(common, ['form-label', state]);
    const helperClassNames = getClasses(common, ['form-hint', state]);
    const fieldClassNames = getClasses(common, ['form-field', state, size], fieldClassName);
    const onChangeCallback = React.useCallback((e) => {
        setCount(e.target.value.length);
        onChange && onChange(e);
    }, [onChange]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: containerClassNames }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: getClasses(common, 'form-label-wrap') }, { children: [label && (jsxRuntime.jsx("label", Object.assign({ className: labelClassNames, htmlFor: id }, { children: label }))), showCounter && maxLength && (jsxRuntime.jsxs("span", Object.assign({ className: helperClassNames }, { children: [count, " / ", maxLength] })))] })), jsxRuntime.jsxs("div", Object.assign({ className: fieldClassNames }, { children: [jsxRuntime.jsx("textarea", Object.assign({ id: id, ref: ref, disabled: state === 'disabled', className: getClasses(styles$2, 'form-input'), onChange: onChangeCallback, maxLength: maxLength }, rest)), jsxRuntime.jsx(StateIcon, { state: state, size: size, classes: styles$2 })] }))] })));
});
TextArea.displayName = 'TextArea';

const Select = React.forwardRef((props, ref) => {
    const { id, state, defaultOption, size = 'medium', icon, className, options } = props, rest = __rest(props, ["id", "state", "defaultOption", "size", "icon", "className", "options"]);
    const fieldClassNames = getClasses(styles$3, ['form-field', state, size], className);
    return (jsxRuntime.jsxs("div", Object.assign({ className: fieldClassNames }, { children: [jsxRuntime.jsxs("select", Object.assign({ ref: ref, id: id, className: getClasses(common, 'form-input'), disabled: state === 'disabled' }, rest, { children: [defaultOption && (jsxRuntime.jsx("option", Object.assign({ value: "select-option", disabled: true }, { children: defaultOption }))), options.map(({ value, label }, i) => (jsxRuntime.jsx("option", Object.assign({ value: value }, { children: label }), i)))] })), icon && jsxRuntime.jsx("span", Object.assign({ className: getClasses(common, 'form-icon') }, { children: icon })), jsxRuntime.jsx(StateIcon, { state: state, size: size }), jsxRuntime.jsx("span", Object.assign({ className: getClasses(common, ['form-icon', 'select-icon']) }, { children: jsxRuntime.jsx(CaretDown$1, {}) }))] })));
});
Select.displayName = 'Select';

const SelectField = React.forwardRef((props, ref) => {
    const { id, label = '', state, hint = '', className, fieldClassName } = props, rest = __rest(props, ["id", "label", "state", "hint", "className", "fieldClassName"]);
    return (jsxRuntime.jsx(FieldContainer, Object.assign({ id: id, label: label, state: state, hint: hint, className: className }, { children: jsxRuntime.jsx(Select, Object.assign({ ref: ref, id: id, className: fieldClassName, state: state }, rest)) })));
});
SelectField.displayName = 'SelectField';

const SelectGroup = React.forwardRef((props, ref) => {
    const { id, label = '', state, size, hint = '', adornmentPosition = 'end', adornmentText = '', adornmentIcon, className, fieldClassName } = props, rest = __rest(props, ["id", "label", "state", "size", "hint", "adornmentPosition", "adornmentText", "adornmentIcon", "className", "fieldClassName"]);
    return (jsxRuntime.jsx(InputGroupContainer, Object.assign({ id: id, label: label, state: state, size: size, hint: hint, className: className, adornmentPosition: adornmentPosition, adornmentText: adornmentText, adornmentIcon: adornmentIcon }, { children: jsxRuntime.jsx(Select, Object.assign({ ref: ref, id: id, state: state, size: size, className: fieldClassName }, rest)) })));
});
SelectGroup.displayName = 'SelectGroup';

const ChoiceInput = React.forwardRef((props, ref) => {
    const { id, state, type, hint, label, className } = props, rest = __rest(props, ["id", "state", "type", "hint", "label", "className"]);
    const containerClassNames = getClasses(common, 'form-field-row', className);
    const labelClassNames = getClasses(styles$5, 'form-label', state);
    const helperClassNames = getClasses(common, 'form-hint', state);
    return (jsxRuntime.jsxs("div", Object.assign({ className: containerClassNames }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: getClasses(styles$5, 'form-control') }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: getClasses(styles$5, 'form-control-inner') }, { children: [jsxRuntime.jsx("input", Object.assign({ ref: ref, id: id, type: type, disabled: state === 'disabled', className: getClasses(styles$5, state) }, rest)), type === 'checkbox' && (jsxRuntime.jsx("span", Object.assign({ className: getClasses(styles$5, 'form-control-icon') }, { children: jsxRuntime.jsx(Check$1, {}) })))] })), jsxRuntime.jsx("label", Object.assign({ htmlFor: id, className: labelClassNames }, { children: label }))] })), hint && jsxRuntime.jsx("span", Object.assign({ className: helperClassNames }, { children: hint }))] })));
});
ChoiceInput.displayName = 'ChoiceInput';

var css_248z$1 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__pin-field___7t5U8{display:flex;gap:var(--margin-3)}.gds__pin-field___7t5U8 .gds__form-input___luFZ9{flex:none;height:100%;text-align:center;width:100%}.gds__pin-field___7t5U8 .gds__form-field___YPWeD{height:var(--form-pin-size-default);padding:var(--form-input-small-padding-y);text-align:center;width:var(--form-pin-size-default)}.gds__pin-field___7t5U8.gds__small___zCZge .gds__form-field___YPWeD{height:var(--form-pin-size-small);width:var(--form-pin-size-small)}.gds__pin-field___7t5U8.gds__large___8J-N7 .gds__form-field___YPWeD{height:var(--form-pin-size-large);width:var(--form-pin-size-large)}";
var styles$1 = {"pin-field":"gds__pin-field___7t5U8","pinField":"gds__pin-field___7t5U8","form-input":"gds__form-input___luFZ9 gds__form-input___8xTbi","formInput":"gds__form-input___luFZ9 gds__form-input___8xTbi","form-field":"gds__form-field___YPWeD gds__form-field___8CpBM","formField":"gds__form-field___YPWeD gds__form-field___8CpBM","error":"gds__error___WV8vF gds__error___kzIwN","disabled":"gds__disabled___Wkeae gds__disabled___ETKma","small":"gds__small___zCZge","large":"gds__large___8J-N7"};
styleInject(css_248z$1);

const PinField = ({ label, value, length = 4, state, size, secret = false, autoFocus = false, pattern = DEFAULT_PATTERN, className, onComplete, }) => {
    const containerClassNames = getClasses(styles$1, ['pin-field', size], className);
    const fieldClassNames = getClasses(styles$1, ['form-field', state]);
    const labelClassNames = getClasses(common, ['form-label', state]);
    const [values, setValues] = React.useState(() => Array.from({ length }).map((_, i) => (value === null || value === void 0 ? void 0 : value.toString()[i]) || ''));
    const fields = usePinHook({
        values,
        autoFocus,
        secret,
        pattern,
        state,
        onChange: (v) => setValues(v),
        onComplete,
    });
    return (jsxRuntime.jsxs("div", Object.assign({ className: getClasses(common, 'form-field-row') }, { children: [label && jsxRuntime.jsx("label", Object.assign({ className: labelClassNames }, { children: label })), jsxRuntime.jsx("div", Object.assign({ className: containerClassNames }, { children: fields.map((fieldProps, index) => (jsxRuntime.jsx("div", Object.assign({ className: fieldClassNames }, { children: jsxRuntime.jsx("input", Object.assign({ className: getClasses(styles$1, 'form-input') }, fieldProps)) }), index))) }))] })));
};
PinField.displayName = 'PinField';
const usePinHook = ({ values, autoFocus, secret, state, pattern, onChange: onChangeProp, onComplete, }) => {
    const disabled = state === 'disabled';
    const fieldRefs = React.useRef(Array(values.length).fill(null));
    const setFocus = React.useCallback((index = 0) => {
        var _a;
        (_a = fieldRefs.current[index]) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    React.useEffect(() => {
        if (autoFocus)
            setFocus();
    }, [autoFocus, setFocus]);
    const setFieldRef = React.useCallback((index) => (ref) => {
        fieldRefs.current[index] = ref;
    }, []);
    const onChange = React.useCallback((index) => (event) => {
        let { value } = event.target;
        value = value.trim();
        if (!pattern.test(value))
            return;
        const nextValues = values.slice();
        nextValues[index] = value;
        onChangeProp(nextValues);
        if (value) {
            if (!nextValues.includes('')) {
                onComplete === null || onComplete === void 0 ? void 0 : onComplete(nextValues.join(''));
            }
            if (index !== values.length - 1) {
                setFocus(index + 1);
            }
        }
    }, [pattern, values, onChangeProp, onComplete, setFocus]);
    const onKeyDown = React.useCallback((index) => (event) => {
        if (event.key === 'Backspace' && !values[index] && index) {
            setFocus(index - 1);
        }
    }, [values, setFocus]);
    const fields = values.map((value, index) => (Object.assign({ ref: setFieldRef(index), value,
        disabled, autoComplete: 'off', maxLength: 1, type: secret ? 'password' : 'text' }, (!disabled && {
        onChange: onChange(index),
        onKeyDown: onKeyDown(index),
    }))));
    return fields;
};
const DEFAULT_PATTERN = /.*/;

var css_248z = ".gds__table-container___6pz-J{overflow-x:auto;width:100%}.gds__table___0hwBS{border-collapse:collapse;border-radius:var(--table-border-radius);border-spacing:0;display:table;text-align:left;width:100%}.gds__table-head___5mPKd{display:table-header-group;font:var(--table-header-font)}.gds__table-body___-PcEl{display:table-row-group;font:var(--table-cell-font)}.gds__table-row___J6gjq{color:inherit;display:table-row;font:inherit;outline:0;vertical-align:middle}.gds__table-cell___v96br{background:var(--table-background-color);border-bottom:var(--table-border-width) solid var(--table-border-color);color:var(--table-text-color);display:table-cell;font:inherit;padding:var(--padding-2) var(--padding-3)}.gds__table-cell___v96br:hover{background:var(--table-hover-background-color)}.gds__table-head___5mPKd .gds__table-cell___v96br{color:var(--table-header-color)}.gds__table-cell___v96br a{color:var(--table-action-color);text-decoration:none}.gds__table-cell___v96br.gds__active___aXFpy,.gds__table-cell___v96br:active{background:var(--table-active-background-color)}.gds__table-cell___v96br.gds__active___aXFpy a,.gds__table-cell___v96br:active a{color:var(--table-active-action-color)}.gds__disabled___yG5BS .gds__table-cell___v96br,.gds__table-cell___v96br.gds__disabled___yG5BS,.gds__table-cell___v96br:disabled{background:var(--table-disabled-background-color);color:var(--table-disabled-text-color)}.gds__disabled___yG5BS .gds__table-head___5mPKd .gds__table-cell___v96br,.gds__table-head___5mPKd .gds__table-cell___v96br.gds__disabled___yG5BS,.gds__table-head___5mPKd .gds__table-cell___v96br:disabled{color:var(--table-disabled-header-color)}.gds__disabled___yG5BS .gds__table-cell___v96br a,.gds__table-cell___v96br.gds__disabled___yG5BS a,.gds__table-cell___v96br:disabled a{color:var(--table-disabled-action-color)}.gds__table___0hwBS.gds__sticky-header___klAh7{border-collapse:separate}.gds__sticky-header___klAh7 .gds__table-head___5mPKd .gds__table-cell___v96br{position:sticky;top:0;z-index:2}";
var styles = {"table-container":"gds__table-container___6pz-J","tableContainer":"gds__table-container___6pz-J","table":"gds__table___0hwBS","table-head":"gds__table-head___5mPKd","tableHead":"gds__table-head___5mPKd","table-body":"gds__table-body___-PcEl","tableBody":"gds__table-body___-PcEl","table-row":"gds__table-row___J6gjq","tableRow":"gds__table-row___J6gjq","table-cell":"gds__table-cell___v96br","tableCell":"gds__table-cell___v96br","active":"gds__active___aXFpy","disabled":"gds__disabled___yG5BS","sticky-header":"gds__sticky-header___klAh7","stickyHeader":"gds__sticky-header___klAh7"};
styleInject(css_248z);

function Table(props) {
    const { columns = [], rows = [], disabled = false, stickyHeader = false, containerStyle, tableStyle, className, forwardedRef, } = props;
    const sticky = stickyHeader ? 'sticky-header' : '';
    const disabledTable = disabled ? 'disabled' : '';
    const classNames = getClasses(styles, ['table', sticky, disabledTable], className);
    const containerClassNames = getClasses(styles, ['table-container'], className);
    const headClass = getClasses(styles, 'table-head');
    const rowClass = getClasses(styles, 'table-row');
    const bodyClass = getClasses(styles, 'table-body');
    return (jsxRuntime.jsx("div", Object.assign({ className: containerClassNames, style: containerStyle }, { children: jsxRuntime.jsxs("table", Object.assign({ ref: forwardedRef, className: classNames, style: tableStyle }, { children: [jsxRuntime.jsx("thead", Object.assign({ className: headClass }, { children: jsxRuntime.jsx("tr", Object.assign({ className: rowClass }, { children: columns.map((col) => (jsxRuntime.jsx("th", Object.assign({ className: getClasses(styles, [
                                'table-cell',
                                col.disabled ? 'disabled' : undefined,
                            ]) }, { children: col.headerRender ? col.headerRender(col) : col.title }), col.key))) })) })), jsxRuntime.jsx("tbody", Object.assign({ className: bodyClass }, { children: rows.map((row, rowIndex) => (jsxRuntime.jsx("tr", Object.assign({ className: getClasses(styles, [
                            'table-row',
                            row.disabled && 'disabled',
                        ]) }, { children: columns.map((col) => (jsxRuntime.jsx("td", Object.assign({ className: getClasses(styles, [
                                'table-cell',
                                col.disabled && 'disabled',
                            ]) }, { children: col.cellRender
                                ? col.cellRender(col, row)
                                : row[col.key] }), `${rowIndex}-${col.key}`))) }), rowIndex))) }))] })) })));
}
const TableWithRef = (props, ref) => jsxRuntime.jsx(Table, Object.assign({}, props, { forwardedRef: ref }));
TableWithRef.displayName = 'Table';
var Table$1 = React.forwardRef(TableWithRef);

exports.Button = Button;
exports.ChoiceInput = ChoiceInput;
exports.Icon = Icon;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.Modal = Modal;
exports.PinField = PinField;
exports.Select = Select;
exports.SelectField = SelectField;
exports.SelectGroup = SelectGroup;
exports.Table = Table$1;
exports.TextArea = TextArea;
exports.TextField = TextField;
//# sourceMappingURL=common.js.map
