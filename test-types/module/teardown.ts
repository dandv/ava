import test from '../../entrypoints/main.mjs';

test('test', t => {
	t.teardown(() => {}); // eslint-disable-line @typescript-eslint/no-empty-function
	t.teardown(async () => {}); // eslint-disable-line @typescript-eslint/no-empty-function
});
