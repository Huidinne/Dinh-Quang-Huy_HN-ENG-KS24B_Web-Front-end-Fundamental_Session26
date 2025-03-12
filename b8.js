function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0){
            return false;
        }
    }
    return true;
}
function checkPrimes(arr) {
    if (!Array.isArray(arr)){
        console.log("Dữ liệu không hợp lệ");
         return ;
    }
    if (arr.length === 0){
        console.log("Mảng không có phần tử nào");
        return ; 
    } 
    let check = arr.filter(isPrime);
    let result = check.filter((num) => num % 2 !== 0 );
    console.log(result);
}
checkPrimes([ 10, 2, 3, 5, 7, 9 ]);
checkPrimes([]);
checkPrimes("abc");