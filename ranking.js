$.get('server.php')
.done(function (data, textStatus, jqXHR){
	json = $.parseJSON(data);

	for (var i = 0; i < json.length; i++) {
		tr = document.createElement("tr");
		th = document.createElement("th");
		$(th).attr("scope", "row");
		$(th).html(i);
		td1 = document.createElement("td");
		$(td1).html(json[i].first_name);
		td2 = document.createElement("td");
		$(td2).html(json[i].last_name);
		td3 = document.createElement("td");
		$(td3).html(json[i].best_score);
		$(tr).append($(th));
		$(tr).append($(td1));
		$(tr).append($(td2));
		$(tr).append($(td3));
		$("tbody").append($(tr));
	}
	
})
.fail(function(){

})
.always(function (){

});