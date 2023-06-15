 class KeyGenerator {
	static key = 0;

	static GetNextKey() {
		let toreturn = KeyGenerator.key;
		KeyGenerator.key++;
		return toreturn;
	}
}
export default KeyGenerator