$(document).ready(function(){
	$.getJSON('ld.json', function(data){
		var br = data.length;
		for(var i=0; i<br; i++){
			$("#slider").append("<img class='imgs' src="+data[i].url+" style='width:100%' title="+data[i].title+">");
		}
		var x = $(".imgs");
		
		for(var j=0; j<x.length; j++){
			 $(x[j]).attr("style", "display: none");
		}
		
		var pom = 0;
		$(x[0]).attr("style", "display: block; width: 100%");
		$("#naslov").html("<h1>"+data[0].title+"</h1>");
		$("#stud").html("<h1>"+data[0].studio+"</h1>");
		
		$(".next").click(function(){
			$(x[pom]).attr("style", "display: none; width: 100%");
			if(pom==br-1)
				pom=-1;
			$(x[pom+1]).attr("style", "display: block; width: 100%");
			$("#naslov").html("<h1>"+data[pom+1].title+"</h1>");
			$("#stud").html("<h1>"+data[pom+1].studio+"</h1>");
			pom++;

		});
		
		// kopce napred
		$( "body" ).on( "keydown", function( event ) {
		  if(event.keyCode==39){
				$(x[pom]).attr("style", "display: none; width: 100%");
				if(pom==br-1)
					pom=-1;
				$(x[pom+1]).attr("style", "display: block; width: 100%");
				$("#naslov").html("<h1>"+data[pom+1].title+"</h1>");
				$("#stud").html("<h1>"+data[pom+1].studio+"</h1>");
				pom++;
		  }
		});
		
		$(".prev").click(function(){
			$(x[pom]).attr("style", "display: none; width: 100%");
			if(pom==0)
				pom=br;
			$(x[pom-1]).attr("style", "display: block; width: 100%");
			$("#naslov").html("<h1>"+data[pom-1].title+"</h1>");
			$("#stud").html("<h1>"+data[pom-1].studio+"</h1>");
			pom--;
		});
		
		// kopce nazad
		$( "body" ).on( "keydown", function( event ) {
		  if(event.keyCode==37){
			$(x[pom]).attr("style", "display: none; width: 100%");
			if(pom==0)
				pom=br;
			$(x[pom-1]).attr("style", "display: block; width: 100%");
			$("#naslov").html("<h1>"+data[pom-1].title+"</h1>");
			$("#stud").html("<h1>"+data[pom-1].studio+"</h1>");
			pom--;
		  }
		});
		
		//console.log(x[1]);
		
	});
});