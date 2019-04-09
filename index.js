console.log('Hello world from Visual Studio Code in linux!');

const lienzo = document.getElementById('lienzo');
let puntos = {
      "x1":null,
      "y1":null,
      "x2": null,
      "y2":null,

};

const  context = lienzo.getContext('2d');

function drawLn(x1,y1,x2,y2){

      context.beginPath();
      context.strokeStyle = 'rgb(255, 67, 0)';
        context.moveTo(parseInt(x1),parseInt(y1));

        context.lineTo(parseInt(x2),parseInt(y2));

        context.stroke();

      }




 
function updateDisplay(event) {
    pageX = event.pageX;
    pageY = event.pageY;
  }


  function oMousePos(evt, canvas) {
      var ClientRect = canvas.getBoundingClientRect();
          return { //objeto
          "x": Math.round(evt.clientX - ClientRect.left),
          "y": Math.round(evt.clientY - ClientRect.top)
    }
  }
 
  
//   lienzo.addEventListener("mousemove", e=>{
//       let coordinates = oMousePos(e,lienzo);
//       console.log(coordinates);
//   }, false);

//   lienzo.addEventListener("mouseenter", e=>{
//       let coordinates = oMousePos(e,lienzo);
//       console.log(coordinates);
//   }, false);

//   lienzo.addEventListener("mouseleave", e=>{
//       let coordinates = oMousePos(e,lienzo);
//       console.log(coordinates);
//   }, false);

  lienzo.addEventListener("click",(e)=>{

      let obj = oMousePos(e,lienzo);
     
      if(puntos.x1 != null && puntos.y1 != null){

            puntos.x1=puntos.x1;
            puntos.y1=puntos.y1;

            puntos.x2=obj.x;
            puntos.y2=obj.y;
      }else{
            puntos.x1 = obj.x;
            puntos.y1=obj.y
      }

      if(puntos.x1 && puntos.y1 && puntos.x2 && puntos.y2){

            
            let dpx = Math.pow((puntos.x1 - puntos.x2),2);
            let dpy = Math.pow((puntos.y1 - puntos.y2),2);
            
            console.log(puntos);
            // context.drawImage(img,0, 0);
            drawLn(puntos.x1,puntos.y1,oMousePos(e,lienzo).x, oMousePos(e,lienzo).y);

           
            
            console.info("Longitud del trazo: ",  (Math.sqrt(dpx + dpy)).toFixed(2) );
            puntos ={};
      }
  });
            // var cnv, ctx, pos_x = 0, pos_y=0, img;
            // 		function anim() {
            //                   context.clearRect(100, 100, lienzo.width, lienzo.height);

            //                   // ctx.drawImage(img, pos_x, 0);
            //                   drawLn(200,200,pos_x,pos_y);
            // 			pos_x >200?pos_x:pos_x+=1;
            // 			setTimeout(anim, 25);
            // 		}
            		window.onload = function() {
            			img = new Image();
                              img.src = 'google.png';
            			// iniciar la animación
            			// anim();
            		}

          