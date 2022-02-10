// Brute force solution
 const maxWaterContainer = (heights) => {
    //[7,2,3,4,9]
    let maxArea = 0;
    for(let a = 0; a < heights.length; a++){
        for(let b = a + 1; b < heights.length; b++){
            // Area of the rectangle length * breadth
            maxArea = Math.max(maxArea, (Math.min(heights[a], heights[b]) * (b - a)));

        }
    }
    return maxArea;
 }
console.log(maxWaterContainer([7,1,2,3,4,9]));

