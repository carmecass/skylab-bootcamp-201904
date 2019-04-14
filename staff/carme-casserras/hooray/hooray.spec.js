'use strict';

describe('hooray', function () {

    describe('constructor', function () {
        true && it('should construct an empty hooray when no arguments', function () {
            var hooray = new Hooray;

            expect(hooray.length).toBe(0);
            expect(Object.keys(hooray).length).toBe(1);
        });

        true && it('should construct a non-empty hooray when existing arguments', function () {
            var hooray = new Hooray(1, 2, 3);
            
            expect(hooray.length).toBe(3);
            expect(hooray).toEqual(jasmine.objectContaining({ 0: 1, 1: 2, 2: 3, length: 3 }));
            expect(Object.keys(hooray).length).toBe(4);
        });

        true && it('should construct an empty hooray with length equal to when only one numeric argument', function () {
            var hooray = new Hooray(1);

            expect(hooray.length).toBe(1);
            expect(Object.keys(hooray).length).toBe(1);
        });

        true && it('should construct a non-empty hooray with only one non-numeric argument', function () {
            var hooray = new Hooray('1');

            expect(hooray.length).toBe(1);
            expect(hooray).toEqual(jasmine.objectContaining({ 0 : '1', length: 1 }));
            expect(Object.keys(hooray).length).toBe(2);
            
        });
    });

    describe('push', function () {
        !true && it('should add a value at the end of an hooray', function () {
            var hooray = new Hooray(1, 2, 3);

            var length = hooray.push(4);

            expect(hooray.length).toBe(4);
            expect(length, hooray.length);
            expect(hooray).toEqual(jasmine.objectContaining({ 0: 1, 1: 2, 2: 3, 3: 4, length: 4 }));
        });

        !true && it('should add multiple values at the end of an hooray in order', function () {
            var hooray = new Hooray(1, 2, 3);

            var length = hooray.push(4, 5);

            expect(hooray.length).toBe(5);
            expect(length, hooray.length);
            expect(hooray).toEqual(jasmine.objectContaining({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5 }));
        });

        !true && it('should not add a non-provided value at the end of an hooray', function () {
            var hooray = new Hooray(1, 2, 3);

            var length = hooray.push();

            expect(hooray.length).toBe(3);
            expect(length, hooray.length);
            expect(hooray).toEqual(jasmine.objectContaining({ 0: 1, 1: 2, 2: 3, length: 3 }));
        });
    });

    describe('forEach', function () {
        !true && it('should itearate an hooray without altering it', function () {
            var hooray = new Hooray(1, 2, 3);

            var result = new Hooray;

            hooray.forEach(function (v, i) { result.push(v); });
            // 0 1
            // 1 2
            // 2 3

            expect(result).toEqual(jasmine.objectContaining(hooray));

            var expected = { 0: 1, 1: 2, 2: 3, length: 3 };

            expect(hooray).toEqual(jasmine.objectContaining(expected));
        });

        !true && it('should do nothing if hooray has not content', function () {
            var hooray = new Hooray;

            var result = new Hooray;

            hooray.forEach(function (v, i) { result.push(v); });

            expect(result.length).toBe(0);
        });

        !true && it('should break on undefined callback', function () {
            var hooray = new Hooray(1, 2, 3);

            try {
                hooray.forEach();

                throw Error('should not reach this point');
            } catch (error) {
                expect(error.message).toBe('undefined is not a function');
                }
        });
    });

    describe('concat', function() {
        ! true && it('should concat some hooray in one', function() {
            var hooray1 = new Hooray('c','a','r')
            var hooray2 = new Hooray('d', 'a', 'n', 'i')
            
            var result = hooray1.concat(hooray2)                     
                   
            expect(result.length).toBe(7);
            expect(result).toEqual(jasmine.objectContaining({ 0: 'c', 1: 'a', 2: 'r', 3: 'd', 4: 'a', 5: 'n', 6: 'i',length: 7 }));    
        });         
    });
    
    describe('filter', function() {
        ! true && it('should filter some items from hooray with a condition', function() {
            var hooray = new Hooray(1, 3, 5, 8, 10, 35, 40, 5, 23, 2, 7);    
            var answer = new Hooray(35, 40, 23);
    
            var result = hooray.filter(function(elem){return elem > 10;})
                 
            expect(result).toEqual(answer);
        });
           
        ! true && it('should break on undefined callback', function () {
            var hooray = new Hooray(1, 3, 5, 8, 10, 35, 40, 5, 23, 2, 7);
    
            try {
                hooray.filter();
    
                throw Error('should not reach this point');
            } catch (error) {
                expect(error.message).toBe('undefined is not a function');
            }
        });            
    });

    describe('indexOf', function() {
        ! true && it('Should return the first index at which a given element can be found in the hooray', function() {
            var hooray = new Hooray('ant', 'bison', 'camel', 'duck', 'bison');
            var elem = 'camel'
            var answer = 2;
            var result = hooray.indexOf(elem);
            
            expect(result).toEqual(answer);             
        });       
    });

    describe('join', function() {
        ! true && it('Creates and returns a new string by concatenating all of the elements in an hooray', function() {
            var hooray = new Hooray('ant', 'bison', 'camel', 'duck');            
            var answer = 'ant, bison, camel, duck';
                
            var result = hooray.join();
            
            expect(result).toEqual(answer)             
        });
    })

    describe('lastIndexOf', function() {
        ! true && it('Returns the last index at which a given element can be found in the hooray, or -1 ', function() {
            var hooray = new Hooray('ant', 'bison', 'camel', 'duck', 'bison');
            var elem = 'bison';
            
            var answer = 4;    
            var result = hooray.lastIndexOf(elem);            
    
            expect(result).toEqual(answer);    
        });
    
        ! true && it('Returns the last index at which a given element can be found in the horray, or -1 ', function() {
            var hooray = new Hooray('ant', 'bison', 'camel', 'duck', 'bison');
            var elem = 'cat';
    
            var answer = -1;
    
            var result = hooray.lastIndexOf(elem); 
            expect(result).toEqual(answer);            
        });
    })
    describe('map', function() {
        ! true &&it('Creates a new hooray with the results of calling a function on every element in the calling hooray', function() {
            var hooray = new Hooray(1, 4, 9, 16);
            var answer = new Hooray(2, 8, 18, 32);
            var result = hooray.map(function(elem){return elem * 2});
    
            expect(result).toEqual(answer);     
                            
        });
        
        ! true && it('should break on undefined callback', function () {
            var hooray = new Hooray(1, 4, 9, 16);
    
            try {
                hooray.map();
    
                throw Error('should not reach this point');
            } catch (error) {
                expect(error.message).toBe('undefined is not a function');
            }
        }); 
    });
    
    describe('reduce', function() {
        ! true && it('Reduce on each member of the hooray resulting in a single output value', function() {
            var hooray = new Hooray(1, 2, 3, 4);
            var answer = 20;
    
            var result = hooray.reduce(function(acum, actValue) {return acum + actValue;
            }, 10)
            
            expect(result).toEqual(answer);              
        });
    
        ! true && it('Reduce on each member of the hooray resulting in a single output value', function() {
            var hooray = new Hooray('c', 'a', 'r', 'm', 'e');
            var answer = 'ccarme';
    
            var result = hooray.reduce(function(acum, actValue) {return acum + actValue;
            }, 'c');
            
            expect(result).toEqual(answer);                                
        });
    
        ! true && it('should break on undefined callback', function () {

            expect(function(){hooray.reduce('frank')}).toThrowError();
        });
    });
    describe('reduceRight', function() {
        it('Reduce a single value from an hooray from right to left', function() {
            var hooray = new Hooray(1, 2, 3, 4, 5);
            var answer = 15;
    
            var result = hooray.reduceRight(function(acum, actValue) {return acum + actValue;
            })                
            expect(result).toEqual(answer);     
                    
        });
    
        it('Reduce on each member of the hooray resulting in a single output value', function() {
            var hooray = new Hooray('c', 'a', 'r', 'm', 'e');
            var answer = 'emrac';
    
            var result = hooray.reduceRight(function(acum, actValue) { return acum + actValue;
            });
            
            expect(result).toEqual(answer);     
        });

        it('should break on undefined callback', function () {
    
        expect(function(){hooray.reduceRight('a')}).toThrowError();
        });
    });
    
    describe('reverse', function() {
        it('The first hooray element becomes the last, and the last hooray element becomes the first', function() {
            var hooray = new Hooray('one', 'two', 'three');
            var answer = new Hooray('three', 'two', 'one');
    
            var result = hooray.reverse();                         
                 
            expect(result).toEqual(answer);
        });
    });
    
    describe('shift', function() {
        ! true && it('removes the first element from an hooray', function() {
            var hooray = new Hooray(1, 2, 3);    
            var answer = [2, 3]
    
            var result = hooray.shift();
    
            expect(result).toEqual(answer);   
            
        });
    });
    
    describe('isArray', function() {
        it('Determines whether the passed value is an hooray', function() {
            var hooray = new Hooray('c','a','r');
            var answer = true;
            var result = Hooray.isArray(hooray);           
            expect(result).toEqual(answer);           
          
        });
    
        ! true && it('should break on undefined array', function () {
            
            try {
                isArray();
    
                throw Error('should not reach this point');
            } catch (error) {
                expect(error.message, 'undefined is not an array');
            }
        });
    
    });




});
