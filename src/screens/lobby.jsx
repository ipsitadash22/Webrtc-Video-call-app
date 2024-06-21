//user details enter karega
import React,{useState,useEffect,useCallback} from "react"
import {useNavigate} from "react-router-dom"//move to roompage
import { useSocket } from "../context/SocketProvider";
const LobbyScreen = ()=>{
    const [email,setEmail]=useState("") ;
    const[room,setRoom]=useState("");
    const socket= useSocket();
   const navigate=useNavigate();


const handleJoinRoom=useCallback((data)=>{
    const{email,room}=data;
    console.log(email,room);
    navigate(`/room/${room}`)
},[navigate])
// Performance Optimization: By using useCallback,
   //  the handleSubmitForm function is not recreated on every render unless email or room changes.
   // This can improve performance, especially if this function
    const handleSubmitForm=useCallback((e)=>{
        e.preventDefault();//form automaticaly submit naa hai
        socket.emit("room:join",{email,room})
    },[email,room,socket]);
    //The dependencies [email, room] ensure that handleSubmitForm is recreated only when either email or room changes. This prevents unnecessary re-creation of the function on every render.
    useEffect(()=>{
        socket.on('room:join',handleJoinRoom);
        return()=>{
            socket.off('room:join',handleJoinRoom)
        }
    },[socket,handleJoinRoom])
       return(
        <div>
            <h1>
                Lobby
            </h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email ID</label>
                <input type="email" 
                id="email"  
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/>
                <label htmlFor="room">Room Number
                </label>
                <input 
                type="text" 
                id="room"
                value={room} 
                onChange={(e)=>setRoom(e.target.value)}
                />   
                <br/>      
                <button>Join</button>
             </form>
        </div>
    )
}

export default LobbyScreen