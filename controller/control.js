const dataBase = require("../model/model")
const axios = require("axios")

const API_KEY = "9006d799a90b4cb8a00a99831d5a796b"

const API = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`





exports.createUser = async (req,res)=>{
    try {
        const user = req.body

        const Details = dataBase({
            Name: user.name,
            Age: user.age,
            sex: user.sex,
        })

       const loc = await axios.get(API).then((location)=>{
            return location.data
        }).catch((e)=>{
            return e.message
        })
        const {ip, country_name, city, latitude, longitude} = loc

        const createdUser = await new dataBase(Details)

        createdUser.location = {ip, country_name, city, latitude, longitude} 

        await createdUser.save()
        
        if (createdUser) {
            res.status(201).json({
                message: "user created",
                data: createdUser
            })
        } else {
            res.status(400).json({
                message: "error creating",
                data: createdUser
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.homePage = (req,res)=>{
    res.send("welcome to my API")
}