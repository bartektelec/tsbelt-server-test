import { A } from '@mobily/ts-belt';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const mappedServerArray = A.map([1, 2, 3], x => x * 2);

	return {
		mappedServerArray,
	};
};
