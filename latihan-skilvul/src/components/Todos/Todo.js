import{useState} from'react'
import{Card,Button} from 'react-bootstrap'
function Todo(){
    let[todos,setTodos]= useState (["belajar react","belajar state"])
    let[inputTodo,setInputTodo]=useState("")

    let addTodo=()=>{
        // cara 1
       setTodos([
           ...todos,
        inputTodo
       ])

    //    cara 2 :
    // let newTodo=[...todos]
    // newTodo.push(inputTodo)
    // setTodos(newTodo)


    }
    let handleChange=(event)=>{
       
        setInputTodo(event.target.value)
        
    }
    // cara 2
    // let handleChange=(event)=>{
    //     // jika hanya memiliki 1 text input maka name variabel tidak perlu di tulis
    // let {value}= event.target
    // setInputTodo(value) 
    // }


console.log(inputTodo)

let editTodo =(item)=>{
    let inputPrompt= prompt()
    let edtTodo= todos.map((todos,index)=>(index == item ? inputPrompt :todos))
    setTodos(edtTodo)
}
let deleteTodo=(x)=>{
    let hapusTodo=[...todos]
    hapusTodo.splice(x, 1);
    setTodos(hapusTodo)
}

    return(
        <div div className="col-md-5 mx-auto">
         <Card border="primary" style={{ width: '18rem' }}>
         <Card.Header>Todo</Card.Header>
         <input type="text" 
         variant="light"
        onChange={handleChange}
        />
         <Button variant="outline-primary"onClick={addTodo} >add</Button>{' '}    
     {/* <button onClick={addTodo}>add</button> */}
       <br/>
       <ul>
       {todos.map((item,index)=>(
            <li>
                {item}
                <Button variant="outline-danger" onClick={deleteTodo}>delete</Button>{' '}
                {/* <button onClick={deleteTodo}>delete</button> */}
                <Button variant="outline-success" onClick={()=>editTodo(index)}>edit</Button>{' '}
                {/* <button onClick={()=>editTodo(index)}>edit</button> */}
                </li>
       ))}
       </ul>
         </Card>
       
       
     {/* <button onClick={addTodo}>add</button>
       <br/>
       <ul>
       {todos.map((item,index)=>(
            <li>
                {item}
                <button onClick={deleteTodo}>delete</button>
                <button onClick={()=>editTodo(index)}>edit</button>
                </li>
       ))}
       </ul> */}
       
       
     
        </div>

    )
}
export default Todo