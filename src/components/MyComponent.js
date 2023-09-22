// class component  --->>> this course will start with class component only
// function component
import React from 'react'
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    // cu phap jsx, only react has this, cho phep viet code javascript in a html
    // ham render() giup chuyen doi cu phap jsx và giuóp nó hiển thị trên giao diện
    
    render(){
        const myInfor = ['a','b','c']
        return (
            //props: properties
            //line 22, chúng ta vẫn có thể assign một prop khác không thuộc cha cho prop?
            //con --> ex: myInfor.
            <div>
                
                <UserInfor></UserInfor>
                <br/> 
                <DisplayInfor name = "HoangDeptrai" age="25"> </DisplayInfor>
                <hr></hr>
                <DisplayInfor name = "ThatSuRatDT" age="26" myInfor={myInfor}/>
            </div>
        );  
    }
}

// muon su dung cai .js nay phai import no

export default MyComponent;