const Station = require('../models/station')
const Bike = require('../models/bike')

const bikeCtrl = {}

//post BIKE
bikeCtrl.postBike = async (req, res) => {
    const bike = new Bike()
    console.log(bike)
    bike.name = req.body.name,
    bike.kms = req.body.kms,
    bike.state = req.body.state,
    bike.description = req.body.description
    console.log(bike)

    try {
        await bike.save()
        res.status(200).send({message: "bike posted successfully"})
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
}

//GET AVAILABLE BIKES
bikeCtrl.getAvailableBikes = async (req, res) => {
    const bikes = await Bike.find()
    res.json(bikes)
}

//GET UNAVAILABLE BIKES
bikeCtrl.getUnavailableBikes = async (req, res) => {
    const bikes = await Bike.find({state: false})
    res.json(bikes)
}

module.exports = bikeCtrl