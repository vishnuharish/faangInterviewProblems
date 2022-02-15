// input = [0, -1, 2, -3, 1]

// Brute force solution
//

const tripletsWhoseSumIsZeroBruteForce = (input) => {
  const results = []
   for(let i = 0; i < input.length; i++){
    for(let j = i + 1; j < input.length; j++){
     for(let k = j + 1; k < input.length; k++){
        const sum = input[i] + input[j] + input[k];

        if(sum === 0){
            results.push([input[i], input[j], input[k]])
        }
     }
    }
  }
    return results;
}


// Optimal solution
//

const tripletsWhoseSumIsZeroOptimal = (input) => {
    const results = [];
    for(let i = 0; i < input.length - 1; i++ ){
        let left = i + 1;
        let right = input.length - 1;
        let x = input[i];

        while(left < right){
          let sum = (x + input[left] + input[right])
            if(sum === 0){
                results.push([x, input[left], input[right]]);
                left ++;
                right --;
            }
        else if((sum) <  0){
                left ++;
            } else {
                right --;
            }
        }
    }
    return results;
}

const input = [0, -1, 2, -3, 1];
console.log(tripletsWhoseSumIsZeroBruteForce(input));
console.log(tripletsWhoseSumIsZeroOptimal(input));
