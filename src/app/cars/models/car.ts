// export class Car {
//     constructor(public brand:string, public model:string) {
//     }
// }

export class Car {
    public id:number;
    public name:string;
    public niceName:string;
    public models:any;

    constructor(private data) {
      this.id = data.id;
      this.name = data.name;
      this.niceName = data.niceName;
      this.models = data.models;
    }

    getID():number {
      return this.id;
    }

    getModels(){
      return this.models;
    }

    getCar(){
      return this;
    }
}
