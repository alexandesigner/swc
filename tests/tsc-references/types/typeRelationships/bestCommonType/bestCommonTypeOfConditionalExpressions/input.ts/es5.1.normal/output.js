function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
// conditional expressions return the best common type of the branches plus contextual type (using the first candidate if multiple BCTs exist)
// no errors expected here
var a;
var b;
var Base = function Base() {
    "use strict";
    _classCallCheck(this, Base);
};
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    function Derived() {
        _classCallCheck(this, Derived);
        return _possibleConstructorReturn(this, _getPrototypeOf(Derived).apply(this, arguments));
    }
    return Derived;
}(Base);
var Derived2 = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived2, Base);
    function Derived2() {
        _classCallCheck(this, Derived2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Derived2).apply(this, arguments));
    }
    return Derived2;
}(Base);
var base;
var derived;
var derived2;
var r = true ? 1 : 2;
var r3 = true ? 1 : {
};
var r4 = true ? a : b; // typeof a
var r5 = true ? b : a; // typeof b
var r6 = true ? function(x) {
} : function(x) {
}; // returns number => void
var r7 = true ? function(x) {
} : function(x) {
};
var r8 = true ? function(x) {
} : function(x) {
}; // returns Object => void
var r10 = true ? derived : derived2; // no error since we use the contextual type in BCT
var r11 = true ? base : derived2;
function foo5(t, u) {
    return true ? t : u; // BCT is Object
}
