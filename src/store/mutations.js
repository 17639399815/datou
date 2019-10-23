var mutations={
    changA(state,dialogFormVisible){
        state.dialogFormVisible=dialogFormVisible
    },
    changid(state,id){
        state.id=id
        console.log(state.id);
        
    },
    changB(state,A){
        state.A=A

        
    }
}
export default mutations