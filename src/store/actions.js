var actions={
    changA(context,dialogFormVisible){
        context.commit("changA",dialogFormVisible)
    },
    changid(context,id){
        context.commit("changid",id)
    },
    changB(context,A){
        context.commit("changB",A)
    }
}
export default actions

    
    