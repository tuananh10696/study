// // // // Bai tap 1
// // // function checkInterger(number) {
// // //     // kiem tra so nguyen duong

// // //     if(Number.isInteger(number) && number > 0){
// // //         console.log('Day la so nguyen duong')

// // //     } 
// // //     // kiem tra so nguyen am
// // //     else if(Number.isInteger(number) && number < 0) {
// // //         console.log('day la so nguyen am')
// // //     }

// // //     else {
// // //         console.log('day khong phai so nguyen duong va so nguyen am')
// // //     }

// // // }

// // // checkInterger(-6) 
// // // checkInterger(5) 
// // // checkInterger('hoang quyet') 








// // // Bai tap 2
// // // function sum(arr){
// // //     var arrLength = arr.length
// // //     var sumAray = 0
// // //     for(var i = 0; i < arrLength;i++){
// // //         if(Number.isInteger(arr[i]) && arr[i] > 0){
// // //             sumAray = sumAray + arr[i]
// // //         } else sumAray = sumAray
// // //     }
// // //     console.log(sumAray)
// // //     return sumAray

// // // }
// // // sum([2,3,-5,7,'d'])








// // // Bai tap 3
// // // function array(arr) {
// // //     var arrLength = arr.length
// // //     var max = arr[0]
// // //     var min = arr[0]
// // //     for (var i = 1; i < arrLength; i++) {
// // //         // tim so lon nhat
// // //         if (arr[i] > max) {
// // //             max = arr[i]

// // //         }
// // //     }
// // //     // tim so nho nhat
// // //     if (arr[i] < min) {
// // //         min = arr[i]
// // //     }


// // //     console.log(max)
// // //     console.log(min)
// // // }

// // // array([4, 5, 1, 6, -5, 3])







// // // bai tap 4

// // function getTotal(arr, m, n) {
// //     var sumArr = 0
// //     var arrLength = arr.length
// //     var arrangeArr = []
// //     for (var i = 0; i < arrLength; i++) {
// //         // tinh tong cua mang   
// //         sumArr += arr[i]
// //         // lay ra cac phan tu trong khoang m-n
// //         if (m < arr[i] < n) {
// //             arrangeArr.push(arr[i])
// //         }
// //     }
// //     console.log('Tong gia tri cua mang la', ' ', sumArr)
// //     // in ra phan tu trong khoang m-n theo thu tu tu be den lon
// //     console.log('cac gia tri trong khoang ' + m + '-' + n, arrangeArr.sort(function (a, b) { return a - b }))



// // }
// // var a = [3, -5, 7, 4, 2, 9, 11]

// // getTotal(a, 1, 19)

// // // tim so nguyen to
// // function isPrime(arr) {
// //     if (arr <= 1) return false;
// //     for (let i = 2; i < arr; i++) {
// //         if (arr % i === 0) return false;

// //     }
// //     return true;

// // }

// // const primeNums = a.filter(isPrime);
// // console.log("Các số nguyên tố trong a", primeNums);






// //     BAI TAP NGAY 21/3

// // BAI 1




// // let numbers = [1, 2, 3, 4, 5, 6, 3, 5, 8, 9, 6, 1];
// // function removeDuplicates(arr) {
// //     let arrSet = new Set(arr)
// //     let newArr = Array.from(arrSet)

// //     console.log(newArr)
// // }

// // removeDuplicates(numbers)



// // function removeDuplicates(arr) {
// //     // Mảng trung gian để lưu trữ các phần tử duy nhất
// //     let uniqueArray = [];

// //     // Sử dụng vòng lặp để duyệt qua từng phần tử của mảng đầu vào
// //     for (let i = 0; i < arr.length; i++) {
// //         // Nếu phần tử hiện tại chưa có trong mảng trung gian thì thêm vào
// //         if (!uniqueArray.includes(arr[i])) {
// //             uniqueArray.push(arr[i]);
// //         }
// //     }

// //     // Trả về mảng trung gian sau khi đã loại bỏ các phần tử trùng lặp
// //     return uniqueArray;
// // }

// // console.log(removeDuplicates([1,2,4,3,3,4,4,2,5,6]))






// // //  BAI 2


// let arr = [1, 2, 3, 1, 4, 2,4, 5, 1]

// function countOccurrences(arr) {
//     // luu tru so lan xuat hien cua moi phan tu
//     var countArr = {}

//     for(var i = 0 ;i < arr.length;i++) {
//         //  lay phan tu hien tai
//         var number = arr[i]
//         //  kiem tra xem phan tu ton tai trong countArr chua
//         if(countArr[number]){
//             // neu ton tai thi tang gia tri len 1
//             countArr[number]++
//         } 
//         else {
//             countArr[number] = 1
//         }
//     }
//     console.log(countArr)

//     }

// countOccurrences(arr)





// // //  BAI 3


// // function calculateSavings(initialAmount, monthlyRatePercent, months){

// //     var finalAmount =Math.round(initialAmount*(1+monthlyRatePercent/100)**months)

// //     // console.log(`Số tiền sau', months, 'tháng:' ,nFormat.format(finalAmount), 'VND');
// //    console.log('Số tiền sau' , months, 'tháng:',  new Intl.NumberFormat('ja-JP').format(
// //     finalAmount), 'VND')
// // };

// // calculateSavings(1000000, 1, 2);





// GIAI BAI TAP NGAY 26/5

// bai tap 1

function calculateArea(a, b) {
    return a * b
}
function calculatePerimeter(a, b) {
    return 2 * (a + b)
}
function calculateRectangle(a, b, cbArea, cbPerimeter) {
    console.log('Diện tích: ' + cbArea(a, b))
    console.log('Chu vi: ' + cbPerimeter(a, b))
}

calculateRectangle(5, 3, calculateArea, calculatePerimeter)



//  bai tap 2
var itemListParent = document.querySelector('#item-list')

//  ham thong bao so phan tu hien tai trong danh sach
function cbamount() {
    let amountItem = document.querySelector('.check-exist-items')
    amountItem.innerText = 'Hien tai co ' + document.querySelectorAll('.list-group-item').length + ' item'
}

// ham them phan tu vao danh sach
function addItem() {
    // them li vao the ul
    itemListParent.innerHTML = itemListParent.innerHTML + '<li class="list-group-item list-group-item list-group-item-primary" >Item</li>'
    cbamount()
}

// ham xoa phan tu trong danh sach
function removeItem() {
    // xoa the li trong ul
    itemListParent.lastChild.remove()
    cbamount()
}

let addButton = document.querySelector('#add-btn')
addButton.addEventListener('click', function () {
    addItem()
})

let removeButton = document.querySelector('#remove-btn')
removeButton.addEventListener('click', function () {

    removeItem()
})



