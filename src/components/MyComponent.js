// class component  --->>> this course will start with class component only
// function component
import React from 'react'

class MyComponent extends React.Component {
    // cu phap jsx, only react has this, cho phep viet code javascript in a html
    // ham render() giup chuyen doi cu phap jsx và giuóp nó hiển thị trên giao diện
    state ={
        name: 'Hoang',
        address: 'Temple',
        age: '26'
      };
    myFunction(){
        console.log("button content here hehe!!")
    }
    handleClick(event){
        console.log("event target nè -->",event.target)
        console.log("event là cái này nè --> ",event)  //để xem xem event là gì
    }
    handleOnMouseOver(event){
        console.log("event type onMouseOver -->",event)
    }
    myInfo1=(event)=>{                                   //Arrow function giúp function có thể dùng được biến được khai báo ở trong class hiện tại
        console.log("Hi! My name is ",this.state.name, "and I'm from ", this.state.address)
    }
    myInfo2(event){                                     //nếu k dùng arrow function mà vẫn giữ cách khai báo function cũ --> fix ở dưới
        console.log("Hi! My name is ",this.state.name, "and I'm from ", this.state.address)
        this.setState({ name:'HoangDayNe', age: Math.floor(Math.random()*100)})   // nếu state được gọi sẽ show name == "HoangDayNe" và "state" name được updated shown in myComponent
    }
    render(){
        return (
            // only 1 <div></div> in a jsx, to write code in <div></div> using {code} --> example: {Math.random()}
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <p></p>
                <button onClick={this.myFunction}> click me hehe</button>
                <button onClick={this.handleClick}>another click me</button>
                <button onMouseOver={this.handleOnMouseOver}>hover me onMouseOver </button> 
                <button onClick={this.myInfo1}>Click here for my info --Use arrow function to create the function!!</button>
                <button onClick={(event)=>this.myInfo2(event)}>Click here for my info -- not changing the function but change the button</button>
            </div>
        );  
    }
}

// muon su dung cai .js nay phai import no

export default MyComponent;