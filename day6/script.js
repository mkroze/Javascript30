const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];
fetch(endpoint)
.then(blob=>blob.json())
.then(data => cities.push(...data));
//console.table(cities);

function findMatches(word,cities){
    return cities.filter(place => {
        const regex = RegExp(word,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}
function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
  }
function displayMatches(){
    console.log(this.value);
    const matchArray = findMatches(this.value,cities);
    console.log(matchArray);
    const html=matchArray.map(place=>{
        const regex = RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        return `<li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>`;
    });
    document
        .querySelector(".suggestions")
        .innerHTML = html.join('');
}
document
    .getElementsByClassName('search')[0]
    .addEventListener('change',displayMatches);
document
    .getElementsByClassName('search')[0]
    .addEventListener('keyup',displayMatches);