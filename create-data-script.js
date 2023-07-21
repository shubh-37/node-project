const axios = require('axios');

async function fetchData(){
    const allData = await axios('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    console.log(allData);
}

fetchData();