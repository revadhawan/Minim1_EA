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

//GET ALL BIKES
bikeCtrl.getBikes = async (req, res) => {
    const bikes = await Bike.find()
    res.json(bikes)
}

//DELETE A BIKE
bikeCtrl.deleteBike = async (req,res) => {
    const bike = await Bike.findById(req.params.id);
    console.log(req.params.id);
    console.log(bike.state)

    let bikeUpdated = Bike.findOneAndReplace({_id: bike._id}, {state: true, new: false})
         
    res.status(200).send({message: "Eliminado"})
    console.log(bike.state)
}


module.exports = bikeCtrl