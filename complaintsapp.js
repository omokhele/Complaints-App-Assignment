const BASE_URL = `https://data.cityofnewyork.us/`


const brooklynButton = document.querySelector(".one");
const manhattanButton = document.querySelector(".two");
const queensButton = document.querySelector(".three");
const bronxButton = document.querySelector(".four");
const statenIslandButton = document.querySelector(".five");

const inputField = document.querySelector("#field");

const agency = "NYPD";
const brooklyn = "BROOKLYN";
const manhattan = "MANHATTAN";
const queens = "QUEENS";
const bronx = "BRONX";
const statenIsland = "STATEN ISLAND";

// const borough;

let limit = 10;

brooklynButton.addEventListener('click', async () => {
    let input = inputField.value;
    if (input === limit) {
        input = " ";
    }
try{
    let response = await axios.get(`${BASE_URL}resource/erm2-nwe9.json?agency=${agency}&$limit=${input}&borough=${brooklyn}`);
    // console.log(response);
    const result = response.data;
    // console.log(result);

    for (let i = 0; i < limit; i++) {
        let div = document.createElement("div");
        document.querySelector("body").appendChild(div);
        div.innerHTML = result[i].descriptor;
    
        let button1 = document.createElement("button")
        document.querySelector("body").appendChild(button1);
        button1.innerText = "What did the Police Do?";
        button1.innerHTML = button1.innerText;
        
        button1.addEventListener('click', async () => {
            button1.innerHTML = result[i].resolution_description; 
       });  
    } 
} catch (error) {
    console.log(error);
}
})
 
manhattanButton.addEventListener('click', async () => {
    let input = inputField.value;
    if (input === limit) {
        input = " ";
    }

    try {
    let response = await axios.get(`${BASE_URL}resource/erm2-nwe9.json?agency=${agency}&$limit=${input}&borough=${manhattan}`);

    // console.log(response);

    const result = response.data;
    // console.log(result);

    for (let i = 0; i < limit; i++) {
        let div = document.createElement("div");
        document.querySelector("body").appendChild(div);
        div.innerHTML = result[i].descriptor;
    
        let button1 = document.createElement("button")
        document.querySelector("body").appendChild(button1);
        button1.innerText = "What did the Police Do?";
        button1.innerHTML = button1.innerText;
        button1.addEventListener('click', async () => {
            button1.innerHTML = result[i].resolution_description;
        });
    }
} catch (error) {
    console.log(error);
}
})

queensButton.addEventListener('click', async () => {
    let input = inputField.value;
    if (input === limit) {
        input = " ";
    }

    try {
    let response = await axios.get(`${BASE_URL}resource/erm2-nwe9.json?agency=${agency}&$limit=${input}&borough=${queens}`);

    // console.log(response);

    const result = response.data;
    // console.log(result);

    for (let i = 0; i < limit; i++) {
        let div = document.createElement("div");
        document.querySelector("body").appendChild(div);
        div.innerHTML = result[i].descriptor;
    
        let button1 = document.createElement("button")
        document.querySelector("body").appendChild(button1);
        button1.innerText = "What did the Police Do?";
        button1.innerHTML = button1.innerText;
        button1.addEventListener('click', async () => {
            button1.innerHTML = result[i].resolution_description;
        });
    }
} catch (error) {
    console.log(error);
}
})

bronxButton.addEventListener('click', async () => {
    let input = inputField.value;
    if (input === limit) {
        input = " ";
    }

    try{
    let response = await axios.get(`${BASE_URL}resource/erm2-nwe9.json?agency=${agency}&$limit=${input}&borough=${bronx}`);

    // console.log(response);

    const result = response.data;
    // console.log(result);

    for (let i = 0; i < limit; i++) {
        let div = document.createElement("div");
        document.querySelector("body").appendChild(div);
        div.innerHTML = result[i].descriptor;
    
        let button1 = document.createElement("button")
        document.querySelector("body").appendChild(button1);
        button1.innerText = "What did the Police Do?";
        button1.innerHTML = button1.innerText;
        button1.addEventListener('click', async () => {
            button1.innerHTML = result[i].resolution_description;
        });
    }
} catch (error) {
        console.log(error);
    }
})

statenIslandButton.addEventListener('click', async () => {
    let input = inputField.value;
    if (input === limit) {
        input = " ";
    }

    try{
    let response = await axios.get(`${BASE_URL}resource/erm2-nwe9.json?agency=${agency}&$limit=${input}&borough=${statenIsland}`);

    // console.log(response);

    const result = response.data;
    // console.log(result);

    for (let i = 0; i < limit; i++) {
        let div = document.createElement("div");
        document.querySelector("body").appendChild(div);
        div.innerHTML = result[i].descriptor;
    
        let button1 = document.createElement("button")
        document.querySelector("body").appendChild(button1);
        button1.innerText = "What did the Police Do?";
        button1.innerHTML = button1.innerText;
        button1.addEventListener('click', async () => {
            button1.innerHTML = result[i].resolution_description;
        });
    }
} catch (error) {
    console.log(error);
}
})
