export default class Cl_Edades {
    constructor() {
        this.acumEdad = 0;
        this.contEdad = 0;
    }

    procesarEdad(p) {
        this.acumEdad += p._edad;
        this.contEdad++;
    }

    promedioEdad() {
        if (this.contEdad == 0) {
            return 0;
        } else if (this.contEdad > 0) {
            return this.acumEdad / this.contEdad;
        }
    }
}