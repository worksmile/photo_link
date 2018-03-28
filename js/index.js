var oLi = $("li");   //类数组，要变成数组
oLi = Array.prototype.slice.call(oLi);
oLi.forEach(function(ele,index) {
    $(ele).bind({
        'mouseenter' : function(e){      
            addClass(this,e,"in");
        },
        'mouseleave' : function(e){
            addClass(this,e,"out");
        }
    });
});


function addClass(ele,e,status){
    var x = e.offsetX - ele.offsetWidth/2;
    var y = e.offsetY - ele.offsetHeight/2;
    var d = (Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4;
    var direction;
    switch(d){
        case 0:
            direction = "top";
            break;
        case 1:
            direction = "right";
            break;
        case 2:
            direction = "bottom";
            break;
        case 3:
            direction = "left";
            break;
    }
    var className = status + "-" + direction;
    ele.className = className;
}
