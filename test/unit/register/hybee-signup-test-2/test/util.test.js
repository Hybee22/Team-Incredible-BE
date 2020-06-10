const functions = require('../util');
const chai = require('chai');

// Assertion Style
chai.should();

describe('Signup Fields Tests', () => {
  it('it should get the first name', (done) => {
    const firstName = functions.checkName('Ibrahim');
    firstName.should.be.a('string');
    done();
  });

  it('it should get the last name', (done) => {
    const lastName = functions.checkName('Adekunle');
    lastName.should.be.a('string');
    done();
  });

  it('it should get the email', (done) => {
    const email = functions.checkEmail('adefemi101@gmail.com');
    email.should.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    done();
  });

  const password = functions.checkPassword('olaWale_17#');
  it('password should be 8 chars or more and must contain at least 1 lowercase, uppercase, numeric and special characters', (done) => {
    password.should.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@#\$%\^&\*])(?=.{8,})/
    );

    done();
  });

  it('it should confirm password', (done) => {
    const confirmPassword = functions.confirmPassword('olaWale_17#');
    password.should.be.eq(confirmPassword);

    done();
  });
});

/**
 *
 * BELOW ARE JEST TEST CODES
 */
// test('should get the first name', () => {
//   const firstName = functions.checkName('Ibrahim');
//   expect(firstName).not.toBeUndefined();
// });

// test('should get the last name', () => {
//   const lastName = functions.checkName('Adekunle');
//   expect(lastName).not.toBeUndefined();
// });

// test('should get the email', () => {
//   const email = functions.checkEmail('adefemi101@gmail.com');
//   expect(email).toMatch(
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// });

// const password = functions.checkPassword('olaWale_17#');
// test('password should be 8 chars or more and must contain at least 1 lowercase, uppercase, numeric and special characters', () => {
//   expect(password).toMatch(
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@#\$%\^&\*])(?=.{8,})/
//   );
// });

// test('confirm password', () => {
//   const confirmPassword = functions.confirmPassword('olaWale_17#');
//   expect(password).toEqual(confirmPassword);
// });
