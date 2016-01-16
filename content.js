var quotes = [
'"Agent albo wariat"', 
'"Ale czy marihuana jest z konopi? Chyba nie"', 
'"Głodówka to nie jest niezjedzenie kolacji"', 
'"będziemy mieli w Warszawie Budapeszt"',
'"Marsz, marsz Dąbrowski, z ziemi polskiej do Wolski"',
'"Jeśli Lech Kaczyński zostanie prezydentem, ja nie będę premierem"',
'"Kazimierz Marcinkiewicz to premier na cztery lata"'
];

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var repl = text; 

            repl = text.replace(/Kaczyński/g, 
              function(){
                return quotes[Math.floor(Math.random()*quotes.length)] + " Kaczyński";});

            if (repl !== text) {
                element.replaceChild(document.createTextNode(repl), node);
            }
        }
    }
}
