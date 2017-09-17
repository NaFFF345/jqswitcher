$(function (){
	//window.alert("読み込みました");
	$("head").html (
	$("head").html().replace("https://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js","jquery-Google-1.10.0.js")
	);
	observer.observe(document, {
    	attributes: true,
    	childList: true,
    	characterData: true,
    	subtree: true
	});
});