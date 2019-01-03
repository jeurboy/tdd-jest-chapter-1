var Account = require('./Account');

test('create account should be success', () => {
	const MyAccount = new Account(50);

	expect(MyAccount).not.toBeNull();
});

test('create account with 50 should get 50', () => {
	const MyAccount = new Account(50);

	expect(MyAccount.amount).toBe(50);
});

test('create account with minus should get error', () => {
	const MyAccount = new Account(-50);

	expect(MyAccount.error).not.toBeUndefined();
});

test('test account 50 deposit 10 should get 60', () => {
	const MyAccount = new Account(50);

	MyAccount.deposit(10);

	expect(MyAccount.amount).toBe(60);
});

test('create account with 50 and set amount to 60', () => {
	const MyAccount = new Account(50);

	MyAccount.amount = 60
	expect(MyAccount.amount).toBe(60);
});

test('create account with 50 then set amount to -60 should be error and amount is 0', () => {
	const MyAccount = new Account(50);

	MyAccount.amount = -60;

	expect(MyAccount.error).not.toBeUndefined();
	expect(MyAccount.amount).toBe(0);
});

test('create account with 50 then withdraw 30 amount should be 20', () => {
	const MyAccount = new Account(50);

	MyAccount.withdraw(30)
	expect(MyAccount.amount).toBe(20);
});

test('create account with 50 then withdraw 60 should be error', () => {
	const MyAccount = new Account(50);

	MyAccount.withdraw(60)
	expect(MyAccount.error).not.toBeUndefined();
	expect(MyAccount.amount).toBe(50);
});