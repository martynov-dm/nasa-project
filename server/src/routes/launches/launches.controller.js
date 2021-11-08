const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
    const launch = req.body

    launch.launchDate = new Date(launch.launchDate)

    const launchFromDB = addNewLaunch(launch)
    return res.status(201).json(launchFromDB)
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}
