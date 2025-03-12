function validEmails(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    if (input.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let result = input.filter(email => typeof email === "string" && /^[^\s]*@[^\s]*$/.test(email));
    return result;
}
console.log(validEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com "]));
console.log(validEmails([]));
console.log(validEmails("abc"));
