function odd_and_even_sum(input) {
    if (!Array.isArray(input)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (input.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let totalEven = 0;
    let totalOdd = 0;
    let resultEven = input.filter((num) =>{
        if (num % 2 === 0) {
            totalEven += num
        }
    });
    let resultOdd = input.filter((num) =>{
        if (num % 2 !== 0) {
            totalOdd += num
        }
    });
    console.log(`totalEven = ${totalEven}`);
    console.log(`totalOdd = ${totalOdd}`);
}
odd_and_even_sum([ 1,2, 3, 4, 5, 6, 7, 8, 9 ]);
odd_and_even_sum([]);
odd_and_even_sum("abc")