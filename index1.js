//functions thatb takes student JAMB score
function studentScore(score = 0){
   if(score >= 180){
      console.log(`Your JAMB score is ${score}, you Passed`)
   }else {
      console.log(`Your JAMB score is ${score}, you Failed`)
   }
}

 studentScore(280)


 console.log()// print empty space for spacing between different code numbers

//function that accept voting age for eligibility
 function acceptVotingAge(age = 0){
   if(age >= 18){
      console.log(`You are ${age} years old, and you are eligible to vote`)
   }else {
      console.log(`Your are ${age} years old, you are not eligible to vote`)
   }
}

 acceptVotingAge(19)


 console.log()// print empty space for spacing between different code numbers


 //function that takes name and score and return grade
 function studentGrade(name = "user", score = 0){
    if(score >= 90){
      console.log(`${name}, your grade is "Excellent"`)
    }else if(score >= 75) {
      console.log(`${name}, your grade is "Good"`)
    }else if(score >= 50) {
      console.log(`${name}, your grade is "Average"`)
    }else{
      console.log(`${name}, your grade is "Fail"`)
    }
    
 }
 studentGrade("Mike", 91)


 console.log()// print empty space for spacing between different code numbers

 //function that takes two boolean values
 function accessGranted(hasID=false, isAbove18 = false) {
   if(hasID  && isAbove18){
      console.log("Access granted")
   }else{
      console.log("Access denied")
   }
 }
 accessGranted(true, true)


 console.log()// print empty space for spacing between different code numbers

 // for loop to go through an array of student scores
 const arryOfStudentScores = [70, 48, 90, 57, 68, 82, 74]

 for(i=0; i < arryOfStudentScores.length; i++){
   console.log(arryOfStudentScores[i])
   if(arryOfStudentScores[i] >= 50){
      console.log("Pass")
   }else{
      console.log("Fail")
   }
 }


 console.log()// print empty space for spacing between different code numbers

// arrow function that returns "Yes" or "No".
const scoreOfMathsAndEnglish = (mathsScore = 0, englishScore = 0) => {
   if(mathsScore >= 50 && englishScore >= 50){
      console.log("YES")
   }else{
      console.log("No")
   }
}

scoreOfMathsAndEnglish(57,78)


console.log()// print empty space for spacing between different code numbers

//function that checks if a user has either an email or a phone number before signing up.
function userDetail(email , phoneNumber) {
   if(email || phoneNumber) {
      console.log("User detail is successful, you can sign up")
   }else{
      console.log("User detail not successful, you can not sign up")
   }
}

userDetail("07062718960")


console.log()// print empty space for spacing between different code numbers

//function that takes username and password. If either one is empty, return "Invalid input" using the || operator.
function userNameAndPassword(userName, password) {
   if(userName || password) {
      console.log("Invalid input")
   }else{

   }
}

userNameAndPassword("ukach")


console.log()// print empty space for spacing between different code numbers


// function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator

function hourWorked(hours=0) {
   if(hours >= 40? console.log("You worked Full-time"):console.log("You worked Part-time")) {
      
   }
}

hourWorked(42)


console.log()// print empty space for spacing between different code numbers


//arrow function that takes two numbers and returns the larger one.

const largerOfTwoNumbers = (num1 = 1, num2= 1) => {
   if(num1 - num2 > 0) {
      console.log(`${num1} is the larger number`)
   }else {
      console.log(`${num2} is the larger number`)
   }
}

largerOfTwoNumbers(100, 89)
