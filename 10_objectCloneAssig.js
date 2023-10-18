const personalDetails = {
    name: "Pravin",
    age: 24,
    location: "Mumbai",
    occupation: "Technical Procurement Engineer"
  };
  
  console.log("Personal Details:", personalDetails);

  console.log("=====================================================");
  const collegeDetails = {
    collegeName: "SIGCE",
    Branch: "Electrical",
    graduationYear: 2023
  };
  
  console.log("College Details:", collegeDetails);

  console.log("=====================================================");
  const mergedetails = {...personalDetails,...collegeDetails};
  console.log("mergeDetails =");
   console.table(mergedetails);
  
   const friendNames = ["Mayuresh", "Vishal", "Jatin", "Anand"];
  Object.freeze(friendNames);
  
  console.log("=====================================================");
  for (const friendName of friendNames) {
    console.log("Friend Name:", friendName);
  }

  console.log("=====================================================");
  var company = "Codemind Technology";
  var reverse = " "
  for (let index = company.length-1; index >= 0; index--) {
    if (company.charAt(index)==" ") {
      break;
    }
    else{
      reverse = reverse + company.charAt(index);
    }
  }
  console.log(`reverse of technology : ${reverse}`);

