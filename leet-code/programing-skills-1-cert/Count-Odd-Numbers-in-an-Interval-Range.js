//********** Leet code problem no 1 from Programing-Skills-1-certification **********/
//********** 1523. Count Odd Numbers in an Interval Range **********/
//********** Problem Explanation: Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive). **********/


const countOdds = (low, high) =>{
    let count = 0;
    for(let i=low; i<=high; i++){
        if(i%2 !== 0){
            count ++
        }
    }
    return count
}

console.log(countOdds(3,7));
