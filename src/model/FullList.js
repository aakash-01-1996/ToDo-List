"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListItem_1 = require("./ListItem");
var FullList = /** @class */ (function () {
    function FullList(_list) {
        if (_list === void 0) { _list = []; }
        this._list = _list;
    }
    Object.defineProperty(FullList.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    FullList.prototype.load = function () {
        var storedList = localStorage.getItem("myList");
        if (typeof storedList !== "string")
            return;
        var parsedList = JSON.parse(storedList);
        parsedList.forEach(function (itemObj) {
            var newListItem = new ListItem_1.default(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        });
    };
    FullList.prototype.save = function () {
        localStorage.setItem("myList", JSON.stringify(this._list));
    };
    FullList.prototype.clearList = function () {
        this._list = [];
        this.save();
    };
    FullList.prototype.addItem = function (itemObj) {
        this._list.push(itemObj);
        this.save();
    };
    FullList.prototype.removeItem = function (id) {
        this._list = this._list.filter(function (item) { return item.id !== id; });
        this.save();
    };
    FullList.instance = new FullList();
    return FullList;
}());
exports.default = FullList;
