function getELM(id){
    return document.getElementById(id).value;
};
show.style.display ='none';

 function findMin(){
     var sum = 0;
    for(var i=0; i<10000;i++){
        sum +=i;
        if(sum>10000){
            console.log(i);        
            show_item.innerHTML = "min number: "+i;
            return;
        }
    }
}
btnA.addEventListener('click', function(){
    findMin();
    show.style.display ='block';
})

// bài 2
showB.style.display ='none';
function countSum(){
    var x = getELM('so_x');
    var n = getELM('so_n');
    var temp =1,sum = 0;
    for(var i =0;i<n;i++){
        temp = temp*x;
        sum = sum +temp;
    }
    show_itemB.innerHTML = 'result : '+sum;
}
btnB.addEventListener('click', function(){
    countSum();
    showB.style.display ='block';
})
//bài 3
showC.style.display= 'none';
function count_n(){   
    var n =getELM('n');
    var x = 1;
    for( var i= 1;i<=n;i++){
       x = x*i;
    }
    show_itemC.innerHTML = 'result : '+x;
}
btnC.addEventListener('click', function(){
    count_n();
    showC.style.display ='block';
})
//bài 49
div.style.display = 'none';
function click_btn(){
    var x = document.querySelectorAll('.name');
     for(var i= 0; i< x.length;i++){
         if(i%2 == 0){      
             x[i].style.color ='blue';
         } else{           
             x[i].style.color='red';
         }
     }
}
btnD.addEventListener('click',function(){
    click_btn();
    div.style.display = 'block';
});
