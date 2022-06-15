
const totalCases = document.getElementById('cases');
const totalDeath = document.getElementById('deaths');
const totalRecovery = document.getElementById('recovered');
const todayCase = document.getElementById('today-cases');
const todayDeath = document.getElementById('today-deaths');


const covidUrl = 'https://disease.sh/v3/covid-19/countries/Kenya';

fetch(covidUrl).then(response => response.json()).
then(result => {
    let cases = result.cases;
    let deaths = result.deaths;
    let recovered = result.recovered;
    let todayCases = result.todayCases;
    let todayDeaths = result.todayDeaths;
    

    totalCases.innerText = ` ${cases}`;
    totalDeath.innerText = ` ${deaths}`;
    totalRecovery.innerText = `${recovered}`;
    todayCase.innerText = ` ${todayCases}`;
    todayDeath.innerText = ` ${todayDeaths}`; 
});


