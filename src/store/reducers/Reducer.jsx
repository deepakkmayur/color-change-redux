const reducer=(state="",action)=>{
// console.log(action,"reducer");
return {...state,payload:action.payload}

}

export default reducer