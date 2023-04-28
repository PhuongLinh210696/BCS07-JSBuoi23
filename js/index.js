// Bai tap 1 tinh so luong nhan vien
// Input: so ngay nhan vien lam
//Thuat toan: b1: tao mot bien cho soNgay
//            b2: tao bien tongLuong
//            b3: su dung cong thuc tinh luong tongLuong = soNgay * 100000
//            b4: in ra so Trung binh
//Output: tien luong

function tinhTienLuong() {
    // nơi xử lí dữ liệu nhận vào
    // B1: lấy dữ liệu người dùng nhập
    var tongSoNgay = +document.getElementById("tongNgay").value;
    // B2: xử lí tính toán
    var tienLuong = tongSoNgay * 100000;
    var quyDoiNgoaiTe = tienLuong.toLocaleString("vn-VN", {
      style: "currency",
      currency: "VND",
    });
  
    // B3 xuất kết quả ra cho người dùng

    document.getElementById("hienThiTienLuong").innerHTML =
    "<div>" + quyDoiNgoaiTe + "</div>";
    
}
document.querySelector(".container .btn-danger").onclick = tinhTienLuong;

////////////////////////////////////////////
// Bai tap 2 trung binh 5 so thuc
// Input: nhap 5 so thuc
//Thuat toan: b1: tao 5 bien so thuc number 1, number2, number3, number4, number5
//            b2: tao bien result
//            b3: su dung cong thuc trung binh result = (number1 + number2 +number3 +number4+number5) /5
//            b4: in ra so Tien Luong
//Output: tien luong
function tinhTrungBinh() {
    // nơi xử lí dữ liệu nhận vào
    // B1: lấy dữ liệu người dùng nhập
    var number1 = +document.getElementById("so1").value;
    var number2 = +document.getElementById("so2").value;
    var number3 = +document.getElementById("so3").value;
    var number4 = +document.getElementById("so4").value;
    var number5 = +document.getElementById("so5").value;
    // B2: xử lí trung binh
    var result = (number1 + number2 + number3 + number4 +number5)/5;
  
    // B3 xuất kết quả ra cho người dùng

    document.getElementById("hienThiTrungBinh").innerHTML =
    "<div>" + result + "</div>";
    
}
document.getElementById("trungBinh").onclick = tinhTrungBinh;

///////////////////////////////////////////
// Bai tap 3 quy doi tien
// Input: nhap so tien USD
//Thuat toan: b1: tao bien usd 
//            b2: tao bien result
//            b3: su dung cong thuc doi tien result = usd * 235000
//            b4: in ra so Tien Quy Doi
//Output: tien luong
function quyDoiTien() {
    // nơi xử lí dữ liệu nhận vào
    // B1: lấy dữ liệu người dùng nhập
    var usd = +document.getElementById("soTienUSD").value;
    // B2: xử lí trung binh
    var result = usd * 23500;
  
    // B3 xuất kết quả ra cho người dùng

    document.getElementById("hienThiQuyDoi").innerHTML =
    "<div>" + result +"VND" + "</div>";
    
}
document.getElementById("quyDoi").onclick = quyDoiTien;

//////////////////////////////////////////
// Bai tap 4 chu vi dien tich hinh chu nhat
// Input: nhap chieu dai, chieu rong
//Thuat toan: b1: tao bien a luu chieu dai, b luu chieu rong
//            b2: tao bien P luu chu vi, S luu dien tich
//            b3: su dung cong thuc tinh P = (a+b)*2;S=a*b;
//            b4: in ra P,S
//Output: P, S
function chuViDienTich() {
    // nơi xử lí dữ liệu nhận vào
    // B1: lấy dữ liệu người dùng nhập
    var a = +document.getElementById("chieuDai").value;
    var b = +document.getElementById("chieuRong").value;
    // B2: xử lí chu vi dien tich
    var P = (a+b)*2;
    var S = a*b;
    // B3 xuất kết quả ra cho người dùng

    document.getElementById("hienThiKetQua").innerHTML =
    "<div>" + "Chu vi: " +P  + "<br>" + "Diện tích: " + S + "</div>";
    
}
document.getElementById("ketQua").onclick = chuViDienTich;

//////////////////////////////////////////
// Bai tap 5 tong 2 ky so
// Input: nhap so co 2 chu so
//Thuat toan: b1: tao bien a luu so 2 chu so, b luu hang chuc, c luu hang don vi
//            b2: tao bien result luu ket qua
//            b3: su dung cong thuc tinh result = a + b;
//            b4: in ra result
//Output: Tong 2 ky so
function tongHaiKySo() {
    // nơi xử lí dữ liệu nhận vào
    // B1: lấy dữ liệu người dùng nhập
    var a = +document.getElementById("number").value;
    var b = Math.floor( a/10);
    var c = Math.floor(a%10);
    // B2: xử lí chu vi dien tich
    var result = b+c;
    // B3 xuất kết quả ra cho người dùng

    document.getElementById("hienThiHaiKySo").innerHTML =
    "<div>" + result + "</div>";
    
}
document.getElementById("ketQuaHaiKySo").onclick = tongHaiKySo;
