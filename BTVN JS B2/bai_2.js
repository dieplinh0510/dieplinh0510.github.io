const users = [
  { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
  { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
  { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
  { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];
//Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female


//1
console.log("------MENU-------");
console.log("1. SHOW LIST");
console.log("2. ADD USER");
console.log("3. DELETE OF ID");
console.log("4. UPDATE USER OF ID");


function SHOW(){
  console.log(users);
}

function ADD(newid, newname, newage, newgender, newmoney){
  users.push({id: newid, name: newname, age: newage, gender: newgender, money: newmoney});
}

function DELETE(id){
  for (let i=0; i<users.length; i++){
    if (id===users[i].id){
      users.splice(i, 1);
    }
  }
}

function UPDATE(id){
  for (let i=0; i<users.length; i++){
    if (users[i].id === id){
      users[i].name = 'Lam Linh';
    }
  }
}

console.log("Choose 1: ");
SHOW();
console.log("Choose 2: ");
ADD(5, "Diep Linh", 19, "female", 10000);
SHOW();
console.log("Choose 3: ");
DELETE(3);
SHOW();
console.log("Choose 4: ");
UPDATE(2);
SHOW();

//2
ADD(6, "Van Cuong", 19, "female", 150000);
ADD(7, "Thu Thao", 19, "female", 153000);

function countMale(){
  let count = 0;
  for (let i=0; i<users.length; i++){
    if (users[i].gender === 'male'){
      count++;
    }
  }
  console.log("Co "+ count + " gioi tinh nam");
}
countMale();

function countAge(){
  let count  = 0;
  for (let i=0; i<users.length; i++){
    if (users[i].age > 15){
      count++;
    }
  }
  console.log("Co "+ count+ " nguoi tuoi >15");
}
countAge();

function sumMoney(){
  let sum = 0;
  for (let i=0; i<users.length; i++){
    if (users[i].id %2 ==0){
      sum+=users[i].money;
    }
  }
  console.log("Tong tien nhung nguoi co id chan : " + sum);
}
sumMoney();

function maxMinMoney(){
  let max = users[0].money;
  let min = users[0].money;
  let idmax = idmin=0;
  for (let i = 0; i<users.length; i++){
    if (users[i].money > max) {
      max = users[i].money;
      idmax = i;
    }
    if (users[i].money < min) {
      min = users[i].money;
      idmin = i;
    }
  }
  console.log("Nguoi giau nhat la: "); console.log(users[idmax]);
  console.log("Nguoi ngheo nhat la: "); console.log(users[idmin]);
}
maxMinMoney();

//3
function repairGender(){
  for (let i=0; i<users.length; i++){
    if (users[i].gender === "male"){
      users[i].gender === "female";
    }
  }
}
repairGender();
SHOW();