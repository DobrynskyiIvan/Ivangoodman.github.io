// https://swapi.dev/documentation

// #region Setup
const URL = "http://swapi.dev/api/";
const output = document.getElementById("output");
const spinner = document.getElementById('spinner');

output.innerHTML = "Loading ...";
 


fetch(URL+'films').then(response=>{
    if(!response.ok){
    throw Error('Smth go wrong');
}
return response.json() })
 
.then(({results:films})=>{
    output.innerHTML=getTitles(films);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    spinner.remove();
})
// .then(spinner.remove());
function getTitles(films){
    return films.sort((a,b)=>a.episode_id-b.episode_id).map(film=>`<div>${film.episode_id} ${film.title}</div>`).join(' ');
}

function queryApi(endpoint) {
    return fetch(
        URL+endpoint
    ).then(response=>{
        return response.ok?response.json():Promise.reject(' Unsuccessfull response');
    })
    
}
queryApi('films').then(({results:films})=>{
    queryApi('planets').then(({  results:planets  })=>{
        output.innerHTML=`Films: ${films.length}  ,Planets ${planets.length}`
    })
})

Promise.all(
    [
        queryApi('films'),
        queryApi('planets')
    ]
).then(([]))

async function main( ) {
        try{
                const [{results:films},{  results:planets  }]=Promise.all(
                    [
                        queryApi('films'),
                        queryApi('planets')
                    ]
                )
                output.innerHTML=`Films: ${films.length}  ,Planets ${planets.length}`
            }
            catch(error){
                    console.log(error)
                    output.textContent='OOps'
            }
    
}