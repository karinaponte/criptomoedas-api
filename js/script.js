 //My api key
 var apikey = {
    key: 'SUA API KEY AQUI:)' // gerar API KEY no https://pro.coinmarketcap.com/account
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    
    var texto = "";
    // Get 10 coins and symbols 
    for(let i = 0; i < 10; i++){

        
        //Show API information
        
        const options = { year: "numeric", month: "long", day: "numeric"};   
        const date = new Date(`${api.data[i].first_historical_data}`) 
        texto = texto + `
      
        <div class="media">
            <img src="img/coin.jpg" class="align-self-center mr-3 pb-3" alt="coin" width="90">
            <div class="media-body pb-2">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol} ${date.toLocaleDateString("pt-br", options)}</p>
            </div>
        </div>
   
        `;

        document.getElementById("coins").innerHTML = texto;
        
    }
})
.catch((error) => {
    console.error(error.message);
});