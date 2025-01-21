/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 757:
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(594),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(192);
} else {}


/***/ }),

/***/ 594:
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ 669:
/***/ ((module) => {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ../node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_namespaceObject = {};
__webpack_require__.r(NativeTypes_namespaceObject);
__webpack_require__.d(NativeTypes_namespaceObject, {
  FILE: () => (FILE),
  HTML: () => (HTML),
  TEXT: () => (TEXT),
  URL: () => (NativeTypes_URL)
});

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(594);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
;// external "ReactDOM"
const external_ReactDOM_namespaceObject = ReactDOM;
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_namespaceObject);
;// ./components/Button.coffee
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Button;

Button = /*#__PURE__*/function (_React$Component) {
  function Button() {
    _classCallCheck(this, Button);
    return _callSuper(this, Button, arguments);
  }
  _inherits(Button, _React$Component);
  return _createClass(Button, [{
    key: "render",
    value:
    /*
     * The button component renders a single button
     */
    function render() {
      /*
       * Render the Button component
       */
      return /*#__PURE__*/external_React_default().createElement("button", _extends({
        id: this.props.id,
        title: this.props.help || this.props.title,
        name: this.props.name,
        url: this.props.url,
        onClick: this.props.onClick,
        className: this.props.className,
        disabled: this.props.disabled
      }, this.props.attrs), /*#__PURE__*/external_React_default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: this.props.title
        }
      }), this.props.badge && /*#__PURE__*/external_React_default().createElement("span", {
        className: "badge badge-light",
        style: {
          marginLeft: "0.25em"
        }
      }, this.props.badge));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Button_coffee = (Button);
;// ./components/Constants.js
var ItemTypes = {
  ROW: "row"
};
var CONFIRM_TRANSITION_IDS = ["cancel", "close", "deactivate", "invalidate", "reinstate", "reject", "remove", "remove", "retest", "retract", "unassign"];
;// ./components/ButtonBar.coffee
/* provided dependency */ var $ = __webpack_require__(669);
function ButtonBar_coffee_typeof(o) { "@babel/helpers - typeof"; return ButtonBar_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ButtonBar_coffee_typeof(o); }
function ButtonBar_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function ButtonBar_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ButtonBar_coffee_toPropertyKey(o.key), o); } }
function ButtonBar_coffee_createClass(e, r, t) { return r && ButtonBar_coffee_defineProperties(e.prototype, r), t && ButtonBar_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ButtonBar_coffee_toPropertyKey(t) { var i = ButtonBar_coffee_toPrimitive(t, "string"); return "symbol" == ButtonBar_coffee_typeof(i) ? i : i + ""; }
function ButtonBar_coffee_toPrimitive(t, r) { if ("object" != ButtonBar_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ButtonBar_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ButtonBar_coffee_callSuper(t, o, e) { return o = ButtonBar_coffee_getPrototypeOf(o), ButtonBar_coffee_possibleConstructorReturn(t, ButtonBar_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], ButtonBar_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ButtonBar_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == ButtonBar_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return ButtonBar_coffee_assertThisInitialized(t); }
function ButtonBar_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function ButtonBar_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ButtonBar_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ButtonBar_coffee_getPrototypeOf(t) { return ButtonBar_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, ButtonBar_coffee_getPrototypeOf(t); }
function ButtonBar_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ButtonBar_coffee_setPrototypeOf(t, e); }
function ButtonBar_coffee_setPrototypeOf(t, e) { return ButtonBar_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, ButtonBar_coffee_setPrototypeOf(t, e); }
var ButtonBar,
  indexOf = [].indexOf;



ButtonBar = /*#__PURE__*/function (_React$Component) {
  function ButtonBar(props) {
    var _this;
    ButtonBar_coffee_classCallCheck(this, ButtonBar);
    _this = ButtonBar_coffee_callSuper(this, ButtonBar, [props]);
    // Bind eventhandlers to local context
    _this.on_ajax_save_button_click = _this.on_ajax_save_button_click.bind(_this);
    _this.on_transition_button_click = _this.on_transition_button_click.bind(_this);
    _this.css_mapping = {
      // default buttons
      "reassign": "btn-secondary",
      "duplicate": "btn-secondary",
      "close": "btn-secondary",
      // blue buttons
      "assign": "btn-secondary",
      "receive": "btn-primary",
      "open": "btn-primary",
      "verify": "btn-primary",
      "retest": "btn-primary",
      // green buttons
      "activate": "btn-success",
      "prepublish": "btn-success",
      "publish": "btn-success",
      "republish": "btn-success",
      "submit": "btn-success",
      // orange buttons
      "unassign": "btn-warning",
      // red buttons
      "cancel": "btn-danger",
      "deactivate": "btn-danger",
      "invalidate": "btn-danger",
      "reject": "btn-danger",
      "retract": "btn-danger",
      "remove": "btn-danger"
    };
    return _this;
  }
  ButtonBar_coffee_inherits(ButtonBar, _React$Component);
  return ButtonBar_coffee_createClass(ButtonBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // N.B. This needs jQuery.js and bootstrap.js injected from the outer scope
      //      -> see webpack.config.js externals

      // Not sure if hooking this event handler in `componentDidUpdate` always
      // intercepts correctly *before* the bound `onClick` event handler fires.

      // http://bootstrap-confirmation.js.org/
      return $("[data-toggle=confirmation]").confirmation({
        rootSelector: "[data-toggle=confirmation]",
        btnOkLabel: _t("Yes"),
        btnOkClass: "btn btn-outline-primary",
        btnOkIconClass: "fas fa-check-circle mr-1",
        btnCancelLabel: _t("No"),
        btnCancelClass: "btn btn-outline-secondary",
        btnCancelIconClass: "fas fa-circle mr-1",
        container: "body",
        singleton: true
      });
    }
  }, {
    key: "get_button_css",
    value: function get_button_css(id) {
      var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var additional_cls, cls, transition_cls;
      // calculate the button CSS
      cls = "btn btn-sm mr-1 mb-1";
      // append additional button styles
      additional_cls = this.css_mapping[id];
      transition_cls = transition.css_class;
      if (additional_cls) {
        cls += " ".concat(additional_cls);
      } else if (transition_cls != null) {
        cls += " ".concat(transition_cls);
      } else {
        cls += " btn-outline-secondary";
      }
      return cls;
    }
  }, {
    key: "on_ajax_save_button_click",
    value: function on_ajax_save_button_click(event) {
      // prevent form submit, because we want to handle that explicitly
      event.preventDefault();
      // call the parent event handler to save
      if (this.props.on_ajax_save_button_click) {
        return this.props.on_ajax_save_button_click();
      }
    }
  }, {
    key: "on_transition_button_click",
    value: function on_transition_button_click(event) {
      var action, el, url;
      // prevent form submit, because we want to handle that explicitly
      event.preventDefault();
      // extract the action ID
      el = event.currentTarget;
      // extract the transition action and the url of the button
      action = el.getAttribute("id");
      url = el.getAttribute("url");
      // call the parent event handler to perform the transition
      if (this.props.on_transition_button_click) {
        return this.props.on_transition_button_click(action, url);
      }
    }
  }, {
    key: "build_buttons",
    value: function build_buttons() {
      var attrs, btn_id, buttons, cls, confirm_message, confirm_messages, help, i, id, len, ref, review_state_confirm_transitions, title, transition, url;
      buttons = [];
      // Add a clear button if the select column is rendered
      if (this.props.show_select_column) {
        if (this.props.transitions.length > 0) {
          buttons.push(/*#__PURE__*/external_React_default().createElement("button", {
            key: "clear",
            className: "btn btn-outline-secondary btn-sm mb-1 mr-1",
            title: _t("Clear selection"),
            onClick: this.on_transition_button_click,
            id: "clear_selection"
          }, /*#__PURE__*/external_React_default().createElement("i", {
            className: "fas fa-circle-notch"
          })));
        }
      }
      // Add an Ajax save button
      if (this.props.show_ajax_save) {
        buttons.push(/*#__PURE__*/external_React_default().createElement("button", {
          key: "ajax-save",
          className: "btn btn-primary btn-sm mb-1 mr-1",
          onClick: this.on_ajax_save_button_click,
          title: this.props.ajax_save_button_title,
          id: "ajax_save_selection"
        }, this.props.ajax_save_button_title, " ", /*#__PURE__*/external_React_default().createElement("i", {
          className: "fas fa-save"
        })));
      }
      ref = this.props.transitions;
      // build the transition buttons
      for (i = 0, len = ref.length; i < len; i++) {
        transition = ref[i];
        id = transition.id;
        url = transition.url;
        title = _t(transition.title);
        help = _t(transition.help);
        cls = this.get_button_css(id, transition);
        btn_id = "".concat(id, "_transition");
        // append custom css class
        if (transition.css_class) {
          cls += " ".concat(transition.css_class);
        }
        // each review_state item may also define a list of confirm transitions
        review_state_confirm_transitions = this.props.review_state.confirm_transitions || [];
        // Add bootstrap-confirmation data toggle
        // http://bootstrap-confirmation.js.org/#options
        attrs = transition.attrs || {};
        if (indexOf.call(CONFIRM_TRANSITION_IDS, id) >= 0 || indexOf.call(review_state_confirm_transitions, id) >= 0) {
          attrs["data-toggle"] = "confirmation";
          attrs["data-title"] = "".concat(title, "?");
          confirm_messages = this.props.review_state.confirm_messages || {};
          confirm_message = _t(confirm_messages[id]);
          if (confirm_message) {
            attrs["data-content"] = "".concat(confirm_message);
          }
        }
        buttons.push(/*#__PURE__*/external_React_default().createElement(Button_coffee, {
          key: transition.id,
          id: btn_id,
          title: title,
          help: help,
          url: url,
          className: cls,
          badge: this.props.selected_uids.length,
          onClick: this.on_transition_button_click,
          disabled: this.props.lock_buttons,
          attrs: attrs
        }));
      }
      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.selected_uids.length === 0) {
        return null;
      }
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "".concat(this.props.className)
      }, this.build_buttons());
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const ButtonBar_coffee = (ButtonBar);
;// ./components/FilterBar.coffee
function FilterBar_coffee_typeof(o) { "@babel/helpers - typeof"; return FilterBar_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, FilterBar_coffee_typeof(o); }
function FilterBar_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function FilterBar_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, FilterBar_coffee_toPropertyKey(o.key), o); } }
function FilterBar_coffee_createClass(e, r, t) { return r && FilterBar_coffee_defineProperties(e.prototype, r), t && FilterBar_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function FilterBar_coffee_toPropertyKey(t) { var i = FilterBar_coffee_toPrimitive(t, "string"); return "symbol" == FilterBar_coffee_typeof(i) ? i : i + ""; }
function FilterBar_coffee_toPrimitive(t, r) { if ("object" != FilterBar_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != FilterBar_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function FilterBar_coffee_callSuper(t, o, e) { return o = FilterBar_coffee_getPrototypeOf(o), FilterBar_coffee_possibleConstructorReturn(t, FilterBar_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], FilterBar_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function FilterBar_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == FilterBar_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return FilterBar_coffee_assertThisInitialized(t); }
function FilterBar_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function FilterBar_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (FilterBar_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function FilterBar_coffee_getPrototypeOf(t) { return FilterBar_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, FilterBar_coffee_getPrototypeOf(t); }
function FilterBar_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && FilterBar_coffee_setPrototypeOf(t, e); }
function FilterBar_coffee_setPrototypeOf(t, e) { return FilterBar_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, FilterBar_coffee_setPrototypeOf(t, e); }
var FilterBar;


FilterBar = /*#__PURE__*/function (_React$Component) {
  /*
   * The filter component provides workflow filter buttons
   */
  function FilterBar(props) {
    var _this;
    FilterBar_coffee_classCallCheck(this, FilterBar);
    _this = FilterBar_coffee_callSuper(this, FilterBar, [props]);
    _this.on_filter_button_clicked = _this.on_filter_button_clicked.bind(_this);
    return _this;
  }
  FilterBar_coffee_inherits(FilterBar, _React$Component);
  return FilterBar_coffee_createClass(FilterBar, [{
    key: "on_filter_button_clicked",
    value: function on_filter_button_clicked(event) {
      var el, id;
      /*
       * Event handler when a filter button was clicked
       */
      // prevent form submission
      event.preventDefault();
      el = event.currentTarget;
      id = el.id;
      // call the parent event handler with the state id
      return this.props.on_filter_button_clicked(id);
    }
  }, {
    key: "build_filter_buttons",
    value: function build_filter_buttons() {
      /*
       * Build filter buttons from the listing `review_states` list
       */
      var active_state, buttons, cls, key, ref, value;
      buttons = [];
      // the current active review state
      active_state = this.props.review_state;
      ref = this.props.review_states;
      for (key in ref) {
        value = ref[key];
        // button CSS
        cls = "nav-item btn btn-sm btn-outline-secondary mr-1 mb-1";
        if (value.id === active_state) {
          cls += " active";
        }
        buttons.push(/*#__PURE__*/external_React_default().createElement(Button_coffee, {
          key: value.id,
          onClick: this.on_filter_button_clicked,
          id: value.id,
          title: value.title,
          className: cls
        }));
      }
      // omit filter buttons if there is only one
      if (buttons.length === 1) {
        return [];
      }
      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: this.props.className
      }, this.build_filter_buttons());
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const FilterBar_coffee = (FilterBar);
;// ./api.coffee
function api_coffee_typeof(o) { "@babel/helpers - typeof"; return api_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, api_coffee_typeof(o); }
function api_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function api_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, api_coffee_toPropertyKey(o.key), o); } }
function api_coffee_createClass(e, r, t) { return r && api_coffee_defineProperties(e.prototype, r), t && api_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function api_coffee_toPropertyKey(t) { var i = api_coffee_toPrimitive(t, "string"); return "symbol" == api_coffee_typeof(i) ? i : i + ""; }
function api_coffee_toPrimitive(t, r) { if ("object" != api_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != api_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Listing API Module
 */
var ListingAPI;
ListingAPI = /*#__PURE__*/function () {
  function ListingAPI(props) {
    api_coffee_classCallCheck(this, ListingAPI);
    console.debug("ListingAPI::constructor");
    this.api_url = props.api_url;
    this.form_id = props.form_id || "list";
    this.on_api_error = props.on_api_error || function (response) {};
    return this;
  }
  return api_coffee_createClass(ListingAPI, [{
    key: "get_base_url",
    value: function get_base_url() {
      /*
       * Get the current base URL
       * @returns {string}
       */
      var base_url;
      base_url = document.body.dataset.baseUrl;
      if (base_url === void 0) {
        base_url = location.href.split("#")[0].split("?")[0];
      }
      return base_url;
    }
  }, {
    key: "get_api_url",
    value: function get_api_url(endpoint) {
      /*
       * Build API URL for the given endpoint
       * @param {string} endpoint
       * @returns {string}
       */
      return "".concat(this.api_url, "/").concat(endpoint).concat(location.search);
    }

    /**
     * Prefix the name with the form_id
     *
     * @param name {string} The name to be prefixed
     * @returns {string}
     */
  }, {
    key: "to_form_name",
    value: function to_form_name(name) {
      if (name.startsWith(this.form_id)) {
        return name;
      }
      return "".concat(this.form_id, "_").concat(name);
    }

    /**
     * Get the name parameter either from the search or hash location
     *
     * @param name {string} The parameter name
     * @returns {string}
     */
  }, {
    key: "get_url_parameter",
    value: function get_url_parameter(name) {
      var regex, results;
      name = this.to_form_name(name);
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      results = regex.exec(location.search) || regex.exec(location.hash);
      if (results === null) {
        return "";
      }
      return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    /**
     * parse the hash location from a given string
     *
     * @param s {string} string
     */
  }, {
    key: "parse_hash",
    value: function parse_hash(loc) {
      var hash, index, pairs;
      index = loc.indexOf("#");
      if (index === -1) {
        return [];
      }
      pairs = [];
      hash = loc.substring(index).replace("#", "").replace("?", "");
      return hash.split("&");
    }
  }, {
    key: "get_json",
    value: function get_json(endpoint, options) {
      var data, init, method, on_api_error, request, url;
      /*
       * Fetch Ajax API resource from the server
       * @param {string} endpoint
       * @param {object} options
       * @returns {Promise}
       */
      if (options == null) {
        options = {};
      }
      method = options.method || "POST";
      data = JSON.stringify(options.data) || "{}";
      on_api_error = this.on_api_error;
      url = this.get_api_url(endpoint);
      init = {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": this.get_csrf_token()
        },
        body: method === "POST" ? data : null,
        credentials: "include"
      };
      console.info("ListingAPI::fetch:endpoint=".concat(endpoint, " init="), init);
      request = new Request(url, init);
      return fetch(request).then(function (response) {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response;
      }).then(function (response) {
        return response.json();
      })["catch"](function (response) {
        on_api_error(response);
        return response;
      });
    }
  }, {
    key: "set_fields",
    value: function set_fields(data) {
      /*
       * Set values of multiple fields
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("set_fields", options);
    }
  }, {
    key: "do_action_for",
    value: function do_action_for(data) {
      /*
       * Transition multiple objects
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("do_action_for", options);
    }
  }, {
    key: "on_change",
    value: function on_change(data) {
      /*
       * Call the on_change handler to refresh the data
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("on_change", options);
    }
  }, {
    key: "query_folderitems",
    value: function query_folderitems(data) {
      /*
       * Query folderitems
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("query_folderitems", options);
    }
  }, {
    key: "fetch_children",
    value: function fetch_children(data) {
      /*
       * Query children
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("get_children", options);
    }
  }, {
    key: "fetch_folderitems",
    value: function fetch_folderitems(data) {
      /*
       * Fetch folder items
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("folderitems", options);
    }
  }, {
    key: "fetch_transitions",
    value: function fetch_transitions(data) {
      /*
       * Fetch possible transitions
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("transitions", options);
    }
  }, {
    key: "fetch_listing_config",
    value: function fetch_listing_config(data) {
      /*
       * Fetch the  current listing  configuration
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("listing_config", options);
    }
  }, {
    key: "get_csrf_token",
    value: function get_csrf_token() {
      /*
       * Get the plone.protect CSRF token
       * Note: The fields won't save w/o that token set
       */
      return document.querySelector("#protect-script").dataset.token;
    }
  }, {
    key: "combine_urls",
    value: function combine_urls(url1, url2) {
      var u1, u2;
      /*
       * Merge search params of two urls into one
       */
      if (url1 == null) {
        url1 = "";
      }
      if (url2 == null) {
        url2 = "";
      }
      if (url1.length === 0) {
        return url2;
      }
      u1 = new URL(url1);
      u2 = new URL(url2);
      // can not combine urls with different path names
      if (u1.pathname !== u2.pathname) {
        return u1.href;
      }
      u2.searchParams.forEach(function (value, key) {
        var new_value, old_value, splitted;
        old_value = u1.searchParams.get(key);
        // join values that differ
        if (old_value !== value) {
          splitted = old_value.split(",");
          new_value = splitted.concat(value.split(","));
          return u1.searchParams.set(key, new_value.join(","));
        } else {
          // set eventual missing keys
          return u1.searchParams.set(key, value);
        }
      });
      return u1.href;
    }
  }]);
}();
/* harmony default export */ const api_coffee = (ListingAPI);
;// ./components/Loader.coffee
function Loader_coffee_typeof(o) { "@babel/helpers - typeof"; return Loader_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Loader_coffee_typeof(o); }
function Loader_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Loader_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Loader_coffee_toPropertyKey(o.key), o); } }
function Loader_coffee_createClass(e, r, t) { return r && Loader_coffee_defineProperties(e.prototype, r), t && Loader_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Loader_coffee_toPropertyKey(t) { var i = Loader_coffee_toPrimitive(t, "string"); return "symbol" == Loader_coffee_typeof(i) ? i : i + ""; }
function Loader_coffee_toPrimitive(t, r) { if ("object" != Loader_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Loader_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Loader_coffee_callSuper(t, o, e) { return o = Loader_coffee_getPrototypeOf(o), Loader_coffee_possibleConstructorReturn(t, Loader_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Loader_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Loader_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == Loader_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Loader_coffee_assertThisInitialized(t); }
function Loader_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Loader_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Loader_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Loader_coffee_getPrototypeOf(t) { return Loader_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Loader_coffee_getPrototypeOf(t); }
function Loader_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Loader_coffee_setPrototypeOf(t, e); }
function Loader_coffee_setPrototypeOf(t, e) { return Loader_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Loader_coffee_setPrototypeOf(t, e); }
var Loader;


Loader = /*#__PURE__*/function (_React$Component) {
  function Loader() {
    Loader_coffee_classCallCheck(this, Loader);
    return Loader_coffee_callSuper(this, Loader, arguments);
  }
  Loader_coffee_inherits(Loader, _React$Component);
  return Loader_coffee_createClass(Loader, [{
    key: "render",
    value: function render() {
      if (!this.props.loading) {
        // render a placeholder to avoid vertical jumps
        return /*#__PURE__*/external_React_default().createElement("div", {
          className: "loader"
        });
      }
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "loader"
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_1"
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_2"
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_3"
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_4"
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Loader_coffee = (Loader);
;// ./components/Messages.coffee
function Messages_coffee_typeof(o) { "@babel/helpers - typeof"; return Messages_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Messages_coffee_typeof(o); }
function Messages_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Messages_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Messages_coffee_toPropertyKey(o.key), o); } }
function Messages_coffee_createClass(e, r, t) { return r && Messages_coffee_defineProperties(e.prototype, r), t && Messages_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Messages_coffee_toPropertyKey(t) { var i = Messages_coffee_toPrimitive(t, "string"); return "symbol" == Messages_coffee_typeof(i) ? i : i + ""; }
function Messages_coffee_toPrimitive(t, r) { if ("object" != Messages_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Messages_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Messages_coffee_callSuper(t, o, e) { return o = Messages_coffee_getPrototypeOf(o), Messages_coffee_possibleConstructorReturn(t, Messages_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Messages_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Messages_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == Messages_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Messages_coffee_assertThisInitialized(t); }
function Messages_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Messages_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Messages_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Messages_coffee_getPrototypeOf(t) { return Messages_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Messages_coffee_getPrototypeOf(t); }
function Messages_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Messages_coffee_setPrototypeOf(t, e); }
function Messages_coffee_setPrototypeOf(t, e) { return Messages_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Messages_coffee_setPrototypeOf(t, e); }
var Messages;

Messages = /*#__PURE__*/function (_React$Component) {
  function Messages(props) {
    var _this;
    Messages_coffee_classCallCheck(this, Messages);
    _this = Messages_coffee_callSuper(this, Messages, [props]);
    // Bind eventhandlers to local context
    _this.on_dismiss_message = _this.on_dismiss_message.bind(_this);
    return _this;
  }
  Messages_coffee_inherits(Messages, _React$Component);
  return Messages_coffee_createClass(Messages, [{
    key: "on_dismiss_message",
    value: function on_dismiss_message(event) {
      var index;
      event.preventDefault();
      index = event.currentTarget.getAttribute("index");
      // call the parent event handler
      if (this.props.on_dismiss_message) {
        return this.props.on_dismiss_message(parseInt(index));
      }
    }
  }, {
    key: "render_messages",
    value: function render_messages() {
      var me, messages;
      messages = [];
      me = this;
      this.props.messages.map(function (message, index) {
        return messages.push(/*#__PURE__*/external_React_default().createElement("div", {
          key: index,
          className: "alert alert-".concat(message.level || 'info')
        }, /*#__PURE__*/external_React_default().createElement("button", {
          onClick: me.on_dismiss_message,
          index: index,
          type: "button",
          className: "close",
          "aria-label": "Close"
        }, /*#__PURE__*/external_React_default().createElement("span", {
          "aria-hidden": "true"
        }, "\xD7")), message.title && /*#__PURE__*/external_React_default().createElement("h4", {
          className: "alert-heading"
        }, message.title), message.text && /*#__PURE__*/external_React_default().createElement("div", null, message.text), message.traceback && /*#__PURE__*/external_React_default().createElement("pre", null, message.traceback)));
      });
      return messages;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.messages) {
        return null;
      }
      return /*#__PURE__*/external_React_default().createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, this.render_messages());
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Messages_coffee = (Messages);
;// ./components/Modal.coffee
function Modal_coffee_typeof(o) { "@babel/helpers - typeof"; return Modal_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Modal_coffee_typeof(o); }
function Modal_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Modal_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Modal_coffee_toPropertyKey(o.key), o); } }
function Modal_coffee_createClass(e, r, t) { return r && Modal_coffee_defineProperties(e.prototype, r), t && Modal_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Modal_coffee_toPropertyKey(t) { var i = Modal_coffee_toPrimitive(t, "string"); return "symbol" == Modal_coffee_typeof(i) ? i : i + ""; }
function Modal_coffee_toPrimitive(t, r) { if ("object" != Modal_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Modal_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Modal_coffee_callSuper(t, o, e) { return o = Modal_coffee_getPrototypeOf(o), Modal_coffee_possibleConstructorReturn(t, Modal_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Modal_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Modal_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == Modal_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Modal_coffee_assertThisInitialized(t); }
function Modal_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Modal_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Modal_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Modal_coffee_getPrototypeOf(t) { return Modal_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Modal_coffee_getPrototypeOf(t); }
function Modal_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Modal_coffee_setPrototypeOf(t, e); }
function Modal_coffee_setPrototypeOf(t, e) { return Modal_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Modal_coffee_setPrototypeOf(t, e); }
var Modal;

Modal = /*#__PURE__*/function (_React$Component) {
  function Modal(props) {
    Modal_coffee_classCallCheck(this, Modal);
    return Modal_coffee_callSuper(this, Modal, [props]);
  }
  Modal_coffee_inherits(Modal, _React$Component);
  return Modal_coffee_createClass(Modal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        id: "".concat(this.props.id),
        className: "".concat(this.props.className),
        tabindex: "-1"
      });
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Modal_coffee = (Modal);
;// ./components/Pagination.coffee
function Pagination_coffee_typeof(o) { "@babel/helpers - typeof"; return Pagination_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Pagination_coffee_typeof(o); }
function Pagination_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Pagination_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Pagination_coffee_toPropertyKey(o.key), o); } }
function Pagination_coffee_createClass(e, r, t) { return r && Pagination_coffee_defineProperties(e.prototype, r), t && Pagination_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Pagination_coffee_toPropertyKey(t) { var i = Pagination_coffee_toPrimitive(t, "string"); return "symbol" == Pagination_coffee_typeof(i) ? i : i + ""; }
function Pagination_coffee_toPrimitive(t, r) { if ("object" != Pagination_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Pagination_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Pagination_coffee_callSuper(t, o, e) { return o = Pagination_coffee_getPrototypeOf(o), Pagination_coffee_possibleConstructorReturn(t, Pagination_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Pagination_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Pagination_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == Pagination_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Pagination_coffee_assertThisInitialized(t); }
function Pagination_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Pagination_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Pagination_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Pagination_coffee_getPrototypeOf(t) { return Pagination_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Pagination_coffee_getPrototypeOf(t); }
function Pagination_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Pagination_coffee_setPrototypeOf(t, e); }
function Pagination_coffee_setPrototypeOf(t, e) { return Pagination_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Pagination_coffee_setPrototypeOf(t, e); }
var Pagination;

Pagination = /*#__PURE__*/function (_React$Component) {
  /*
   * The pagination component renders table paging controls
   */
  function Pagination(props) {
    var _this;
    Pagination_coffee_classCallCheck(this, Pagination);
    _this = Pagination_coffee_callSuper(this, Pagination, [props]);
    _this.state = {
      pagesize: _this.props.pagesize
    };
    // bind event handler to local context
    _this.on_show_more_click = _this.on_show_more_click.bind(_this);
    _this.on_pagesize_change = _this.on_pagesize_change.bind(_this);
    _this.on_export_click = _this.on_export_click.bind(_this);
    // create element references
    _this.pagesize_input = /*#__PURE__*/external_React_default().createRef();
    _this.show_more_button = /*#__PURE__*/external_React_default().createRef();
    _this.export_button = /*#__PURE__*/external_React_default().createRef();
    return _this;
  }
  Pagination_coffee_inherits(Pagination, _React$Component);
  return Pagination_coffee_createClass(Pagination, [{
    key: "on_show_more_click",
    value: function on_show_more_click(event) {
      var pagesize;
      /*
       * Event handler when the "Show more" button was clicked
       */
      // prevent form submission
      event.preventDefault();
      // parse the value of the pagesize input field
      pagesize = parseInt(this.pagesize_input.current.value);
      // minimum pagesize is 1
      if (!pagesize || pagesize < 1) {
        pagesize = 1;
      }
      // call the parent event handler
      return this.props.onShowMore(pagesize);
    }
  }, {
    key: "on_pagesize_change",
    value: function on_pagesize_change(event) {
      /*
       * Event handler when a manual pagesize was entered
       */
      var pagesize;
      pagesize = this.get_pagesize_input_value();
      // set the pagesize to the local state
      this.setState({
        pagesize: pagesize
      });
      // handle enter keypress
      if (event.which === 13) {
        // prevent form submission
        event.preventDefault();
        // call the parent event listener
        return this.props.onShowMore(pagesize);
      }
    }
  }, {
    key: "get_pagesize_input_value",
    value: function get_pagesize_input_value() {
      /*
       * Fetch the value of the pagesize input field
       */
      var pagesize;
      pagesize = parseInt(this.pagesize_input.current.value);
      if (!pagesize || pagesize < 1) {
        // minimum pagesize is 1
        pagesize = 1;
        // write sanitized value back to the field
        this.pagesize_input.current.value = pagesize;
      }
      return pagesize;
    }
  }, {
    key: "on_export_click",
    value: function on_export_click(event) {
      /*
       * Event handler when the "Export" button was clicked
       */
      // prevent form submission
      event.preventDefault();
      console.debug("Pagination::on_export_click");
      // call the parent event handler
      return this.props.onExport();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.count >= this.props.total) {
        return /*#__PURE__*/external_React_default().createElement("div", {
          id: this.props.id,
          className: this.props.className
        }, !this.props.show_export && /*#__PURE__*/external_React_default().createElement("div", {
          className: "text-right"
        }, this.props.count, " / ", this.props.total), this.props.show_export && /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group input-group-sm float-right"
        }, /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group-prepend"
        }, /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-text"
        }, this.props.count, " / ", this.props.total)), /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-append"
        }, /*#__PURE__*/external_React_default().createElement("button", {
          className: "btn btn-outline-secondary",
          ref: this.export_button,
          disabled: this.props.count === 0,
          onClick: this.on_export_click
        }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.export_button_title || "Export")))));
      } else {
        return /*#__PURE__*/external_React_default().createElement("div", {
          id: this.props.id,
          className: this.props.className
        }, /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group input-group-sm float-right"
        }, /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group-prepend"
        }, /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-text"
        }, this.props.count, " / ", this.props.total)), /*#__PURE__*/external_React_default().createElement("input", {
          type: "text",
          size: "3",
          defaultValue: this.state.pagesize,
          onChange: this.on_pagesize_change,
          onKeyPress: this.on_pagesize_change,
          ref: this.pagesize_input,
          disabled: this.props.count >= this.props.total,
          className: "form-control"
        }), /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-append"
        }, /*#__PURE__*/external_React_default().createElement("button", {
          className: "btn btn-outline-secondary",
          disabled: this.props.count >= this.props.total,
          ref: this.show_more_button,
          onClick: this.on_show_more_click
        }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.show_more_button_title || "Show more")), this.props.show_export && /*#__PURE__*/external_React_default().createElement("button", {
          className: "btn btn-outline-secondary",
          ref: this.export_button,
          disabled: this.props.count === 0,
          onClick: this.on_export_click
        }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.export_button_title || "Export")))));
      }
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Pagination_coffee = (Pagination);
;// ./components/SearchBox.coffee
function SearchBox_coffee_typeof(o) { "@babel/helpers - typeof"; return SearchBox_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, SearchBox_coffee_typeof(o); }
function SearchBox_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function SearchBox_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, SearchBox_coffee_toPropertyKey(o.key), o); } }
function SearchBox_coffee_createClass(e, r, t) { return r && SearchBox_coffee_defineProperties(e.prototype, r), t && SearchBox_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function SearchBox_coffee_toPropertyKey(t) { var i = SearchBox_coffee_toPrimitive(t, "string"); return "symbol" == SearchBox_coffee_typeof(i) ? i : i + ""; }
function SearchBox_coffee_toPrimitive(t, r) { if ("object" != SearchBox_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != SearchBox_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function SearchBox_coffee_callSuper(t, o, e) { return o = SearchBox_coffee_getPrototypeOf(o), SearchBox_coffee_possibleConstructorReturn(t, SearchBox_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], SearchBox_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function SearchBox_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == SearchBox_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return SearchBox_coffee_assertThisInitialized(t); }
function SearchBox_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function SearchBox_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (SearchBox_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function SearchBox_coffee_getPrototypeOf(t) { return SearchBox_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, SearchBox_coffee_getPrototypeOf(t); }
function SearchBox_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && SearchBox_coffee_setPrototypeOf(t, e); }
function SearchBox_coffee_setPrototypeOf(t, e) { return SearchBox_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, SearchBox_coffee_setPrototypeOf(t, e); }
var SearchBox;

SearchBox = /*#__PURE__*/function (_React$Component) {
  /*
   * This component provides a search box
   */
  function SearchBox(props) {
    var _this;
    SearchBox_coffee_classCallCheck(this, SearchBox);
    _this = SearchBox_coffee_callSuper(this, SearchBox, [props]);
    _this.on_search_field_keypress = _this.on_search_field_keypress.bind(_this);
    _this.on_search_button_click = _this.on_search_button_click.bind(_this);
    _this.on_clear_button_click = _this.on_clear_button_click.bind(_this);
    _this.search_input_field = /*#__PURE__*/external_React_default().createRef();
    return _this;
  }
  SearchBox_coffee_inherits(SearchBox, _React$Component);
  return SearchBox_coffee_createClass(SearchBox, [{
    key: "on_search_field_keypress",
    value: function on_search_field_keypress(event) {
      var value;
      /*
       * Event handler when a keypress was detected in the searchfield
       */
      // handle enter key
      if (event.which === 13) {
        // prevent form submission on enter
        event.preventDefault();
        // call the parent event handler with the current search value
        value = this.get_search_value();
        return this.props.on_search(value);
      }
    }
  }, {
    key: "on_search_button_click",
    value: function on_search_button_click(event) {
      var value;
      /*
       * Event handler when the search button was clicked
       */
      // prevent form submission
      event.preventDefault();
      // call the parent event handler with the current search value
      value = this.get_search_value();
      return this.props.on_search(value);
    }
  }, {
    key: "on_clear_button_click",
    value: function on_clear_button_click(event) {
      /*
       * Event handler when the clear button was clicked
       */
      // prevent form submission
      event.preventDefault();
      // flush the search field value
      this.search_input_field.current.value = "";
      // call the parent event handler with the current search value
      return this.props.on_search("");
    }
  }, {
    key: "get_search_value",
    value: function get_search_value() {
      /*
       * Return the value of the search field
       */
      var value;
      value = this.search_input_field.current.value;
      return value;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.show_search === false) {
        return null;
      }
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "input-group input-group-sm"
      }, /*#__PURE__*/external_React_default().createElement("input", {
        type: "text",
        autofocus: "true",
        className: "form-control",
        ref: this.search_input_field,
        defaultValue: this.props.filter,
        onKeyPress: this.on_search_field_keypress,
        placeholder: this.props.placeholder
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "input-group-append"
      }, /*#__PURE__*/external_React_default().createElement("button", {
        className: "btn btn-outline-secondary",
        onClick: this.on_clear_button_click
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-undo"
      })), /*#__PURE__*/external_React_default().createElement("button", {
        className: "btn btn-outline-secondary",
        onClick: this.on_search_button_click
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-search"
      }))));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const SearchBox_coffee = (SearchBox);
;// ./components/Checkbox.coffee
function Checkbox_coffee_typeof(o) { "@babel/helpers - typeof"; return Checkbox_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Checkbox_coffee_typeof(o); }
function Checkbox_coffee_extends() { return Checkbox_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Checkbox_coffee_extends.apply(null, arguments); }
function Checkbox_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Checkbox_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Checkbox_coffee_toPropertyKey(o.key), o); } }
function Checkbox_coffee_createClass(e, r, t) { return r && Checkbox_coffee_defineProperties(e.prototype, r), t && Checkbox_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Checkbox_coffee_toPropertyKey(t) { var i = Checkbox_coffee_toPrimitive(t, "string"); return "symbol" == Checkbox_coffee_typeof(i) ? i : i + ""; }
function Checkbox_coffee_toPrimitive(t, r) { if ("object" != Checkbox_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Checkbox_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Checkbox_coffee_callSuper(t, o, e) { return o = Checkbox_coffee_getPrototypeOf(o), Checkbox_coffee_possibleConstructorReturn(t, Checkbox_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Checkbox_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Checkbox_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == Checkbox_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Checkbox_coffee_assertThisInitialized(t); }
function Checkbox_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Checkbox_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Checkbox_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Checkbox_coffee_getPrototypeOf(t) { return Checkbox_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Checkbox_coffee_getPrototypeOf(t); }
function Checkbox_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Checkbox_coffee_setPrototypeOf(t, e); }
function Checkbox_coffee_setPrototypeOf(t, e) { return Checkbox_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Checkbox_coffee_setPrototypeOf(t, e); }
var Checkbox;

Checkbox = /*#__PURE__*/function (_React$Component) {
  /**
   * Checkbox Field for the Listing Table
   *
   * A checkbox field is identified by the column type "checkbox" in the listing
   * view, e.g.  `self.columns = {"Hidden": {"type": "checkbox"}, ... }`
   *
   */
  function Checkbox(props) {
    var _this;
    Checkbox_coffee_classCallCheck(this, Checkbox);
    _this = Checkbox_coffee_callSuper(this, Checkbox, [props]);
    // bind event handler to the current context
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * Event handler when the value changed of the checkbox
   * @param event {object} ReactJS event object
   */
  Checkbox_coffee_inherits(Checkbox, _React$Component);
  return Checkbox_coffee_createClass(Checkbox, [{
    key: "on_change",
    value: function on_change(event) {
      var checked, el, name, uid;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the checked status
      checked = el.checked;
      console.debug("Checkbox::on_change: checked=".concat(checked));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        this.props.update_editable_field(uid, name, checked, this.props.item);
      }
      // Call the *save* field handler (no blur event here necessary)
      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, checked, this.props.item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", Checkbox_coffee_extends({
        key: this.props.name,
        type: "checkbox",
        uid: this.props.uid,
        name: this.props.name,
        value: this.props.value,
        column_key: this.props.column_key,
        title: this.props.help || this.props.title,
        disabled: this.props.disabled,
        checked: this.props.checked,
        defaultChecked: this.props.defaultChecked,
        className: this.props.className,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Checkbox_coffee = (Checkbox);
;// ./components/TableHeaderCell.coffee
function TableHeaderCell_coffee_typeof(o) { "@babel/helpers - typeof"; return TableHeaderCell_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableHeaderCell_coffee_typeof(o); }
function TableHeaderCell_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableHeaderCell_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableHeaderCell_coffee_toPropertyKey(o.key), o); } }
function TableHeaderCell_coffee_createClass(e, r, t) { return r && TableHeaderCell_coffee_defineProperties(e.prototype, r), t && TableHeaderCell_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableHeaderCell_coffee_toPropertyKey(t) { var i = TableHeaderCell_coffee_toPrimitive(t, "string"); return "symbol" == TableHeaderCell_coffee_typeof(i) ? i : i + ""; }
function TableHeaderCell_coffee_toPrimitive(t, r) { if ("object" != TableHeaderCell_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableHeaderCell_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableHeaderCell_coffee_callSuper(t, o, e) { return o = TableHeaderCell_coffee_getPrototypeOf(o), TableHeaderCell_coffee_possibleConstructorReturn(t, TableHeaderCell_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableHeaderCell_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableHeaderCell_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableHeaderCell_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableHeaderCell_coffee_assertThisInitialized(t); }
function TableHeaderCell_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableHeaderCell_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableHeaderCell_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableHeaderCell_coffee_getPrototypeOf(t) { return TableHeaderCell_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableHeaderCell_coffee_getPrototypeOf(t); }
function TableHeaderCell_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableHeaderCell_coffee_setPrototypeOf(t, e); }
function TableHeaderCell_coffee_setPrototypeOf(t, e) { return TableHeaderCell_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableHeaderCell_coffee_setPrototypeOf(t, e); }
var TableHeaderCell;

TableHeaderCell = /*#__PURE__*/function (_React$Component) {
  /*
   * The table header cell component renders a single header cell
   */
  function TableHeaderCell(props) {
    TableHeaderCell_coffee_classCallCheck(this, TableHeaderCell);
    return TableHeaderCell_coffee_callSuper(this, TableHeaderCell, [props]);
  }
  TableHeaderCell_coffee_inherits(TableHeaderCell, _React$Component);
  return TableHeaderCell_coffee_createClass(TableHeaderCell, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("th", {
        title: this.props.alt,
        index: this.props.index,
        sort_order: this.props.sort_order,
        className: this.props.className,
        onClick: this.props.onClick
      }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.title));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableHeaderCell_coffee = (TableHeaderCell);
;// ./components/TableHeaderRow.coffee
function TableHeaderRow_coffee_typeof(o) { "@babel/helpers - typeof"; return TableHeaderRow_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableHeaderRow_coffee_typeof(o); }
function TableHeaderRow_coffee_extends() { return TableHeaderRow_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TableHeaderRow_coffee_extends.apply(null, arguments); }
function TableHeaderRow_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableHeaderRow_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableHeaderRow_coffee_toPropertyKey(o.key), o); } }
function TableHeaderRow_coffee_createClass(e, r, t) { return r && TableHeaderRow_coffee_defineProperties(e.prototype, r), t && TableHeaderRow_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableHeaderRow_coffee_toPropertyKey(t) { var i = TableHeaderRow_coffee_toPrimitive(t, "string"); return "symbol" == TableHeaderRow_coffee_typeof(i) ? i : i + ""; }
function TableHeaderRow_coffee_toPrimitive(t, r) { if ("object" != TableHeaderRow_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableHeaderRow_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableHeaderRow_coffee_callSuper(t, o, e) { return o = TableHeaderRow_coffee_getPrototypeOf(o), TableHeaderRow_coffee_possibleConstructorReturn(t, TableHeaderRow_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableHeaderRow_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableHeaderRow_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableHeaderRow_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableHeaderRow_coffee_assertThisInitialized(t); }
function TableHeaderRow_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableHeaderRow_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableHeaderRow_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableHeaderRow_coffee_getPrototypeOf(t) { return TableHeaderRow_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableHeaderRow_coffee_getPrototypeOf(t); }
function TableHeaderRow_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableHeaderRow_coffee_setPrototypeOf(t, e); }
function TableHeaderRow_coffee_setPrototypeOf(t, e) { return TableHeaderRow_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableHeaderRow_coffee_setPrototypeOf(t, e); }
var TableHeaderRow,
  TableHeaderRow_coffee_indexOf = [].indexOf;



TableHeaderRow = /*#__PURE__*/function (_React$Component) {
  /*
   * The table header row component renders a single row with cells
   */
  function TableHeaderRow(props) {
    var _this;
    TableHeaderRow_coffee_classCallCheck(this, TableHeaderRow);
    _this = TableHeaderRow_coffee_callSuper(this, TableHeaderRow, [props]);
    _this.on_header_column_click = _this.on_header_column_click.bind(_this);
    return _this;
  }
  TableHeaderRow_coffee_inherits(TableHeaderRow, _React$Component);
  return TableHeaderRow_coffee_createClass(TableHeaderRow, [{
    key: "on_header_column_click",
    value: function on_header_column_click(event) {
      /*
       * Event handler when a header columns was clicked
       */
      var el, index, sort_order;
      el = event.currentTarget;
      index = el.getAttribute("index");
      sort_order = el.getAttribute("sort_order");
      if (!index) {
        return;
      }
      console.debug("HEADER CLICKED sort_on='".concat(index, "' sort_order=").concat(sort_order));
      // toggle the sort order if the clicked column was the active one
      if (TableHeaderRow_coffee_indexOf.call(el.classList, "active") >= 0) {
        if (sort_order === "ascending") {
          sort_order = "descending";
        } else {
          sort_order = "ascending";
        }
      }
      // call the parent event handler with the sort index and the sort order
      return this.props.on_header_column_click(index, sort_order);
    }
  }, {
    key: "is_required_column",
    value: function is_required_column(key) {
      var first_item, folderitems, required;
      /*
       * Check if the column is required
       */
      // XXX This is a workaround for a missing key within the column definition
      folderitems = this.props.folderitems || [];
      if (folderitems.length === 0) {
        return false;
      }
      first_item = folderitems[0];
      required = first_item.required || [];
      return TableHeaderRow_coffee_indexOf.call(required, key) >= 0;
    }
  }, {
    key: "is_sortable",
    value: function is_sortable(column, key) {
      /*
       * Check if the column is sortable
       */
      if (column.sortable === false) {
        return false;
      }
      if (column.index) {
        return true;
      }
      if (TableHeaderRow_coffee_indexOf.call(this.props.sortable_columns, key) >= 0) {
        return true;
      }
      return false;
    }
  }, {
    key: "build_cells",
    value: function build_cells() {
      /*
       * Build all cells for the row
       */
      var alt, cells, checkbox_name, checkbox_value, cls, column, i, index, is_sort_column, item, key, len, ref, required, show_select_all_checkbox, sort_on, sort_order, sortable, title;
      cells = [];
      item = this.props.item;
      checkbox_name = "select_all";
      checkbox_value = "all";
      // insert select column
      if (this.props.show_select_column) {
        show_select_all_checkbox = this.props.show_select_all_checkbox;
        cells.push(/*#__PURE__*/external_React_default().createElement("th", {
          className: "select-column",
          key: "select_all"
        }, show_select_all_checkbox && /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, {
          name: checkbox_name,
          value: checkbox_value,
          checked: this.props.all_items_selected,
          onChange: this.props.on_select_checkbox_checked
        })));
      }
      // insert row dnd column
      if (this.props.allow_row_reorder) {
        cells.push(/*#__PURE__*/external_React_default().createElement("th", {
          className: "dnd-column",
          key: "dnd"
        }));
      }
      ref = this.props.visible_columns;
      // insert table columns in the right order
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        // get the column object
        column = this.props.columns[key];
        // check if the key is in the sortable columns
        sortable = this.is_sortable(column, key);
        // sort index
        index = column.index || key;
        title = column.title;
        alt = column.alt || title;
        // sort_on is the current sort index/metadata
        sort_on = this.props.sort_on || "created";
        sort_order = this.props.sort_order || "ascending";
        // check if the current sort_on is the index of this column
        is_sort_column = index === sort_on;
        // check if the column is required
        required = this.is_required_column(key);
        cls = [key];
        if (sortable) {
          cls.push("sortable");
        }
        if (is_sort_column && sortable) {
          cls.push("active ".concat(sort_order));
        }
        if (required) {
          cls.push("required");
        }
        cls = cls.join(" ");
        cells.push(/*#__PURE__*/external_React_default().createElement(TableHeaderCell_coffee, TableHeaderRow_coffee_extends({
          key: key
        }, this.props, {
          title: title,
          alt: alt,
          index: index,
          sort_order: sort_order,
          className: cls,
          onClick: sortable ? this.on_header_column_click : void 0
        }))); // internal key // pass in all properties from the table component
      }
      return cells;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("tr", {
        onContextMenu: this.props.on_context_menu
      }, this.build_cells());
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableHeaderRow_coffee = (TableHeaderRow);
;// ./components/HiddenField.coffee
function HiddenField_coffee_typeof(o) { "@babel/helpers - typeof"; return HiddenField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, HiddenField_coffee_typeof(o); }
function HiddenField_coffee_extends() { return HiddenField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, HiddenField_coffee_extends.apply(null, arguments); }
function HiddenField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function HiddenField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, HiddenField_coffee_toPropertyKey(o.key), o); } }
function HiddenField_coffee_createClass(e, r, t) { return r && HiddenField_coffee_defineProperties(e.prototype, r), t && HiddenField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function HiddenField_coffee_toPropertyKey(t) { var i = HiddenField_coffee_toPrimitive(t, "string"); return "symbol" == HiddenField_coffee_typeof(i) ? i : i + ""; }
function HiddenField_coffee_toPrimitive(t, r) { if ("object" != HiddenField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != HiddenField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function HiddenField_coffee_callSuper(t, o, e) { return o = HiddenField_coffee_getPrototypeOf(o), HiddenField_coffee_possibleConstructorReturn(t, HiddenField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], HiddenField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function HiddenField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == HiddenField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return HiddenField_coffee_assertThisInitialized(t); }
function HiddenField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function HiddenField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (HiddenField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function HiddenField_coffee_getPrototypeOf(t) { return HiddenField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, HiddenField_coffee_getPrototypeOf(t); }
function HiddenField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && HiddenField_coffee_setPrototypeOf(t, e); }
function HiddenField_coffee_setPrototypeOf(t, e) { return HiddenField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, HiddenField_coffee_setPrototypeOf(t, e); }
var HiddenField;

HiddenField = /*#__PURE__*/function (_React$Component) {
  /**
   * Hidden Field for the Listing Table
   *
   * Render this field to ensure the value is sent to the server on form submission
   *
   */
  function HiddenField(props) {
    HiddenField_coffee_classCallCheck(this, HiddenField);
    return HiddenField_coffee_callSuper(this, HiddenField, [props]);
  }
  HiddenField_coffee_inherits(HiddenField, _React$Component);
  return HiddenField_coffee_createClass(HiddenField, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", HiddenField_coffee_extends({
        type: "hidden",
        uid: this.props.uid,
        name: this.props.name,
        value: this.props.value,
        column_key: this.props.column_key,
        className: this.props.className
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const HiddenField_coffee = (HiddenField);
;// ./components/MultiChoice.coffee
function MultiChoice_coffee_typeof(o) { "@babel/helpers - typeof"; return MultiChoice_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, MultiChoice_coffee_typeof(o); }
function MultiChoice_coffee_extends() { return MultiChoice_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, MultiChoice_coffee_extends.apply(null, arguments); }
function MultiChoice_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function MultiChoice_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, MultiChoice_coffee_toPropertyKey(o.key), o); } }
function MultiChoice_coffee_createClass(e, r, t) { return r && MultiChoice_coffee_defineProperties(e.prototype, r), t && MultiChoice_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function MultiChoice_coffee_toPropertyKey(t) { var i = MultiChoice_coffee_toPrimitive(t, "string"); return "symbol" == MultiChoice_coffee_typeof(i) ? i : i + ""; }
function MultiChoice_coffee_toPrimitive(t, r) { if ("object" != MultiChoice_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != MultiChoice_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function MultiChoice_coffee_callSuper(t, o, e) { return o = MultiChoice_coffee_getPrototypeOf(o), MultiChoice_coffee_possibleConstructorReturn(t, MultiChoice_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], MultiChoice_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function MultiChoice_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == MultiChoice_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return MultiChoice_coffee_assertThisInitialized(t); }
function MultiChoice_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function MultiChoice_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (MultiChoice_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function MultiChoice_coffee_getPrototypeOf(t) { return MultiChoice_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, MultiChoice_coffee_getPrototypeOf(t); }
function MultiChoice_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && MultiChoice_coffee_setPrototypeOf(t, e); }
function MultiChoice_coffee_setPrototypeOf(t, e) { return MultiChoice_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, MultiChoice_coffee_setPrototypeOf(t, e); }
var MultiChoice,
  MultiChoice_coffee_indexOf = [].indexOf;

MultiChoice = /*#__PURE__*/function (_React$Component) {
  /**
   * Multi-Choice Field for the Listing Table
   *
   * A multi choice field is identified by the column type "multichoice" in the
   * listing view, e.g.  `self.columns = {"Result": {"type": "multichoice"}, ... }`
   *
   */
  function MultiChoice(props) {
    var _this;
    MultiChoice_coffee_classCallCheck(this, MultiChoice);
    _this = MultiChoice_coffee_callSuper(this, MultiChoice, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue
    };
    // bind event handler to the current context
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * Event handler when the value changed of the select field
   * @param event {object} ReactJS event object
   */
  MultiChoice_coffee_inherits(MultiChoice, _React$Component);
  return MultiChoice_coffee_createClass(MultiChoice, [{
    key: "on_change",
    value: function on_change(event) {
      var checked, el, input, name, uid, ul, value;
      el = event.currentTarget;
      // Get the parent list wrapper
      ul = el.parentNode.parentNode;
      // Extract all checked items
      checked = ul.querySelectorAll("input[type='checkbox']:checked");
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Store the new values
      value = function () {
        var i, len, results;
        results = [];
        for (i = 0, len = checked.length; i < len; i++) {
          input = checked[i];
          results.push(input.value);
        }
        return results;
      }();
      this.setState({
        value: value
      });
      console.debug("MultiChoice::on_change: value=".concat(value));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }

    /*
     * Converts the value to an array
     */
  }, {
    key: "to_array",
    value: function to_array(value) {
      var parsed;
      if (!value) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      parsed = JSON.parse(value);
      if (!Array.isArray(parsed)) {
        // This might happen when a default value is set, e.g. 0
        return [parsed];
      }
      return parsed;
    }

    /**
     * Checkboxes list builder. Generates a list of checkboxes made of the
     * options passed-in. The values are the ids of the options to be selected
     * @param values {array} list of selected ResultValues
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ..., "ResultDescription": ...}
     */
  }, {
    key: "build_checkboxes",
    value: function build_checkboxes() {
      var checkboxes, description, i, len, option, ref, ref1, selected, title, value, values;
      checkboxes = [];
      // Convert the result to an array
      values = this.to_array(this.state.value);
      // filter out empties
      values = values.filter(function (value) {
        return value !== "";
      });
      // ensure safe comparison (strings)
      values = values.map(function (value) {
        return value.toString();
      });
      ref = this.props.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        value = option.ResultValue;
        title = option.ResultText;
        description = option.ResultDescription;
        selected = (ref1 = value.toString(), MultiChoice_coffee_indexOf.call(values, ref1) >= 0);
        checkboxes.push(/*#__PURE__*/external_React_default().createElement("li", {
          key: value
        }, /*#__PURE__*/external_React_default().createElement("input", MultiChoice_coffee_extends({
          type: "checkbox",
          defaultChecked: selected,
          uid: this.props.uid,
          name: this.props.name,
          value: value,
          onChange: this.props.onChange || this.on_change,
          column_key: this.props.column_key,
          title: description || this.props.help || this.props.title,
          tabIndex: this.props.tabIndex
        }, this.props.attrs)), " ", title));
      }
      return checkboxes;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: this.props.field_css || "multichoice"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("ul", {
        className: "list-unstyled"
      }, this.build_checkboxes()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const MultiChoice_coffee = (MultiChoice);
;// ./components/MultiSelect.coffee
function MultiSelect_coffee_typeof(o) { "@babel/helpers - typeof"; return MultiSelect_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, MultiSelect_coffee_typeof(o); }
function MultiSelect_coffee_extends() { return MultiSelect_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, MultiSelect_coffee_extends.apply(null, arguments); }
function MultiSelect_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function MultiSelect_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, MultiSelect_coffee_toPropertyKey(o.key), o); } }
function MultiSelect_coffee_createClass(e, r, t) { return r && MultiSelect_coffee_defineProperties(e.prototype, r), t && MultiSelect_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function MultiSelect_coffee_toPropertyKey(t) { var i = MultiSelect_coffee_toPrimitive(t, "string"); return "symbol" == MultiSelect_coffee_typeof(i) ? i : i + ""; }
function MultiSelect_coffee_toPrimitive(t, r) { if ("object" != MultiSelect_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != MultiSelect_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function MultiSelect_coffee_callSuper(t, o, e) { return o = MultiSelect_coffee_getPrototypeOf(o), MultiSelect_coffee_possibleConstructorReturn(t, MultiSelect_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], MultiSelect_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function MultiSelect_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == MultiSelect_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return MultiSelect_coffee_assertThisInitialized(t); }
function MultiSelect_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function MultiSelect_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (MultiSelect_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function MultiSelect_coffee_getPrototypeOf(t) { return MultiSelect_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, MultiSelect_coffee_getPrototypeOf(t); }
function MultiSelect_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && MultiSelect_coffee_setPrototypeOf(t, e); }
function MultiSelect_coffee_setPrototypeOf(t, e) { return MultiSelect_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, MultiSelect_coffee_setPrototypeOf(t, e); }
var MultiSelect,
  MultiSelect_coffee_indexOf = [].indexOf;

MultiSelect = /*#__PURE__*/function (_React$Component) {
  /**
   * MultiSelect Field for the Listing Table
   *
   * A multi select field is identified by the column type "multiselect" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "multiselect"}, ... }`
   *
   */
  function MultiSelect(props) {
    var _this;
    MultiSelect_coffee_classCallCheck(this, MultiSelect);
    _this = MultiSelect_coffee_callSuper(this, MultiSelect, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue
    };
    // bind event handler to the current context
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * Event handler when the value changed of the select field
   * @param event {object} ReactJS event object
   */
  MultiSelect_coffee_inherits(MultiSelect, _React$Component);
  return MultiSelect_coffee_createClass(MultiSelect, [{
    key: "on_change",
    value: function on_change(event) {
      var checked, el, input, name, uid, ul, value;
      el = event.currentTarget;
      // Get the parent list wrapper
      ul = el.parentNode.parentNode;
      // Extract all selected items
      checked = ul.querySelectorAll("select");
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Prepare a list of UIDs
      value = function () {
        var i, len, results;
        results = [];
        for (i = 0, len = checked.length; i < len; i++) {
          input = checked[i];
          results.push(input.value);
        }
        return results;
      }();
      // store the new value
      this.setState({
        value: value
      });
      console.debug("MultiSelect::on_change: name=".concat(name, " value=").concat(value));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Select options builder
     * @param selected_value the option to be selected
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ..., "ResultDescription": ...}
     * @param exclude_values {array} list of option values to exclude
     */
  }, {
    key: "build_options",
    value: function build_options(exclude_values) {
      var description, empties, i, len, option, options, props_options, title, value;
      options = [];
      // Possible options of the selection list
      props_options = this.props.options || [];
      // Exclude some options
      props_options = props_options.filter(function (option) {
        var ref;
        return ref = option.ResultValue.toString(), MultiSelect_coffee_indexOf.call(exclude_values, ref) < 0;
      });
      // Add an empty option to be displayed by default, but only when no empty
      // option does not exist yet
      empties = props_options.filter(function (option) {
        return option.ResultValue === "";
      });
      if (empties.length === 0) {
        props_options.splice(0, 0, {
          ResultValue: "",
          ResultText: ""
        });
      }
      // Add the options to the selection list
      for (i = 0, len = props_options.length; i < len; i++) {
        option = props_options[i];
        value = option.ResultValue;
        title = option.ResultText;
        description = option.ResultDescription;
        options.push(/*#__PURE__*/external_React_default().createElement("option", {
          key: value,
          description: description,
          value: value
        }, title));
      }
      return options;
    }

    /*
     * Converts the value to an array
     */
  }, {
    key: "to_array",
    value: function to_array(value) {
      var parsed;
      if (!value) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      parsed = JSON.parse(value);
      if (!Array.isArray(parsed)) {
        // This might happen when a default value is set, e.g. 0
        return [parsed];
      }
      return parsed;
    }

    /*
     * Selectors list builder. Generates a list with as many select elements as
     * values passed-in. Each selector contains all the options for selection,
     * with the option that matches with the value selected
     * @param values {array} list of selected ResultValues
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ..., "ResultDescription": ...}
     */
  }, {
    key: "build_selectors",
    value: function build_selectors() {
      var excluded, excluded_values, i, len, options, selected_value, selectors, values;
      // Convert the result to an array
      values = this.to_array(this.state.value);
      // filter out empties
      values = values.filter(function (value) {
        return value !== "";
      });
      excluded_values = [];
      if (this.props.duplicates) {
        // Duplicates allowed. Add an empty selector at the end
        values.push("");
      } else {
        // Values exclusion
        excluded_values = values;
        // Add an empty selector at the end, but only if there are still options
        // available for selection
        options = this.props.options || [];
        if (values.length < options.length) {
          values.push("");
        }
      }
      // Build the selectors
      selectors = [];
      for (i = 0, len = values.length; i < len; i++) {
        selected_value = values[i];
        console.log("MultiSelect::build_selectors:value='".concat(selected_value, "'"));
        excluded = excluded_values.filter(function (value) {
          return value !== selected_value;
        });
        selectors.push(/*#__PURE__*/external_React_default().createElement("li", {
          key: selected_value
        }, /*#__PURE__*/external_React_default().createElement("select", MultiSelect_coffee_extends({
          value: selected_value,
          uid: this.props.uid,
          name: this.props.name,
          title: this.props.help || this.props.title,
          onChange: this.props.onChange || this.on_change,
          column_key: this.props.column_key,
          className: this.props.className
        }, this.props.attrs), this.build_options(excluded))));
      }
      return selectors;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: this.props.field_css || "multiselect"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("ul", {
        className: "list-unstyled",
        tabIndex: this.props.tabIndex
      }, this.build_selectors()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const MultiSelect_coffee = (MultiSelect);
;// ./components/MultiValue.coffee
function MultiValue_coffee_typeof(o) { "@babel/helpers - typeof"; return MultiValue_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, MultiValue_coffee_typeof(o); }
function MultiValue_coffee_extends() { return MultiValue_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, MultiValue_coffee_extends.apply(null, arguments); }
function MultiValue_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function MultiValue_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, MultiValue_coffee_toPropertyKey(o.key), o); } }
function MultiValue_coffee_createClass(e, r, t) { return r && MultiValue_coffee_defineProperties(e.prototype, r), t && MultiValue_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function MultiValue_coffee_toPropertyKey(t) { var i = MultiValue_coffee_toPrimitive(t, "string"); return "symbol" == MultiValue_coffee_typeof(i) ? i : i + ""; }
function MultiValue_coffee_toPrimitive(t, r) { if ("object" != MultiValue_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != MultiValue_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function MultiValue_coffee_callSuper(t, o, e) { return o = MultiValue_coffee_getPrototypeOf(o), MultiValue_coffee_possibleConstructorReturn(t, MultiValue_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], MultiValue_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function MultiValue_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == MultiValue_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return MultiValue_coffee_assertThisInitialized(t); }
function MultiValue_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function MultiValue_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (MultiValue_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function MultiValue_coffee_getPrototypeOf(t) { return MultiValue_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, MultiValue_coffee_getPrototypeOf(t); }
function MultiValue_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && MultiValue_coffee_setPrototypeOf(t, e); }
function MultiValue_coffee_setPrototypeOf(t, e) { return MultiValue_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, MultiValue_coffee_setPrototypeOf(t, e); }
var MultiValue;

MultiValue = /*#__PURE__*/function (_React$Component) {
  /**
   * MultiValue Field for the Listing Table
   *
   * A multi value field is identified by the column type "multivalue" in the
   * listing view, e.g.  `self.columns = {"Result": {"type": "multivalue"}, ... }`
   *
   */
  function MultiValue(props) {
    var _this;
    MultiValue_coffee_classCallCheck(this, MultiValue);
    _this = MultiValue_coffee_callSuper(this, MultiValue, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue
    };
    // bind event handler to the current context
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * Event handler when the value changed of the field
   * @param event {object} ReactJS event object
   */
  MultiValue_coffee_inherits(MultiValue, _React$Component);
  return MultiValue_coffee_createClass(MultiValue, [{
    key: "on_change",
    value: function on_change(event) {
      var el, input, inputs, name, uid, ul, values;
      el = event.currentTarget;
      // Get the parent list wrapper
      ul = el.parentNode.parentNode;
      // Extract all input elements that store values
      inputs = ul.querySelectorAll("input");
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // The value to store is a list of values
      values = function () {
        var i, len, results;
        results = [];
        for (i = 0, len = inputs.length; i < len; i++) {
          input = inputs[i];
          results.push(input.value.trim());
        }
        return results;
      }();
      // Filter out empty values
      values = values.filter(function (value) {
        return value !== "";
      });
      // store the new value
      this.setState({
        value: values
      });
      console.debug("MultiValue::on_change:name=".concat(name, " value=").concat(values));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, values, this.props.item);
      }
    }

    /*
     * Converts the value to an array
     */
  }, {
    key: "to_array",
    value: function to_array(value) {
      var parsed;
      if (!value) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      parsed = JSON.parse(value);
      if (!Array.isArray(parsed)) {
        // This might happen when a default value is set, e.g. 0
        return [parsed];
      }
      return parsed;
    }

    /*
     * Inputs list builder. Generates a list with as many inputs as values set
     */
  }, {
    key: "build_inputs",
    value: function build_inputs() {
      var i, inputs, len, value, values;
      // Convert the result to an array
      values = this.to_array(this.state.value);
      // filter out empties
      values = values.filter(function (value) {
        return value !== "";
      });
      // Add an empty value at the end
      values.push("");
      // Build the elements
      inputs = [];
      for (i = 0, len = values.length; i < len; i++) {
        value = values[i];
        console.log("MultiValue::build_elements:value='".concat(value, "'"));
        inputs.push(/*#__PURE__*/external_React_default().createElement("li", null, /*#__PURE__*/external_React_default().createElement("input", MultiValue_coffee_extends({
          type: "text",
          size: this.props.size || 5,
          value: value,
          uid: this.props.uid,
          name: this.props.name,
          title: this.props.help || this.props.title,
          onChange: this.props.onChange || this.on_change,
          column_key: this.props.column_key,
          className: this.props.className
        }, this.props.attrs))));
      }
      return inputs;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: this.props.field_css || "multivalue"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("ul", {
        className: "list-unstyled",
        tabIndex: this.props.tabIndex
      }, this.build_inputs()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const MultiValue_coffee = (MultiValue);
;// ../node_modules/d3-array/src/extent.js
function extent(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

;// ../node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

;// ../node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

;// ../node_modules/d3-array/src/index.js













 // Deprecated; use bin.






















 // Deprecated; use leastIndex.





















;// ../node_modules/d3-axis/src/identity.js
/* harmony default export */ function src_identity(x) {
  return x;
}

;// ../node_modules/d3-axis/src/axis.js


var axis_top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === axis_top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === axis_top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : src_identity) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === axis_top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = Array.from(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisTop(scale) {
  return axis(axis_top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}

;// ../node_modules/d3-axis/src/index.js


;// ../node_modules/d3-selection/src/selector.js
function none() {}

/* harmony default export */ function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

;// ../node_modules/d3-selection/src/selection/select.js



/* harmony default export */ function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

;// ../node_modules/d3-selection/src/array.js
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

;// ../node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}

/* harmony default export */ function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

;// ../node_modules/d3-selection/src/selection/selectAll.js




function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}

/* harmony default export */ function selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

;// ../node_modules/d3-selection/src/matcher.js
/* harmony default export */ function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}


;// ../node_modules/d3-selection/src/selection/selectChild.js


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : childMatcher(match)));
}

;// ../node_modules/d3-selection/src/selection/selectChildren.js


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

;// ../node_modules/d3-selection/src/selection/filter.js



/* harmony default export */ function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

;// ../node_modules/d3-selection/src/selection/sparse.js
/* harmony default export */ function sparse(update) {
  return new Array(update.length);
}

;// ../node_modules/d3-selection/src/selection/enter.js



/* harmony default export */ function enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

;// ../node_modules/d3-selection/src/constant.js
/* harmony default export */ function src_constant(x) {
  return function() {
    return x;
  };
}

;// ../node_modules/d3-selection/src/selection/data.js




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = src_constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}

;// ../node_modules/d3-selection/src/selection/exit.js



/* harmony default export */ function exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

;// ../node_modules/d3-selection/src/selection/join.js
/* harmony default export */ function join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

;// ../node_modules/d3-selection/src/selection/merge.js


/* harmony default export */ function merge(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

;// ../node_modules/d3-selection/src/selection/order.js
/* harmony default export */ function order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

;// ../node_modules/d3-selection/src/selection/sort.js


/* harmony default export */ function sort(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// ../node_modules/d3-selection/src/selection/call.js
/* harmony default export */ function call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

;// ../node_modules/d3-selection/src/selection/nodes.js
/* harmony default export */ function nodes() {
  return Array.from(this);
}

;// ../node_modules/d3-selection/src/selection/node.js
/* harmony default export */ function node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

;// ../node_modules/d3-selection/src/selection/size.js
/* harmony default export */ function size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}

;// ../node_modules/d3-selection/src/selection/empty.js
/* harmony default export */ function selection_empty() {
  return !this.node();
}

;// ../node_modules/d3-selection/src/selection/each.js
/* harmony default export */ function each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

;// ../node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const namespaces = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});

;// ../node_modules/d3-selection/src/namespace.js


/* harmony default export */ function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}

;// ../node_modules/d3-selection/src/selection/attr.js


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

;// ../node_modules/d3-selection/src/window.js
/* harmony default export */ function src_window(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

;// ../node_modules/d3-selection/src/selection/style.js


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || src_window(node).getComputedStyle(node, null).getPropertyValue(name);
}

;// ../node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

;// ../node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

;// ../node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

;// ../node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

;// ../node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function selection_raise() {
  return this.each(raise);
}

;// ../node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function selection_lower() {
  return this.each(lower);
}

;// ../node_modules/d3-selection/src/creator.js



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

;// ../node_modules/d3-selection/src/selection/append.js


/* harmony default export */ function append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

;// ../node_modules/d3-selection/src/selection/insert.js



function constantNull() {
  return null;
}

/* harmony default export */ function insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

;// ../node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function selection_remove() {
  return this.each(remove);
}

;// ../node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

;// ../node_modules/d3-selection/src/selection/datum.js
/* harmony default export */ function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

;// ../node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

;// ../node_modules/d3-selection/src/selection/dispatch.js


function dispatchEvent(node, type, params) {
  var window = src_window(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

;// ../node_modules/d3-selection/src/selection/iterator.js
/* harmony default export */ function* iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

;// ../node_modules/d3-selection/src/selection/index.js



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selectAll,
  selectChild: selectChild,
  selectChildren: selectChildren,
  filter: selection_filter,
  data: data,
  enter: enter,
  exit: exit,
  join: join,
  merge: merge,
  selection: selection_selection,
  order: order,
  sort: sort,
  call: call,
  nodes: nodes,
  node: node,
  size: size,
  empty: selection_empty,
  each: each,
  attr: attr,
  style: style,
  property: property,
  classed: classed,
  text: selection_text,
  html: html,
  raise: selection_raise,
  lower: selection_lower,
  append: append,
  insert: insert,
  remove: selection_remove,
  clone: clone,
  datum: selection_datum,
  on: on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: iterator
};

/* harmony default export */ const src_selection = (selection);

;// ../node_modules/d3-dispatch/src/dispatch.js
var noop = {value: () => {}};

function dispatch_dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function dispatch_parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch_dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = dispatch_parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const src_dispatch = (dispatch_dispatch);

;// ../node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

;// ../node_modules/d3-timer/src/timeout.js


/* harmony default export */ function src_timeout(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

;// ../node_modules/d3-transition/src/transition/schedule.js



var emptyOn = src_dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function schedule_set(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function schedule_get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return src_timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    src_timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

;// ../node_modules/d3-transition/src/interrupt.js


/* harmony default export */ function src_interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

;// ../node_modules/d3-transition/src/selection/interrupt.js


/* harmony default export */ function selection_interrupt(name) {
  return this.each(function() {
    src_interrupt(this, name);
  });
}

;// ../node_modules/d3-interpolate/src/number.js
/* harmony default export */ function src_number(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

;// ../node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;

var decompose_identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

;// ../node_modules/d3-interpolate/src/transform/parse.js


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? decompose_identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return decompose_identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return decompose_identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

;// ../node_modules/d3-interpolate/src/transform/index.js



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: src_number(xa, xb)}, {i: i - 2, x: src_number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: src_number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: src_number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: src_number(xa, xb)}, {i: i - 2, x: src_number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

;// ../node_modules/d3-transition/src/transition/tween.js


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = schedule_get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = schedule_set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return schedule_get(node, id).value[name];
  };
}

;// ../node_modules/d3-color/src/define.js
/* harmony default export */ function src_define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

;// ../node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

src_define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function color_rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

src_define(Rgb, color_rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

src_define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

;// ../node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function src_basis(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// ../node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// ../node_modules/d3-interpolate/src/constant.js
/* harmony default export */ const d3_interpolate_src_constant = (x => () => x);

;// ../node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : d3_interpolate_src_constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : d3_interpolate_src_constant(isNaN(a) ? b : a);
}

;// ../node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ const rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = color_rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

;// ../node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: src_number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

;// ../node_modules/d3-transition/src/transition/interpolate.js



/* harmony default export */ function transition_interpolate(a, b) {
  var c;
  return (typeof b === "number" ? src_number
      : b instanceof color ? rgb
      : (c = color(b)) ? (b = c, rgb)
      : string)(a, b);
}

;// ../node_modules/d3-transition/src/transition/attr.js





function attr_attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attr_attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attr_attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attr_attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attr_attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attr_attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : transition_interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attr_attrFunctionNS : attr_attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attr_attrRemoveNS : attr_attrRemove)(fullname)
      : (fullname.local ? attr_attrConstantNS : attr_attrConstant)(fullname, i, value));
}

;// ../node_modules/d3-transition/src/transition/attrTween.js


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

;// ../node_modules/d3-transition/src/transition/delay.js


function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

/* harmony default export */ function delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : schedule_get(this.node(), id).delay;
}

;// ../node_modules/d3-transition/src/transition/duration.js


function durationFunction(id, value) {
  return function() {
    schedule_set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    schedule_set(this, id).duration = value;
  };
}

/* harmony default export */ function duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : schedule_get(this.node(), id).duration;
}

;// ../node_modules/d3-transition/src/transition/ease.js


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    schedule_set(this, id).ease = value;
  };
}

/* harmony default export */ function ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : schedule_get(this.node(), id).ease;
}

;// ../node_modules/d3-transition/src/transition/easeVarying.js


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    schedule_set(this, id).ease = v;
  };
}

/* harmony default export */ function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}

;// ../node_modules/d3-transition/src/transition/filter.js



/* harmony default export */ function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

;// ../node_modules/d3-transition/src/transition/merge.js


/* harmony default export */ function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

;// ../node_modules/d3-transition/src/transition/on.js


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : schedule_set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? schedule_get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

;// ../node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

;// ../node_modules/d3-transition/src/transition/select.js




/* harmony default export */ function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, schedule_get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

;// ../node_modules/d3-transition/src/transition/selectAll.js




/* harmony default export */ function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = schedule_get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

;// ../node_modules/d3-transition/src/transition/selection.js


var selection_Selection = src_selection.prototype.constructor;

/* harmony default export */ function transition_selection() {
  return new selection_Selection(this._groups, this._parents);
}

;// ../node_modules/d3-transition/src/transition/style.js






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function style_styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function style_styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function style_styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = schedule_set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = style_styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : transition_interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, style_styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, style_styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, style_styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}

;// ../node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

;// ../node_modules/d3-transition/src/transition/text.js


function text_textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function text_textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? text_textFunction(tweenValue(this, "text", value))
      : text_textConstant(value == null ? "" : value + ""));
}

;// ../node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

;// ../node_modules/d3-transition/src/transition/transition.js



/* harmony default export */ function transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = schedule_get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

;// ../node_modules/d3-transition/src/transition/end.js


/* harmony default export */ function end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = schedule_set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}

;// ../node_modules/d3-transition/src/transition/index.js






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition_transition(name) {
  return src_selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = src_selection.prototype;

Transition.prototype = transition_transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: tween,
  delay: delay,
  duration: duration,
  ease: ease,
  easeVarying: transition_easeVarying,
  end: end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

;// ../node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

;// ../node_modules/d3-transition/src/selection/transition.js





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

;// ../node_modules/d3-transition/src/selection/index.js




src_selection.prototype.interrupt = selection_interrupt;
src_selection.prototype.transition = selection_transition;

;// ../node_modules/d3-transition/src/index.js





;// ../node_modules/d3-brush/src/brush.js









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max: brush_max, min: brush_min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function brush_empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush_brush(X);
}

function brushY() {
  return brush_brush(Y);
}

/* harmony default export */ function brush() {
  return brush_brush(XY);
}

function brush_brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = pointer(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : brush_min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : brush_min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : brush_max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : brush_max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      dragDisable(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = brush_max(W - w0, brush_min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = brush_max(N - n0, brush_min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = brush_max(W, brush_min(E, points[0][0])), e1 = brush_max(W, brush_min(E, points[1][0])), signX = 1;
            if (signY) n1 = brush_max(N, brush_min(S, points[0][1])), s1 = brush_max(N, brush_min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = brush_max(W - w0, brush_min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = brush_max(W - e0, brush_min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = brush_max(N - n0, brush_min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = brush_max(N - s0, brush_min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = brush_max(W, brush_min(E, w0 - dx * signX)), e1 = brush_max(W, brush_min(E, e0 + dx * signX));
          if (signY) n1 = brush_max(N, brush_min(S, n0 - dy * signY)), s1 = brush_max(N, brush_min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        dragEnable(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (brush_empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

;// ../node_modules/d3-brush/src/index.js


;// ../node_modules/d3-array/src/ticks.js
const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}

function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}

function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}

function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

;// ../node_modules/d3-array/src/ascending.js
function ascending_ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// ../node_modules/d3-array/src/descending.js
function descending(a, b) {
  return a == null || b == null ? NaN
    : b < a ? -1
    : b > a ? 1
    : b >= a ? 0
    : NaN;
}

;// ../node_modules/d3-array/src/bisector.js



function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = ascending_ascending;
    compare2 = (d, x) => ascending_ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending_ascending || f === descending ? f : bisector_zero;
    compare2 = f;
    delta = f;
  }

  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function bisector_zero() {
  return 0;
}

;// ../node_modules/d3-array/src/number.js
function number_number(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

;// ../node_modules/d3-array/src/bisect.js




const ascendingBisect = bisector(ascending_ascending);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = bisector(number_number).center;
/* harmony default export */ const bisect = (bisectRight);

;// ../node_modules/d3-interpolate/src/array.js



/* harmony default export */ function src_array(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

;// ../node_modules/d3-interpolate/src/date.js
/* harmony default export */ function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

;// ../node_modules/d3-interpolate/src/object.js


/* harmony default export */ function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

;// ../node_modules/d3-interpolate/src/numberArray.js
/* harmony default export */ function src_numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function numberArray_isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

;// ../node_modules/d3-interpolate/src/value.js










/* harmony default export */ function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? d3_interpolate_src_constant(b)
      : (t === "number" ? src_number
      : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
      : b instanceof color ? rgb
      : b instanceof Date ? date
      : numberArray_isNumberArray(b) ? src_numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : src_number)(a, b);
}

;// ../node_modules/d3-interpolate/src/round.js
/* harmony default export */ function round(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

;// ../node_modules/d3-scale/src/constant.js
function constants(x) {
  return function() {
    return x;
  };
}

;// ../node_modules/d3-scale/src/number.js
function src_number_number(x) {
  return +x;
}

;// ../node_modules/d3-scale/src/continuous.js





var unit = [0, 1];

function continuous_identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = value,
      transform,
      untransform,
      unknown,
      clamp = continuous_identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== continuous_identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), src_number)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, src_number_number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : continuous_identity, rescale()) : clamp !== continuous_identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(continuous_identity, continuous_identity);
}

;// ../node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}

;// ../node_modules/d3-format/src/formatSpecifier.js
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

;// ../node_modules/d3-format/src/formatDecimal.js
/* harmony default export */ function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

;// ../node_modules/d3-format/src/exponent.js


/* harmony default export */ function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

;// ../node_modules/d3-format/src/precisionPrefix.js


/* harmony default export */ function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

;// ../node_modules/d3-format/src/formatGroup.js
/* harmony default export */ function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

;// ../node_modules/d3-format/src/formatNumerals.js
/* harmony default export */ function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

;// ../node_modules/d3-format/src/formatTrim.js
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

;// ../node_modules/d3-format/src/formatPrefixAuto.js


var prefixExponent;

/* harmony default export */ function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

;// ../node_modules/d3-format/src/formatRounded.js


/* harmony default export */ function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

;// ../node_modules/d3-format/src/formatTypes.js




/* harmony default export */ const formatTypes = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
});

;// ../node_modules/d3-format/src/identity.js
/* harmony default export */ function d3_format_src_identity(x) {
  return x;
}

;// ../node_modules/d3-format/src/locale.js









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ function locale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? d3_format_src_identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? d3_format_src_identity : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

;// ../node_modules/d3-format/src/defaultLocale.js


var defaultLocale_locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  defaultLocale_locale = locale(definition);
  format = defaultLocale_locale.format;
  formatPrefix = defaultLocale_locale.formatPrefix;
  return defaultLocale_locale;
}

;// ../node_modules/d3-format/src/precisionRound.js


/* harmony default export */ function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

;// ../node_modules/d3-format/src/precisionFixed.js


/* harmony default export */ function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

;// ../node_modules/d3-scale/src/tickFormat.js



function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

;// ../node_modules/d3-scale/src/linear.js





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear_linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear_linear());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

;// ../node_modules/d3-scale/src/index.js


































;// ../node_modules/d3-selection/src/select.js


/* harmony default export */ function src_select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

;// ../node_modules/d3-selection/src/index.js
















;// ../node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;

/* harmony default export */ function d3_shape_src_array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

;// ../node_modules/d3-shape/src/constant.js
/* harmony default export */ function d3_shape_src_constant(x) {
  return function constant() {
    return x;
  };
}

;// ../node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ function curve_linear(context) {
  return new Linear(context);
}

;// ../node_modules/d3-path/src/path.js
const pi = Math.PI,
    tau = 2 * pi,
    path_epsilon = 1e-6,
    tauEpsilon = tau - path_epsilon;

function path_append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}

function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return path_append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}

class Path {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
    this._append = digits == null ? path_append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > path_epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > path_epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    }

    // Otherwise, draw an arc!
    else {
      let x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > path_epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }

      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > path_epsilon || Math.abs(this._y1 - y0) > path_epsilon) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > path_epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}

function path() {
  return new Path;
}

// Allow instanceof d3.path
path.prototype = Path.prototype;

function pathRound(digits = 3) {
  return new Path(+digits);
}

;// ../node_modules/d3-shape/src/path.js


function withPath(shape) {
  let digits = 3;

  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };

  return () => new Path(digits);
}

;// ../node_modules/d3-shape/src/point.js
function point_x(p) {
  return p[0];
}

function point_y(p) {
  return p[1];
}

;// ../node_modules/d3-shape/src/line.js






/* harmony default export */ function src_line(x, y) {
  var defined = d3_shape_src_constant(true),
      context = null,
      curve = curve_linear,
      output = null,
      path = withPath(line);

  x = typeof x === "function" ? x : (x === undefined) ? point_x : d3_shape_src_constant(x);
  y = typeof y === "function" ? y : (y === undefined) ? point_y : d3_shape_src_constant(y);

  function line(data) {
    var i,
        n = (data = d3_shape_src_array(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : d3_shape_src_constant(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : d3_shape_src_constant(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : d3_shape_src_constant(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

;// ../node_modules/d3-shape/src/math.js
const math_abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const math_max = Math.max;
const math_min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;

const math_epsilon = 1e-12;
const math_pi = Math.PI;
const halfPi = math_pi / 2;
const math_tau = 2 * math_pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? math_pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

;// ../node_modules/d3-shape/src/symbol/asterisk.js


const sqrt3 = sqrt(3);

/* harmony default export */ const asterisk = ({
  draw(context, size) {
    const r = sqrt(size + math_min(size / 28, 0.75)) * 0.59436;
    const t = r / 2;
    const u = t * sqrt3;
    context.moveTo(0, r);
    context.lineTo(0, -r);
    context.moveTo(-u, -t);
    context.lineTo(u, t);
    context.moveTo(-u, t);
    context.lineTo(u, -t);
  }
});

;// ../node_modules/d3-shape/src/symbol/circle.js


/* harmony default export */ const circle = ({
  draw(context, size) {
    const r = sqrt(size / math_pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, math_tau);
  }
});

;// ../node_modules/d3-shape/src/symbol/cross.js


/* harmony default export */ const cross = ({
  draw(context, size) {
    const r = sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/diamond.js


const tan30 = sqrt(1 / 3);
const tan30_2 = tan30 * 2;

/* harmony default export */ const diamond = ({
  draw(context, size) {
    const y = sqrt(size / tan30_2);
    const x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/diamond2.js


/* harmony default export */ const diamond2 = ({
  draw(context, size) {
    const r = sqrt(size) * 0.62625;
    context.moveTo(0, -r);
    context.lineTo(r, 0);
    context.lineTo(0, r);
    context.lineTo(-r, 0);
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/plus.js


/* harmony default export */ const plus = ({
  draw(context, size) {
    const r = sqrt(size - math_min(size / 7, 2)) * 0.87559;
    context.moveTo(-r, 0);
    context.lineTo(r, 0);
    context.moveTo(0, r);
    context.lineTo(0, -r);
  }
});

;// ../node_modules/d3-shape/src/symbol/square.js


/* harmony default export */ const square = ({
  draw(context, size) {
    const w = sqrt(size);
    const x = -w / 2;
    context.rect(x, x, w, w);
  }
});

;// ../node_modules/d3-shape/src/symbol/square2.js


/* harmony default export */ const square2 = ({
  draw(context, size) {
    const r = sqrt(size) * 0.4431;
    context.moveTo(r, r);
    context.lineTo(r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, r);
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/star.js


const ka = 0.89081309152928522810;
const kr = sin(math_pi / 10) / sin(7 * math_pi / 10);
const kx = sin(math_tau / 10) * kr;
const ky = -cos(math_tau / 10) * kr;

/* harmony default export */ const star = ({
  draw(context, size) {
    const r = sqrt(size * ka);
    const x = kx * r;
    const y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (let i = 1; i < 5; ++i) {
      const a = math_tau * i / 5;
      const c = cos(a);
      const s = sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/triangle.js


const triangle_sqrt3 = sqrt(3);

/* harmony default export */ const triangle = ({
  draw(context, size) {
    const y = -sqrt(size / (triangle_sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-triangle_sqrt3 * y, -y);
    context.lineTo(triangle_sqrt3 * y, -y);
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/triangle2.js


const triangle2_sqrt3 = sqrt(3);

/* harmony default export */ const triangle2 = ({
  draw(context, size) {
    const s = sqrt(size) * 0.6824;
    const t = s  / 2;
    const u = (s * triangle2_sqrt3) / 2; // cos(Math.PI / 6)
    context.moveTo(0, -s);
    context.lineTo(u, t);
    context.lineTo(-u, t);
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/wye.js


const c = -0.5;
const s = sqrt(3) / 2;
const k = 1 / sqrt(12);
const a = (k / 2 + 1) * 3;

/* harmony default export */ const wye = ({
  draw(context, size) {
    const r = sqrt(size / a);
    const x0 = r / 2, y0 = r * k;
    const x1 = x0, y1 = r * k + r;
    const x2 = -x1, y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});

;// ../node_modules/d3-shape/src/symbol/times.js


/* harmony default export */ const times = ({
  draw(context, size) {
    const r = sqrt(size - math_min(size / 6, 1.7)) * 0.6189;
    context.moveTo(-r, -r);
    context.lineTo(r, r);
    context.moveTo(-r, r);
    context.lineTo(r, -r);
  }
});

;// ../node_modules/d3-shape/src/symbol.js
















// These symbols are designed to be filled.
const symbolsFill = [
  circle,
  cross,
  diamond,
  square,
  star,
  triangle,
  wye
];

// These symbols are designed to be stroked (with a width of 1.5px and round caps).
const symbolsStroke = [
  circle,
  plus,
  times,
  triangle2,
  asterisk,
  square2,
  diamond2
];

function symbol_Symbol(type, size) {
  let context = null,
      path = withPath(symbol);

  type = typeof type === "function" ? type : d3_shape_src_constant(type || circle);
  size = typeof size === "function" ? size : d3_shape_src_constant(size === undefined ? 64 : +size);

  function symbol() {
    let buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : d3_shape_src_constant(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : d3_shape_src_constant(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}

;// ../node_modules/d3-shape/src/index.js




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!
















































;// ../node_modules/d3-zoom/src/transform.js
function transform_Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

transform_Transform.prototype = {
  constructor: transform_Transform,
  scale: function(k) {
    return k === 1 ? this : new transform_Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new transform_Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var transform_identity = new transform_Transform(1, 0, 0);

transform.prototype = transform_Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return transform_identity;
  return node.__zoom;
}

;// ../node_modules/d3-zoom/src/zoom.js










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function zoom_defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function zoom_defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function zoom_defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function zoom() {
  var filter = zoom_defaultFilter,
      extent = zoom_defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = zoom_defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      dragEnable(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}

;// ../node_modules/d3-zoom/src/index.js



;// ../node_modules/d3/src/index.js































;// ./components/TimeSeries.coffee
function TimeSeries_coffee_typeof(o) { "@babel/helpers - typeof"; return TimeSeries_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TimeSeries_coffee_typeof(o); }
function TimeSeries_coffee_extends() { return TimeSeries_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TimeSeries_coffee_extends.apply(null, arguments); }
function TimeSeries_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TimeSeries_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TimeSeries_coffee_toPropertyKey(o.key), o); } }
function TimeSeries_coffee_createClass(e, r, t) { return r && TimeSeries_coffee_defineProperties(e.prototype, r), t && TimeSeries_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TimeSeries_coffee_toPropertyKey(t) { var i = TimeSeries_coffee_toPrimitive(t, "string"); return "symbol" == TimeSeries_coffee_typeof(i) ? i : i + ""; }
function TimeSeries_coffee_toPrimitive(t, r) { if ("object" != TimeSeries_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TimeSeries_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TimeSeries_coffee_callSuper(t, o, e) { return o = TimeSeries_coffee_getPrototypeOf(o), TimeSeries_coffee_possibleConstructorReturn(t, TimeSeries_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TimeSeries_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TimeSeries_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TimeSeries_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TimeSeries_coffee_assertThisInitialized(t); }
function TimeSeries_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TimeSeries_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TimeSeries_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TimeSeries_coffee_getPrototypeOf(t) { return TimeSeries_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TimeSeries_coffee_getPrototypeOf(t); }
function TimeSeries_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TimeSeries_coffee_setPrototypeOf(t, e); }
function TimeSeries_coffee_setPrototypeOf(t, e) { return TimeSeries_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TimeSeries_coffee_setPrototypeOf(t, e); }
var TimeSeries;


TimeSeries = function () {
  var getLineConfigs, symbolGenerator;
  var TimeSeries = /*#__PURE__*/function (_React$Component) {
    /**
     * TimeSeries Field for the Listing Table
     *
     * A multi value field is identified by the column type "timeseries" in the
     * listing view, e.g.  `self.columns = {"Result": {"type": "timeseries"}, ... }`
     *
     */
    function TimeSeries(props) {
      var _this;
      TimeSeries_coffee_classCallCheck(this, TimeSeries);
      _this = TimeSeries_coffee_callSuper(this, TimeSeries, [props]);
      // remember the initial value
      _this.state = {
        value: props.defaultValue
      };
      // bind event handler to the current context
      _this.on_change = _this.on_change.bind(_this);
      _this.svgRef = /*#__PURE__*/external_React_default().createRef();
      return _this;
    }

    /**
     * Event handler when the value changed of the field
     * Extract all values in the matrix and store
     * them in a list of lists
     * @param event {object} ReactJS event object
     */
    TimeSeries_coffee_inherits(TimeSeries, _React$Component);
    return TimeSeries_coffee_createClass(TimeSeries, [{
      key: "on_change",
      value: function on_change(event) {
        var el, input, inputs, j, len, name, row, row_cnt, row_values, rows, table, uid, values;
        el = event.currentTarget;
        // Get the parent table
        table = el.parentNode.parentNode.parentNode;
        // Extract all row elements that store values
        rows = table.querySelectorAll("tr");
        row_cnt = 0;
        values = [];
        for (j = 0, len = rows.length; j < len; j++) {
          row = rows[j];
          row_cnt += 1;
          if (row_cnt === 1) {
            // Ignore first row which is the header
            continue;
          }
          // Extract all inputs in the row
          inputs = row.querySelectorAll("input");
          console.log("TimeSeries::on_change: row num=".concat(row_cnt, " num inputs=").concat(inputs.length));
          // Extract the UID attribute
          uid = el.getAttribute("uid");
          // Extract the column_key attribute
          name = el.getAttribute("column_key") || el.name;
          // The value to store is a list of results
          row_values = function () {
            var k, len1, results;
            results = [];
            for (k = 0, len1 = inputs.length; k < len1; k++) {
              input = inputs[k];
              results.push(input.value.trim());
            }
            return results;
          }();
          // Filter out empty values
          row_values = row_values.filter(function (value) {
            return value !== "";
          });
          console.log("TimeSeries::on_change: row num=".concat(row_cnt, " values=").concat(row_values));
          if (row_values.length > 0) {
            // Ignore empty rows, probably the last row
            values.push(row_values);
          }
        }
        // store the new value
        this.setState({
          value: values
        });
        // Call the *update* field handler
        if (this.props.update_editable_field) {
          return this.props.update_editable_field(uid, name, values, this.props.item);
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        // D3 can only be used after the component has mounted, ensuring the DOM is available
        return this.build_graph();
      }

      /*
       * Converts the string value to an array
       */
    }, {
      key: "to_matrix",
      value: function to_matrix(listString, headers, src) {
        var list, matrix;
        // No values yet
        if (listString === void 0 || listString === "") {
          return "";
        }
        // Parse the string version of the list of lists into an array
        list = JSON.parse(listString);
        // Map each inner list to an object using the headers
        matrix = list.map(function (innerList) {
          var obj;
          obj = {};
          headers.forEach(function (header, index) {
            return obj[header] = innerList[index];
          });
          return obj;
        });
        matrix.map(function (row) {
          return headers.forEach(function (header, index) {
            if (src === 'table') {
              return row[header] = row[header];
            } else if (src === 'graph') {
              if (index = 0) {
                return row[header] = row[header];
              } else {
                return row[header] = parseFloat(row[header]);
              }
            } else {
              return console.error('to_matrix: unknown src ' + src);
            }
          });
        });
        return matrix;
      }

      /*
       * Inputs table builder. Generates a table of  inputs as matrix
       */
    }, {
      key: "build_rows",
      value: function build_rows() {
        var OOR, cnt, columns, head, header_len, headers, index, j, k, key, klassName, len, len1, matrix, output, row, row_output, td_content, td_elements, th_inputs, val, value, values;
        // Convert the result to a matrix of rows
        columns = this.props.item.time_series_columns;
        headers = columns.map(function (i) {
          return i.ColumnTitle;
        });
        index = headers[0];
        header_len = headers.length;
        // console.log 'build_rows: header len = ' + header_len
        values = this.props.item.time_series_values;
        // console.log 'build_rows: values = ' + values
        matrix = this.to_matrix(values, headers, 'table');
        // Build the rows
        output = [];
        // create header row
        th_inputs = [];
        for (j = 0, len = headers.length; j < len; j++) {
          head = headers[j];
          th_inputs.push(/*#__PURE__*/external_React_default().createElement("th", null,
          /*#__PURE__*/
          // size={@props.size or 5}
          external_React_default().createElement("input", TimeSeries_coffee_extends({
            type: "text",
            value: head,
            uid: this.props.uid,
            name: this.props.name,
            title: this.props.help || this.props.title,
            onChange: this.props.onChange || this.on_change,
            column_key: this.props.column_key,
            className: this.props.className,
            readOnly: "readOnly"
          }, this.props.attrs))));
        }
        output.push(/*#__PURE__*/external_React_default().createElement("thead", null, /*#__PURE__*/external_React_default().createElement("tr", null, th_inputs)));
        // Create rows on inputs
        row_output = [];
        cnt = 0;
        for (k = 0, len1 = matrix.length; k < len1; k++) {
          row = matrix[k];
          cnt += 1;
          // Create list of TDs
          td_elements = [];
          // console.log "Row = " + row
          for (key in row) {
            value = row[key];
            val = value['val'];
            OOR = value['OOR'];
            if (isNaN(val)) {
              val = "";
            }
            // console.log 'key=' + key + ' val=' + val
            klassName = "time-series-data";
            td_content = [];
            // if this.props.item.result_type == "timeseries_readonly"
            if (true) {
              // REMOVED READ-WRITE now
              td_content.push(/*#__PURE__*/external_React_default().createElement("span", TimeSeries_coffee_extends({
                type: "text",
                uid: this.props.uid,
                name: this.props.name,
                title: this.props.help || this.props.title,
                onChange: this.props.onChange || this.on_change,
                column_key: this.props.column_key,
                className: this.props.className
              }, this.props.attrs), val));
              if (key !== index && OOR) {
                klassName += " time-series-oor";
                td_content.push(/*#__PURE__*/external_React_default().createElement("span", {
                  className: "fas fa-exclamation-circle",
                  title: "Result out of range"
                }));
              }
              td_elements.push(/*#__PURE__*/external_React_default().createElement("td", {
                className: klassName
              }, td_content));
            } else {}
          }
          // Add row to output
          row_output.push(/*#__PURE__*/external_React_default().createElement("tr", null, td_elements));
        }
        output.push(/*#__PURE__*/external_React_default().createElement("tbody", null, row_output));
        console.log('build_rows: done');
        return output;
      }

      /*
       * Inputs table builder. Generates a table of  inputs as matrix
       */
    }, {
      key: "build_graph",
      value: function build_graph() {
        var col_types, columns, data, headers, height, index, legend, legendItems, line_configs, margin, maxY, minY, ref, svg, values, width, x, y;
        // console.log "TimeSeries::build_graph: entered"
        if ((ref = this.svgRef) != null ? ref.current : void 0) {
          console.log("TimeSeries::build_graph: is current");
          values = this.state.value;
          if (values === "") {
            console.log("TimeSeries::build_graph: exit because no data");
            this.svgRef.current.appendChild([]);
            return;
          }
          // Get datasets
          columns = this.props.item.time_series_columns;
          col_types = columns.map(function (i) {
            return i.ColumnType;
          });
          headers = columns.map(function (i) {
            return i.ColumnTitle;
          });
          index = headers[0];
          // console.log 'Graph raw data: ' + values
          data = this.to_matrix(values, headers, 'graph');
          // console.log 'Graph data: ' + data

          // Generate the line colors (exclude index)
          line_configs = getLineConfigs(headers.length - 1);
          if (col_types[col_types.length - 1] === "average") {
            line_configs[line_configs.length - 1].color = "#000000"; // replace the last color with black
            line_configs[line_configs.length - 1].dash = ""; // replace the last color with black
            line_configs[line_configs.length - 1].opacity = "1.0"; // replace the last color with black
            line_configs[line_configs.length - 1].symbol = circle; // replace the last color with black
          }
          // console.log 'Line configs: ' + line_configs

          // Set up dimensions
          margin = {
            top: 40,
            right: 80,
            bottom: 50,
            left: 60
          };
          width = 800 - margin.left - margin.right;
          height = 400 - margin.top - margin.bottom + 50;
          // Set up scales
          x = linear_linear().domain(extent(data, function (d) {
            return parseFloat(d[index]);
          })).range([0, width]);
          // Set up Y scale with trimmed domain
          minY = min(data.flatMap(function (row) {
            return headers.slice(1).map(function (header) {
              return parseFloat(row[header]);
            });
          }));
          minY = minY - minY * 0.1;
          maxY = max(data.flatMap(function (row) {
            return headers.slice(1).map(function (header) {
              return parseFloat(row[header]);
            });
          }));
          // maxY = maxY + (maxY * 0.1)
          y = linear_linear().domain([Math.floor(minY), Math.ceil(maxY) // Trim domain to just cover data range
          ]).range([height, 0]);
          // Create SVG container
          svg = src_select(this.svgRef.current).style("height", "".concat(height + 120, "px"));
          // Remove any previous SVG content
          svg.selectAll('*').remove();
          svg = svg.attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(".concat(margin.left, ",").concat(margin.top, ")"));
          // Graph title
          svg.append("text").attr("x", width / 2).attr("y", -margin.top / 2).attr("text-anchor", "middle").style("font-size", "16px").style("font-weight", "bold").text(this.props.item.time_series_graph_title);
          // X-axis
          svg.append("g").attr("transform", "translate(0,".concat(height, ")")).call(axisBottom(x));
          // X-axis label
          svg.append("text").attr("x", width / 2).attr("y", height + margin.bottom - 10).attr("text-anchor", "middle").style("font-size", "12px").text(this.props.item.time_series_graph_xaxis);
          // Y-axis
          svg.append("g").call(axisLeft(y));
          // Y-axis label
          svg.append("text").attr("transform", "rotate(-90)").attr("x", -height / 2).attr("y", -margin.left + 15).attr("text-anchor", "middle").style("font-size", "12px").text(this.props.item.time_series_graph_yaxis);
          // Add horizontal grid lines
          // .style("stroke-dasharray", "2,2")
          svg.append("g").attr("class", "grid horizontal").attr("transform", "translate(0, 0)").call(axisLeft(y).tickSize(-width).tickFormat("")).selectAll("line").style("stroke", "#999").style("opacity", 0.8); // Extend ticks across the chart width // Remove tick labels // Lighter gray // Adjust transparency

          // Add vertical grid lines
          svg.append("g").attr("class", "grid vertical").attr("transform", "translate(0, ".concat(height, ")")).call(axisBottom(x).tickSize(-height).tickFormat("")).selectAll("line").style("stroke", "#999").style("stroke-dasharray", "2,2").style("opacity", 0.8); // Extend ticks across the chart height // Remove tick labels // Lighter gray // Adjust transparency

          // Draw axes
          svg.append("g").attr("transform", "translate(0,".concat(height, ")")).call(axisBottom(x));
          svg.append("g").call(axisLeft(y));
          headers.slice(1).forEach(function (key, i) {
            var line;
            // console.debug('Main loop: ' + key + '  ' + i)
            // Line generator
            line = src_line().x(function (d) {
              // console.debug("Mapping X:", d[index], " to ", x(d[index]))
              return x(d[index]);
            }).y(function (d) {
              // console.debug("Mapping Y:", d[key], " to ", y(d[key]))
              return y(d[key]);
            });
            svg.append("path").datum(data).attr("fill", "none").attr("stroke-width", 2).attr("stroke", line_configs[i].color).attr("opacity", line_configs[i].opacity).attr("stroke-dasharray", line_configs[i].dash).attr("d", line);
            // Add data points with different symbols
            return svg.selectAll(".symbol-".concat(i)).data(data).enter().append("path").attr("class", "symbol symbol-".concat(
            // This creates problems with empty vlues
            // .attr("transform", (d) ->
            //   "translate(#{x(parseFloat(d[index]))}, #{y(parseFloat(d[key]))})"
            // )
            i)).attr("d", symbolGenerator.type(line_configs[i].symbol)).style("fill", line_configs[i].color).style("opacity", line_configs[i].opacity);
          });
          // Add legend
          legend = svg.append("g").attr("class", "legend").attr("transform", "translate(50, ".concat(height + 50, ")"));

          // Add legend items
          legendItems = legend.selectAll("g").data(headers.slice(1)).enter().append("g").attr("transform", function (d, i) {
            var xOffset, yOffset;
            xOffset = i % Math.floor(width / 100) * 100; // Horizontal spacing
            yOffset = Math.floor(i / Math.floor(width / 100)) * 20; // Vertical spacing
            return "translate(".concat(xOffset, ", ").concat(yOffset, ")");
          });
          // Add legend color squares
          legendItems.append("rect").attr("x", 0).attr("width", 18).attr("height", 18).style("fill", function (d, i) {
            return line_configs[i].color;
          }).style("opacity", function (d, i) {
            return line_configs[i].opacity;
          });
          // Add legend text
          legendItems.append("text").attr("x", 24).attr("y", 9).attr("dy", "0.35em").style("font-size", "12px").text(function (d) {
            return d;
          });
          return console.log("TimeSeries::build_graph: done");
        }
      }
    }, {
      key: "render",
      value: function render() {
        var values;
        values = this.state.value;
        if (values.length === 0) {
          console.log("TimeSeries::render: no values");
          return /*#__PURE__*/external_React_default().createElement("div", {
            className: this.props.field_css || "timeseries"
          }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
            className: this.props.before_css || "before_field",
            dangerouslySetInnerHTML: {
              __html: this.props.before
            }
          }), /*#__PURE__*/external_React_default().createElement("table", {
            className: "time-series-table",
            tabIndex: this.props.tabIndex
          }, this.build_rows()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
            className: this.props.after_css || "after_field",
            dangerouslySetInnerHTML: {
              __html: this.props.after
            }
          }));
        } else {
          // console.log "TimeSeries::render: got #{values.length} values #{values} "
          return /*#__PURE__*/external_React_default().createElement("div", {
            className: this.props.field_css || "timeseries"
          }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
            className: this.props.before_css || "before_field",
            dangerouslySetInnerHTML: {
              __html: this.props.before
            }
          }), /*#__PURE__*/external_React_default().createElement("table", {
            className: "time-series-table",
            tabIndex: this.props.tabIndex
          }, this.build_rows()), /*#__PURE__*/external_React_default().createElement("svg", {
            ref: this.svgRef
          }), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
            className: this.props.after_css || "after_field",
            dangerouslySetInnerHTML: {
              __html: this.props.after
            }
          }));
        }
      }
    }]);
  }((external_React_default()).Component);
  ;
  getLineConfigs = function getLineConfigs(count) {
    var configs;
    configs = [{
      color: "#666666",
      opacity: 1.0,
      symbol: circle,
      dash: ""
    }, {
      color: "#666666",
      opacity: 0.8,
      symbol: circle,
      dash: ""
    }, {
      color: "#666666",
      opacity: 0.6,
      symbol: circle,
      dash: ""
    }, {
      color: "#666666",
      opacity: 0.4,
      symbol: circle,
      dash: ""
    }, {
      color: "#666666",
      opacity: 0.2,
      symbol: circle,
      dash: ""
    }];
    return configs.slice(0, count);
  };

  // Create symbol generator
  symbolGenerator = symbol_Symbol().size(24); // Adjust size as needed

  return TimeSeries;
}.call(undefined);
/* harmony default export */ const TimeSeries_coffee = (TimeSeries);
;// ./components/NumericField.coffee
function NumericField_coffee_typeof(o) { "@babel/helpers - typeof"; return NumericField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, NumericField_coffee_typeof(o); }
function NumericField_coffee_extends() { return NumericField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, NumericField_coffee_extends.apply(null, arguments); }
function NumericField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function NumericField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, NumericField_coffee_toPropertyKey(o.key), o); } }
function NumericField_coffee_createClass(e, r, t) { return r && NumericField_coffee_defineProperties(e.prototype, r), t && NumericField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function NumericField_coffee_toPropertyKey(t) { var i = NumericField_coffee_toPrimitive(t, "string"); return "symbol" == NumericField_coffee_typeof(i) ? i : i + ""; }
function NumericField_coffee_toPrimitive(t, r) { if ("object" != NumericField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != NumericField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function NumericField_coffee_callSuper(t, o, e) { return o = NumericField_coffee_getPrototypeOf(o), NumericField_coffee_possibleConstructorReturn(t, NumericField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], NumericField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function NumericField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == NumericField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return NumericField_coffee_assertThisInitialized(t); }
function NumericField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function NumericField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (NumericField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function NumericField_coffee_getPrototypeOf(t) { return NumericField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, NumericField_coffee_getPrototypeOf(t); }
function NumericField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && NumericField_coffee_setPrototypeOf(t, e); }
function NumericField_coffee_setPrototypeOf(t, e) { return NumericField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, NumericField_coffee_setPrototypeOf(t, e); }
var NumericField;

NumericField = /*#__PURE__*/function (_React$Component) {
  /**
   * Numeric Field for the Listing Table
   *
   * A numeric field is identified by the column type "numeric" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "numeric"}, ... }`
   *
   */
  function NumericField(props) {
    var _this;
    NumericField_coffee_classCallCheck(this, NumericField);
    _this = NumericField_coffee_callSuper(this, NumericField, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue,
      size: _this.get_field_size_for(props.defaultValue)
    };
    // bind event handler to the current context
    _this.on_blur = _this.on_blur.bind(_this);
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */
  NumericField_coffee_inherits(NumericField, _React$Component);
  return NumericField_coffee_createClass(NumericField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }

    /**
     * Event handler when the mouse left the numeric field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_blur",
    value: function on_blur(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the numeric field
      value = el.value;
      // Remove any trailing dots
      value = value.replace(/\.*$/, "");
      // Validate if the entered value can be converted to a Number
      if (!this.validate(value)) {
        value = "";
      }
      // Set the sanitized value back to the field
      el.value = value;
      // store the sanitized value in the state
      this.setState({
        value: value,
        size: this.get_field_size_for(value)
      });
      console.debug("NumericField::on_blur: value=".concat(value));
      // Call the *save* field handler with the UID, name, value
      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Event handler when the value changed of the numeric field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the numeric field
      value = el.value;
      // Convert the value to float
      value = this.to_float(value);
      // Set the float value back to the field
      el.value = value;
      // store the new value
      this.setState({
        value: value,
        size: this.get_field_size_for(value)
      });
      console.debug("NumericField::on_change: value=".concat(value));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Float converter
     * @param value {string} a numeric string value
     */
  }, {
    key: "to_float",
    value: function to_float(value) {
      var regex;
      // Valid -.5; -0.5; -0.555; .5; 0.5; 0.555
      //       -,5; -0,5; -0,555; ,5; 0,5; 0,555
      // Non Valid: -.5.5; 0,5,5; ...;

      // New in version 2.3: Allow exponential notation
      // Valid: 1e-5 for 0.00005; 1e5 for 10000; 1.35e2 for 135
      regex = new RegExp('(^[-,<,>]?)' + '([-,\+]?\\d*)' + '([e,E][-,\+]?\\d*|[\.,\,]?[0-9]+?[e,E][-,\+]?\\d*|[\.,\,]?\\d*)' + '(.*)');
      value = value.replace(regex, "$1$2$3");
      value = value.replace(",", ".");
      return value;
    }

    /**
     * Calculate the field size for the given value to make all digits visble
     * @param value {string} a numeric string value
     */
  }, {
    key: "get_field_size_for",
    value: function get_field_size_for(value) {
      var length;
      length = value.toString().length;
      if (length < this.props.size) {
        return this.props.size;
      }
      return length;
    }

    /**
     * Checks if the entered value is valid
     * @param value {string} the value
     */
  }, {
    key: "validate",
    value: function validate(value) {
      var number;
      // strip off detection limits
      number = value.replace(/(^[<,>]?)(.*)/, "$2");
      return !Number.isNaN(Number(number));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", NumericField_coffee_extends({
        type: "text",
        size: this.state.size,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.help || this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onBlur: this.props.onBlur || this.on_blur,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const NumericField_coffee = (NumericField);
;// ./components/CalculatedField.coffee
function CalculatedField_coffee_typeof(o) { "@babel/helpers - typeof"; return CalculatedField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CalculatedField_coffee_typeof(o); }
function CalculatedField_coffee_extends() { return CalculatedField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, CalculatedField_coffee_extends.apply(null, arguments); }
function CalculatedField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function CalculatedField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, CalculatedField_coffee_toPropertyKey(o.key), o); } }
function CalculatedField_coffee_createClass(e, r, t) { return r && CalculatedField_coffee_defineProperties(e.prototype, r), t && CalculatedField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function CalculatedField_coffee_toPropertyKey(t) { var i = CalculatedField_coffee_toPrimitive(t, "string"); return "symbol" == CalculatedField_coffee_typeof(i) ? i : i + ""; }
function CalculatedField_coffee_toPrimitive(t, r) { if ("object" != CalculatedField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CalculatedField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function CalculatedField_coffee_callSuper(t, o, e) { return o = CalculatedField_coffee_getPrototypeOf(o), CalculatedField_coffee_possibleConstructorReturn(t, CalculatedField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], CalculatedField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function CalculatedField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == CalculatedField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return CalculatedField_coffee_assertThisInitialized(t); }
function CalculatedField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function CalculatedField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (CalculatedField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function CalculatedField_coffee_getPrototypeOf(t) { return CalculatedField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, CalculatedField_coffee_getPrototypeOf(t); }
function CalculatedField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && CalculatedField_coffee_setPrototypeOf(t, e); }
function CalculatedField_coffee_setPrototypeOf(t, e) { return CalculatedField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, CalculatedField_coffee_setPrototypeOf(t, e); }
var CalculatedField;

CalculatedField = /*#__PURE__*/function (_React$Component) {
  /**
   * Calculated Field for the Listing Table
   *
   * Basically like a *disabled* numeric field, but with a controlled value
   *
   */
  function CalculatedField(props) {
    CalculatedField_coffee_classCallCheck(this, CalculatedField);
    return CalculatedField_coffee_callSuper(this, CalculatedField, [props]);
  }
  CalculatedField_coffee_inherits(CalculatedField, _React$Component);
  return CalculatedField_coffee_createClass(CalculatedField, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", CalculatedField_coffee_extends({
        type: "text",
        size: this.props.size || 5,
        uid: this.props.uid,
        name: this.props.name,
        value: this.props.value || "",
        column_key: this.props.column_key,
        title: this.props.help || this.props.title,
        disabled: true,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        tabIndex: "-1"
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const CalculatedField_coffee = (CalculatedField);
;// ./components/ReadonlyField.coffee
function ReadonlyField_coffee_typeof(o) { "@babel/helpers - typeof"; return ReadonlyField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ReadonlyField_coffee_typeof(o); }
function ReadonlyField_coffee_extends() { return ReadonlyField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, ReadonlyField_coffee_extends.apply(null, arguments); }
function ReadonlyField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function ReadonlyField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ReadonlyField_coffee_toPropertyKey(o.key), o); } }
function ReadonlyField_coffee_createClass(e, r, t) { return r && ReadonlyField_coffee_defineProperties(e.prototype, r), t && ReadonlyField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ReadonlyField_coffee_toPropertyKey(t) { var i = ReadonlyField_coffee_toPrimitive(t, "string"); return "symbol" == ReadonlyField_coffee_typeof(i) ? i : i + ""; }
function ReadonlyField_coffee_toPrimitive(t, r) { if ("object" != ReadonlyField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ReadonlyField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ReadonlyField_coffee_callSuper(t, o, e) { return o = ReadonlyField_coffee_getPrototypeOf(o), ReadonlyField_coffee_possibleConstructorReturn(t, ReadonlyField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], ReadonlyField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ReadonlyField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == ReadonlyField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return ReadonlyField_coffee_assertThisInitialized(t); }
function ReadonlyField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function ReadonlyField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ReadonlyField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ReadonlyField_coffee_getPrototypeOf(t) { return ReadonlyField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, ReadonlyField_coffee_getPrototypeOf(t); }
function ReadonlyField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ReadonlyField_coffee_setPrototypeOf(t, e); }
function ReadonlyField_coffee_setPrototypeOf(t, e) { return ReadonlyField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, ReadonlyField_coffee_setPrototypeOf(t, e); }
var ReadonlyField;

ReadonlyField = /*#__PURE__*/function (_React$Component) {
  function ReadonlyField(props) {
    ReadonlyField_coffee_classCallCheck(this, ReadonlyField);
    return ReadonlyField_coffee_callSuper(this, ReadonlyField, [props]);
  }
  ReadonlyField_coffee_inherits(ReadonlyField, _React$Component);
  return ReadonlyField_coffee_createClass(ReadonlyField, [{
    key: "is_boolean_field",
    value: function is_boolean_field() {
      if (typeof this.props.value === "boolean") {
        return true;
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.is_boolean_field()) {
        if (this.props.value) {
          return /*#__PURE__*/external_React_default().createElement("span", null, _t("Yes"));
        } else {
          return /*#__PURE__*/external_React_default().createElement("span", null, _t("No"));
        }
      } else {
        return /*#__PURE__*/external_React_default().createElement("span", {
          className: this.props.field_css || "form-group"
        }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
          className: this.props.before_css || "before_field",
          dangerouslySetInnerHTML: {
            __html: this.props.before
          }
        }), /*#__PURE__*/external_React_default().createElement("span", ReadonlyField_coffee_extends({
          dangerouslySetInnerHTML: {
            __html: this.props.formatted_value
          }
        }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
          className: this.props.after_css || "after_field",
          dangerouslySetInnerHTML: {
            __html: this.props.after
          }
        }));
      }
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const ReadonlyField_coffee = (ReadonlyField);
;// ./components/Select.coffee
function Select_coffee_typeof(o) { "@babel/helpers - typeof"; return Select_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Select_coffee_typeof(o); }
function Select_coffee_extends() { return Select_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Select_coffee_extends.apply(null, arguments); }
function Select_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Select_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Select_coffee_toPropertyKey(o.key), o); } }
function Select_coffee_createClass(e, r, t) { return r && Select_coffee_defineProperties(e.prototype, r), t && Select_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Select_coffee_toPropertyKey(t) { var i = Select_coffee_toPrimitive(t, "string"); return "symbol" == Select_coffee_typeof(i) ? i : i + ""; }
function Select_coffee_toPrimitive(t, r) { if ("object" != Select_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Select_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Select_coffee_callSuper(t, o, e) { return o = Select_coffee_getPrototypeOf(o), Select_coffee_possibleConstructorReturn(t, Select_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Select_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Select_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == Select_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Select_coffee_assertThisInitialized(t); }
function Select_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Select_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Select_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Select_coffee_getPrototypeOf(t) { return Select_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Select_coffee_getPrototypeOf(t); }
function Select_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Select_coffee_setPrototypeOf(t, e); }
function Select_coffee_setPrototypeOf(t, e) { return Select_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Select_coffee_setPrototypeOf(t, e); }
var Select;

Select = /*#__PURE__*/function (_React$Component) {
  /**
   * Select Field for the Listing Table
   *
   * A select field is identified by the column type "choices" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "choices"}, ... }`
   *
   */
  function Select(props) {
    var _this;
    Select_coffee_classCallCheck(this, Select);
    _this = Select_coffee_callSuper(this, Select, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue || ""
    };
    // bind event handler to the current context
    _this.on_blur = _this.on_blur.bind(_this);
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */
  Select_coffee_inherits(Select, _React$Component);
  return Select_coffee_createClass(Select, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }

    /**
     * Event handler when the mouse left the select field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_blur",
    value: function on_blur(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the numeric field
      value = el.value;
      this.setState({
        value: value
      });
      console.debug("Select::on_blur: value=".concat(value));
      // Call the *save* field handler with the UID, name, value
      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Event handler when the value changed of the select field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the numeric field
      value = el.value;
      // Only propagate for new values
      if (value === this.state.value) {
        return;
      }
      console.debug("Select::on_change: value=".concat(value));
      // store the new value
      this.setState({
        value: value
      });
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Select options builder
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ...}
     */
  }, {
    key: "build_options",
    value: function build_options() {
      var description, i, len, option, options, ref, title, value;
      options = [];
      ref = this.props.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        value = option.ResultValue;
        title = option.ResultText;
        description = option.ResultDescription;
        options.push(/*#__PURE__*/external_React_default().createElement("option", {
          key: value,
          title: description,
          value: value
        }, title));
      }
      return options;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("select", Select_coffee_extends({
        key: this.props.name,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.help || this.props.title,
        disabled: this.props.disabled,
        onBlur: this.props.onBlur || this.on_blur,
        onChange: this.props.onChange || this.on_change,
        required: this.props.required,
        className: this.props.className,
        tabIndex: this.props.tabIndex
      }, this.props.attrs), this.build_options()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Select_coffee = (Select);
;// ./components/StringField.coffee
function StringField_coffee_typeof(o) { "@babel/helpers - typeof"; return StringField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StringField_coffee_typeof(o); }
function StringField_coffee_extends() { return StringField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, StringField_coffee_extends.apply(null, arguments); }
function StringField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function StringField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, StringField_coffee_toPropertyKey(o.key), o); } }
function StringField_coffee_createClass(e, r, t) { return r && StringField_coffee_defineProperties(e.prototype, r), t && StringField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function StringField_coffee_toPropertyKey(t) { var i = StringField_coffee_toPrimitive(t, "string"); return "symbol" == StringField_coffee_typeof(i) ? i : i + ""; }
function StringField_coffee_toPrimitive(t, r) { if ("object" != StringField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StringField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function StringField_coffee_callSuper(t, o, e) { return o = StringField_coffee_getPrototypeOf(o), StringField_coffee_possibleConstructorReturn(t, StringField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], StringField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function StringField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == StringField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return StringField_coffee_assertThisInitialized(t); }
function StringField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function StringField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (StringField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function StringField_coffee_getPrototypeOf(t) { return StringField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, StringField_coffee_getPrototypeOf(t); }
function StringField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && StringField_coffee_setPrototypeOf(t, e); }
function StringField_coffee_setPrototypeOf(t, e) { return StringField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, StringField_coffee_setPrototypeOf(t, e); }
var StringField;

StringField = /*#__PURE__*/function (_React$Component) {
  /**
   * String Field for the Listing Table
   *
   * A string field is identified by the column type "string" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "string"}, ... }`
   *
   */
  function StringField(props) {
    var _this;
    StringField_coffee_classCallCheck(this, StringField);
    _this = StringField_coffee_callSuper(this, StringField, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue
    };
    // bind event handler to the current context
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */
  StringField_coffee_inherits(StringField, _React$Component);
  return StringField_coffee_createClass(StringField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }

    /**
     * Event handler when the value changed of the string field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the string field
      value = el.value;
      // store the new value
      this.setState({
        value: value
      });
      console.debug("StringField::on_change: value=".concat(value));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", StringField_coffee_extends({
        type: "text",
        size: this.props.size || 20,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.help || this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const StringField_coffee = (StringField);
;// ./components/TextField.coffee
function TextField_coffee_typeof(o) { "@babel/helpers - typeof"; return TextField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TextField_coffee_typeof(o); }
function TextField_coffee_extends() { return TextField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TextField_coffee_extends.apply(null, arguments); }
function TextField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TextField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TextField_coffee_toPropertyKey(o.key), o); } }
function TextField_coffee_createClass(e, r, t) { return r && TextField_coffee_defineProperties(e.prototype, r), t && TextField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TextField_coffee_toPropertyKey(t) { var i = TextField_coffee_toPrimitive(t, "string"); return "symbol" == TextField_coffee_typeof(i) ? i : i + ""; }
function TextField_coffee_toPrimitive(t, r) { if ("object" != TextField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TextField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TextField_coffee_callSuper(t, o, e) { return o = TextField_coffee_getPrototypeOf(o), TextField_coffee_possibleConstructorReturn(t, TextField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TextField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TextField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TextField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TextField_coffee_assertThisInitialized(t); }
function TextField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TextField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TextField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TextField_coffee_getPrototypeOf(t) { return TextField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TextField_coffee_getPrototypeOf(t); }
function TextField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TextField_coffee_setPrototypeOf(t, e); }
function TextField_coffee_setPrototypeOf(t, e) { return TextField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TextField_coffee_setPrototypeOf(t, e); }
var TextField;

TextField = /*#__PURE__*/function (_React$Component) {
  /**
   * Text Field for the Listing Table
   *
   * A text field is identified by the column type "text" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "text"}, ... }`
   *
   */
  function TextField(props) {
    var _this;
    TextField_coffee_classCallCheck(this, TextField);
    _this = TextField_coffee_callSuper(this, TextField, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue
    };
    // bind event handler to the current context
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */
  TextField_coffee_inherits(TextField, _React$Component);
  return TextField_coffee_createClass(TextField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }

    /**
     * Event handler when the value changed of the text field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the text field
      value = el.value;
      // store the new value
      this.setState({
        value: value
      });
      console.debug("StringField::on_change: value=".concat(value));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("textarea", TextField_coffee_extends({
        rows: this.props.rows || 3,
        cols: this.props.size || 20,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.help || this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TextField_coffee = (TextField);
;// ./components/FractionField.coffee
function FractionField_coffee_typeof(o) { "@babel/helpers - typeof"; return FractionField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, FractionField_coffee_typeof(o); }
function FractionField_coffee_extends() { return FractionField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, FractionField_coffee_extends.apply(null, arguments); }
function FractionField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function FractionField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, FractionField_coffee_toPropertyKey(o.key), o); } }
function FractionField_coffee_createClass(e, r, t) { return r && FractionField_coffee_defineProperties(e.prototype, r), t && FractionField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function FractionField_coffee_toPropertyKey(t) { var i = FractionField_coffee_toPrimitive(t, "string"); return "symbol" == FractionField_coffee_typeof(i) ? i : i + ""; }
function FractionField_coffee_toPrimitive(t, r) { if ("object" != FractionField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != FractionField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function FractionField_coffee_callSuper(t, o, e) { return o = FractionField_coffee_getPrototypeOf(o), FractionField_coffee_possibleConstructorReturn(t, FractionField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], FractionField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function FractionField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == FractionField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return FractionField_coffee_assertThisInitialized(t); }
function FractionField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function FractionField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (FractionField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function FractionField_coffee_getPrototypeOf(t) { return FractionField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, FractionField_coffee_getPrototypeOf(t); }
function FractionField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && FractionField_coffee_setPrototypeOf(t, e); }
function FractionField_coffee_setPrototypeOf(t, e) { return FractionField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, FractionField_coffee_setPrototypeOf(t, e); }
var FractionField;

FractionField = /*#__PURE__*/function (_React$Component) {
  /**
   * Fraction Field for the Listing Table
   *
   * A numeric field is identified by the column type "fraction" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "fraction"}, ... }`
   *
   */
  function FractionField(props) {
    var _this;
    FractionField_coffee_classCallCheck(this, FractionField);
    _this = FractionField_coffee_callSuper(this, FractionField, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue,
      size: _this.get_field_size_for(props.defaultValue)
    };
    // bind event handler to the current context
    _this.on_blur = _this.on_blur.bind(_this);
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */
  FractionField_coffee_inherits(FractionField, _React$Component);
  return FractionField_coffee_createClass(FractionField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }

    /**
     * Event handler when the mouse left the fraction field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_blur",
    value: function on_blur(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the fraction field
      value = el.value;
      // Remove trailing dots and/or fraction chars
      value = value.replace(/[\.,\/]*$/, "");
      // Validate if the entered value is a fraction
      if (!this.validate(value)) {
        value = "";
      }
      // Set the sanitized value back to the field
      el.value = value;
      // store the sanitized value in the state
      this.setState({
        value: value,
        size: this.get_field_size_for(value)
      });
      console.debug("FractionField::on_blur: value=".concat(value));
      // Call the *save* field handler with the UID, name, value
      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Event handler when the value changed of the fraction field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, fraction, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the fraction field
      value = el.value;
      // Remove trailing detection limits, dots and/or fraction chars. Validator
      // may fail otherwise because the user is still typing
      fraction = value.replace(/[<,>,=,\.,\/]*$/, "");
      // Validate if the entered value is a fraction
      if (fraction && !this.validate(fraction)) {
        value = value.replace(fraction, "");
      }
      // Set the sanitized value back to the field
      el.value = value;
      // store the new value
      this.setState({
        value: value,
        size: this.get_field_size_for(value)
      });
      console.debug("FractionField::on_change: value=".concat(value));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Calculate the field size for the given value to make all digits visible
     * @param value {string} a fraction string value
     */
  }, {
    key: "get_field_size_for",
    value: function get_field_size_for(value) {
      var length;
      length = value.toString().length;
      if (length < this.props.size) {
        return this.props.size;
      }
      return length;
    }

    /**
     * Checks if the entered value is a valid fraction
     * @param value {string} the value
     */
  }, {
    key: "validate",
    value: function validate(value) {
      var denominator, number, numbers, numerator;
      // remove leading detection limits
      value = value.replace(/^([<,>,<,=]*)(.*)$/, "$2");
      // remove trailing dots and/or fraction chars
      number = value.replace(/[\.,\/]*$/, "");
      if (!number) {
        return false;
      }
      // split fraction into numerator and denominator
      numbers = number.split("/");
      if (numbers.length !== 2) {
        return !Number.isNaN(Number(number));
      }
      // ensure the numerator is a number and different from 0
      numerator = Number(numbers[0]);
      if (Number.isNaN(numerator) || numerator === 0) {
        return false;
      }
      // ensure the denominator is a number and different from 0
      denominator = Number(numbers[1]);
      if (Number.isNaN(denominator) || denominator === 0) {
        return false;
      }
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", FractionField_coffee_extends({
        type: "text",
        size: this.state.size,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.help || this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onBlur: this.props.onBlur || this.on_blur,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const FractionField_coffee = (FractionField);
;// ./components/DateTime.coffee
function DateTime_coffee_typeof(o) { "@babel/helpers - typeof"; return DateTime_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, DateTime_coffee_typeof(o); }
function DateTime_coffee_extends() { return DateTime_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, DateTime_coffee_extends.apply(null, arguments); }
function DateTime_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function DateTime_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, DateTime_coffee_toPropertyKey(o.key), o); } }
function DateTime_coffee_createClass(e, r, t) { return r && DateTime_coffee_defineProperties(e.prototype, r), t && DateTime_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function DateTime_coffee_toPropertyKey(t) { var i = DateTime_coffee_toPrimitive(t, "string"); return "symbol" == DateTime_coffee_typeof(i) ? i : i + ""; }
function DateTime_coffee_toPrimitive(t, r) { if ("object" != DateTime_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != DateTime_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function DateTime_coffee_callSuper(t, o, e) { return o = DateTime_coffee_getPrototypeOf(o), DateTime_coffee_possibleConstructorReturn(t, DateTime_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], DateTime_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function DateTime_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == DateTime_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return DateTime_coffee_assertThisInitialized(t); }
function DateTime_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function DateTime_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (DateTime_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function DateTime_coffee_getPrototypeOf(t) { return DateTime_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, DateTime_coffee_getPrototypeOf(t); }
function DateTime_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && DateTime_coffee_setPrototypeOf(t, e); }
function DateTime_coffee_setPrototypeOf(t, e) { return DateTime_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, DateTime_coffee_setPrototypeOf(t, e); }
var DateTime;

DateTime = /*#__PURE__*/function (_React$Component) {
  /**
   * Date/DateTime field for the Listing Table
   *
   * A date/datetime field is identified by the column type "date" or "datetime" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "datetime"}, ... }`
   */
  function DateTime(props) {
    var _this;
    DateTime_coffee_classCallCheck(this, DateTime);
    var value;
    _this = DateTime_coffee_callSuper(this, DateTime, [props]);
    // remember the initial value
    _this.state = {
      value: props.defaultValue,
      date_value: "",
      time_value: ""
    };
    value = props.defaultValue;
    if (value) {
      _this.state.value = _this.format_date_value(value);
      _this.state.date_value = _this.format_date(value);
      _this.state.time_value = _this.format_time(value);
    }
    _this.dt_date = /*#__PURE__*/external_React_default().createRef();
    _this.dt_time = /*#__PURE__*/external_React_default().createRef();
    _this.dt_hidden = /*#__PURE__*/external_React_default().createRef();
    // bind event handler to the current context
    _this.on_change = _this.on_change.bind(_this);
    return _this;
  }

  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */
  DateTime_coffee_inherits(DateTime, _React$Component);
  return DateTime_coffee_createClass(DateTime, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value;
      if (this.props.defaultValue !== prevProps.defaultValue) {
        value = this.props.defaultValue;
        return this.setState({
          value: this.format_date_value(value),
          date_value: this.format_date(value),
          time_value: this.format_time(value)
        });
      }
    }

    /**
     * Format the date value
     *
     * @param d {string,object} date string or object
     * @returns {string} date or datetime
     */
  }, {
    key: "format_date_value",
    value: function format_date_value(d) {
      if (this.props.type === "date") {
        return this.format_date(d);
      }
      return "".concat(this.format_date(d), " ").concat(this.format_time(d));
    }

    /**
     * Format a date string/object to a date string with the format %Y-%m-%d
     *
     * @param d {string,object} date string or object
     * @returns {string} date in the format %Y-%m-%d
     */
  }, {
    key: "format_date",
    value: function format_date(d) {
      var date, day, month, year;
      date = new Date(d);
      year = date.getFullYear();
      month = String(date.getMonth() + 1).padStart(2, "0");
      day = String(date.getDate()).padStart(2, "0");
      return "".concat(year, "-").concat(month, "-").concat(day);
    }

    /**
     * Format a date string/object to a time string with the format %H:%M
     *
     * @param d {string,object} date string or object
     * @returns {string} time in the format %H-%M
     */
  }, {
    key: "format_time",
    value: function format_time(d) {
      var date, hours, minutes;
      date = new Date(d);
      hours = String(date.getHours()).padStart(2, "0");
      minutes = String(date.getMinutes()).padStart(2, "0");
      return "".concat(hours, ":").concat(minutes);
    }

    /**
     * Event handler when the value changed of the datetime field
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_change",
    value: function on_change(event) {
      var dt_date, dt_time, el, name, uid, value;
      // extract the current date and time values
      dt_date = this.dt_date.current.value;
      dt_time = this.dt_time.current.value;
      // ensure both components are set
      if (dt_date && !dt_time) {
        dt_time = "00:00";
      }
      // set the concatenated date and time to the hidden field
      if (dt_date && dt_time) {
        value = "".concat(dt_date, " ").concat(dt_time);
      } else {
        value = "";
      }
      this.setState({
        value: value,
        date_value: dt_date,
        time_value: dt_time
      });
      // extract the field values from the hidden field
      el = this.dt_hidden.current;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key attribute
      name = el.getAttribute("column_key") || el.name;
      console.debug("DateTime::on_change: value=".concat(value));
      // Call the *update* field handler
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.field_css || "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: "input-group flex-nowrap d-inline-flex w-auto datetimewidget"
      }, /*#__PURE__*/external_React_default().createElement("input", DateTime_coffee_extends({
        type: "date",
        ref: this.dt_date,
        name: "".concat(this.props.name, "-date"),
        title: this.props.help || this.props.title,
        className: this.props.className,
        disabled: this.props.disabled,
        required: this.props.required,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex,
        value: this.state.date_value,
        min: this.props.min_date,
        max: this.props.max_date
      }, this.props.attrs)), this.props.type === "datetime" && /*#__PURE__*/external_React_default().createElement("input", DateTime_coffee_extends({
        type: "time",
        ref: this.dt_time,
        name: "".concat(this.props.name, "-time"),
        className: this.props.className,
        title: this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex,
        value: this.state.time_value,
        min: this.props.min_time,
        max: this.props.max_time
      }, this.props.attrs))), /*#__PURE__*/external_React_default().createElement("input", {
        type: "hidden",
        ref: this.dt_hidden,
        uid: this.props.uid,
        name: this.props.name,
        column_key: this.props.column_key,
        value: this.state.value
      }), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const DateTime_coffee = (DateTime);
;// ./components/TableCell.coffee
function TableCell_coffee_typeof(o) { "@babel/helpers - typeof"; return TableCell_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableCell_coffee_typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function TableCell_coffee_extends() { return TableCell_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TableCell_coffee_extends.apply(null, arguments); }
function TableCell_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableCell_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableCell_coffee_toPropertyKey(o.key), o); } }
function TableCell_coffee_createClass(e, r, t) { return r && TableCell_coffee_defineProperties(e.prototype, r), t && TableCell_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableCell_coffee_toPropertyKey(t) { var i = TableCell_coffee_toPrimitive(t, "string"); return "symbol" == TableCell_coffee_typeof(i) ? i : i + ""; }
function TableCell_coffee_toPrimitive(t, r) { if ("object" != TableCell_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableCell_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableCell_coffee_callSuper(t, o, e) { return o = TableCell_coffee_getPrototypeOf(o), TableCell_coffee_possibleConstructorReturn(t, TableCell_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableCell_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableCell_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableCell_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableCell_coffee_assertThisInitialized(t); }
function TableCell_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableCell_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableCell_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableCell_coffee_getPrototypeOf(t) { return TableCell_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableCell_coffee_getPrototypeOf(t); }
function TableCell_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableCell_coffee_setPrototypeOf(t, e); }
function TableCell_coffee_setPrototypeOf(t, e) { return TableCell_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableCell_coffee_setPrototypeOf(t, e); }
var TableCell,
  TableCell_coffee_indexOf = [].indexOf;















TableCell = /*#__PURE__*/function (_React$Component) {
  function TableCell(props) {
    var _this;
    TableCell_coffee_classCallCheck(this, TableCell);
    _this = TableCell_coffee_callSuper(this, TableCell, [props]);
    // Zope Publisher Converter Argument Mapping
    _this.ZPUBLISHER_CONVERTER = {
      "boolean": ":record:ignore_empty",
      "select": ":records",
      "choices": ":records",
      "multiselect": ":list",
      "multichoice": ":list",
      "multivalue": ":list",
      "timeseries": ":list",
      "numeric": ":records",
      "fraction": ":records",
      "string": ":records",
      "text": "records",
      "datetime": ":records",
      "readonly": "",
      "default": ":records"
    };
    return _this;
  }
  TableCell_coffee_inherits(TableCell, _React$Component);
  return TableCell_coffee_createClass(TableCell, [{
    key: "get_column",
    value: function get_column() {
      return this.props.column;
    }
  }, {
    key: "get_item",
    value: function get_item() {
      return this.props.item;
    }
  }, {
    key: "get_column_key",
    value: function get_column_key() {
      return this.props.column_key;
    }
  }, {
    key: "render_before_content",
    value: function render_before_content() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var before, before_components, column_key, item;
      column_key = this.get_column_key();
      item = this.get_item();
      if (!item) {
        return;
      }
      before = item.before;
      if (!(column_key in before)) {
        return null;
      }
      // support to render React components
      before_components = item.before_components || {};
      return /*#__PURE__*/external_React_default().createElement("span", {
        key: column_key + "_before",
        className: "before-item"
      }, before_components[column_key], /*#__PURE__*/external_React_default().createElement("span", TableCell_coffee_extends({
        dangerouslySetInnerHTML: {
          __html: before[column_key]
        }
      }, props)));
    }
  }, {
    key: "render_after_content",
    value: function render_after_content() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var after, after_components, column_key, item;
      column_key = this.get_column_key();
      item = this.get_item();
      if (!item) {
        return;
      }
      after = item.after;
      if (!(column_key in after)) {
        return null;
      }
      // support to render React components
      after_components = item.after_components || {};
      return /*#__PURE__*/external_React_default().createElement("span", {
        key: column_key + "_after",
        className: "after-item"
      }, after_components[column_key], /*#__PURE__*/external_React_default().createElement("span", TableCell_coffee_extends({
        dangerouslySetInnerHTML: {
          __html: after[column_key]
        }
      }, props)));
    }
  }, {
    key: "is_edit_allowed",
    value: function is_edit_allowed() {
      var column_key, item;
      column_key = this.get_column_key();
      item = this.get_item();
      // the global allow_edit overrides all row specific settings
      if (!this.props.allow_edit) {
        return false;
      }
      // check if the field is listed in the item's allow_edit list
      if (TableCell_coffee_indexOf.call(item.allow_edit, column_key) >= 0) {
        return true;
      }
      return false;
    }
  }, {
    key: "is_disabled",
    value: function is_disabled() {
      var column_key, disabled, item;
      item = this.get_item();
      disabled = item.disabled;
      if (disabled === true || disabled === false) {
        return disabled;
      }
      if (disabled == null) {
        return false;
      }
      // check if the field is listed in the item's disabled list
      column_key = this.get_column_key();
      return TableCell_coffee_indexOf.call(disabled, column_key) >= 0;
    }
  }, {
    key: "is_required",
    value: function is_required() {
      var column_key, item, required, required_fields, selected;
      column_key = this.get_column_key();
      item = this.get_item();
      required_fields = item.required || [];
      required = TableCell_coffee_indexOf.call(required_fields, column_key) >= 0;
      // make the field conditionally required if the row is selected
      selected = this.props.selected;
      return required && selected;
    }
  }, {
    key: "get_name",
    value: function get_name() {
      var column_key, uid;
      uid = this.get_uid();
      column_key = this.get_column_key();
      return "".concat(column_key, ".").concat(uid);
    }
  }, {
    key: "get_uid",
    value: function get_uid() {
      var item;
      item = this.get_item();
      return item.uid;
    }
  }, {
    key: "is_selected",
    value: function is_selected() {
      var item, ref;
      item = this.get_item();
      return ref = item.uid, TableCell_coffee_indexOf.call(this.props.selected_uids, ref) >= 0;
    }
  }, {
    key: "get_value",
    value: function get_value() {
      var column_key, interims, item, value;
      column_key = this.get_column_key();
      item = this.get_item();
      value = item[column_key];
      // check if the field is an interim
      interims = this.get_interimfields();
      if (interims.hasOwnProperty(column_key)) {
        // extract the value from the interim field
        // {value: "", keyword: "", formatted_value: "", unit: "", title: ""}
        value = interims[column_key].value || "";
      }
      // values of input fields should not be null
      if (value === null) {
        value = "";
      }
      return value;
    }

    /*
    Returns the size for the folderitem or interim field
    */
  }, {
    key: "get_size",
    value: function get_size() {
      var column, column_key, default_size, interim, item, sizes, type, types_size;
      default_size = 5;
      types_size = {
        "string": 30,
        "text": 30
      };
      item = this.get_item();
      column_key = this.get_column_key();
      // Maybe the size is defined in the interim field
      if (this.is_interimfield()) {
        interim = item[column_key];
        if (interim && interim.hasOwnProperty("size")) {
          return interim.size;
        }
      }
      // check the size for this field is defined in current item
      sizes = item.size || {};
      if (column_key in sizes) {
        return sizes[column_key];
      }
      // maybe the size is defined in the column
      column = this.props.column || {};
      if ("size" in column) {
        return column.size;
      }
      // return default by type
      type = this.get_type();
      if (type in types_size) {
        return types_size[type];
      }
      return default_size;
    }

    /**
     * Create a mapping of interim keyword -> interim field
     *
     * Interim fields are record fields with a format like this:
     * {value: "", keyword: "", formatted_value: "", unit: "", title: ""}
     */
  }, {
    key: "get_interimfields",
    value: function get_interimfields() {
      var interims, item, mapping;
      item = this.get_item();
      interims = item.interimfields || [];
      mapping = {};
      interims.map(function (item, index) {
        return mapping[item.keyword] = item;
      });
      return mapping;
    }
  }, {
    key: "is_interimfield",
    value: function is_interimfield() {
      var column_key, interims;
      column_key = this.get_column_key();
      interims = this.get_interimfields();
      return interims.hasOwnProperty(column_key);
    }
  }, {
    key: "get_choices",
    value: function get_choices() {
      var item;
      item = this.get_item();
      return item.choices || {};
    }
  }, {
    key: "is_result_column",
    value: function is_result_column() {
      var column_key;
      column_key = this.get_column_key();
      if (column_key === "Result") {
        return true;
      }
      return false;
    }
  }, {
    key: "get_formatted_value",
    value: function get_formatted_value() {
      var column_key, formatted_value, item;
      column_key = this.get_column_key();
      item = this.get_item();
      // replacement html or plain value of the current column
      formatted_value = item.replace[column_key] || this.get_value();
      // use the formatted result
      if (this.is_result_column()) {
        formatted_value = item.formatted_result || formatted_value;
      }
      return formatted_value;
    }
  }, {
    key: "get_type",
    value: function get_type() {
      var choices, column, column_key, default_type, editable, interim, item, resultfield, value;
      column_key = this.get_column_key();
      item = this.get_item();
      // true if the field is editable
      editable = this.is_edit_allowed();
      resultfield = this.is_result_column();
      // timeseries field
      if (resultfield && item.result_type === "timeseries_readonly") {
        return item.result_type;
      }
      // readonly field
      if (!editable) {
        return "readonly";
      }
      // calculated fields are also in editable mode readonly
      if (resultfield && item.calculation) {
        return "calculated";
      }
      // check if the field is a string or datetime field
      if (resultfield && item.result_type) {
        return item.result_type;
      }
      // type definition of the column has precedence
      column = this.props.column || {};
      if ("type" in column) {
        return column["type"];
      }
      // check if the field is a boolean
      value = this.get_value();
      if (typeof value === "boolean") {
        return "boolean";
      }
      // check if the field is listed in choices
      choices = this.get_choices();
      if (column_key in choices) {
        // check if the field is a multi-choices
        default_type = "select";
        if (resultfield) {
          return item.result_type || default_type;
        }
        // Maybe is an interim field
        if (this.is_interimfield()) {
          column_key = this.get_column_key();
          interim = item[column_key];
          if (interim) {
            return interim.result_type || default_type;
          }
        }
        return default_type;
      }
      // check if the field is an interim
      if (this.is_interimfield()) {
        default_type = "interim";
        column_key = this.get_column_key();
        interim = item[column_key];
        if (interim) {
          return interim.result_type || default_type;
        }
        return default_type;
      }
      // the default
      return "numeric";
    }

    /**
     * Creates a readonly field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns ReadonlyField component
     */
  }, {
    key: "create_readonly_field",
    value: function create_readonly_field() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref.props;
      var column_key, css_class, formatted_value, item, name, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      css_class = props.css_class || "readonly";
      return /*#__PURE__*/external_React_default().createElement(ReadonlyField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        name: name,
        value: value,
        formatted_value: formatted_value,
        className: css_class
      }, props));
    }

    /**
     * Creates a calculated field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns CalculatedField component
     */
  }, {
    key: "create_calculated_field",
    value: function create_calculated_field() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref2.props;
      var column, column_key, css_class, formatted_value, help, item, name, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      selected = props.selected || this.is_selected();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm calculated";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(CalculatedField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: name,
        value: value,
        column_key: column_key,
        title: title,
        help: help,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        required: required,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        size: size
      }, props));
    }

    /**
     * Creates a hidden field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns HiddenField component
     */
  }, {
    key: "create_hidden_field",
    value: function create_hidden_field() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref3.props;
      var column_key, item, name, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      return /*#__PURE__*/external_React_default().createElement(HiddenField_coffee, TableCell_coffee_extends({
        key: name + "_hidden",
        uid: uid,
        name: name,
        value: value,
        column_key: column_key
      }, props));
    }

    /**
     * Creates a numeric field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns NumericField component
     */
  }, {
    key: "create_numeric_field",
    value: function create_numeric_field() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref4.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["numeric"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(NumericField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        help: help,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a string field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns StringField component
     */
  }, {
    key: "create_string_field",
    value: function create_string_field() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref5.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["string"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(StringField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        help: help,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a text field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns TextField component
     */
  }, {
    key: "create_text_field",
    value: function create_text_field() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref6.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["text"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(TextField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        help: help,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a fraction field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns NumericField component
     */
  }, {
    key: "create_fraction_field",
    value: function create_fraction_field() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref7.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["fraction"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(FractionField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        help: help,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a datetime field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns DateTime component
     */
  }, {
    key: "create_datetime_field",
    value: function create_datetime_field() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref8.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, max, max_date, max_time, min, min_date, min_time, name, required, result_type, selected, size, title, type, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      type = props.type || this.get_type();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      result_type = "date";
      converter = this.ZPUBLISHER_CONVERTER["string"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      // min/max dates
      min = column.min || null;
      max = column.max || null;
      if (min) {
        var _min$split = min.split(" ");
        var _min$split2 = _slicedToArray(_min$split, 2);
        min_date = _min$split2[0];
        min_time = _min$split2[1];
      }
      if (max) {
        var _max$split = max.split(" ");
        var _max$split2 = _slicedToArray(_max$split, 2);
        max_date = _max$split2[0];
        max_time = _max$split2[1];
      }
      return /*#__PURE__*/external_React_default().createElement(DateTime_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        help: help,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        results_type: result_type,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size,
        type: type,
        min_date: min_date,
        max_date: max_date,
        min_time: min_time,
        max_time: max_time
      }, props));
    }

    /**
     * Creates a select field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns SelectField component
     */
  }, {
    key: "create_select_field",
    value: function create_select_field() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref9.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, options, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      options = props.options || item.choices[column_key] || [];
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["select"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(Select_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        help: help,
        disabled: disabled,
        selected: selected,
        required: required,
        options: options,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a multichoice field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns MultiChoice component
     */
  }, {
    key: "create_multichoice_field",
    value: function create_multichoice_field() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref10.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, options, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      options = props.options || item.choices[column_key] || [];
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["multichoice"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(MultiChoice_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        help: help,
        disabled: disabled,
        selected: selected,
        required: required,
        options: options,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a multiselect field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns MultiSelect component
     */
  }, {
    key: "create_multiselect_field",
    value: function create_multiselect_field() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref11.props;
      var column, column_key, converter, css_class, disabled, duplicates, fieldname, formatted_value, help, item, name, options, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      options = item.choices[column_key] || [];
      duplicates = this.get_type() === "multiselect_duplicates";
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["multiselect"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(MultiSelect_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        value: value,
        column_key: column_key,
        title: title,
        help: help,
        disabled: disabled,
        selected: selected,
        required: required,
        options: options,
        duplicates: duplicates,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a multivalue field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns MultiValue component
     */
  }, {
    key: "create_multivalue_field",
    value: function create_multivalue_field() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref12.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["multivalue"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(MultiValue_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        value: value,
        column_key: column_key,
        title: title,
        help: help,
        disabled: disabled,
        selected: selected,
        required: required,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a timeseries field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns MultiValue component
     */
  }, {
    key: "create_timeseries_field",
    value: function create_timeseries_field() {
      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref13.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      if (this.is_readonly_timeseries) {
        formatted_value = item.formatted_result;
      } else {
        formatted_value = props.formatted_value || this.get_formatted_value();
      }
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["timeseries"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "form-control form-control-sm";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(TimeSeries_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        value: formatted_value,
        column_key: column_key,
        title: title,
        help: help,
        disabled: disabled,
        selected: selected,
        required: required,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }

    /**
     * Creates a checkbox field component
     *
     * The passed in `props` allow to override required values
     *
     * @param props {object} properties passed to the component
     * @returns Checkbox component
     */
  }, {
    key: "create_checkbox_field",
    value: function create_checkbox_field() {
      var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref14.props;
      var column, column_key, converter, css_class, disabled, fieldname, formatted_value, help, item, name, options, required, selected, size, title, uid, value;
      if (props == null) {
        props = {};
      }
      column_key = props.column_key || this.get_column_key();
      item = props.item || this.get_item();
      name = props.name || this.get_name();
      value = props.value || this.get_value();
      formatted_value = props.formatted_value || this.get_formatted_value();
      uid = props.uid || this.get_uid();
      title = props.title || this.props.column.title || column_key;
      options = item.choices[column_key] || [];
      column = props.column || this.get_column();
      if (item.help == null) {
        item.help = {};
      }
      help = props.help || item.help[column_key] || column.help;
      converter = this.ZPUBLISHER_CONVERTER["boolean"];
      fieldname = name + converter;
      selected = props.selected || this.is_selected();
      disabled = props.disabled || this.is_disabled();
      required = props.required || this.is_required();
      size = props.size || this.get_size();
      css_class = props.css_class || "checkbox";
      if (required) {
        css_class += " required";
      }
      return /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        value: "on",
        column_key: column_key,
        title: title,
        help: help,
        defaultChecked: value,
        disabled: disabled,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }
  }, {
    key: "render_content",
    value: function render_content() {
      var column_key, field, item, type, uid;
      // the current rendered column cell name
      column_key = this.get_column_key();
      // single folderitem
      item = this.get_item();
      // return if there is no item
      if (!item) {
        console.warn("Skipping empty folderitem for column '".concat(column_key, "'"));
        return null;
      }
      // the UID of the folderitem
      uid = this.get_uid();
      // field type to render
      type = this.get_type();
      // the field to return
      field = [];
      if (type === "readonly") {
        field = field.concat(this.create_readonly_field());
      } else if (type === "calculated") {
        field = field.concat(this.create_calculated_field());
      } else if (type === "select" || type === "choices") {
        field = field.concat(this.create_select_field());
      } else if (type === "multichoice") {
        field = field.concat(this.create_multichoice_field());
      } else if (type === "multiselect" || type === "multiselect_duplicates") {
        field = field.concat(this.create_multiselect_field());
      } else if (type === "timeseries" || type === "timeseries_readonly") {
        field = field.concat(this.create_timeseries_field());
      } else if (type === "multivalue") {
        field = field.concat(this.create_multivalue_field());
      } else if (type === "boolean") {
        field = field.concat(this.create_checkbox_field());
      } else if (type === "numeric") {
        field = field.concat(this.create_numeric_field());
      } else if (type === "string") {
        field = field.concat(this.create_string_field());
      } else if (type === "text") {
        field = field.concat(this.create_text_field());
      } else if (type === "date" || type === "datetime") {
        field = field.concat(this.create_datetime_field());
      } else if (type === "fraction") {
        field = field.concat(this.create_fraction_field());
      } else {
        field = field.concat(this.create_numeric_field());
      }
      return field;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("td", {
        className: this.props.className,
        colSpan: this.props.colspan,
        rowSpan: this.props.rowspan
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "form-group"
      }, this.render_before_content(), this.render_content(), this.render_after_content()));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableCell_coffee = (TableCell);
;// ./components/RemarksField.coffee
function RemarksField_coffee_typeof(o) { "@babel/helpers - typeof"; return RemarksField_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, RemarksField_coffee_typeof(o); }
function RemarksField_coffee_extends() { return RemarksField_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, RemarksField_coffee_extends.apply(null, arguments); }
function RemarksField_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function RemarksField_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, RemarksField_coffee_toPropertyKey(o.key), o); } }
function RemarksField_coffee_createClass(e, r, t) { return r && RemarksField_coffee_defineProperties(e.prototype, r), t && RemarksField_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function RemarksField_coffee_toPropertyKey(t) { var i = RemarksField_coffee_toPrimitive(t, "string"); return "symbol" == RemarksField_coffee_typeof(i) ? i : i + ""; }
function RemarksField_coffee_toPrimitive(t, r) { if ("object" != RemarksField_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != RemarksField_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function RemarksField_coffee_callSuper(t, o, e) { return o = RemarksField_coffee_getPrototypeOf(o), RemarksField_coffee_possibleConstructorReturn(t, RemarksField_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], RemarksField_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function RemarksField_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == RemarksField_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return RemarksField_coffee_assertThisInitialized(t); }
function RemarksField_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function RemarksField_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RemarksField_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function RemarksField_coffee_getPrototypeOf(t) { return RemarksField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, RemarksField_coffee_getPrototypeOf(t); }
function RemarksField_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && RemarksField_coffee_setPrototypeOf(t, e); }
function RemarksField_coffee_setPrototypeOf(t, e) { return RemarksField_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, RemarksField_coffee_setPrototypeOf(t, e); }
var RemarksField,
  RemarksField_coffee_indexOf = [].indexOf;

RemarksField = /*#__PURE__*/function (_React$Component) {
  /**
   * Collapsible Remarks Field for the Listing Table
   *
   * A remarks field is identified by the column type "remarks" in the listing
   * view, e.g.  `self.columns = {"Remarks": {"type": "remarks"}, ... }`
   *
   */
  function RemarksField(props) {
    var _this;
    RemarksField_coffee_classCallCheck(this, RemarksField);
    _this = RemarksField_coffee_callSuper(this, RemarksField, [props]);
    // Bind events to local context
    _this.on_blur = _this.on_blur.bind(_this);
    _this.on_change = _this.on_change.bind(_this);
    _this.state = {
      value: props.value
    };
    return _this;
  }
  RemarksField_coffee_inherits(RemarksField, _React$Component);
  return RemarksField_coffee_createClass(RemarksField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.info("RemarksField::componentDidUpdate");
      if (this.props.value !== prevProps.value) {
        return this.setState({
          value: this.props.value
        });
      }
    }

    /**
     * Event handler when the mouse left the textarea
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_blur",
    value: function on_blur(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key (usually `Remarks`)
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the textarea
      value = el.value;
      console.debug("RemarksField:on_blur: value=".concat(value));
      // Call the *save* field handler with the UID, name, value
      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Event handler when the value changed of the textarea
     * @param event {object} ReactJS event object
     */
  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget;
      // Extract the UID attribute
      uid = el.getAttribute("uid");
      // Extract the column_key (usually `Remarks`)
      name = el.getAttribute("column_key") || el.name;
      // Extract the value of the textarea
      value = el.value;
      this.setState({
        value: value
      });
      console.debug("RemarksField:on_change: value=".concat(value));
      // Call the *update* field handler with the UID, name, value
      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }

    /**
     * Check if the remarks field is editable or not
     * @param item {object} the folderitem containing the {"Remarks": "..."} data
     * @param column_key {string} the current rendered column key (usually `Remarks`)
     */
  }, {
    key: "can_edit",
    value: function can_edit() {
      var allow_edit, column_key, item;
      item = this.props.item;
      column_key = this.props.column_key;
      allow_edit = item.allow_edit || [];
      return RemarksField_coffee_indexOf.call(allow_edit, column_key) >= 0;
    }

    /**
     * Get the title of the column object, e.g.: self.columns = {"Remarks": {"title": "..."}}
     * @param columns {object} as defined in the browser listing view
     * @param column {object} the remarks column definition
     */
  }, {
    key: "get_column_title",
    value: function get_column_title() {
      var column, column_key, columns, title;
      columns = this.props.columns;
      column_key = this.props.column_key;
      column = columns[column_key];
      title = column.title || "Remarks";
      if (typeof _ === "function") {
        title = _(title);
      }
      return title;
    }

    /**
     * Compute the inline CSS style for the field
     * @param uid {string} UID of the folderitem
     * @param expanded_remarks {array} list of expanded remarks fields
     */
  }, {
    key: "get_style",
    value: function get_style() {
      var show, style, uid;
      uid = this.props.uid;
      // show if the remarks are expanded or if a remark is set
      show = RemarksField_coffee_indexOf.call(this.props.expanded_remarks, uid) >= 0 || this.props.value.length > 0;
      style = {
        display: show ? "block" : "none"
      };
      return style;
    }

    /**
     * Render the editable/readonly remarks field
     * @param uid {string} UID of the folderitem
     * @param column_key {string} the current rendered column key (usually `Remarks`)
     * @param item {object} the folderitem containing the {"Remarks": "..."} data
     */
  }, {
    key: "render_remarks_field",
    value: function render_remarks_field() {
      var column_key, field, name, uid;
      uid = this.props.uid;
      column_key = this.props.column_key;
      name = "".concat(column_key, ".").concat(uid, ":records");
      if (!this.can_edit()) {
        field = /*#__PURE__*/external_React_default().createElement("span", {
          className: "remarksfield",
          dangerouslySetInnerHTML: {
            __html: this.state.value
          }
        });
      } else {
        field = /*#__PURE__*/external_React_default().createElement("textarea", RemarksField_coffee_extends({
          className: "remarksfield form-control",
          uid: uid,
          column_key: column_key,
          style: {
            width: "100%"
          },
          rows: this.props.rows || 2,
          name: name,
          onBlur: this.props.onBlur || this.on_blur,
          onChange: this.props.onChange || this.on_change,
          value: this.state.value,
          tabIndex: this.props.tabIndex
        }, this.props.attrs));
      }
      return field;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.uid) {
        return null;
      }
      return /*#__PURE__*/external_React_default().createElement("div", {
        style: this.get_style(),
        className: this.props.field_css || "remarks text-muted"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.before_css || "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-hand-point-right"
      }), " ", this.get_column_title(), ":"), this.render_remarks_field(), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: this.props.after_css || "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const RemarksField_coffee = (RemarksField);
;// ./components/TableTransposedCell.coffee
function TableTransposedCell_coffee_typeof(o) { "@babel/helpers - typeof"; return TableTransposedCell_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableTransposedCell_coffee_typeof(o); }
function TableTransposedCell_coffee_extends() { return TableTransposedCell_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TableTransposedCell_coffee_extends.apply(null, arguments); }
function TableTransposedCell_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableTransposedCell_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableTransposedCell_coffee_toPropertyKey(o.key), o); } }
function TableTransposedCell_coffee_createClass(e, r, t) { return r && TableTransposedCell_coffee_defineProperties(e.prototype, r), t && TableTransposedCell_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableTransposedCell_coffee_toPropertyKey(t) { var i = TableTransposedCell_coffee_toPrimitive(t, "string"); return "symbol" == TableTransposedCell_coffee_typeof(i) ? i : i + ""; }
function TableTransposedCell_coffee_toPrimitive(t, r) { if ("object" != TableTransposedCell_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableTransposedCell_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableTransposedCell_coffee_callSuper(t, o, e) { return o = TableTransposedCell_coffee_getPrototypeOf(o), TableTransposedCell_coffee_possibleConstructorReturn(t, TableTransposedCell_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableTransposedCell_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableTransposedCell_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableTransposedCell_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableTransposedCell_coffee_assertThisInitialized(t); }
function TableTransposedCell_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableTransposedCell_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableTransposedCell_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableTransposedCell_coffee_getPrototypeOf(t) { return TableTransposedCell_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableTransposedCell_coffee_getPrototypeOf(t); }
function TableTransposedCell_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableTransposedCell_coffee_setPrototypeOf(t, e); }
function TableTransposedCell_coffee_setPrototypeOf(t, e) { return TableTransposedCell_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableTransposedCell_coffee_setPrototypeOf(t, e); }
var TableTransposedCell,
  TableTransposedCell_coffee_indexOf = [].indexOf;





/**
 * This component is currently only used for the Transposed Layout in Worksheets
 */
TableTransposedCell = /*#__PURE__*/function (_TableCell) {
  function TableTransposedCell(props) {
    var _this;
    TableTransposedCell_coffee_classCallCheck(this, TableTransposedCell);
    _this = TableTransposedCell_coffee_callSuper(this, TableTransposedCell, [props]);
    // Bind event handler to local context
    _this.on_result_expand_click = _this.on_result_expand_click.bind(_this);
    return _this;
  }

  /**
   * Get the transposed folderitem
   *
   * also see bika.lims.browser.worksheet.views.analyses_transposed.py
   *
   * The "transposed item" is the original folderitem, which is stored below the
   * `column_key` of the transposed column, e.g.
   *
   * columns: {1: {…}, 2: {…}, column_key: {…}}
   * folderitems: [
   *   {1: {original-folderitem}, 2: {original-folderitem}, item_key: "Pos", column_key: "Positions"},
   *   {1: {original-folderitem}, 2: {original-folderitem}, item_key: "Result", column_key: "Calcium"},
   *   {1: {original-folderitem}, 2: {original-folderitem}, item_key: "Result", column_key: "Magnesiumn"},
   * ]
   */
  TableTransposedCell_coffee_inherits(TableTransposedCell, _TableCell);
  return TableTransposedCell_coffee_createClass(TableTransposedCell, [{
    key: "get_item",
    value: function get_item() {
      // @props.item: transposed folderitem (see TableCells.coffee)
      // @props.column_key: current column key rendered, e.g. "1", "2", "column_key"
      return this.props.item[this.props.column_key];
    }

    /**
     * Get interimfields of the item
     */
  }, {
    key: "get_interimfields",
    value: function get_interimfields() {
      var item;
      item = this.get_item();
      if (!item) {
        return [];
      }
      return item.interimfields || [];
    }

    /**
     * Check if the item has interimfields defined
     */
  }, {
    key: "has_interimfields",
    value: function has_interimfields() {
      var interims;
      interims = this.get_interimfields();
      return interims.length > 0;
    }

    /**
     * Get the UID of the transposed item
     */
  }, {
    key: "get_uid",
    value: function get_uid() {
      var item;
      item = this.get_item();
      if (!item) {
        return null;
      }
      return item.uid;
    }
  }, {
    key: "get_resultfield_title",
    value: function get_resultfield_title() {
      var result_column;
      // get the (translated) title of the results column
      result_column = this.props.columns["Result"];
      return result_column.title || window._t("Result");
    }

    /**
     * Get the value within the transposed folderitem to render
     *
     * also see bika.lims.browser.worksheet.views.analyses_transposed.py
     *
     * The `item_key` (see also above) within a transposed folderitems item,
     * points to the value to be rendered from the original folderitem.
     *
     */
  }, {
    key: "get_column_key",
    value: function get_column_key() {
      // @props.item is a transposed folderitem
      // @props.column_key is the actual column key rendered, e.g. "1", "2", "column_key"
      return this.props.item.item_key || this.props.item.column_key;
    }
  }, {
    key: "is_header_slot",
    value: function is_header_slot() {
      var item, ref;
      item = this.get_item();
      if (!item) {
        return false;
      }
      if (item.uid) {
        return false;
      }
      if (!(item != null ? (ref = item.replace) != null ? ref.Pos : void 0 : void 0)) {
        return false;
      }
      return true;
    }
  }, {
    key: "is_assigned_slot",
    value: function is_assigned_slot() {
      var item;
      item = this.get_item();
      if (!item) {
        return false;
      }
      if (!item.uid) {
        return false;
      }
      return true;
    }
  }, {
    key: "is_unassigned_slot",
    value: function is_unassigned_slot() {
      return !this.is_assigned_slot();
    }
  }, {
    key: "is_loading",
    value: function is_loading(uid) {
      var loading_uids;
      loading_uids = this.props.loading_uids || [];
      return loading_uids.indexOf(uid) > -1;
    }

    /**
     * Calculate CSS Class for the <td> cell based on the original folderitem
     */
  }, {
    key: "get_css",
    value: function get_css() {
      var css, item, ref;
      item = this.get_item();
      css = ["transposed", this.props.className];
      if (this.is_result_column()) {
        css.push("result");
      }
      if (!item) {
        css.push("empty");
      } else {
        css.push(item.state_class);
        if (ref = item.uid, TableTransposedCell_coffee_indexOf.call(this.props.selected_uids, ref) >= 0) {
          css.push("info");
        }
      }
      return css.join(" ");
    }
  }, {
    key: "get_remarks_columns",
    value: function get_remarks_columns() {
      var columns, key, ref, value;
      columns = [];
      ref = this.props.columns;
      for (key in ref) {
        value = ref[key];
        if (value.type === "remarks") {
          columns.push(key);
        }
      }
      return columns;
    }

    /**
     * Creates a select checkbox for an assigned slot
     *
     * @param props {object} properties passed to the component
     * @returns ReadonlyField component
     */
  }, {
    key: "render_select_checkbox",
    value: function render_select_checkbox() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref.props;
      var disabled, item, loading, name, selected, uid;
      if (props == null) {
        props = {};
      }
      uid = this.get_uid();
      item = this.get_item();
      // already checked in render(), but just to be sure
      if (!(item && uid)) {
        return;
      }
      name = "".concat(this.props.select_checkbox_name, ":list");
      disabled = this.is_disabled();
      selected = this.is_selected();
      loading = this.is_loading(uid);
      return [/*#__PURE__*/external_React_default().createElement("div", {
        key: "select",
        className: "checkbox d-flex d-flex-row align-items-center flex-nowrap"
      }, !loading && /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, TableTransposedCell_coffee_extends({
        name: name,
        value: uid,
        disabled: disabled,
        checked: selected,
        onChange: this.props.on_select_checkbox_checked
      }, props)), loading && /*#__PURE__*/external_React_default().createElement("span", {
        className: "spinner-border spinner-border-sm mr-2",
        role: "status",
        "aria-hidden": "true"
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: "badge badge-secondary"
      }, item.Pos), /*#__PURE__*/external_React_default().createElement("div", {
        className: "ml-2 small text-secondary"
      }, item.Service))];
    }

    /**
     * Render all interim fields of the current item
     *
     * @param props {object} properties passed to the component
     * @returns Interim Fields
     */
  }, {
    key: "render_interims",
    value: function render_interims() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref2.props;
      var fields, i, index, interim, interims, item, keyword, len, size, title, type, uid, unit;
      if (props == null) {
        props = {};
      }
      fields = [];
      uid = this.get_uid();
      item = this.get_item();
      // already checked in render(), but just to be sure
      if (!item) {
        return;
      }
      interims = item.interimfields || [];
      // [{value: 10, keyword: "F_cl", formatted_value: "10,0", unit: "mg/mL", title: "Faktor cl"}, ...]
      for (index = i = 0, len = interims.length; i < len; index = ++i) {
        interim = interims[index];
        // get the keyword of the interim field
        keyword = interim.keyword;
        if (!this.props.columns.hasOwnProperty(keyword)) {
          // skip interims which are not listed in the columns
          // -> see: bika.lims.browser.analyses.view.folderitems
          continue;
        }
        // get the unit of the interim
        unit = interim.unit || "";
        // title / keyword
        title = interim.title || keyword;
        // field size
        size = interim.size || 5;
        // prepare the field properties
        props = {
          key: keyword,
          column_key: keyword,
          name: "".concat(keyword, ".").concat(uid),
          title: title,
          placeholder: title,
          defaultValue: interim.value,
          formatted_value: interim.formatted_value,
          size: size,
          before_css: "d-block",
          after_css: "d-inline",
          field_css: "d-block mb-2 small",
          before: "<span class='text-secondary'>".concat(title, "</span>"),
          after: "<span class='text-secondary small pl-1'>".concat(unit, "</span>")
        };
        if (this.is_edit_allowed()) {
          // add a numeric field per interim
          props.className = "form-control form-control-sm interim";
          type = interim.result_type;
          if (type === "select" || type === "choices") {
            fields = fields.concat(this.create_select_field({
              props: props
            }));
          } else if (type === "multichoice") {
            fields = fields.concat(this.create_multichoice_field({
              props: props
            }));
          } else if (type === "multiselect" || type === "multiselect_duplicates") {
            fields = fields.concat(this.create_multiselect_field({
              props: props
            }));
          } else if (type === "multivalue") {
            fields = fields.concat(this.create_multivalue_field({
              props: props
            }));
          } else if (type === "boolean") {
            fields = fields.concat(this.create_checkbox_field({
              props: props
            }));
          } else if (type === "numeric") {
            fields = fields.concat(this.create_numeric_field({
              props: props
            }));
          } else if (type === "string") {
            fields = fields.concat(this.create_string_field({
              props: props
            }));
          } else if (type === "datetime") {
            fields = fields.concat(this.create_datetime_field({
              props: props
            }));
          } else if (type === "fraction") {
            fields = fields.concat(this.create_fraction_field({
              props: props
            }));
          } else {
            fields = fields.concat(this.create_numeric_field({
              props: props
            }));
          }
        } else {
          props.className = "readonly interim";
          fields = fields.concat(this.create_readonly_field({
            props: props
          }));
        }
      }
      return fields;
    }

    /**
     * Render the remarks toggle icon
     */
  }, {
    key: "render_remarks_toggle",
    value: function render_remarks_toggle() {
      var fields, item, uid;
      fields = [];
      uid = this.get_uid();
      item = this.get_item();
      // already checked in render(), but just to be sure
      if (!item) {
        return;
      }
      if (this.get_remarks_columns().length > 0) {
        fields = fields.concat(/*#__PURE__*/external_React_default().createElement("a", {
          key: uid + "_remarks",
          href: "#",
          className: "transposed_remarks",
          uid: uid,
          onClick: this.props.on_remarks_expand_click
        }, /*#__PURE__*/external_React_default().createElement("i", {
          className: "remarksicon fas fa-comment"
        })));
      }
      return fields;
    }

    /**
     * Render the actual analysis remarks textbox
     */
  }, {
    key: "render_remarks",
    value: function render_remarks() {
      var column_index, column_key, fields, i, item, len, ref, uid, value;
      fields = [];
      column_key = this.get_column_key();
      uid = this.get_uid();
      item = this.get_item();
      // already checked in render(), but just to be sure
      if (!item) {
        return;
      }
      ref = this.get_remarks_columns();
      // Append Remarks field(s)
      for (column_index = i = 0, len = ref.length; i < len; column_index = ++i) {
        column_key = ref[column_index];
        value = item[column_key];
        fields.push(/*#__PURE__*/external_React_default().createElement("span", {
          key: column_index + "_remarks"
        }, /*#__PURE__*/external_React_default().createElement(RemarksField_coffee, TableTransposedCell_coffee_extends({}, this.props, {
          uid: uid,
          item: item,
          column_key: column_key,
          value: item[column_key]
        }))));
      }
      return fields;
    }

    /**
     * Render analysis attachments
     */
  }, {
    key: "render_attachments",
    value: function render_attachments() {
      var column_key, fields, item, uid;
      fields = [];
      column_key = this.get_column_key();
      uid = this.get_uid();
      item = this.get_item();
      // already checked in render(), but just to be sure
      if (!item) {
        return;
      }
      if (item.replace.Attachments) {
        fields = fields.concat(this.create_readonly_field({
          props: {
            key: "attachments",
            uid: uid,
            item: item,
            column_key: "Attachments",
            formatted_value: item.replace.Attachments,
            attrs: {
              style: {
                display: "block"
              }
            }
          }
        }));
      }
      return fields;
    }

    /**
     * Render the result field + additional fields
     */
  }, {
    key: "render_result",
    value: function render_result() {
      var column_key, item, props, result_field, type, uid;
      column_key = this.get_column_key();
      item = this.get_item();
      // already checked in render(), but just to be sure
      if (!item) {
        return;
      }
      uid = this.get_uid();
      type = this.get_type();
      props = {};
      if (type === "readonly") {
        result_field = this.create_readonly_field({
          props: props
        });
      } else {
        // calculated field
        if (type === "calculated") {
          result_field = this.create_calculated_field({
            props: props
          });
        } else if (type === "select" || type === "choices") {
          result_field = this.create_select_field({
            props: props
          });
        } else if (type === "multichoice") {
          result_field = this.create_multichoice_field({
            props: props
          });
        } else if (type === "multiselect" || type === "multiselect_duplicates") {
          result_field = this.create_multiselect_field({
            props: props
          });
        } else if (type === "multivalue") {
          result_field = this.create_multivalue_field({
            props: props
          });
        } else if (type === "boolean") {
          result_field = this.create_checkbox_field({
            props: props
          });
        } else if (type === "numeric") {
          result_field = this.create_numeric_field({
            props: props
          });
        } else if (type === "string") {
          result_field = this.create_string_field({
            props: props
          });
        } else if (type === "datetime") {
          result_field = this.create_datetime_field({
            props: props
          });
        } else if (type === "fraction") {
          result_field = this.create_fraction_field({
            props: props
          });
        } else {
          result_field = this.create_numeric_field({
            props: props
          });
        }
      }
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "result"
      }, /*#__PURE__*/external_React_default().createElement("div", null, this.render_before_content()), /*#__PURE__*/external_React_default().createElement("div", {
        className: "d-flex d-flex-row flex-nowrap"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "align-self-center"
      }, result_field), /*#__PURE__*/external_React_default().createElement("div", {
        className: "align-self-center"
      }, this.render_after_content()), /*#__PURE__*/external_React_default().createElement("div", {
        className: "align-self-center"
      }, this.render_remarks_toggle())));
    }

    /**
     * Change the icon depending on the visible state of the interim fields
     *
     * NOTE: We could have also used the Bootstrap events:
     *       https://getbootstrap.com/docs/4.6/components/collapse/#events
     *       but this approach takes less boilerplate code
     */
  }, {
    key: "on_result_expand_click",
    value: function on_result_expand_click(event) {
      var el, icon, id, target;
      // switch the icon depending on the toggle state
      el = event.currentTarget;
      id = el.getAttribute("href");
      target = document.querySelector(id);
      icon = el.querySelector("i");
      if (target.classList.contains("show")) {
        return icon.classList.replace("fa-minus-square", "fa-plus-square");
      } else {
        return icon.classList.replace("fa-plus-square", "fa-minus-square");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("td", {
        className: this.get_css(),
        colSpan: this.props.colspan,
        rowSpan: this.props.rowspan
      }, this.is_header_slot() && /*#__PURE__*/external_React_default().createElement("div", {
        className: "position"
      }, this.create_readonly_field()), this.is_assigned_slot() && /*#__PURE__*/external_React_default().createElement("div", {
        className: "card"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "card-header"
      }, this.render_select_checkbox()), /*#__PURE__*/external_React_default().createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "text-secondary"
      }, this.has_interimfields() && /*#__PURE__*/external_React_default().createElement("a", {
        onClick: this.on_result_expand_click,
        className: "text-decoration-none",
        "data-toggle": "collapse",
        href: "#interims_".concat(this.get_uid())
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-plus-square"
      }), " ", this.get_resultfield_title()), !this.has_interimfields() && this.get_resultfield_title()), this.has_interimfields() && /*#__PURE__*/external_React_default().createElement("div", {
        "class": "collapse p-1 my-2 border rounded",
        id: "interims_".concat(this.get_uid())
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "small text-secondary border-bottom mb-2"
      }, window._t("Result variables")), this.render_interims()), this.render_result()), /*#__PURE__*/external_React_default().createElement("div", {
        className: "card-footer"
      }, this.render_remarks(), this.render_attachments())));
    }
  }]);
}(TableCell_coffee);
/* harmony default export */ const TableTransposedCell_coffee = (TableTransposedCell);
;// ./components/TableCells.coffee
function TableCells_coffee_typeof(o) { "@babel/helpers - typeof"; return TableCells_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableCells_coffee_typeof(o); }
function TableCells_coffee_extends() { return TableCells_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TableCells_coffee_extends.apply(null, arguments); }
function TableCells_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableCells_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableCells_coffee_toPropertyKey(o.key), o); } }
function TableCells_coffee_createClass(e, r, t) { return r && TableCells_coffee_defineProperties(e.prototype, r), t && TableCells_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableCells_coffee_toPropertyKey(t) { var i = TableCells_coffee_toPrimitive(t, "string"); return "symbol" == TableCells_coffee_typeof(i) ? i : i + ""; }
function TableCells_coffee_toPrimitive(t, r) { if ("object" != TableCells_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableCells_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableCells_coffee_callSuper(t, o, e) { return o = TableCells_coffee_getPrototypeOf(o), TableCells_coffee_possibleConstructorReturn(t, TableCells_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableCells_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableCells_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableCells_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableCells_coffee_assertThisInitialized(t); }
function TableCells_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableCells_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableCells_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableCells_coffee_getPrototypeOf(t) { return TableCells_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableCells_coffee_getPrototypeOf(t); }
function TableCells_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableCells_coffee_setPrototypeOf(t, e); }
function TableCells_coffee_setPrototypeOf(t, e) { return TableCells_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableCells_coffee_setPrototypeOf(t, e); }
var TableCells,
  TableCells_coffee_indexOf = [].indexOf;




TableCells = /*#__PURE__*/function (_React$Component) {
  function TableCells(props) {
    var _this;
    TableCells_coffee_classCallCheck(this, TableCells);
    _this = TableCells_coffee_callSuper(this, TableCells, [props]);
    _this.on_remarks_expand_click = _this.on_remarks_expand_click.bind(_this);
    return _this;
  }
  TableCells_coffee_inherits(TableCells, _React$Component);
  return TableCells_coffee_createClass(TableCells, [{
    key: "on_remarks_expand_click",
    value: function on_remarks_expand_click(event) {
      var el, uid;
      event.preventDefault();
      el = event.currentTarget;
      uid = el.getAttribute("uid");
      // notify parent event handler with the extracted uid
      if (this.props.on_remarks_expand_click) {
        return this.props.on_remarks_expand_click(uid);
      }
    }
  }, {
    key: "get_column",
    value: function get_column(column_key) {
      return this.props.columns[column_key];
    }
  }, {
    key: "get_item",
    value: function get_item() {
      return this.props.item;
    }
  }, {
    key: "get_uid",
    value: function get_uid() {
      var item;
      item = this.get_item();
      return item.uid;
    }
  }, {
    key: "get_tab_index",
    value: function get_tab_index(column_key, item) {
      var tabindex;
      tabindex = item.tabindex || {
        column_key: "active"
      };
      tabindex = tabindex[column_key];
      if (tabindex === "disabled") {
        return -1;
      } else {
        return 0;
      }
    }
  }, {
    key: "get_colspan",
    value: function get_colspan(column_key, item) {
      var colspan;
      colspan = item.colspan || {};
      return colspan[column_key];
    }
  }, {
    key: "get_rowspan",
    value: function get_rowspan(column_key, item) {
      var rowspan;
      rowspan = item.rowspan || {};
      return rowspan[column_key];
    }
  }, {
    key: "skip_cell_rendering",
    value: function skip_cell_rendering(column_key) {
      var item, skip;
      item = this.get_item();
      skip = item.skip || [];
      return TableCells_coffee_indexOf.call(skip, column_key) >= 0;
    }
  }, {
    key: "show_select",
    value: function show_select() {
      var item;
      item = this.get_item();
      if (typeof item.show_select === "boolean") {
        return item.show_select;
      }
      return this.props.show_select_column;
    }
  }, {
    key: "is_transposed",
    value: function is_transposed(column_key) {
      var column;
      column = this.get_column(column_key);
      return column.type === "transposed";
    }
  }, {
    key: "get_transposed_items",
    value: function get_transposed_items() {
      var item, transposed_keys;
      item = this.get_item();
      transposed_keys = item.transposed_keys || [];
      return transposed_keys.map(function (key) {
        return item[key];
      });
    }
  }, {
    key: "has_transposed_items",
    value: function has_transposed_items() {
      return this.get_transposed_items().length > 0;
    }
  }, {
    key: "is_transposed_item",
    value: function is_transposed_item() {
      var item;
      item = this.get_item();
      return item.hasOwnProperty("transposed_keys");
    }
  }, {
    key: "is_loading",
    value: function is_loading(uid) {
      var loading_uids;
      loading_uids = this.props.loading_uids || [];
      return loading_uids.indexOf(uid) > -1;
    }
  }, {
    key: "get_errors_for",
    value: function get_errors_for(uid) {
      var errors;
      errors = this.props.errors || {};
      return errors[uid] || [];
    }

    /**
     * Creates a checkbox for multiple uids
     * @returns SelectCell component
     */
  }, {
    key: "create_multi_select_cell",
    value: function create_multi_select_cell(uids) {
      var _this2 = this;
      var all_selected, cell, item, level, value;
      if (uids == null) {
        uids = [];
      }
      if (!(uids.length > 0)) {
        return this.create_placeholder_cell();
      }
      value = uids.join(",");
      item = this.get_item();
      level = item.node_level || 0;
      all_selected = uids.every(function (uid) {
        return _this2.props.selected_uids.includes(uid);
      });
      cell = /*#__PURE__*/external_React_default().createElement("td", {
        key: value,
        className: "level-".concat(level)
      }, /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, {
        value: value,
        tabIndex: "-1",
        checked: all_selected,
        onChange: this.props.on_multi_select_checkbox_checked
      }));
      return cell;
    }

    /**
     * Creates a select cell
     *
     * @returns SelectCell component
     */
  }, {
    key: "create_select_cell",
    value: function create_select_cell() {
      var cell, checkbox_name, errors, item, level, loading, remarks, uid;
      uid = this.get_uid();
      if (!uid) {
        return this.create_placeholder_cell();
      }
      checkbox_name = "".concat(this.props.select_checkbox_name, ":list");
      item = this.get_item();
      remarks = this.props.remarks; // True if this row follows a remarks row
      level = item.node_level || 0;
      loading = this.is_loading(uid);
      errors = this.get_errors_for(uid);
      cell = /*#__PURE__*/external_React_default().createElement("td", {
        key: uid,
        className: "level-".concat(level)
      }, !loading && /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, {
        name: checkbox_name,
        value: uid,
        disabled: this.props.disabled,
        checked: this.props.selected,
        tabIndex: "-1",
        onChange: this.props.on_select_checkbox_checked
      }), loading && /*#__PURE__*/external_React_default().createElement("span", {
        className: "spinner-border spinner-border-sm",
        role: "status",
        "aria-hidden": "true"
      }), errors.length > 0 && /*#__PURE__*/external_React_default().createElement("span", {
        className: "text-warning fas fa-exclamation-triangle",
        title: errors.join("\n")
      }), remarks && /*#__PURE__*/external_React_default().createElement("a", {
        uid: uid,
        href: "#",
        className: "remarks",
        onClick: this.on_remarks_expand_click
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: "remarksicon fas fa-comment-alt"
      })));
      return cell;
    }

    /**
     * Create an empty placeholder cell
     */
  }, {
    key: "create_placeholder_cell",
    value: function create_placeholder_cell() {
      var cell;
      cell = /*#__PURE__*/external_React_default().createElement("td", {
        className: "placeholder"
      });
      return cell;
    }

    /**
     * Creates a regular table cell
     *
     * @param column_key {String} The key of the column definition
     * @param column_index {Integer} The current cell index
     * @returns TableCell component
     */
  }, {
    key: "create_regular_cell",
    value: function create_regular_cell(column_key, column_index) {
      var cell, colspan, column, css, item, rowspan, tabindex;
      item = this.get_item();
      column = this.get_column(column_key);
      colspan = this.get_colspan(column_key, item);
      rowspan = this.get_rowspan(column_key, item);
      tabindex = this.get_tab_index(column_key, item);
      css = "contentcell ".concat(column_key);
      cell = /*#__PURE__*/external_React_default().createElement(TableCell_coffee, TableCells_coffee_extends({}, this.props, {
        key: column_index,
        item: item,
        column_key: column_key,
        column_index: column_index,
        column: column,
        colspan: colspan,
        rowspan: rowspan,
        className: css,
        tabIndex: tabindex
      }));
      return cell;
    }

    /**
     * Creates a transposed cell
     *
     * Transposed cell items contain an object key "column_key", which points to
     * the transposed folderitem requested.
     *
     * E.g. a transposed worksheet would have the positions (1, 2, 3, ...) as
     * columns and the contained services of each position as rows.
     * {"column_key": "1", "1": {"Service": "Calcium", ...}}
     *
     * The column for "1" would then contain the type "transposed".
     *
     * @param column_key {String} The key of the column definition
     * @param column_index {Integer} The current cell index
     * @returns TableTransposedCell component
     */
  }, {
    key: "create_transposed_cell",
    value: function create_transposed_cell(column_key, column_index) {
      var cell, colspan, column, css, item, rowspan, tabindex;
      item = this.get_item();
      column = this.get_column(column_key);
      colspan = this.get_colspan(column_key, item);
      rowspan = this.get_rowspan(column_key, item);
      tabindex = this.get_tab_index(column_key, item);
      css = "contentcell ".concat(column_key);
      cell = /*#__PURE__*/external_React_default().createElement(TableTransposedCell_coffee, TableCells_coffee_extends({}, this.props, {
        key: column_index,
        item: item,
        column_key: column_key,
        column_index: column_index,
        column: column,
        colspan: colspan,
        rowspan: rowspan,
        on_remarks_expand_click: this.on_remarks_expand_click,
        className: css,
        tabIndex: tabindex
      }));
      return cell;
    }

    /**
     * Creates a Drag&Drop handler cell
     *
     */
  }, {
    key: "create_dnd_cell",
    value: function create_dnd_cell() {
      var cell, item, level, uid;
      item = this.get_item();
      uid = this.get_uid();
      level = item.node_level || 0;
      cell = /*#__PURE__*/external_React_default().createElement("td", {
        ref: this.props.dragref,
        key: "dnd",
        className: "level-".concat(level, " dnd")
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-sort"
      }));
      return cell;
    }
  }, {
    key: "build_cells",
    value: function build_cells() {
      var cells, column_index, column_key, i, items, len, ref, uids;
      cells = [];
      // insert select column
      if (this.show_select() && !this.is_transposed_item()) {
        cells.push(this.create_select_cell());
      } else if (this.show_select() && this.is_transposed_item()) {
        items = this.get_transposed_items();
        uids = items.map(function (item) {
          return item.uid;
        });
        cells.push(this.create_multi_select_cell(uids));
      }
      if (this.props.allow_row_reorder) {
        cells.push(this.create_dnd_cell());
      }
      ref = this.props.visible_columns;
      // insert visible columns in the right order
      for (column_index = i = 0, len = ref.length; i < len; column_index = ++i) {
        column_key = ref[column_index];
        // Skip single cell rendering to support rowspans
        if (this.skip_cell_rendering(column_key)) {
          continue;
        }
        if (this.is_transposed(column_key)) {
          // Transposed Cell
          cells.push(this.create_transposed_cell(column_key, column_index));
        } else {
          // Regular Cell
          cells.push(this.create_regular_cell(column_key, column_index));
        }
      }
      return cells;
    }
  }, {
    key: "render",
    value: function render() {
      return this.build_cells();
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableCells_coffee = (TableCells);
;// ../node_modules/@react-dnd/invariant/dist/index.js
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ function invariant(condition, format, ...args) {
    if (isProduction()) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1 // we don't care about invariant's own frame
        ;
        throw error;
    }
}
function isProduction() {
    return typeof process !== 'undefined' && "production" === 'production';
}

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__(757);
;// ../node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js

// suppress the useLayoutEffect warning on server side.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? external_React_.useLayoutEffect : external_React_.useEffect;

//# sourceMappingURL=useIsomorphicLayoutEffect.js.map
;// ../node_modules/react-dnd/dist/hooks/useCollector.js



/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */ function useCollector(monitor, collect, onUpdate) {
    const [collected, setCollected] = (0,external_React_.useState)(()=>collect(monitor)
    );
    const updateCollected = (0,external_React_.useCallback)(()=>{
        const nextValue = collect(monitor);
        // This needs to be a deep-equality check because some monitor-collected values
        // include XYCoord objects that may be equivalent, but do not have instance equality.
        if (!fast_deep_equal(collected, nextValue)) {
            setCollected(nextValue);
            if (onUpdate) {
                onUpdate();
            }
        }
    }, [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    useIsomorphicLayoutEffect(updateCollected);
    return [
        collected,
        updateCollected
    ];
}

//# sourceMappingURL=useCollector.js.map
;// ../node_modules/react-dnd/dist/hooks/useMonitorOutput.js


function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
    useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
        if (handlerId == null) {
            return;
        }
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [
                handlerId
            ]
        });
    }, [
        monitor,
        updateCollected
    ]);
    return collected;
}

//# sourceMappingURL=useMonitorOutput.js.map
;// ../node_modules/react-dnd/dist/hooks/useCollectedProps.js

function useCollectedProps(collector, monitor, connector) {
    return useMonitorOutput(monitor, collector || (()=>({})
    ), ()=>connector.reconnect()
    );
}

//# sourceMappingURL=useCollectedProps.js.map
;// ../node_modules/react-dnd/dist/hooks/useOptionalFactory.js

function useOptionalFactory(arg, deps) {
    const memoDeps = [
        ...deps || []
    ];
    if (deps == null && typeof arg !== 'function') {
        memoDeps.push(arg);
    }
    return (0,external_React_.useMemo)(()=>{
        return typeof arg === 'function' ? arg() : arg;
    }, memoDeps);
}

//# sourceMappingURL=useOptionalFactory.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/connectors.js

function useConnectDragSource(connector) {
    return (0,external_React_.useMemo)(()=>connector.hooks.dragSource()
    , [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0,external_React_.useMemo)(()=>connector.hooks.dragPreview()
    , [
        connector
    ]);
}

//# sourceMappingURL=connectors.js.map
;// ../node_modules/@react-dnd/shallowequal/dist/index.js
function shallowEqual(objA, objB, compare, compareContext) {
    let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) {
        return !!compareResult;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(let idx = 0; idx < keysA.length; idx++){
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        const valueA = objA[key];
        const valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=index.js.map
;// ../node_modules/react-dnd/dist/internals/isRef.js
function isRef(obj) {
    return(// eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current'));
}

//# sourceMappingURL=isRef.js.map
;// ../node_modules/react-dnd/dist/internals/wrapConnectorHooks.js


function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    const displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + `You can either wrap ${displayName} into a <div>, or turn it into a ` + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return (elementOrNode = null, options = null)=>{
        // When passed a node, call the hook straight away.
        if (!(0,external_React_.isValidElement)(elementOrNode)) {
            const node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        const element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        const ref = options ? (node)=>hook(node, options)
         : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    const wrappedHooks = {};
    Object.keys(hooks).forEach((key)=>{
        const hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) {
            wrappedHooks[key] = hooks[key];
        } else {
            const wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = ()=>wrappedHook
            ;
        }
    });
    return wrappedHooks;
}
function setRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else {
        ref.current = node;
    }
}
function cloneWithRef(element, newRef) {
    const previousRef = element.ref;
    invariant(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return (0,external_React_.cloneElement)(element, {
            ref: newRef
        });
    } else {
        return (0,external_React_.cloneElement)(element, {
            ref: (node)=>{
                setRef(previousRef, node);
                setRef(newRef, node);
            }
        });
    }
}

//# sourceMappingURL=wrapConnectorHooks.js.map
;// ../node_modules/react-dnd/dist/internals/SourceConnector.js



class SourceConnector {
    receiveHandlerId(newHandlerId) {
        if (this.handlerId === newHandlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get connectTarget() {
        return this.dragSource;
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(options) {
        this.dragSourceOptionsInternal = options;
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(options) {
        this.dragPreviewOptionsInternal = options;
    }
    reconnect() {
        const didChange = this.reconnectDragSource();
        this.reconnectDragPreview(didChange);
    }
    reconnectDragSource() {
        const dragSource = this.dragSource;
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (didChange) {
            this.disconnectDragSource();
        }
        if (!this.handlerId) {
            return didChange;
        }
        if (!dragSource) {
            this.lastConnectedDragSource = dragSource;
            return didChange;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragSource = dragSource;
            this.lastConnectedDragSourceOptions = this.dragSourceOptions;
            this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
        }
        return didChange;
    }
    reconnectDragPreview(forceDidChange = false) {
        const dragPreview = this.dragPreview;
        // if nothing has changed then don't resubscribe
        const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (didChange) {
            this.disconnectDragPreview();
        }
        if (!this.handlerId) {
            return;
        }
        if (!dragPreview) {
            this.lastConnectedDragPreview = dragPreview;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragPreview = dragPreview;
            this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
            this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
        return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
        return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
        if (this.dragSourceUnsubscribe) {
            this.dragSourceUnsubscribe();
            this.dragSourceUnsubscribe = undefined;
        }
    }
    disconnectDragPreview() {
        if (this.dragPreviewUnsubscribe) {
            this.dragPreviewUnsubscribe();
            this.dragPreviewUnsubscribe = undefined;
            this.dragPreviewNode = null;
            this.dragPreviewRef = null;
        }
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
        this.dragSourceNode = null;
        this.dragSourceRef = null;
    }
    clearDragPreview() {
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
    }
    constructor(backend){
        this.hooks = wrapConnectorHooks({
            dragSource: (node, options)=>{
                this.clearDragSource();
                this.dragSourceOptions = options || null;
                if (isRef(node)) {
                    this.dragSourceRef = node;
                } else {
                    this.dragSourceNode = node;
                }
                this.reconnectDragSource();
            },
            dragPreview: (node, options)=>{
                this.clearDragPreview();
                this.dragPreviewOptions = options || null;
                if (isRef(node)) {
                    this.dragPreviewRef = node;
                } else {
                    this.dragPreviewNode = node;
                }
                this.reconnectDragPreview();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dragSourceRef = null;
        this.dragSourceOptionsInternal = null;
        // The drag preview may either be attached via ref or connect function
        this.dragPreviewRef = null;
        this.dragPreviewOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDragSource = null;
        this.lastConnectedDragSourceOptions = null;
        this.lastConnectedDragPreview = null;
        this.lastConnectedDragPreviewOptions = null;
        this.backend = backend;
    }
}

//# sourceMappingURL=SourceConnector.js.map
;// ../node_modules/react-dnd/dist/core/DndContext.js

/**
 * Create the React Context
 */ const DndContext = (0,external_React_.createContext)({
    dragDropManager: undefined
});

//# sourceMappingURL=DndContext.js.map
;// ../node_modules/react-dnd/dist/hooks/useDragDropManager.js



/**
 * A hook to retrieve the DragDropManager from Context
 */ function useDragDropManager() {
    const { dragDropManager  } = (0,external_React_.useContext)(DndContext);
    invariant(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
}

//# sourceMappingURL=useDragDropManager.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js




function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    const manager = useDragDropManager();
    const connector = (0,external_React_.useMemo)(()=>new SourceConnector(manager.getBackend())
    , [
        manager
    ]);
    useIsomorphicLayoutEffect(()=>{
        connector.dragSourceOptions = dragSourceOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragSource()
        ;
    }, [
        connector,
        dragSourceOptions
    ]);
    useIsomorphicLayoutEffect(()=>{
        connector.dragPreviewOptions = dragPreviewOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragPreview()
        ;
    }, [
        connector,
        dragPreviewOptions
    ]);
    return connector;
}

//# sourceMappingURL=useDragSourceConnector.js.map
;// ../node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js

let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
    receiveHandlerId(sourceId) {
        this.sourceId = sourceId;
    }
    getHandlerId() {
        return this.sourceId;
    }
    canDrag() {
        invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        } finally{
            isCallingCanDrag = false;
        }
    }
    isDragging() {
        if (!this.sourceId) {
            return false;
        }
        invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        } finally{
            isCallingIsDragging = false;
        }
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    isDraggingSource(sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    }
    isOverTarget(targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
        return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    }
    canDragSource(sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    }
    canDropOnTarget(targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

//# sourceMappingURL=DragSourceMonitorImpl.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js



function useDragSourceMonitor() {
    const manager = useDragDropManager();
    return (0,external_React_.useMemo)(()=>new DragSourceMonitorImpl(manager)
    , [
        manager
    ]);
}

//# sourceMappingURL=useDragSourceMonitor.js.map
;// ../node_modules/react-dnd/dist/internals/registration.js
function registerTarget(type, target, manager) {
    const registry = manager.getRegistry();
    const targetId = registry.addTarget(type, target);
    return [
        targetId,
        ()=>registry.removeTarget(targetId)
    ];
}
function registerSource(type, source, manager) {
    const registry = manager.getRegistry();
    const sourceId = registry.addSource(type, source);
    return [
        sourceId,
        ()=>registry.removeSource(sourceId)
    ];
}

//# sourceMappingURL=registration.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
class DragSourceImpl {
    beginDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        let result = null;
        if (typeof spec.item === 'object') {
            result = spec.item;
        } else if (typeof spec.item === 'function') {
            result = spec.item(monitor);
        } else {
            result = {};
        }
        return result !== null && result !== void 0 ? result : null;
    }
    canDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (typeof spec.canDrag === 'boolean') {
            return spec.canDrag;
        } else if (typeof spec.canDrag === 'function') {
            return spec.canDrag(monitor);
        } else {
            return true;
        }
    }
    isDragging(globalMonitor, target) {
        const spec = this.spec;
        const monitor = this.monitor;
        const { isDragging  } = spec;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
    endDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        const connector = this.connector;
        const { end  } = spec;
        if (end) {
            end(monitor.getItem(), monitor);
        }
        connector.reconnect();
    }
    constructor(spec, monitor, connector){
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
}

//# sourceMappingURL=DragSourceImpl.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js


function useDragSource(spec, monitor, connector) {
    const handler = (0,external_React_.useMemo)(()=>new DragSourceImpl(spec, monitor, connector)
    , [
        monitor,
        connector
    ]);
    (0,external_React_.useEffect)(()=>{
        handler.spec = spec;
    }, [
        spec
    ]);
    return handler;
}

//# sourceMappingURL=useDragSource.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/useDragType.js


function useDragType(spec) {
    return (0,external_React_.useMemo)(()=>{
        const result = spec.type;
        invariant(result != null, 'spec.type must be defined');
        return result;
    }, [
        spec
    ]);
}

//# sourceMappingURL=useDragType.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js





function useRegisteredDragSource(spec, monitor, connector) {
    const manager = useDragDropManager();
    const handler = useDragSource(spec, monitor, connector);
    const itemType = useDragType(spec);
    useIsomorphicLayoutEffect(function registerDragSource() {
        if (itemType != null) {
            const [handlerId, unregister] = registerSource(itemType, handler, manager);
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
        }
        return;
    }, [
        manager,
        monitor,
        connector,
        handler,
        itemType
    ]);
}

//# sourceMappingURL=useRegisteredDragSource.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrag/useDrag.js







/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrag(specArg, deps) {
    const spec = useOptionalFactory(specArg, deps);
    invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
    const monitor = useDragSourceMonitor();
    const connector = useDragSourceConnector(spec.options, spec.previewOptions);
    useRegisteredDragSource(spec, monitor, connector);
    return [
        useCollectedProps(spec.collect, monitor, connector),
        useConnectDragSource(connector),
        useConnectDragPreview(connector), 
    ];
}

//# sourceMappingURL=useDrag.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/connectors.js

function useConnectDropTarget(connector) {
    return (0,external_React_.useMemo)(()=>connector.hooks.dropTarget()
    , [
        connector
    ]);
}

//# sourceMappingURL=connectors.js.map
;// ../node_modules/react-dnd/dist/internals/TargetConnector.js



class TargetConnector {
    get connectTarget() {
        return this.dropTarget;
    }
    reconnect() {
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        if (didChange) {
            this.disconnectDropTarget();
        }
        const dropTarget = this.dropTarget;
        if (!this.handlerId) {
            return;
        }
        if (!dropTarget) {
            this.lastConnectedDropTarget = dropTarget;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDropTarget = dropTarget;
            this.lastConnectedDropTargetOptions = this.dropTargetOptions;
            this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
        }
    }
    receiveHandlerId(newHandlerId) {
        if (newHandlerId === this.handlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(options) {
        this.dropTargetOptionsInternal = options;
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
        return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
        if (this.unsubscribeDropTarget) {
            this.unsubscribeDropTarget();
            this.unsubscribeDropTarget = undefined;
        }
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
        this.dropTargetRef = null;
        this.dropTargetNode = null;
    }
    constructor(backend){
        this.hooks = wrapConnectorHooks({
            dropTarget: (node, options)=>{
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if (isRef(node)) {
                    this.dropTargetRef = node;
                } else {
                    this.dropTargetNode = node;
                }
                this.reconnect();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dropTargetRef = null;
        this.dropTargetOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDropTarget = null;
        this.lastConnectedDropTargetOptions = null;
        this.backend = backend;
    }
}

//# sourceMappingURL=TargetConnector.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js




function useDropTargetConnector(options) {
    const manager = useDragDropManager();
    const connector = (0,external_React_.useMemo)(()=>new TargetConnector(manager.getBackend())
    , [
        manager
    ]);
    useIsomorphicLayoutEffect(()=>{
        connector.dropTargetOptions = options || null;
        connector.reconnect();
        return ()=>connector.disconnectDropTarget()
        ;
    }, [
        options
    ]);
    return connector;
}

//# sourceMappingURL=useDropTargetConnector.js.map
;// ../node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js

let isCallingCanDrop = false;
class DropTargetMonitorImpl {
    receiveHandlerId(targetId) {
        this.targetId = targetId;
    }
    getHandlerId() {
        return this.targetId;
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    canDrop() {
        // Cut out early if the target id has not been set. This should prevent errors
        // where the user has an older version of dnd-core like in
        // https://github.com/react-dnd/react-dnd/issues/1310
        if (!this.targetId) {
            return false;
        }
        invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        } finally{
            isCallingCanDrop = false;
        }
    }
    isOver(options) {
        if (!this.targetId) {
            return false;
        }
        return this.internalMonitor.isOverTarget(this.targetId, options);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

//# sourceMappingURL=DropTargetMonitorImpl.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js



function useDropTargetMonitor() {
    const manager = useDragDropManager();
    return (0,external_React_.useMemo)(()=>new DropTargetMonitorImpl(manager)
    , [
        manager
    ]);
}

//# sourceMappingURL=useDropTargetMonitor.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/useAccept.js


/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */ function useAccept(spec) {
    const { accept  } = spec;
    return (0,external_React_.useMemo)(()=>{
        invariant(spec.accept != null, 'accept must be defined');
        return Array.isArray(accept) ? accept : [
            accept
        ];
    }, [
        accept
    ]);
}

//# sourceMappingURL=useAccept.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
class DropTargetImpl {
    canDrop() {
        const spec = this.spec;
        const monitor = this.monitor;
        return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
    hover() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.hover) {
            spec.hover(monitor.getItem(), monitor);
        }
    }
    drop() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.drop) {
            return spec.drop(monitor.getItem(), monitor);
        }
        return;
    }
    constructor(spec, monitor){
        this.spec = spec;
        this.monitor = monitor;
    }
}

//# sourceMappingURL=DropTargetImpl.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js


function useDropTarget(spec, monitor) {
    const dropTarget = (0,external_React_.useMemo)(()=>new DropTargetImpl(spec, monitor)
    , [
        monitor
    ]);
    (0,external_React_.useEffect)(()=>{
        dropTarget.spec = spec;
    }, [
        spec
    ]);
    return dropTarget;
}

//# sourceMappingURL=useDropTarget.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js





function useRegisteredDropTarget(spec, monitor, connector) {
    const manager = useDragDropManager();
    const dropTarget = useDropTarget(spec, monitor);
    const accept = useAccept(spec);
    useIsomorphicLayoutEffect(function registerDropTarget() {
        const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map((a)=>a.toString()
        ).join('|'), 
    ]);
}

//# sourceMappingURL=useRegisteredDropTarget.js.map
;// ../node_modules/react-dnd/dist/hooks/useDrop/useDrop.js






/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrop(specArg, deps) {
    const spec = useOptionalFactory(specArg, deps);
    const monitor = useDropTargetMonitor();
    const connector = useDropTargetConnector(spec.options);
    useRegisteredDropTarget(spec, monitor, connector);
    return [
        useCollectedProps(spec.collect, monitor, connector),
        useConnectDropTarget(connector), 
    ];
}

//# sourceMappingURL=useDrop.js.map
;// ./components/TableRow.js
function TableRow_slicedToArray(r, e) { return TableRow_arrayWithHoles(r) || TableRow_iterableToArrayLimit(r, e) || TableRow_unsupportedIterableToArray(r, e) || TableRow_nonIterableRest(); }
function TableRow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TableRow_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return TableRow_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? TableRow_arrayLikeToArray(r, a) : void 0; } }
function TableRow_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function TableRow_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function TableRow_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function TableRow_extends() { return TableRow_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TableRow_extends.apply(null, arguments); }







/**Draggable table row
 *
 * */
var TableRow = /*#__PURE__*/(0,external_React_.memo)(function TableRow(_ref) {
  var props = TableRow_extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var dragRef = (0,external_React_.useRef)(null);
  var dropRef = (0,external_React_.useRef)(null);
  var moveRow = (0,external_React_.useCallback)(function (from_index, to_index) {
    if (props.move_row) {
      props.move_row(from_index, to_index);
    }
  });
  var onRowOrderChange = (0,external_React_.useCallback)(function () {
    if (props.on_row_order_change) {
      props.on_row_order_change();
    }
  });

  // Drop Handler
  var _useDrop = useDrop({
      accept: ItemTypes.ROW,
      collect: function collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        };
      },
      hover: function hover(item, monitor) {
        if (!dragRef.current) {
          return;
        }
        var dragIndex = item.index;
        var hoverIndex = props.row_index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return;
        }
        moveRow(dragIndex, hoverIndex);
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      }
    }),
    _useDrop2 = TableRow_slicedToArray(_useDrop, 2),
    _useDrop2$ = _useDrop2[0],
    handlerId = _useDrop2$.handlerId,
    isOver = _useDrop2$.isOver,
    canDrop = _useDrop2$.canDrop,
    drop = _useDrop2[1];
  var _useDrag = useDrag({
      type: ItemTypes.ROW,
      item: function item() {
        // dragged item data
        return {
          uid: props.uid,
          category: props.category,
          index: props.row_index
        };
      },
      canDrag: function canDrag(monitor) {
        // global allow/disallow dragging
        return props.allow_row_reorder;
      },
      collect: function collect(monitor) {
        return {
          isDragging: !!monitor.isDragging()
        };
      },
      end: function end(item, monitor) {
        // notify the changed order
        onRowOrderChange();
      }
    }),
    _useDrag2 = TableRow_slicedToArray(_useDrag, 3),
    isDragging = _useDrag2[0].isDragging,
    drag = _useDrag2[1],
    preview = _useDrag2[2];

  // references
  preview(drop(dropRef));
  drag(dragRef);

  // calculate the CSS class
  var css_class = props.className;
  if (isDragging) {
    css_class += " dragging";
  }
  function on_context_menu(event) {
    // call the parent handler with the current item
    if (props.on_row_context_menu) {
      props.on_row_context_menu(event, props.item);
    }
  }
  return /*#__PURE__*/external_React_default().createElement("tr", {
    className: css_class,
    ref: dropRef,
    onClick: props.onClick,
    onContextMenu: on_context_menu,
    category: props.category,
    uid: props.uid
  }, /*#__PURE__*/external_React_default().createElement(TableCells_coffee, TableRow_extends({
    dragref: dragRef
  }, props)));
});
/* harmony default export */ const components_TableRow = (TableRow);
;// ./components/TableCategoryRow.coffee
function TableCategoryRow_coffee_typeof(o) { "@babel/helpers - typeof"; return TableCategoryRow_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableCategoryRow_coffee_typeof(o); }
function TableCategoryRow_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableCategoryRow_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableCategoryRow_coffee_toPropertyKey(o.key), o); } }
function TableCategoryRow_coffee_createClass(e, r, t) { return r && TableCategoryRow_coffee_defineProperties(e.prototype, r), t && TableCategoryRow_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableCategoryRow_coffee_toPropertyKey(t) { var i = TableCategoryRow_coffee_toPrimitive(t, "string"); return "symbol" == TableCategoryRow_coffee_typeof(i) ? i : i + ""; }
function TableCategoryRow_coffee_toPrimitive(t, r) { if ("object" != TableCategoryRow_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableCategoryRow_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableCategoryRow_coffee_callSuper(t, o, e) { return o = TableCategoryRow_coffee_getPrototypeOf(o), TableCategoryRow_coffee_possibleConstructorReturn(t, TableCategoryRow_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableCategoryRow_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableCategoryRow_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableCategoryRow_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableCategoryRow_coffee_assertThisInitialized(t); }
function TableCategoryRow_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableCategoryRow_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableCategoryRow_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableCategoryRow_coffee_getPrototypeOf(t) { return TableCategoryRow_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableCategoryRow_coffee_getPrototypeOf(t); }
function TableCategoryRow_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableCategoryRow_coffee_setPrototypeOf(t, e); }
function TableCategoryRow_coffee_setPrototypeOf(t, e) { return TableCategoryRow_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableCategoryRow_coffee_setPrototypeOf(t, e); }
var TableCategoryRow;


TableCategoryRow = /*#__PURE__*/function (_React$Component) {
  function TableCategoryRow(props) {
    var _this;
    TableCategoryRow_coffee_classCallCheck(this, TableCategoryRow);
    _this = TableCategoryRow_coffee_callSuper(this, TableCategoryRow, [props]);
    // Bind event handler to local context
    _this.on_category_click = _this.on_category_click.bind(_this);
    _this.on_category_select = _this.on_category_select.bind(_this);
    return _this;
  }
  TableCategoryRow_coffee_inherits(TableCategoryRow, _React$Component);
  return TableCategoryRow_coffee_createClass(TableCategoryRow, [{
    key: "on_category_click",
    value: function on_category_click(event) {
      console.debug("TableCategoryRow::on_category_click: ".concat(this.props.category));
      // notify parent event handler with the extracted values
      if (this.props.on_category_click) {
        return this.props.on_category_click(event);
      }
    }
  }, {
    key: "on_category_select",
    value: function on_category_select(event) {
      var category;
      category = this.props.category;
      console.debug("TableCategoryRow::on_category_select: ".concat(this.props.category));
      // notify parent event handler with the extracted values
      if (this.props.on_category_select) {
        return this.props.on_category_select(event);
      }
    }
  }, {
    key: "build_category",
    value: function build_category() {
      var category, cells, cls, colspan, expanded, icon_cls, selected, show_select_column;
      cells = [];
      category = this.props.category;
      show_select_column = this.props.show_select_column;
      expanded = this.props.expanded;
      selected = this.props.selected;
      colspan = this.props.columns_count;
      if (expanded) {
        cls = "expanded";
        icon_cls = "fas fa-caret-square-down";
      } else {
        cls = "collapsed";
        icon_cls = "fas fa-caret-square-up";
      }
      if (show_select_column) {
        colspan -= 1;
        cells.push(/*#__PURE__*/external_React_default().createElement("td", {
          key: "select"
        }, /*#__PURE__*/external_React_default().createElement("span", {
          category: category,
          onClick: this.on_category_select
        }, selected && /*#__PURE__*/external_React_default().createElement("i", {
          className: "fas fa-check-circle"
        }), !selected && /*#__PURE__*/external_React_default().createElement("i", {
          className: "fas fa-dot-circle"
        }))));
      }
      cells.push(/*#__PURE__*/external_React_default().createElement("td", {
        key: "toggle",
        category: category,
        className: cls,
        onClick: this.on_category_click,
        colSpan: colspan
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: icon_cls
      }), " ", /*#__PURE__*/external_React_default().createElement("span", null, category)));
      return cells;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("tr", {
        category: this.props.category,
        className: this.props.className
      }, this.build_category());
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableCategoryRow_coffee = (TableCategoryRow);
;// ./components/TableRemarksRow.coffee
function TableRemarksRow_coffee_typeof(o) { "@babel/helpers - typeof"; return TableRemarksRow_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableRemarksRow_coffee_typeof(o); }
function TableRemarksRow_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableRemarksRow_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableRemarksRow_coffee_toPropertyKey(o.key), o); } }
function TableRemarksRow_coffee_createClass(e, r, t) { return r && TableRemarksRow_coffee_defineProperties(e.prototype, r), t && TableRemarksRow_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableRemarksRow_coffee_toPropertyKey(t) { var i = TableRemarksRow_coffee_toPrimitive(t, "string"); return "symbol" == TableRemarksRow_coffee_typeof(i) ? i : i + ""; }
function TableRemarksRow_coffee_toPrimitive(t, r) { if ("object" != TableRemarksRow_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableRemarksRow_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableRemarksRow_coffee_callSuper(t, o, e) { return o = TableRemarksRow_coffee_getPrototypeOf(o), TableRemarksRow_coffee_possibleConstructorReturn(t, TableRemarksRow_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableRemarksRow_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableRemarksRow_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableRemarksRow_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableRemarksRow_coffee_assertThisInitialized(t); }
function TableRemarksRow_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableRemarksRow_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableRemarksRow_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableRemarksRow_coffee_getPrototypeOf(t) { return TableRemarksRow_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableRemarksRow_coffee_getPrototypeOf(t); }
function TableRemarksRow_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableRemarksRow_coffee_setPrototypeOf(t, e); }
function TableRemarksRow_coffee_setPrototypeOf(t, e) { return TableRemarksRow_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableRemarksRow_coffee_setPrototypeOf(t, e); }
var TableRemarksRow;


TableRemarksRow = /*#__PURE__*/function (_React$Component) {
  function TableRemarksRow(props) {
    TableRemarksRow_coffee_classCallCheck(this, TableRemarksRow);
    return TableRemarksRow_coffee_callSuper(this, TableRemarksRow, [props]);
  }
  TableRemarksRow_coffee_inherits(TableRemarksRow, _React$Component);
  return TableRemarksRow_coffee_createClass(TableRemarksRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("tr", {
        className: this.props.className
      }, /*#__PURE__*/external_React_default().createElement("td", {
        style: {
          padding: 0,
          borderTop: 0
        }
      }), /*#__PURE__*/external_React_default().createElement("td", {
        style: {
          padding: 0,
          borderTop: 0
        },
        colSpan: this.props.colspan - 1
      }, /*#__PURE__*/external_React_default().createElement(RemarksField_coffee, this.props)));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableRemarksRow_coffee = (TableRemarksRow);
;// ./components/TableRows.coffee
function TableRows_coffee_typeof(o) { "@babel/helpers - typeof"; return TableRows_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableRows_coffee_typeof(o); }
function TableRows_coffee_extends() { return TableRows_coffee_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TableRows_coffee_extends.apply(null, arguments); }
function TableRows_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableRows_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableRows_coffee_toPropertyKey(o.key), o); } }
function TableRows_coffee_createClass(e, r, t) { return r && TableRows_coffee_defineProperties(e.prototype, r), t && TableRows_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableRows_coffee_toPropertyKey(t) { var i = TableRows_coffee_toPrimitive(t, "string"); return "symbol" == TableRows_coffee_typeof(i) ? i : i + ""; }
function TableRows_coffee_toPrimitive(t, r) { if ("object" != TableRows_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableRows_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableRows_coffee_callSuper(t, o, e) { return o = TableRows_coffee_getPrototypeOf(o), TableRows_coffee_possibleConstructorReturn(t, TableRows_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableRows_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableRows_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableRows_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableRows_coffee_assertThisInitialized(t); }
function TableRows_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableRows_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableRows_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableRows_coffee_getPrototypeOf(t) { return TableRows_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableRows_coffee_getPrototypeOf(t); }
function TableRows_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableRows_coffee_setPrototypeOf(t, e); }
function TableRows_coffee_setPrototypeOf(t, e) { return TableRows_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableRows_coffee_setPrototypeOf(t, e); }
var TableRows,
  TableRows_coffee_indexOf = [].indexOf;




TableRows = /*#__PURE__*/function (_React$Component) {
  function TableRows(props) {
    var _this;
    TableRows_coffee_classCallCheck(this, TableRows);
    _this = TableRows_coffee_callSuper(this, TableRows, [props]);
    // Bind event handler to local context
    _this.on_row_expand_click = _this.on_row_expand_click.bind(_this);
    return _this;
  }
  TableRows_coffee_inherits(TableRows, _React$Component);
  return TableRows_coffee_createClass(TableRows, [{
    key: "on_row_expand_click",
    value: function on_row_expand_click(event) {
      var first_td, row, uid;
      row = event.currentTarget;
      first_td = row.children.item(0);
      if (event.target === first_td) {
        uid = row.getAttribute("uid");
        if (this.props.on_row_expand_click) {
          return this.props.on_row_expand_click(uid);
        }
      }
    }
  }, {
    key: "is_selected",
    value: function is_selected(item) {
      var selected_uids, uid;
      uid = item.uid;
      selected_uids = this.props.selected_uids || [];
      return TableRows_coffee_indexOf.call(selected_uids, uid) >= 0;
    }
  }, {
    key: "is_expanded",
    value: function is_expanded(item) {
      var expanded, ref;
      expanded = this.props.expanded_rows || [];
      return ref = item.uid, TableRows_coffee_indexOf.call(expanded, ref) >= 0;
    }
  }, {
    key: "get_children",
    value: function get_children(item) {
      var children, item_children, uid;
      uid = item.uid;
      children = this.props.children || {};
      item_children = children[uid] || [];
      return item_children;
    }
  }, {
    key: "is_category_expanded",
    value: function is_category_expanded(category) {
      return TableRows_coffee_indexOf.call(this.props.expanded_categories, category) >= 0;
    }
  }, {
    key: "is_category_selected",
    value: function is_category_selected(category) {
      return TableRows_coffee_indexOf.call(this.props.selected_categories, category) >= 0;
    }
  }, {
    key: "is_item_disabled",
    value: function is_item_disabled(item) {
      return item.disabled || false;
    }
  }, {
    key: "is_child_item",
    value: function is_child_item(item) {
      if (item.parent) {
        return true;
      }
    }
  }, {
    key: "get_item_category",
    value: function get_item_category(item) {
      return item.category || null;
    }
  }, {
    key: "get_item_children",
    value: function get_item_children(item) {
      // list of UIDs in the folderitem
      return item.children || [];
    }
  }, {
    key: "has_item_children",
    value: function has_item_children(item) {
      var children;
      children = this.get_item_children(item);
      return children.length > 0;
    }
  }, {
    key: "get_remarks_columns",
    value: function get_remarks_columns(item) {
      var columns, key, ref, value;
      columns = [];
      ref = this.props.columns;
      for (key in ref) {
        value = ref[key];
        if (value.type === "remarks") {
          // skip undefined values (e.g. reassignable slots)
          if (item[key] === void 0) {
            continue;
          }
          columns.push(key);
        }
      }
      return columns;
    }
  }, {
    key: "get_item_uid",
    value: function get_item_uid(item) {
      return item.uid;
    }
  }, {
    key: "get_item_css",
    value: function get_item_css(item) {
      var cls;
      cls = ["contentrow"];
      // review state
      if (item.state_class) {
        cls = cls.concat(item.state_class.split(" "));
      }
      // selected
      if (this.is_selected(item)) {
        cls.push("table-info");
      }
      // child/parent
      if (this.is_child_item(item)) {
        cls.push("child");
      } else {
        cls.push("parent");
      }
      // expandable
      if (this.has_item_children(item)) {
        if (this.is_expanded(item)) {
          cls.push("expanded");
        } else {
          cls.push("collapsed");
        }
      }
      return cls.join(" ");
    }
  }, {
    key: "render_categorized_rows",
    value: function render_categorized_rows() {
      var category, expanded, i, len, ref, rows, selected;
      rows = [];
      // Render categorized rows
      if (this.props.show_categories) {
        ref = this.props.categories;
        for (i = 0, len = ref.length; i < len; i++) {
          category = ref[i];
          expanded = this.is_category_expanded(category);
          selected = this.is_category_selected(category);
          rows.push(/*#__PURE__*/external_React_default().createElement(TableCategoryRow_coffee, TableRows_coffee_extends({}, this.props, {
            key: category,
            category: category,
            expanded: expanded,
            selected: selected,
            className: "categoryrow"
          })));
          // concatenate the categorized rows in the right order
          rows = rows.concat(this.build_rows({
            props: {
              category: category
            }
          }));
        }
      } else {
        // Render uncatgorized rows
        rows = this.build_rows();
      }
      return rows;
    }
  }, {
    key: "build_rows",
    value: function build_rows() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        props = _ref.props;
      var category, child_rows, children, colspan, column, column_index, column_key, css, disabled, expandable, expanded, folderitems, i, item, item_index, j, len, len1, remarks_columns, rows, selected, skip, transposed, uid, value;
      rows = [];
      if (props == null) {
        props = {};
      }
      category = props.category || null;
      folderitems = props.folderitems || this.props.folderitems;
      for (item_index = i = 0, len = folderitems.length; i < len; item_index = ++i) {
        item = folderitems[item_index];
        // skip items of other categories
        if (category && this.get_item_category(item) !== category) {
          continue;
        }
        // skip items in collapsed categories except the selected ones
        if (category && !this.is_category_expanded(category)) {
          if (!this.is_selected(item)) {
            continue;
          }
        }
        uid = this.get_item_uid(item);
        css = this.get_item_css(item);
        // list of child UIDs in the folderitem
        children = this.get_item_children(item);
        expanded = this.is_expanded(item);
        selected = this.is_selected(item);
        disabled = this.is_item_disabled(item);
        expandable = this.has_item_children(item);
        remarks_columns = this.get_remarks_columns(item);
        transposed = false;
        // transposed items have no uid, so use the index instead
        if (uid === null) {
          transposed = true;
          uid = item_index;
        }
        rows.push(/*#__PURE__*/external_React_default().createElement(components_TableRow, TableRows_coffee_extends({}, this.props, {
          key: uid,
          item: item,
          uid: uid,
          category: category,
          expanded: expanded,
          remarks: remarks_columns.length > 0,
          selected: selected,
          disabled: disabled,
          className: css,
          onClick: expandable && this.on_row_expand_click || void 0,
          row_index: item_index
        })));
        // columns with type="remarks" set are rendered in their own row
        for (column_index = j = 0, len1 = remarks_columns.length; j < len1; column_index = ++j) {
          column_key = remarks_columns[column_index];
          if (transposed) {
            // skip for transposed cells
            break;
          }
          column = this.props.columns[column_key];
          // support rowspanning for WS header slot
          skip = item.skip || [];
          colspan = this.props.columns_count - skip.length;
          // get the remarks value
          value = item[column_key] || "";
          rows.push(/*#__PURE__*/external_React_default().createElement(TableRemarksRow_coffee, TableRows_coffee_extends({}, this.props, {
            key: "remarks_" + item_index,
            uid: uid,
            item: item,
            column_key: column_key,
            value: value,
            expanded: expanded,
            selected: selected,
            disabled: disabled,
            className: css + " remarksrow",
            colspan: colspan,
            row_index: item_index
          })));
        }
        // append expanded rows
        if (expanded) {
          // use the global children mapping to get the lazy fetched folderitem
          children = this.get_children(item);
          if (children.length > 0) {
            child_rows = this.build_rows({
              props: {
                category: category,
                folderitems: children
              }
            });
            rows = rows.concat(child_rows);
          }
        }
      }
      return rows;
    }
  }, {
    key: "render",
    value: function render() {
      return this.render_categorized_rows();
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableRows_coffee = (TableRows);
;// ./components/Table.coffee
function Table_coffee_typeof(o) { "@babel/helpers - typeof"; return Table_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Table_coffee_typeof(o); }
function Table_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Table_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Table_coffee_toPropertyKey(o.key), o); } }
function Table_coffee_createClass(e, r, t) { return r && Table_coffee_defineProperties(e.prototype, r), t && Table_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Table_coffee_toPropertyKey(t) { var i = Table_coffee_toPrimitive(t, "string"); return "symbol" == Table_coffee_typeof(i) ? i : i + ""; }
function Table_coffee_toPrimitive(t, r) { if ("object" != Table_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Table_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Table_coffee_callSuper(t, o, e) { return o = Table_coffee_getPrototypeOf(o), Table_coffee_possibleConstructorReturn(t, Table_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Table_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Table_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == Table_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Table_coffee_assertThisInitialized(t); }
function Table_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Table_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Table_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Table_coffee_getPrototypeOf(t) { return Table_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Table_coffee_getPrototypeOf(t); }
function Table_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Table_coffee_setPrototypeOf(t, e); }
function Table_coffee_setPrototypeOf(t, e) { return Table_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Table_coffee_setPrototypeOf(t, e); }
var Table;



Table = /*#__PURE__*/function (_React$Component) {
  function Table(props) {
    Table_coffee_classCallCheck(this, Table);
    return Table_coffee_callSuper(this, Table, [props]);
  }
  Table_coffee_inherits(Table, _React$Component);
  return Table_coffee_createClass(Table, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("table", {
        id: this.props.id,
        className: this.props.className
      }, /*#__PURE__*/external_React_default().createElement("thead", null, /*#__PURE__*/external_React_default().createElement(TableHeaderRow_coffee, this.props)), /*#__PURE__*/external_React_default().createElement("tbody", null, /*#__PURE__*/external_React_default().createElement(TableRows_coffee, this.props)));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const Table_coffee = (Table);
;// ./components/TableColumnConfig.coffee
function TableColumnConfig_coffee_typeof(o) { "@babel/helpers - typeof"; return TableColumnConfig_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TableColumnConfig_coffee_typeof(o); }
function TableColumnConfig_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TableColumnConfig_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TableColumnConfig_coffee_toPropertyKey(o.key), o); } }
function TableColumnConfig_coffee_createClass(e, r, t) { return r && TableColumnConfig_coffee_defineProperties(e.prototype, r), t && TableColumnConfig_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TableColumnConfig_coffee_toPropertyKey(t) { var i = TableColumnConfig_coffee_toPrimitive(t, "string"); return "symbol" == TableColumnConfig_coffee_typeof(i) ? i : i + ""; }
function TableColumnConfig_coffee_toPrimitive(t, r) { if ("object" != TableColumnConfig_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TableColumnConfig_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableColumnConfig_coffee_callSuper(t, o, e) { return o = TableColumnConfig_coffee_getPrototypeOf(o), TableColumnConfig_coffee_possibleConstructorReturn(t, TableColumnConfig_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TableColumnConfig_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TableColumnConfig_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == TableColumnConfig_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TableColumnConfig_coffee_assertThisInitialized(t); }
function TableColumnConfig_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TableColumnConfig_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TableColumnConfig_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TableColumnConfig_coffee_getPrototypeOf(t) { return TableColumnConfig_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TableColumnConfig_coffee_getPrototypeOf(t); }
function TableColumnConfig_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TableColumnConfig_coffee_setPrototypeOf(t, e); }
function TableColumnConfig_coffee_setPrototypeOf(t, e) { return TableColumnConfig_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TableColumnConfig_coffee_setPrototypeOf(t, e); }
var TableColumnConfig;

TableColumnConfig = /*#__PURE__*/function (_React$Component) {
  function TableColumnConfig(props) {
    var _this;
    TableColumnConfig_coffee_classCallCheck(this, TableColumnConfig);
    _this = TableColumnConfig_coffee_callSuper(this, TableColumnConfig, [props]);
    _this.on_drag_start = _this.on_drag_start.bind(_this);
    _this.on_drag_end = _this.on_drag_end.bind(_this);
    _this.on_drag_over = _this.on_drag_over.bind(_this);
    _this.on_column_toggle_click = _this.on_column_toggle_click.bind(_this);
    _this.on_reset_click = _this.on_reset_click.bind(_this);
    _this.state = {
      columns_order: _this.props.columns_order
    };
    return _this;
  }

  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   *
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */
  TableColumnConfig_coffee_inherits(TableColumnConfig, _React$Component);
  return TableColumnConfig_coffee_createClass(TableColumnConfig, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // update the column order from the listing
      if (this.props.columns_order !== prevProps.columns_order) {
        return this.setState({
          columns_order: this.props.columns_order
        });
      }
    }
  }, {
    key: "on_reset_click",
    value: function on_reset_click(event) {
      event.preventDefault();
      // call the parent event handler
      if (this.props.on_column_toggle_click) {
        return this.props.on_column_toggle_click("reset");
      }
    }
  }, {
    key: "on_drag_start",
    value: function on_drag_start(event) {
      this.dragged_item = event.currentTarget;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", this.dragged_item);
      return event.dataTransfer.setDragImage(this.dragged_item, 50, 0);
    }
  }, {
    key: "on_drag_over",
    value: function on_drag_over(event) {
      var column1, column2, columns_order, index, li;
      li = event.currentTarget;
      if (li === this.dragged_item) {
        return;
      }
      column1 = this.dragged_item.getAttribute("column");
      column2 = li.getAttribute("column");
      columns_order = this.state.columns_order;
      // index of the second column
      index = columns_order.indexOf(column2);
      // filter out the currently dragged item
      columns_order = columns_order.filter(function (column) {
        return column !== column1;
      });
      // add the dragged column after the dragged over column
      columns_order.splice(index, 0, column1);
      // set the new columns order to the local state
      return this.setState({
        columns_order: columns_order
      });
    }
  }, {
    key: "on_drag_end",
    value: function on_drag_end(event) {
      this.dragged_item = null;
      // call the event handler of the controller to change the column order
      if (this.props.on_columns_order_change) {
        return this.props.on_columns_order_change(this.state.columns_order);
      }
    }
  }, {
    key: "on_column_toggle_click",
    value: function on_column_toggle_click(event) {
      var column, el;
      event.preventDefault();
      el = event.currentTarget;
      column = el.getAttribute("column");
      // call the event handler of the controller to toggle the column
      if (this.props.on_column_toggle_click) {
        return this.props.on_column_toggle_click(column);
      }
    }
  }, {
    key: "is_column_visible",
    value: function is_column_visible(column) {
      return column.toggle !== false;
    }
  }, {
    key: "build_column_toggles",
    value: function build_column_toggles() {
      var column, columns, i, key, len, ref, visible;
      columns = [];
      ref = this.state.columns_order;
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        column = this.props.columns[key];
        visible = this.is_column_visible(column);
        columns.push(/*#__PURE__*/external_React_default().createElement("li", {
          key: key,
          column: key,
          style: {
            padding: "0 5px 5px 0"
          },
          className: "column",
          onDragOver: this.on_drag_over
        }, /*#__PURE__*/external_React_default().createElement("a", {
          href: "#",
          column: key,
          className: "draggable-column",
          onDragStart: this.on_drag_start,
          onDragEnd: this.on_drag_end,
          draggable: true
        }, /*#__PURE__*/external_React_default().createElement("span", {
          column: key,
          onClick: this.on_column_toggle_click,
          className: "nav-item btn btn-light btn-sm"
        }, visible && /*#__PURE__*/external_React_default().createElement("i", {
          className: "text-primary fas fa-check-square"
        }), !visible && /*#__PURE__*/external_React_default().createElement("i", {
          className: "text-muted fas fa-square"
        }), "\xA0", /*#__PURE__*/external_React_default().createElement("span", {
          dangerouslySetInnerHTML: {
            __html: column.title || key
          }
        })))));
      }
      return columns;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-12 text-left my-3"
      }, /*#__PURE__*/external_React_default().createElement("strong", null, this.props.title), /*#__PURE__*/external_React_default().createElement("div", {
        className: "help-block"
      }, this.props.description), /*#__PURE__*/external_React_default().createElement("ul", {
        className: "list-inline nav nav-pills"
      }, this.build_column_toggles(), /*#__PURE__*/external_React_default().createElement("li", {
        key: "reset",
        style: {
          padding: "0 5px 5px 0"
        }
      }, /*#__PURE__*/external_React_default().createElement("button", {
        onClick: this.on_reset_click,
        className: "btn btn-warning btn-sm"
      }, _t("Reset columns")))))));
    }
  }]);
}((external_React_default()).Component);
/* harmony default export */ const TableColumnConfig_coffee = (TableColumnConfig);
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(540);
;// ../node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = (/* unused pure expression or super */ null && (createStore));

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread(_objectSpread({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}



;// ../node_modules/dnd-core/dist/utils/js_utils.js
// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */ function js_utils_get(obj, path, defaultValue) {
    return path.split('.').reduce((a, c)=>a && a[c] ? a[c] : defaultValue || null
    , obj);
}
/**
 * drop-in replacement for _.without
 */ function without(items, item) {
    return items.filter((i)=>i !== item
    );
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isString(input) {
    return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isObject(input) {
    return typeof input === 'object';
}
/**
 * replacement for _.xor
 * @param itemsA
 * @param itemsB
 */ function xor(itemsA, itemsB) {
    const map = new Map();
    const insertItem = (item)=>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    map.forEach((count, key)=>{
        if (count === 1) {
            result.push(key);
        }
    });
    return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */ function intersection(itemsA, itemsB) {
    return itemsA.filter((t)=>itemsB.indexOf(t) > -1
    );
}

//# sourceMappingURL=js_utils.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/types.js
const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG';

//# sourceMappingURL=types.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js

function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: INIT_COORDS,
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
}

//# sourceMappingURL=setClientOffset.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js




const ResetCoordinatesAction = {
    type: INIT_COORDS,
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag(sourceIds = [], options = {
        publishSource: true
    }) {
        const { publishSource =true , clientOffset , getSourceClientOffset ,  } = options;
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch(setClientOffset(clientOffset));
        verifyInvariants(sourceIds, monitor, registry);
        // Get the draggable source
        const sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        let sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
            }
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
        const source = registry.getSource(sourceId);
        const item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) {
            return undefined;
        }
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: BEGIN_DRAG,
            payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants(sourceIds, monitor, registry) {
    invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        invariant(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    invariant(isObject(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    let sourceId = null;
    for(let i = sourceIds.length - 1; i >= 0; i--){
        if (monitor.canDragSource(sourceIds[i])) {
            sourceId = sourceIds[i];
            break;
        }
    }
    return sourceId;
}

//# sourceMappingURL=beginDrag.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function drop_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}



function createDrop(manager) {
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        drop_verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: DROP,
                payload: {
                    dropResult: drop_objectSpread({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function drop_verifyInvariants(monitor) {
    invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
    invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
}

//# sourceMappingURL=drop.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/endDrag.js


function createEndDrag(manager) {
    return function endDrag() {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyIsDragging(monitor);
        const sourceId = monitor.getSourceId();
        if (sourceId != null) {
            const source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: END_DRAG
        };
    };
}
function verifyIsDragging(monitor) {
    invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

//# sourceMappingURL=endDrag.js.map
;// ../node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some((t)=>t === draggedItemType
    ) : targetType === draggedItemType;
}

//# sourceMappingURL=matchesType.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/hover.js



function createHover(manager) {
    return function hover(targetIdsArg, { clientOffset  } = {}) {
        verifyTargetIdsIsArray(targetIdsArg);
        const targetIds = targetIdsArg.slice(0);
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        const draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: HOVER,
            payload: {
                targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
    invariant(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(let i = 0; i < targetIds.length; i++){
        const targetId = targetIds[i];
        invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        const target = registry.getTarget(targetId);
        invariant(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(let i = targetIds.length - 1; i >= 0; i--){
        const targetId = targetIds[i];
        const targetType = registry.getTargetType(targetId);
        if (!matchesType(targetType, draggedItemType)) {
            targetIds.splice(i, 1);
        }
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        const target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
}

//# sourceMappingURL=hover.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js

function createPublishDragSource(manager) {
    return function publishDragSource() {
        const monitor = manager.getMonitor();
        if (monitor.isDragging()) {
            return {
                type: PUBLISH_DRAG_SOURCE
            };
        }
        return;
    };
}

//# sourceMappingURL=publishDragSource.js.map
;// ../node_modules/dnd-core/dist/actions/dragDrop/index.js






function createDragDropActions(manager) {
    return {
        beginDrag: createBeginDrag(manager),
        publishDragSource: createPublishDragSource(manager),
        hover: createHover(manager),
        drop: createDrop(manager),
        endDrag: createEndDrag(manager)
    };
}

//# sourceMappingURL=index.js.map
;// ../node_modules/dnd-core/dist/classes/DragDropManagerImpl.js

class DragDropManagerImpl {
    receiveBackend(backend) {
        this.backend = backend;
    }
    getMonitor() {
        return this.monitor;
    }
    getBackend() {
        return this.backend;
    }
    getRegistry() {
        return this.monitor.registry;
    }
    getActions() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */ const manager = this;
        const { dispatch  } = this.store;
        function bindActionCreator(actionCreator) {
            return (...args)=>{
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        const actions = createDragDropActions(this);
        return Object.keys(actions).reduce((boundActions, key)=>{
            const action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    constructor(store, monitor){
        this.isSetUp = false;
        this.handleRefCountChange = ()=>{
            const shouldSetUp = this.store.getState().refCount > 0;
            if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                    this.backend.setup();
                    this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                    this.backend.teardown();
                    this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
}

//# sourceMappingURL=DragDropManagerImpl.js.map
;// ../node_modules/dnd-core/dist/utils/coords.js
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */ function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */ function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */ function getSourceClientOffset(state) {
    const { clientOffset , initialClientOffset , initialSourceClientOffset  } = state;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */ function getDifferenceFromInitialOffset(state) {
    const { clientOffset , initialClientOffset  } = state;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}

//# sourceMappingURL=coords.js.map
;// ../node_modules/dnd-core/dist/utils/dirtiness.js

const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */ function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) {
        return false;
    }
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    const commonIds = intersection(handlerIds, dirtyIds);
    return commonIds.length > 0;
}

//# sourceMappingURL=dirtiness.js.map
;// ../node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js




class DragDropMonitorImpl {
    subscribeToStateChange(listener, options = {}) {
        const { handlerIds  } = options;
        invariant(typeof listener === 'function', 'listener must be a function.');
        invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        let prevStateId = this.store.getState().stateId;
        const handleChange = ()=>{
            const state = this.store.getState();
            const currentStateId = state.stateId;
            try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) {
                    listener();
                }
            } finally{
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    }
    subscribeToOffsetChange(listener) {
        invariant(typeof listener === 'function', 'listener must be a function.');
        let previousState = this.store.getState().dragOffset;
        const handleChange = ()=>{
            const nextState = this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    }
    canDragSource(sourceId) {
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId);
        invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    }
    canDropOnTarget(targetId) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const target = this.registry.getTarget(targetId);
        invariant(target, `Expected to find a valid target. targetId=${targetId}`);
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
    isDragging() {
        return Boolean(this.getItemType());
    }
    isDraggingSource(sourceId) {
        // undefined on initial render
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId, true);
        invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        const sourceType = this.registry.getSourceType(sourceId);
        const draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    }
    isOverTarget(targetId, options = {
        shallow: false
    }) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const { shallow  } = options;
        if (!this.isDragging()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType(targetType, draggedItemType)) {
            return false;
        }
        const targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        const index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        } else {
            return index > -1;
        }
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
        return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
        return getSourceClientOffset(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
        return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
    constructor(store, registry){
        this.store = store;
        this.registry = registry;
    }
}

//# sourceMappingURL=DragDropMonitorImpl.js.map
;// ../node_modules/@react-dnd/asap/dist/makeRequestCall.js
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

//# sourceMappingURL=makeRequestCall.js.map
;// ../node_modules/@react-dnd/asap/dist/AsapQueue.js
/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion */ 
class AsapQueue {
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    enqueueTask(task) {
        const { queue: q , requestFlush  } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = ()=>{
            const { queue: q  } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++){
                        q[scan] = q[scan + this.index];
                    }
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = makeRequestCall(this.flush);
        this.requestErrorThrow = makeRequestCallFromTimer(()=>{
            // Throw first error
            if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
            }
        });
    }
} // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

//# sourceMappingURL=AsapQueue.js.map
;// ../node_modules/@react-dnd/asap/dist/RawTask.js
// `call`, just like a function.
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
}

//# sourceMappingURL=RawTask.js.map
;// ../node_modules/@react-dnd/asap/dist/TaskFactory.js

class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, (t)=>tasks[tasks.length] = t
        );
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
}

//# sourceMappingURL=TaskFactory.js.map
;// ../node_modules/@react-dnd/asap/dist/asap.js


const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */ function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
}

//# sourceMappingURL=asap.js.map
;// ../node_modules/@react-dnd/asap/dist/index.js





//# sourceMappingURL=index.js.map
;// ../node_modules/dnd-core/dist/actions/registry.js
const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId
        }
    };
}

//# sourceMappingURL=registry.js.map
;// ../node_modules/dnd-core/dist/contracts.js

function validateSourceContract(source) {
    invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
    invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach((t)=>validateType(t, false)
        );
        return;
    }
    invariant(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

//# sourceMappingURL=contracts.js.map
;// ../node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

//# sourceMappingURL=interfaces.js.map
;// ../node_modules/dnd-core/dist/utils/getNextUniqueId.js
let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}

//# sourceMappingURL=getNextUniqueId.js.map
;// ../node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js






function getNextHandlerId(role) {
    const id = getNextUniqueId().toString();
    switch(role){
        case HandlerRole.SOURCE:
            return `S${id}`;
        case HandlerRole.TARGET:
            return `T${id}`;
        default:
            throw new Error(`Unknown Handler Role: ${role}`);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return HandlerRole.SOURCE;
        case 'T':
            return HandlerRole.TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${handlerId}`);
    }
}
function mapContainsValue(map, searchValue) {
    const entries = map.entries();
    let isDone = false;
    do {
        const { done , value: [, value] ,  } = entries.next();
        if (value === searchValue) {
            return true;
        }
        isDone = !!done;
    }while (!isDone)
    return false;
}
class HandlerRegistryImpl {
    addSource(type, source) {
        validateType(type);
        validateSourceContract(source);
        const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
        this.store.dispatch(addSource(sourceId));
        return sourceId;
    }
    addTarget(type, target) {
        validateType(type, true);
        validateTargetContract(target);
        const targetId = this.addHandler(HandlerRole.TARGET, type, target);
        this.store.dispatch(addTarget(targetId));
        return targetId;
    }
    containsHandler(handler) {
        return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
    getSource(sourceId, includePinned = false) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        const isPinned = includePinned && sourceId === this.pinnedSourceId;
        const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    }
    getTarget(targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    }
    getSourceType(sourceId) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    }
    getTargetType(targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    }
    isSourceId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.SOURCE;
    }
    isTargetId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.TARGET;
    }
    removeSource(sourceId) {
        invariant(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch(removeSource(sourceId));
        asap(()=>{
            this.dragSources.delete(sourceId);
            this.types.delete(sourceId);
        });
    }
    removeTarget(targetId) {
        invariant(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch(removeTarget(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    }
    pinSource(sourceId) {
        const source = this.getSource(sourceId);
        invariant(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    }
    unpinSource() {
        invariant(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    addHandler(role, type, handler) {
        const id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        } else if (role === HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    }
    constructor(store){
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
}

//# sourceMappingURL=HandlerRegistryImpl.js.map
;// ../node_modules/dnd-core/dist/utils/equality.js
const strictEquality = (a, b)=>a === b
;
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */ function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    } else if (!offsetA || !offsetB) {
        return false;
    } else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */ function areArraysEqual(a, b, isEqual = strictEquality) {
    if (a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=equality.js.map
;// ../node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js





function reduce(// eslint-disable-next-line @typescript-eslint/no-unused-vars
_state = NONE, action) {
    switch(action.type){
        case HOVER:
            break;
        case ADD_SOURCE:
        case ADD_TARGET:
        case REMOVE_TARGET:
        case REMOVE_SOURCE:
            return NONE;
        case BEGIN_DRAG:
        case PUBLISH_DRAG_SOURCE:
        case END_DRAG:
        case DROP:
        default:
            return ALL;
    }
    const { targetIds =[] , prevTargetIds =[]  } = action.payload;
    const result = xor(targetIds, prevTargetIds);
    const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
        return NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    const innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
}

//# sourceMappingURL=dirtyHandlerIds.js.map
;// ../node_modules/dnd-core/dist/reducers/dragOffset.js
function dragOffset_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function dragOffset_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            dragOffset_defineProperty(target, key, source[key]);
        });
    }
    return target;
}


const initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function dragOffset_reduce(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case INIT_COORDS:
        case BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case HOVER:
            if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return dragOffset_objectSpread({}, state, {
                clientOffset: payload.clientOffset
            });
        case END_DRAG:
        case DROP:
            return initialState;
        default:
            return state;
    }
}

//# sourceMappingURL=dragOffset.js.map
;// ../node_modules/dnd-core/dist/reducers/dragOperation.js
function dragOperation_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function dragOperation_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            dragOperation_defineProperty(target, key, source[key]);
        });
    }
    return target;
}



const dragOperation_initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function dragOperation_reduce(state = dragOperation_initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case BEGIN_DRAG:
            return dragOperation_objectSpread({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case PUBLISH_DRAG_SOURCE:
            return dragOperation_objectSpread({}, state, {
                isSourcePublic: true
            });
        case HOVER:
            return dragOperation_objectSpread({}, state, {
                targetIds: payload.targetIds
            });
        case REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return dragOperation_objectSpread({}, state, {
                targetIds: without(state.targetIds, payload.targetId)
            });
        case DROP:
            return dragOperation_objectSpread({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case END_DRAG:
            return dragOperation_objectSpread({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
}

//# sourceMappingURL=dragOperation.js.map
;// ../node_modules/dnd-core/dist/reducers/refCount.js

function refCount_reduce(state = 0, action) {
    switch(action.type){
        case ADD_SOURCE:
        case ADD_TARGET:
            return state + 1;
        case REMOVE_SOURCE:
        case REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}

//# sourceMappingURL=refCount.js.map
;// ../node_modules/dnd-core/dist/reducers/stateId.js
function stateId_reduce(state = 0) {
    return state + 1;
}

//# sourceMappingURL=stateId.js.map
;// ../node_modules/dnd-core/dist/reducers/index.js
function reducers_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function reducers_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            reducers_defineProperty(target, key, source[key]);
        });
    }
    return target;
}






function reducers_reduce(state = {}, action) {
    return {
        dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
            type: action.type,
            payload: reducers_objectSpread({}, action.payload, {
                prevTargetIds: js_utils_get(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: dragOffset_reduce(state.dragOffset, action),
        refCount: refCount_reduce(state.refCount, action),
        dragOperation: dragOperation_reduce(state.dragOperation, action),
        stateId: stateId_reduce(state.stateId)
    };
}

//# sourceMappingURL=index.js.map
;// ../node_modules/dnd-core/dist/createDragDropManager.js





function createDragDropManager(backendFactory, globalContext = undefined, backendOptions = {}, debugMode = false) {
    const store = makeStoreInstance(debugMode);
    const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
    const manager = new DragDropManagerImpl(store, monitor);
    const backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return createStore(reducers_reduce, debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
}

//# sourceMappingURL=createDragDropManager.js.map
;// ../node_modules/react-dnd/dist/core/DndProvider.js
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ (0,external_React_.memo)(function DndProvider(_param) {
    var { children  } = _param, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
    ;
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ (0,external_React_.useEffect)(()=>{
        if (isGlobalInstance) {
            const context = getGlobalContext();
            ++refCount;
            return ()=>{
                if (--refCount === 0) {
                    context[INSTANCE_SYM] = null;
                }
            };
        }
        return;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DndContext.Provider, {
        value: manager,
        children: children
    });
});
/**
 * A React component that provides the React-DnD context
 */ 
function getDndContextValue(props) {
    if ('manager' in props) {
        const manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    const isGlobalInstance = !props.context;
    return [
        manager,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
    const ctx = context;
    if (!ctx[INSTANCE_SYM]) {
        ctx[INSTANCE_SYM] = {
            dragDropManager: createDragDropManager(backend, context, options, debugMode)
        };
    }
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return typeof global !== 'undefined' ? global : window;
}

//# sourceMappingURL=DndProvider.js.map
;// ../node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
// cheap lodash replacements
function memoize(fn) {
    let result = null;
    const memoized = ()=>{
        if (result == null) {
            result = fn();
        }
        return result;
    };
    return memoized;
}
/**
 * drop-in replacement for _.without
 */ function js_utils_without(items, item) {
    return items.filter((i)=>i !== item
    );
}
function union(itemsA, itemsB) {
    const set = new Set();
    const insertItem = (item)=>set.add(item)
    ;
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    set.forEach((key)=>result.push(key)
    );
    return result;
}

//# sourceMappingURL=js_utils.js.map
;// ../node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js

class EnterLeaveCounter {
    enter(enteringNode) {
        const previousLength = this.entered.length;
        const isNodeEntered = (node)=>this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode))
        ;
        this.entered = union(this.entered.filter(isNodeEntered), [
            enteringNode
        ]);
        return previousLength === 0 && this.entered.length > 0;
    }
    leave(leavingNode) {
        const previousLength = this.entered.length;
        this.entered = js_utils_without(this.entered.filter(this.isNodeInDocument), leavingNode);
        return previousLength > 0 && this.entered.length === 0;
    }
    reset() {
        this.entered = [];
    }
    constructor(isNodeInDocument){
        this.entered = [];
        this.isNodeInDocument = isNodeInDocument;
    }
}

//# sourceMappingURL=EnterLeaveCounter.js.map
;// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
class NativeDragSource {
    initializeExposedProperties() {
        Object.keys(this.config.exposeProperties).forEach((property)=>{
            Object.defineProperty(this.item, property, {
                configurable: true,
                enumerable: true,
                get () {
                    // eslint-disable-next-line no-console
                    console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
                    return null;
                }
            });
        });
    }
    loadDataTransfer(dataTransfer) {
        if (dataTransfer) {
            const newProperties = {};
            Object.keys(this.config.exposeProperties).forEach((property)=>{
                const propertyFn = this.config.exposeProperties[property];
                if (propertyFn != null) {
                    newProperties[property] = {
                        value: propertyFn(dataTransfer, this.config.matchesTypes),
                        configurable: true,
                        enumerable: true
                    };
                }
            });
            Object.defineProperties(this.item, newProperties);
        }
    }
    canDrag() {
        return true;
    }
    beginDrag() {
        return this.item;
    }
    isDragging(monitor, handle) {
        return handle === monitor.getSourceId();
    }
    endDrag() {
    // empty
    }
    constructor(config){
        this.config = config;
        this.item = {};
        this.initializeExposedProperties();
    }
}

//# sourceMappingURL=NativeDragSource.js.map
;// ../node_modules/react-dnd-html5-backend/dist/NativeTypes.js
const FILE = '__NATIVE_FILE__';
const NativeTypes_URL = '__NATIVE_URL__';
const TEXT = '__NATIVE_TEXT__';
const HTML = '__NATIVE_HTML__';

//# sourceMappingURL=NativeTypes.js.map
;// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    const result = typesToTry.reduce((resultSoFar, typeToTry)=>resultSoFar || dataTransfer.getData(typeToTry)
    , '');
    return result != null ? result : defaultValue;
}

//# sourceMappingURL=getDataFromDataTransfer.js.map
;// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js


const nativeTypesConfig = {
    [FILE]: {
        exposeProperties: {
            files: (dataTransfer)=>Array.prototype.slice.call(dataTransfer.files)
            ,
            items: (dataTransfer)=>dataTransfer.items
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Files'
        ]
    },
    [HTML]: {
        exposeProperties: {
            html: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Html',
            'text/html'
        ]
    },
    [NativeTypes_URL]: {
        exposeProperties: {
            urls: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Url',
            'text/uri-list'
        ]
    },
    [TEXT]: {
        exposeProperties: {
            text: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Text',
            'text/plain'
        ]
    }
};

//# sourceMappingURL=nativeTypesConfig.js.map
;// ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js


function createNativeDragSource(type, dataTransfer) {
    const config = nativeTypesConfig[type];
    if (!config) {
        throw new Error(`native type ${type} has no configuration`);
    }
    const result = new NativeDragSource(config);
    result.loadDataTransfer(dataTransfer);
    return result;
}
function matchNativeItemType(dataTransfer) {
    if (!dataTransfer) {
        return null;
    }
    const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return Object.keys(nativeTypesConfig).filter((nativeItemType)=>{
        const typeConfig = nativeTypesConfig[nativeItemType];
        if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
            return false;
        }
        return typeConfig.matchesTypes.some((t)=>dataTransferTypes.indexOf(t) > -1
        );
    })[0] || null;
}

//# sourceMappingURL=index.js.map
;// ../node_modules/react-dnd-html5-backend/dist/BrowserDetector.js

const isFirefox = memoize(()=>/firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(()=>Boolean(window.safari)
);

//# sourceMappingURL=BrowserDetector.js.map
;// ../node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
class MonotonicInterpolant {
    interpolate(x) {
        const { xs , ys , c1s , c2s , c3s  } = this;
        // The rightmost point in the dataset should give an exact result
        let i = xs.length - 1;
        if (x === xs[i]) {
            return ys[i];
        }
        // Search for the interval x is in, returning the corresponding y if x is one of the original xs
        let low = 0;
        let high = c3s.length - 1;
        let mid;
        while(low <= high){
            mid = Math.floor(0.5 * (low + high));
            const xHere = xs[mid];
            if (xHere < x) {
                low = mid + 1;
            } else if (xHere > x) {
                high = mid - 1;
            } else {
                return ys[mid];
            }
        }
        i = Math.max(0, high);
        // Interpolate
        const diff = x - xs[i];
        const diffSq = diff * diff;
        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
    constructor(xs, ys){
        const { length  } = xs;
        // Rearrange xs and ys so that xs is sorted
        const indexes = [];
        for(let i = 0; i < length; i++){
            indexes.push(i);
        }
        indexes.sort((a, b)=>xs[a] < xs[b] ? -1 : 1
        );
        // Get consecutive differences and slopes
        const dys = [];
        const dxs = [];
        const ms = [];
        let dx;
        let dy;
        for(let i1 = 0; i1 < length - 1; i1++){
            dx = xs[i1 + 1] - xs[i1];
            dy = ys[i1 + 1] - ys[i1];
            dxs.push(dx);
            dys.push(dy);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        const c1s = [
            ms[0]
        ];
        for(let i2 = 0; i2 < dxs.length - 1; i2++){
            const m2 = ms[i2];
            const mNext = ms[i2 + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            } else {
                dx = dxs[i2];
                const dxNext = dxs[i2 + 1];
                const common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        const c2s = [];
        const c3s = [];
        let m;
        for(let i3 = 0; i3 < c1s.length - 1; i3++){
            m = ms[i3];
            const c1 = c1s[i3];
            const invDx = 1 / dxs[i3];
            const common = c1 + c1s[i3 + 1] - m - m;
            c2s.push((m - c1 - common) * invDx);
            c3s.push(common * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
}

//# sourceMappingURL=MonotonicInterpolant.js.map
;// ../node_modules/react-dnd-html5-backend/dist/OffsetUtils.js


const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    const { top , left  } = el.getBoundingClientRect();
    return {
        x: left,
        y: top
    };
}
function getEventClientOffset(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function isImageNode(node) {
    var ref;
    return node.nodeName === 'IMG' && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if (isSafari() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return {
        dragPreviewWidth,
        dragPreviewHeight
    };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    const isImage = isImageNode(dragPreview);
    const dragPreviewNode = isImage ? sourceNode : dragPreview;
    const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    const offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
    };
    const { offsetWidth: sourceWidth , offsetHeight: sourceHeight  } = sourceNode;
    const { anchorX , anchorY  } = anchorPoint;
    const { dragPreviewWidth , dragPreviewHeight  } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
    const calculateYOffset = ()=>{
        const interpolantY = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            (offsetFromDragPreview.y / sourceHeight) * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight, 
        ]);
        let y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if (isSafari() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    const calculateXOffset = ()=>{
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        const interpolantX = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            (offsetFromDragPreview.x / sourceWidth) * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth, 
        ]);
        return interpolantX.interpolate(anchorX);
    };
    // Force offsets if specified in the options.
    const { offsetX , offsetY  } = offsetPoint;
    const isManualOffsetX = offsetX === 0 || offsetX;
    const isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset()
    };
}

//# sourceMappingURL=OffsetUtils.js.map
;// ../node_modules/react-dnd-html5-backend/dist/OptionsReader.js
class OptionsReader {
    get window() {
        if (this.globalContext) {
            return this.globalContext;
        } else if (typeof window !== 'undefined') {
            return window;
        }
        return undefined;
    }
    get document() {
        var ref;
        if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
            return this.globalContext.document;
        } else if (this.window) {
            return this.window.document;
        } else {
            return undefined;
        }
    }
    get rootElement() {
        var ref;
        return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
    }
    constructor(globalContext, options){
        this.ownerDocument = null;
        this.globalContext = globalContext;
        this.optionsArgs = options;
    }
}

//# sourceMappingURL=OptionsReader.js.map
;// ../node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function HTML5BackendImpl_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function HTML5BackendImpl_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            HTML5BackendImpl_defineProperty(target, key, source[key]);
        });
    }
    return target;
}





class HTML5BackendImpl {
    /**
	 * Generate profiling statistics for the HTML5Backend.
	 */ profile() {
        var ref, ref1;
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodeOptions: this.sourceNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
            dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
            dropTargetIds: this.dropTargetIds.length,
            dragEnterTargetIds: this.dragEnterTargetIds.length,
            dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
        };
    }
    // public for test
    get window() {
        return this.options.window;
    }
    get document() {
        return this.options.document;
    }
    /**
	 * Get the root element to use for event subscriptions
	 */ get rootElement() {
        return this.options.rootElement;
    }
    setup() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        if (root.__isReactDndBackendSetUp) {
            throw new Error('Cannot have two HTML5 backends at the same time.');
        }
        root.__isReactDndBackendSetUp = true;
        this.addEventListeners(root);
    }
    teardown() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        root.__isReactDndBackendSetUp = false;
        this.removeEventListeners(this.rootElement);
        this.clearCurrentDragSourceNode();
        if (this.asyncEndDragFrameId) {
            var ref;
            (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
        }
    }
    connectDragPreview(sourceId, node, options) {
        this.sourcePreviewNodeOptions.set(sourceId, options);
        this.sourcePreviewNodes.set(sourceId, node);
        return ()=>{
            this.sourcePreviewNodes.delete(sourceId);
            this.sourcePreviewNodeOptions.delete(sourceId);
        };
    }
    connectDragSource(sourceId, node, options) {
        this.sourceNodes.set(sourceId, node);
        this.sourceNodeOptions.set(sourceId, options);
        const handleDragStart = (e)=>this.handleDragStart(e, sourceId)
        ;
        const handleSelectStart = (e)=>this.handleSelectStart(e)
        ;
        node.setAttribute('draggable', 'true');
        node.addEventListener('dragstart', handleDragStart);
        node.addEventListener('selectstart', handleSelectStart);
        return ()=>{
            this.sourceNodes.delete(sourceId);
            this.sourceNodeOptions.delete(sourceId);
            node.removeEventListener('dragstart', handleDragStart);
            node.removeEventListener('selectstart', handleSelectStart);
            node.setAttribute('draggable', 'false');
        };
    }
    connectDropTarget(targetId, node) {
        const handleDragEnter = (e)=>this.handleDragEnter(e, targetId)
        ;
        const handleDragOver = (e)=>this.handleDragOver(e, targetId)
        ;
        const handleDrop = (e)=>this.handleDrop(e, targetId)
        ;
        node.addEventListener('dragenter', handleDragEnter);
        node.addEventListener('dragover', handleDragOver);
        node.addEventListener('drop', handleDrop);
        return ()=>{
            node.removeEventListener('dragenter', handleDragEnter);
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        };
    }
    addEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.addEventListener) {
            return;
        }
        target.addEventListener('dragstart', this.handleTopDragStart);
        target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.addEventListener('dragend', this.handleTopDragEndCapture, true);
        target.addEventListener('dragenter', this.handleTopDragEnter);
        target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.addEventListener('dragover', this.handleTopDragOver);
        target.addEventListener('dragover', this.handleTopDragOverCapture, true);
        target.addEventListener('drop', this.handleTopDrop);
        target.addEventListener('drop', this.handleTopDropCapture, true);
    }
    removeEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.removeEventListener) {
            return;
        }
        target.removeEventListener('dragstart', this.handleTopDragStart);
        target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
        target.removeEventListener('dragenter', this.handleTopDragEnter);
        target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.removeEventListener('dragover', this.handleTopDragOver);
        target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
        target.removeEventListener('drop', this.handleTopDrop);
        target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
    getCurrentSourceNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
        return HTML5BackendImpl_objectSpread({
            dropEffect: this.altKeyPressed ? 'copy' : 'move'
        }, sourceNodeOptions || {});
    }
    getCurrentDropEffect() {
        if (this.isDraggingNativeItem()) {
            // It makes more sense to default to 'copy' for native resources
            return 'copy';
        }
        return this.getCurrentSourceNodeOptions().dropEffect;
    }
    getCurrentSourcePreviewNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
        return HTML5BackendImpl_objectSpread({
            anchorX: 0.5,
            anchorY: 0.5,
            captureDraggingState: false
        }, sourcePreviewNodeOptions || {});
    }
    isDraggingNativeItem() {
        const itemType = this.monitor.getItemType();
        return Object.keys(NativeTypes_namespaceObject).some((key)=>NativeTypes_namespaceObject[key] === itemType
        );
    }
    beginDragNativeItem(type, dataTransfer) {
        this.clearCurrentDragSourceNode();
        this.currentNativeSource = createNativeDragSource(type, dataTransfer);
        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
        this.actions.beginDrag([
            this.currentNativeHandle
        ]);
    }
    setCurrentDragSourceNode(node) {
        this.clearCurrentDragSourceNode();
        this.currentDragSourceNode = node;
        // A timeout of > 0 is necessary to resolve Firefox issue referenced
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        const MOUSE_MOVE_TIMEOUT = 1000;
        // Receiving a mouse event in the middle of a dragging operation
        // means it has ended and the drag source node disappeared from DOM,
        // so the browser didn't dispatch the dragend event.
        //
        // We need to wait before we start listening for mousemove events.
        // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
        // immediately in some browsers.
        //
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        //
        this.mouseMoveTimeoutTimer = setTimeout(()=>{
            var ref;
            return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }, MOUSE_MOVE_TIMEOUT);
    }
    clearCurrentDragSourceNode() {
        if (this.currentDragSourceNode) {
            this.currentDragSourceNode = null;
            if (this.rootElement) {
                var ref;
                (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
                this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
            }
            this.mouseMoveTimeoutTimer = null;
            return true;
        }
        return false;
    }
    handleDragStart(e, sourceId) {
        if (e.defaultPrevented) {
            return;
        }
        if (!this.dragStartSourceIds) {
            this.dragStartSourceIds = [];
        }
        this.dragStartSourceIds.unshift(sourceId);
    }
    handleDragEnter(_e, targetId) {
        this.dragEnterTargetIds.unshift(targetId);
    }
    handleDragOver(_e, targetId) {
        if (this.dragOverTargetIds === null) {
            this.dragOverTargetIds = [];
        }
        this.dragOverTargetIds.unshift(targetId);
    }
    handleDrop(_e, targetId) {
        this.dropTargetIds.unshift(targetId);
    }
    constructor(manager, globalContext, options){
        this.sourcePreviewNodes = new Map();
        this.sourcePreviewNodeOptions = new Map();
        this.sourceNodes = new Map();
        this.sourceNodeOptions = new Map();
        this.dragStartSourceIds = null;
        this.dropTargetIds = [];
        this.dragEnterTargetIds = [];
        this.currentNativeSource = null;
        this.currentNativeHandle = null;
        this.currentDragSourceNode = null;
        this.altKeyPressed = false;
        this.mouseMoveTimeoutTimer = null;
        this.asyncEndDragFrameId = null;
        this.dragOverTargetIds = null;
        this.lastClientOffset = null;
        this.hoverRafId = null;
        this.getSourceClientOffset = (sourceId)=>{
            const source = this.sourceNodes.get(sourceId);
            return source && getNodeClientOffset(source) || null;
        };
        this.endDragNativeItem = ()=>{
            if (!this.isDraggingNativeItem()) {
                return;
            }
            this.actions.endDrag();
            if (this.currentNativeHandle) {
                this.registry.removeSource(this.currentNativeHandle);
            }
            this.currentNativeHandle = null;
            this.currentNativeSource = null;
        };
        this.isNodeInDocument = (node)=>{
            // Check the node either in the main document or in the current context
            return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
        };
        this.endDragIfSourceWasRemovedFromDOM = ()=>{
            const node = this.currentDragSourceNode;
            if (node == null || this.isNodeInDocument(node)) {
                return;
            }
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.scheduleHover = (dragOverTargetIds)=>{
            if (this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
                this.hoverRafId = requestAnimationFrame(()=>{
                    if (this.monitor.isDragging()) {
                        this.actions.hover(dragOverTargetIds || [], {
                            clientOffset: this.lastClientOffset
                        });
                    }
                    this.hoverRafId = null;
                });
            }
        };
        this.cancelHover = ()=>{
            if (this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.hoverRafId);
                this.hoverRafId = null;
            }
        };
        this.handleTopDragStartCapture = ()=>{
            this.clearCurrentDragSourceNode();
            this.dragStartSourceIds = [];
        };
        this.handleTopDragStart = (e)=>{
            if (e.defaultPrevented) {
                return;
            }
            const { dragStartSourceIds  } = this;
            this.dragStartSourceIds = null;
            const clientOffset = getEventClientOffset(e);
            // Avoid crashing if we missed a drop event or our previous drag died
            if (this.monitor.isDragging()) {
                this.actions.endDrag();
                this.cancelHover();
            }
            // Don't publish the source just yet (see why below)
            this.actions.beginDrag(dragStartSourceIds || [], {
                publishSource: false,
                getSourceClientOffset: this.getSourceClientOffset,
                clientOffset
            });
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (this.monitor.isDragging()) {
                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
                    // Use custom drag image if user specifies it.
                    // If child drag source refuses drag but parent agrees,
                    // use parent's node as drag image. Neither works in IE though.
                    const sourceId = this.monitor.getSourceId();
                    const sourceNode = this.sourceNodes.get(sourceId);
                    const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                    if (dragPreview) {
                        const { anchorX , anchorY , offsetX , offsetY  } = this.getCurrentSourcePreviewNodeOptions();
                        const anchorPoint = {
                            anchorX,
                            anchorY
                        };
                        const offsetPoint = {
                            offsetX,
                            offsetY
                        };
                        const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
                    }
                }
                try {
                    // Firefox won't drag without setting data
                    dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
                } catch (err) {
                // IE doesn't support MIME types in setData
                }
                // Store drag source node so we can check whether
                // it is removed from DOM and trigger endDrag manually.
                this.setCurrentDragSourceNode(e.target);
                // Now we are ready to publish the drag source.. or are we not?
                const { captureDraggingState  } = this.getCurrentSourcePreviewNodeOptions();
                if (!captureDraggingState) {
                    // Usually we want to publish it in the next tick so that browser
                    // is able to screenshot the current (not yet dragging) state.
                    //
                    // It also neatly avoids a situation where render() returns null
                    // in the same tick for the source element, and browser freaks out.
                    setTimeout(()=>this.actions.publishDragSource()
                    , 0);
                } else {
                    // In some cases the user may want to override this behavior, e.g.
                    // to work around IE not supporting custom drag previews.
                    //
                    // When using a custom drag layer, the only way to prevent
                    // the default drag preview from drawing in IE is to screenshot
                    // the dragging state in which the node itself has zero opacity
                    // and height. In this case, though, returning null from render()
                    // will abruptly end the dragging, which is not obvious.
                    //
                    // This is the reason such behavior is strictly opt-in.
                    this.actions.publishDragSource();
                }
            } else if (nativeType) {
                // A native item (such as URL) dragged from inside the document
                this.beginDragNativeItem(nativeType);
            } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
                // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
                // Just let it drag. It's a native type (URL or text) and will be picked up in
                // dragenter handler.
                return;
            } else {
                // If by this time no drag source reacted, tell browser not to drag.
                e.preventDefault();
            }
        };
        this.handleTopDragEndCapture = ()=>{
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleTopDragEnterCapture = (e)=>{
            this.dragEnterTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
            const isFirstEnter = this.enterLeaveCounter.enter(e.target);
            if (!isFirstEnter || this.monitor.isDragging()) {
                return;
            }
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (nativeType) {
                // A native item (such as file or URL) dragged from outside the document
                this.beginDragNativeItem(nativeType, dataTransfer);
            }
        };
        this.handleTopDragEnter = (e)=>{
            const { dragEnterTargetIds  } = this;
            this.dragEnterTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                return;
            }
            this.altKeyPressed = e.altKey;
            // If the target changes position as the result of `dragenter`, `dragover` might still
            // get dispatched despite target being no longer there. The easy solution is to check
            // whether there actually is a target before firing `hover`.
            if (dragEnterTargetIds.length > 0) {
                this.actions.hover(dragEnterTargetIds, {
                    clientOffset: getEventClientOffset(e)
                });
            }
            const canDrop = dragEnterTargetIds.some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // IE requires this to fire dragover events
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            }
        };
        this.handleTopDragOverCapture = (e)=>{
            this.dragOverTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
        };
        this.handleTopDragOver = (e)=>{
            const { dragOverTargetIds  } = this;
            this.dragOverTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
                return;
            }
            this.altKeyPressed = e.altKey;
            this.lastClientOffset = getEventClientOffset(e);
            this.scheduleHover(dragOverTargetIds);
            const canDrop = (dragOverTargetIds || []).some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // Show user-specified drop effect.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            } else if (this.isDraggingNativeItem()) {
                // Don't show a nice cursor but still prevent default
                // "drop and blow away the whole document" action.
                e.preventDefault();
            } else {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
            }
        };
        this.handleTopDragLeaveCapture = (e)=>{
            if (this.isDraggingNativeItem()) {
                e.preventDefault();
            }
            const isLastLeave = this.enterLeaveCounter.leave(e.target);
            if (!isLastLeave) {
                return;
            }
            if (this.isDraggingNativeItem()) {
                setTimeout(()=>this.endDragNativeItem()
                , 0);
            }
            this.cancelHover();
        };
        this.handleTopDropCapture = (e)=>{
            this.dropTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                e.preventDefault();
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            } else if (matchNativeItemType(e.dataTransfer)) {
                // Dragging some elements, like <a> and <img> may still behave like a native drag event,
                // even if the current drag event matches a user-defined type.
                // Stop the default behavior when we're not expecting a native item to be dropped.
                e.preventDefault();
            }
            this.enterLeaveCounter.reset();
        };
        this.handleTopDrop = (e)=>{
            const { dropTargetIds  } = this;
            this.dropTargetIds = [];
            this.actions.hover(dropTargetIds, {
                clientOffset: getEventClientOffset(e)
            });
            this.actions.drop({
                dropEffect: this.getCurrentDropEffect()
            });
            if (this.isDraggingNativeItem()) {
                this.endDragNativeItem();
            } else if (this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleSelectStart = (e)=>{
            const target = e.target;
            // Only IE requires us to explicitly say
            // we want drag drop operation to start
            if (typeof target.dragDrop !== 'function') {
                return;
            }
            // Inputs and textareas should be selectable
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }
            // For other targets, ask IE
            // to enable drag and drop
            e.preventDefault();
            target.dragDrop();
        };
        this.options = new OptionsReader(globalContext, options);
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
    }
}

//# sourceMappingURL=HTML5BackendImpl.js.map
;// ../node_modules/react-dnd-html5-backend/dist/index.js




const HTML5Backend = function createBackend(manager, context, options) {
    return new HTML5BackendImpl(manager, context, options);
};

//# sourceMappingURL=index.js.map
;// ../node_modules/clsx/dist/clsx.m.js
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const clsx_m = (clsx);
;// ../node_modules/react-contexify/dist/index.mjs




var dist_Y=(0,external_React_.createContext)({}),F=()=>(0,external_React_.useContext)(dist_Y),dist_$=t=>external_React_.createElement(dist_Y.Provider,{...t});function le(){let t=new Map;return {on(e,r){return t.has(e)?t.get(e).add(r):t.set(e,new Set([r])),this},off(e,r){return t.has(e)&&t.get(e).delete(r),this},emit(e,r){return t.has(e)&&t.get(e).forEach(f=>{f(r);}),this}}}var R=le();var B=()=>(0,external_React_.useRef)(new Map).current;var z=()=>{},U=["resize","contextmenu","click","scroll","blur"];var A={show({event:t,id:e,props:r,position:f}){t.preventDefault&&t.preventDefault(),R.emit(0).emit(e,{event:t.nativeEvent||t,props:r,position:f});},hideAll(){R.emit(0);}};function Fe(t){return {show(e){A.show({...t,...e});},hideAll(){A.hideAll();}}}function G(){let t=new Map,e,r,f,s,i=!1;function P(n){s=Array.from(n.values()),e=-1,f=!0;}function v(){s[e].node.focus();}let x=()=>e>=0&&s[e].isSubmenu,w=()=>Array.from(s[e].submenuRefTracker.values());function m(){return e===-1?(b(),!1):!0}function b(){e+1<s.length?e++:e+1===s.length&&(e=0),i&&a(),v();}function E(){e===-1||e===0?e=s.length-1:e-1<s.length&&e--,i&&a(),v();}function T(){if(m()&&x()){let n=w(),{node:c,setSubmenuPosition:h}=s[e];return t.set(c,{isRoot:f,focusedIndex:e,parentNode:r||c,items:s}),h(),c.classList.add("contexify_submenu-isOpen"),r=c,n.length>0?(e=0,s=n):i=!0,f=!1,v(),!0}return !1}function a(){if(m()&&!f){let n=t.get(r);r.classList.remove("contexify_submenu-isOpen"),s=n.items,r=n.parentNode,n.isRoot&&(f=!0,t.clear()),i||(e=n.focusedIndex,v());}}function y(n){function c(h){for(let o of h)o.isSubmenu&&o.submenuRefTracker&&c(Array.from(o.submenuRefTracker.values())),o.keyMatcher&&o.keyMatcher(n);}c(s);}return {init:P,moveDown:b,moveUp:E,openSubmenu:T,closeSubmenu:a,matchKeys:y}}function I(t){return typeof t=="function"}function V(t){return typeof t=="string"}function dist_(t,e){return external_React_.Children.map(external_React_.Children.toArray(t).filter(Boolean),r=>(0,external_React_.cloneElement)(r,e))}function J(t){let e={x:t.clientX,y:t.clientY},r=t.changedTouches;return r&&(e.x=r[0].clientX,e.y=r[0].clientY),(!e.x||e.x<0)&&(e.x=0),(!e.y||e.y<0)&&(e.y=0),e}function dist_k(t,e){return I(t)?t(e):t}function be(t,e){return {...t,...I(e)?e(t):e}}var it=({id:t,theme:e,style:r,className:f,children:s,animation:i="fade",preventDefaultOnKeydown:P=!0,disableBoundariesCheck:v=!1,onVisibilityChange:x,...w})=>{let[m,b]=(0,external_React_.useReducer)(be,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),E=(0,external_React_.useRef)(null),T=B(),[a]=(0,external_React_.useState)(()=>G()),y=(0,external_React_.useRef)(),n=(0,external_React_.useRef)();(0,external_React_.useEffect)(()=>(R.on(t,h).on(0,o),()=>{R.off(t,h).off(0,o);}),[t,i,v]),(0,external_React_.useEffect)(()=>{m.visible?a.init(T):T.clear();},[m.visible,a,T]);function c(u,p){if(E.current&&!v){let{innerWidth:d,innerHeight:C}=window,{offsetWidth:K,offsetHeight:O}=E.current;u+K>d&&(u-=u+K-d),p+O>C&&(p-=p+O-C);}return {x:u,y:p}}(0,external_React_.useEffect)(()=>{m.visible&&b(c(m.x,m.y));},[m.visible]),(0,external_React_.useEffect)(()=>{function u(d){P&&d.preventDefault();}function p(d){switch(d.key){case"Enter":case" ":a.openSubmenu()||o();break;case"Escape":o();break;case"ArrowUp":u(d),a.moveUp();break;case"ArrowDown":u(d),a.moveDown();break;case"ArrowRight":u(d),a.openSubmenu();break;case"ArrowLeft":u(d),a.closeSubmenu();break;default:a.matchKeys(d);break}}if(m.visible){window.addEventListener("keydown",p);for(let d of U)window.addEventListener(d,o);}return ()=>{window.removeEventListener("keydown",p);for(let d of U)window.removeEventListener(d,o);}},[m.visible,a,P]);function h({event:u,props:p,position:d}){u.stopPropagation();let C=d||J(u),{x:K,y:O}=c(C.x,C.y);(0,external_ReactDOM_namespaceObject.flushSync)(()=>{b({visible:!0,willLeave:!1,x:K,y:O,triggerEvent:u,propsFromTrigger:p});}),clearTimeout(n.current),!y.current&&I(x)&&(x(!0),y.current=!0);}function o(u){u!=null&&(u.button===2||u.ctrlKey)&&u.type!=="contextmenu"||(i&&(V(i)||"exit"in i&&i.exit)?b(p=>({willLeave:p.visible})):b(p=>({visible:p.visible?!1:p.visible})),n.current=setTimeout(()=>{I(x)&&x(!1),y.current=!1;}));}function M(){m.willLeave&&m.visible&&(0,external_ReactDOM_namespaceObject.flushSync)(()=>b({visible:!1,willLeave:!1}));}function S(){return V(i)?clsx_m({[`${"contexify_willEnter-"}${i}`]:g&&!D,[`${"contexify_willLeave-"}${i} ${"contexify_willLeave-"}'disabled'`]:g&&D}):i&&"enter"in i&&"exit"in i?clsx_m({[`${"contexify_willEnter-"}${i.enter}`]:i.enter&&g&&!D,[`${"contexify_willLeave-"}${i.exit} ${"contexify_willLeave-"}'disabled'`]:i.exit&&g&&D}):null}let{visible:g,triggerEvent:l,propsFromTrigger:L,x:oe,y:ie,willLeave:D}=m,ae=clsx_m("contexify",f,{[`${"contexify_theme-"}${e}`]:e},S());return external_React_.createElement(dist_$,{value:T},g&&external_React_.createElement("div",{...w,className:ae,onAnimationEnd:M,style:{...r,left:oe,top:ie,opacity:1},ref:E,role:"menu"},dist_(s,{propsFromTrigger:L,triggerEvent:l})))};var pt=({id:t,children:e,className:r,style:f,triggerEvent:s,data:i,propsFromTrigger:P,keyMatcher:v,onClick:x=z,disabled:w=!1,hidden:m=!1,closeOnClick:b=!0,handlerEvent:E="onClick",...T})=>{let a=(0,external_React_.useRef)(),y=F(),n={id:t,data:i,triggerEvent:s,props:P},c=dist_k(w,n),h=dist_k(m,n);function o(l){n.event=l,l.stopPropagation(),c||(b?M():x(n));}function M(){let l=a.current;l.focus(),l.addEventListener("animationend",()=>setTimeout(A.hideAll),{once:!0}),l.classList.add("contexify_item-feedback"),x(n);}function S(l){l&&!c&&(a.current=l,y.set(l,{node:l,isSubmenu:!1,keyMatcher:!c&&I(v)&&(L=>{v(L)&&(L.stopPropagation(),L.preventDefault(),n.event=L,M());})}));}function g(l){(l.key==="Enter"||l.key===" ")&&(l.stopPropagation(),n.event=l,M());}return h?null:external_React_.createElement("div",{...T,[E]:o,className:clsx_m("contexify_item",r,{[`${"contexify_item-disabled"}`]:c}),style:f,onKeyDown:g,ref:S,tabIndex:-1,role:"menuitem","aria-disabled":c},external_React_.createElement("div",{className:"contexify_itemContent"},e))};var Et=({triggerEvent:t,data:e,propsFromTrigger:r,hidden:f=!1})=>dist_k(f,{data:e,triggerEvent:t,props:r})?null:external_React_.createElement("div",{className:"contexify_separator"});var dist_re=()=>external_React_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},external_React_.createElement("polyline",{points:"9 18 15 12 9 6"}));var ne=({className:t,...e})=>external_React_.createElement("div",{className:clsx_m("contexify_rightSlot",t),...e});var Kt=({arrow:t,children:e,disabled:r=!1,hidden:f=!1,label:s,className:i,triggerEvent:P,propsFromTrigger:v,style:x,...w})=>{let m=F(),b=B(),E=(0,external_React_.useRef)(null),T={triggerEvent:P,props:v},a=dist_k(r,T),y=dist_k(f,T);function n(){let o=E.current;if(o){let M=`${"contexify_submenu"}-bottom`,S=`${"contexify_submenu"}-right`;o.classList.remove(M,S);let g=o.getBoundingClientRect();g.right>window.innerWidth&&o.classList.add(S),g.bottom>window.innerHeight&&o.classList.add(M);}}function c(o){o&&!a&&m.set(o,{node:o,isSubmenu:!0,submenuRefTracker:b,setSubmenuPosition:n});}if(y)return null;let h=clsx_m("contexify_item",i,{[`${"contexify_item-disabled"}`]:a});return external_React_.createElement(dist_$,{value:b},external_React_.createElement("div",{...w,className:h,ref:c,tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":a,onMouseEnter:n,onTouchStart:n},external_React_.createElement("div",{className:"contexify_itemContent",onClick:o=>o.stopPropagation()},s,external_React_.createElement(ne,null,t||external_React_.createElement(dist_re,null))),external_React_.createElement("div",{className:`${"contexify"} ${"contexify_submenu"}`,ref:E,style:x},dist_(e,{propsFromTrigger:v,triggerEvent:P}))))};


//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map
;// ./components/ContextMenu.js
/* provided dependency */ var ContextMenu_$ = __webpack_require__(669);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = ContextMenu_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ContextMenu_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return ContextMenu_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ContextMenu_arrayLikeToArray(r, a) : void 0; } }
function ContextMenu_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ContextMenu_objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function ContextMenu_extends() { return ContextMenu_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, ContextMenu_extends.apply(null, arguments); }




var ContextMenu = function ContextMenu(_ref) {
  var props = ContextMenu_extends({}, (ContextMenu_objectDestructuringEmpty(_ref), _ref));
  var callback = props.on_menu_item_click;
  (0,external_React_.useEffect)(function () {
    // componentDidUpdate
  });
  var on_menu_item_click = function on_menu_item_click(_ref2) {
    var event = _ref2.event,
      props = _ref2.props,
      triggerEvent = _ref2.triggerEvent,
      data = _ref2.data;
    console.log(event, props, triggerEvent, data);
    if (callback) {
      if (CONFIRM_TRANSITION_IDS.includes(data.id)) {
        // add confirmation dialog on the menu item
        var el = ContextMenu_$(event.currentTarget);
        var on_ok = function on_ok() {
          return callback(data.id, data.url, props.item);
        };
        el.confirmation({
          rootSelector: "[data-toggle=confirmation]",
          title: "".concat(window._t(data.title), "?"),
          btnOkLabel: window._t("Yes"),
          btnOkClass: "btn btn-outline-primary",
          btnOkIconClass: "fas fa-check-circle mr-1",
          btnCancelLabel: window._t("No"),
          btnCancelClass: "btn btn-outline-secondary",
          btnCancelIconClass: "fas fa-circle mr-1",
          container: "body",
          onConfirm: on_ok,
          singleton: true
        });
        el.confirmation("show");
      } else {
        callback(data.id, data.url, props.item);
      }
    }
  };
  var render_menu_items = function render_menu_items() {
    var menu_items = [];
    var title = window._t("Selected items");
    var folderitems = props.menu.folderitems || [];
    var count = folderitems.length;

    // use the item title if we have only one (regular) folderitem
    if (count == 1 && folderitems[0].title) {
      title = folderitems[0].title;
    }

    // Title item
    menu_items = [/*#__PURE__*/React.createElement(pt, {
      key: "title",
      disabled: true
    }, count > 1 && /*#__PURE__*/React.createElement("span", {
      className: "badge badge-secondary mr-1"
    }, count), title)];
    menu_items.push(/*#__PURE__*/React.createElement(Et, {
      key: "separator_below_title"
    }));

    // Transitions
    // NOTE: We set here closeOnClick={false} to avoid closing when a confirmation dialog is displayed
    var transitions = props.menu.transitions || [];
    var _iterator = _createForOfIteratorHelper(transitions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var transition = _step.value;
        menu_items.push(/*#__PURE__*/React.createElement(pt, {
          key: transition.id,
          closeOnClick: false,
          data: transition,
          onClick: on_menu_item_click
        }, window._t(transition.title)));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (transitions.length > 0) {
      menu_items.push(/*#__PURE__*/React.createElement(Et, {
        key: "separator_below_transitions"
      }));
    }

    // Actions
    var actions = props.menu.actions || [];
    var _iterator2 = _createForOfIteratorHelper(actions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var action = _step2.value;
        menu_items.push(/*#__PURE__*/React.createElement(pt, {
          key: action.id,
          data: action,
          onClick: on_menu_item_click
        }, window._t(action.title)));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (actions.length > 0) {
      menu_items.push(/*#__PURE__*/React.createElement(Et, {
        key: "separator_below_actions"
      }));
    }

    // Configurations
    var config_items = [];
    var configurations = props.menu.configurations || [];
    var _iterator3 = _createForOfIteratorHelper(configurations),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var config = _step3.value;
        config_items.push(/*#__PURE__*/React.createElement(pt, {
          key: config.id,
          data: config,
          onClick: on_menu_item_click
        }, window._t(config.title)));
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (config_items.length > 0) {
      menu_items.push(/*#__PURE__*/React.createElement(Kt, {
        key: "configuration_submenu",
        label: window._t("Configuration")
      }, config_items));
    }
    return menu_items;
  };
  var render_menu = function render_menu() {
    return /*#__PURE__*/React.createElement(it, {
      id: props.id
    }, render_menu_items());
  };
  return render_menu();
};
/* harmony default export */ const components_ContextMenu = (ContextMenu);
;// ./listing.coffee
/* provided dependency */ var listing_coffee_$ = __webpack_require__(669);
function listing_coffee_slicedToArray(r, e) { return listing_coffee_arrayWithHoles(r) || listing_coffee_iterableToArrayLimit(r, e) || listing_coffee_unsupportedIterableToArray(r, e) || listing_coffee_nonIterableRest(); }
function listing_coffee_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function listing_coffee_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return listing_coffee_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? listing_coffee_arrayLikeToArray(r, a) : void 0; } }
function listing_coffee_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function listing_coffee_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function listing_coffee_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function listing_coffee_defineProperty(e, r, t) { return (r = listing_coffee_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function listing_coffee_typeof(o) { "@babel/helpers - typeof"; return listing_coffee_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, listing_coffee_typeof(o); }
function listing_coffee_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function listing_coffee_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, listing_coffee_toPropertyKey(o.key), o); } }
function listing_coffee_createClass(e, r, t) { return r && listing_coffee_defineProperties(e.prototype, r), t && listing_coffee_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function listing_coffee_toPropertyKey(t) { var i = listing_coffee_toPrimitive(t, "string"); return "symbol" == listing_coffee_typeof(i) ? i : i + ""; }
function listing_coffee_toPrimitive(t, r) { if ("object" != listing_coffee_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != listing_coffee_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function listing_coffee_callSuper(t, o, e) { return o = listing_coffee_getPrototypeOf(o), listing_coffee_possibleConstructorReturn(t, listing_coffee_isNativeReflectConstruct() ? Reflect.construct(o, e || [], listing_coffee_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function listing_coffee_possibleConstructorReturn(t, e) { if (e && ("object" == listing_coffee_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return listing_coffee_assertThisInitialized(t); }
function listing_coffee_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function listing_coffee_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (listing_coffee_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function listing_coffee_getPrototypeOf(t) { return listing_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, listing_coffee_getPrototypeOf(t); }
function listing_coffee_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && listing_coffee_setPrototypeOf(t, e); }
function listing_coffee_setPrototypeOf(t, e) { return listing_coffee_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, listing_coffee_setPrototypeOf(t, e); }
/** ReactJS controlled component
 *
 * Please use JSDoc comments: https://jsdoc.app
 *
 * Note: Each comment must start with a `/**` sequence in order to be recognized
 *       by the JSDoc parser.
 */
var ListingController,
  listing_coffee_indexOf = [].indexOf;


















/** DOCUMENT READY ENTRY POINT */
document.addEventListener("DOMContentLoaded", function () {
  var controller, form_id, i, len, results, table, tables;
  console.debug("*** SENAITE.APP.LISTING::DOMContentLoaded: --> Loading ReactJS Controller");
  if (window._t == null) {
    console.warn("Global translation variable `_t` not found! Translations won't work!");
    // Mock the variable to return the input as output
    window._t = function (text) {
      return text;
    };
  }
  tables = document.getElementsByClassName("ajax-contents-table");
  if (window.listings == null) {
    window.listings = {};
  }
  results = [];
  for (i = 0, len = tables.length; i < len; i++) {
    table = tables[i];
    form_id = table.dataset.form_id;
    controller = external_ReactDOM_default().render(/*#__PURE__*/external_React_default().createElement(ListingController, {
      root_el: table
    }), table);
    // Keep a reference to the listing
    results.push(window.listings[form_id] = controller);
  }
  return results;
});

/**
 * Controller class for one listing table.
 * The idea is to handle all API calls and logic here and pass the callback
 * methods to the contained components.
 * @class
 */
ListingController = /*#__PURE__*/function (_React$Component) {
  /**
   * Bind all event handlers and define the state
   * @constructor
   */
  function ListingController(props) {
    var _this;
    listing_coffee_classCallCheck(this, ListingController);
    _this = listing_coffee_callSuper(this, ListingController, [props]);
    // bind callbacks
    _this.dismissMessage = _this.dismissMessage.bind(_this);
    _this.doAction = _this.doAction.bind(_this);
    _this.filterBySearchterm = _this.filterBySearchterm.bind(_this);
    _this.filterByState = _this.filterByState.bind(_this);
    _this.on_api_error = _this.on_api_error.bind(_this);
    _this.on_column_config_click = _this.on_column_config_click.bind(_this);
    _this.on_select_checkbox_checked = _this.on_select_checkbox_checked.bind(_this);
    _this.on_multi_select_checkbox_checked = _this.on_multi_select_checkbox_checked.bind(_this);
    _this.on_category_click = _this.on_category_click.bind(_this);
    _this.on_category_select = _this.on_category_select.bind(_this);
    _this.on_reload = _this.on_reload.bind(_this);
    _this.saveAjaxQueue = _this.saveAjaxQueue.bind(_this);
    _this.saveEditableField = _this.saveEditableField.bind(_this);
    _this.setColumnsOrder = _this.setColumnsOrder.bind(_this);
    _this.showMore = _this.showMore.bind(_this);
    _this["export"] = _this["export"].bind(_this);
    _this.sortBy = _this.sortBy.bind(_this);
    _this.toggleColumn = _this.toggleColumn.bind(_this);
    _this.toggleRemarks = _this.toggleRemarks.bind(_this);
    _this.toggleRow = _this.toggleRow.bind(_this);
    _this.updateEditableField = _this.updateEditableField.bind(_this);
    _this.on_popstate = _this.on_popstate.bind(_this);
    _this.moveRow = _this.moveRow.bind(_this);
    _this.showRowMenu = _this.showRowMenu.bind(_this);
    _this.handleRowMenuAction = _this.handleRowMenuAction.bind(_this);
    _this.on_row_order_change = _this.on_row_order_change.bind(_this);
    // root element
    _this.root_el = _this.props.root_el;
    // get initial configuration data from the HTML attribute
    _this.api_url = _this.root_el.dataset.api_url;
    _this.columns = JSON.parse(_this.root_el.dataset.columns);
    _this.form_id = _this.root_el.dataset.form_id;
    _this.listing_identifier = _this.root_el.dataset.listing_identifier;
    _this.pagesize = parseInt(_this.root_el.dataset.pagesize);
    _this.review_states = _this.parse_json(_this.root_el.dataset.review_states);
    _this.default_review_state = _this.root_el.dataset.default_review_state || "default";
    _this.show_column_toggles = _this.parse_json(_this.root_el.dataset.show_column_toggles);
    _this.enable_ajax_transitions = _this.parse_json(_this.root_el.dataset.enable_ajax_transitions, false);
    _this.active_ajax_transitions = _this.parse_json(_this.root_el.dataset.active_ajax_transitions, []);
    _this.row_context_menu_id = "row-context-menu-".concat(_this.form_id);
    // bind event handlers
    _this.root_el.addEventListener("reload", _this.on_reload);
    // the API is responsible for async calls and knows about the endpoints
    _this.api = new api_coffee({
      api_url: _this.api_url,
      on_api_error: _this.on_api_error,
      form_id: _this.form_id
    });
    // request parameters
    _this.filter = _this.api.get_url_parameter("filter");
    _this.pagesize = parseInt(_this.api.get_url_parameter("pagesize")) || _this.pagesize;
    _this.sort_on = _this.api.get_url_parameter("sort_on");
    _this.sort_order = _this.api.get_url_parameter("sort_order");
    _this.review_state = _this.api.get_url_parameter("review_state") || _this.default_review_state;
    // last selected item
    _this.last_select = null;
    _this.state = {
      // alert messages
      messages: [],
      // loading indicator
      loading: true,
      // show column config toggle
      show_column_config: false,
      // filter, pagesize, sort_on, sort_order and review_state are initially set
      // from the request to allow bookmarks to specific searches
      filter: _this.filter,
      pagesize: _this.pagesize,
      sort_on: _this.sort_on,
      sort_order: _this.sort_order,
      review_state: _this.review_state,
      // The query string is computed on the server and allows to bookmark listings
      query_string: "",
      // The API URL to call
      api_url: "",
      // form_id, columns and review_states are defined in the listing view and
      // passed in via a data attribute in the template, because they can be seen
      // as constant values
      form_id: _this.form_id,
      columns: _this.get_default_columns(),
      review_states: _this.review_states,
      // The data from the folderitems view call
      folderitems: [],
      // Mapping of UID -> list of children from the folderitems
      children: {},
      // The categories of the folderitems
      categories: [],
      // Expanded categories
      expanded_categories: [],
      // selected categories
      selected_categories: [],
      // Expanded Rows (currently only Partitions)
      expanded_rows: [],
      // Expanded Remarks Rows
      expanded_remarks: [],
      // total number of items in the database
      total: 0,
      // UIDs of selected rows are stored in selected_uids.
      // These are sent when a transition action is clicked.
      selected_uids: [],
      // UIDs (rows) that are in loading state
      loading_uids: [],
      // Mapping of UID -> List of error messages
      errors: {},
      // The possible transition buttons
      transitions: [],
      // The available catalog indexes for sorting
      catalog_indexes: [],
      // The available catalog columns for sorting
      catalog_columns: [],
      // The possible sortable columns
      sortable_columns: [],
      // ajax save queue: mapping of uid: name -> value mapping
      ajax_save_queue: {},
      // Listing specific configs
      content_filter: {},
      allow_edit: false,
      show_select_all_checkbox: false,
      show_select_column: false,
      show_column_toggles: _this.show_column_toggles,
      select_checkbox_name: "uids",
      post_action: "workflow_action",
      show_categories: false,
      expand_all_categories: false,
      show_more: false,
      limit_from: 0,
      show_search: false,
      show_ajax_save: false,
      show_table_footer: false,
      fetch_transitions_on_select: true,
      show_export: true,
      // signal full folderitems refetch in ajax_save
      refetch: false,
      // allow to reorder table rows with drag&drop
      allow_row_reorder: true,
      // Lock all action buttons
      lock_buttons: false,
      // table row context menu config
      row_context_menu: {},
      // progress bar
      progress: null,
      progress_label: null
    };
    return _this;
  }

  /**
   * Translate the given i18n string
   *
   * @param s {string} String to translate
   * @returns {string} Translated string
   */
  listing_coffee_inherits(ListingController, _React$Component);
  return listing_coffee_createClass(ListingController, [{
    key: "translate",
    value: function translate(s) {
      var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "senaite";
      if (domain === "plone") {
        return window._p(s);
      }
      return window._t(s);
    }

    /**
     * Dismisses a message by its message index
     *
     * @param index {int} Index of the message to dismiss
     * @returns {bool} true
     */
  }, {
    key: "dismissMessage",
    value: function dismissMessage() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var messages;
      // dismiss all messages
      if (index === null) {
        this.setState({
          messages: []
        });
      } else {
        // dismiss message by index
        messages = [].concat(this.state.messages);
        messages.splice(index, 1);
        this.setState({
          messages: messages
        });
      }
      return true;
    }

    /**
     * Display a new bootstrap alert message above the table
     *
     * @param title {string} Title to be displayed in the alert box
     *              {object} Config object for all parameters
     * @param text {string} The message text
     * @param traceback {string} Preformatted traceback
     * @param level {string} info, success, warning, danger
     * @returns {bool} true
     */
  }, {
    key: "addMessage",
    value: function addMessage(title, text, traceback) {
      var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "info";
      var messages, props;
      if (listing_coffee_typeof(title) === "object") {
        props = Object.assign(title);
        title = props.title;
        text = props.text;
        traceback = props.traceback;
        level = props.level;
      }
      messages = [].concat(this.state.messages);
      messages.push({
        title: title,
        text: text,
        traceback: traceback,
        level: level
      });
      this.setState({
        messages: messages
      });
      return true;
    }

    /**
     * Parameters to be sent in each Ajax POST request
     * @returns {object} current state values
     */
  }, {
    key: "getRequestOptions",
    value: function getRequestOptions() {
      var options;
      options = {
        "review_state": this.state.review_state,
        "filter": this.state.filter,
        "sort_on": this.state.sort_on,
        "sort_order": this.state.sort_order,
        "pagesize": this.state.pagesize,
        "limit_from": this.state.limit_from,
        "selected_uids": this.state.selected_uids
      };
      console.debug("Request Options=", options);
      return options;
    }

    /**
     * ReactJS event handler when the component did mount
     * Fetches the initial folderitems
     */
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("popstate", this.on_popstate, false);
      return this.fetch_folderitems();
    }

    /**
     * ReactJS event handler when the component unmounts
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      return window.removeEventListener("popstate", this.on_popstate, false);
    }

    /**
     * componentDidUpdate(prevProps, prevState, snapshot)
     *
     * This is invoked immediately after updating occurs.
     * This method is not called for the initial render.
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {}

    /*
     * Toggle the loading state of an UID (row)
     *
     * @param uid {string} UID of the item
     * @returns {bool} true if the UID was added set in loading state, otherwise false
     */
  }, {
    key: "toggleUIDLoading",
    value: function toggleUIDLoading(uid, toggle) {
      var index, loading_uids;
      console.debug("ListingController::toggleRowLoading: uid=".concat(uid));
      if (!uid) {
        // skip if no uid is given
        return false;
      }
      // get the current expanded rows
      loading_uids = this.state.loading_uids;
      // check if the current UID is in there
      index = loading_uids.indexOf(uid);
      // set the default toggle flag value to "on" if the UID is not in the array
      if (toggle == null) {
        toggle = index === -1;
      }
      if (index > -1) {
        // remove the UID if the toggle flag is set to "off"
        if (!toggle) {
          loading_uids.splice(index, 1);
        }
      } else {
        // add the UID if the toggle flag is set to "on"
        if (toggle) {
          loading_uids.push(uid);
        }
      }
      return this.setState({
        loading_uids: loading_uids
      });
    }

    /**
     * Add an error message for a given UID
     *
     * @param uid {string} UID of the object
     * @param message {string} Error message
     * @returns {bool} true if the error message was set
     */
  }, {
    key: "setErrors",
    value: function setErrors(uid, message) {
      var errors, level, messages, title;
      if (!(uid != null || message != null)) {
        return false;
      }
      if (message == null) {
        message = "";
      }
      if (uid == null) {
        // display global error message
        title = _t("Oops, an error occured! 🙈");
        return this.addMessage(title, message, null, level = "danger");
      }
      // append the message to the given UID
      errors = this.state.errors;
      messages = errors[uid] || [];
      if (message.length > 0 && messages.indexOf(message) < 0) {
        messages = messages.concat(message);
      }
      errors[uid] = messages;
      return this.setState({
        errors: errors
      });
    }

    /**
     * Flush error messages for a given UID (or all)
     *
     * @param uid {string} UID of the object
     */
  }, {
    key: "flushErrors",
    value: function flushErrors(uid) {
      var errors;
      errors = this.state.errors;
      if (uid == null) {
        // flush all errors
        errors = {};
        this.dismissMessage();
      } else {
        // flush error messages for the given UID
        errors[uid] = [];
      }
      return this.setState({
        errors: errors
      });
    }

    /**
     * Expand/Collapse a listing category row by adding the category ID to the
     * state `expanded_categories`
     *
     * @param category {string} Title of the category
     * @returns {bool} true if the category was expanded, otherwise false
     */
  }, {
    key: "toggleCategory",
    value: function toggleCategory(category) {
      var expanded, index;
      console.debug("ListingController::toggleCategory: category=".concat(category));
      // get the current expanded categories
      expanded = this.state.expanded_categories;
      // check if the current category is in there
      index = expanded.indexOf(category);
      if (index > -1) {
        // remove the category
        expanded.splice(index, 1);
      } else {
        // add the category
        expanded.push(category);
      }
      // set the new expanded categories
      this.setState({
        expanded_categories: expanded
      });
      return expanded.length > 0;
    }

    /**
     * Select/Deselect all items within a category
     *
     * @param category {string} Title of the category
     * @returns {bool} true if the category was selected, otherwise false
     */
  }, {
    key: "selectCategory",
    value: function selectCategory(category) {
      var selected;
      console.debug("ListingController::selectCategory: category=".concat(category));
      // unique set of current selected category names
      selected = new Set(this.state.selected_categories);
      if (selected.has(category)) {
        // remove the category
        selected["delete"](category);
      } else {
        // add the category
        selected.add(category);
      }
      // set the new selected categories
      this.setState({
        selected_categories: Array.from(selected)
      });
      return selected.has(category);
    }

    /**
     * Expand/Collapse remarks
     *
     * @param uid {string} UID of the item
     * @returns {bool} true if the remarks were expanded, otherwise false
     */
  }, {
    key: "toggleRemarks",
    value: function toggleRemarks(uid) {
      var expanded, index;
      console.debug("ListingController::toggleRemarks: uid=".concat(uid));
      if (!uid) {
        // skip if no uid is given
        return false;
      }
      // get the current expanded remarks
      expanded = this.state.expanded_remarks;
      // check if the current UID is in there
      index = expanded.indexOf(uid);
      if (index > -1) {
        // remove the UID
        expanded.splice(index, 1);
      } else {
        // add the UID
        expanded.push(uid);
      }
      // set the new expanded remarks
      this.setState({
        expanded_remarks: expanded
      });
      return expanded.length > 0;
    }

    /*
     * Expand/Collapse the row
     *
     * @param uid {string} UID of the item
     * @returns {bool} true if the row was expanded, otherwise false
     */
  }, {
    key: "toggleRow",
    value: function toggleRow(uid) {
      var expanded, index, me, promise;
      console.debug("ListingController::toggleRow: uid=".concat(uid));
      if (!uid) {
        // skip if no uid is given
        return false;
      }
      // get the current expanded rows
      expanded = this.state.expanded_rows;
      // check if the current row is in there
      index = expanded.indexOf(uid);
      if (index > -1) {
        // remove the category
        expanded.splice(index, 1);
      } else {
        // add the category
        expanded.push(uid);
      }
      // check if the children are already fetched
      me = this;
      if (!(uid in this.state.children)) {
        promise = this.fetch_children({
          parent_uid: uid
        });
        promise.then(function (data) {
          var child, children, i, item_children, len;
          children = me.state.children;
          item_children = data.children || [];
          children[uid] = item_children;
          for (i = 0, len = item_children.length; i < len; i++) {
            child = item_children[i];
            if (child.selected) {
              me.selectUID(child.uid, true);
            }
          }
          return me.setState({
            children: children,
            expanded_rows: expanded
          });
        });
      } else {
        // set the new expanded categories
        this.setState({
          expanded_rows: expanded
        });
      }
      return expanded.length > 0;
    }

    /**
     * Toggle the visibility of a column by its column key.
     *
     * This method also stores the visibility of the column in the browser's
     * localstorage.
     *
     * @param key {string} The ID of the column, or "reset" to restore all columns
     * @returns {bool} true if the column was expanded, otherwise false
     */
  }, {
    key: "toggleColumn",
    value: function toggleColumn(key) {
      var column, column_config, columns, toggle;
      console.debug("ListingController::toggleColumn: key=".concat(key));
      // restore columns to the initial state and flush the local storage
      if (key === "reset") {
        this.setState({
          columns: this.get_default_columns()
        });
        this.set_local_column_config([]);
        return true;
      }
      // get the columns from the state
      columns = this.state.columns;
      // Toggle the visibility of the column
      toggle = columns[key]["toggle"];
      if (toggle === void 0) {
        toggle = true;
      }
      columns[key]["toggle"] = !toggle;
      column_config = [];
      for (key in columns) {
        column = columns[key];
        // keep only a record of the column key and visibility in the local storage
        column_config.push({
          key: key,
          toggle: column.toggle
        });
      }
      // store the new order and visibility in the local storage
      this.set_local_column_config(column_config);
      // update the columns of the current state
      this.setState({
        columns: columns
      });
      return toggle;
    }

    /**
     * Handle context menu action
     */
  }, {
    key: "handleRowMenuAction",
    value: function handleRowMenuAction(id, url, item) {
      var uids;
      // either use the already selected UIDs or, if nothing is selected, the UIDs
      // from the row item where the context menu was opened.
      // N.B. Transposed folderitems might contain multiple folderitems/UIDs!
      uids = this.get_uids_from([item]);
      if (this.state.selected_uids.length > 0) {
        uids = [].concat(this.state.selected_uids);
      }
      // execute the transition
      return this.doAction(id, url, uids);
    }

    /**
     * Displays a context menu with all possible transitions for the clicked row
     *
     * Callback triggered by row onContextMenu handler (see TableRows.js)
     */
  }, {
    key: "showRowMenu",
    value: function showRowMenu(event, item) {
      var _this2 = this;
      var folderitems, loader, menu, uids;
      event.preventDefault();
      // https://fkhadra.github.io/react-contexify/api/use-context-menu
      menu = Fe({
        id: this.row_context_menu_id
      });
      uids = [];
      if (this.state.selected_uids.length > 0) {
        // operate on selected UIDs
        uids = this.state.selected_uids;
      } else {
        // extract UIDs of the folderitem (including transposed items)
        uids = this.get_uids_from([item]);
      }
      // get the folderitems of the selected UIDS
      folderitems = this.get_folderitems().filter(function (item) {
        var ref;
        return ref = item.uid, listing_coffee_indexOf.call(uids, ref) >= 0;
      });
      return this.fetch_transitions(uids, loader = false).then(function (data) {
        var configurations, new_state, transitions;
        transitions = [];
        // inject save button
        if (_this2.state.show_ajax_save) {
          transitions.unshift({
            "id": "save",
            "title": "Save"
          });
        }
        transitions = transitions.concat(data.transitions);
        configurations = [];
        if (_this2.state.fetch_transitions_on_select) {
          configurations.push({
            "id": "toggle_auto_fetch_transitions",
            "title": "Disable auto fetch transitions"
          });
        } else {
          configurations.push({
            "id": "toggle_auto_fetch_transitions",
            "title": "Enable auto fetch transitions"
          });
        }
        configurations.push({
          "id": "reset_columns",
          "title": "Reset columns"
        });
        // build context menu state config
        new_state = {
          row_context_menu: {
            folderitems: folderitems,
            transitions: transitions,
            actions: [{
              id: "all",
              title: "Select all"
            }, {
              id: "clear_selection",
              title: "Deselect all"
            }, {
              id: "fetch_transitions",
              title: "Fetch Transitions"
            }, {
              id: "reload",
              title: "Reload"
            }],
            configurations: configurations
          }
        };
        // Transitions are set by the fetch_transitions method.
        // If auto fetch is disabled, we do not want to set them implicitly.
        if (!_this2.state.fetch_transitions_on_select) {
          new_state["transitions"] = [];
        }
        // set the new state and show the context menu afterwards
        return _this2.setState(new_state, function () {
          // show the context menu
          return menu.show({
            event: event,
            props: {
              item: item
            }
          });
        });
      });
    }

    /**
     * Move the table row by the given indexes
     */
  }, {
    key: "moveRow",
    value: function moveRow(index_from, index_to) {
      var folderitems, source_folderitem, target_folderitem;
      source_folderitem = this.state.folderitems[index_from];
      folderitems = [].concat(this.state.folderitems);
      target_folderitem = folderitems.splice(index_to, 1, source_folderitem);
      folderitems.splice(index_from, 1, target_folderitem[0]);
      return this.setState({
        folderitems: folderitems
      });
    }

    /**
     * Update the order of all columns
     *
     * This method also stores the order of the columns in the browser's
     * localstorage.
     *
     * @param order {array} Array of column IDs to be used as new order
     * @returns {object} New ordered columns object
     */
  }, {
    key: "setColumnsOrder",
    value: function setColumnsOrder(order) {
      var column, column_config, i, key, keys, len, ordered_columns, toggle;
      console.debug("ListingController::setColumnsOrder: order=".concat(order));
      // This object will hold the new ordered columns
      ordered_columns = {};
      // Although the column properties seem to be sorted, we keep in the local
      // storage a list of column "visibility" objects to avoid any order issues
      // with the JSON serialization step.
      column_config = [];
      // get the keys of all columns (visible or not)
      keys = Object.keys(this.state.columns);
      // sort the keys according to the passed in column order
      keys.sort(function (a, b) {
        return order.indexOf(a) - order.indexOf(b);
      });
      // rebuild an object with the new property order
      for (i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        column = this.state.columns[key];
        toggle = column.toggle;
        if (toggle === void 0) {
          toggle = true;
        }
        // keep only a record of the column key and visibility in the local storage
        column_config.push({
          key: key,
          toggle: toggle
        });
        ordered_columns[key] = column;
      }
      // store the new order and visibility in the local storage
      this.set_local_column_config(column_config);
      // update the columns of the current state
      this.setState({
        columns: ordered_columns
      });
      return ordered_columns;
    }

    /**
     * Returns all column keys where the visibility toggle is true
     *
     * @returns columns {array} Array of ordered and visible columns
     */
  }, {
    key: "get_visible_columns",
    value: function get_visible_columns() {
      var allowed_keys, i, key, keys, len, ref, toggle, visible;
      keys = [];
      allowed_keys = this.get_allowed_column_keys();
      visible = this.get_columns_visibility();
      ref = this.get_columns_order();
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        // skip non-allowed keys
        if (listing_coffee_indexOf.call(allowed_keys, key) < 0) {
          continue;
        }
        toggle = visible[key];
        // skip columns which are not visible
        if (toggle === false) {
          continue;
        }
        // remember the key
        keys.push(key);
      }
      return keys;
    }

    /**
     * Get the default columns
     *
     * This method parses the JSON columns definitions from the DOM.
     *
     * @returns columns {object} Object of column definitions
     */
  }, {
    key: "get_default_columns",
    value: function get_default_columns() {
      return JSON.parse(this.root_el.dataset.columns);
    }

    /**
     * Get columns in the right order and visibility
     *
     * This method takes the local column settings into consideration to set the
     * visibility and order of the final columns object.
     *
     * @returns columns {object} new columns object
     */
  }, {
    key: "get_columns",
    value: function get_columns() {
      var column, columns, i, key, len, ref, toggle, visibility;
      columns = {};
      visibility = this.get_columns_visibility();
      ref = this.get_columns_order();
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        column = this.state.columns[key];
        if (column === void 0) {
          console.warn("Skipping nonexisting column '".concat(key, "'."));
          continue;
        }
        toggle = visibility[key];
        if (toggle !== void 0) {
          column["toggle"] = toggle;
        }
        columns[key] = column;
      }
      return columns;
    }

    /**
     * Extract all keys from the curent columns
     *
     * @returns keys {array} Current colum keys
     */
  }, {
    key: "get_columns_keys",
    value: function get_columns_keys() {
      return Object.keys(this.state.columns);
    }

    /**
     * Return the order of all columns
     *
     * This method takes also the local column config into consideration
     *
     * @returns keys {array} Current colum keys
     */
  }, {
    key: "get_columns_order",
    value: function get_columns_order() {
      var allowed, allowed_keys, columns_keys, keys, local_config;
      keys = [];
      columns_keys = this.get_columns_keys();
      local_config = this.get_local_column_config();
      // filter out removed columns that still exist in the local config
      local_config = local_config.filter(function (column) {
        return columns_keys.indexOf(column.key) !== -1;
      });
      // Skip local settings if toggling/ordering is not allowed
      allowed = this.state.show_column_toggles;
      if (allowed && local_config.length > 0) {
        // extract the column keys in the user selected order
        keys = local_config.map(function (item, index) {
          return item.key;
        });
      } else {
        // sort column keys by the current columns settings
        allowed_keys = this.get_allowed_column_keys();
        keys = allowed_keys.concat(columns_keys.filter(function (k) {
          // only append column keys which are not yet in  allowed_keys
          return allowed_keys.indexOf(k) === -1;
        }));
      }
      return keys;
    }

    /**
     * Return the set visibility of all columns
     *
     * This method takes also the local column config into consideration
     *
     * @returns visibility {object} of column key -> visibility
     */
  }, {
    key: "get_columns_visibility",
    value: function get_columns_visibility() {
      var allowed, column, i, key, len, local_config, ref, toggle, visibility;
      visibility = {};
      local_config = this.get_local_column_config();
      // Skip local settings if toggling/ordering is not allowed
      allowed = this.state.show_column_toggles;
      if (allowed && local_config.length > 0) {
        // get the user defined visibility
        for (i = 0, len = local_config.length; i < len; i++) {
          var _local_config$i = local_config[i];
          key = _local_config$i.key;
          toggle = _local_config$i.toggle;
          if (toggle === void 0) {
            toggle = true;
          }
          visibility[key] = toggle;
        }
      } else {
        ref = this.state.columns;
        // use the default visibility of the columns
        for (key in ref) {
          column = ref[key];
          toggle = column.toggle;
          if (toggle === void 0) {
            toggle = true;
          }
          visibility[key] = toggle;
        }
      }
      return visibility;
    }

    /**
     * Filter the results by the given state
     *
     * This method executes an Ajax request to the server.
     *
     * @param review_state {string} The state to filter, e.g. verified, published
     * @returns {bool} true
     */
  }, {
    key: "filterByState",
    value: function filterByState() {
      var review_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
      var state, state_listing_config;
      console.debug("ListingController::filterByState: review_state=".concat(review_state));
      state = this.get_review_state_by_id(review_state);
      // allow to update the listing config per state
      state_listing_config = state.listing_config || {};
      this.set_state(Object.assign({
        review_state: review_state,
        pagesize: this.pagesize,
        // reset to the initial pagesize on state change
        limit_from: 0
      }, state_listing_config));
      return true;
    }

    /**
     * Filter the results by the given searchterm
     *
     * This method executes an Ajax request to the server.
     *
     * @param filter {string} An arbitrary search string
     * @returns {bool} true
     */
  }, {
    key: "filterBySearchterm",
    value: function filterBySearchterm() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      console.debug("ListingController::filterBySearchter: filter=".concat(filter));
      this.set_state({
        filter: filter,
        pagesize: this.pagesize,
        // reset to the initial pagesize on search
        limit_from: 0
      });
      return true;
    }

    /**
     * Sort a column with a specific order
     *
     * This method executes an Ajax request to the server.
     *
     * @param sort_on {string} Sort index, e.g. getId, created
     * @param sort_order {string} Sort order, e.g. ascending, descending
     * @returns {bool} true
     */
  }, {
    key: "sortBy",
    value: function sortBy(sort_on, sort_order) {
      console.debug("sort_on=".concat(sort_on, " sort_order=").concat(sort_order));
      this.set_state({
        sort_on: sort_on,
        sort_order: sort_order,
        pagesize: this.get_item_count(),
        // keep the current number of items on sort
        limit_from: 0
      });
      return true;
    }

    /**
     * Show more results
     *
     * This method executes an Ajax request to the server.
     *
     * @param pagesize {int} The amount of additional items to request
     * @returns {bool} true
     */
  }, {
    key: "showMore",
    value: function showMore(pagesize) {
      var folderitems, me, selected_uids;
      console.debug("ListingController::showMore: pagesize=".concat(pagesize));
      // the existing folderitems
      folderitems = this.state.folderitems;
      // set of current selected UIDs
      selected_uids = new Set(this.state.selected_uids);
      me = this;
      this.setState({
        pagesize: parseInt(pagesize),
        limit_from: this.state.folderitems.length,
        loading: true
      }, function () {
        var promise;
        // N.B. we're using limit_from here, so we must append the returning
        //      folderitems to the existing ones
        promise = me.api.fetch_folderitems(me.getRequestOptions());
        return promise.then(function (data) {
          var i, item, len, new_folderitems, new_selected_uids, ref;
          me.toggle_loader(false);
          if (data.folderitems.length > 0) {
            console.debug("Adding ".concat(data.folderitems.length, " more folderitems..."));
            ref = data.folderitems;
            // update selected UIDs from the server
            for (i = 0, len = ref.length; i < len; i++) {
              item = ref[i];
              if (item.selected) {
                selected_uids.add(item.uid);
              }
            }
            // append the new folderitems to the existing ones
            new_folderitems = folderitems.concat(data.folderitems);
            // array of new selected UIDs
            new_selected_uids = Array.from(selected_uids);
            return me.setState({
              folderitems: new_folderitems,
              selected_uids: new_selected_uids
            });
          }
        });
      });
      return true;
    }

    /*
    Export the current displayed items to a CSV
    */
  }, {
    key: "export",
    value: function _export() {
      var col, columns, columns_keys, columns_visibility, csv, folderitems, header, item, key, rows;
      console.debug("ListingController::export");
      // Column keys, sorted properly
      columns_keys = this.get_columns_order();
      // Only interested in visible columns
      columns_visibility = this.get_columns_visibility();
      columns_keys = function () {
        var i, len, results;
        results = [];
        for (i = 0, len = columns_keys.length; i < len; i++) {
          col = columns_keys[i];
          if (columns_visibility[col] === true) {
            results.push(col);
          }
        }
        return results;
      }();
      // Generate the header
      columns = this.get_columns();
      header = function () {
        var i, len, results;
        results = [];
        for (i = 0, len = columns_keys.length; i < len; i++) {
          key = columns_keys[i];
          results.push(JSON.stringify(columns[key]["title"] || key));
        }
        return results;
      }();
      // Generate the list of rows
      folderitems = this.state.folderitems;
      rows = function () {
        var i, len, results;
        results = [];
        for (i = 0, len = folderitems.length; i < len; i++) {
          item = folderitems[i];
          results.push(this.to_csv_row(item, columns_keys));
        }
        return results;
      }.call(this);
      // Join all together
      csv = header.join(",");
      csv = csv + "\n" + rows.join("\n");
      return this.download_csv(csv, "download.csv");
    }

    /*
    Triggers the download of the csv
    */
  }, {
    key: "download_csv",
    value: function download_csv(csv, filename) {
      var csv_file, csv_properties, down_link, universalBOM;
      universalBOM = "\uFEFF";
      csv_properties = {
        encoding: "UTF-8",
        type: "text/csv;charset=UTF-8"
      };
      csv_file = new Blob([universalBOM, csv], csv_properties);
      down_link = document.createElement("a");
      down_link.download = filename;
      down_link.href = window.URL.createObjectURL(csv_file);
      down_link.display = "none";
      document.body.appendChild(down_link);
      return down_link.click();
    }

    /*
    Converts the item to a well-formed csv row
    */
  }, {
    key: "to_csv_row",
    value: function to_csv_row(item, columns) {
      var c, cell, cells, choice, choices, column, i, len;
      cells = [];
      console.debug(item);
      for (i = 0, len = columns.length; i < len; i++) {
        column = columns[i];
        cell = item[column] || "";
        if (column === "Result") {
          // Give priority to formatted_result
          cell = item.formatted_result || cell;
        } else if (cell.constructor === Object) {
          // Handle interim fields gracefully
          cell = cell.formatted_value || cell.value;
        }
        if (item.choices != null) {
          // Handle choices
          choices = item.choices[column];
          if (choices != null) {
            choice = function () {
              var j, len1, results;
              results = [];
              for (j = 0, len1 = choices.length; j < len1; j++) {
                c = choices[j];
                if (c.ResultValue === cell) {
                  results.push(c.ResultText);
                }
              }
              return results;
            }();
            cell = choice[0] || cell;
          }
        }
        cell = JSON.stringify(cell);
        cells.push(cell);
      }
      return cells.join(',');
    }

    /**
     * Load modal popup
     *
     * This method renders a modal window with the HTML loaded from the URL
     *
     * @param url {string} The form action URL
     * @param event {object} ReactJS event object
     */
  }, {
    key: "loadModal",
    value: function loadModal(url, selected_uids) {
      var _this3 = this;
      var el, on_submit, request;
      el = listing_coffee_$("#modal_".concat(this.form_id));
      // allow to override selected uids
      if (selected_uids == null) {
        selected_uids = this.state.selected_uids;
      }
      url = new URL(url);
      url.searchParams.append("uids", selected_uids);
      // submit callback
      on_submit = function on_submit(event) {
        var form;
        event.preventDefault();
        form = event.target;
        // always hide the modal on submit
        el.modal("hide");
        if (!form.action) {
          console.error("Modal form has no action defined");
          return;
        }
        // process form submit
        return fetch(form.action, {
          method: "POST",
          body: new FormData(form)
        }).then(function (response) {
          if (!response.ok) {
            return Promise.reject(response);
          }
          return response.text().then(function (text) {
            // allow redirects when the modal form returns an URL
            if (text.startsWith("http")) {
              return window.location = text;
            } else {
              return _this3.fetch_folderitems();
            }
          });
        })["catch"](function (error) {
          return console.error(error);
        });
      };
      request = new Request(url);
      return fetch(request).then(function (response) {
        return response.text().then(function (text) {
          el.empty();
          el.append(text);
          el.one("submit", on_submit);
          return el.modal("show");
        });
      });
    }

    /**
     * Execute an action
     *
     * @param id {string} The workflow action id
     * @param url {string} The form action URL
     * @param url {array} List of affected UIDs
     * @returns form submission
     */
  }, {
    key: "doAction",
    value: function doAction(id, url, selected_uids) {
      var _this4 = this;
      var action, action_id_input, form, form_id_input, i, item, len, ref, ref1, sorted_uids, toggle;
      // perform action on selected uids
      if (selected_uids == null) {
        selected_uids = this.state.selected_uids;
      }
      // handle local actions directly
      switch (id) {
        case "save":
          return this.saveAjaxQueue();
        case "reload":
          return this.fetch_folderitems();
        case "fetch_transitions":
          return this.fetch_transitions(selected_uids);
        case "clear_selection":
          return this.selectUID("all", false);
        case "all":
          return this.selectUID("all", true).then(function () {
            if (_this4.state.fetch_transitions_on_select) {
              return _this4.fetch_transitions();
            }
          });
        case "toggle_auto_fetch_transitions":
          toggle = !this.state.fetch_transitions_on_select;
          return this.setState({
            fetch_transitions_on_select: toggle,
            transitions: []
          });
        case "reset_columns":
          return this.toggleColumn("reset");
      }
      // load action in modal popup if id starts/ends with `modal`
      if (id.startsWith("modal") || id.endsWith("modal_transition")) {
        this.loadModal(url, selected_uids);
        return;
      }
      // N.B. Transition submit buttons are suffixed with `_transition`, because
      //      otherwise the form.submit call below retrieves the element instead of
      //      doing the method call.
      action = id.split("_transition")[0];
      // Process configured transitions sequentially via ajax
      if (this.enable_ajax_transitions && listing_coffee_indexOf.call(this.active_ajax_transitions, action) >= 0) {
        // sort UIDs according to the list
        sorted_uids = [];
        ref = this.get_folderitems();
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          if (ref1 = item.uid, listing_coffee_indexOf.call(selected_uids, ref1) >= 0) {
            sorted_uids.push(item.uid);
          }
        }
        // execute transitions
        return this.ajax_do_transition_for(sorted_uids, action);
      }
      /*
       Classic Form Submission
      */
      // get the form element
      form = document.getElementById(this.state.form_id);
      // Ensure all previous added hidden fields are removed
      document.querySelectorAll("input[name='workflow_action_id']", form).forEach(function (input) {
        return input.remove();
      });
      document.querySelectorAll("input[name='form_id']", form).forEach(function (input) {
        return input.remove();
      });
      // Make sure all checkboxes for the selected UIDs are checked
      // => this happens when a transition is triggered from the context menu directly on the row
      selected_uids.forEach(function (uid) {
        var input;
        input = document.querySelector("input[value='".concat(uid, "']"));
        return input.checked = true;
      });
      // inject hidden fields for workflow action adapters
      action_id_input = this.create_input_element("hidden", id, "workflow_action_id", action);
      form.appendChild(action_id_input);
      form_id_input = this.create_input_element("hidden", "form_id", "form_id", this.state.form_id);
      form.appendChild(form_id_input);
      // Override the form action when a custom URL is given
      if (url) {
        form.action = url;
      }
      // Submit the form
      return form.submit();
    }

    /**
     * Transition multiple UIDs batchwise
     *
     * @param form {element} The form to post
     */
  }, {
    key: "ajax_do_transition_for",
    value: function ajax_do_transition_for(uids, transition) {
      var _this5 = this;
      var promise, redirect_url, total;
      // lock the buttons
      this.setState({
        lock_buttons: true
      });
      // total number of numbers to process
      total = uids.length;
      // combined redirect URL of all transitions
      redirect_url = "";
      // always save pending items of the save_queue
      promise = this.saveAjaxQueue().then(function (data) {
        var chain;
        chain = Promise.resolve();
        uids.forEach(function (uid, index) {
          // flush previous errors
          _this5.flushErrors(uid);
          return chain = chain.then(function () {
            var api_call;
            // toggle row loading on
            _this5.toggleUIDLoading(uid, true);
            api_call = _this5.api.do_action_for({
              uids: [uid],
              transition: transition
            });
            return api_call.then(function (data) {
              var count, folderitems, label, message, transition_title;
              // handle eventual errors
              message = data.errors[uid];
              if (message) {
                // display an error for the given UID
                _this5.setErrors(uid, message);
              }
              // generate redirect url
              redirect_url = _this5.api.combine_urls(redirect_url, data.redirects[uid]);
              // folderitems of the updated objects and their dependencies
              folderitems = data.folderitems || [];
              // update the existing folderitems
              _this5.update_existing_folderitems_with(folderitems);
              // toggle row loading off
              _this5.toggleUIDLoading(uid, false);
              // update the progress bar
              count = index + 1;
              transition_title = transition.charAt(0).toUpperCase() + transition.slice(1);
              label = "".concat(window._t(transition_title), ": ").concat(count, "/").concat(total);
              return _this5.set_progress(count, total, label);
            });
          });
        });
        // all objects transitioned
        return chain.then(function () {
          // reset progress counter
          _this5.reset_progress();
          // redirect
          if (redirect_url) {
            return window.location.href = redirect_url;
          }
          // fetch transitions
          if (_this5.state.fetch_transitions_on_select) {
            _this5.fetch_transitions();
          }
          // unlock the buttons
          _this5.setState({
            lock_buttons: false
          });
          // check if the whole site needs to be reloaded, e.g. if all analyses are
          // submitted or verified etc.
          promise = _this5.api.fetch_listing_config();
          return promise.then(function (config) {
            // send after-transition event to update e.g. the transition menu or reload the whole page.
            // see: senaite.core.js for event handler
            return _this5.trigger_event("listing:after_transition_event", {
              uids: uids,
              transition: transition,
              config: config,
              folderitems: _this5.state.folderitems
            });
          });
        });
      });
      return promise;
    }

    /**
     * Trigger a named event
     *
     * @param {String} event_name: The name of the event to dispatch
     * @param {Object} event_data: The data to send with the event
     */
  }, {
    key: "trigger_event",
    value: function trigger_event(event_name, event_data, el) {
      var event;
      // Trigger a custom event
      if (el == null) {
        el = document.body;
      }
      event = new CustomEvent(event_name, {
        detail: event_data,
        bubbles: true
      });
      return el.dispatchEvent(event);
    }

    /**
     * JSON parse the given value
     *
     * @param {String} value: The JSON value to parse
     */
  }, {
    key: "parse_json",
    value: function parse_json(value, default_value) {
      try {
        return JSON.parse(value);
      } catch (error1) {
        return default_value;
      }
    }

    /**
     * Creates an input element with the attributes passed-in
     *
     * @param type {string} The type of the input element
     * @param id {string} The id of the input element
     * @param name {string} The name of the input element
     * @param value {string} The value of the input element
     * @returns {object} html input element
     */
  }, {
    key: "create_input_element",
    value: function create_input_element(type, id, name, value) {
      var input;
      input = document.createElement("input");
      input.setAttribute("type", type);
      input.setAttribute("id", id);
      input.setAttribute("name", name);
      input.setAttribute("value", value);
      return input;
    }

    /**
     * Returns the folderitems of the state
     *
     * @returns {array} copy of folderitems
     */
  }, {
    key: "get_folderitems",
    value: function get_folderitems(folderitems) {
      var folderitem, i, items, j, key, len, len1, ref, transposed;
      items = [];
      if (folderitems == null) {
        folderitems = this.state.folderitems;
      }
      for (i = 0, len = folderitems.length; i < len; i++) {
        folderitem = folderitems[i];
        // regular folderitem
        if (!folderitem.transposed_keys) {
          items = items.concat(folderitem);
          continue;
        }
        ref = folderitem.transposed_keys;
        // transposed folderitem
        for (j = 0, len1 = ref.length; j < len1; j++) {
          key = ref[j];
          transposed = folderitem[key];
          items = items.concat(transposed);
        }
      }
      return items;
    }

    /**
     * Select folder items where the filter predicate returns true
     *
     * This method also selects/deselects the categories of the toggled items
     *
     * @param items {Array} Array of folderitems
     * @param predicate {Function} Filter function for folderitems to select/deselect
     * @param toggle {bool} true for select, false for deselect
     * @returns {Promise} Resolved when the state was sucessfully set
     */
  }, {
    key: "selectItems",
    value: function selectItems(items, predicate, toggle) {
      var _this6 = this;
      var categories, expanded_categories, selected_categories, selected_uids, uids;
      if (items == null) {
        items = this.get_folderitems();
      }
      if (predicate == null) {
        predicate = function predicate(item) {
          return true;
        };
      }
      if (toggle == null) {
        toggle = true;
      }
      // the current selected UIDs
      selected_uids = new Set(this.state.selected_uids);
      // the current selected Categories
      selected_categories = new Set(this.state.selected_categories);
      // the current expanded Categories
      expanded_categories = new Set(this.state.expanded_categories);
      // filter items to select/deselect
      items = items.filter(function (item) {
        // always skip disabled/readonly items
        if (item.disabled || item.readonly) {
          return false;
        }
        return predicate(item);
      });
      // extract the UIDs
      uids = items.map(function (item, index) {
        return item.uid;
      });
      // extract the categories
      categories = new Set(items.map(function (item, index) {
        return item.category || null;
      }));
      // remove empty category
      categories["delete"](null);
      if (toggle) {
        // select the UIDs
        uids.forEach(function (uid) {
          return selected_uids.add(uid);
        });
        // select and expand the categories
        categories.forEach(function (category) {
          selected_categories.add(category);
          return expanded_categories.add(category);
        });
      } else {
        // deselect the UIDs
        uids.forEach(function (uid) {
          return selected_uids["delete"](uid);
        });
        // deselect the categories, but leave category expanded
        categories.forEach(function (category) {
          return selected_categories["delete"](category);
        });
      }
      // return a promise which is resolved when the state was successfully set
      return new Promise(function (resolve, reject) {
        return _this6.setState({
          selected_uids: Array.from(selected_uids),
          selected_categories: Array.from(selected_categories),
          expanded_categories: Array.from(expanded_categories)
        }, resolve);
      });
    }

    /**
     * Select a row checkbox by UID
     *
     * @param uid {string} The UID of the row
     * @param toggle {bool} true for select, false for deselect
     * @returns {Promise} which is resolved when the state was sucessfully set
     */
  }, {
    key: "selectUID",
    value: function selectUID(uid, toggle) {
      var items, predicate;
      if (toggle == null) {
        toggle = true;
      }
      predicate = function predicate(item) {
        return item.uid === uid;
      };
      // get the folderitems
      items = this.get_folderitems();
      // Expanded children are not part of the folder items, but are remembered
      // when fetched in the `state.children` object.
      // => Expand child items to the regular folderitems to be selectable, see:
      //    https://github.com/senaite/senaite.app.listing/pull/106
      items = items.concat.apply(items, Object.values(this.state.children));
      if (toggle === true) {
        if (uid === "all") {
          // select all
          return this.selectItems(items, null, true);
        }
        // select single item
        return this.selectItems(items, predicate, true);
      } else {
        if (uid === "all") {
          // deselect all
          return this.selectItems(items, null, false);
        }
        // deselect single item
        return this.selectItems(items, predicate, false);
      }
    }

    /**
     * Select a range of UIDs
     *
     * @param start_uid {string} The UID of first selected item
     * @param end_uid {string} The UID of the last selected item
     * @param toggle {bool} true for select, false for deselect
     * @returns {Promise} which is resolved when the state was sucessfully set
     */
  }, {
    key: "selectUIDRange",
    value: function selectUIDRange(start_uid, end_uid, toggle) {
      var categorized, category, end_idx, folderitems, i, items, len, predicate, range, ref, start_idx, uids;
      items = [];
      folderitems = this.get_folderitems();
      // sort the folderitems by their category if categorized
      if (this.state.categories.length > 0) {
        ref = this.state.categories;
        for (i = 0, len = ref.length; i < len; i++) {
          category = ref[i];
          categorized = folderitems.filter(function (item) {
            return item.category === category;
          });
          items = items.concat(categorized);
        }
      } else {
        items = folderitems;
      }
      // calculate the range of UIDs
      uids = items.map(function (item, index) {
        return item.uid;
      });
      start_idx = uids.indexOf(start_uid);
      end_idx = uids.indexOf(end_uid);
      if (end_idx > start_idx) {
        range = uids.slice(start_idx, end_idx + 1);
      } else {
        // support upwards select
        range = uids.slice(end_idx, start_idx);
      }
      predicate = function predicate(item) {
        var ref1;
        return ref1 = item.uid, listing_coffee_indexOf.call(range, ref1) >= 0;
      };
      return this.selectItems(null, predicate, toggle);
    }

    /**
     * Save the values of the state's `ajax_save_queue`
     *
     * This method executes an Ajax request to the server.
     *
     * @returns {Promise} of the Ajax Save Request
     */
  }, {
    key: "saveAjaxQueue",
    value: function saveAjaxQueue() {
      var promise, uids;
      uids = Object.keys(this.state.ajax_save_queue);
      if (uids.length === 0) {
        promise = new Promise(function (resolve, reject) {
          return resolve();
        });
        return promise;
      }
      return this.ajax_save();
    }

    /**
     * Save a named value by UID to the ajax_save_queue
     *
     * If the column has the `autosave` property set,
     * the value will be send immediately to the server
     *
     * @param uid {string} UID of the object
     * @param name {string} name of the field
     * @param value {string} value to set
     * @param item {object} additional server data
     * @returns {bool} true
     */
  }, {
    key: "saveEditableField",
    value: function saveEditableField(uid, name, value, item) {
      var ajax_save_queue, column, handler, me;
      if (listing_coffee_indexOf.call(item.allow_edit, name) < 0) {
        // Skip fields which are not editable
        return false;
      }
      console.debug("ListingController::saveEditableField: uid=".concat(uid, " name=").concat(name, " value=").concat(value));
      column = this.state.columns[name] || {};
      // store the value in the ajax_save_queue
      if (column.ajax) {
        me = this;
        ajax_save_queue = this.state.ajax_save_queue;
        if (ajax_save_queue[uid] == null) {
          ajax_save_queue[uid] = {};
        }
        ajax_save_queue[uid][name] = value;
        this.setState({
          show_ajax_save: true,
          ajax_save_queue: ajax_save_queue,
          refetch: column.refetch || false
        }, function () {
          if (column.autosave) {
            return me.ajax_save();
          }
        });
      }
      // call the on_change handler
      handler = column.on_change;
      if (handler) {
        this.ajax_on_change(handler, {
          uid: uid,
          name: name,
          value: value,
          item: item
        });
      }
      return true;
    }

    /**
     * Update a named value by UID
     *
     * Saves the value and selects the row.
     *
     * @param uid {string} UID of the object
     * @param name {string} name of the field
     * @param value {string} value to set
     * @param item {object} additional server data
     * @returns {bool} true
     */
  }, {
    key: "updateEditableField",
    value: function updateEditableField(uid, name, value, item) {
      var me;
      console.debug("ListingController::updateEditableField: uid=".concat(uid, " name=").concat(name, " value=").concat(value));
      // immediately fill the `ajax_save_queue` to show the "Save" button
      this.saveEditableField(uid, name, value, item);
      // Select the whole row if an editable field changed its value
      me = this;
      if (!this.is_uid_selected(uid)) {
        me = this;
        this.selectUID(uid, true).then(function () {
          // fetch all possible transitions
          if (me.state.fetch_transitions_on_select) {
            return me.fetch_transitions();
          }
        });
      }
      return true;
    }

    /**
     * Checks if the UID is selected.
     *
     * @param uid {string} UID of the object
     * @returns {bool} true if the UID is selected or false
     */
  }, {
    key: "is_uid_selected",
    value: function is_uid_selected(uid) {
      return listing_coffee_indexOf.call(this.state.selected_uids, uid) >= 0;
    }

    /**
     * Checks if all items are selected
     *
     * @returns {bool} true if all visible and enabled items are selected
     */
  }, {
    key: "all_items_selected",
    value: function all_items_selected() {
      var i, item, len, ref, ref1;
      ref = this.get_folderitems();
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        if (!item.disabled && (ref1 = item.uid, listing_coffee_indexOf.call(this.state.selected_uids, ref1) < 0)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Checks if the UID is selected.
     *
     * Throws an error if the ID was not found in the review_states list.
     *
     * @param id {string} ID of the review_state, e.g. "default" or "verified"
     * @returns {object} review_states item
     */
  }, {
    key: "get_review_state_by_id",
    value: function get_review_state_by_id(id) {
      var current, i, len, ref, review_state;
      current = null;
      ref = this.state.review_states;
      // review_states is the list of review_state items from the listing view
      for (i = 0, len = ref.length; i < len; i++) {
        review_state = ref[i];
        if (review_state.id === id) {
          current = review_state;
          break;
        }
      }
      if (!current) {
        console.warn("No review_state with ID '".concat(id, "' found"));
        return {
          // return the default column keys
          id: "default",
          columns: this.get_columns_keys()
        };
      }
      return current;
    }

    /**
     * Get the allowed columns of the current review state.
     *
     * This is defined in the view config by tge review_states list, e.g.:
     *
     *  review_states = [
     *      {
     *          "id": "default",
     *          "title": _t("All"),
     *          "contentFilter": {},
     *          "transitions": [],
     *          "custom_transitions": [],
     *          "columns": ["Title", "Descritpion"],
     *      }
     *  ]
     *
     * Usually the columns are defined as `self.columns.keys()`, which means that
     * they contain the same columns and order as defined in the `self.columns`
     * ordered dictionary.
     *
     * @returns {array} columns of column keys
     */
  }, {
    key: "get_allowed_column_keys",
    value: function get_allowed_column_keys() {
      var columns, keys, review_state, review_state_item;
      // get the current active state filter, e.g. "default"
      review_state = this.state.review_state;
      // get the defined review state item from the config
      review_state_item = this.get_review_state_by_id(review_state);
      keys = review_state_item.columns;
      if (!keys) {
        // return the keys of the columns object
        Object.keys(this.state.columns);
      }
      // filter out nonexisting fields
      columns = this.state.columns;
      keys = keys.filter(function (key) {
        return columns[key] !== void 0;
      });
      return keys;
    }

    /**
     * Calculate a common local storage key for this listing view.
     *
     * Note:
     * The browser view initially calculates the `listing_identifier`, which is
     * basically a concatenation of the listed items portal_type and view name.
     *
     * @returns key {string} with optional prefix and postfix
     */
  }, {
    key: "get_local_storage_key",
    value: function get_local_storage_key(prefix, postfix) {
      var key;
      key = this.listing_identifier;
      if (this.listing_identifier === void 0) {
        key = location.pathname;
      }
      if (prefix !== void 0) {
        key = prefix + key;
      }
      if (postfix !== void 0) {
        key = key + postfix;
      }
      return key;
    }

    /**
     * Set the columns definition to the local storage
     *
     * @param columns {array} Array of {"key":key, "toggle":toggle} records
     * @returns {bool} true
     */
  }, {
    key: "set_local_column_config",
    value: function set_local_column_config(columns) {
      var key, storage;
      console.debug("ListingController::set_local_column_config: columns=", columns);
      key = this.get_local_storage_key("columns-");
      storage = window.localStorage;
      storage.setItem(key, JSON.stringify(columns));
      return true;
    }

    /**
     * Returns column definitions of the local storage
     *
     * @returns columns {array} of {"key":key, "toggle":toggle} records
     */
  }, {
    key: "get_local_column_config",
    value: function get_local_column_config() {
      var columns, key, storage;
      key = this.get_local_storage_key("columns-");
      storage = window.localStorage;
      columns = storage.getItem(key);
      if (!columns) {
        return [];
      }
      try {
        return JSON.parse(columns);
      } catch (error1) {
        return [];
      }
    }

    /**
     * Calculate the number of displayed columns
     *
     * This method also counts the selection column if present.
     *
     * @returns count {int} of displayed columns
     */
  }, {
    key: "get_columns_count",
    value: function get_columns_count() {
      var count, visible_columns;
      // get the current visible columns
      visible_columns = this.get_visible_columns();
      count = visible_columns.length;
      // add 1 if the select column is rendered
      if (this.state.show_select_column) {
        count += 1;
      }
      if (this.state.allow_row_reorder) {
        count += 1;
      }
      return count;
    }

    /**
     * Get the names of all expanded categories
     *
     * @returns {array} expanded category names
     */
  }, {
    key: "get_expanded_categories",
    value: function get_expanded_categories() {
      // return all categories if the flag is on
      if (this.state.expand_all_categories) {
        return [].concat(this.state.categories);
      }
      // expand all categories for searches
      if (this.state.filter) {
        return [].concat(this.state.categories);
      }
      // return the current expanded categories
      return this.state.expanded_categories;
    }

    /**
     * Create a mapping of UID -> folderitem
     *
     * @param folderitems {array} Array of folderitem records
     * @returns {object} of {UID:folderitem}
     */
  }, {
    key: "group_by_uid",
    value: function group_by_uid(folderitems) {
      var mapping;
      if (folderitems == null) {
        folderitems = this.state.folderitems;
      }
      mapping = {};
      folderitems.map(function (item, index) {
        var uid;
        // transposed cells have no uid, but a column_key
        uid = item.uid || item.column_key || index;
        return mapping[uid] = item;
      });
      return mapping;
    }

    /**
     * Extract UIDs of folderitems
     *
     * @param folderitems {array} Array of folderitem records
     * @returns {array} Array of UIDs
     */
  }, {
    key: "get_uids_from",
    value: function get_uids_from(folderitems) {
      var uids;
      if (folderitems == null) {
        folderitems = this.state.folderitems;
      }
      uids = [];
      folderitems.map(function (item, index) {
        if (item.uid) {
          // regular folderitem
          return uids.push(item.uid);
        } else if (item.transposed_keys) {
          // transposed folderitem
          // => transposed_keys is an array of object keys
          //    to contained folderitems
          return item.transposed_keys.forEach(function (key) {
            var uid;
            uid = item[key].uid;
            if (uid) {
              return uids.push(uid);
            }
          });
        }
      });
      return uids;
    }

    /**
     * Calculate the count of current folderitems
     *
     * @returns {int} Number of folderitems
     */
  }, {
    key: "get_item_count",
    value: function get_item_count() {
      return this.state.folderitems.length;
    }

    /**
     * Set/Update progress bar
     */
  }, {
    key: "set_progress",
    value: function set_progress() {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var percent;
      percent = progress / total * 100;
      if (Number.isNaN(percent)) {
        percent = null;
      }
      return this.setState({
        progress: percent,
        progress_label: label
      });
    }

    /**
     * Reset progress bar
     */
  }, {
    key: "reset_progress",
    value: function reset_progress() {
      return this.setState({
        progress: null,
        progress_label: null
      });
    }

    /**
     * Toggles the loading animation on/off
     *
     * @param toggle {bool} true to show the loader, false otherwise
     * @returns {bool} toggle state
     */
  }, {
    key: "toggle_loader",
    value: function toggle_loader() {
      var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        loading: toggle
      });
      return toggle;
    }

    /**
     * Set the state with optional folderitems fetch
     *
     * @param data {object} data to set to the state
     * @param fetch {bool} true to re-fetch the folderitems, false otherwise
     * @returns {bool} true
     */
  }, {
    key: "set_state",
    value: function set_state(data) {
      var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var me;
      me = this;
      this.setState(data, function () {
        if (fetch) {
          return me.fetch_folderitems();
        }
      });
      return true;
    }

    /**
     * Fetch the possible transitions of the selected UIDs
     *
     * @returns {Promise} for the API fetch transitions call
     */
  }, {
    key: "fetch_transitions",
    value: function fetch_transitions(selected_uids) {
      var loader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var me, options, promise;
      if (selected_uids == null) {
        selected_uids = this.state.selected_uids;
      }
      // empty the possible transitions if no UID is selected
      if (selected_uids.length === 0) {
        this.setState({
          transitions: []
        });
        return;
      }
      // turn loader on
      if (loader) {
        this.toggle_loader(true);
      }
      // get the request options
      options = this.getRequestOptions();
      options.selected_uids = selected_uids;
      // update the location hash
      this.update_location_hash(options);
      // fetch the transitions from the server
      promise = this.api.fetch_transitions(options);
      me = this;
      promise.then(function (data) {
        // data looks like this: {"transitions": [...]}
        return me.setState(data, function () {
          console.debug("ListingController::fetch_transitions: NEW STATE=", me.state);
          // turn loader off
          if (loader) {
            return me.toggle_loader(false);
          }
        });
      });
      return promise;
    }

    /*
     * Fetch folderitems from the server
     *
     * @returns {Promise} for the API fetch folderitems call
     */
  }, {
    key: "fetch_folderitems",
    value: function fetch_folderitems() {
      var keep_selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var me, options, promise;
      // turn loader on
      this.toggle_loader(true);
      // get the request options
      options = this.getRequestOptions();
      // update the location hash
      this.update_location_hash(options);
      // fetch the folderitems from the server
      promise = this.api.fetch_folderitems(options);
      me = this;
      promise.then(function (data) {
        var category, existing_folderitems, folderitem, i, j, len, len1, new_categories, new_folderitems, ref, selected_uids, server_selected_uids, uid;
        console.debug("ListingController::fetch_folderitems: GOT RESPONSE=", data);
        // N.B. Always keep selected folderitems, because otherwise modified fields
        //      won't get send to the server on form submit.

        // This is needed e.g. in "Manage Analyses" when the users searches for
        // analyses to add. Keeping only the UID is there not sufficient, because
        //      we would loose the Min/Max values.

        // TODO refactor this logic
        // -------------------------------8<--------------------------------------
        // existing folderitems from the state as a UID -> folderitem mapping
        existing_folderitems = me.group_by_uid(me.state.folderitems);
        // new folderitems from the server as a UID -> folderitem mapping
        new_folderitems = me.group_by_uid(data.folderitems);
        // new categories from the server
        new_categories = data.categories || [];
        // list of server side selected UIDs
        server_selected_uids = data.selected_uids || [];
        // list of current selected UIDs
        selected_uids = new Set(me.state.selected_uids);
        ref = me.state.selected_uids;
        // keep selected and potentially modified folderitems in the table
        for (i = 0, len = ref.length; i < len; i++) {
          uid = ref[i];
          // inject missing folderitems into the server sent folderitems
          if (!(uid in new_folderitems)) {
            if (!keep_selected) {
              // remove UID from selected_uids
              selected_uids["delete"](uid);
              continue;
            }
            // get the missing folderitem from the current state
            folderitem = existing_folderitems[uid];
            if (!folderitem) {
              // skip if the selected UID is not in the existing folderitems
              // -> happens for transposed WS folderitems, e.g.: {0: {uid: ...}, 1: {uid: ...}}
              continue;
            }
            // inject it to the new folderitems list from the server
            new_folderitems[uid] = existing_folderitems[uid];
            // also append the category if it is missing
            category = folderitem.category;
            if (category && listing_coffee_indexOf.call(new_categories, category) < 0) {
              new_categories.push(category);
              // XXX unfortunately any sortKey sorting of the category get lost here
              new_categories.sort();
            }
          }
        }
        // append selected UIDs set from the server
        for (j = 0, len1 = server_selected_uids.length; j < len1; j++) {
          uid = server_selected_uids[j];
          selected_uids.add(uid);
        }
        // convert to array_
        selected_uids = Array.from(selected_uids);
        // write back new categories
        data.categories = new_categories;
        // write back new folderitems
        data.folderitems = Object.values(new_folderitems);
        // -------------------------------->8-------------------------------------
        return me.setState(data, function () {
          // calculate the new expanded categories and the internal folderitems mapping
          me.setState({
            expanded_categories: me.get_expanded_categories(),
            selected_uids: selected_uids
          }, function () {
            return console.debug("ListingController::fetch_folderitems: NEW STATE=", me.state);
          });
          // turn loader off
          return me.toggle_loader(false);
        });
      });
      return promise;
    }

    /*
     * Fetch child-folderitems from the server
     *
     * @param {parent_uid} UID of the parent, e.g. the primary partition
     * @param {child_uids} UIDs of the children (partitions) to load
     * @returns {Promise} for the API fetch folderitems call
     */
  }, {
    key: "fetch_children",
    value: function fetch_children() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        parent_uid = _ref.parent_uid,
        child_uids = _ref.child_uids;
      var by_uid, folderitem, me, promise;
      // turn loader on
      this.toggle_loader(true);
      // lookup child_uids from the folderitem
      if (!child_uids) {
        by_uid = this.group_by_uid();
        child_uids = [];
        if (parent_uid in by_uid) {
          folderitem = by_uid[parent_uid];
          child_uids = folderitem.children || [];
        }
      }
      // fetch the children from the server
      promise = this.api.fetch_children({
        parent_uid: parent_uid,
        child_uids: child_uids
      });
      me = this;
      promise.then(function (data) {
        console.debug("ListingController::fetch_children: GOT RESPONSE=", data);
        // turn loader off
        return me.toggle_loader(false);
      });
      return promise;
    }

    /*
     * Checks if the top toolbar should be loaded or not.
     *
     * @returns {bool} true to render the top toolbar, false otherwise
     */
  }, {
    key: "render_toolbar_top",
    value: function render_toolbar_top() {
      if (this.state.show_more) {
        return true;
      }
      if (this.state.show_search) {
        return true;
      }
      if (this.state.review_states.length > 1) {
        return true;
      }
      return false;
    }

    /*
     * Send the `ajax_save_queue` to the server
     *
     * @returns {Promise} of the API set_fields call
     */
  }, {
    key: "ajax_save",
    value: function ajax_save() {
      var _this7 = this;
      var chain, i, item, len, payload, ref, sorted_save_queue, uid;
      console.debug("ListingController::ajax_save:ajax_save_queue=", this.state.ajax_save_queue);
      // Sort items by the order they are currently listed
      sorted_save_queue = [];
      ref = this.get_folderitems();
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        if (item.uid in this.state.ajax_save_queue) {
          uid = item.uid;
          payload = this.state.ajax_save_queue[uid];
          sorted_save_queue.push({
            uid: uid,
            payload: payload
          });
        }
      }
      // Process ajax_save_queue sequetially
      chain = Promise.resolve();
      sorted_save_queue.forEach(function (item) {
        return chain = chain.then(function () {
          var api_call;
          uid = item.uid;
          // toggle row loading on
          _this7.toggleUIDLoading(uid, true);
          // save single uid
          api_call = _this7.api.set_fields({
            save_queue: listing_coffee_defineProperty({}, "".concat(uid), item.payload)
          });
          return api_call.then(function (data) {
            var folderitems, uids;
            console.debug("ListingController::ajax_save: GOT DATA=", data);
            uids = data.uids || [];
            // ensure that all updated UIDs are also selected
            uids.map(function (uid, index) {
              return _this7.selectUID(uid, true);
            });
            // folderitems of the updated objects and their dependencies
            folderitems = data.folderitems || [];
            // update the existing folderitems
            _this7.update_existing_folderitems_with(folderitems);
            // toggle row loading off
            return _this7.toggleUIDLoading(uid, false);
          });
        });
      });
      // all objects saved
      chain.then(function () {
        // refetch or update folderitems
        if (_this7.state.refetch) {
          // refetch all folderitems
          _this7.fetch_folderitems();
        } else {
          // fetch all possible transitions
          if (_this7.state.fetch_transitions_on_select) {
            _this7.fetch_transitions();
          }
        }
        // empty the ajax save queue and hide the save button
        return _this7.setState({
          show_ajax_save: false,
          ajax_save_queue: {},
          refetch: false
        });
      });
      return chain;
    }
  }, {
    key: "ajax_on_change",
    value: function ajax_on_change(handler, data) {
      var me, promise;
      console.debug("ListingController::ajax_on_change:handler=".concat(handler, ", data="), data);
      // turn loader on
      this.toggle_loader(true);
      promise = this.api.on_change({
        handler: handler,
        data: data
      });
      me = this;
      promise.then(function (data) {
        var folderitems;
        console.debug("ListingController::ajax_on_change: GOT DATA=", data);
        // folderitems of the updated objects and their dependencies
        folderitems = data.folderitems || [];
        // update the existing folderitems
        me.update_existing_folderitems_with(folderitems);
        // toggle loader off
        return me.toggle_loader(false);
      });
      return promise;
    }

    /**
     * Update existing folderitems
     *
     * This is done for performance increase to avoid a complete re-rendering
     *
     * @param folderitems {array} Array of folderitems records from the view
     */
  }, {
    key: "update_existing_folderitems_with",
    value: function update_existing_folderitems_with(folderitems) {
      var categories, category, existing_folderitems, folderitem, item, key, new_folderitems, new_item, old_item, uid, updated_folderitems, value;
      console.log("ListingController::update_existing_folderitems_with: ", folderitems);
      // These folderitems get set to the state
      new_folderitems = [];
      // The updated items from the server
      updated_folderitems = this.group_by_uid(folderitems);
      // The current folderitems in our @state
      existing_folderitems = this.group_by_uid(this.state.folderitems);
      // Update categories if needed
      categories = this.state.categories;
      // We iterate through the existing folderitems and check if the items was updated.
      for (uid in existing_folderitems) {
        folderitem = existing_folderitems[uid];
        // shallow copy of the existing folderitem in @state.folderitems
        old_item = Object.assign({}, folderitem);
        if (!(uid in updated_folderitems)) {
          // nothing changed -> keep the old folderitem
          new_folderitems.push(old_item);
        } else {
          // shallow copy of the updated folderitem from the server
          new_item = Object.assign({}, updated_folderitems[uid]);
          // keep non-updated properties
          for (key in old_item) {
            value = old_item[key];
            // XXX Workaround for Worksheet classic/transposed views
            // -> Always keep those values from the original folderitem
            if (key === "rowspan" || key === "colspan" || key === "skip" || key === "transposed_keys") {
              new_item[key] = old_item[key];
            }
            if (!new_item.hasOwnProperty(key)) {
              new_item[key] = old_item[key];
            }
          }
          // add the new folderitem
          new_folderitems.push(new_item);
        }
      }
      // Add updated items that were not yet in existing
      for (uid in updated_folderitems) {
        folderitem = updated_folderitems[uid];
        category = folderitem.category;
        if (category && listing_coffee_indexOf.call(categories, category) < 0) {
          categories.push(category);
          // XXX unfortunately any sortKey sorting of the category get lost here
          categories.sort();
        }
        if (uid in existing_folderitems) {
          // this item already exists, do nothing
          continue;
        }
        // shallow copy
        item = Object.assign({}, folderitem);
        // add the new folderitem
        new_folderitems.push(item);
      }
      // updated the state with the new folderitems
      return this.setState({
        folderitems: new_folderitems,
        categories: categories
      });
    }

    /**
     * Update the location hash with the given object
     *
     */
  }, {
    key: "update_location_hash",
    value: function update_location_hash(options) {
      var allowed, hash, key, name, params, value;
      if (options == null) {
        options = {};
      }
      params = [];
      allowed = ["filter", "pagesize", "review_state", "sort_on", "sort_order"];
      for (key in options) {
        value = options[key];
        if (allowed.indexOf(key) === -1) {
          continue;
        }
        name = this.api.to_form_name(key);
        params = params.concat("".concat(name, "=").concat(value));
      }
      hash = params.join("&");
      return location.hash = "#?".concat(hash);
    }

    /**
     * EVENT HANDLERS
     *
     * N.B. All `event` objects are ReactJS events
     *      https://reactjs.org/docs/handling-events.html
     */
  }, {
    key: "on_column_config_click",
    value: function on_column_config_click(event) {
      var toggle;
      event.preventDefault();
      if (!this.state.show_column_toggles) {
        return;
      }
      toggle = !this.state.show_column_config;
      return this.setState({
        show_column_config: toggle
      });
    }
  }, {
    key: "on_select_checkbox_checked",
    value: function on_select_checkbox_checked(event) {
      var checked, el, me, start_uid, toggle, uid;
      console.debug("°°° ListingController::on_select_checkbox_checked");
      me = this;
      el = event.currentTarget;
      uid = el.value;
      checked = el.checked;
      // support multi-select over the shift-key
      if (event.nativeEvent.shiftKey && this.last_select) {
        start_uid = this.last_select.uid;
        toggle = this.last_select.checked;
        return this.selectUIDRange(start_uid, uid, toggle);
      }
      // remember the last selected UID
      this.last_select = {
        uid: uid,
        checked: checked
      };
      return this.selectUID(uid, checked).then(function () {
        if (me.state.fetch_transitions_on_select) {
          // fetch all possible transitions
          return me.fetch_transitions();
        }
      });
    }
  }, {
    key: "on_multi_select_checkbox_checked",
    value: function on_multi_select_checkbox_checked(event) {
      var el, items, me, uids, value;
      console.debug("°°° ListingController::on_multi_select_checkbox_checked");
      me = this;
      el = event.currentTarget;
      value = el.value;
      uids = value.split(",");
      items = this.get_folderitems().filter(function (item) {
        return uids.indexOf(item.uid) > -1;
      });
      return this.selectItems(items, null, el.checked).then(function () {
        if (me.state.fetch_transitions_on_select) {
          // fetch all possible transitions
          return me.fetch_transitions();
        }
      });
    }
  }, {
    key: "on_category_click",
    value: function on_category_click(event) {
      var category, el, me;
      console.debug("°°° ListingController::on_category_click");
      me = this;
      el = event.currentTarget;
      category = el.getAttribute("category");
      return this.toggleCategory(category);
    }
  }, {
    key: "on_category_select",
    value: function on_category_select(event) {
      var category, el, me, predicate, selected;
      console.debug("°°° ListingController::on_category_select");
      me = this;
      el = event.currentTarget;
      // get the category of the target element
      category = el.getAttribute("category");
      // create predicate function that matches the given category
      predicate = function predicate(item) {
        return item.category === category;
      };
      // select/deselect category
      selected = this.selectCategory(category);
      // select/deselect all items of this category
      return this.selectItems(null, predicate, selected).then(function () {
        if (me.state.fetch_transitions_on_select) {
          // fetch all possible transitions
          return me.fetch_transitions();
        }
      });
    }
  }, {
    key: "on_api_error",
    value: function on_api_error(response) {
      var _this8 = this;
      var level, message, title;
      this.toggle_loader(false);
      console.debug("°°° ListingController::on_api_error: GOT AN ERROR RESPONSE: ", response);
      title = _t("Oops, an error occurred! 🙈");
      if (response instanceof Error) {
        message = response.message;
        this.addMessage(title, message, null, level = "danger");
      } else if (response.text) {
        response.text().then(function (data) {
          message = _t("The server responded with the status ".concat(response.status, ": ").concat(response.statusText));
          return _this8.addMessage(title, message, null, level = "danger");
        });
      } else {
        message = _t("An unkown error occurred: " + response);
        this.addMessage(title, message, null, level = "danger");
      }
      return response;
    }
  }, {
    key: "on_reload",
    value: function on_reload(event) {
      console.debug("°°° ListingController::on_reload:event=", event);
      return this.fetch_folderitems();
    }
  }, {
    key: "on_popstate",
    value: function on_popstate(event) {
      var idx, key, name, param, params, reload, value;
      console.debug("°°° ListingController::on_popstate:event=", event);
      params = this.api.parse_hash(location.hash);
      for (idx in params) {
        param = params[idx];
        // skip parameters that does not belong to our listing
        var _param$split = param.split("=");
        var _param$split2 = listing_coffee_slicedToArray(_param$split, 2);
        key = _param$split2[0];
        value = _param$split2[1];
        if (!key.startsWith(this.form_id)) {
          continue;
        }
        name = key.replace("".concat(this.form_id, "_"), "");
        if (!(name in this.state)) {
          continue;
        }
        // workaround for string/number comparison
        if (name === "pagesize") {
          value = parseInt(value);
        }
        if (name === "filter") {
          value = decodeURI(value);
        }
        if (value !== this.state[name]) {
          this.state[name] = value;
          reload = true;
        }
      }
      if (reload) {
        console.debug("+++ RELOAD after popstate +++");
        return this.fetch_folderitems();
      }
    }
  }, {
    key: "on_row_order_change",
    value: function on_row_order_change() {
      var event;
      console.debug("°°° ListingController::on_form_order_change");
      event = new CustomEvent("listing:row_order_change", {
        detail: {
          folderitems: this.state.folderitems
        },
        bubbles: true,
        cancelable: true,
        composed: false
      });
      // dispatch the event on table root element
      return this.root_el.dispatchEvent(event);
    }

    /**
     * Renders the listing table
     * @returns {JSX}
     */
  }, {
    key: "render",
    value: function render() {
      var columns, columns_count, columns_order, item_count, render_toolbar_top, visible_columns;
      console.debug("*** RENDER ***");
      // computed properties at render time
      columns = this.get_columns();
      columns_order = this.get_columns_order();
      columns_count = this.get_columns_count();
      visible_columns = this.get_visible_columns();
      item_count = this.get_item_count();
      render_toolbar_top = this.render_toolbar_top();
      return /*#__PURE__*/external_React_default().createElement(DndProvider, {
        backend: HTML5Backend
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "listing-container"
      }, /*#__PURE__*/external_React_default().createElement(Modal_coffee, {
        className: "modal fade",
        id: "modal_".concat(this.form_id)
      }), /*#__PURE__*/external_React_default().createElement(Messages_coffee, {
        on_dismiss_message: this.dismissMessage,
        id: "messages",
        className: "messages",
        messages: this.state.messages
      }), this.state.loading && /*#__PURE__*/external_React_default().createElement("div", {
        id: "table-overlay"
      }), !render_toolbar_top && this.state.loading && /*#__PURE__*/external_React_default().createElement(Loader_coffee, {
        loading: this.state.loading
      }), render_toolbar_top && /*#__PURE__*/external_React_default().createElement("div", {
        className: "row top-toolbar"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-8"
      }, /*#__PURE__*/external_React_default().createElement(FilterBar_coffee, {
        className: "filterbar nav nav-pills",
        on_filter_button_clicked: this.filterByState,
        review_state: this.state.review_state,
        review_states: this.state.review_states
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-1 text-right"
      }, /*#__PURE__*/external_React_default().createElement(Loader_coffee, {
        loading: this.state.loading
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-3 text-right"
      }, /*#__PURE__*/external_React_default().createElement(SearchBox_coffee, {
        show_search: this.state.show_search,
        on_search: this.filterBySearchterm,
        filter: this.state.filter,
        placeholder: _t("Search")
      }))), this.state.progress && /*#__PURE__*/external_React_default().createElement("div", {
        className: "progress my-2"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "progress-bar progress-bar-striped progress-bar-animated",
        style: {
          width: "".concat(this.state.progress, "%")
        }
      }, this.state.progress_label || this.state.progress + "%")), /*#__PURE__*/external_React_default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-12 table-responsive"
      }, this.state.show_column_toggles && /*#__PURE__*/external_React_default().createElement("a", {
        href: "#",
        onClick: this.on_column_config_click,
        className: "pull-right"
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-ellipsis-h"
      })), this.state.show_column_config && /*#__PURE__*/external_React_default().createElement(TableColumnConfig_coffee, {
        title: _t("Configure Table Columns"),
        description: _t("Click to toggle the visibility or drag&drop to change the order"),
        columns: columns,
        columns_order: columns_order,
        on_column_toggle_click: this.toggleColumn,
        on_columns_order_change: this.setColumnsOrder
      }), /*#__PURE__*/external_React_default().createElement(components_ContextMenu, {
        id: this.row_context_menu_id,
        menu: this.state.row_context_menu,
        on_menu_item_click: this.handleRowMenuAction
      }), /*#__PURE__*/external_React_default().createElement(Table_coffee, {
        className: "contentstable table table-hover small",
        allow_edit: this.state.allow_edit,
        on_header_column_click: this.sortBy,
        on_select_checkbox_checked: this.on_select_checkbox_checked,
        on_multi_select_checkbox_checked: this.on_multi_select_checkbox_checked,
        on_context_menu: this.on_column_config_click,
        sort_on: this.state.sort_on,
        sort_order: this.state.sort_order,
        catalog_indexes: this.state.catalog_indexes,
        catalog_columns: this.state.catalog_columns,
        sortable_columns: this.state.sortable_columns,
        columns: columns,
        columns_count: columns_count,
        review_state: this.state.review_state,
        visible_columns: visible_columns,
        review_states: this.state.review_states,
        folderitems: this.state.folderitems,
        children: this.state.children,
        selected_uids: this.state.selected_uids,
        loading_uids: this.state.loading_uids,
        errors: this.state.errors,
        select_checkbox_name: this.state.select_checkbox_name,
        show_select_column: this.state.show_select_column,
        show_select_all_checkbox: this.state.show_select_all_checkbox,
        all_items_selected: this.all_items_selected(),
        categories: this.state.categories,
        expanded_categories: this.state.expanded_categories,
        selected_categories: this.state.selected_categories,
        expanded_rows: this.state.expanded_rows,
        expanded_remarks: this.state.expanded_remarks,
        show_categories: this.state.show_categories,
        on_category_click: this.on_category_click,
        on_category_select: this.on_category_select,
        on_row_expand_click: this.toggleRow,
        on_remarks_expand_click: this.toggleRemarks,
        on_row_context_menu: this.showRowMenu,
        filter: this.state.filter,
        update_editable_field: this.updateEditableField,
        save_editable_field: this.saveEditableField,
        move_row: this.moveRow,
        allow_row_reorder: this.state.allow_row_reorder,
        on_row_order_change: this.on_row_order_change
      }))), this.state.show_table_footer && /*#__PURE__*/external_React_default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-8"
      }, /*#__PURE__*/external_React_default().createElement(ButtonBar_coffee, {
        className: "buttonbar nav nav-pills",
        show_ajax_save: this.state.show_ajax_save,
        ajax_save_button_title: _t("Save"),
        on_transition_button_click: this.doAction,
        on_ajax_save_button_click: this.saveAjaxQueue,
        selected_uids: this.state.selected_uids,
        show_select_column: this.state.show_select_column,
        transitions: this.state.transitions,
        review_state: this.get_review_state_by_id(this.state.review_state),
        lock_buttons: this.state.lock_buttons
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-1 text-right"
      }, /*#__PURE__*/external_React_default().createElement(Loader_coffee, {
        loading: this.state.loading
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-3 text-right"
      }, /*#__PURE__*/external_React_default().createElement(Pagination_coffee, {
        id: "pagination",
        className: "pagination-controls",
        total: this.state.total,
        show_more_button_title: _t("Show more"),
        onShowMore: this.showMore,
        show_more: this.state.show_more,
        count: item_count,
        pagesize: this.state.pagesize,
        export_button_title: _t("Export"),
        show_export: this.state.show_export,
        onExport: this["export"]
      })))));
    }
  }]);
}((external_React_default()).Component);
/******/ })()
;