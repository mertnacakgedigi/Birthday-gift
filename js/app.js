

let moves = 0

let game = {
   data : ["fire","wheel", "Telephone","lightbulb","car","computer"],
   
   check : [],
   firstCard : {},
   secondCard : {},
   
   



   showClick : function() {
          

        
       $('.card1').on("click",function(){

        moves = moves +1
        let bigmove = ` Moves ${moves}`
        $("#move").html(bigmove)

        let click = false


        if($(this).hasClass("checkCard")) {
            return
        }

        $(this).children("p:first").show("fast")
        $(this).children("img:first").show("fast")
        game.check.push($(this).attr("data-framework"))

        console.log(game.check)
        if (game.check.length ===2) {
      
            click =true
            game.secondCard = $(this)

            console.log(game.firstCard.attr("data-framework"))
            console.log(game.secondCard.attr("data-framework"))

            if (game.check[0] === game.data[0] && game.check[1]=== game.data[0]) {
                game.firstCard.addClass ("checkCard")
                $(this).addClass("checkCard")
                       
                  game.data.shift()
            } else {

            game.firstCard.children("p:first").hide("slow")
            game.firstCard.children("img:first").hide("slow")
             
            $(this).children("p:first").hide("slow")
            $(this).children("img:first").hide("slow")
            }
            
            console.log(game.firstCard)
            console.log(game.secondCard)


            if (game.data.length== 0) {
                $(".overlay-text").addClass("visible");

             
              

            }
        

            game.check = []
    

            }
            
          


        if (!click){


            game.firstCard = $(this)
            console.log(game.firstCard)

        }
            

    })
       
    },

    restart : function() {
        var ul = document.querySelector('.deck');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
    }  

    },





    



}

game.showClick()

game.restart()

$("#Restart").on("click",function(){
 game.restart();

 game.data = ["fire","wheel", "Telephone","lightbulb","car","computer"]

 $(".checkCard").children("p").css("display","none")
 $(".checkCard").children("img").css("display","none")
 $(".checkCard").removeClass("checkCard")

 
 
//  $("#header").addClass("hiddentext")




})



$("#restartEnd").on("click",function(){
    game.restart();
   
    game.data = ["fire","wheel", "Telephone","lightbulb","car","computer"]
   
    $(".checkCard").children("p").css("display","none")
    $(".checkCard").children("img").css("display","none")
    $(".checkCard").removeClass("checkCard")
   
    $(".overlay-text").removeClass("visible");
   //  $("#header").addClass("hiddentext")
   
   
   
   
   })


