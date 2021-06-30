function addtocart()
{
    var value = parseInt(document.getElementById('p-sumprice').value, 10);
    value = isNaN(value) ? 0 : value;
    value = value + 545;
    document.getElementById('p-sumprice').value = value;
}
function addtocartquantity()
{
    var value = parseInt(document.getElementById('p-quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('p-quantity').value = value;
}