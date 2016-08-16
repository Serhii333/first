$(document).ready(function () {
    var slider = new Slider($('.content-Slider'))
})


function Slider($element, options) {
    options = options || {};
    this.$element = $element;
    this.index = 0;
    var defaultOptions = {
        slideSelector: '.slide',
        active: 'active',
        prev: '.prev',
        next: '.next',
        wrapper: '.wr',
        activeLeft: 'active-left',
        activeRight: 'active-right',
        hiddenLeft: 'hidden-left',
        hiddenRight: 'hidden-right'

    };
    this.NEXT = 'NEXT'
    this.options = $.extend(defaultOptions, options);
    this.init();


}

Slider.prototype = {
    init: function () {
        this.setVariables();
        this.bindEvents();
        this.go(0);
        this.autoPlay();
    },
    setVariables: function () {
        this.slide = this.$element.find(this.options.slideSelector)
    },
    bindEvents: function () {
        var _self = this;
        $(this.options.prev).on('click', function () {
            this.prev();
        }.bind(this));
        $(this.options.next).on('click', function () {
            this.next();
            //this.switch(this.NEXT);
        }.bind(this));
        $('#autoPlay').on('change', function () {
            if ($(this).is(":checked")) {
                _self.clearAutoPlay();
            } else {
                _self.autoPlay()
            }
        })

    },
    applyClasses: function (obj) {

        for (var key in obj) {
            this.slide.removeClass(this.options[key])
        }
        for (var key in obj) {
            this.slide.eq(obj[key]).addClass(this.options[key])
        }
    },
    autoPlay: function () {

         var _self = this;
         this.timer = setInterval(function () {
            _self.next();
        }, 1000);
    },
    clearAutoPlay: function () {
        var _self = this;

        clearInterval(this.timer);
        this.timer = null;
    },
    swithSlide: function () {
        //this.slide.removeClass(this.options.activeClass).filter('[data-id' + id +']').addClass(this.options.activeClass);
        var position = {
            hiddenLeft: null,
            activeLeft: null,
            active: null,
            activeRight: null,
            hiddenRight: null
        };

        switch (this.index) {
            case 0:
                position = {
                    hiddenLeft: this.slide.length - 2,
                    activeLeft: this.slide.length - 1,
                    active: this.index,
                    activeRight: this.index + 1,
                    hiddenRight: this.index + 2
                };
                break;
            case 1:
                position = {
                    hiddenLeft: this.slide.length - 1,
                    activeLeft: this.index - 1,
                    active: this.index,
                    activeRight: this.index + 1,
                    hiddenRight: this.index + 2
                };
                break;
            case this.slide.length - 1:
                position = {
                    hiddenLeft: this.slide.length - 3,
                    activeLeft: this.slide.length - 2,
                    active: this.index,
                    activeRight: 0,
                    hiddenRight: 1
                };

                break;
            case this.slide.length - 2:
                position = {
                    hiddenLeft: this.index - 2,
                    activeLeft: this.index - 1,
                    active: this.index,
                    activeRight: this.index + 1,
                    hiddenRight: 0
                };

                break;

            default:
                position = {
                    hiddenLeft: this.index - 2,
                    activeLeft: this.index - 1,
                    active: this.index,
                    activeRight: this.index + 1,
                    hiddenRight: this.index + 2
                };
        }
        //console.log(position);
        this.applyClasses(position);
        // if(this.index == 0){
        // if(this.index == 0){
        //   $.each(this.slide, function(i, item){
        //     if(i == this.index || i == 1 || this.slide.length-1){
        //       $(item).addClass(this.options.activeClass);
        //     }
        //   })
        //    this.slide.eq(this.index).addClass(this.options.activeClass);
        //    this.slide.eq(1).addClass(this.options.activeClass);
        //    this.slide.eq(this.slide.length-1).addClass(this.options.activeClass);
        // }else if (this.index == this.slide.length-1){
        //   this.slide.eq(this.index).addClass(this.options.activeClass);
        //   this.slide.eq(0).addClass(this.options.activeClass);
        //   this.slide.eq(this.index - 1).addClass(this.options.activeClass);
        // }else {
        //   this.slide.eq(this.index).addClass(this.options.activeClass);
        //   this.slide.eq(this.index - 1).addClass(this.options.activeClass);
        //   this.slide.eq(this.index + 1).addClass(this.options.activeClass);
        // }
        //this.slide.removeClass(this.options.activeClass).eq(this.index).addClass(this.options.activeClass);
    },
    go: function (index) {
        this.index = index > this.slide.length - 1 ? this.slide.length - 1 : index;
        // if(index > this.arr.length - 1){
        //     resultIndex = this.arr.length - 1;
        //     //elem = this.arr.slice(arr.length-1, arr.length);
        // }else{
        //     resultIndex = index;
        //   //  elem = this.arr.slice(index, 1);
        //
        // }
        //this.index = resultIndex;
        this.swithSlide();
    },
    prev: function () {
        this.index = this.index == 0 ? this.slide.length - 1 : this.index - 1;

        // if(this.index == 0){
        //   this.index = this.arr.length - 1;
        // }else{
        //   this.index--;
        // }
        this.swithSlide();
    },
    next: function () {
        this.index = this.index == this.slide.length - 1 ? 0 : this.index + 1;
        // if(this.index == this.arr.length - 1){
        //   this.index = 0;
        // }else{
        //   this.index++;
        // }
        this.swithSlide();
    },

}
