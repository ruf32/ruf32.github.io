class Question {
    constructor(id, enunciado, respuestas, solucion) {
        this.id = id;
        this.enunciado = enunciado;
        this.respuestas = respuestas;
        this.solucion = solucion;
    }
}
//bloque seleccion

path=''
let lista
let selection=0
document.addEventListener("DOMContentLoaded", function() {
const div7=document.createElement('div')
const direcciones=["PSP.json","SGE.json"]
const butt2=document.createElement('button')
butt2.innerText="EMPEZAR"
direcciones.forEach(element=>{
    const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "Group1" 
        radioBtn.value = element;
        div7.appendChild(radioBtn)
        const label = document.createElement("label");
        label.textContent = element;
        div7.appendChild(label);

        div7.appendChild(document.createElement("br"));
})

butt2.addEventListener("click",function(){
    const radios = document.querySelectorAll(`input[name="Group1"]`);
      
    // Iterar sobre los radio buttons para encontrar el seleccionado
    radios.forEach(radio => {
        if (radio.checked) {
            
          path=radio.value
            
        } 
        
})
document.body.removeChild(div7)
comenzar() 
})
div7.appendChild(butt2)
document.body.appendChild(div7)
})



async function fet(){
    
    const lista=await fetch('https://ruf32.github.io/pages/cesur/'+path)
    return await lista.json()
}
function comenzar(){
fet().then(res=>{
    lista=res
    al=[]
const tamaño=lista.length

for (i=0;i<tamaño;i++){
    let ale=parseInt(Math.random()*lista.length-1)
    al.push(lista[ale])
    if (ale<lista.length-1) {
        lista.splice(ale,1)}
    else {lista.pop()}
}
div5=document.getElementById('div5')
respuestasUsuario = []
al.forEach((element,index)=>{
    const div=document.createElement('div')
    const enunciado=document.createElement('h3')
    enunciado.innerText=(index+1)+" ."+element.enunciado
   div.appendChild(enunciado)    
    element.respuestas.forEach(element2=>{
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "Respuesta_"+element.id; 
        radioBtn.value = element2;
        div.appendChild(radioBtn)
        const label = document.createElement("label");
        label.textContent = element2;
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
        radioBtn.addEventListener("change", function() {
            if (this.checked) {
                selection += 1;               
                if (selection>=al.length-1){
                   const butt= document.getElementById('butt')
                    butt.style.display="block"
                }
            }
        });
    })
    div5.appendChild(div)
    document.body.appendChild(div5)
})
    
})}
function Send() {
    respuestasUsuario.length = 0;
    this.al.forEach(element => {
       const radios = document.querySelectorAll(`input[name="Respuesta_${element.id}"]`);
       radios.forEach(radio => {
            if (radio.checked) {
              
                respuestasUsuario.push({ preguntaId: element.id, respuestaSeleccionada: radio.value });
            }
        });

    })
    x=0
    y=0
    if (respuestasUsuario.length<al.length){
        showPopup('faltan respuestas')
    }
    else{
   document.body.removeChild(div5)
   const div3=document.createElement('div')
   div3.innerText="Erroneas"
   index=0 
   this.al.forEach(element=>{
        if (element.solucion.includes(respuestasUsuario[index].respuestaSeleccionada)) x++
        else{
            const resp=document.createElement('p')
            resp.innerText=element.enunciado+" : "+element.solucion
            div3.appendChild(resp)
            div3.appendChild(document.createElement("br"))
            y++
        }
        index++
    })
   
    const h=document.createElement('h2')
    h.innerText="Respuestas acertadas "+x+",Respuestas falladas:"+y
    div3.appendChild(h)
    document.body.appendChild(div3)
}}
function showPopup(message) {
    const popup = document.getElementById("popup-notification");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup-notification");
    popup.style.display = "none";
}

