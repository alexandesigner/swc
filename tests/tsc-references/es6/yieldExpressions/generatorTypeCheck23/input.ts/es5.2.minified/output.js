import regeneratorRuntime from "regenerator-runtime";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var _marked = regeneratorRuntime.mark(function() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return;
            case 2:
                return _ctx.next = 4, new Foo1;
            case 4:
                return _ctx.next = 6, new Bar;
            case 6:
                return _ctx.next = 8, new Baz;
            case 8:
                return _ctx.delegateYield([
                    new Bar
                ], "t0", 9);
            case 9:
                return _ctx.delegateYield([
                    new Baz
                ], "t1", 10);
            case 10:
            case "end":
                return _ctx.stop();
        }
    }, _marked);
}), Foo1 = function() {
    "use strict";
    _classCallCheck(this, Foo1);
}, Bar = function(Foo) {
    "use strict";
    function Bar() {
        var self, call, obj;
        return _classCallCheck(this, Bar), self = this, call = _getPrototypeOf(Bar).apply(this, arguments), call && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self);
    }
    return !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(Bar, Foo), Bar;
}(Foo1), Baz = function() {
    "use strict";
    _classCallCheck(this, Baz);
};
