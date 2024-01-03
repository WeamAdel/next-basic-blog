export const useMutation = jest.fn();

useMutation.mockImplementation((mutationFunction) => {
	return async (data: any) => {
		try {
			const result = await mutationFunction(data);
			return result;
		} catch (error) {
			throw error;
		}
	};
});

export const QueryClient = jest.fn();

QueryClient.mockImplementation(() => ({
	setQueryData: jest.fn(),
	getQueryData: jest.fn(),
}));
