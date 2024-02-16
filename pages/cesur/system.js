class Question {
    constructor(id, enunciado, respuestas, solucion) {
        this.id = id;
        this.enunciado = enunciado;
        this.respuestas = respuestas;
        this.solucion = solucion;
    }
}

const lista=fetch('https://ruf32.github.io/pages/cesur/SGE.json')
lista.then(data=>{
    console.log(data)
})