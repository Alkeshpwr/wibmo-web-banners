let currentDate = new Date();
let yesterday = new Date();


export function getFromTime() {
     if (localStorage.getItem("timeZone") == "PH") {
        var philTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Manila"});
        return new Date(philTime).toTimeString().split(' ')[0]
    } else {
        var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
        return new Date(indiaTime).toTimeString().split(' ')[0]
    }
}


export const globalData = {
    queryLimit:11,
    today: currentDate,
    yesterday: new Date(yesterday.setDate(yesterday.getDate() - 1)), 
    month:("0" + (currentDate.getMonth() + 1)).slice(-2),
    fromMonth:("0" + (currentDate.getMonth()+ 1)).slice(-2),
    toMonth:("0" + (currentDate.getMonth()+ 2)).slice(-2),
    year: currentDate.getFullYear(),
    fromDay:("0" + (currentDate.getDate() - 1)).slice(-2),
    toDay: ("0" + currentDate.getDate()).slice(-2),
    fromDayTime: getFromTime(),
    toDayTime: getFromTime(),
    dashboardPermission:'8009',
    fullMonths : ['January','Febrauary','March','April','May','June','July','August','September','October',"November","December"],
     scrollConfig:{
      position: 'right',// left | right
      barBackground: '#fff', // #C9C9C9
      barOpacity: '1', // 0.8
      barWidth: '6', // 10
      barBorderRadius: '10', // 20
      barMargin: '4px', // 0
      gridBackground: '#fff',// #D9D9D9
      gridOpacity: '1', // 1
      gridWidth: '2', // 2
      gridBorderRadius :'10', // 20
      gridMargin : '6px', // 0
      alwaysVisible: true ,// true
      visibleTimeout : 1000, // 1000
     }

     

}


 