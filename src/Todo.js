import { useState } from "react";
import react from 'react';

const Todo = () => {
    const [listareas, setListareas] = useState([]);
    const [tareas, setTareas] = useState('');



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
