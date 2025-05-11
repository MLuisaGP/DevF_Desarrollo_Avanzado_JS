
export class Alimento{
    constructor(label, icono, timeMs, category){
        this.id = crypto.randomUUID();
        this.label = label;
        this.icono = icono;
        this.time = timeMs;
        this.category = category;
        this.cantidad = 0;
    }
    getContainer(){
        return `menu${this.category}`
    }
    reset(){
        this.cantidad = 0;
    }
}

export const listaAlimentos = [
    new Alimento('Pizza', "fa-solid fa-pizza-slice", 9000, "Main"),
    new Alimento('Pollo', "fa-solid fa-drumstick-bite", 4000, "Main"),
    new Alimento('Hamburgesa', "fa-solid fa-burger", 3500, "Main"),
    new Alimento('Ensalada', 'fa-solid fa-bowl-food', 4000, "Starters"),
    new Alimento('Chiles Torreados', 'fa-solid fa-pepper-hot', 7500, "Starters"),
    new Alimento('Arroz', 'fa-solid fa-bowl-rice', 3000, "Starters"),
    new Alimento('Cupcake', 'fa-solid fa-bread-slice', 5000, "Deserts"),
    new Alimento('Pastel', 'fa-solid fa-cake-candles', 2000, "Deserts"),
    new Alimento('Cafe', "fa-solid fa-mug-saucer", 3000, "Drinks"),
    new Alimento('Agua', "fa-solid fa-bottle-water", 3000, "Drinks"),
];