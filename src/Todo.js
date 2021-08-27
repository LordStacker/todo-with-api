import { useState, useEffect } from "react";
import react from 'react';
import { data } from "jquery";

const Todo = () => {
    const [listareas, setListareas] = useState([]);
    const [tareas, setTareas] = useState('');
    const rlu = "https://assets.breatheco.de/apis/fake/todos/user/nicolam";
    //Create 'POST'
    //Read   'GET'
    //Update 'PUT'
    //Delete 'DELETE'

   /* //Create user
    useEffect(() => {
        fetch(rlu, {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify([])
        })
            .then((res) => {
            return console.log(res)
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])*/
    //Update task
    useEffect(() => {
        fetch(rlu,{
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(
                [
                    {"label": "code", "done": false},
                    {"label": "morecode", "done": false}	
                ])
        })
            .then((res) => {
                return res.json()
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
       
    })
    //Read task
    useEffect(() =>{
        fetch(rlu,{
            method: "GET",
            headers: {
                "Content-type":"application/json"
            },
        })
            .then((res) => {
                return res.json()
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    })
    /*//Delete task
    
    useEffect(() =>{
        fetch(rlu,{
            method: "DELETE",
            headers: {
                "Content-type": "applicatio/json"
            },
        })
        .then((res) => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
    })*/
    const onSubmit = (e) => {
        e.preventDefault();
        setListareas([...listareas, tareas]);
    };
    const handleChange = (e) => {
        setTareas(e.target.value);
    };
    const deleteTask = (key) => {
        setListareas(listareas.filter((item, index) => index !== key));
        console.log(key);
    };
    return (
        <div>
            <h1>Todo List</h1>
            <div className="row">
                <form onSubmit={onSubmit}>
                    <div className="col-md-8 mx-auto" >
                        <div className="input-group">
                            <input type="text" className="form-control" aria-label="Text input with radio button" value={tareas} onChange={handleChange} placeholder="Actividad a agregar" />
                        </div>
                        <ul className="list-group">
                            {
                                listareas.map((li, key) => <li className="list-group-item" key={key} >{li}<span className="close" onClick={() => deleteTask(key)}>X</span></li>)
                            }
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Todo;
