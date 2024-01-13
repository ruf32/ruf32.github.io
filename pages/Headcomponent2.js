document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.backgroundColor = 'black';

    const nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-lg bg-body-tertiary');
    if (nav) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.zIndex = '1000';
    }
    const container = document.createElement('div');
    container.setAttribute('class', 'container-fluid');

    const brand = document.createElement('a');
    brand.setAttribute('class', 'navbar-brand');
    brand.href = '../index.html';
    brand.innerText = 'Inicio';

    const toggleButton = document.createElement('button');
    toggleButton.setAttribute('class', 'navbar-toggler');
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');

    const toggleIcon = document.createElement('span');
    toggleIcon.setAttribute('class', 'navbar-toggler-icon');

    toggleButton.appendChild(toggleIcon);

    const collapseDiv = document.createElement('div');
    collapseDiv.setAttribute('class', 'collapse navbar-collapse');
    collapseDiv.setAttribute('id', 'navbarSupportedContent');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0');

    // Item 1
    const li1 = document.createElement('li');
    li1.setAttribute('class', 'nav-item');

    const a1 = document.createElement('a');
    a1.setAttribute('class', 'nav-link active');
    a1.setAttribute('aria-current', 'page');
    a1.href = '../asstes/Curriculum.pdf';
    a1.innerText = 'Curriculum';

    li1.appendChild(a1);

    // Item 2
    const li2 = document.createElement('li');
    li2.setAttribute('class', 'nav-item');

    const a2 = document.createElement('a');
    a2.setAttribute('class', 'nav-link');
    a2.href = './angproject.html';
    a2.innerText = 'Angular project';

    li2.appendChild(a2);

    // Dropdown
    const liDropdown = document.createElement('li');
    liDropdown.setAttribute('class', 'nav-item dropdown');

    const aDropdown = document.createElement('a');
    aDropdown.setAttribute('class', 'nav-link dropdown-toggle');
    aDropdown.href = '#';
    aDropdown.setAttribute('role', 'button');
    aDropdown.setAttribute('data-bs-toggle', 'dropdown');
    aDropdown.setAttribute('aria-expanded', 'false');
    aDropdown.innerText = 'Mis proyectos';

    const ulDropdown = document.createElement('ul');
    ulDropdown.setAttribute('class', 'dropdown-menu');

    const proyectos = ['Java', 'Php', 'Javascript', 'Angular + Typescript', 'Vue + React', 'Idiomas antiguos(Pascal,Basic)'];
    const pages=['java','php','javascript','angular','react','idiomas']
        proyectos.forEach((proyecto,index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('class', 'dropdown-item');
            a.href = `./${pages[index]}.html`;
            a.innerText = proyecto;
    
            li.appendChild(a);
            ulDropdown.appendChild(li);
        });
    

    liDropdown.appendChild(aDropdown);
    liDropdown.appendChild(ulDropdown);

    // Añadir todos los elementos al DOM
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(liDropdown);

    collapseDiv.appendChild(ul);

    const img = document.createElement('img');
    img.src = '../asstes/curri1.jpg';
    img.alt = 'yo+';
    img.style.height = '50px';
    img.style.width = '50px';
    img.style.marginLeft = 'auto';

    container.appendChild(brand);
    container.appendChild(toggleButton);
    container.appendChild(collapseDiv);
    container.appendChild(img);

    nav.appendChild(container);
    body.appendChild(nav); 
    const foot=document.createElement('footer')
    const contac={
        linkeid:'https://www.linkedin.com/in/rafa-rodri-3370a72a5',
        whatssap:'https://api.whatsapp.com/send?phone=34635591033&text=Hola%2C quisiera cotactar con usted',
        facebook:'https://www.facebook.com/Rafillarodri'
       
    }
    const icons=['../asstes/linkedin.png','../asstes/whatsapp.png','../asstes/facebook.png']
    let index=0
    for(key in contac){
        if (contac.hasOwnProperty(key)){
            const div=document.createElement('div')
            div.style.height='35px'
            div.style.width='35px'
            div.href=contac[key]
       
        div.setAttribute('title',key)
        div.style.backgroundImage=`url("${icons[index]}")`
        
        
        index++
      div.style.backgroundSize='cover'
    div.onclick=function(){
       const key2=div.getAttribute('title')
        window.open(contac[key2])
    }
        foot.appendChild(div)

    }}
    if (foot) {
        foot.style.position = 'fixed';
        foot.style.bottom = '0';
        foot.style.width = '100%';
        foot.style.zIndex = '1000';
        foot.style.height='40px';
       
        foot.style.display='grid';
        foot.style.gridTemplateColumns = `repeat(${Object.keys(contac).length}, 1fr)`; // Crea una columna por cada ícono
        
    }
    document.body.appendChild(foot)
    
});

