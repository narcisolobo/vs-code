function print1To255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}

const nums1 = [84, 12, 5, 28, 69, 30, 61, 86, 40, 14];

function printMax(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  console.log(maxNum);
}

printMax(nums1);
