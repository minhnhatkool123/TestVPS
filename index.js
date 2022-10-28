const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/test', (req, res) => {
	try {
		let products = [
			{
				id: 1,
				name: 'laptop',
				price: 100,
			},
			{
				id: 2,
				name: 'phone',
				price: 120,
			},
			{
				id: 3,
				name: 'TV',
				price: 400,
			},
		];
		return res.status(200).json(products);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
