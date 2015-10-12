        window.onbeforeunload = function() {

            var n = window.event.screenX - window.screenLeft;

            var b = n > document.documentElement.scrollWidth - 20;

            if (!(b && window.event.clientY < 0 || window.event.altKey)) {

                
		window.location.reload(true);
                

            }

        }  
