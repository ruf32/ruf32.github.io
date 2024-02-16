class Question {
    constructor(id, enunciado, respuestas, solucion) {
        this.id = id;
        this.enunciado = enunciado;
        this.respuestas = respuestas;
        this.solucion = solucion;
    }
}
let lista
async function fet(){
    const lista=await fetch('https://ruf32.github.io/pages/cesur/SGE.json')
    return await lista.json()
}

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
console.log(al)
respuestasUsuario = []
al.forEach(element=>{
    const div=document.createElement('div')
    const enunciado=document.createElement('h2')
    enunciado.innerText=element.enunciado
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
    })
    document.body.appendChild(div)
})
    
})
function Send() {
    respuestasUsuario.length = 0; // Limpiar el array antes de agregar nuevas respuestas
console.log(al)
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
    console.log(respuestasUsuario[8].respuestaSeleccionada)
    const div3=document.createElement('div')
    this.al.forEach((element,index)=>{
        if (element.solucion.includes(respuestasUsuario[index].respuestaSeleccionada)) x++
        else{
            const resp=document.createElement('p')
            resp.innerText="Respuesta n"+(index+1)+" erroanea solucion: "+element.solucion
            div3.appendChild(resp)
            div3.appendChild(document.createElement("br"))
            y++
        }
        
    })
    const h=document.createElement('h2')
    h.innerText="Respuestas acertadas "+x+",Respuestas falladas:"+y
    div3.appendChild(h)
    document.body.appendChild(div3)
}
