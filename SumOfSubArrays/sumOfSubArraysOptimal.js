const sumOfSubArrays = (nums, k) => {
    let count = 0;
    const map = new Map([[0,1]])
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(map.has(sum - k)){
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
return count;
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
