export default function(options = {}){
    const defaultOpt = {
        saveName: 'saveData',
        setState(state){
            localStorage.setItem(this.saveName, JSON.stringify(state));
        },
        getState(){
            const data = localStorage.getItem(this.saveName) || null;
            return data ? JSON.parse(data) : {};
        },
        whiteMT: [],
        whiteST: []
    }
    options = {...defaultOpt, ...options}
    const Persiste = store => {
        store.replaceState({...store.state, ...options.getState()})
        // 当 store 初始化后调用
        store.subscribe((mutation, state) => {
        // 每次 mutation 之后调用
        console.log(options.whiteList)
        // &&  options.whiteList.some(item => item.toUpperCase().indexOf(mutation.type.toUpperCase()) !== -1)
         if(options.whiteST && options.whiteMT.some(item => item === mutation.type)){
             let obj = {};
             for (const item of options.whiteST) {
                 console.log(typeof(state[item]))
                if(state[item] === undefined) continue;
                obj[item] = state[item]
             }
             options.setState(obj)
         }else{
            options.setState(state)
         }
        // mutation 的格式为 { type, payload }
        })
    }
    return Persiste
}