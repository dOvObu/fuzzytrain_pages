
var node = document.getElementById('blog_data');

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

for (var i = 0; i < data.length ; ++i) {
	
	// тайловая анимация
	var subNode  = document.createElement ('div');
	subNode.className = 'tile';
	node.appendChild (subNode);
	
	// заголовок записи
	var newNote = document.createElement ('h3');
	newNote.innerHTML = (data[i].title);
	subNode.appendChild (newNote);
	// текст записи
	for (var j = 0; j < data[i].content.length; ++j) {
		
		if ('title' in data[i].content[j]) {
			var newNote = document.createElement ('h4');
			var shell = document.createElement ('div');
			shell.className = 'little_title';
			newNote.innerText = data[i].content[j].title;
			shell.appendChild (newNote);
			subNode.appendChild (shell);
		}
		else if ('punchline' in data[i].content[j]) {
			var newNote = document.createElement ('p');
			newNote.innerText = data[i].content[j].punchline;
			subNode.appendChild (newNote);
		}
		else if ('tex' in data[i].content[j]) {
			var nNode = document.createElement ('div');
			nNode.className = 'texxmath';
			console.log (data[i].content[j].tex);
			nNode.innerText = data[i].content[j].tex;
			subNode.appendChild(nNode);
		}
		else if ('text' in data[i].content[j]) {
			var shell = document.createElement ('div');
			shell.className = 'scratch_text';
			var newNote = document.createElement ('p');
			newNote.innerText = data[i].content[j].text;
			shell.appendChild (newNote);
			subNode.appendChild (shell);
		}
		else if ('code' in data[i].content[j]) {
			var shell = document.createElement ('div');
			shell.className = 'scratch';
			
			var newNote = document.createElement ('pre');
			var scratch = document.createElement ('code');
			scratch.innerText = data[i].content[j].code;
			
			newNote.appendChild (scratch);
			shell.appendChild (newNote);
			subNode.appendChild (shell);
		}
		else if ('img' in data[i].content[j]) {
			var shell = document.createElement ('div');
			shell.className = 'canv';
			var newNote = document.createElement ('img');
			newNote.className = 'picture';
			newNote.src = data[i].content[j].img;
			
			shell.appendChild (newNote);
			subNode.appendChild (shell);
		}
	}
	if ('date' in data[i]) {
		var shell = document.createElement ('div');
		shell.className = 'date';
		var newNote = document.createElement ('p');
		var l = data[i].date.length;
		if (l == 3) {newNote.innerText = data[i].date[0]+' '+month[data[i].date[1]-1]+' '+data[i].date[2];}
		else if (l == 5) {newNote.innerText = data[i].date[0]+' '+month[data[i].date[1]-1]+' '+data[i].date[2]+', '+data[i].date[3]+':'+data[i].date[4];}
		shell.appendChild (newNote);
		subNode.appendChild (shell);
	}
	subNode.appendChild (document.createElement ('br'));
	
}