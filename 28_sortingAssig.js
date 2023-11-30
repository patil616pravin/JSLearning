const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
  const reversearray = arrayRollNumbers.reverse()
  console.log('Reversed array :');
  console.log(reversearray);
  console.log('====================================================');
  console.log('Simply sorted array :');
  const sortedArray = arrayRollNumbers.sort()
  console.log(sortedArray);
  console.log('====================================================');
  console.log('sort the array in asending order :');
  const newArray = arrayRollNumbers.sort((a,b) => {
    return a>b ? 1 : -1
  })
  console.log(newArray);
  console.log('====================================================');
  console.log('Greatest Number from the array :');
  console.log(newArray[newArray.length-1]);
  console.log('====================================================');
  console.log('Smallest Number from the array :');
  console.log(newArray[0]);
  console.log('====================================================');
  console.log('Remove duplicate from array :');
  const uniqueArray = Array.from(new Set (arrayRollNumbers))
  console.log(uniqueArray);

 
  