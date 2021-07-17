function calculateAaya() {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;
  const lengthInch = document.getElementById("lengthInch").value;
  const widthInch = document.getElementById("widthInch").value;

  console.log(lengthInch);
  console.log(widthInch);

  const lengthFeet = lengthInch/12;
  const widthFeet = widthInch/12;

  console.log(lengthFeet);
  console.log(widthFeet);

  const finalLength = Number(length) + Number(lengthFeet);
  const finalWidth = Number(width) + Number(widthFeet);

  console.log(finalLength);
  console.log(finalWidth);

  const totalArea = Math.ceil(finalLength*finalWidth);
  console.log(totalArea);

  // const kshetraPadamu = totalArea/9;
  // console.log(kshetraPadamu);

// aayam
  const aayaNumber = (totalArea*9)%8;
  console.log(aayaNumber);

  if(aayaNumber == 1){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Dwajayam)";
  }
  if(aayaNumber == 2){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Dhumayam)";
  }
  if(aayaNumber == 3){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Shimayam)";
  }
  if(aayaNumber == 4){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Shwanayam)";
  }
  if(aayaNumber == 5){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Vrushabayam)";
  }
  if(aayaNumber == 6){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Kharayam)";
  }
  if(aayaNumber == 7){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Gajayam)";
  }
  if(aayaNumber == 8){
    document.getElementById("aayaNumber").innerHTML = "Aayam: "+ aayaNumber + " (Shakayam)";
  }

  // dhanam, runam & labham
  let dhanam = totalArea*8;
  let finalDhanam = dhanam%12;
  console.log(dhanam);
  console.log(finalDhanam);
  if(finalDhanam == 0){
    finalDhanam = 12
  }
  let runam = totalArea*3;
  let finalRunam = runam%8;
  if(finalRunam == 0){
    finalRunam = 8
  }
  let labham = Number(finalDhanam) - Number(finalRunam);
  document.getElementById("dhanam").innerHTML = "Dhanam: "+ finalDhanam;
  document.getElementById("runam").innerHTML = "Runam: "+ finalRunam;
  document.getElementById("labham").innerHTML = "Labham: "+ labham;
  console.log(finalDhanam);
  console.log(finalRunam);
  console.log(labham);


// aayush
let aayush = totalArea*9;
let finalAayush = aayush%120;
console.log(aayush);
console.log(finalAayush);
if(finalAayush == 0){
  finalAayush = 120
}
document.getElementById("aayush").innerHTML = "Aayush: "+ finalAayush + " years";



// varam
let varam = totalArea*9;
let finalVaram = varam%7;
console.log(varam);
console.log(finalVaram);
if(finalVaram == 0){
  finalVaram = 7
}

if(finalVaram == 1){
document.getElementById("varam").innerHTML = "Varam: "+ finalVaram + " (Sunday)";
}

if(finalVaram == 2){
document.getElementById("varam").innerHTML = "Varam: "+ finalVaram + " (Monday)";
}

if(finalVaram == 3){
document.getElementById("varam").innerHTML = "Varam: "+ finalVaram + " (Tuesday)";
}

if(finalVaram == 4){
document.getElementById("varam").innerHTML = "Varam: "+ finalVaram + " (Wednesday)";
}

if(finalVaram == 5){
document.getElementById("varam").innerHTML = "Varam: "+ finalVaram + " (Thursday)";
}

if(finalVaram == 6){
document.getElementById("varam").innerHTML = "Varam: "+ finalVaram + " (Friday)";
}

if(finalVaram == 7){
document.getElementById("varam").innerHTML = "Varam: "+ finalVaram + " (Saturday)";
}


// tithi
let tithi = totalArea*6;
let finalTithi = tithi%30;
console.log(tithi);
console.log(finalTithi);
if(finalTithi == 0){
  finalTithi = 30
}

if(finalTithi == 1 || finalTithi == 16){
document.getElementById("tithi").innerHTML = "Tithi: Padayami";
}

if(finalTithi == 2 || finalTithi == 17){
document.getElementById("tithi").innerHTML = "Tithi: Vidhiya";
}

if(finalTithi == 3 || finalTithi == 18){
document.getElementById("tithi").innerHTML = "Tithi: Thitiya";
}

if(finalTithi == 4 || finalTithi == 19){
document.getElementById("tithi").innerHTML = "Tithi: Chavithi";
}

if(finalTithi == 5 || finalTithi == 20){
document.getElementById("tithi").innerHTML = "Tithi: Panchami";
}

if(finalTithi == 6 || finalTithi == 21){
document.getElementById("tithi").innerHTML = "Tithi: Shasti";
}

if(finalTithi == 7 || finalTithi == 22){
document.getElementById("tithi").innerHTML = "Tithi: Sapthami";
}

if(finalTithi == 8 || finalTithi == 23){
document.getElementById("tithi").innerHTML = "Tithi: Astsmi";
}

if(finalTithi == 9 || finalTithi == 24){
document.getElementById("tithi").innerHTML = "Tithi: Navami";
}

if(finalTithi == 10 || finalTithi == 25){
document.getElementById("tithi").innerHTML = "Tithi: Dashami";
}

if(finalTithi == 11 || finalTithi == 26){
document.getElementById("tithi").innerHTML = "Tithi: Akadashi";
}

if(finalTithi == 12 || finalTithi == 27){
document.getElementById("tithi").innerHTML = "Tithi: Dwadashi";
}

if(finalTithi == 13 || finalTithi == 28){
document.getElementById("tithi").innerHTML = "Tithi: Triodashi";
}

if(finalTithi == 14 || finalTithi == 29){
document.getElementById("tithi").innerHTML = "Tithi: Chaturdashi";
}

if(finalTithi == 15){
document.getElementById("tithi").innerHTML = "Tithi: Purnima";
}

if(finalTithi == 30){
document.getElementById("tithi").innerHTML = "Tithi: Amaavasya";
}










}
