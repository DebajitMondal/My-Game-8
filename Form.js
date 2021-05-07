class Form {

    constructor() {
       // this.input = createInput("Name");
      
        this.button = createButton('SinglePLayer');
        this.button2 = createButton('Muliplayer');
        this.title = createElement('h1');
        this.Back = createButton('Back');
        
        this.Back.hide();

      }
    
      display(){
             
       

  

          this.title.html("My Game");
          this.title.position(displayWidth/2 - 10,displayHeight/2 - 300);
      
         // this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
          this.button.position(displayWidth/2 -10,displayHeight/2 - 100);
          this.button2.position(displayWidth/2 - 5,displayHeight/2 - 50);
          this.Back.position(displayWidth/2 + 300,displayHeight/2 - 350);
          this.button.mousePressed(()=>{
           // this.input.hide();
            this.button.hide();
            this.button2.hide();
            this.title.hide();
              //PLayer = this.input.value();
              button.play();
            
            //this.greeting.html("Hello " + PLayer)
            //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
            GameState = 2;
  
  
  
          });



          this.button2.mousePressed(()=>{
            // this.input.hide();
             this.button.hide();
             this.button2.hide();
             this.title.hide();
             this.Back.show();
             
            
             game.update(4);
   
             this.Back.mousePressed(()=>{

               
              this.button.show();
              this.button2.show();
              this.title.show();
              this.Back.hide();
               game.update(1);
     
     
     
             });
   
           });


        



    

    
    
      }
    
    
    
    
    
    }
  