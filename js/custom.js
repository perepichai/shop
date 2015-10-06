window.addEventListener('load', function() {
    var products = [];
    var xhr = new XMLHttpRequest;
    xhr.open('get', 'js/products.json');
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            //Подключение Lodash _.template

            var tmpl = document.getElementById('products').innerHTML.trim();
            tmpl = _.template(tmpl);


            document.getElementById('main-content').innerHTML = tmpl({
                list: JSON.parse(xhr.responseText)
            });
        }

    };

});