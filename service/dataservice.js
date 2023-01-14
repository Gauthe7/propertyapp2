
const db = require('./db.js')

addlisting = (id, title, price, location, details) => {

    var id = parseInt(id)
    var price = parseInt(price)
    return db.Propertie.findOne({ id }).then(res => {
        if (res) {
            return {
                message: "property already added"

            }
        }
        else {
            const newproperty = new db.Propertie({
                id,
                title,
                price,
                location,
                details

            })

            newproperty.save();
            return {
                message: "successfully added"
            }

        }
    })
}

loadproperty = () => {

    return db.Propertie.find().then(res => {
        if (res) {
            return {
                message: res
            }


        }

        else {
            return {
                message: "no property listed"

            }
        }

    })
}


deleteprop=(id)=>{

    return db.Propertie.deleteOne({ id }).then(res => {
        if (res) {

            return {
                message: "deleted"
            }
        }
        else {
            return {
                message: "no such property"
            }
        }
    })
}

module.exports = {
    addlisting, loadproperty, deleteprop
}