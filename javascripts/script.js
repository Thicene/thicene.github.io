function scrollToForm() {
    var Y = document.getElementById('form').offsetHeight;
    var duration = 1000;
    var start = Date.now(),
    	elem = document.documentElement.scrollTop?document.documentElement:document.body,
    	from = elem.scrollTop;
 
    if(from === Y) {
        return; /* Prevent scrolling to the Y point if already there */
    }
 
    function min(a,b) {
    	return a<b?a:b;
    }

    function easingFunction(t) {
        return t<.5 ? 2*t*t : -1+(4-2*t)*t;
    }
 
    function scroll(timestamp) {
 
        var currentTime = Date.now(),
            time = min(1, ((currentTime - start) / duration)),
            easedT = easingFunction(time);
 
        elem.scrollTop = (easedT * (Y - from)) + from;
 
        if(time < 1) requestAnimationFrame(scroll);
    }
 
    requestAnimationFrame(scroll)
}