export enum SortValueEnum{
   NAME_DESC = 'name',
   NAME_ASC = '-name',
   PRICE_DESC = 'price',
   PRICE_ASC = '-price',
  }
export interface RateList {
   name:string,
   sortValue:SortValueEnum,
}
export const ratingList:RateList[] = [
   {name:'name(ASC)',sortValue:SortValueEnum.NAME_ASC},
   {name:'name(DESC)',sortValue:SortValueEnum.NAME_DESC},
   {name:'price(ASC)',sortValue:SortValueEnum.PRICE_ASC},
   {name:'price(DESC)',sortValue:SortValueEnum.PRICE_DESC},
]

