window.addEventListener('load', function() {
    var products = [];
    var productsSort = [];
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'js/products.json');
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            products = JSON.parse(xhr.responseText);
            for(var i=0;i<products.length;i++) {
                productsSort[i] = (products[i].category);
            }
            //Удаляем дубли категорий
            productsSort = _.uniq(productsSort);
            // -- Удаляем дубли категорий

            //Подключение Lodash _.template
            var tmplProducts = document.getElementById('products').innerHTML.trim();
            tmplProducts = _.template(tmplProducts);
            document.getElementById('main-content').innerHTML = tmplProducts({
                list: products
            });
            var tmplList = document.getElementById('category').innerHTML.trim();
            tmplList = _.template(tmplList);
            document.getElementById('list-group').innerHTML = tmplList({
                cat: productsSort
            });
            // -- Подключение Lodash _.template
        }

    };
});