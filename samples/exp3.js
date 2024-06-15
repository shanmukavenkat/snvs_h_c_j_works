function allowDrop(ev)
{
    ev.preventDefault();
}
function drag(ev)
{
    ev.dataTransfer.setData("Text/html",ev.target.id);
}
function drop(ev)
{
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text/html");
    ev.target.appendChild(document.getElementById(data));
}