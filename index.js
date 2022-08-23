// Code your solution here
const drivers = [
    'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

  function findMatching(newArray, string) {
       return newArray.filter(
           (matchingName) => matchingName.toUpperCase() === string.toUpperCase()
       );
   } 

   function fuzzyMatch(newArray, newString) {
       return newArray.filter(
           (matchingName) => matchingName.toUpperCase().indexOf(newString.toUpperCase()) === 0
       );
   }

