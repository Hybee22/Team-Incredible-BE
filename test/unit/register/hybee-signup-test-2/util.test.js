const functions = require('./util');

test('should get the first name', () => {
  const firstName = functions.checkName('Adekunle');
  expect(firstName).not.toBeUndefined();
});

test('should get the last name', () => {
  const lastName = functions.checkName('Adekunle');
  expect(lastName).not.toBeUndefined();
});

test('should get the email', () => {
  const email = functions.checkEmail('adefemi101@gmail.com');
  expect(email).toMatch(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
});

const password = functions.checkPassword('olaWale_17#');
test('password should be 8 chars or more and must contain at least 1 lowercase, uppercase, numeric and special characters', () => {
  expect(password).toMatch(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@#\$%\^&\*])(?=.{8,})/
  );
});

test('confirm password', () => {
  const confirmPassword = functions.confirmPassword('olaWale_17#');
  expect(password).toEqual(confirmPassword);
});
