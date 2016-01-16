var quotes = [
'"Agent albo wariat"', 
'"Ale czy marihuana jest z konopi? Chyba nie"', 
'"Głodówka to nie jest niezjedzenie kolacji"', 
'"Będziemy mieli w Warszawie Budapeszt"',
'"Marsz, marsz Dąbrowski, z ziemi polskiej do Wolski"',
'"Jeśli Lech Kaczyński zostanie prezydentem, ja nie będę premierem"',
'"Kazimierz Marcinkiewicz to premier na cztery lata"',
'"Najkrótsza droga do dechrystianizacji Polski prowadzi przez Zjednoczenie Chrześcijańsko-Narodowe"',
'"Pan jest łobuzem, śląskim łobuzem!"',
'"Precz z płatnym seksem!"',
'"Robimy dla Polski dużo, bardzo dużo... aż trudno wymienić"',
'"Żadne krzyki i płacze nas nie przekonają, że białe jest białe, a czarne jest czarne"',
'"Ruski agencie, załatwimy cię!"',
'"My jesteśmy tu gdzie wtedy. Oni tam gdzie stało ZOMO"', 
'"Przyjrzyjcie się mi, bo patrzycie na Łukaszenkę"', 
'"Najgorszy sort Polaków"', 
];

var elements = document.getElementsByTagName('*');
var pattern = /(J.|Jar\S+) (Kaczyński)/; 
var match; 

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var repl = text; 

            while(match = pattern.exec(repl)) { 
              repl = repl.replace(pattern, 
              match[1] + 
              " " + quotes[Math.floor(Math.random()*quotes.length)] + " " + 
              match[2]); 
            }             

            if (repl !== text) {
                element.replaceChild(document.createTextNode(repl), node);
            }
        }
    }
}
