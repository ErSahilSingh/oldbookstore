//--------------------------------buy----------------------------//

function buy(){

    var Bookname=$("#boname").val();
    var Authorname=$("#auname").val();
    var buy={
      Bookname:Bookname,
      Authorname:Authorname,
      
    }
    console.log(JSON.stringify(buy));
$.post("/buy/buys",
buy,
function (data,status){
  window.scrollBy(0,300);
  let arrayData=data.data;
 // console.log(arrayData);
  for(let i=0;i<arrayData.length;i++){

let arr=`<tr>
<td>${arrayData[i].Fullname}</td>
<td>${arrayData[i].Phone}</td>
<td>${arrayData[i].Bookname}</td>
<td>${arrayData[i].Authorname}</td>
<td>${arrayData[i].Price}</td>`

$('#search').append(arr);
//window.scrollBy(200,0);
  }
    //alert("data:"+ data +"\n status:"+status);
}
)
  }