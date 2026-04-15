// 1
let x = 5
let y = 3
let didesnis = 0
if (x > y){
    didesnis += x;
    console.log("skaicius x yra didesnis", didesnis);
}
else if (x < y){
    didesnis += y;
    console.log("skaicius y yra didesnis", didesnis);
}

else {
    console.log("skaiciai yra lygus")
}

// 2

let age = 50;

if (age <= 12) {
    console.log("Vaikas")
}
else if (age >= 13 && age <= 17) {
    console.log("Paauglys")
}
else if (age >= 18 && age <=64) {
    console.log("Suauges")
}
else {
    console.log("Senjoras")
}

// 3

let men = 5;

switch (men) {
    case 1:
        console.log("Ziema")
        break;
    case 2:
        console.log("Ziema")
        break;
    case 3:
        console.log("Pavasaris")
        break;
    case 4:
        console.log("Pavasaris")
        break;
    case 5:
        console.log("Pavasaris")
        break;
    case 6:
        console.log("Vasara")
        break;
    case 7:
        console.log("Vasara")
        break;
    case 8:
        console.log("Vasara")
        break;
    case 9:
        console.log("Ruduo")
        break;
    case 10:
        console.log("Ruduo")
        break;
    case 11:
        console.log("Ruduo")
        break;
    case 12:
        console.log("Ziema")
        break;
}

// 4

let rez = 94;

if (rez >= 90 && rez <= 100) {
    console.log("A")
}
else if (rez >= 80 && rez <= 89) {
    console.log("B")
}
else if (rez >= 70 && rez <= 79) {
    console.log("C")
}
else if (rez >= 60 && rez <= 69) {
    console.log("D")
}
else if (rez >= 50 && rez <= 59) {
    console.log("E")
}
else {
    console.log("nepakankamas")
}

// 5

let valanda = 14;

if (valanda >= 5 && valanda <= 11) {
  console.log("Rytas");
} else if (valanda >= 12 && valanda <= 17) {
  console.log("Popietė");
} else if (valanda >= 18 && valanda <= 22) {
  console.log("Vakaras");
} else {
  console.log("Naktis");
}


// 6

let diena = 1;

switch (diena) {
  case 1:
    console.log("Šiandien pirmadienis, sėkmingos savaitės pradžios!");
    break;
  case 2:
    console.log("Šiandien antradienis");
    break;
  case 3:
    console.log("Šiandien trečiadienis");
    break;
  case 4:
    console.log("Šiandien ketvirtadienis");
    break;
  case 5:
    console.log("Šiandien penktadienis");
    break;
  case 6:
    console.log("Šiandien šeštadienis");
    break;
  case 7:
    console.log("Šiandien sekmadienis");
    break;
  default:
    console.log("Neteisinga diena");
}


// 7

let sportas = "krepšinis";

switch (sportas) {
  case "futbolas":
    console.log("Reikės futbolo kamuolio");
    break;
  case "krepšinis":
    console.log("Reikės krepšinio kamuolio");
    break;
  case "tenisas":
    console.log("Reikės teniso raketės");
    break;
  default:
    console.log("Nežinomas sportas");
}

// 8

let skaicius = 7;

if (skaicius % 2 === 0) {
  console.log("Lyginis");
} else {
  console.log("Nelyginis");
}


// 9

let balas = 65;

if (balas >= 50) {
  console.log("Laikė");
} else {
  console.log("Nelaikė");
}


// 10

let salis = "Lietuva";

switch (salis) {
  case "Lietuva":
    console.log("Sveiki");
    break;
  case "Japonija":
    console.log("こんにちは");
    break;
  case "Italija":
    console.log("Ciao");
    break;
  default:
    console.log("Nežinoma šalis");
}