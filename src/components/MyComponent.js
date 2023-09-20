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
    
    handleOnChangeInput = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit=(event)=>{
        event.preventDefault()  // preventDefault() để ngăn chặn việc load lại trang (mặc định) khi click vào button "submit"
        console.log(this.state) // thử in ra xem state changed từ input của user.
    }
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}       
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input
                        type ="text"
                        onChange ={(event)=>this.handleOnChangeInput(event)}
                     />
                     <button> Submit </button>
                </form>
            </div>
        );  
    }
}

// muon su dung cai .js nay phai import no

export default MyComponent;