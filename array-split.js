const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);    //1st param is starting index & 2nd param is stopping index
console.log(part);
console.log(nums);  //slice() will not change main array from where you sliced

const removed = nums.splice(2,4) //1st param is starting index & 2nd parameter is deleteCount — The number of elements to remove
console.log(removed);
console.log(nums);  //splice() will change main array which you spliced

const nums2 = [1,2,3,4,5,6,7,8];
const removed2 = nums2.splice(1, 3, 77, 88, 99, 1000); // you can also do this
                                            // 1st param = start
                                            // 2nd param = how many item you wanna remove
                                            // rest params = which which you wanna inject in removed positions

console.log(removed2);
console.log(nums2);


// .....................join()................... ***Obviously join() returns in "String"
const nums3 = [1, 2, 77, 8, 9, 10];
let together = nums3.join("");
console.log(together);
together = nums3.join(" ");
console.log(together);
together = nums3.join(",");
console.log(together);
together = nums3.join("#");
console.log(together);
together = nums3.join("💚");
console.log(together);
together = nums3.join("  シ✆  ♡ ");
console.log(together);
together = nums3.join("ami");
console.log(together);