// 1
function calculateRectangle(length, width, areaCallback, perimeterCallback) {
    let area = areaCallback(length, width);
    let perimeter = perimeterCallback(length, width);
    console.log('Diện tích: ' + area);
    console.log('Chu vi: ' + perimeter);
}

function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

// Sử dụng
calculateRectangle(5, 3, calculateArea, calculatePerimeter);
// Output:
// Diện tích: 15
// Chu vi: 16


// 2
document.addEventListener('DOMContentLoaded', function() {
    var addBtn = document.getElementById('add-btn');
    var removeBtn = document.getElementById('remove-btn');
    var itemList = document.getElementById('item-list');
    var checkNowExistItems = document.querySelector('.check-exist-items');

    // Hàm cập nhật số lượng mục hiện tại và hiển thị nó trong thẻ <p>
    function updateCount() {
        var itemCount = itemList.children.length;
        checkNowExistItems.textContent = 'Hiện tại có : ' + itemCount + ' item';
    }

    // Hàm thêm một mục mới vào danh sách và gọi callback để cập nhật số lượng
    function addItem(callback) {
        var newItem = document.createElement('li');
        newItem.innerText = 'New Item';
        newItem.className = 'list-group-item list-group-item-action list-group-item-primary'; // Thiết lập các lớp cho phần tử <li>
        itemList.appendChild(newItem);
        callback();
    }

    // Hàm xóa mục cuối cùng trong danh sách và gọi callback để cập nhật số lượng
    function removeItem(callback) {
        if (itemList.children.length > 0) {
            itemList.removeChild(itemList.lastChild);
        }
        callback();
    }

    // Thêm sự kiện click cho nút "Add Item" để gọi hàm addItem và updateCount
    addBtn.addEventListener('click', function() {
        addItem(updateCount);
    });

    // Thêm sự kiện click cho nút "Remove Item" để gọi hàm removeItem và updateCount
    removeBtn.addEventListener('click', function() {
        removeItem(updateCount);
    });
});



// 3
document.addEventListener('DOMContentLoaded', function() {
    var colorBox = document.getElementById('color-box');

    // Hàm tạo màu ngẫu nhiên từ danh sách các tên màu
    function getRandomNamedColor() {
        var colors = ['red', 'green', 'blue', 'black', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Hàm thay đổi màu nền và gọi callback
    function changeBackgroundColor(newColor, callback) {
        colorBox.style.backgroundColor = newColor;
        callback(newColor);
    }

    // Thêm sự kiện mouseenter để thay đổi màu nền thành màu ngẫu nhiên
    colorBox.addEventListener('mouseenter', function() {
        var randomColor = getRandomNamedColor();
        changeBackgroundColor(randomColor, function(newColor) {
            console.log('New background color:', newColor);
        });
    });

    // Thêm sự kiện mouseleave để thay đổi màu nền thành màu ngẫu nhiên
    colorBox.addEventListener('mouseleave', function() {
        var randomColor = getRandomNamedColor();
        var checkColor = document.querySelector('.check-color');
console.log(checkColor)
        changeBackgroundColor(randomColor, function(newColor) {
            checkColor.textContent = `Màu hiện tại là : ${newColor}`
        });
    });
});









// // bai 1
// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// let numbers1 = [1, 2, 3, 1, 4, 2, 5];
// console.log(removeDuplicates(numbers1)); // Output: [1, 2, 3, 4, 5]



// // bai 2
// function countOccurrences(arr) {
//     let counts = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (counts[arr[i]]) {
//             counts[arr[i]]++;
//         } else {
//             counts[arr[i]] = 1;
//         }
//     }
//     return counts;
// }

// let numbers2 = [1, 2, 3, 1, 4, 2, 5, 1];
// console.log(countOccurrences(numbers2));




// // bai 3
// function calculateSavings(initialAmount, monthlyRatePercent, months) {
//     // Chuyển đổi lãi suất từ phần trăm sang tỷ lệ thập phân
//     let monthlyRate = monthlyRatePercent / 100;

//     // Tính toán số tiền sau n tháng với lãi suất hàng tháng
//     let finalAmount = initialAmount * Math.pow((1 + monthlyRate), months);

//     // Làm tròn số tiền xuống tới đơn vị VND
//     finalAmount = Math.floor(finalAmount);

//     return finalAmount;
// }

// // Test
// let initialAmount = 1000000; // 1,000,000 VND
// let monthlyRatePercent = 10; // 1% lãi suất hàng tháng
// let months = 2; // 12 tháng

// const nFormat = new Intl.NumberFormat();
// let finalAmount = calculateSavings(initialAmount, monthlyRatePercent, months);
// console.log(`Số tiền sau ${months} tháng: ${nFormat.format(finalAmount)} VND`);


// // Trong JavaScript, Math.pow(x, y) là một hàm được sử dụng để tính lũy thừa của một số x với một số mũ y.
// // Tham số x là số cơ sở (base).
// // Tham số y là số mũ (exponent).
// // Hàm Math.pow(x, y) sẽ trả về kết quả là x mũ y.
// // Ví dụ: Math.pow(2, 3) sẽ trả về 8, vì 2 mũ 3 là 8.

