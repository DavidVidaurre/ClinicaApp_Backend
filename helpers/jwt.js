import jwt from 'jsonwebtoken';
const SECRET_JWT_SEED = "$$$$AhoraTengoMoney$$$$"

const generarJWT = (uid, name) => {
	return new Promise((res, rej) => {
		const payload = { uid, name };
		jwt.sign(
			payload,
			// process.env.SECRET_JWT_SEED,
			SECRET_JWT_SEED,
			{
				expiresIn: 60*60*24,
			},
			(err, token) => {
				if (err) {
					console.log('Error: ' + err.toString());
					rej('No se pudo generar el token');
				} else {
					console.log(token);
					res(token);
				}
			}
		);
	});
};

export {
	generarJWT,
};
