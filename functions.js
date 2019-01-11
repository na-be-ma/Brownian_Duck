document.addEventListener("DOMContentLoaded", function() {
                          
    var duck_img = document.createElement("img");

    duck_img.src = "duck_svg.svg";
    duck_img.addEventListener("load", function() {
       
        var dom_canvas = document.getElementsByTagName("canvas")[0];

        var context2d = dom_canvas.getContext("2d");
        
        var x = 200 - 65/2;
        var y = 200 - 50/2;
        
        setInterval(function() {
            context2d.clearRect(0,0, dom_canvas.width, dom_canvas.height);
            context2d.drawImage(duck_img, x, y, 65, 50);
                    
            x += Math.floor (Math.random()*3) - 1;
            y += Math.floor (Math.random()*3) - 1;
        }, 33);
        /* 
        context2d.drawImage(duck_img, 200, 150, 65, 50);
        context2d.strokeRect(40, 20, 40, 20); 
        */

    });

});
