varobj;
var href;
function btn() {
    var question = document.getElementById("iptText").value;
    if (question != "") {
        obj = document.getElementById("baidu");
        var tit = obj.attributes["href"].nodeValue;
        obj = null;
        href = tit + "s?wd=" + question;
        window.location = href;
        console.log("href=" + href);
    } else {
        location.reload()
    }
};