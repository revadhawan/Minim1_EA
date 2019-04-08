'use strict'

const express = require('express')
const stationCtrl = require('../controllers/station')
const bikeCtrl = require('../controllers/bike')
const api = express.Router()


//POST
api.post('/stations', stationCtrl.postStation)
api.post('/bikes', bikeCtrl.postBike)

//GET
api.get('/stations', stationCtrl.getStations);
api.get('/stations/:id', stationCtrl.getStationDetail);
api.get('/stations/bikedetail/:id', stationCtrl.getBikes);
api.get('/bikes', bikeCtrl.getBikes);

//PUT
api.put('/stations', stationCtrl.addBike);
api.put('/stations/bikedetail/:id', bikeCtrl.deleteBike);

module.exports = api