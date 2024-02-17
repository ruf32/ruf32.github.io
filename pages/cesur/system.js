class Question {
    constructor(id, enunciado, respuestas, solucion) {
        this.id = id;
        this.enunciado = enunciado;
        this.respuestas = respuestas;
        this.solucion = solucion;
    }
}
let lista
let selection=0
async function fet(){
    const lista=await fetch('https://ruf32.github.io/pages/cesur/PSP.json')
    return await lista.json()
}

fet().then(res=>{
    lista=res
    
al=[]

const tamaño=lista.length
console.log(tamaño)
for (i=0;i<tamaño;i++){
    let ale=parseInt(Math.random()*lista.length-1)
    al.push(lista[ale])
    
    
    if (ale<lista.length-1) {
       
        lista.splice(ale,1)}
    else {lista.pop()}


}
console.log(al.length)

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
                console.log(selection)
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
    
})
function Send() {
   
    respuestasUsuario.length = 0; // Limpiar el array antes de agregar nuevas respuestas

    this.al.forEach(element => {
        // Obtener los radio buttons correspondientes a la pregunta actual
        const radios = document.querySelectorAll(`input[name="Respuesta_${element.id}"]`);
        
        
        // Iterar sobre los radio buttons para encontrar el seleccionado
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
   console.log("respuestauser:"+respuestasUsuario.length)
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

    // Establecer el mensaje de la notificación
    popupMessage.textContent = message;

    // Mostrar la notificación
    popup.style.display = "block";
}

// Función para cerrar la notificación pop-up
function closePopup() {
    const popup = document.getElementById("popup-notification");

    // Ocultar la notificación
    popup.style.display = "none";
}

