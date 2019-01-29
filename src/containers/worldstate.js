import Swagger from 'swagger-client'

import { observable, computed , action , configure , runInAction} from 'mobx';

import swagger from './swagger'

export default class Worldstate {  
    @observable pc_worldstate = {};
    @observable client ={} ;
    @observable persistentEnemies = {};

    constructor() {
      this.setclient()
    }

    @computed get get_pc_persistentEnemies(){
      return this.persistentEnemies
    }

    @computed get check(){
      return this.pc_worldstate.persistentEnemies
    }

    setclient = async () =>{
      let client = await Swagger({
        //url:'https://docs.warframestat.us/swagger.json',
        spec: swagger
      })
      client.spec.schemes = ['https']
      
      runInAction(()=>{
        this.client = client
      })
      const {body} = await this.client.apis.worldstate.get_pc()
      runInAction(()=>{
        this.pc_worldstate = body
      })
      runInAction(()=>{
        this.persistentEnemies = this.pc_worldstate.persistentEnemies
      })
    }

    @action
    setpcstate = async () => {
      const {body} = await this.client.apis.worldstate.get_pc()
      runInAction(()=>{
        this.pc_worldstate = body
      })
    }   
    @action
    setpersistentenemies = async ()=>{
      const {obj} = await this.client.apis.worldstate.get_pc_persistentEnemies()
      runInAction(()=>{
        this.persistentEnemies = obj
      })
    }
}