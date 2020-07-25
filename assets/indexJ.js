//collecting the checked boxes which is to be deleted
let del=function(){
  $('#delete-button-div').on('click',function(){
   var checkedList = $('input:checkbox:checked');
   var items = new Array();
  if(checkedList.length>0)
  {
      for( let i of checkedList)
      {
          items.push(i.getAttribute("value"));
      }
      sendResponse(items);
  }

});
//sending this array of checked boxes to server
function sendResponse(items){
  $.ajax({
    type: 'post',
    url:'/delete',
    data: {items:items},
    success:function(data){
      location.reload();
    }
  });
}
}
del();

let lineThrough = function(){
  var checkboxes = $('.cross input');
  var descriptions = $('.cross2');
  var dates = $('.cross3');
  for(let i = 0;i < checkboxes.length;i++){

    $(checkboxes[i]).on('click', function(){

       if(checkboxes[i].checked){
         descriptions[i].style.textDecoration = "line-through";
         dates[i].style.textDecoration = "line-through";
       } else {
         descriptions[i].style.textDecoration = 'none';
         dates[i].style.textDecoration = 'none';
       }
    });
  }
}
lineThrough();