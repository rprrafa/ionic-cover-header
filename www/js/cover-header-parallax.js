(function() {

  /*** directive function ***/
  var directive = function ($ionicGesture, $ionicSlideBoxDelegate, $ionicScrollDelegate, $ionicHistory, $window) {
    return {
        restrict: 'AE',
        scope: {
            headerMin : '@',
            headerMax : '@',
            bgColor : '='
        },
        replace: false,
        template:   function(e) {
                    return '<ion-nav-bar class="bar" style="z-index: 1001;" align-title="left">'+
                    '<ion-nav-buttons side="left">'+
                      '<a style="height: {{minH}}px; line-height: {{minH}}px" ng-click="goBack()"><button class="button button-icon ion-arrow-left-c light" style="height:80%"></button></a>'+
                    '</ion-nav-buttons>'+
                    '<ion-nav-title class="light" style="line-height: {{minH}}px">Some Title</ion-nav-title>' +
                    '<ion-nav-buttons side="right">'+
                      '<a class="button button-clear">&nbsp;</a>'+
                    '</ion-nav-buttons>'+
                    '</ion-nav-bar>'+
                    '<div style="position: absolute; top:0; width: 100%; z-index: 1000; overflow: hidden; height: {{headerMax}}px">'+e.html()+'</div>'
                  },
        link: function($scope, $elem, $attrs){
            var vm = $scope;
            var maxH = angular.element(document.querySelector(".view-container"))[0].offsetHeight;
            var header = $elem.find('ion-header-bar');
            var minH = (header[0].offsetHeight) ? header[0].offsetHeight : 60;
            
            minH = (vm.headerMin) ? vm.headerMin : minH;
            if((!ionic.Platform.isIOS()) || (ionic.Platform.isIOS() && minH != 60))
                vm.minH = minH;
            else
                vm.minH = 0;


            var nav = $elem.find('ion-nav-bar');
            var buttons = $elem.find('a');
            var bar = angular.element(document.querySelector("cover-header-parallax > .bar"));
            var cover = angular.element(document.querySelector("cover-header-parallax > div"));
            var content = angular.element(document.querySelector("cover-header-parallax + ion-content"));
            
            vm.goBack = goBack;

            function goBack() {
                $ionicHistory.goBack();
            }

            header.css("top", "-1px");
            content.css('height', ($window.innerHeight-vm.headerMin)+"px");
            //console.log($window.innerHeight);
            setTimeout(function() {
                //You can use with more than one ion-content => for example in tabs
                var contents = angular.element(document.querySelectorAll("ion-content"));
                var auxContentHeight = 0;
                //on scroll change
                contents.bind('scroll', function (e) {
                    var raw = content[1];
                    var newHeight = vm.headerMax;
                    var scrollTop = 0;
                    var opacity = 0;
                    
                    if(e.detail){
                      scrollTop = e.detail.scrollTop;
                    }else if(e.target){
                      scrollTop = e.target.scrollTop;
                    }
                    
                    newHeight -= scrollTop;

                    newHeight = (newHeight > minH) ? newHeight : minH;
                    if(auxContentHeight !== (maxH + scrollTop)){
                        auxContentHeight = maxH + scrollTop;
                        content.css('z-index', '1002');
                        content.css('background', '#fff');
                        content.css('transform', 'translateY('+(newHeight-vm.headerMax)+'px)');
                        
                        //calculate new opacity
                        if(scrollTop > 20)
                            opacity = (minH/newHeight);
                        else
                            opacity = 0;

                        //set new background opacity on header
                        header.css('background-color', 'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', '+opacity+')');
                    }

                });
            }, 800);

            var rgb = (vm.bgColor) ? vm.bgColor : [0, 55, 78];
            var img = angular.element(document.querySelector("cover-header-parallax + img"));
            var contentHeight = (content[0].offsetHeight - 44);
            vm.headerMax = ($attrs.headerMax) ? $attrs.headerMax : 200;

            //Modify CSS Style for Header
            header.css('height', vm.headerMax + 'px');
            header.css('background-color', 'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', 0)');
            header.css('border-bottom', '0px');
            header.css('background-size', '100% 0px');
            
            nav.css('background-color', 'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', 0)');
            nav.css('border-bottom', '0px');
            nav.css('background-size', '100% 0px');

            //Animation on resize cover
            cover.css('-webkit-transition', 'opacity 1s ease-in-out');
            cover.css('-moz-transition', 'opacity 1s ease-in-out');
            cover.css('-o-transition', 'opacity 1s ease-in-out');
            cover.css('-ms-transition', 'opacity 1s ease-in-out');
            cover.css('transition', 'opacity 1s ease-in-out');

            header.css('transition', 'opacity 3s ease-in-out');

            buttons.css('color', '#fff');
            buttons[buttons.length-1].style = "height: 44px; color: #fff; margin: 2px 15px;";

            content.css('top', vm.headerMax + 'px');

            //on gesture for slide-box
            $ionicGesture.on('swiperight', function(e){
                $ionicSlideBoxDelegate.$getByHandle('handle-header').previous();
            }, $elem);

            $ionicGesture.on('swipeleft', function(e){
                $ionicSlideBoxDelegate.$getByHandle('handle-header').next();
            }, $elem);
        }
    };
  };

  /*** Inject Dependencies ***/
  directive.$inject = ['$ionicGesture', '$ionicSlideBoxDelegate', '$ionicScrollDelegate', '$ionicHistory', '$window'];

  angular.module('rpCoverHeader', [])
    .directive('coverHeaderParallax', directive);


}());