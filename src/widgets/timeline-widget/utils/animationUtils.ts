export const generateAnimationKey = (() => {
	let key = 0
	return () => ++key
})()
