/**
 * Created by aseladarshan on 8/16/16.
 */

/*
message format
    type:<type>
    sender:<sender>
    payload:<message>
 */
function handleMessage(message){

    if(message.type=='ask' && myRole=='teacherWhiteboard'){
        addQuestion(message.payload);
    }
    else if(message.type=='answer' && myRole=='student'){
        showQuestion(message.payload);
    }
    else if(message.type=='clear' && myRole=='student'){
        clearQuestion();
    }
    else if(message.type=='raiseHand' && myRole=='teacherWhiteboard'){
        studentRaisedHand(message.sender);
    }
    else if(message.type=='allowQuestion'){
        if(myRole=='student'){
            //show student is answering a question
            showAlert(message.payload+" is asking a question");

        }
        else if(myRole=='studentPersonalClass'){
            //if it is my question enable mic
            if(message.payload==myUsername){
                askTheQuestion();
            }
        }
    }
    else if(message.type=='finished'){
        if(myRole=='teacherWhiteboard'){
            finishedAsking();
        }
        else if(myRole=='student'){
            clearAlert();
        }
        else if(myRole=='studentPersonalClass'){
            stopQuestion();
        }
    }
    else if(message.type=='videoPlayer'){
        //message is related to video player.
        //send payload to videoPlayerMessageHandler
        videoPlayerMessageHandler(message.payload);
    }
}

//function to send custom message using webrtc websocket
function sendMessage(type,sender,payload){

    //construct message
    var message ={
        type:type,
        sender:sender,
        payload:payload
    };
    //send message through webrtc websocket
    webrtc.sendToAll('classroom',message);
}