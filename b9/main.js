//bai 1:nhap luong nhan vien,tinh thue thu nhap va luong rong
const getsalary =(salary) =>{
    if (salary >= 15000000) {
        console.log('Thuế thu nhập', salary * 0.3)
        console.log('Lương ròng   ', salary * 0.7)
    } else if (salary >= 7000000) {
        console.log('Thuế thu nhập', salary * 0.2)
        console.log('Lương ròng   ', salary * 0.8)
    } else {
        console.log('Thuế thu nhập', salary * 0.1)
        console.log('Lương ròng   ', salary * 0.9)
    }
}
//bai 2:nhap tuoi va in ra dieu kien vao lop 10
const checkAge =(age) =>{
    if(age>=16)console.log('Du dieu kien vao lop 10')
    else console.log('Khong du dieu kien vao lop 10')
}
//bai 3:nhap so nguyen bat ky in ra ket qua kiem tra so do lon hay nho hon 100
const checkNumber=(number)=>{
    if(number==100)console.log('So nay =100')
    else if(number>100)console.log('So nay lon hon 100')
    else  console.log('So nay nho hon 100')
}
//bai 4:Nhap vao 3 so nguyen va tim so lon nhat trong 3 so
const checkMax = (firstNumber,secondNumber,thirdNumber)=>{
    let max = firstNumber
    if (max < secondNumber) {
        max = secondNumber
    }
    if (max < thirdNumber) {
        max = thirdNumber
    }
    console.log('Số lớn nhất là', max)
}
//bai 5:xep hang hoc luc cua hoc sinh
const getRank = (mark1, mark2, mark3) => {
    let mark = (mark1 + mark2 + mark3) / 3;
    if (mark >= 9) {
        console.log('Hạng A')
    } else if (mark >= 7) {
        console.log('Hạng B')
    } else if (mark >= 5) {
        console.log('Hạng C')
    } else {
        console.log('Hạng F')
    }
}
//bai 6:tim nghiem cua pt bac 2
const getEquation = (a, b, c) => {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                console.log('Phương trình có vô số nghiệm')
            } else {
                console.log('Phương trình vô nghiệm')
            }
        } else {
            console.log('Phương trình có nghiệm duy nhất x=', -c / b)
        }
    } else {
        delta = b * b - 4 * a * c;
        if (delta > 0) {
            console.log('Phương trình có 2 nghiệm phân biệt x1 =', (-b + Math.sqrt(delta)) / (2*a), 'và x2 =', (-b - Math.sqrt(delta)) / (2*a))
        } else if (delta == 0) {
            console.log('Phương trình có nghiệm duy nhất x =', -b / (2*a))
        } else {
            console.log('Phương trình vô nghiệm')
        }
    }
}
//bai 7:tinh muc hoa hong theo doanh so ban
const getCommission = (sales) => {
    if (sales <= 100) {
        console.log('Tiền hoa hồng:', sales * 0.05, 'triệu')
    } else if (sales <= 300) {
        console.log('Tiền hoa hồng:', sales * 0.1, 'triệu')
    } else {
        console.log('Tiền hoa hồng:', sales * 0.2, 'triệu')
    }
}
//bai 8:tinh cuoc dien thoai
const getPhone = (minutes) => {
    let money = 25000;
    if (minutes <= 50) {
        money += minutes * 600
    } else if (minutes <= 200) {
        money += 50 * 600 + (minutes - 50) * 400
    } else {
        money += 50 * 600 + 150 * 400 + (minutes - 200) * 200
    }
    console.log('Cước phí phải trả:', money)
}