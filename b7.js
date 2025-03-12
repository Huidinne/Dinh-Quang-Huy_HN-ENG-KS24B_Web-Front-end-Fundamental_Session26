function square_the_array(input) {
    if (!Array.isArray(input)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (input.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let square = input.map((num)=> num ** 2);
    let result = square.filter(((num)=> num % 2 ==0))
    console.log(result);
}
square_the_array([2, 5, 10]);
square_the_array([]);
square_the_array("abc");