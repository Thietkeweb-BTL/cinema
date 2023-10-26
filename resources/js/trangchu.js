function resizeIFrameToFitContent(iFrame) {
}
function resizeIfame() {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");

    header.style.height = header.contentWindow.document.body.scrollHeight + "px";
    footer.style.height = footer.contentWindow.document.body.scrollHeight + "px";
}

window.addEventListener('DOMContentLoaded', function (e) {
    // or, to resize all iframes:
    this.document.body.setAttribute("onresize","resizeIfame()");
    resizeIfame();
});
