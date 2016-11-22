'use strict';

window.onload = function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var peeps = document.querySelector('#peeps'),
                data = JSON.parse(this.responseText);
            console.log(data);
            shuffle(data);

            for(var id in data) {
                var name = data[id][0],
                    url = data[id][1];

                var a = document.createElement('A'),
                    img = document.createElement('IMG');
                
                a.setAttribute('href', 'https://facebook.com/' + id);
                img.setAttribute('src', url);

                a.appendChild(img);
                peeps.appendChild(a);
            }
        }
    };
    
    xhr.open("GET", "data.json", true);
    xhr.send();
};