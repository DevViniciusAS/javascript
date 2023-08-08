// async & await

async function getCoinDate() {
    try {
        const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates')
        const json = await data.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
    
    
}

getCoinDate()