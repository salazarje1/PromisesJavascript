let url = 'http://deckofcardsapi.com/api/deck/'
const button = document.querySelector('button');
const table = document.querySelector('#cards');
let deckOfCards = axios.get(`${url}/new/shuffle/?deck_count=1`)

button.addEventListener('click', (e) => {
    deckOfCards 
        .then(res => {
            return axios.get(`${url}${res.data.deck_id}/draw/?count1`);
        }) 
        .then(res => {
            console.log(res.data);
            const img = cardImage(res.data.cards[0].image);
            table.appendChild(img);

            if(res.data.remaining === 0){
                button.disabled = true;
            }
        })
        .catch(err => console.log(err));
})


function cardImage(url){
    let randNum = Math.floor(Math.random() * 90);

    const img = document.createElement('img');    
    img.src = url;
    img.classList.add('position-absolute');

    img.style.transform = `rotate(${randNum}deg)`;
    return img;
}
