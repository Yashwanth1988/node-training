class Marker {
    constructor(make, color) {
        this.make = make;
        this.color = color
    }
    write() {
        console.log(this.make);
        console.log(this.color)
    }
}

const bm = new Marker('Camlin', 'Black')
bm.write()