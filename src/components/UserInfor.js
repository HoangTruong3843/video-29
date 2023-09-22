import React from "react";

class UserInfor extends React.Component{
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
    handleOnChangeAge = (event)=>{
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit=(event)=>{
        event.preventDefault()  // preventDefault() để ngăn chặn việc load lại trang (mặc định) khi click vào button "submit"
        console.log(this.state) // thử in ra xem state changed từ input của user.
    }
    render(){
        return (<div>
                My name is {this.state.name} and I'm {this.state.age}       
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value = {this.state.name}
                        type ="text"
                        onChange ={(event)=>this.handleOnChangeInput(event)}
                     />

                     <label>Your age: </label>
                    <input
                        value = {this.state.age}
                        type ="text"
                        onChange ={(event)=>this.handleOnChangeAge(event)}
                     />
                     <button> Submit </button>
                </form>

        </div>)
    }

}

export default UserInfor;