function encrypt(text, shift) {
  let encryptResult = "";

  for (let char of text) {
    if (char >= "a" && char <= "z") {
      encryptResult += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97,
      );
    } else {
      encryptResult += char;
    }
  }

  return encryptResult;
}

console.log(encrypt("dolapo", 7));

function decrypt(text, shift) {
  let decryptResult = "";

  for (let char of text) {
    if (char >= "a" && char <= "z") {
      decryptResult += String.fromCharCode(
        ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97,
      );
    } else {
      decryptResult += char;
    }
  }

  return decryptResult;
}

console.log(decrypt("kvshwv", 7));
