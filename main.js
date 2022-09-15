const API = 'https://meme-api.herokuapp.com/gimme'

function render(count=50){
    let container = document.querySelector('.container');
    container.innerHTML = '',
    fetch(`${API}/${count}`)
    .then(result=> result.json())
    .then(data=> data.memes.forEach(item => {
        container.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${item.url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Author: ${item.author}</h5>
        
        <a href="${item.postLink}" class="btn btn-primary">Detail</a>
        </div>
        </div>
        `;
    }));

};
render();


let updPageBtn = document.querySelector('#update-btn');
updPageBtn.addEventListener('click',()=>{
    render();
});

let selectCount = document.querySelectorAll('.dropdown-item');
selectCount.forEach(item =>{
    item.addEventListener('click',(e)=>{
        render(e.target.innerText)
    })
})