function myFunction() {
	var txt;
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementById("mySelect").options;
 var o= confirm("Are you sure you want to post this on the "+ y[x].text +" page?");
 if(o==true){
 	txt=" Post uploaded.";
 }else{
 	txt="Post cancelled.";
 }
 alert(txt);
}