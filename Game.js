class Game {
    constructor(){
  
    }

    getState(){
        var gameStateRef  = database.ref('Gamestate');
        gameStateRef.on("value",function(data){
            Gamestate = data.val();
        })
    
      }

      update(state){
        database.ref('/').update({
            Gamestate: state
        });
      }




}