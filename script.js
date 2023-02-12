const btnEl = document.getElementById("btn");
const jokeEl =document.getElementById("joke");
// Getting the element from the html page where ID is button

const apiKey="pwRNa0s0byXZpL3zbzXmlA==CXbnqac2LWQAkIAS";

const options={
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){

    try {
        jokeEl.innerText="Updating...";
        btnEl.disabled=true;
        btnEl.innerText="Loading.."
        const response = await fetch(apiURL,options);
        const data =await response.json();
        btnEl.disabled=false;
        btnEl.innerText=" Tell me a joke"
        console.log(data[0].joke);
        jokeEl.innerText=data[0].joke;
    } catch (error) {
        jokeEl.innerText="An error happened ! Try again later";
        console.log(error);
    }}


btnEl.addEventListener("click",getJoke)
//The event click on btnEl will trigger the function getJoke/