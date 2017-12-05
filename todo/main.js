var btnAdd = document.querySelector('[type="button"]');
var divTasks = document.querySelector('.todo__tasks');
var elAdd = document.createElement('p')
elAdd.className = 'todo__task';

btnAdd.addEventListener('click', add )


function add() {
    var elAdd = document.createElement('p')
    elAdd.className = 'todo__task';

    var delAdd = document.createElement('span')
    delAdd.className = 'todo__del'
    delAdd.textContent = 'del'

    var textAdd = document.querySelector('[type="text"]').value;
    
        if (textAdd != '') {
            elAdd.textContent = textAdd;
            divTasks.appendChild(elAdd);
            elAdd.appendChild(delAdd);    
            document.querySelector('[type="text"]').value = '';
        }
    var del = document.querySelectorAll('.todo__del');
   
    for( var i = 0; i<del.length; i++ ) {
        del[i].onclick = function () {
            this.parentElement.remove();
        }
    }

    btnAdd.addEventListener('click', add)

}
