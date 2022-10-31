import axios from 'axios';
import _ from 'lodash';

axios
	.get('https://jsonplaceholder.typicode.com/users/1')
	.then((res) => {
		console.log(res.data);
	})
	.catch((err) => console.log(err));
