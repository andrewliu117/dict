
test = ['ð','ðo', ]

// 长元音
cyy = ['ɑ:', 'ɔ:', 'ɜ:','u:'];

// 短元音
dyy = ['ʌ', 'ɒ', 'ə', 'ɪ', 'u', 'e', 'æ']
// 双元音
syy = ['eɪ', 'aɪ', 'ɔɪ', 'ɪə', 'eə', 'ʊə', 'əʊ', 'aʊ', 'o']
// 轻辅音
qfy = ['p', 't', 'k', 'f', 'θ', 's', 'ʃ', 'h', 'ts', 'tʃ', 'tr']
// 浊辅音
zfy = ['b', 'd', 'g', 'v', 'ð', 'z', 'ʒ', ' r', 'dz', 'dʒ', 'dr']
// 鼻音，边音
by = ['m', 'n', 'ŋ', 'ǀ']
// 半元音
byy = ['j', 'w']		

for (var i = cyy.length - 1; i >= 0; i--) {
	console.log(cyy[i]);
};


for (var i = 0; i <= test[0].length - 1; i++) {
	// console.log(test[0].substring(i, i+1));
	for (var j = zfy.length - 1; j >= 0; j--) {
		if (test[0].substring(i, i+1) === zfy[j]) {
			console.log("is in zfy")
			console.log(typeof(zfy[j]))
			console.log(typeof(test[0].substring(i, i+1)));
		};
	};
	// if (test[0].substring(i, i+1) in zfy) {
	// 	console.log("in zfy");
	// }
}


// if (zfy[4] in zfy) {console.log("zfy 4 in zfy")};

// for (var i = zfy.length - 1; i >= 0; i--) {
// 	if (zfy[4] == zfy[i]) {
// 		console.log("haha 4");
// 	}
// 	console.log(zfy[i])
// };