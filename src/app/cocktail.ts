export interface Cocktail {
    name: string;
    glass: string;
    category?: string;
    ingredients:Array<object>;
    garnish?:string;
    preparation?:string;
  }