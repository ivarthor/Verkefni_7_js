

const url = 'https://apis.is/concerts';
let concerts = [];

fetch(url)
    .then(blob => blob.json())
    .then(data => concerts.push(...data.results))

function leit(ord, concerts) {
    return concerts.filter(nafn => {

        const regex = new RegExp(ord, 'gi');
        return nafn.eventDateName.match(regex)
    });
}


function display() {
    const fundin = leit(this.value, concerts);
    const html = fundin.map(nafn => {
        const regex = new RegExp(this.value, 'gi');
        //const concertName = nafn.eventDateName.replace(regex, `<span class="h1">${this.value}</span>`);
        
        return `
            <li>
                <img src='${nafn.imageSource}'>
                <span class="name">${nafn.eventDateName}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}


let searchInput = document.querySelector('.l');
//let suggestions = document.querySelector('.medmaeli');

//searchInput.addEventListener('change', display);
//searchInput.addEventListener('keyup', display);



/*
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
  }


const url = 'https://apis.is/concerts';
const ul = document.getElementById('dd');
const concerts = [];

fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        let conc = data.results;
        
        return conc.map(function(con) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = con.imageSource;
            span.innerHTML = con.eventDateName;
            append(li,img);
            append(li,span);
            append(ul,li);
            //li.appendChild(img);
            //li.appendChild(span);
            //ul.appendChild(li);
        })
    })
    .catch(function(error) {
        console.log(error);
    }); 

*/



