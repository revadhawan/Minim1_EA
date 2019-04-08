'use strict'

const express = require('express')
const stationCtrl = require('../controllers/station')
const bikeCtrl = require('../controllers/bike')
const api = express.Router()


//POST
api.post('/stations', stationCtrl.postStation)
api.post('/bikes', bikeCtrl.postBike)
api.post('/stations/addbike/:bikeID', stationCtrl.postStationBike)

//GET
api.get('/stations', stationCtrl.getStations)
api.get('/stations/bikedetail/:stationId', stationCtrl.getStationBikeDetail);
api.get('/bikes/available', bikeCtrl.getAvailableBikes)
api.get('/bikes/unavailable', bikeCtrl.getUnavailableBikes)

//PUT
api.put('/stations/:stationID/deletebike/:bikeID', stationCtrl.addBike)


module.exports = api