export const useRouter = jest.fn();

useRouter.mockImplementation(() => ({
	route: "/",
	query: {},
	asPath: "",
	push: jest.fn(),
}));
