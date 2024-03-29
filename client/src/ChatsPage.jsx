import React from 'react'
import {PrettyChatWindow} from 'react-chat-engine-pretty'
function ChatsPage(props) {
  return (
   <div style={{height: '100vh'}}>
    <PrettyChatWindow
        projectId='ed4dcb5d-b7e9-4655-b10a-9892281566d7'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
   </div>
  )
}

export default ChatsPage
