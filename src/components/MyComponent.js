// class component  --->>> this course will start with class component only
// function component
import React from 'react'
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    // cu phap jsx, only react has this, cho phep viet code javascript in a html
    // ham render() giup chuyen doi cu phap jsx và giuóp nó hiển thị trên giao diện
    state={
        listUsers:[
            {id: 1, name: "Huy Truong",age:"18"},
            {id: 2, name: "Hoang Truong",age:"19"},
            {id: 3, name: "Huy Hoang",age:"20"},
        ]
    }
    render(){
        
        return (
            // thông thường đặt tên biến và giá trị muốn gán giống hệt nhau (listUsers)
            <div>
                
                <UserInfor></UserInfor>
                <br/> 
                <DisplayInfor listUsers ={this.state.listUsers}/>
                
            </div> 
        );  
    }
}

// muon su dung cai .js nay phai import no

export default MyComponent;