export default class Cl_Persona {
    constructor(ed) {
        this.edad = ed;
    }

    set edad(ed) {
        this._edad = ed;
    }

    get edad() {
        return this._edad;
    }
}