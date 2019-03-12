function cookieExists(name) {
    var result = $.cookie(name);
    if (result == undefined)
        return false;
    return true;
}

function createCookie(name, value) {
    var itemArray = [value];
    var cookie = [name, '=', JSON.stringify(itemArray)].join('');
    document.cookie = cookie;
}

function insertIntoCookie(name, value) {
    var cartCookieValue = $.cookie(name);
    var cart = JSON.parse(cartCookieValue);
    var itemId = value.id;
    // check if exists
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == itemId) {
            return
        }
    }
    cart.push(value);
    var cookie = [name, '=', JSON.stringify(cart)].join('');
    document.cookie = cookie;
}

function removeFromCookie(name, id) {
    var cartCookieValue = $.cookie(name);
    var cart = JSON.parse(cartCookieValue);
    if (cart.length > 0) {
        var index;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                index = i;
                break;
            }
        }
        cart.splice(index, 1);
        var cookie = [name, '=', JSON.stringify(cart)].join('');
        document.cookie = cookie;
    }
}

