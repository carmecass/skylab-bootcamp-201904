'use strict';

describe('logic', function () {
    var name = 'Peter';
    var surname = 'Seller';
    var email = 'peterseller@gmail.com';
    var password = '123';
    var confirmpassword = '123';

    beforeEach(function () {
        users.length = 0;
    });

    describe('register', function () {
        it('should succeed on correct data', function () {
            var user = {
                name: name,
                surname: surname,
                email: email,
                password: password,
            };

            var currentUsersCount = users.length;

            logic.register(name, surname, email, password, confirmpassword);

            expect(users.length).toBe(currentUsersCount + 1);

            var lastUser = users[users.length - 1];
            expect(lastUser).toEqual(user);
        });

        it('should fail on undefined name', function () {
            // expect(function () {
            //     logic.register(undefined, surname, email, password, confirmpassword);
            // }).toThrowError(TypeError, 'not a valid name');
            var _error;

            try {
                logic.register(undefined, surname, email, password, confirmpassword);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(2);
        });

        it('should fail on undefined surname', function () {
            // expect(function () {
            //     logic.register(undefined, surname, email, password, confirmpassword);
            // }).toThrowError(TypeError, 'not a valid name');
            var _error;

            try {
                logic.register(name, undefined, email, password, confirmpassword);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(3);
        });

        it('should fail on undefined email', function () {
            // expect(function () {
            //     logic.register(undefined, surname, email, password, confirmpassword);
            // }).toThrowError(TypeError, 'not a valid name');
            var _error;

            try {
                logic.register(name, surname, undefined, password, confirmpassword);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(4);
        });

        it('should fail on undefined password', function () {
            // expect(function () {
            //     logic.register(undefined, surname, email, password, confirmpassword);
            // }).toThrowError(TypeError, 'not a valid name');
            var _error;

            try {
                logic.register(name, surname, email, undefined, confirmpassword);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(5);
        });

        it('should fail on undefined confirmpassword', function () {
            // expect(function () {
            //     logic.register(undefined, surname, email, password, confirmpassword);
            // }).toThrowError(TypeError, 'not a valid name');
            var _error;

            try {
                logic.register(name, surname, email, password, undefined);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(6);
        });

        it('should fail on diferent password', function () {
            // expect(function () {
            //     logic.register(undefined, surname, email, password, confirmpassword);
            // }).toThrowError(TypeError, 'not a valid name');
            var _error;

            try {
                logic.register(name, surname, email, password, 234);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(7);
        });

        it('should fail on user already exsits', function () {
            
            users.push({
                name: name,
                surname: surname,
                email: email,
                password: password,
            });
            
            var _error;

            try {
                logic.register(name, surname, email, password, confirmpassword);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(8);
        });
    });

    describe('login', function () {
        beforeEach(function () {
            users.push({
                name: name,
                surname: surname,
                email: email,
                password: password
            });
        });

        it('should succeed on correct data', function () {
            logic.login(email, password);

            expect(logic.__userEmail__).toBe(email);
            expect(logic.__accessTime__ / 1000).toBeCloseTo(Date.now() / 1000, 1);
        });

        it('should fail on wrong email (unexisting user)', function(){
            // expect(function() {
            //     logic.login('pepitogrillo@gmail.com', password);
            // }).toThrowError(Error, 'wrong credentials');

            var _error;

            try {
                logic.login('pepitogrillo@gmail.com', password);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(1);
        });

        it('should fail on wrong password (existing user)', function(){
            // expect(function() {
            //     logic.login(email, '456');
            // }).toThrowError(Error, 'wrong credentials');

            var _error;

            try {
                logic.login(email, '456');
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(1);
        });

        // TODO fail cases
    });
});