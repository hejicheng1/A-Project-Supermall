import { request } from "./network";


export function getDatail(iid){
          return request({
              url:"/detail",
              params:{
                  iid
              }
          })
}
// es6的新用法 数据杂多才用  少用
export class Goods{
    constructor(itemInfo,columns,services){
        
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount =itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
        this.discountBgColor = itemInfo.discountBgColor;
    }

}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}


export class GoodsParam{
    constructor(info,rule){
        this.image = info.images ? info.images[0] : "";
        this.image = this.set;
        this.sizes = rule.tables;
    }
}