export class Quote {
  public showDescription: boolean;
    constructor(public id:number,public description: string, public name: string,  public publishDate:Date){
        this.showDescription = false
    }
}
