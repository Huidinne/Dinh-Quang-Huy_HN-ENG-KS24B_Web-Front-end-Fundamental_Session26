function longStrings(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let result = arr.filter(item => typeof item === "string" && item.length > 5);
    return result;
}
console.log(longStrings(["apple", "banana", "cat", "elephant", "dog"]));
console.log(longStrings([]));
console.log(longStrings("abc"));
