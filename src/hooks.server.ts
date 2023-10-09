import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ resolve, event }) => {
    const { request } = event;

    console.log(request.url, request.method);

    return resolve(event);
};
