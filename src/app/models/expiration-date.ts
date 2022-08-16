export class ExpirationDate {
   private _month:string ="";
    private _year:string ="";
    private  _cvc:string ="";

    public get month(){
        return this._month;
    }
    public set month(m:string) {
        this._month = m;
    }

    public get year(){
        return this._year;
    }
    public set year(y:string) {
        this._year = y;
    }

    public get cvc(){
        return this._cvc;
    }
    public set cvc(c:string) {
        this._cvc = c;
    }
}
