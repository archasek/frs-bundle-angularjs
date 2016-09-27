angular
    .module('app.main')
    .factory('scrollFactory', scrollFactory);

function scrollFactory () {
    return {
        malihuScroll: function (selector, theme, mousewheelaxis) {
            $(selector).mCustomScrollbar({
                theme: theme,
                scrollInertia: 100,
                axis: 'yx',
                mouseWheel: {
                    enable: true,
                    axis: mousewheelaxis,
                    preventDefault: true
                }
            });
        }
    }
}
