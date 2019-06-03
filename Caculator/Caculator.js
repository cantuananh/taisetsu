// //chuyen het button thanh input type button
// //chuyen het code js thanh jquery
// function getNumber(value){
//     var getValue =  document.getElementById('input');
//     getValue.value += value;
// }
// function clearScreen(){
//     document.getElementById('input').value = "";
//     document.getElementById('result').value = "";
// }

// function backSpace(){
//     var input_var = document.getElementById('input');
//     var backSpace =input_var.value;
//     // if(backSpace.length > 0){
//         backSpace = backSpace.substring(0, backSpace.length-1);
//         input_var.value = backSpace;
//     // }
// }
// //ten ham dat cho co nghia
// function caculate(){

//     var result = document.getElementById('input').value;
//     document.getElementById('result').value = result + '=' ;
//     document.getElementById('input').value = eval(document.getElementById('input').value);
// }

// //thong nhat cach dat ten ham
// function getPercent(percent){
//     var percent = document.getElementById('input').value;
//     document.getElementById('result').value = percent + '%' + '=';
//     document.getElementById('input').value = eval(document.getElementById('input').value) /100;

// }

$(document).ready(function(){
    $('.result').attr('disabled','true');
    $('.btn-equal').attr('disabled','true');
    $('.btn-multiply').attr('disabled','true');
    $('.btn-divide').attr('disabled','true');
    $('.btn-percent').attr('disabled','true');



    
    $('.btn').click(function () {
       $('#input').val($('#input').val() + $(this).val());
       $('.btn-caculator').removeAttr('disabled');
       $('.btn-equal').removeAttr('disabled');
       $('.btn-percent').removeAttr('disabled');
       if ($('#input').val() == '0'){

       }else
       {

       }


      });

    $('#AC').click(function () {
        number = '';
        $('#input').val(number);
        $('.btn-equal').attr('disabled','true');
        $('.btn-multiply').attr('disabled','true');
        $('.btn-divide').attr('disabled','true');
        $('.btn-dot').removeAttr('disabled');
        $('#result').val(number);
    
      });
    $('#CE').click(function () {
        var ceCaculator = $('#input').val();
        var ceCaculator = ceCaculator.substr(0, ceCaculator.length-1);
        $('#input').val(ceCaculator);
    }); 

    // $('.btn-caculator').click(function(){
    //     $('#input').val($('#input').val() + $(this).val()) ; 
    //     $('.btn-dot').removeAttr('disabled');
    //     $('.btn-caculator').attr('disabled','true');
    // });

    $('.btn-dot').click(function () {
        $('#input').val($('#input').val() + $(this).val()) ;
        $('.btn-caculator').attr('disabled','true');
        $('.btn-dot').attr('disabled','true');
      });

      $('.equal').click(function () {
        var result = $('#input').val();
        $('#input').val(result);
        $('#result').val(eval(result));
        
      });

      $('.btn-percent').click(function () {
        $('#input').val($('#input').val() + $(this).val());

      });

      $('.operation').click(function(e){
        e.preventDefault();
        operation =$(this).attr("data-operation");
        $('#input').val($('#input').val() + operation) ; 
        $('.btn-dot').removeAttr('disabled');
        $('.btn-caculator').attr('disabled','true');
    });


});