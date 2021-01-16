const dom = document.querySelector('training-manager')
class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover:false
        }
    }
    render() {
        return(
            <div onMouseLeave={()=>this.setState({hover:false})}>
                <input style={{width:'80%'}} onChange={(e)=>{this.props.inputChange(this.props.i,e.target.value)}} defaultValue={this.props.content}></input>
                <div style={{display:'inline'}}>
                    <svg  onMouseEnter={()=>this.setState({hover:true})} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                    <div style={{backgroundColor:'yellow',position:'absolute',display:this.state.hover?"block":'none',zIndex:'1',right:'20%'}}>
                        <ul >
                            <li>
                                <button onClick={()=>this.props.xoaMsg(this.props.i)}>Xóa</button>
                            </li>
                        </ul>
                    </div>

                </div>
                
            </div>
        )
    }
}
class TrainingManager extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            message_list:[],
            inputing:false
        }
        this.handleInput = this.handleInput.bind(this)
        this.xoaMsg = this.xoaMsg.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.train = this.train.bind(this)
        console.log(window)

    }
    handleInput() {
        this.setState({
            message_list:[...this.state.message_list,{
                content:'',
            }]
        })
    }
    inputChange(i,content) {
        var array = this.state.message_list
        array[i].content = content
        this.setState({
            message_list:array
        })
    }
    xoaMsg(i) {
        var array=[]
        // this.state.message_list.splice(i+1,1)
        if(i==this.state.message_list.length-1) {
            array=this.state.message_list.slice(0,-1)
        }
        else {
            array = this.state.message_list.slice(i+1,this.state.message_list.length)
        }
        this.setState({
            message_list:array
        })
    }
    train() {
        const list = this.state.message_list
        $.ajax({
            // xhrFields: {
            //     onprogress: function (e) {
            //         console.log(e)
            //     if (e.lengthComputable) {
            //     console.log(e.loaded / e.total * 100 + '%');
            //     }
            //     }},
            // xhr: function() {
            //     var xhr = $.ajaxSettings.xhr();
            //     xhr.upload.onprogress = function(e) {
            //         console.log(Math.floor(e.loaded / e.total *100) + '%');
            //     };
            //     return xhr;
            // },
            xhr: ()=>{
                var xhr = new window.XMLHttpRequest();
                //Upload progress
                xhr.upload.addEventListener("progress", function(evt){
                if (evt.lengthComputable) {
                  var percentComplete = evt.loaded / evt.total;
                  //Do something with upload progress
                    console.log(this)
                  }
                }, false);
              //Download progress
                xhr.addEventListener("progress", function(evt){
                  if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                  //Do something with download progress
                    console.log(percentComplete);
                  }
                }, false);
                return xhr;
              },
            // progress: function(e) {
            //     //make sure we can compute the length
            //     if(e.lengthComputable) {
            //         //calculate the percentage loaded
            //         var pct = (e.loaded / e.total) * 100;
        
            //         //log percentage loaded
            //         console.log(pct);
            //     }
            //     //this usually happens when Content-Length isn't set
            //     else {
            //         console.warn('Content Length not reported!');
            //     }
            // },
            url:'/train.php',
            method:'post',
            data: {
                list:list
            }
        }).done(data=>{
            alert(data)
        })
    }
    shouldComponentUpdate(prop,state) {
        // only update when the message_list length is changed
        if(this.state.message_list.length!=state.message_list.length) {
            return true
        }
        return false
    }
    componentDidUpdate(oldprop,oldstate) {
        if(oldstate.message_list.length!=this.state.message_list.length) {
            this.MessageList=this.state.message_list.map((e,i)=>{
                return(
                    <Message inputChange={this.inputChange} xoaMsg={this.xoaMsg} i={i} key={i+e.content} isBot={i%2==0?true:false} content={e.content}></Message>
                )

            })
            this.forceUpdate()
        }
    }
    render() {
        return(
            <div className='w-100 h-100'>
                <div>
                    {this.MessageList&&this.MessageList}
                </div>
                <div>
                    <button style={{display:this.state.inputing&&"none"}} onClick={this.handleInput}>+</button>
                    <button onClick={this.train}>Train</button>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<TrainingManager></TrainingManager>,dom)
