import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
    const[note,setNote]=useState({
        title:"",
        content:""
    });

    const[isFold,unFold]=useState(false);

    function setFold(){
        unFold(true);
    }
    
    function updateText(event){
        const {name,value} = event.target;
        setNote(prev=>{
            return {
                ...prev,
                [name]:value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote(
            {
                title:"",
                content:""
            }
        );
        event.preventDefault();
    }
    return (
        <div>
          <form className="create-note">
            {isFold && <input 
            name="title" 
            placeholder="Title" 
            value={note.title} 
            onChange={updateText}    
            />}
            <textarea 
            onClick={setFold}
            onChange={updateText}
            name="content" 
            placeholder="Take a note..." 
            rows={isFold? 5 : 1}
            value={note.content}    
            />
            <Zoom in={isFold}>
            <Fab onClick={submitNote}>
                <AddIcon/>
            </Fab>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateArea;