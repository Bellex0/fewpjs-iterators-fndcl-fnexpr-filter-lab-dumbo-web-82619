// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(driver => driver.name.toLowerCase() == string.toLowerCase())
}