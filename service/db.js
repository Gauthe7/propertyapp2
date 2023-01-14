// ...........server mdb intergration...........................//

//   Steps  //

//1. import mangoose

// const { default: mongoose } = require('mongoose')
const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')


//2. state connection string via mangoose

mangoose.connect('mongodb://localhost:27017/propertylisting', { useNewUrlParser: true })

const Propertie = mongoose.model('Propertie', {
    id:Number,
    title: String,
    price: Number,
    location: String,
    details:String

})

module.exports={

    Propertie
}