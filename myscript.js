var circle = document.getElementById('circle');
var upBbtn = document.getElementById('up_btn');
var downBbtn = document.getElementById('down_btn');

var rotateValue = circle.style.transform;
var rotateForm;

up_btn.onclick = function () 
{
    rotateForm = rotateValue + 'rotate(-90deg)';
    circle.style.transform = rotateForm;
    rotateValue = rotateForm;
}
down_btn.onclick = function () 
{
    rotateForm = rotateValue + 'rotate(90deg)';
    circle.style.transform = rotateForm;
    rotateValue = rotateForm;
}