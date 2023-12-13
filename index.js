// Chinese Zodiac Signs
const Dragon = [1940, 1952, 1964, 1976, 1988, 2000, 2012];
const Snake = [1941, 1953, 1965, 1977, 1989, 2001, 2013];
const Horse = [1942, 1954, 1966, 1978, 1990, 2002, 2014];
const Goat = [1943, 1955, 1967, 1979, 1991, 2003, 2015];
const Monkey = [1944, 1956, 1968, 1980, 1992, 2004, 2016];
const Rooster = [1945, 1957, 1969, 1981, 1993, 2005, 2017];
const Dog = [1946, 1958, 1970, 1982, 1994, 2006, 2018];
const Pig = [1947, 1959, 1971, 1983, 1995, 2007, 2019];
const Rat = [1948, 1960, 1972, 1984, 1996, 2008, 2020];
const Ox = [1949, 1961, 1973, 1985, 1997, 2009, 2021];
const Tiger = [1950, 1962, 1974, 1986, 1998, 2010, 2022];
const Rabbit = [1951, 1963, 1975, 1987, 1999, 2011, 2023];

function name_valid(){
  let name = document.getElementById("name").value;
  let year = parseInt(document.getElementById("year").value);
  if(!name){
    alert("Input Name");
  }
  else if(!year){
    alert("Input Year");
  }
  
  else{
    find_czyear();
  }
}


function find_czyear(){
let year = parseInt(document.getElementById("year").value);
let image = document.getElementById("img");
switch (true) {
  case Dragon.includes(year):
    document.getElementById("cz-title").innerHTML = "Dragon";
    document.getElementById("cs-description").innerHTML = ` The Dragon is powerful, charismatic, and confident. 
    People born in the Year of the Dragon are considered as dynamic and ambitious leaders.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-dragon.webp";
    break;
  case Snake.includes(year):
    document.getElementById("cz-title").innerHTML = "Snake";
    document.getElementById("cs-description").innerHTML = ` The Snake is intelligent, mysterious, and insightful. 
    Those born in the Year of the Snake are often seen as perceptive and resourceful individuals.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-snake.webp";
    break;
  case Horse.includes(year):
    document.getElementById("cz-title").innerHTML = "Horse";
    document.getElementById("cs-description").innerHTML = ` The Horse is enthusiastic, energetic, and independent. 
    People born in the Year of the Horse are known for their free-spirited and adventurous nature.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-horse.webp";
    break;
  case Goat.includes(year):
    document.getElementById("cz-title").innerHTML = "Goat";
    document.getElementById("cs-description").innerHTML = ` The Goat is artistic, kind, and compassionate. 
    Individuals born in the Year of the Goat are often associated with creativity and a nurturing personality.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-goat.webp";
    break;
  case Monkey.includes(year):
    document.getElementById("cz-title").innerHTML = "Monkey";
    document.getElementById("cs-description").innerHTML = ` The Monkey is clever, witty, and mischievous. 
    People born in the Year of the Monkey are known for their intelligence and sense of humor.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-monkey.webp";
    break;
  case Rooster.includes(year):
    document.getElementById("cz-title").innerHTML = "Rooster";
    document.getElementById("cs-description").innerHTML = ` The Rooster is confident, organized, and honest. 
    Those born in the Year of the Rooster are seen as punctual and principled individuals.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-rocket.webp";
    break;
  case Dog.includes(year):
    document.getElementById("cz-title").innerHTML = "Dog";
    document.getElementById("cs-description").innerHTML = ` The Dog is loyal, faithful, and protective. 
    Individuals born in the Year of the Dog are often associated with a strong sense of duty and integrity.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-dog.webp";
    break;
  case Pig.includes(year):
    document.getElementById("cz-title").innerHTML = "Pig";
    document.getElementById("cs-description").innerHTML = ` The Pig is compassionate, generous, and sociable. 
    People born in the Year of the Pig are known for their kind-hearted and easygoing nature.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-pig.webp";
    break;
  case Rat.includes(year):
    document.getElementById("cz-title").innerHTML = "Rat";
    document.getElementById("cs-description").innerHTML = ` The Rat is known for being quick-witted, resourceful, and adaptable. 
    People born in the Year of the Rat are considered intelligent and charming, with a strong work ethic.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-rat.webp";
    break;
  case Ox.includes(year):
    document.getElementById("cz-title").innerHTML = "Ox";
    document.getElementById("cs-description").innerHTML = ` The Ox is diligent, dependable, and determined. 
    Those born in the Year of the Ox are seen as hardworking, practical, and reliable individuals.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-ox.webp";
    break;
  case Tiger.includes(year):
    document.getElementById("cz-title").innerHTML = "Tiger";
    document.getElementById("cs-description").innerHTML = ` The Tiger is courageous, confident, and adventurous. 
    People born in the Year of the Tiger are often seen as passionate and strong-willed.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-tiger.webp";
    break;
  case Rabbit.includes(year):
    document.getElementById("cz-title").innerHTML = "Rabbit";
    document.getElementById("cs-description").innerHTML = ` The Rabbit is gentle, kind, and sensitive. 
    Individuals born in the Year of the Rabbit are often associated with a peaceful and refined nature.;`
    image.src = "https://data.chinahighlights.com/image/travelguide/zodiac/chinese-zodiac-sign-2020-rabbit.webp";
    break;
}
}

