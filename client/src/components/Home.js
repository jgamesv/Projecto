import React from "react";
import video from "../assets/video/video.mp4";
import useUser from "../hooks/useUser";
import { Header } from '../Layout/Header';
const Home = () => {
    const {isLogged} = useUser()
    return <>
    <Header/>
    <div className="cover-container">
        <video className="video" autoPlay loop muted>
            <source src={video} />
        </video>
        
        <div className="info" id="info">
             {isLogged ?<h1>Wellcome to Online Chat</h1>:
            <><h1>Enjoy Online Chat Rooms</h1>
            <p> Here you can share information</p>
            <p>about different themes</p></>}
        </div>
    </div>
    
    </>;
    
}
export default Home;