/* Exercise 1
1. An object literal is a grouping of an object's properties and values.  This grouping can be stored in variables which saves you from retyping the same code repeatedly. */

// Exercise 2

var character1 = {
  firstName: 'Mary',
  lastName: 'Poppins',
  occupation: 'nanny',
  age: 53}
console.log(character1)

var character2 = {
  firstName: 'Wonder',
  lastName: 'Woman',
  occupation: 'superhero',
  age: 75}
console.log(character2)

// Exercise 3

var myChurch = {
  name: 'Grace Church of Humble',
  address: '7224 N. Sam Houston Pkwy E., Humble, TX 77396',
  pastor1: 'Brett Jones',
  pastor2: 'Scott Jones',
  membership: 6000}
console.log(myChurch)
console.log('I attend ' + myChurch.name + ', which is located at ' + myChurch.address + '.' + ' The pastors are two brothers named ' + myChurch.pastor1 + ' and ' + myChurch.pastor2 + '.' + ' Grace Church currently has ' + myChurch.membership + ' members.')

myChurch.membership = myChurch.membership + 200
myChurch.campuses = 4
console.log(myChurch)
console.log('I attend ' + myChurch.name + ', which is located at ' + myChurch.address + '.' + ' The pastors are two brothers named ' + myChurch.pastor1 + ' and ' + myChurch.pastor2 + '.' + ' Grace Church currently has ' + myChurch.membership + ' members.' + ' Grace Church has ' + myChurch.campuses + 'locations which are located in Humble, the Heights, Tomball, and Liberty.')
