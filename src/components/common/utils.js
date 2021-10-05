// export function formatDate(date, fmt) {
//    if (/(y+)/.test(fmt)) {
//      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
//    }
//    let o = {
//     'M+': date.getMonth() + 1,
//     'd+': date.getDate(),
//     'h+': date.getHours(),
//     'm+': date.getMinutes(),
//     's+': date.getSeconds()
//    };
//    for (let k in o) {
//     if (new RegExp('(${k})').test(fmt)) {
//       let str = o[k] + '';
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
//      }
//    }
//    return fmt;
// };

// function padLeftZero(str) {
//   return ('00' + str).substr(str.length);
// };


// export function now(){
  
//    var  date =  new  Date();
//    var  seperator1 =  "-" ;
//    var  year = date.getFullYear();
//    var  month = date.getMonth() + 1;
//    var  strDate = date.getDate();
//    if  (month >= 1 && month <= 9) {
//      month =  "0"  + month;
//    }
//    if  (strDate >= 0 && strDate <= 9) {
//      strDate =  "0"  + strDate;
//    }
//    var  currentdate = year + seperator1 + month + seperator1 + strDate;
//    return  currentdate;

// }