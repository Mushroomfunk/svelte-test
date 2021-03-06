const base = 'https://babydriver-dev.bambinimirror.com/json';
// VITE_CDN1_URL=https://cdn1.bambinifashion.com/universal
async function send({ method, path, data }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);

		return fetch(`${base}/${path}`, opts).then((r) => r.json());
	}
}

export function get(path) {
	return send({ method: 'GET', path });
}

export function del(path) {
	return send({ method: 'DELETE', path });
}

export function post(path, data) {
	return send({ method: 'POST', path, data });
}

export function put(path, data) {
	return send({ method: 'PUT', path, data });
}
