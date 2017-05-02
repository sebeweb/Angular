export class OrderRow {
  constructor(
    public title:string,
    public author:string,
    public price:number,
    public quantity: number
  ){  }

  amount(){
    return this.price * this.quantity;
  }

}
