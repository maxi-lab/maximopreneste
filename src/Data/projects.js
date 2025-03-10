import ToDo from'../assets/img/todo.png';
import TP1TYG from'../assets/img/tp1.png';
import ds from'../assets/img/ds2.jpg';
export const projects = [
    {
        title: "To Do App",
        description: "Una aplicacion basica de tareas",
        img: ToDo,
        link: "https://maxi-lab.github.io/Tareas-REACT/",
        github:"https://github.com/maxi-lab/Tareas-REACT",
        tecs:["React","TailwindCSS"],
        long:"Una aplicacion basica de tareas, donde se pueden agregar, eliminar y marcar como completadas. En este proyecto, aprendí las bases de React y el uso basico de Vite."
        
    },
    {
        title:"TP TyG web",
        description: "Un TP de la materia Tecnologia y Gestion web ",
        img: TP1TYG,
        link: "https://maxi-lab.github.io/TP1TYG/",
        github: "https://github.com/maxi-lab/TP1TYG",
        tecs:["HTML","CSS","JS"],
        long:"Una pagina en la que se me solicita el consumo de dos APIs, solo con HTML, CSS y JavaScript"
    },
    {
        title:"Sistema de gestion de ventas y cobranzas",
        description: "Un sistema de gestion de ventas y cobranzas. Trabajo de campo de Diseño de Sistemas (no desplegado).",
        img: ds,
        link: "https://www.youtube.com/watch?v=UH2viAeN-Cs",
        github: "https://github.com/maxi-lab/Dise-de-Sistemas",
        tecs:["Django","Python","HTML","CSS","JS","Bootstrap"],
        long:"Este fue un proyecto grupal. En el que se elaboraron historias de usuarios, diagramas UML, mockups y se implemento la solucion propuesta. "
    },
]