'use strict';

window.onload = function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var peeps = document.querySelector('#peeps'),
                data = JSON.parse(this.responseText),
                keys = Object.keys(data);

            keys.sort(function(a, b){
                return Math.random() - 0.5;
            });

            for(var id in keys) {
                var name = data[keys[id]][0],
                    url = data[keys[id]][1];

                var a = document.createElement('A'),
                    img = document.createElement('IMG');
                
                a.setAttribute('href', 'https://facebook.com/' + keys[id]);
                img.setAttribute('src', url);
                img.setAttribute('alt', name);
                img.setAttribute('title', name);

                a.appendChild(img);
                peeps.appendChild(a);
            }
        }
    };

    xhr.open("GET", "data.json", true);
    xhr.send();
};