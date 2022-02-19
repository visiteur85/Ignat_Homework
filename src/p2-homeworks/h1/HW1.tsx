import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const newMessageData = [
    {
    avatar: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/5513/production/_109997712_baby-yoda-11.jpg',
    name: 'Pavel',
    message: 'Hello',
    time: '19:00'
},
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVkjkyrJGkOEFx6YIglKWVEG3U5oIvnTQxA&usqp=CAU',
        name: 'T-100',
        message: 'I ll kill you',
        time: '21:00'
    }
]

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={newMessageData[0].avatar}
                name={newMessageData[0].name}
                message={newMessageData[0].message}
                time={newMessageData[0].time}
            />
            <hr/>
            <AlternativeMessage
                avatar={newMessageData[1].avatar}
                name={newMessageData[1].name}
                message={newMessageData[1].message}
                time={newMessageData[1].time}
            />
        </div>
    )
}

export default HW1
