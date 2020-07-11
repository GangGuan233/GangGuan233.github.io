var obj;
var href;
function btn() {

    obj = document.getElementById("baidu");
    var tit = obj.attributes["href"].nodeValue;
    obj = null;
    obj = document.getElementById("iptText").value;
    var question = obj;
    obj = null;
    href = tit + "s?wd=" + question;
    window.location = href;
    console.log("href=" + href);

};