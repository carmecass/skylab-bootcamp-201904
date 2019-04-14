'use strict';

/**
 * 
 */
function Hooray() {
    var first = arguments[0];

    if (arguments.length === 1 && typeof first === 'number')
        if (parseInt(first) !== first) throw RangeError('Invalid hooray');
        else return this.length = first;

    for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
    this.length = arguments.length;
}


/**
* Adds a value at the end of an hooray, incrementing its length by 1.
* 
* @param {*} value The value to push in the hooray.
* 
* @returns {number} The length of the hooray after adding the new value.
*/
Hooray.prototype.push = function (value) {
    if (arguments.length > 0)
        for (var i = 0; i < arguments.length; i++)
            this[this.length++] = arguments[i];

    return this.length;
}

/**
 * Iterates the current hooray and evaluates an expression on each of its values.
 * 
 * @param {Function} callback The expression to evaluate.
 */
Hooray.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var self = this;

    this.length && (function forEach(index) {
        callback(self[index], index);

        if (++index < self.length)
            forEach(index);
    })(0);
}

    /**
     * Concat 2 horray in a new horray
     * 
     * @param {horray} horray The array to evaluate.
     * 
     * 
     */
Hooray.prototype.concat = function (value) {

    var acum = new Hooray()
    
    if (arguments.length > 0){
       
        for (var i = 0; i < this.length; i++) {   
            acum[acum.length++] = this[i];
        }
        for ( i = 0; i < arguments.length; i++) {
            for (var j = 0; j< arguments[i].length; j++) {
            acum[acum.length++] = arguments[i][j];
            }
        }
    }        
    return acum;
}

/**
 * Creates a new hooray with all elements that pass the test implemented by the provided function.
 * 
 * @param {horray} hooray The hooray to evaluate.
 * @param {Function} callback The expression to evalute.
 * 
 */
Hooray.prototype.filter = function(callback) {

        var acum = new Hooray();
        var self = this;
    
        if (typeof callback !== 'function') throw TypeError(callback + ' is not a function')

        for (var i = 0; i < this.length; i++) {
            if(callback(self[i])) {
                acum[acum.length++] = self[i];
            }
        }
        return acum;        
}    

/**
 * Returns the first index at which a given element can be found in the hooray.
 * 
 * @param {hooray} hooray The array to evaluate.
 * 
 * 
 */
Hooray.prototype.indexOf = function(value) {

    for (var i = 0; i < this.length; i++) {
        if (this[i] === value)  {           
            return i;       
        }        
    }    
    return -1;  
}

/**
 * Creates and returns a new string by concatenating all of the elements from an array
 * 
 * @param {Array} array The array to evaluate.
 * 
 * 
 */
Hooray.prototype.join = function(value) {
 
    var acum = '';

    for (var i = 0; i < this.length; i++) {
        if (i === this.length-1){
            acum += this[i];    
        } else {
            acum += this[i]+ ', ';
        }      
    }        
    return acum;
}

/**
 * Returns the last index at which a given element can be found in the hooray, or -1 
 * 
 * @param {hooray} hooray The array to evaluate.
 * 
 * 
 */

Hooray.prototype.lastIndexOf = function lastIndexOf(elem) {
        
    for (var i = this.length-1; i >= 0; i--) {
        if (this[i] === elem) {  
            return i;           
            } else return -1;
        }    
}

/**
 * Creates a new hooray with the results of calling a provided function on every element in the calling hooray.
 * 
 * @param {hooray} hooray The hooray to evaluate.
 * @param {Function} callback The expression to evalute.
 * 
 */
Hooray.prototype.map = function map(callback) {
    var acum = new Hooray();
    
    if (typeof callback !== 'function') throw TypeError(callback + ' is not a function')
    
    for (var i = 0; i < this.length; i++) {

        acum[i] = callback(this[i]); 
        acum.length++        
        
    } 
   
    return acum;
}

/**
 * Reduce on each member of the hooray resulting in a single output value.
 * 
 * @param {hooray} hooray The array to evaluate.
 * @param {Function} callback The expression to evalute.
 * 
 */

Hooray.prototype.reduce = function(callback, x) {  
    
    
    var i = x === undefined  ? 1 : 0;
    var acum = x === undefined ? this[0] : x;
    
    for (i; i < this.length; i++) {                    
            acum = callback(acum, this[i]);                 
        }       
        return acum;    
    }
    
/**
 * Reduce a single value from an hooray (from right-to-left)
 * 
 * 
 * @param {horray} horray The horray to evaluate.
 * @param {Function} callback The expression to evalute.
 * 
 */
Hooray.prototype.reduceRight = function (callback) {
    
    var acum = this[this.length-1];
    var nextAcum = 0;
        for (var i = (this.length-2); i >= 0; i--) {
                       
            nextAcum = callback(acum, this[i]);
            
            acum = nextAcum;
        }
        return acum;
}

 /**
 *The first hooray element becomes the last, and the last hooray element becomes the first.
 * 
 * 
 * @param {hooray} hooray The hooray to evaluate.
 *
 * 
 */
Hooray.prototype.reverse = function() {
    // It's not necessary to create var self
    let reverseHooray = new Hooray()
    var self = this;
    for (let i = self.length - 1; i >= 0; i--) {
        reverseHooray.push(self[i])
    }
    return reverseHooray
}

/**
 * removes the first element from an hooray.
 * 
 * @param {hooray} hooray The hooray to pop the value from.
 * 
 * @returns {*} The value retrievied from the hooray.
 */
Hooray.prototype.shift = function() {
    
    var  nova= [(this.length-1)];

    for (var i = 1; i < this.length; i++) {
        
        nova[i-1] = this[i];    
    }
    return nova;
    
};

/**
 * Determines whether the passed value is an hooray.
 * 
 * @param {hooray} hooray The array to evaluate.
 *
 */
    Hooray.isArray = function(value) {
    
    return value instanceof Hooray;   
}

/**
 * returns a portion of an hooray into a new hooray object selected from begin to end
 * 
 * @param {hooray} hooray The hooray to pop the value from.
 * 
 * @returns {*} The value retrievied from the hooray.
 */

 Hooray.prototype.slice = function(a, b) {
   
    var nhooray = new Hooray();
    var pos = 0;
       
    for (var i = 0; i < this.length; i ++) {
        if (a > this.length-1) {
            return nhooray;
        }
               
        if ((i >= a) && (i <= b-1)) {
            
            nhooray.push(this[i]);
            // pos++;             
        } 
    }      
        return nhooray;
}
/**
 * tests whether at least one element in the array passes the test implemented by the provided function
 * 
 * @param {hooray} hooray The hooray to pop the value from.
 * @param {Function} callback The expression to evalute.
 * @returns {*} The value retrievied from the hooray.
 */
Hooray.prototype.some = function(hooray, callback) {

    for (var i = 0; i < this.length; i++) {
       if (callback(this[i])) {
           return true;
        }
    }  
    return false;
} 

/**
 * hanges the contents of an hooray by removing or replacing existing elements and/or adding new elements
 * 
 * @param {hooray} hooray The hooray to pop the value from.
 * @param {Function} callback The expression to evalute.
 * @returns {*} The value retrievied from the hooray.
 */
Hooray.prototype.splice = function(start, deleteCount) {

    var result = new Hooray();
    for (var i = 0; i < Math.min(start, this.length); i++) {
      result.push(this[i]);
    }
    for (var i = 2; i < arguments.length; i++) {
      result.push(arguments[i]);
    }
    for (var i = start + deleteCount; i < this.length; i++) {
      result.push(this[i]);
    }
    this.length = result.length;
    for (var i = 0; i < this.length; i++) {
      this[i] = result[i]; 
    }
    return result;
  }




    

