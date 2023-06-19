// // Code your solution here

// /*
// drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function filter(array, driverName, callback){
//   let lowerCaseDriverName = driverName.toLowerCase()
//   console.log(lowerCaseDriverName)
//   for (const driver of array){
//     if (callback(driver,lowerCaseDriverName)){
//       console.log(driver)
//     }
//   }
// }

// function findMatching(driver,driverName){
//  let ammendedDriverName = driverName.toLowerCase()
//  console.log(ammendedDriverName) 
//  return driver==ammendedDriverName
// }

// filter(drivers,"Bobby", findMatching)

// */



// //let checkName= drivers.filter(
// //    function(values){
// //      return values=="Bobby"
// //  })

// //console.log(checkName) 

// //drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


// //console.log(lowerCaseDrivers)

// //console.log(findMatching(drivers,"Bobby"))

// //console.log(findMatching('Bobby'))

// /*
// function fuzzyMatch(drivers){
//   let letters=[]
//   for(let driver of drivers){         /For every driver name element in the driver array
//   let letter =driver.charAt(0)        //Assign every first character that drivers name to the variable "letter" 
//       letters.push(letter)            //Then push each of these letter variables to the letters[] array 
//   }
    
              

//   console.log(letters) 
//   return letters           
// }

// fuzzyMatch(drivers,"B")*/

// /*******************
//  * Driver Array
//  *******************/

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// /*******************
//  * convert drivers array elements to lowercase
//  *******************/
const lowerCaseDrivers = drivers.map(element=>{   //Reduces the driver array elements to lower case
  let f = element.toLowerCase();
   return f;
 })

// /******************* 
//   findMatching() function
// ********************/

 function findMatching(drivers, input){
  
   let checkName= drivers.filter((driver)=>{
      return driver.toLowerCase()==input.toLowerCase()
   })

   return checkName
   
 }

 console.log(findMatching(drivers,"sammy"))

// /******************* 
//   fuzzyMatch() function
// ********************/

 //driversList=['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


/*  function fuzzyMatch(drivers,startingLetter){
   let matchingFirstLetters=[]

   for(let driver of drivers){                     //For EVERY driver in the driver array
     let letter =driver.charAt(0)                  //Assign the first character that drivers name to the variable "letter"

     if(letter==startingLetter.charAt(0)){         //If that "letter" is equal to the inputed "startingLetter"
       matchingFirstLetters.push(driver)           //Push that driver to the matchingFirstLetters Array  
     }
  
    
   }

   return matchingFirstLetters       //Return the matchingFirstLettersArray containing the drivers with the matching letters
       
 }
 */

/*  function fuzzyMatch(drivers, startingLetter){
  let firstLetterMatch= drivers.filter((startingLetter)=>{
    driver.charAt(0)==startingLetter.charAt(0)
  })
  return firstLetterMatch
 }
 */

 //let driverList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

 function fuzzyMatch(drivers, startingLetter){

  let firstLetterMatch =drivers.filter((driver)=>{
    return driver.charAt(0)==startingLetter.charAt(0)
  })

  return firstLetterMatch
 }

// //fuzzyMatch(driversList,"Sa")

//console.log(fuzzyMatch(driverList,"B"))

/* const drivers2 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
]; */

function matchName(drivers, input ){
  let searchHometown= drivers.filter((driver)=>{
    if(driver.name == input){
      return driver.hometown
    }
  })
  return searchHometown
}

//matchName(drivers2, "Bobby")