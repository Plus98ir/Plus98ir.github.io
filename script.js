fetch("projects.json")

.then(response => response.json())

.then(projects => {


    const container =
    document.getElementById("projects");


    container.innerHTML = "";


    projects.forEach(project => {


        let demoButton = "";


        if(project.demo){

            demoButton =
            `
            <a href="${project.demo}" target="_blank">
                🌐 Demo
            </a>
            `;
        }


        container.innerHTML +=
        `

        <div class="card">

            <h2>
                ${project.name}
            </h2>


            <p>
                ${project.description}
            </p>


            <a href="${project.url}" target="_blank">
                GitHub
            </a>


            ${demoButton}


        </div>

        `;


    });


})


.catch(error=>{

    document.getElementById("projects").innerHTML =
    "❌ Failed loading projects";

    console.error(error);

});
