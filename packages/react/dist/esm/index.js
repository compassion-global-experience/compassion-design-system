import { jsx, jsxs } from 'react/jsx-runtime';
import React, { forwardRef, createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var css_248z$6 = ".gds__button-main___CW7if{appearance:none;background:var(--button-secondary-default-background-color);border-color:var(--button-secondary-default-border-color);border-radius:var(--button-secondary-border-radius);border-style:solid;border-width:var(--button-secondary-border-width);color:var(--button-secondary-default-text-color);cursor:pointer;display:inline-block;font:var(--button-small-font);line-height:1;padding:var(--button-secondary-small-padding-y) var(--button-secondary-small-padding-x)}.gds__button-main___CW7if:focus{outline:none}.gds__button-main___CW7if:not([disabled]):active{box-shadow:var(--button-shadow-active)}.gds__button-main___CW7if .gds__icon___BJbP-{color:var(--button-secondary-default-icon-color)}.gds__button-main___CW7if.gds__medium___xyYvc{font:var(--button-medium-font);padding:var(--button-secondary-medium-padding-y) var(--button-secondary-medium-padding-x)}.gds__button-main___CW7if.gds__large___WvPwP{font:var(--button-large-font);padding:var(--button-secondary-large-padding-y) var(--button-secondary-large-padding-x)}.gds__button-main___CW7if:hover{background:var(--button-secondary-hover-background-color);border-color:var(--button-secondary-hover-border-color);color:var(--button-secondary-hover-text-color)}.gds__button-main___CW7if:hover .gds__icon___BJbP-{color:var(--button-secondary-hover-icon-color)}.gds__button-main___CW7if[disabled]{background:var(--button-secondary-disabled-background-color);border-color:var(--button-secondary-disabled-border-color);color:var(--button-secondary-disabled-text-color);cursor:not-allowed}.gds__button-main___CW7if[disabled] .gds__icon___BJbP-{color:var(--button-secondary-disabled-icon-color)}.gds__button-main___CW7if.gds__primary___L-DlQ{background:var(--button-primary-default-background-color);border-color:var(--button-primary-default-border-color);border-radius:var(--button-primary-border-radius);border-width:var(--button-primary-border-width);color:var(--button-primary-default-text-color);padding:var(--button-primary-small-padding-y) var(--button-primary-small-padding-x)}.gds__button-main___CW7if.gds__primary___L-DlQ .gds__icon___BJbP-{color:var(--button-primary-default-icon-color)}.gds__button-main___CW7if.gds__primary___L-DlQ.gds__medium___xyYvc{padding:var(--button-primary-medium-padding-y) var(--button-primary-medium-padding-x)}.gds__button-main___CW7if.gds__primary___L-DlQ.gds__large___WvPwP{padding:var(--button-primary-large-padding-y) var(--button-primary-large-padding-x)}.gds__button-main___CW7if.gds__primary___L-DlQ:hover{background:var(--button-primary-hover-background-color);border-color:var(--button-primary-hover-border-color);color:var(--button-primary-hover-text-color)}.gds__button-main___CW7if.gds__primary___L-DlQ:hover .gds__icon___BJbP-{color:var(--button-primary-hover-icon-color)}.gds__button-main___CW7if.gds__primary___L-DlQ[disabled]{background:var(--button-primary-disabled-background-color);border-color:var(--button-primary-disabled-border-color);color:var(--button-primary-disabled-text-color)}.gds__button-main___CW7if.gds__primary___L-DlQ[disabled] .gds__icon___BJbP-{color:var(--button-primary-disabled-icon-color)}.gds__button-main___CW7if.gds__tertiary___imHDy{background:var(--button-tertiary-default-background-color);border-bottom-width:1px;border-color:var(--button-tertiary-default-border-color);border-radius:var(--button-tertiary-border-radius);border-width:var(--button-tertiary-border-width);color:var(--button-tertiary-default-text-color);padding:var(--button-tertiary-small-padding-y) var(--button-tertiary-small-padding-x)}.gds__button-main___CW7if.gds__tertiary___imHDy:active{box-shadow:none}.gds__button-main___CW7if.gds__tertiary___imHDy .gds__icon___BJbP-{color:var(--button-tertiary-default-icon-color)}.gds__button-main___CW7if.gds__tertiary___imHDy.gds__medium___xyYvc{padding:var(--button-tertiary-medium-padding-y) var(--button-tertiary-medium-padding-x)}.gds__button-main___CW7if.gds__tertiary___imHDy.gds__large___WvPwP{padding:var(--button-tertiary-large-padding-y) var(--button-tertiary-large-padding-x)}.gds__button-main___CW7if.gds__tertiary___imHDy:hover{background:var(--button-tertiary-hover-background-color);border-color:var(--button-tertiary-hover-border-color);color:var(--button-tertiary-hover-text-color)}.gds__button-main___CW7if.gds__tertiary___imHDy:hover .gds__icon___BJbP-{color:var(--button-tertiary-hover-icon-color)}.gds__button-main___CW7if.gds__tertiary___imHDy[disabled]{background:var(--button-tertiary-disabled-background-color);border-color:var(--button-tertiary-disabled-border-color);color:var(--button-tertiary-disabled-text-color)}.gds__button-main___CW7if.gds__tertiary___imHDy[disabled] .gds__icon___BJbP-{color:var(--button-tertiary-disabled-icon-color)}";
var styles$5 = {"button-main":"gds__button-main___CW7if","icon":"gds__icon___BJbP-","medium":"gds__medium___xyYvc","large":"gds__large___WvPwP","primary":"gds__primary___L-DlQ","tertiary":"gds__tertiary___imHDy"};
styleInject(css_248z$6);

/**
 * Get classes from a map of classes and a list of mappings
 * @param map - typically a styles import object from a css module
 * @param input - a key or a list of keys from the map to include in the returned string
 * @param className - a class name to append to the returned string
 */
var getClasses = function (map, input, className) {
    var mappings = (Array.isArray(input) ? input : [input]).filter(Boolean);
    var mapped = mappings.map(function (key) { return map[key]; }).filter(Boolean);
    if (className) {
        mapped.push(className);
    }
    return mapped.join(' ');
};

var Button = forwardRef(function (props, ref) {
    var label = props.label, _a = props.mode, mode = _a === void 0 ? 'primary' : _a, _b = props.size, size = _b === void 0 ? 'medium' : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, className = props.className, style = props.style, onClick = props.onClick, rest = __rest(props, ["label", "mode", "size", "disabled", "className", "style", "onClick"]);
    var classNames = getClasses(styles$5, ['button-main', mode, size], className);
    return (jsx("button", __assign({ onClick: onClick, className: classNames, disabled: disabled, style: style, ref: ref }, rest, { children: label })));
});
Button.displayName = 'Button';

var css_248z$5 = ".gds__modal___354qp{background:var(--modal-background-color);border-radius:var(--modal-border-radius);box-shadow:var(--modal-shadow);left:50%;max-width:var(--modal-default-max-width);position:absolute;top:50%;transform:translate(-50%,-50%);width:100%;z-index:99}.gds__modal-header___MDURr{border-bottom:1px solid var(--modal-border-color);color:var(--modal-header-color);font:var(--modal-header-font);padding:var(--padding-3) var(--padding-5)}.gds__modal-body___Cs9P2{color:var(--modal-body-color);font:var(--modal-body-font)}.gds__modal-footer___V5cNS{align-items:center;border-top:1px solid var(--modal-border-color);display:flex;flex-direction:row;gap:var(--margin-3);justify-content:flex-end;padding:var(--padding-3) var(--padding-5)}.gds__modal-button-close___bWpUw{align-items:center;appearance:none;background:none;border:none;cursor:pointer;display:flex;justify-content:center;margin:0;padding:0;position:absolute;right:var(--padding-5);top:calc(var(--padding-3) + 4px)}.gds__modal___354qp.gds__small___cx4fI{max-width:var(--modal-small-max-width)}.gds__modal___354qp.gds__wide___dkOIM{max-width:var(--modal-wide-max-width)}";
var styles$4 = {"modal":"gds__modal___354qp","modal-header":"gds__modal-header___MDURr","modal-body":"gds__modal-body___Cs9P2","modal-footer":"gds__modal-footer___V5cNS","modal-button-close":"gds__modal-button-close___bWpUw","small":"gds__small___cx4fI","wide":"gds__wide___dkOIM"};
styleInject(css_248z$5);

var IconContext = /*#__PURE__*/createContext({
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

var IconBase = /*#__PURE__*/forwardRef(function (props, ref) {
  var alt = props.alt,
      color = props.color,
      size = props.size,
      weight = props.weight,
      mirrored = props.mirrored,
      children = props.children,
      renderPath = props.renderPath,
      restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);

  var _useContext = useContext(IconContext),
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

var CaretDown = /*#__PURE__*/forwardRef(function (props, ref) {
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

var Check = /*#__PURE__*/forwardRef(function (props, ref) {
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

var Info = /*#__PURE__*/forwardRef(function (props, ref) {
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

var X = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase$1, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
X.displayName = "X";

var X$1 = X;

var Modal = forwardRef(function (props, ref) {
    var _a = props.title, title = _a === void 0 ? '' : _a, _b = props.size, size = _b === void 0 ? 'default' : _b, onClose = props.onClose, footerSlot = props.footerSlot, className = props.className, style = props.style, children = props.children, rest = __rest(props, ["title", "size", "onClose", "footerSlot", "className", "style", "children"]);
    var wrapperClass = getClasses(styles$4, ['modal', size], className);
    var bodyClass = getClasses(styles$4, 'modal-body');
    return (jsxs("div", __assign({ className: wrapperClass, style: style, ref: ref }, rest, { children: [onClose && jsx(ModalClose, { onClick: onClose }), title && (jsx("div", __assign({ className: getClasses(styles$4, 'modal-header') }, { children: title }))), jsx("div", __assign({ className: bodyClass }, { children: children })), Boolean(footerSlot) && (jsx("div", __assign({ className: getClasses(styles$4, 'modal-footer') }, { children: footerSlot })))] })));
});
Modal.displayName = 'Modal';
var ModalClose = function (_a) {
    var onClick = _a.onClick;
    return (jsx("button", __assign({ type: "button", className: getClasses(styles$4, 'modal-button-close'), onClick: onClick }, { children: jsx(X$1, { size: 24 }) })));
};

var css_248z$4 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}";
var common = {"form-field-row":"gds__form-field-row___NxqOE","form-label":"gds__form-label___Q5gAp","disabled":"gds__disabled___ETKma","form-input":"gds__form-input___8xTbi","form-field":"gds__form-field___8CpBM","small":"gds__small___FDi8W","large":"gds__large___Xq6GZ","form-icon":"gds__form-icon___sBJD6","error":"gds__error___kzIwN","select-icon":"gds__select-icon___cG8xd","success":"gds__success___uKsIL","form-hint":"gds__form-hint___fX4e9","form-label-wrap":"gds__form-label-wrap___zU6W3"};
styleInject(css_248z$4);

var css_248z$3 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__input-group___qPE1o{align-items:stretch;display:flex;flex-direction:row;margin:var(--form-input-gap) 0}.gds__input-group-adornment___7RjhD{align-items:center;background:var(--form-border-color);border-bottom-left-radius:var(--form-input-border-radius);border-top-left-radius:var(--form-input-border-radius);color:var(--form-icon-color);display:flex;font:var(--form-input-group-text-medium);gap:var(--form-input-gap);justify-content:center;padding:0 var(--form-input-medium-padding-x)}.gds__input-group-adornment___7RjhD.gds__small___DFb-a{font:var(--form-input-group-text-small);padding-left:var(--form-input-small-padding-x);padding-right:var(--form-input-small-padding-x)}.gds__input-group-adornment___7RjhD.gds__large___2-Qt3{font:var(--form-input-group-text-large);padding-left:var(--form-input-large-padding-x);padding-right:var(--form-input-large-padding-x)}.gds__input-group___qPE1o .gds__form-field___t2SOt{border-bottom-right-radius:0;border-top-right-radius:0}.gds__form-field___t2SOt+.gds__input-group-adornment___7RjhD,.gds__input-group-adornment___7RjhD+.gds__form-field___t2SOt{border-radius:0 var(--form-input-border-radius) var(--form-input-border-radius) 0}";
var styles$3 = {"form-field":"gds__form-field___t2SOt gds__form-field___8CpBM","error":"gds__error___ZsRFy gds__error___kzIwN","success":"gds__success___-HD6m gds__success___uKsIL","disabled":"gds__disabled___XfcWK gds__disabled___ETKma","input-group":"gds__input-group___qPE1o","input-group-adornment":"gds__input-group-adornment___7RjhD","small":"gds__small___DFb-a","large":"gds__large___2-Qt3"};
styleInject(css_248z$3);

var FieldContainer = function (_a) {
    var id = _a.id, _b = _a.label, label = _b === void 0 ? '' : _b, state = _a.state, _c = _a.hint, hint = _c === void 0 ? '' : _c, className = _a.className, children = _a.children;
    var containerClassNames = getClasses(common, 'form-field-row', className);
    var labelClassNames = getClasses(common, ['form-label', state]);
    var helperClassNames = getClasses(common, ['form-hint', state]);
    return (jsxs("div", __assign({ className: containerClassNames }, { children: [label && (jsx("label", __assign({ className: labelClassNames, htmlFor: id }, { children: label }))), children, hint && jsx("span", __assign({ className: helperClassNames }, { children: hint }))] })));
};
var InputGroupContainer = function (_a) {
    var id = _a.id, _b = _a.label, label = _b === void 0 ? '' : _b, state = _a.state, _c = _a.hint, hint = _c === void 0 ? '' : _c, _d = _a.adornmentPosition, adornmentPosition = _d === void 0 ? 'end' : _d, _e = _a.adornmentText, adornmentText = _e === void 0 ? '' : _e, adornmentIcon = _a.adornmentIcon, className = _a.className, size = _a.size, children = _a.children;
    var startPosition = adornmentPosition === 'start';
    return (jsx(FieldContainer, __assign({ id: id, label: label, state: state, hint: hint, className: className }, { children: jsxs("div", __assign({ className: getClasses(styles$3, 'input-group') }, { children: [startPosition && (jsx(Adornment, { icon: adornmentIcon, text: adornmentText, size: size })), children, !startPosition && (jsx(Adornment, { icon: adornmentIcon, text: adornmentText, size: size }))] })) })));
};
var StateIcon = function (props) {
    var iconSize = props.size === 'small' ? 16 : 20;
    var icon;
    if (props.state === 'success')
        icon = jsx(Check$1, { size: iconSize });
    if (props.state === 'error')
        icon = jsx(X$1, { size: iconSize });
    if (!icon)
        return null;
    return (jsx("span", __assign({ className: getClasses(props.classes || common, 'form-icon') }, { children: icon })));
};
var Adornment = function (_a) {
    var icon = _a.icon, text = _a.text, size = _a.size;
    return (jsxs("div", __assign({ className: getClasses(styles$3, ['input-group-adornment', size]) }, { children: [icon || jsx(Info$1, { size: 22 }), text && jsx("span", { children: text })] })));
};

var Input = forwardRef(function (props, ref) {
    var id = props.id, state = props.state, _a = props.type, type = _a === void 0 ? 'text' : _a, _b = props.placeholder, placeholder = _b === void 0 ? '' : _b, _c = props.defaultValue, defaultValue = _c === void 0 ? '' : _c, _d = props.size, size = _d === void 0 ? 'medium' : _d, iconRight = props.iconRight, iconLeft = props.iconLeft, className = props.className, rest = __rest(props, ["id", "state", "type", "placeholder", "defaultValue", "size", "iconRight", "iconLeft", "className"]);
    var fieldClassNames = getClasses(common, ['form-field', state, size], className);
    return (jsxs("div", __assign({ className: fieldClassNames }, { children: [iconLeft && jsx(FieldIcon, { icon: iconLeft }), jsx("input", __assign({ ref: ref, id: id, type: type, defaultValue: defaultValue, placeholder: placeholder, disabled: state === 'disabled', className: getClasses(common, 'form-input') }, rest)), iconRight && jsx(FieldIcon, { icon: iconRight }), jsx(StateIcon, { state: state, size: size })] })));
});
Input.displayName = 'Input';
var FieldIcon = function (props) { return (jsx("span", __assign({ className: getClasses(common, 'form-icon') }, { children: props.icon }))); };

var TextField = forwardRef(function (props, ref) {
    var id = props.id, _a = props.label, label = _a === void 0 ? '' : _a, state = props.state, _b = props.hint, hint = _b === void 0 ? '' : _b, className = props.className, fieldClassName = props.fieldClassName, rest = __rest(props, ["id", "label", "state", "hint", "className", "fieldClassName"]);
    return (jsx(FieldContainer, __assign({ id: id, label: label, state: state, hint: hint, className: className }, { children: jsx(Input, __assign({ ref: ref, id: id, state: state, className: fieldClassName }, rest)) })));
});
TextField.displayName = 'TextField';

var InputGroup = forwardRef(function (props, ref) {
    var id = props.id, _a = props.label, label = _a === void 0 ? '' : _a, state = props.state, size = props.size, _b = props.hint, hint = _b === void 0 ? '' : _b, _c = props.adornmentPosition, adornmentPosition = _c === void 0 ? 'end' : _c, _d = props.adornmentText, adornmentText = _d === void 0 ? '' : _d, adornmentIcon = props.adornmentIcon, className = props.className, fieldClassName = props.fieldClassName, rest = __rest(props, ["id", "label", "state", "size", "hint", "adornmentPosition", "adornmentText", "adornmentIcon", "className", "fieldClassName"]);
    return (jsx(InputGroupContainer, __assign({ id: id, label: label, state: state, size: size, hint: hint, className: className, adornmentPosition: adornmentPosition, adornmentText: adornmentText, adornmentIcon: adornmentIcon }, { children: jsx(Input, __assign({ ref: ref, id: id, state: state, size: size, className: fieldClassName }, rest)) })));
});
InputGroup.displayName = 'InputGroup';

var css_248z$2 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__error___rdImt textarea.gds__form-input___MLyKp,.gds__success___wHhSy textarea.gds__form-input___MLyKp{padding-right:inherit}textarea.gds__form-input___MLyKp+.gds__form-icon___FeH6L{padding-right:inherit;padding-top:inherit;position:absolute;right:0;top:0}";
var styles$2 = {"form-input":"gds__form-input___MLyKp gds__form-input___8xTbi","form-icon":"gds__form-icon___FeH6L gds__form-icon___sBJD6","error":"gds__error___rdImt gds__error___kzIwN","success":"gds__success___wHhSy gds__success___uKsIL"};
styleInject(css_248z$2);

var TextArea = forwardRef(function (props, ref) {
    var id = props.id, _a = props.label, label = _a === void 0 ? '' : _a, state = props.state, size = props.size, className = props.className, fieldClassName = props.fieldClassName, maxLength = props.maxLength, onChange = props.onChange, showCounter = props.showCounter, rest = __rest(props, ["id", "label", "state", "size", "className", "fieldClassName", "maxLength", "onChange", "showCounter"]);
    var _b = useState(0), count = _b[0], setCount = _b[1];
    var containerClassNames = getClasses(common, 'form-field-row', className);
    var labelClassNames = getClasses(common, ['form-label', state]);
    var helperClassNames = getClasses(common, ['form-hint', state]);
    var fieldClassNames = getClasses(common, ['form-field', state, size], fieldClassName);
    var onChangeCallback = useCallback(function (e) {
        setCount(e.target.value.length);
        onChange && onChange(e);
    }, [onChange]);
    return (jsxs("div", __assign({ className: containerClassNames }, { children: [jsxs("div", __assign({ className: getClasses(common, 'form-label-wrap') }, { children: [label && (jsx("label", __assign({ className: labelClassNames, htmlFor: id }, { children: label }))), showCounter && maxLength > 0 && (jsxs("span", __assign({ className: helperClassNames }, { children: [count, " / ", maxLength] })))] })), jsxs("div", __assign({ className: fieldClassNames }, { children: [jsx("textarea", __assign({ id: id, ref: ref, disabled: state === 'disabled', className: getClasses(styles$2, 'form-input'), onChange: onChangeCallback, maxLength: maxLength }, rest)), jsx(StateIcon, { state: state, size: size, classes: styles$2 })] }))] })));
});
TextArea.displayName = 'TextArea';

var Select = forwardRef(function (props, ref) {
    var id = props.id, state = props.state, defaultOption = props.defaultOption, _a = props.size, size = _a === void 0 ? 'medium' : _a, icon = props.icon, className = props.className, options = props.options, rest = __rest(props, ["id", "state", "defaultOption", "size", "icon", "className", "options"]);
    var fieldClassNames = getClasses(styles$3, ['form-field', state, size], className);
    return (jsxs("div", __assign({ className: fieldClassNames }, { children: [jsxs("select", __assign({ ref: ref, id: id, className: getClasses(common, 'form-input'), disabled: state === 'disabled' }, rest, { children: [defaultOption && (jsx("option", __assign({ value: "select-option", disabled: true }, { children: defaultOption }))), options.map(function (_a, i) {
                        var value = _a.value, label = _a.label;
                        return (jsx("option", __assign({ value: value }, { children: label }), i));
                    })] })), icon && jsx("span", __assign({ className: getClasses(common, 'form-icon') }, { children: icon })), jsx(StateIcon, { state: state, size: size }), jsx("span", __assign({ className: getClasses(common, ['form-icon', 'select-icon']) }, { children: jsx(CaretDown$1, {}) }))] })));
});
Select.displayName = 'Select';

var SelectField = forwardRef(function (props, ref) {
    var id = props.id, _a = props.label, label = _a === void 0 ? '' : _a, state = props.state, _b = props.hint, hint = _b === void 0 ? '' : _b, className = props.className, fieldClassName = props.fieldClassName, rest = __rest(props, ["id", "label", "state", "hint", "className", "fieldClassName"]);
    return (jsx(FieldContainer, __assign({ id: id, label: label, state: state, hint: hint, className: className }, { children: jsx(Select, __assign({ ref: ref, id: id, className: fieldClassName, state: state }, rest)) })));
});
SelectField.displayName = 'SelectField';

var SelectGroup = forwardRef(function (props, ref) {
    var id = props.id, _a = props.label, label = _a === void 0 ? '' : _a, state = props.state, size = props.size, _b = props.hint, hint = _b === void 0 ? '' : _b, _c = props.adornmentPosition, adornmentPosition = _c === void 0 ? 'end' : _c, _d = props.adornmentText, adornmentText = _d === void 0 ? '' : _d, adornmentIcon = props.adornmentIcon, className = props.className, fieldClassName = props.fieldClassName, rest = __rest(props, ["id", "label", "state", "size", "hint", "adornmentPosition", "adornmentText", "adornmentIcon", "className", "fieldClassName"]);
    return (jsx(InputGroupContainer, __assign({ id: id, label: label, state: state, size: size, hint: hint, className: className, adornmentPosition: adornmentPosition, adornmentText: adornmentText, adornmentIcon: adornmentIcon }, { children: jsx(Select, __assign({ ref: ref, id: id, state: state, size: size, className: fieldClassName }, rest)) })));
});
SelectGroup.displayName = 'SelectGroup';

var css_248z$1 = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__form-control___YNS73{align-items:center;display:flex;gap:var(--form-check-radio-gap)}.gds__form-control___YNS73 .gds__form-label___EvKUE{font:var(--form-check-radio-label);margin:0}.gds__form-control___YNS73 input[type=checkbox],.gds__form-control___YNS73 input[type=radio]{appearance:none;background:var(--form-background-color);border:1px solid var(--form-border-color);font:inherit;height:var(--form-check-radio-size-default);margin:0;outline:none;width:var(--form-check-radio-size-default)}.gds__form-control___YNS73 input[type=radio]{border-radius:50%;transition:border .12s ease-in-out}.gds__form-control___YNS73 input[type=radio]:checked{border-color:var(--form-check-radio-default);border-width:var(--form-check-radio-size-inside)}.gds__form-control___YNS73 input[type=radio]:checked:hover{border-color:var(--form-check-radio-hover)}.gds__form-control___YNS73 input[type=radio]:checked:disabled{background:var(--form-disabled-input-color);border-color:var(--form-disabled-border-color)}.gds__form-control___YNS73 input[type=checkbox]:not(:checked).gds__error___Anjwi,.gds__form-control___YNS73 input[type=radio]:not(:checked).gds__error___Anjwi{background:var(--form-background-color);border-color:var(--form-error-border-color)}.gds__form-control___YNS73 input[type=checkbox]{border-radius:var(--form-input-border-radius);transition:background-color .12s ease-in-out}.gds__form-control___YNS73 input[type=checkbox]:checked{background:var(--form-check-radio-default);border-color:var(--form-check-radio-default);font-size:var(--form-check-radio-size-default)}.gds__form-control___YNS73 .gds__form-control-inner___w4CM4{display:inline-flex;position:relative}.gds__form-control___YNS73 .gds__form-control-icon___6-smA{align-items:center;color:var(--form-background-color);display:none;inset:0;justify-content:center;position:absolute}.gds__form-control___YNS73 input[type=checkbox]:checked+.gds__form-control-icon___6-smA{display:flex}.gds__form-control___YNS73 input[type=checkbox]:checked:hover{background:var(--form-check-radio-hover);border-color:var(--form-check-radio-hover)}.gds__form-control___YNS73 input[type=checkbox]:checked:disabled{background:var(--form-disabled-border-color);border-color:var(--form-disabled-border-color)}.gds__form-control___YNS73 input[type=checkbox]:disabled:before{color:var(--form-disabled-input-color)}.gds__form-control___YNS73 input:active,.gds__form-control___YNS73 input:focus,.gds__form-control___YNS73 input:focus-visible,.gds__form-control___YNS73 input:focus-within{border-color:var(--form-focus-border-color)}";
var styles$1 = {"form-control":"gds__form-control___YNS73","form-label":"gds__form-label___EvKUE gds__form-label___Q5gAp","error":"gds__error___Anjwi","form-control-inner":"gds__form-control-inner___w4CM4","form-control-icon":"gds__form-control-icon___6-smA"};
styleInject(css_248z$1);

var ChoiceInput = forwardRef(function (props, ref) {
    var id = props.id, state = props.state, type = props.type, hint = props.hint, label = props.label, className = props.className, rest = __rest(props, ["id", "state", "type", "hint", "label", "className"]);
    var containerClassNames = getClasses(common, 'form-field-row', className);
    var labelClassNames = getClasses(styles$1, 'form-label', state);
    var helperClassNames = getClasses(common, 'form-hint', state);
    return (jsxs("div", __assign({ className: containerClassNames }, { children: [jsxs("div", __assign({ className: getClasses(styles$1, 'form-control') }, { children: [jsxs("div", __assign({ className: getClasses(styles$1, 'form-control-inner') }, { children: [jsx("input", __assign({ ref: ref, id: id, type: type, disabled: state === 'disabled', className: getClasses(styles$1, state) }, rest)), type === 'checkbox' && (jsx("span", __assign({ className: getClasses(styles$1, 'form-control-icon') }, { children: jsx(Check$1, {}) })))] })), jsx("label", __assign({ htmlFor: id, className: labelClassNames }, { children: label }))] })), hint && jsx("span", __assign({ className: helperClassNames }, { children: hint }))] })));
});
ChoiceInput.displayName = 'ChoiceInput';

var css_248z = ".gds__form-field-row___NxqOE{margin-bottom:var(--margin-2)}.gds__form-label___Q5gAp{color:var(--form-label-color);display:block;font:var(--form-input-text-label);margin-bottom:var(--form-input-gap);max-width:fit-content}.gds__form-label___Q5gAp.gds__disabled___ETKma{color:var(--form-disabled-label-color)}.gds__form-input___8xTbi{appearance:none;background:inherit;border:none;color:inherit;display:block;flex:1;font:inherit;outline:none;padding:0}.gds__form-input___8xTbi::placeholder{color:var(--form-placeholder-color)}.gds__form-field___8CpBM{align-items:center;background:var(--form-background-color);border-color:var(--form-border-color);border-radius:var(--form-input-border-radius);border-style:solid;border-width:var(--form-input-border-width);color:var(--form-input-color);display:flex;flex-direction:row;font:var(--form-input-text-medium);gap:var(--form-input-text-gap);margin:0;overflow:hidden;padding:var(--form-input-medium-padding-y) var(--form-input-medium-padding-x);position:relative;width:100%}.gds__form-field___8CpBM:active,.gds__form-field___8CpBM:focus,.gds__form-field___8CpBM:focus-visible,.gds__form-field___8CpBM:focus-within{border-color:var(--form-focus-border-color)}.gds__form-field___8CpBM.gds__small___FDi8W{font:var(--form-input-text-small);padding:var(--form-input-small-padding-y) var(--form-input-small-padding-x)}.gds__form-field___8CpBM.gds__large___Xq6GZ{font:var(--form-input-text-large);padding:var(--form-input-large-padding-y) var(--form-input-large-padding-x)}.gds__form-field___8CpBM .gds__form-icon___sBJD6{align-items:center;align-self:center;background:inherit;color:var(--form-icon-color);display:flex;justify-content:center}.gds__form-field___8CpBM.gds__error___kzIwN{border-color:var(--form-error-border-color)}.gds__form-field___8CpBM.gds__error___kzIwN .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-error-icon-color)}.gds__form-field___8CpBM.gds__success___uKsIL .gds__form-icon___sBJD6:not(.gds__select-icon___cG8xd){color:var(--form-success-icon-color)}.gds__form-field___8CpBM.gds__disabled___ETKma{background:var(--form-disabled-background-color);border-color:var(--form-disabled-border-color);color:var(--form-disabled-input-color)}.gds__form-field___8CpBM.gds__disabled___ETKma .gds__form-icon___sBJD6{color:var(--form-disabled-icon-color)}.gds__form-hint___fX4e9{color:var(--form-hint-text-color);display:block;font:var(--form-hint-text);margin-top:var(--form-input-gap)}.gds__form-hint___fX4e9.gds__disabled___ETKma{color:var(--form-disabled-hint-color)}.gds__form-hint___fX4e9.gds__error___kzIwN{color:var(--form-error-hint-text)}.gds__form-label-wrap___zU6W3{align-items:baseline;display:flex;justify-content:space-between;line-height:1.5;margin-bottom:var(--form-input-gap)}.gds__form-label-wrap___zU6W3 .gds__form-label___Q5gAp{margin:0}@import \"common.module.css\";.gds__pin-field___7t5U8{display:flex;gap:var(--margin-3)}.gds__pin-field___7t5U8 .gds__form-input___luFZ9{flex:none;height:100%;text-align:center;width:100%}.gds__pin-field___7t5U8 .gds__form-field___YPWeD{height:var(--form-pin-size-default);padding:var(--form-input-small-padding-y);text-align:center;width:var(--form-pin-size-default)}.gds__pin-field___7t5U8.gds__small___zCZge .gds__form-field___YPWeD{height:var(--form-pin-size-small);width:var(--form-pin-size-small)}.gds__pin-field___7t5U8.gds__large___8J-N7 .gds__form-field___YPWeD{height:var(--form-pin-size-large);width:var(--form-pin-size-large)}";
var styles = {"pin-field":"gds__pin-field___7t5U8","form-input":"gds__form-input___luFZ9 gds__form-input___8xTbi","form-field":"gds__form-field___YPWeD gds__form-field___8CpBM","error":"gds__error___WV8vF gds__error___kzIwN","disabled":"gds__disabled___Wkeae gds__disabled___ETKma","small":"gds__small___zCZge","large":"gds__large___8J-N7"};
styleInject(css_248z);

var PinField = function (_a) {
    var label = _a.label, value = _a.value, _b = _a.length, length = _b === void 0 ? 4 : _b, state = _a.state, size = _a.size, _c = _a.secret, secret = _c === void 0 ? false : _c, _d = _a.autoFocus, autoFocus = _d === void 0 ? false : _d, _e = _a.pattern, pattern = _e === void 0 ? DEFAULT_PATTERN : _e, className = _a.className, onComplete = _a.onComplete;
    var containerClassNames = getClasses(styles, ['pin-field', size], className);
    var fieldClassNames = getClasses(styles, ['form-field', state]);
    var labelClassNames = getClasses(common, ['form-label', state]);
    var _f = useState(function () {
        return Array.from({ length: length }).map(function (_, i) { return (value === null || value === void 0 ? void 0 : value.toString()[i]) || ''; });
    }), values = _f[0], setValues = _f[1];
    var fields = usePinHook({
        values: values,
        autoFocus: autoFocus,
        secret: secret,
        pattern: pattern,
        state: state,
        onChange: function (v) { return setValues(v); },
        onComplete: onComplete
    });
    return (jsxs("div", __assign({ className: getClasses(common, 'form-field-row') }, { children: [label && jsx("label", __assign({ className: labelClassNames }, { children: label })), jsx("div", __assign({ className: containerClassNames }, { children: fields.map(function (fieldProps, index) { return (jsx("div", __assign({ className: fieldClassNames }, { children: jsx("input", __assign({ className: getClasses(styles, 'form-input') }, fieldProps)) }), index)); }) }))] })));
};
PinField.displayName = 'PinField';
var usePinHook = function (_a) {
    var _b = _a === void 0 ? {} : _a, values = _b.values, autoFocus = _b.autoFocus, secret = _b.secret, state = _b.state, pattern = _b.pattern, onChangeProp = _b.onChange, onComplete = _b.onComplete;
    var disabled = state === 'disabled';
    var fieldRefs = useRef(Array(values.length).fill(null));
    var setFocus = useCallback(function (index) {
        var _a;
        if (index === void 0) { index = 0; }
        (_a = fieldRefs.current[index]) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    useEffect(function () {
        if (autoFocus)
            setFocus();
    }, [autoFocus, setFocus]);
    var setFieldRef = useCallback(function (index) { return function (ref) {
        fieldRefs.current[index] = ref;
    }; }, []);
    var onChange = useCallback(function (index) { return function (event) {
        var value = event.target.value;
        value = value.trim();
        if (!pattern.test(value))
            return;
        var nextValues = values.slice();
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
    }; }, [pattern, values, onChangeProp, onComplete, setFocus]);
    var onKeyDown = useCallback(function (index) { return function (event) {
        if (event.key === 'Backspace' && !values[index] && index) {
            setFocus(index - 1);
        }
    }; }, [values, setFocus]);
    var fields = values.map(function (value, index) { return (__assign({ ref: setFieldRef(index), value: value, disabled: disabled, autoComplete: 'off', maxLength: 1, type: secret ? 'password' : 'text' }, (!disabled && {
        onChange: onChange(index),
        onKeyDown: onKeyDown(index)
    }))); });
    return fields;
};
var DEFAULT_PATTERN = /.*/;

export { Button, ChoiceInput, Input, InputGroup, Modal, PinField, Select, SelectField, SelectGroup, TextArea, TextField };
//# sourceMappingURL=index.js.map
