    // check if mobile window is in landscape
    // also checked on load and on window resize
    $(window).on('load resize', function() {

        // gets user agents for major mobile browsers  
        var a = /iphone/i.test(navigator.userAgent.toLowerCase());
        var b = /android/i.test(navigator.userAgent.toLowerCase());
        var c = /blackberry/i.test(navigator.userAgent.toLowerCase());
        var d = /webos/i.test(navigator.userAgent.toLowerCase());
        var e = /windows phone/i.test(navigator.userAgent.toLowerCase());

        // gets width and height of window
        var w = $(window).width();
        var h = $(window).height();

        // returns true if this is a mobile browser
        var mobile = (a || b || c || d || e);
        
        if (w > h && mobile) {

            //Mobile Orientation Landscape

        } else if (w < h && mobile) {

            //Mobile Orientation Portrait

        }else{

            //Desktop Browser

        }

    });