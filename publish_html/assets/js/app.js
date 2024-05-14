// Ham kiem tra so nguyen duong
function checkPositiveIntergers(value) {
    if (Number.isInteger(value) && value < 0) { // Neu la so nguyen am
        return 'Day la so nguyen am'
    } else if (Number.isInteger(value) && value > 0) { // Neu la so nguyen duong
        return 'Day la so nguyen duong'
    }
    else { // Neu nhap gia tri ko phai la kieu so
        return 'Gia tri nhap vao ko dung'
    }
}

var a = '1';
console.log(checkPositiveIntergers(a))


// Hàm tính tổng của các số trong mảng
function sum(value) {

    if (Array.isArray(value)) {
        // Cach 1:
        // Loại bỏ các phần tử ko phải là 1 số nguyên dương
        const filteredArray = value.filter(function (item) {
            return typeof item === 'number' && item > 0;
        });

        // Sau đó mới tính toán
        let total = 0;
        for (let i = 0; i < filteredArray.length; i++) {
            total += filteredArray[i]
        }


        // Cach 2:
        // let total = 0;
        // for (let i = 0; i < value.length; i++) {
        //     if (Number.isInteger(value[i]) && value[i] > 0) {
        //         total += value[i]
        //     }
        // }

        return total

    } else {
        console.log('Đầu vào ko phải là 1 mảng.')
    }
}

console.log(sum([1, '2', 'aa', 2, -1]))



// Danh sách các phần tử
var numbers = [1, 2, 3, 43, -5];

// Lấy giá trị lớn nhất và nhỏ nhất
var maxValue = Math.max(...numbers);
var minValue = Math.min(...numbers);

// In giá trị ra màn hình
document.write("Giá trị lớn nhất là " + maxValue + "<br/>");
document.write("Giá trị nhỏ nhất là " + minValue + "<br/>");
