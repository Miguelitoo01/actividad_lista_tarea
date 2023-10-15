//Función para agregar una nueva tarea 
function agregarTarea(){
    const nuevaTareaInput = document.getElementById("nuevaTarea"); 
    const listaTareas = document.getElementById("listaTareas"); 
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if(nuevaTareaTexto !== "") { 
        const nuevaTarea=document.createElement("li");


        const botonEliminar=document.createElement("button"); 
        botonEliminar.textContent="Eliminar"; 
        botonEliminar.className="delete"; 
        botonEliminar.onclick=function(){ 
            listaTareas.removeChild(nuevaTarea); 
        }; 

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            marcarCompletada(nuevaTarea, checkbox);
        };

        const tareaTexto = document.createElement("span");
        tareaTexto.textContent = nuevaTareaTexto;

        nuevaTarea.appendChild(checkbox);
        nuevaTarea.appendChild(tareaTexto);

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value=""; 
    }
}

//Agregareventodeclicalbotón"Agregar"
document.getElementById("agregar").addEventListener("click", "agregarTarea");

//Función para marcar una tarea como completada 
function marcarCompletada(tarea){ 
    tarea.classList.toggle("completed"); 
    checkbox.cheched=!checkbox.checked;
}
//Agregar evento de clic a las tareas para marcarlas como completadas 
document.getElementById("listaTareas").addEventListener("click", 
function(event){ 
    if(event.target.tagName==="LI")
    { marcarCompletada(event.target); 
    } 
});

//Función para mostrar tareas completadas 
function mostrarCompletadas(){ 
    const tareas=document.querySelectorAll("li"); 
    tareas.forEach(tarea=>{ 
        if(tarea.classList.contains("completed"))
        { tarea.style.display="flex"; 
    } else { 
        tarea.style.display="none"; 
} 
}); 
}

//Función para mostrar tareas pendientes 
function mostrarPendientes(){
     const tareas=document.querySelectorAll("li"); 
     tareas.forEach(tarea=>{ 
        if(!tarea.classList.contains("completed")){ 
            tarea.style.display="flex";
        } else { 
            tarea.style.display="none"; 
        } 
    });
}

//funcion para "restablecer"
function mostrarTodasLasTareas() {
    const listaTareas = document.getElementById("listaTareas");
    const tareas = listaTareas.getElementsByTagName("li");

    for (let i = 0; i < tareas.length; i++) {
        tareas[i].style.display = "block";
    }
}

//Agregar evento de clic al botón "MostrarCompletadas" 
document.getElementById("mostrarCompletadas").addEventListener("click",mostrarCompletadas);


//Agregar evento de clic al botón "MostrarPendientes" 
document.getElementById("mostrarPendientes").addEventListener("click",mostrarPendientes);

