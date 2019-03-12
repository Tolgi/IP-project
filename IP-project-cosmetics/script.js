$.getJSON('ld.json', function(data){
	for(var i=0; i<data.length; i++){
		$( "#games" ).append( 
		"<li class='igra'>"+
		"<div class='game'>"+
			"<h2>"+data[i].title +"</h2>"+
			"<h3>"+data[i].studio +"</h3>"+
			"<img width='100%' height='auto' src="+data[i].url+"></img>"+
			"<div class='ld'>"+
				"<button>Like</button>"+"&nbsp"+
				"<p class='l'>0</p>"+
				"<button>DisLike</button>"+"&nbsp"+
				"<p class='l'>0</p>"+
				"<button class='select'>Select</button>"+
			"</div>"+
		"</div>"+
		"</li>"
		);
	}


	$("#submit").click(function(){
		
		if($("#title").val()=='' || $("#studio").val()=='' || $("#url").val()==''){
			alert("site polinja mora da se popolneti");
		}else{
			
			var nov = {title:$("#title").val(), studio:$("#studio").val(), url:$("#url").val()};
		
			data.push(nov);
			
			var last = data.length-1;
			
			$( "#games" ).append( 
			"<li class='igra'>"+
			"<div class='game'>"+
				"<h2>"+data[last].title +"</h2>"+
				"<h3>"+data[last].studio +"</h3>"+
				"<img width='100%' height='auto' src="+data[last].url+"></img>"+
				"<div class='ld'>"+
					"<button>Like</button>"+"&nbsp"+
					"<p class='l'>0</p>"+
					"<button>DisLike</button>"+"&nbsp"+
					"<p class='l'>0</p>"+
					"<button class='select'>Select</button>"+
				"</div>"+
			"</div>"+
			"</li>"
			);
		
		}
		return false;
	});
	
	lajk();
	selekt();
	brisi();
});




function selekt(){
	$('#games').on('click', '.select', function () {
		if($(this).parent().parent().parent().hasClass('selected')){
			$(this).parent().parent().parent().removeClass('selected');
		}else{
			$(this).parent().parent().parent().addClass('selected');
		}
	});
}

function brisi(){
	$('#delete').click(function () {
		$.each($(".igra"), function(){
			if($(this).hasClass('selected')){
				$(this).remove();
			}
		});
	});
}

function lajk(){
	$('#games').on('click', 'button', function () {
		num = $(this).next().text();
		num = parseInt(num);
		$(this).next().text(num+1);
	});
}