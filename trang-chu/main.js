function resizeIFrameToFitContent( iFrame ) {
}
function resizeIfame() {
    var iframes = document.querySelectorAll("iframe");
        
    iframes[0].style.height = iframes[0].contentWindow.document.body.scrollHeight+"px";
}

window.addEventListener('DOMContentLoaded', function(e) {
    // or, to resize all iframes:
    resizeIfame();
} );