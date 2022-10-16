export function delay(ms: number) {
	return new Promise<void>(rs => setTimeout(rs, ms))
}
export default delay