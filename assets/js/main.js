// // Bai tap 1
// function checkInterger(number) {
//     // kiem tra so nguyen duong

//     if(Number.isInteger(number) && number > 0){
//         console.log('Day la so nguyen duong')

//     } 
//     // kiem tra so nguyen am
//     else if(Number.isInteger(number) && number < 0) {
//         console.log('day la so nguyen am')
//     }

//     else {
//         console.log('day khong phai so nguyen duong va so nguyen am')
//     }

// }

// checkInterger(-6) 
// checkInterger(5) 
// checkInterger('hoang quyet') 








// Bai tap 2
// function sum(arr){
//     var arrLength = arr.length
//     var sumAray = 0
//     for(var i = 0; i < arrLength;i++){
//         if(Number.isInteger(arr[i]) && arr[i] > 0){
//             sumAray = sumAray + arr[i]
//         } else sumAray = sumAray
//     }
//     console.log(sumAray)
//     return sumAray

// }
// sum([2,3,-5,7,'d'])








// Bai tap 3
// function array(arr) {
//     var arrLength = arr.length
//     var max = arr[0]
//     var min = arr[0]
//     for (var i = 1; i < arrLength; i++) {
//         // tim so lon nhat
//         if (arr[i] > max) {
//             max = arr[i]

//         }
//     }
//     // tim so nho nhat
//     if (arr[i] < min) {
//         min = arr[i]
//     }


//     console.log(max)
//     console.log(min)
// }

// array([4, 5, 1, 6, -5, 3])







// bai tap 4

function getTotal(arr, m, n) {
    var sumArr = 0
    var arrLength = arr.length
    var arrangeArr = []
    for (var i = 0; i < arrLength; i++) {
        // tinh tong cua mang   
        sumArr += arr[i]
        // lay ra cac phan tu trong khoang m-n
        if (m < arr[i] < n) {
            arrangeArr.push(arr[i])
        }
    }
    console.log('Tong gia tri cua mang la', ' ', sumArr)
    // in ra phan tu trong khoang m-n theo thu tu tu be den lon
    console.log('cac gia tri trong khoang ' + m + '-' + n, arrangeArr.sort(function (a, b) { return a - b }))



}
var a = [3, -5, 7, 4, 2, 9, 11]

getTotal(a, 1, 19)

// tim so nguyen to
function isPrime(arr) {
    if (arr <= 1) return false;
    for (let i = 2; i < arr; i++) {
        if (arr % i === 0) return false;
        
    }
    return true;

}

const primeNums = a.filter(isPrime);
console.log("Các số nguyên tố trong a", primeNums);





















