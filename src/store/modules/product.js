 
import { loadProductByTypeNew  } from '@/services/api.js'

 const initstate = {

 }
 export default {

    state: initstate,
    mutations: {
        

    },
    actions: {
        getproduct({commit}){
            // "currentPage":"1","type":"3"
            loadProductByTypeNew({currentPage:1,type:3})
        }

    }
 }
 
