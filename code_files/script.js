function formatNotebook(nb, isEmpty) {    

    let title = document.createElement('p');
    let pages = document.createElement('p');
    let dateP = document.createElement('p');

    // Get values from inputs
    title.innerHTML = document.getElementById('nbName').value;
    pages.innerHTML = 'Pages: ' + document.getElementById('nbPages').value;
    
    let date = new Date()
    
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    dateP.innerHTML = 'Date: ' + `${day}-${month}-${year}`;

    // TODO: Eventually replace with a style
    title.style.fontSize = '24px';
    title.style.marginBottom = '4px';
    pages.style.fontSize = '20px';
    dateP.style.fontSize = '20px';

    nb.appendChild(title);
    nb.appendChild(pages);
    nb.appendChild(dateP)


    nb.style.height = '80px';
    nb.style.padding = '8px 16px';


    nb.style.backgroundColor = 'white';
    if (!isEmpty) nb.style.borderTop = '1px solid black';

    return nb
}

function addNotebook() {
    let button = document.querySelector('.addNotebook');
    button.addEventListener('click', (e) => {
        let container = document.querySelector('.notebookCont');
        let notebook = document.createElement('div');

        newNb = formatNotebook(notebook, container.innerHTML==="")

        container.appendChild(newNb)


        // Clear inputs
        document.getElementById('nbName').value = ''
        document.getElementById('nbPages').value = ''
        
    })
}

function addPages() {
    let button = document.querySelector('.addPages')
}
addNotebook()