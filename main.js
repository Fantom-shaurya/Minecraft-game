var canvas= new fabric.Canvas('myCanvas')
player_x=10;
player_y=10;
block_image_height=30;
block_image_width=30;
player_object="";
block_image_object="";
function player_update(){
    fabric.Image.fromURL('player.png',function(Img){
        player_object=Img 
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x

        })
            
        canvas.add(player_object);
    })
}
function new_image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_image_object=Img 
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x

        })
            
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey==true&& key_pressed=='80'){
        console.log("Shift and p key pressed together")
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&& key_pressed=='77'){
        console.log("Shift and m key pressed together")
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(key_pressed=='38'){
        Up();
        console.log("Up")
    }
    if(key_pressed=='40'){
        Down();
        console.log("Down")
    }
    if(key_pressed=='37'){
        Left();
        console.log("Left")
    }
    if(key_pressed=='39'){
        Right();
        console.log("Right")
    }
    if(key_pressed=='87'){
    new_image('wall.jpg')
        console.log("W key")
    }
    if(key_pressed=='71'){
        new_image('ground.png')
            console.log("G key")
        }
           if(key_pressed=='76'){
            new_image('light_green.png')
                console.log("L key")
            } 
            if(key_pressed=='84'){
                new_image('trunk.jpg')
                    console.log("T key")
                } 
                 if(key_pressed=='82'){
                    new_image('roof.jpg')
                        console.log("R key")
                    } 
                    if(key_pressed=='89'){
                        new_image('yellow_wall.png')
                            console.log("Y key")
                        }     
                        if(key_pressed=='68'){
                            new_image('dark_green.png')
                                console.log("D key")
                            }
                            if(key_pressed=='85'){
                                new_image('unique.png')
                                    console.log("U key")
                                }
                                if(key_pressed=='67'){
                                    new_image('cloud.jpg')
                                        console.log("C key")
                                    }    
        

   

}
function Up(){
if(player_y>=0){
    player_y=player_y-block_image_height;
    console.log("When Up key is pressed then,x="+player_x+",y="+player_y)
console.log("block image height= "+block_image_height)
canvas.remove(player_object)
player_update()

}
}
function Down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("When down key is pressed then,x="+player_x+",y="+player_y)
    console.log("block image height= "+block_image_height)
    canvas.remove(player_object)
    player_update()
    
    }
    }
    function Left(){
        if(player_x>=0){
            player_x=player_x-block_image_width;
            console.log("When left key is pressed then,x="+player_x+",y="+player_y)
        console.log("block image width= "+block_image_width)
        canvas.remove(player_object)
        player_update()
        
        }
        }
        function Right(){
            if(player_x<=850){
                player_x=player_x+block_image_width;
                console.log("When right key is pressed then,x="+player_x+",y="+player_y)
            console.log("block image width= "+block_image_width)
            canvas.remove(player_object)
            player_update()
            
            }
            }