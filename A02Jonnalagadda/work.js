$("#first").hide();
$("#cam").hide();
$("#type").hide();
$("#ni").hide();
$("#ca").hide();
$("#s").hide();
$("#ccp").hide();

$("#zero").click(function()

{
    $("#first").show(1500);
});

$("#first").click(function()
{
	$("#cam").show(1500);
});

$("#cam").click(function()
{
	$("#type").show(1300);
});

$("#type").click(function()
{
	$("#ni").show(500);
	$("#ca").show(500);
	$("#s").show(500);
});

// $("#ni","#ca","#s")click(function())
// {
// 	$("#cc").show();
// 	$("#cd").show();
// };
function myFunction(){
	var val = document.getElementsByName("Nikon");
	var totalCost = 0;
	for(var i=0; i<val.length;i++){
		if(val[i].checked)
			totalCost += parseInt(val[i].value);
	}
	document.getElementById("total").innerHTML = " <span style='font-size:150%' > $"+totalCost+"</span>";
	
}
	/*document.getElementById("qwerty").style.display = "block";
}
}*/

// function abc(){
// 	document.getElementById("ccp").style.display = "block";
// }
/*$("#cc").click(function()
{
	$("#ccp").show(); 
	$("#cd").hide();
	$("#tb").hide();
	//$("#ccp").hide(); 
});

$("#cd").click(function()
{
	$("#cd").show();
	$("#tb").show();
	$("#ccp").hide();
});*/
function anjali(){
document.getElementById("ccp").style.display = "none";
document.getElementById("tb").style.display = "block";
}
function anju(){
document.getElementById("ccp").style.display = "block";
document.getElementById("tb").style.display = "none";
}


// $('#cam').on('change', function () {
//     // if (this.value == '1'); { No semicolon and I used === instead of ==
//     if (this.value === '0'){
//         $("#ni").show();
//     } else {
//         $("#ni").hide();
//     }
// });


// function myFunction() {
//     var dropdown = document.getElementById("this");
//     var current_value = dropdown.options[dropdown.selectedIndex].value;

//     if (current_value == "nis")
//     {
//         document.getElementById("ni").style.display = "block";
//     }
    
// }




/*$(document).ready(function(){
    $("#nis").on("show.bs.dropdown", function(event){
        var x = $(event.relatedTarget).text(); // Get the button text
        alert("You clicked on: " + x);
    });
});*/
// function myFunction(){
// 	document.getElementById("ni").style.display = "block";

// }


/*$(document).ready(function(){
    $('#type').change(function() {
     ($("#type option:selected").show());
  });  
});*/
	
/*$(document).ready(function(){
    $('#type').change(function() {
    alert($("type option:selected").text();
  });  
});*/ 

