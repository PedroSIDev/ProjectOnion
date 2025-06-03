class Vehicle {
    constructor({ id, brand, model, year, plate, color, ownerId }) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
        this.color = color;
        this.ownerId = ownerId;
    }
}

module.exports = Vehicle;