import Swagger from 'swagger-client'

import { observable, computed , action , configure } from 'mobx';



export default class Worldstate {  
    @observable pc_worldstate = {text:"hello"};
    @observable client ={} ;

    constructor() {
      this.setclient()
      this.setpcstate()
    }

    @computed get get_pc_persistentEnemies(){
      return this.pc_worldstate.persistentEnemies
    }

    @computed get check(){
      return this.pc_worldstate.persistentEnemies
    }


    @action.bound
    async setclient(){
      
      this.client = await Swagger('https://docs.warframestat.us/swagger.json')
    }

    @action
    async setpcstate(){
      console.log(this.client)
      const {body} = await this.client.apis.worldstate.get_pc()
      this.pc_worldstate = body
      console.log(body)
    }   
    @action
    async checkpersistent(){
      const {obj} = await this.client.apis.worldstate.get_pc_persistentEnemies()
      obj.forEach(enemy=>{

      })
    }
}