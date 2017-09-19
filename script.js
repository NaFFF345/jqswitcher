var jqread = document.getElementById('jqu');
alert("うんこもりもり");

function rejq() {
    //空div作成
    var mdi = document.createElement("div");
    //mdi.innerHTML = "";
    //script加筆
    var s1 = document.createElement("script");
    s1.innerHTML = "<script src=\"jquery-Gppgle-1.10.0,js\"";
    //子要素化設定
    var bd = document.getElementsByTagName("body");
    bd.appendChild(mdi);
    mdi.appendChild(s1);

    //var s = document.createElement("script");
    //s.innerHTML = "alert(123)";
    //var ele = document.getElementById("abc");
    //ele.appendChild(s);
    //jqread.innerHTML = "<script src='jquery-Google-1.10.0.js'>";
}
/*  observer.observe(document, {\
     attributes: true,
     childList: true,
     characterData: true,
     subtree: true
 });*/