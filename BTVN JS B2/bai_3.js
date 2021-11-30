// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

function chuanHoa(str){
  str = str.trim().toLowerCase();
  str = str.replace(/\s+/g, ' ');
  for (let element of str){
    if (element >= '0' && element<='9'){
      str=str.replace(element, '');
    }
  }
  let str1 = str.split(" ");
  let str2 ="";
  str1.forEach(element => {
    str2 += element.substring(0, 1).toUpperCase()+ element.substring(1)+" ";
  });
    return str2;
  }
  console.log(chuanHoa(case1));
  console.log(chuanHoa(case2));
  console.log(chuanHoa(case3));
