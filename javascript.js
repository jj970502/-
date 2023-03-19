var link ={
    setcolor:function(color){
    //     var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     console.log(alist[i])
    //         alist[i].style.color = color;
    //     i = i + 1 ;
    //     }  
    $('a').css('color', color);
    }
}
var body ={
    setcolor:function(color){
        $('body').css('color', color);
        // document.querySelector('body').style.Color = color;
        },
    setbackgroundColor:function(color){
        $('body').css('backgroundColor', color);
        // document.querySelector('body').style.backgroundColor = color;
        }
    }


function night_dayhandler(self){
var target = document.querySelector('body');
    if(self.value === 'night'){
        body.setbackgroundColor('black');
        body.setcolor('white');
        self.value = 'day';
    link.setcolor('powderblue')
}

else{
        body.setbackgroundColor('white');
        body.setcolor('black');
            self.value = 'night';
        link.setcolor('blue')
    }
}