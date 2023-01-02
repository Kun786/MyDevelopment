//Slice is use to cut out a chunck of array slice(startIndex,endIndex) where endIndex = -1 (it mean it wont include the last value)
//slice doesnot modified original array

let names = ['Ali','Assad','Hameed','Sana','Arslan','Amen']
let temporaryNames = names;

// console.log(names.slice(1,-3))


//splice odified original array
// splics(start,count,'element')

// names.splice(5,0,"Bigno","mingo","shingo");
let new123  = temporaryNames.splice(1,0,'Khan')
