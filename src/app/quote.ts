export class Quote {
  public showDescription: boolean;
    constructor(public name: string, public description: string, public publishDate:Date){
        this.showDescription = false
    }
}
