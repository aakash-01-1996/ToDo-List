"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListItem = /** @class */ (function () {
    function ListItem(_id, _item, _checked) {
        if (_id === void 0) { _id = " "; }
        if (_item === void 0) { _item = " "; }
        if (_checked === void 0) { _checked = false; }
        this._id = _id;
        this._item = _item;
        this._checked = _checked;
    }
    Object.defineProperty(ListItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (item) {
            this._item = item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            this.checked = checked;
        },
        enumerable: false,
        configurable: true
    });
    return ListItem;
}());
exports.default = ListItem;
