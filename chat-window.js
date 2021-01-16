const dom = document.querySelector('chat-window')
export class Message extends React.Component {
    constructor(props) {
        super(props)
        this.content = React.createRef()
        this.style = {
            botStyle:{
                left:'100%',
                backgroundColor:'yellow'
            },
            normalStyle:{
                right:"100%",
                backgroundColor:'green'
            }
        }
    }
    render() {
        return(
            <div style={this.props.isBot?this.style.botStyle:this.style.normalStyle}>
                <div ref={this.content}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}
class ChatWindow extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
        this.chatBox = React.createRef()
        this.state = {
            message_list:[{
                isBot:true,
                content:'Chào bạn, tôi là chatbot cố vấn học tập, hãy hỏi tôi một câu hỏi.'
            }]
        }
    }
    bin2String(array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
          result += String.fromCharCode(parseInt(array[i], 2));
        }
        return result;
      }
    handleSubmit() {
        const text = this.input.current.value
        if(text==""||text==null||text==undefined) {
            return
        }
        this.getResponse(text)
        this.addMessage(false,text)
    }
    getResponse(text) {
        $.ajax({
            url:'/api_call.php',
            method:'post',
            scriptCharset: "utf-8" ,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType:'json',
            data:{
                input:text
            }
        }).done(data=>{
            const message = utf8.decode(this.bin2String(data))
            this.addMessage(true,message)
        })
    }
    addMessage(isBot,msg) {
        this.setState({
            message_list:[...this.state.message_list,{ isBot:isBot, content:msg }]
        })
    }
    render() {
        const MessageList = this.state.message_list.map((e,i)=>{
            return(
                <Message key={i} isBot={e.isBot} content={e.content}>
                </Message>
            )
        })
        return(
            <div className='w-100 h-100'>
                <div ref={this.chatBox} id='chat_box' className='bg-primary container'>
                    {MessageList}
                </div>
                <div>
                    <input  ref={this.input}>

                    </input> 
                    <button onClick={()=>{this.handleSubmit()}}>
                        &#8629;
                    </button>
                </div>
            </div>
        )

    }
}
ReactDOM.render(<ChatWindow></ChatWindow>,dom)