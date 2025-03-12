function numbers(input) {
    if (!Array.isArray(input)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (input.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let result = input.filter(num => Number.isInteger(num) && num >= 10);
    console.log(result);
}
numbers([1, 22, 10, 9, 8]);
numbers([]);
numbers("abc");
