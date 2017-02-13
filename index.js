document.getElementById('addButton').addEventListener('click', function() {
	var div = document.createElement('div')
	var text = document.createTextNode('Cool');
	div.appendChild(text);
	document.body.appendChild(div);
});
