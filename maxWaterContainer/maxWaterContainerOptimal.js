// Optimal solution
const maxWaterContainer = (heights) => {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;
  while(p1 < p2){
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
      if(heights[p2] > heights[p1]){
          p1++;
      } else {
         p2 --;
      }
  }
 return maxArea;
}

console.log(maxWaterContainer([1,2,4,8,7,6,5,9,3]));
