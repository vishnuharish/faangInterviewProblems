const twoSum = (nums, target) => {
     const numsMap = {};
     for(let p = 0; p < nums.length; p++){
         const currentNumsMapVal = numsMap[nums[p]];
         if(currentNumsMapVal >= 0){
             return [currentNumsMapVal, p];
         } else {
             const numToFind = target - nums[p];
             numsMap[numToFind] = p;
         }
     }
     return null;
}

console.log(twoSum([1,4,5,9,2], 11));
