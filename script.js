let 今天= new Date();
今天.setHours(0,0,0,0);
let 表演日期 = new Date(2026,7,8);

let 相差天数 = (表演日期 - 今天) / (1000 * 60 * 60  * 24);
document.getElementById("倒数").textContent =  "距离开始还有" + 相差天数 + "天";
