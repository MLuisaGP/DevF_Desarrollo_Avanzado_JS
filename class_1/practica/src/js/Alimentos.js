
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