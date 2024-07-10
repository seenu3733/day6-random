var num=Math.floor(Math.random()*101);
var count=0;

function findnum()
{
    var gu_num=parseInt(document.getElementById("n1").value);
    count+=1;
    if(gu_num==num)
    {
        document.getElementById("w").textContent="Congratulations!!!";
    }
    else if(gu_num>num)
    {
        document.getElementById("w").textContent="try with smaller number";
    }
    else
    {
        document.getElementById("w").textContent="try with greater number";
    }
    document.getElementById("num").textContent=count;
}