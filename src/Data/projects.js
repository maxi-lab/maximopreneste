import ToDo from'../assets/img/todo.png';
import TP1TYG from'../assets/img/tp1.png';
import ds from'../assets/img/ds2.jpg';
import ski from '../assets/img/LOS PINOS.png'
import is from '../assets/img/Eventhub.png'
export const projects = [
   
    {
        title:"Eventhub",
        t:"Eventhub",
        description: "Un sistema de gestion de eventos. Proyecto de Ingenieria de Software.",
        d:"A event management system. Software Engineering project.",
        img: is,
        link: "https://eventhub1-1.onrender.com/",
        github: "https://github.com/maxi-lab/eventhub",
        tecs:["Django","Python","Docker","HTML","CSS","Bootstrap"],
        long:"Este fue un proyecto grupal. En el que se desarrollaron ciertas funcionalidades, estas se testearon y se documentaron. Se dockerizo y se realizo CI/CD para desplegar la aplicacion en Render. ",
        l:"This project was in group. We developed some functionalities, tested them and documented them. The app was dockerized and CI/CD was made to deploy the app on Render."
    },
    {
        title:"Proyecto de Desarrollo de Software",
        t:"Software Development Project",
        description:"Una aplicacion web para un centro de ski para gestionar el estado de sus pistas y las atenciones a los heridos",
        d:"A Ski Center web app to manage track state and the injured.",
        img: ski,
        link:' https://maxi-lab.github.io/Los-Pinos/',
        github:'https://github.com/maxi-lab/LosPinos',
        tecs:["C#",".NET","React","MUI","SQL Server"],
        long:"Desarrollé una aplicación Full Stack con arquitectura desacoplada, implementando un backend en .NET Web API y una base de datos SQL Server. El frontend fue construido en React con Material UI, consumiendo los endpoints REST expuestos por la API. En el backend implementé autenticación basada en JWT y apliqué principios SOLID para garantizar una correcta separación de responsabilidades y mantenibilidad del código. Actualmente continúo mejorando la experiencia de usuario y optimizando la interfaz frontend.",
        l:"I developed a Full Stack application with a decoupled architecture, implementing a backend using .NET Web API and a SQL Server database. The frontend was built with React and Material UI, consuming the REST endpoints exposed by the API. On the backend, I implemented JWT-based authentication and applied SOLID principles to ensure proper separation of responsibilities and maintainable code.I am currently working on improving the user experience and refining the frontend interface."    }, 
    
    {
        title:"Sistema de gestion de ventas y cobranzas",
        t:"Sell and collection managment system",
        description: "Un sistema de gestion de ventas y cobranzas. Trabajo de campo de Diseño de Sistemas (no desplegado).",
        d:"A sell and collection managment system. Project of System Disaing (not deployed).",
        img: ds,
        link: "https://www.youtube.com/watch?v=UH2viAeN-Cs",
        github: "https://github.com/maxi-lab/Dise-de-Sistemas",
        tecs:["Django","Python","HTML","CSS","JS","Bootstrap"],
        long:"Este fue un proyecto grupal. En el que se elaboraron historias de usuarios, diagramas UML, mockups y se implemento la solucion propuesta. ",
        l:"This project was in group. We made user stories, UML diagramas, mockups and the implementation of the solution."
    },
    
]