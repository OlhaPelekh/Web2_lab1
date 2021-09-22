module.exports = {
    Passenger: class Passenger {
        constructor(name, passport_id) {
            this.currId = Passenger.id++
            this.name = name
            //this.passport_id = passport_id
        }
    },

    Ticket: class Ticket {
        constructor(name, price) {
            this.currId = Ticket.id++
            this.name = name
            //this.price = price
        }
    },

    Train: class Train {
        constructor(name, route, number) {
            this.currId = Train.id++
            this.name = name
            //this.route = route
            //this.number = number
        }
    },

    TicketSold: class TicketSold {
        constructor(passengerId, trainId, ticketId, date) {
            this.currId = TicketSold.id++
            this.passengerId = passengerId
            this.trainId = trainId
            this.ticketId = ticketId
            //this.date = date
        }
    },

    add: function add(element, collection) {

        let currId = element.currId

        function equalid(element) {
            return element.currId == currId
        }

        let index = collection.findIndex(equalid)

        if (index == -1)
            collection.push(element)
        return collection
    },

    edit: function edit(id, collection, editName) {

        function equalid(element) {
            return element.currId == id
        }

        let index = collection.findIndex(equalid)

        if (index != -1)
            collection[index].name = editName
        return collection
    },

    remove: function remove(id, collection) {

        function equalId(element) {
            return element.currId == id
        }

        let index = collection.findIndex(equalId)

        if (index != -1)
            collection.splice(index, 1)
        return collection
    },


    find: function find(fullname, collection) {

        function equalName(element) {
            return element.fullname == fullname
        }

        let index = collection.find(equalName)

        if (index != -1){
            return collection[index]}
            else{
        return null}
    },

    purchaseTicketByPassenger: function purchaseTicketByPassenger(passenger, train, ticket, travel, ticketSoldCollection) {
        let element = new travel(passenger.name, train.name, ticket.name)
        ticketSoldCollection.push(element)
    },

    changeTicketFromTrainToTrain: function changeTicketFromTrainToTrain(ticket, newTrain, ticketSoldCollection) {
        let currId = ticket.currId
        function equalId(element) {
            return element.ticketId == currId
        }
        let index = ticketSoldCollection.findIndex(equalId)
        if (index != -1)
        ticketSoldCollection[index].trainId = newTrain.currId
    },
}