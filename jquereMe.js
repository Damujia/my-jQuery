;
(function () {
    function jQuery(element) {
        return new Init(element);
    };

    function Init(element) {
        let dom = document.querySelectorAll(element);
        for (var i = 0; i < dom.length; i++) {
            this[i] = dom[i]; //使new Init(element)成为一个伪数组。
        };
        this.length = dom.length;
    };
    Init.prototype.css = function (name, value) {
        if (value == undefined) {
            return window.getComputedStyle(this[0])[name];
        } else {
            for (let i = 0; i < this.length; i++) {
                this[i].style[name] = value;
            };
        }
    };

    //添加类名
    Init.prototype.addClass = function (className) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.add(className);
        }
    };
    //删除类名
    Init.prototype.removeClass = function (className) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.remove(className);
        }
    };
    window.$ = window.jQuery = jQuery;
}());