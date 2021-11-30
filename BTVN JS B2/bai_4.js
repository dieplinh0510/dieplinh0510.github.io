// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
function email(textEmail) {
  console.log(textEmail.match(/[\w]{9}@[\w]+.com/g));
}

function phone(textPhone) {
  console.log(textPhone.match(/[0-9]{10}/g));
}
email(textEmail);
phone(textPhone);