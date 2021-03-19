console.log("success");

/// Giải thuật toán

let ArrNumber = [1, 2, 2, 3, 4, 6, 7, 8, 6];
console.log(ArrNumber);

// cách 1

let deleteDuplicate = (ArrNumber) => {
  let newArrayNumber = [];
  for (let i = 0; i < ArrNumber.length; i++) {
    if (newArrayNumber.indexOf(ArrNumber[i]) === -1) {
      newArrayNumber.push(ArrNumber[i]);
    }
  }
  return newArrayNumber;
};
console.log(deleteDuplicate(ArrNumber));

//  cách 2

const deleteDupicate2 = (ArrNumber) => {
  let sortArr = ArrNumber.sort();
  console.log(sortArr);
  let newArrayNumber = [ArrNumber[0]];
  for (i = 1; i < ArrNumber.length; i++) {
    if (ArrNumber[i] !== ArrNumber[i - 1]) {
      newArrayNumber.push(ArrNumber[i]);
    }
  }
  return newArrayNumber;
};
console.log(deleteDupicate2(ArrNumber));
