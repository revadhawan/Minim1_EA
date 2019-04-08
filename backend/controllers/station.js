const Station = require('../models/station')
const Bike = require('../models/bike')

const stationCtrl = {}

//CREATE STATION
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

//ADD BIKE TO A STATION
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
stationCtrl.getStationBikeDetail = async (req, res) => {
    try {
        const _id = req.params.stationId;

        let station = await Station.findById(_id).populate('bike');
        if(!station){
            return res.status(404).send({message: 'Station not found'})
        }else{
            res.status(200).send(station)
        }
    } catch(err) {
        res.status(500).send(err)
    }
}


//GET BIKES
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

//POST STATION BIKE
stationCtrl.postStationBike = async (req, res) => {
    try{
        const bikeId = req.body.bikeId;
        const stationId = req.body.stationId;

        console.log(`StationID: ${stationId}, BikeID: ${bikeId}`);

        let bikeFound = await Bike.findById(bikeId);

        if (!bikeFound) {
            return res.status(404).send({message: 'Bike not found'})
        } else if (bikeFound.assigned === true) {
            return res.status(500).send({message: 'Bike is assigned to another station'})
        }
        else {
            let stationUpdated = await Station.findByIdAndUpdate({_id: stationId}, {$addToSet: {bike: bikeId}});
            if (!stationUpdated) {
                return res.status(404).send({message: 'Station not found'})
            }
            let bikeUpdated = await Bike.findByIdAndUpdate({_id: bikeId}, {assigned: true});
            console.log(bikeUpdated);
        }
        res.status(200).send({message: "Bike added successfully to the station"})
        } catch(err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                res.status(409).send({err: err.message, code: err.code})
            }
            res.status(500).send(err)
        }
    }


module.exports = stationCtrl;