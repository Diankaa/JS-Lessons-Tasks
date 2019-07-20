/** 
 *  @constructor
 * @type {Function}
 * @description Returns methods for output and input name
 * @returns {String}
 */  

function Name() {
  var name;
  this.setName = function(newName) {
    name = newName;
  };
  this.getName = function() {
    return name;
  }
}
var myName = new Name();
myName.setName('Diana');
alert( myName.getName() ); 
console.log(typeof(Name))