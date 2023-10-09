import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const body = await request.formData();
        const textfield = body.get('textfield') as string;

        return { success: true, message: textfield };
    },
};
