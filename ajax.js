// function ajaz(type,url,why,success){

// 	var xml = null;
// 	if(window.XMLHttpRequest){
// 		xml = new XMLHttpRequest();
// 	}else{
// 		xml = new ActiveXObject("Microsoft.XMLHttp")
// 	}
// 	xml.open(type,url,why);
// 	xml.send();

// 	xml.onreadystatechange = function(){
// 		if(xml.readyState == 4){
// 			if(xml.status == 200){
// 				success && success(JSON.parse(xml.responseText))
// 			}
// 		}
// 	}
// }
function ajaz(option){
	var type = option.type;
	var url = option.url;
	var why = option.why;
	var success = option.success;

	var xml = null;
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xml = new ActiveXObject("Microsoft.XMLHttp")
	}
	
	xml.open(type,url,why);
	xml.send();

	xml.onreadystatechange = function(){
		if(xml.readyState == 4){
			if(xml.status == 200){
				success && success(JSON.parse(xml.responseText))
			}
		}
	}
}