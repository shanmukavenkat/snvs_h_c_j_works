function Ticket(name, seatNumber) {
    this.name = name;
    this.seatNumber = seatNumber;
    this.getSeatNumber = function() {
        return this.seatNumber;
    };
}

Ticket.prototype.getCustomerName = function() {
    return this.name;
};

const ticket = new Ticket("Max", 39);
console.log(Object.getOwnPropertyNames(ticket));
