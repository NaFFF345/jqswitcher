var jqread = document.getElementById('jqu');
//alert("うんこもりもり");

function rejq() {
    //script加筆
    var s1 = document.createElement("script");
    s1.src = "\"jquery-Gppgle-1.10.0.js\"";
    //子要素化設定
    var bd = document.getElementsByTagName("body").item(0);
    bd.appendChild(s1);
};