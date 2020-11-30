const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/SolarSystemsDB', { useNewUrlParser: true })

const solarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    starName: String
})

const planetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'solarSystem' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const visitorsSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const solarSystem = mongoose.model("Solar System", solarSystemSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorsSchema)

let s1 = new solarSystem({
    starName: "TRI-SOLAR",
    planets: []
})

let p1 = new Planet({
    name: "Earth",
    system: s1,
    visitors: []
})

let v1 = new Visitor({
    name: "Haha,nice one",
    homePlanet: p1,
    visitedPlanets: []
})

// s1.planets.push(p1)
// p1.visitors.push(v1)
// v1.visitedPlanets.push(p1)

// s1.save()
// p1.save()
// v1.save()


Visitor.findOne({}).populate("visitedPlanets").exec(function (err, visitor) {
    visitor.visitedPlanets.forEach(v => console.log(v.name))
})

Planet.findOne({}).populate("visitors").exec(function (err, planet) {
    planet.visitors.forEach(v => console.log(v.name))
})

solarSystem.findOne({})
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors'
        }
    })
    .exec(function (err, solarSystem) {
        for (let planet of solarSystem.planets) {
            planet.visitors.forEach(v => console.log(v.name))
        }
    })