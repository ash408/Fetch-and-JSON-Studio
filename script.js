
window.addEventListener("load", function(){
   const container = document.getElementById("container");

   async function fetchAstronauts(){
      const response = await fetch("http://handlers.education.launchcode.org/static/astronauts.json");
      const data = await response.json();
      
      return data;
   }

   fetchAstronauts().then(function(data){
      for (const astronaut of data) {
	 let skillsString = ''
         for (skill of astronaut.skills){
            skillsString += skill + ', '
         }
	 skillsString = skillsString.substring(0, skillsString.length - 2)

	 htmlString = `<div class="astronaut">
   <div class="bio">
      <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
      <ul>
         <li>Hours in space: ${astronaut.hoursInSpace}</li>
         <li>Active: ${astronaut.active}</li>
         <li>Skills: ${skillsString}</li>
      </ul>
   </div>
   <img class="avatar" src="${astronaut.picture}">
</div>`
         container.insertAdjacentHTML('afterend', htmlString) 
      }
   });
});
