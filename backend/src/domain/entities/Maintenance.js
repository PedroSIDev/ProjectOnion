class Maintenance {
    constructor({ id, description, date, cost, mechanicId }) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.cost = cost;
        this.mechanicId = mechanicId;
    }
}

module.exports = Maintenance;