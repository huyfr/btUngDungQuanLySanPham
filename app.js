let arr=["New Balance", "Ananas","ClubC85"];

function drawTable()
{
    let html="";
    html+="<table style='width: 50%'>";
    html+="<tr>";
    html+="<td colspan='3' style='text-align: left' ><b>Product name</b></td>";
    html+="</tr>";
    for (let i=0; i<arr.length; i++)
    {
        html+="<tr>";
        html+="<td style='height: 50px', width='200'>"+arr[i]+"</td>";
        html+="<td><button id='"+i+"' type='button' onclick='editItems(this.id)' style='float: right'>Edit</button></td>";
        html+="<td><button id='"+i+"' type='button' onclick='deleteItems(this.id)'>Delete</button></td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("content").innerHTML=html;
}

function addItems()
{
    let inputItems=document.getElementById("items").value;
    arr.push(inputItems);
    drawTable();
    resetItems();
}

function editItems(id)
{
    let editTxt=prompt("Nhap thong tin can sua");
    if (editTxt)
    {
        if (confirm("Ban co chac chan muon sua?"))
        {
            arr.splice(id,1,editTxt);
            drawTable();
        }
    }
}

function deleteItems(id)
{
    if (confirm("Ban co chac chan muon xoa?"))
    {
        arr.splice(id,1);
        drawTable();
    }
}

function resetItems()
{
    document.getElementById("items").value="";
}