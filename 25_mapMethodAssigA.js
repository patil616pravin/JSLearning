const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
     const array = arrayNumbers.map ((currentValue)=>{
          const arrayNum = (currentValue+10)
          return arrayNum
     }

     )
     console.log(`Addition of 10 in each element : `);
     console.log(array);

     console.log("===================================================");

     const arrayCube = arrayNumbers.map((currentValue) =>{
        const arrayNumCube = (currentValue*currentValue*currentValue)
        return arrayNumCube

     }

     )
     console.log(`Cube of each element :`);
     console.log(arrayCube);

     console.log("===================================================");

     const arrayIndex = arrayNumbers.map ((currentValue,index) =>{
        const arrayindex = (currentValue+index)
        return arrayindex
     }

     )
     console.log(`Addition of index value in each element :`);
     console.log(arrayIndex);

