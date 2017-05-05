// Simple password for homework solutions


function showSolution(num) {
  if (isCorrectHex()) {
    document.getElementById('solution' + num).style.display = 'block';
  }
}

function isCorrectBinary() {
  // Asks for binary version of decimal number as a lock.
  var testDec = Math.floor(Math.random() * 256);
  var testBin = dec2bin(testDec); 
  var responseBin = prompt(testDec,"0b"); 
  return testBin === responseBin;
}

function isCorrectHex() {
  // Asks for hex version of decimal number as a lock.
  var testDec = Math.floor(11 + Math.random() * 256);
  var testHex = dec2hex(testDec); 
  var responseHex = prompt(testDec,"0x"); 
  return testHex === responseHex;
}


function dec2bin(dec) {
  //both dec and bin are string
  dec = parseInt(dec,10); // Convert to integer
  var bin;
  bin = dec.toString(2) // Outputs string
  return bin;
}

function bin2dec(bin) {
  //both dec and bin are string
  var dec;
  dec = parseInt(bin,2);
  return dec.toString();
}

function dec2hex(dec) {
  //both dec and bhexin are strings
  dec = parseInt(dec,10); // Convert to integer
  var hex;
  hex = dec.toString(16) // Outputs string
  return hex;
}

function hex2dec(hex) {
  //both dec and hex are strings
  var dec;
  dec = parseInt(hex,16);
  return dec.toString();
}