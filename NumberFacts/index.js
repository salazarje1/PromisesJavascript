const url = 'http://numbersapi.com/';
const numsFact = document.querySelector('#nums-facts');
const multiFacts = document.querySelector('#multi-facts');

let numbers = [1,2,3,5]
let getNumsFacts = axios.get(`${url}${numbers}?json`)

getNumsFacts
    .then(res => {
        for(const el in res.data){
            let p = document.createElement('p');
            p.innerText = `${el} : ${res.data[el]}`;
            numsFact.appendChild(p);
        }
    })
    .catch(err => console.log(err));


let oneNumMultiFacts = []; 
let favNum = 7;

for(let i = 0; i < 4; i++){
    oneNumMultiFacts.push(
        axios.get(`${url}${favNum}?json`)
    )
}

Promise.all(oneNumMultiFacts)
    .then(facts => {
        console.log(facts)
        facts.forEach(fact => {
            let p = document.createElement('p');
            p.innerText = `- ${fact.data.text}`;
            multiFacts.appendChild(p);
        })
    })
    .catch(err => console.log(err));