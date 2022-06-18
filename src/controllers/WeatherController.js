let axios = require("axios")

 
let getWeather = async function (req, res) {
    try {
        let place = req.query.q
        let key = req.query.appid
        console.log(`query params are: ${place} ${key}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: `temp: ${result.data.main.temp}K` })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObject=[ ]
        for (i=0; i<cities.length; i++){
            let obj={city:cities[i]} 
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=005d1db032f73466a7dffd639c7310ae`
            }
            let result = await axios(options)
            console.log(result.data.main.temp)
            obj.temp=result.data.main.temp
            cityObject.push(obj)
        }
        let sorted =cityObject.sort( function(a,b){return a.temp-b.temp} )
        console.log(sorted)

        res.status(200).send({ status: true, data:sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let createMeme = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        console.log(`query params are: ${template_id} ${text0} ${text1} ${username} ${password}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
} 



module.exports.getWeather = getWeather
module.exports.getSortedCities = getSortedCities
module.exports.createMeme = createMeme
