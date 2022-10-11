export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const random = () => {
	return { type: "RND", value: Math.floor(Math.random() * 30) }};