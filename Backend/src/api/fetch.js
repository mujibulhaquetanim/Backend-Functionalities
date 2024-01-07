import axios from "axios";

async function fetch(){
    await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response=> response.json())
    .then(data=>console.log(data))
    .catch(error=> console.error(error));
}

module.exports = fetch;