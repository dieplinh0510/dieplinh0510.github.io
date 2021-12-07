// Câu 2: Cộng một đơn vị vào mảng số nguyên
digits1 = [1,2,3]
// Output: [1,2,4]
 
digits2 = [0]
// Output: [1]
 
digits3 = [9]
// Output: [1,0]

function add(arr){
  let a=0;
  for (let i in arr){
    a=arr[i]+ a*10;
  }

  a+=1;
  a = a.toString();
  let arrr= [];
  for (let i in a){
    arr[i] = a[i];
  }
  return arr;
}
console.log(add(digits1));
console.log(add(digits2));
console.log(add(digits3));