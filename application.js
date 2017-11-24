var score = 0;

jQuery.fn.getClasses = function(){
  var ca = this.attr('class');
  var rval = [];
  if(ca && ca.length && ca.split){
    ca = jQuery.trim(ca); /* strip leading and trailing spaces */
    ca = ca.replace(/\s+/g,' '); /* remove doube spaces */
    rval = ca.split(' ');
  }
  return rval;
}

function getPosition(position)
{
	return position.slice(14).split('').filter(function (i){ return i != '-' }).map(function (i){ return parseInt(i, 10) });
}

function fromArrayToClassName(array)
{
	className ="tile-position-";

	arrayToString = array.join("-");

	return className + arrayToString;
}

function positionChange(position, movement)
{
	coord = getPosition(position);

	if (movement == "Right")
	{
		coord[1] = rightLimit(coord);
	}
	else if (movement == "Left")
	{
		coord[1] = leftLimit(coord);
	}
	else if (movement == "Up")
	{
		coord[0] = upLimit(coord);
	}
	else if (movement == "Down")
	{
		coord[0] = downLimit(coord);
	}
	return fromArrayToClassName(coord);
}

function getAllPositions()
{
	coords = [];
	$(".tile").each(function () {
		classes = $(this).getClasses();
		coords.push(getPosition(classes[2]));
	});

	return coords;
}

function tileEmpty(coord)
{
	coords = getAllPositions();

	for (var i = 0; i < coords.length; i++) {
		if (coords[i].toString() == coord.toString())
		{
			return false;
		}
	}
	return true;
}

function rightLimit(coord)
{
	row = 4;
	for (var i = coord[1]+1; i < 5; i++) {

		if (!tileEmpty([coord[0], i]))
		{
			row = i-1;
			break;
		}
	}
	return row;
}

function leftLimit(coord)
{
	row = 1;
	for (var i = coord[1]-1; i >= 1; i--) {
		if (!tileEmpty([coord[0], i]))
		{
			row = i+1;
			break;
		}
	}
	return row;
}

function downLimit(coord)
{
	column = 4;
	for (var i = coord[0]+1; i < 5; i++) {
		if (!tileEmpty([i, coord[1]]))
		{
			column = i-1;
			break;
		}
	}
	return column;
}

function upLimit(coord)
{
	column = 1;
	for (var i = coord[0]-1; i >= 1; i--) {
		if (!tileEmpty([i, coord[1]]))
		{
			column = i+1;
			break;
		}
	}
	return column;
}

function getValue(titleValue)
{
	return parseInt(titleValue.slice(5), 10);
}

function divToArray()
{
	coords = getAllPositions();

	finalArray = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

	for (var k = 0; k < coords.length; k++) 
	{
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {

				if (i+1 == coords[k][0] && j+1 == coords[k][1])
				{
					finalArray[i][j] = $("." + fromArrayToClassName([i+1, j+1])).text();
				}
			}
		}
	}
	return finalArray;
}

function mergeLeft()
{
	arrayOfPositions = divToArray();

	for (var i = 0; i < arrayOfPositions.length; i++) {
		for (var j = 0; j < arrayOfPositions[i].length-1; j++) {
			if (arrayOfPositions[i][j] == arrayOfPositions[i][j+1] && arrayOfPositions[i][j] != 0)
			{
				if (arrayOfPositions[i][j+2] !== void 0)
				{
					arrayOfPositions[i][j+1] = arrayOfPositions[i][j+2];
					arrayOfPositions[i][j+2] = 0;
				}
				else
				{
					arrayOfPositions[i][j+1] = 0;
				}

				if (arrayOfPositions[i][j+3] !== void 0)
				{
					arrayOfPositions[i][j+2] = arrayOfPositions[i][j+3];
					arrayOfPositions[i][j+3] = 0;
				}

				arrayOfPositions[i][j] *= 2;
				score += parseInt(arrayOfPositions[i][j], 10);
				updateScore();
			}
		}
	}

	return arrayOfPositions;
}

function mergeRight()
{
	arrayOfPositions = divToArray();

	for (var i = arrayOfPositions.length-1; i >= 0 ; i--) {
		for (var j = arrayOfPositions[i].length-1; j >= 1; j--) {
			if (arrayOfPositions[i][j] == arrayOfPositions[i][j-1] && arrayOfPositions[i][j] != 0)
			{
				if (arrayOfPositions[i][j-2] !== void 0)
				{
					arrayOfPositions[i][j-1] = arrayOfPositions[i][j-2];
					arrayOfPositions[i][j-2] = 0;
				}
				else
				{
					arrayOfPositions[i][j-1] = 0;
				}

				if (arrayOfPositions[i][j-3] !== void 0)
				{
					arrayOfPositions[i][j-2] = arrayOfPositions[i][j-3];
					arrayOfPositions[i][j-3] = 0;
				}
				
				arrayOfPositions[i][j] *= 2;
				score += parseInt(arrayOfPositions[i][j],10);
				updateScore();
			}
		}
	}

	return arrayOfPositions;
}

function mergeUp()
{
	arrayOfPositions = divToArray();

	for (var i = 0; i < arrayOfPositions.length; i++) {
		for (var j = 0; j < arrayOfPositions[i].length-1; j++) {
			if (arrayOfPositions[j][i] == arrayOfPositions[j+1][i] && arrayOfPositions[j][i] != 0)
			{
				if (arrayOfPositions[j+2] && arrayOfPositions[j+2][i] !== void 0)
				{
					arrayOfPositions[j+1][i] = arrayOfPositions[j+2][i];
					arrayOfPositions[j+2][i] = 0;
				}
				else
				{
					arrayOfPositions[j+1][i] = 0;
				}

				if (arrayOfPositions[j+3] && arrayOfPositions[j+3][i] !== void 0)
				{
					arrayOfPositions[j+2][i] = arrayOfPositions[j+3][i];
					arrayOfPositions[j+3][i] = 0;
				}

				arrayOfPositions[j][i] *= 2;
				score += parseInt(arrayOfPositions[j][i],10);
				updateScore();
			}
		}
	}

	return arrayOfPositions;
}

function mergeDown()
{
	arrayOfPositions = divToArray();

	for (var i = arrayOfPositions.length-1; i >= 0 ; i--) {
		for (var j = arrayOfPositions[i].length-1; j >= 1 ; j--) {
			if (arrayOfPositions[j][i] == arrayOfPositions[j-1][i] && arrayOfPositions[j][i] != 0)
			{
				if (arrayOfPositions[j-2] && arrayOfPositions[j-2][i] !== void 0)
				{
					arrayOfPositions[j-1][i] = arrayOfPositions[j-2][i];
					arrayOfPositions[j-2][i] = 0;
				}
				else
				{
					arrayOfPositions[j-1][i] = 0;
				}

				if (arrayOfPositions[j-3] && arrayOfPositions[j-3][i] !== void 0)
				{
					arrayOfPositions[j-2][i] = arrayOfPositions[j-3][i];
					arrayOfPositions[j-3][i] = 0;
				}
				
				
				arrayOfPositions[j][i] *= 2;
				score += parseInt(arrayOfPositions[j][i],10);
				updateScore();
			}
		}
	}

	return arrayOfPositions;
}

function updateScore()
{
	$(".score-container p").html("SCORE : " + score);
}

function arrayToTile(array)
{
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			$(".tile").each(function () {

				if (array[i][j] == 0 && $(this).hasClass(fromArrayToClassName([i+1,j+1])))
				{
					$(this).remove();
				}	
			})

			valueTile = $("." + fromArrayToClassName([i+1,j+1])).html();

			if (array[i][j] != valueTile)
			{
				$("." + fromArrayToClassName([i+1,j+1])).removeClass('tile-' + valueTile + ' ' + fromArrayToClassName([i+1,j+1])).addClass('tile-' + array[i][j] + ' ' + fromArrayToClassName([i+1,j+1]));
				$("." + fromArrayToClassName([i+1,j+1])).html(array[i][j]);
			}


		}
	}
}

function randomPosition()
{
	return [Math.floor(Math.random() * (3 + 1)) + 1, Math.floor(Math.random() * (3 + 1)) + 1];
}

function getRandomNumber() 
{
  var value = Math.random() < 0.9 ? 2 : 4;
  return value;
}

function addTile()
{
	randomPos = randomPosition();

	while (!tileEmpty(randomPos))
	{
		randomPos = randomPosition()
	}

	// console.log(randomPos[0] + " " + randomPos[1]);

	number = getRandomNumber();

	tile = document.createElement("div");
	$(tile).addClass("tile");
	$(tile).addClass("tile-" + number);
	$(tile).addClass(fromArrayToClassName(randomPos));
	$(tile).addClass("tile-new");
	$(tile).html(number);
	$(".tile-container").append($(tile));

	// console.log($(tile));
}

function movement(oldArray, newArray)
{
	for (var i = 0; i < oldArray.length; i++) {
		if (oldArray[i].toString() != newArray[i].toString())
		{
			return true;
		}
	}

	return false
}

function newGame()
{
	$(".tile").each(function () {
		$(this).remove()
	});
	score = 0;
	addTile();
	addTile();
}

$(document).ready(function(){
	newGame();

	$("#new-game").on("click", function(){
		newGame();
	})



	$(document).keydown(function(e){
		oldArray = divToArray();

		if (e.which == 39)
		{
			sortedTiles = $(".tile").sort(function (a,b){return getPosition($(b).getClasses()[2])[1] - getPosition($(a).getClasses()[2])[1]});
			sortedTiles.each(function () {
				classes = $(this).getClasses();
				oldClass = classes[2];
				newClass = positionChange(classes[2], "Right");
				$(this).addClass(newClass);
				if (newClass != oldClass)
				{
					$(this).removeClass(oldClass);
				}
			});

			arrayToTile(mergeRight());
			newArray = divToArray();


			if (movement(oldArray, newArray))
			{
				addTile();
			}
			
		}
		else if (e.which == 37)
		{
			oldArray = divToArray();
			sortedTiles = $(".tile").sort(function (a,b){return getPosition($(a).getClasses()[2])[1] - getPosition($(b).getClasses()[2])[1]});
			sortedTiles.each(function () {
				classes = $(this).getClasses();
				// console.log(classes);
				oldClass = classes[2];
				newClass = positionChange(classes[2], "Left");
				$(this).addClass(newClass);
				if (newClass != oldClass)
				{
					$(this).removeClass(oldClass);
				}
			});	
			arrayToTile(mergeLeft());
			newArray = divToArray();
			// console.log(newArray);
			if (movement(oldArray, newArray))
			{
				addTile();
			}
		}
		else if (e.which == 38)
		{
			oldArray = divToArray();
			sortedTiles = $(".tile").sort(function (a,b){return getPosition($(a).getClasses()[2])[0] - getPosition($(b).getClasses()[2])[0]});
			sortedTiles.each(function () {
				classes = $(this).getClasses();
				oldClass = classes[2];
				newClass = positionChange(classes[2], "Up");
				$(this).addClass(newClass);
				if (newClass != oldClass)
				{
					$(this).removeClass(oldClass);
				}
			});	
			arrayToTile(mergeUp());
			newArray = divToArray();
			// console.log(newArray);
			if (movement(oldArray, newArray))
			{
				addTile();
			}
		}
		else if (e.which == 40)
		{
			oldArray = divToArray();
			sortedTiles = $(".tile").sort(function (a,b){return getPosition($(b).getClasses()[2])[0] - getPosition($(a).getClasses()[2])[0]});
			sortedTiles.each(function () {
				classes = $(this).getClasses();
				oldClass = classes[2];
				newClass = positionChange(classes[2], "Down");
				$(this).addClass(newClass);
				if (newClass != oldClass)
				{
					$(this).removeClass(oldClass);
				}
			});	
			arrayToTile(mergeDown());
			newArray = divToArray();
			// console.log(newArray);
			if (movement(oldArray, newArray))
			{
				addTile();
			}
		}
		
	})
});