import ToDo from'../assets/img/todo.png';
import TP1TYG from'../assets/img/tp1.png';
import ds from'../assets/img/ds2.jpg';
import ski from '../assets/img/LOS PINOS.png'
export const projects = [
    {
        title:"Proyecto de Desarrollo de Software",
        description:"Una aplicacion web para un centro de ski para gestionar el estado de sus pistas y las atenciones a los heridos",
        img: ski,
        link:' https://maxi-lab.github.io/Los-Pinos/',
        github:'https://github.com/maxi-lab/LosPinos',
        tecs:["C#",".NET","React","MUI","SQL Server"],
        long:"Se implemento un backend con .NET y una base de datos SQL Server. El frontend fue desarrollado con React y MUI. Para la autenticacion se utilizo JWT. Aqui pude aplicar los principios SOLID en el backend. Actualmente, estoy trabajando en mejoras del frontend.",
    },
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