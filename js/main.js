// Bài 1: Tính lương nhân viên làm việc

// B1: Input
// lương 1 ngày: 100000
// số ngày làm

// B2: xử lí
// lương = lương 1 ngày * số ngày làm

// B3: output 
// tiền lương

document.getElementById('totalSalary').onclick = function(){
    var dayWork = +document.getElementById('dayWork').value;
    const SALARY1HOUR = 100000;
    var totalSalary = dayWork * SALARY1HOUR;
    document.getElementById('result1').innerHTML=`Tiền lương của bạn là ${totalSalary}`;
}

//----------------------------------------------------------------------
// Bài 2: Tính giá trị trung bình của 5 số 5, 10, 15, 20, 25

//  B1: Input
//  nhập 5 số thực

//  B2: xử lí
//   trung bình= (5+10+15+20+25)/5;

//  B3: Output 
//  xuất giá trị trung bình
document.getElementById('averaged').onclick = function(){
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var number4 = +document.getElementById('number4').value;
    var number5 = +document.getElementById('number5').value;
    var averaged = (number1 + number2 + number3 + number4 + number5)/5;
    document.getElementById('result2').innerHTML = `Trung bình của 5 số thực là ${averaged}`;
}
//----------------------------------------------------------------------
// Bài 3: Quy đổi USD sang VND
// B1: Input
// Nhập giá tiền USD

// B2: Xử lí
// GiáVND = giá USD * 23500

// B3: Output
// Xuât ra màn hình giá trị VND
function change(){
    var USD = +document.getElementById('USD').value;
    var toVND = 23500;
    var change = USD * toVND;
    document.getElementById('result3').innerHTML = `${USD} USD bằng ${change} VND`;
}
//----------------------------------------------------------------------
//Bài 4: Tính chu vi và diện tích hình chữ nhật với chiều dài = 10, chiều rộng = 7

//B1: Input
//chieu dai = 10, chieu rong = 7

//B2: Xử lí
//Chuvi = (dài + rộng)*2
//dien tich = dài * rộng

//B3: Output
//Xuất ra màn hình kết quả chu vi và diện tích hình chữ nhật
function calculate(){
    var length = +document.getElementById('length').value;
    var width = +document.getElementById('width').value;
    var acreage = length * width;
    var perimeter = (length + width)*2;
    document.getElementById('result4').innerHTML=`Chu vi  là ${perimeter}, Diện tích  là ${acreage}`;
}
//----------------------------------------------------------------------
//Bài 5: Tính tổng 2 ký số của số n

//B1: Input
//n=83 2 ký số 83= 8+3

//B2: Xử lí
//hàng đơn vị = n%10
//hàng chục = n/10
//tong 2 ký số = đơn vị + chục

//B3: Output
//xuất ra giá trị tổng 2 ký số
function sum(){
    var int = +document.getElementById('int').value;
    var unit = int%10;
    var dozens = int/10;
    var sum = unit + dozens;
    document.getElementById('result5').innerHTML = `Tổng 2 ký số là ${sum} `;
}