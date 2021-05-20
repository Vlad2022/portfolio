const body = document.body,
                scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
                height = scrollWrap.getBoundingClientRect().height - 1,
                speed = 0.5;

            var offset = 0;

            body.style.height = Math.floor(height) + "px";

            function smoothScroll() {
                offset += (window.pageYOffset - offset) * speed;

                var scroll = "translateY(-" + offset + "px) translateZ(0)";
                scrollWrap.style.transform = scroll;

                callScroll = requestAnimationFrame(smoothScroll);
            }

            smoothScroll();
            const content = document.querySelector("section");
            let currentPos = window.pageYOffset;

            const callDistort = function () {
                const newPos = window.pageYOffset;
                const diff = newPos - currentPos;
                const speed = diff * 0.5;

                content.style.transform = "skewY(" + speed + "deg)";
                currentPos = newPos;
                requestAnimationFrame(callDistort);
            };

            callDistort();

var t1 = new TimelineMax({paused: true});

            t1.to(".one", 0.8, {
                 y: 6,
                 rotation: 45,
                 ease: Expo.easeInOut
            });
            t1.to(".two", 0.8, {
                 y: -6,
                 rotation: -45,
                 ease: Expo.easeInOut,
                 delay: -0.8
            });
            
            t1.to(".navigation", 2, {
                 top: "0%",
                 ease: Expo.easeInOut,
                 delay: -2
            });
            
            t1.staggerFrom(".navigation ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);
            
            t1.reverse();
            $(document).on("click", ".toggle-btn", function() {
                 t1.reversed(!t1.reversed());
            });
            $(document).on("click", "a", function() {
                 t1.reversed(!t1.reversed());
            });