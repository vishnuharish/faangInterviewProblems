const sumOfSubArrays = (nums, k) => {
    let res = 0;
    for(let i = 0; i<nums.length; i++){
        let sum = 0;
        for(let j = i; j<nums.length; j++){
            sum += nums[j];
            if(sum === k){
                res ++;
            }
        }
    }
    return res;
}

let [nums, k] = process.argv.slice(2);

if(nums){
    nums = nums.split(",").map( num => Number(num));
    console.log("User input nums: ",nums)
} else {
    const error_nums = new Error("Nums is mandatory");
    throw error_nums;
}

if(k){
    k = Number(k);
    console.log("User input target: ", k);
} else {
    const error_k = new Error("K is mandatory");
    throw error_k;
}

if(nums && k) console.log(sumOfSubArrays(nums, k));
