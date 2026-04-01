Heard about #useReducer for the first time

Template follows this order 

Make an object >> Declare a reducer >> Initialize the hook >> Dispatch the Order 

Object i.e const Todos = {
id:1, 
name: Ayo,
level:200
}

const reducer = (state,action) => {
switch(action.type) {
case "COMPLETE"
}

Hook >< const [state,dispatch] = useReducer (reducer, initialState)
This is the template *dispatch and *useReducer are constants others can take any name. 

Dispatch :: const handleComplete (todo) = > {
dispatch ({type: "COMPLETE", id:todo.id});

}
