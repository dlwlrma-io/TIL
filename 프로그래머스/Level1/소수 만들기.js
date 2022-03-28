// https://programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {

  function isPrime(num) {
    for(var i=2; i<= Math.sqrt(num); i++){
      if(num%i == 0){
        return false;
      }
    }
    return true;
  }

  let answer = 0;

  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      for (let k=j+1; k<nums.length; k++) {
        if (isPrime(nums[i]+nums[j]+nums[k])) {
          answer++
        }
      }
    }
  }

  return answer;
}