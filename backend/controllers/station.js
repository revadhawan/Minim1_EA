const Station = require('../models/station')
const Bike = require('../models/bike')

const stationCtrl = {}

//post STATION
stationCtrl.postStation = async (req, res) => {
    const station = new Station({
        name: req.body.name,
        state: req.body.state,
        description: req.body.description
    })
    console.log(station);

    try {
        await station.save();
        res.status(200).send({message: "New station added"}, )
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

//GET STATIONS
stationCtrl.getStations = async (req, res) => {
    const station = await Station.find()
    res.json(station)
}

//ADD BIKE TO AN STATION
stationCtrl.addBike = async (req, res) => {
    const stationID = req.body.stationID
    const bikeID = req.body.bikeID

    console.log(stationID)
    console.log(bikeID)

    let stationUpdated = await Station.findOneAndUpdate({_id: stationID}, {$addToSet: {bike: bikeID}});
    console.log(stationUpdated);

    res.status(200).send({message: "Bike added"})
}

//GET STATION DETAILS
stationCtrl.getStationDetail = async (req, res) => {
    console.log(req.params.id);
    const station = await Station.findById(req.params.id);
    res.json(station);
}


//GET STATION DETAILS
stationCtrl.getBikes = async (req, res) => {
    try {
        let station = await Station.findById(req.params.id).populate('bike');
        if(!station){
            return res.status(404).send({message: 'Station not found'})
        }else{
            //res.status(200).send(station)
            res.status(200).send(station.bike)
        }
    } catch(err) {
        res.status(500).send(err)
    }
}


module.exports = stationCtrl;