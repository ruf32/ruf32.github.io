
 //canvas definition 
 var level=0
 let score=0
 
 const block_size=20
 const Board_height=30
 const Board_with=14
 
 const board=Array(Board_height).fill().map(()=>Array(Board_with).fill(0))
 function initial(){window.canvas=document.querySelector("canvas")
 window.context=canvas.getContext("2d")
window.$score=document.querySelector('span')

 
//board
 canvas.height=Board_height*block_size
 canvas.width=Board_with*block_size
 context.scale(block_size,block_size)
 
 
  
  }
 
  
   
  //piezas
 
  const Piece_shaps=[
    [
      [1,1],
      [1,1]
      ],
    [
      [0,1,0],
      [1,1,1]
    ],
    [
      [1,1,1,1]
    ],
    [
      [1,1,0],
      [0,1,1]
    ],
    [
      [0,1,1],
      [1,1,0]
    ],
    [
      [0,0,1],
      [1,1,1]
    ],
    [
      [1,0,0],
      [1,1,1]
    ]
  ]
  const piece={
    position:{x:7,y:0},
    shape:Piece_shaps[Math.floor(Math.random()*Piece_shaps.length)]
  }
  //
  let dropcounter=0
  let lastime=0
 //game loop

 function update(time=0){
  const deltatime=time-lastime
  lastime=time
  dropcounter+=deltatime
  if (dropcounter>(1000-(level*100))){
    
    piece.position.y++
    dropcounter=0
    if (collision()){
      piece.position.y--
      solidify()
      lineremove()
    } 
  }
draw()
window.requestAnimationFrame(update)
 }
 function draw(){
context.fillStyle='#000'
context.fillRect(0,0,canvas.width,canvas.height)

board.forEach((row, y)=>{
row.forEach((value,x)=>{
 if (value==1){
  context.fillStyle='yellow'
  context.fillRect(x,y,1,1)
 }
})
})

piece.shape.forEach((row,y)=>{
  row.forEach((value,x)=>{
if (value==1){
  context.fillStyle='red'
  context.fillRect(x+piece.position.x,y+piece.position.y,1,1)
}
  })
})

$score.innerText=score
 }

 document.addEventListener('keydown',event=>{
  if (event.key=='ArrowLeft'){
    piece.position.x--
    if (collision()){
      piece.position.x++
    }
  }
  if (event.key=='ArrowRight'){
    piece.position.x++
    if (collision()){
      piece.position.x--
    }
  }
  if (event.key=='ArrowDown'){
    piece.position.y++
    if (collision()){
      piece.position.y--
      solidify()
      lineremove()
    }
  }
    if (event.key=='ArrowUp'){
      const previus=piece.shape
      piece.shape=rotate()
if (collision()){
  piece.shape=previus
}
      
  }
 })
 function collision(){
  return piece.shape.find((row,y)=>{
    return row.find((value,x)=>{
      return (
        value!=0 &&
       
        board[y+piece.position.y]?.[x+piece.position.x]!=0
      )
    })
  })
 }
 function rotate(){
  const rotpiece=[]
  for(let i=0;i<piece.shape[0].length;i++){
    const row=[]
    for(let j=piece.shape.length-1;j>=0;j--){
row.push(piece.shape[j][i])
    }
    rotpiece.push(row)
  }
 
  return rotpiece
 }
 function solidify(){
  piece.shape.forEach((row,y)=>{
    row.forEach((value,x)=>{
      if (value==1){
      board[y+piece.position.y][x+piece.position.x]=1}
    }
    

    )
  })
  piece.position.y=0
  piece.position.x=7
  piece.shape=Piece_shaps[Math.floor(Math.random()*Piece_shaps.length)]
  if (collision()){
    window.alert('game over')
    board.forEach(row=>row.fill(0))
    score=0
  }
 }
 function lineremove(){
  let linesrv=[]
   board.forEach((row,y)=>{
    if(row.every(value=>value===1)){
      linesrv.push(y)
      
    }
   
   })
  
   linesrv.forEach((y)=>{
    board.splice(y,1)
    
    const newline=Array(Board_with).fill(0)
    board.unshift(newline)
    score+=10*level
   })


 }
 function levelset(){
 initial()
  level=document.getElementById('lvl').value
 if (!level){level=1}
  const formr=document.querySelector('form')
  formr.remove()
  var audioContainer = document.getElementById("audioContainer");

var audioElement = document.createElement("audio");
audioElement.controls = true;
audioElement.autoplay = true;
    audioElement.loop = true;
    audioElement.volume=0.4;
var sourceElement = document.createElement("source");
sourceElement.src = "Tetris.mp3"; 
sourceElement.type = "audio/mp3";

audioElement.appendChild(sourceElement);
audioContainer.appendChild(audioElement);
  update()
  

}


 
