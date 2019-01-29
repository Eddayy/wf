//import { types } from "mobx-state-tree"
import Swagger from 'swagger-client'

async function getState(){
  const client = await Swagger('https://docs.warframestat.us/swagger.json')
  return client
}

async function check(client,oldstate,options){
  let newstate = {}
  const list = await client.apis.worldstate.get_pc_persistentEnemies()
  if(typeof options === 'undefined'){
    options = ['Angst','Malice','Torment','Violence']     
  }
  
  list.obj.forEach((unit)=>{
    if (options.includes(unit.agentType)){

      if(unit.lastDiscoveredTime !== oldstate[unit.agentType] && unit.isDiscovered === true){
        console.log(`\x1b[31m${unit.agentType}\x1b[0m`,`discovered at`,`\x1b[36m${unit.lastDiscoveredAt}\x1b[0m`,`at ${unit.lastDiscoveredTime}`)
        newstate[unit.agentType] = unit.lastDiscoveredTime
      }
      else{
        newstate[unit.agentType] = oldstate[unit.agentType]
      }
    }
      
  })
  return newstate
}



(async () => {
  try {
    var State = {}
    const client = await getState()
    setInterval(async ()=>{
      State = await check(client,State)
    },5000)
      
  } catch (e) {
      console.log(e)
  }
})();

// Swagger('https://docs.warframestat.us/swagger.json')
//   .then( client => {
//       client.apis.worldstate.get_pc_persistentEnemies()
//         .then((d)=>{console.log(d.obj)})
//   })

// const worldstate = types.model({
//     name: ""
// })