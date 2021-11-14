

var input=document.getElementsByTagName('input')[0];
var button=document.getElementsByTagName('button')[0];
button.addEventListener("click",clickfn);
function clickfn(e)
{
    e.preventDefault();
    if(input.value=="")
    {
        return;
    }

        
    var row=document.getElementsByClassName('rs')[0];
    var div=document.createElement('div');

    div.appendChild(document.createTextNode(input.value));
    div.classList.add('col-7','px-3','py-3','mb-3','shadow');
    row.appendChild(div);
    div.addEventListener('click',fn);
    input.value="";
   
    
  

}
function fn(e)
{
    e.srcElement.style.display='none';
}







   
