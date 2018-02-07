var imie, nazwisko = "Nowak";
imie = "Janusz";
document.write(imie);
//+ konkatenacja
document.write("<br>Masz na imię: " + imie + "<br>");
document.write("Twoje nazwisko to " + nazwisko + "<br>");

var wiek = 13;
if(wiek<=15)
    document.write("Jesteś dzieckiem");
else if(wiek >= 65)
    document.write("Masz dużo lat");
else if(wiek >=18)
    document.write("Jesteś pełnoletni");
else
    document.write("Nie jesteś pełnoletni");


//######################################################

var x,y;
x = 10;
y = 5;
var suma = x + y;
//alert("suma wynosi: " + suma);
var roznica = x - y;
var dzielenie;
dzielenie = x/y;
mnozenie = x * y;
modulo = x % y; //modulo - reszta z dzielenia
console.log(modulo);
