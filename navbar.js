var x=0;
document.addEventListener("click", function(){
	if(x%2==0)
	{
  document.getElementById("toggler").onclick=function() {show()};
  function show()
  {document.getElementById("togglebar").style.display="block";
	 document.getElementById("toggler").style.bottom="235px";
	
	 
  }
	}
	else{
  document.getElementById("toggler").onclick=function() {hide()};
  function hide()
  {document.getElementById("togglebar").style.display="none";
	  document.getElementById("toggler").style.bottom="0px";
	
	}}
  x++;
});
