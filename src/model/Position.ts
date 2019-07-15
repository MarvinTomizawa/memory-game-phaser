export default class Position{
    private _xPosition: number;
    private _yPosition: number;

    constructor(xPosition: number, yPosition: number){
        this._xPosition = xPosition;
        this._yPosition = yPosition;
    }

    get x(){
        return this._xPosition;
    }

    get y(){
        return this._yPosition;
    }
}