import React, { useState } from 'react';
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
    ExpandMore,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close"
import "./css/QuoraHeader.css";
import { Avatar, Button, Input } from '@material-ui/core';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function QHeader() {
    const[isModalOpen,setIsModalOpen]=useState(false);
    const [inputUrl,setInputUrl]= useState("");
    const Close = (<CloseIcon/>);
    return (
        <div className="qHeader">
            <div className="qHeader-content">
                <div className="qHeader__logo">
                    <h3>MANIT AskVille</h3>
                </div>
                <div className="qHeader__icons">
                    <div className="qHeader__icon">
                        <HomeIcon />
                    </div>
                    <div className="qHeader__icon">
                        <FeaturedPlayListOutlinedIcon />
                    </div>
                    
                    <div className="qHeader__icon">
                        <PeopleAltOutlined />
                    </div>
                   
                </div>
                <div className="qHeader__input">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="modal__title">
                    <Button className="modal__button" onClick={()=> setIsModalOpen(true)}>Add a question</Button>
                    <Modal
                        open={isModalOpen}
                        closeIcon = {Close} 
                        onClose={()=>setIsModalOpen(false)}
                        closeOnEsc
                        center
                        closeOnOverlayClick={false}
                        styles={{
                            overlay:{
                                height:"auto"
                            }
                        }
                        }
                    >
                        <div className="modal__title"> 
                            <h5>Add Question</h5>
                            <h5>Share Link</h5>
                        </div>
                            <div className="modal__info">
                                <Avatar className="avatar" />
                                <div className="modal__scope">
                                    <PeopleAltOutlined/>
                                    <p>Public</p>
                                    <ExpandMore/>
                                </div>
                            </div> 
                        <div className="modal__Field">
                            <Input type="text" placeholder='Start your question with "What, Why, How, etc."'/>
                            <div style={{
                                display:"flex",
                                flexDirection:"column"
                            }}>
                                <input
                                    value={inputUrl}
                                    onChange={(e)=> setInputUrl(e.target.value)}
                                    styles={{
                                        margin:"5px 0",
                                        border:"1px solid lightgray",
                                        padding:"10px",
                                        outline:"2px solid #000"
                                    }} 
                                    type='text' placeholder='Optional: include a link that gives context'/>
                                    {
                                        inputUrl!==""&& (<img  style={{
                                            height: "40vh",
                                            objectFit: "contain",
                                          }} src={inputUrl} alt="displayimage" ></img>
                                        )}
                                   
                            </div>
                        </div>
                         <div className="modal__buttons">
                             <button className='cancel' onClick={()=> setIsModalOpen(false)}>
                                 Cancel
                             </button>
                             <button type='submit' className="add">
                                 Add Question
                             </button>
                         </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default QHeader
