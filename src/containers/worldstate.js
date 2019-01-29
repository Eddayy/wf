import Swagger from 'swagger-client'

import { observable, computed , action , configure , runInAction} from 'mobx';



export default class Worldstate {  
    @observable pc_worldstate = {};
    @observable client ={} ;

    constructor() {
      this.setclient()
    }

    @computed get get_pc_persistentEnemies(){
      return this.pc_worldstate.persistentEnemies
    }

    @computed get check(){
      return this.pc_worldstate.persistentEnemies
    }

    setclient = async () =>{
      const client = await Swagger('https://docs.warframestat.us/swagger.json')
      runInAction(()=>{
        this.client = client
      })
      const {body} = await this.client.apis.worldstate.get_pc()
      runInAction(()=>{
        this.pc_worldstate = body
      })
    }

    // setclient(){
    //   Swagger('https://docs.warframestat.us/swagger.json')
    //     .then((client)=>{
    //       runInAction(()=>{
    //         this.client = client
    //         return client.apis.worldstate.get_pc()
    //       })
    //     })
    //     .then(({body})=> {
    //       runInAction(()=>{
    //         this.pc_worldstate = body
    //       })
    //     })
    // }

    @action
    setpcstate = async () => {
      const {body} = await this.client.apis.worldstate.get_pc()
      runInAction(()=>{
        this.pc_worldstate = body
      })
    }   
    @action
    async checkpersistent(){
      const {obj} = await this.client.apis.worldstate.get_pc_persistentEnemies()
      obj.forEach(enemy=>{

      })
    }
}