
const getRandElement=<T,>(list: T[]): T=>{
	const raIdx = Math.floor(Math.random() * list.length);
	return list[raIdx];
}