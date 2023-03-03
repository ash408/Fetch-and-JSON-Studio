
window.addEventListener("load", function(){
   const container = document.getElementById("container");
   const header = document.getElementById("header");

   async function fetchAstronauts(){
      const response = await fetch("http://handlers.education.launchcode.org/static/astronauts.json");
      const data = await response.json();
      
      return data;
   }

   fetchAstronauts().then(function(astronauts){
      const numAstronauts = astronauts.length
      astronauts.sort(function(a, b){
         return parseInt(a.hoursInSpace) - parseInt(b.hoursInSpace)
      });

      
      for (const astronaut of astronauts) {
	 let skillsString = ''
         for (skill of astronaut.skills){
            skillsString += skill + ', '
         }
	 skillsString = skillsString.substring(0, skillsString.length - 2)

	 let activity = astronaut.active ? 'active' : 'inactive';

	 htmlString = `<div class="astronaut">
   <div class="bio">
      <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
      <ul>
         <li>Hours in space: ${astronaut.hoursInSpace}</li>
         <li class="${activity}">Active: ${astronaut.active}</li>
         <li>Skills: ${skillsString}</li>
      </ul>
   </div>
   <img class="avatar" src="${astronaut.picture}">
</div>`
         container.insertAdjacentHTML('afterend', htmlString) 
      }
     
      header.textContent += `: ${numAstronauts}`
   });
});
