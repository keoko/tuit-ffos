var button = document.getElementById('myButton');
var txtInput = document.getElementById('myTextInput');
button.addEventListener('click', function() {
    var text = txtInput.value;
    alert(text);
})
