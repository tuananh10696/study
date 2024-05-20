// bai 1
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
let numbers1 = [1, 2, 3, 1, 4, 2, 5];
console.log(removeDuplicates(numbers1)); // Output: [1, 2, 3, 4, 5]



// bai 2
function countOccurrences(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]]) {
            counts[arr[i]]++;
        } else {
            counts[arr[i]] = 1;
        }
    }
    return counts;
}

let numbers2 = [1, 2, 3, 1, 4, 2, 5, 1];
console.log(countOccurrences(numbers2));




// bai 3
function calculateSavings(initialAmount, monthlyRatePercent, months) {
    // Chuyển đổi lãi suất từ phần trăm sang tỷ lệ thập phân
    let monthlyRate = monthlyRatePercent / 100;

    // Tính toán số tiền sau n tháng với lãi suất hàng tháng
    let finalAmount = initialAmount * Math.pow((1 + monthlyRate), months);

    // Làm tròn số tiền xuống tới đơn vị VND
    finalAmount = Math.floor(finalAmount);

    return finalAmount;
}

// Test
let initialAmount = 1000000; // 1,000,000 VND
let monthlyRatePercent = 10; // 1% lãi suất hàng tháng
let months = 2; // 12 tháng

const nFormat = new Intl.NumberFormat();
let finalAmount = calculateSavings(initialAmount, monthlyRatePercent, months);
console.log(`Số tiền sau ${months} tháng: ${nFormat.format(finalAmount)} VND`);


// Trong JavaScript, Math.pow(x, y) là một hàm được sử dụng để tính lũy thừa của một số x với một số mũ y.
// Tham số x là số cơ sở (base).
// Tham số y là số mũ (exponent).
// Hàm Math.pow(x, y) sẽ trả về kết quả là x mũ y.
// Ví dụ: Math.pow(2, 3) sẽ trả về 8, vì 2 mũ 3 là 8.

