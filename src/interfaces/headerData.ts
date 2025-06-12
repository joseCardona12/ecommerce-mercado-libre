export interface ISubcategory {
  name: string;
}

export interface IHeaderData {
  name: string;
  categories?: ISubcategory[];
}
