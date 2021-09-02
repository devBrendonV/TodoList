import React,{useState,useEffect} from 'react'
import Item from '../components/Item'
import axios from "axios";
const URL = "http://localhost:3080/api/todolist";

const TodoList = () => {
    const [texto, setTexto] = useState('')
    const [data, setData] = useState([])
    const [dados, setDados] = useState([])
 
    return (
        <div className='principal'>
            <Item/>
        </div>
    )
}

export default TodoList
