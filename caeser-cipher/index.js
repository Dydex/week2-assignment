function encrypt(text, shift) {
  let encryptResult = "";

  for (let char of text) {
    if (char >= "a" && char <= "z") {
      encryptResult += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97,
      );
    } else if (char >= "A" && char <= "Z") {
      decryptResult += String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65,
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
    if (char >= "a " && char <= "z") {
      decryptResult += String.fromCharCode(
        ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97,
      );
    } else if (char >= "A" && char <= "Z") {
      decryptResult += String.fromCharCode(
        ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65,
      );
    } else {
      decryptResult += char;
    }
  }

  return decryptResult;
}

console.log(
  decrypt("AOLYLHYLUVZLJYLAZILAALYAOHUAOLZLJYLAZAOHALCLYFIVKFNBLZZLZ", 7),
);
