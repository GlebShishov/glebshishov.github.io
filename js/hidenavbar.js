let windowWidth = document.documentElement.clientWidth
    let prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        if (windowWidth < 1024){
            document.getElementById("navbar").style.top = "0";
            return;
        }
        console.log(prevScrollpos,currentScrollPos)
        if (prevScrollpos > currentScrollPos){
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
    window.addEventListener('resize', function(event) {
        windowWidth = document.documentElement.clientWidth
    }, true);