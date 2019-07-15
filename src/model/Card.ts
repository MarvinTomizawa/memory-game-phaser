import Position from "./Position";

export default class Card{
    private _value:number;

    private _position: Position;

    constructor(value, position){
        this._value = value;
        this._position = position;
    }

    get value(){
        return this._value;
    }

    get x(){
        return this._position.x;
    }

    get y(){
        return this._position.y;
    }
}