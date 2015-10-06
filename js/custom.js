window.addEventListener('load', function() {
    var products = [];
    var productsSort = [];
    var brandsSort = [];
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
                brandsSort[i] = (products[i].brand);
            }
            //Удаляем дубли категорий, брендов
            productsSort = _.uniq(productsSort);
            brandsSort = _.uniq(brandsSort);
            // -- Удаляем дубли категорий, брендов

            //Подключение Lodash _.template
            //Products
            var tmplProducts = document.getElementById('products').innerHTML.trim();
            tmplProducts = _.template(tmplProducts);
            document.getElementById('main-content').innerHTML = tmplProducts({
                list: products
            });
            //Category
            var tmplList = document.getElementById('category').innerHTML.trim();
            tmplList = _.template(tmplList);
            var tmplBrand = document.getElementById('brand').innerHTML.trim();
            tmplBrand = _.template(tmplBrand);
            document.getElementById('list-group-category').innerHTML = tmplList({
                cat: productsSort
            });
            document.getElementById('list-group-category').innerHTML += tmplBrand({
                brand: brandsSort
            });
            //Brands
            //document.getElementById('list-group-category').innerHTML += tmplBrand({
            //    brand: brandsSort
            //});
            // -- Подключение Lodash _.template
        }

    };
});