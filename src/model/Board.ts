import Position from "./Position";
import Phaser from "phaser";

export default class Board{
    
    private _positions = Array<Position>(18);

    constructor(){
        this._positions.push(new Position(50, 100));
        this._positions.push(new Position(150, 100));
        this._positions.push(new Position(250, 100));
        this._positions.push(new Position(350, 100));
        this._positions.push(new Position(450, 100));
        this._positions.push(new Position(550, 100));
        this._positions.push(new Position(50, 230));
        this._positions.push(new Position(150, 230));
        this._positions.push(new Position(250, 230));
        this._positions.push(new Position(350, 230));
        this._positions.push(new Position(450, 230));
        this._positions.push(new Position(550, 230));
        this._positions.push(new Position(550, 360));
        this._positions.push(new Position(150, 360));
        this._positions.push(new Position(250, 360));
        this._positions.push(new Position(350, 360));
        this._positions.push(new Position(450, 360));
        this._positions.push(new Position(550, 360));
    }

    popRandomPosition(){
        let randomIndex = Phaser.Math.Between(0, this._positions.length);
        return this._positions.splice(randomIndex, 1);
    }

    get isEmpty(){
        return !(this._positions.length > 0);
    }
}