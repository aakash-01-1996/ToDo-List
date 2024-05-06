"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListTemplate = /** @class */ (function () {
    function ListTemplate() {
        this.ul = document.getElementById("listItems");
    }
    ListTemplate.prototype.clear = function () {
        this.ul.innerHTML = " ";
    };
    ListTemplate.prototype.render = function (fullList) {
        var _this = this;
        this.clear();
        fullList.list.forEach(function (item) {
            var li = document.createElement("li");
            li.className = "item";
            var check = document.createElement("input");
            check.type = "checkbox";
            check.id = item.id;
            check.checked = item.checked;
            li.append(check);
            check.addEventListener('change', function () {
                item.checked = !item.checked;
                fullList.save();
            });
            var label = document.createElement("label");
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label);
            var button = document.createElement("button");
            button.className = 'button';
            button.textContent = 'X';
            li.append(button);
            button.addEventListener('click', function () {
                fullList.removeItem(item.id);
                _this.render(fullList);
            });
            _this.ul.append(li);
        });
    };
    ListTemplate.instance = new ListTemplate();
    return ListTemplate;
}());
exports.default = ListTemplate;
