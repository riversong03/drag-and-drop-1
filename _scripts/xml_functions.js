// JavaScript Document

function get_firstChild(n){
	var y = n.firstChild;
	while (y.nodeType!=1)
	  {
	  y=y.nextSibling;
	  }
	return y;
	}
	
	function get_nextSibling(n){
		var y=n.nextSibling;
		while (y.nodeType!=1){
  			y=y.nextSibling;
  		}
		return y;
	} 

	function randOrd(){
		return(Math.round(Math.random())-0.5);
	}


	function getXMLDoc(){
		// Load XML document
		if (window.XMLHttpRequest){
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","LMS_exercises.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;
		var root = xmlDoc.documentElement;
		var nodes = root.getElementsByTagName('exercise');
		var count = nodes.length;	
	} // End function
