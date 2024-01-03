export const mockMatchMedia = (mediaQuery: any) => ({
	media: mediaQuery,
	matches: mediaQuery === "(max-width: 768px)",
	addListener: jest.fn(),
	removeListener: jest.fn(),
	onchange: null,
});
