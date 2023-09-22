import React from "react";

class DisplayInfor extends React.Component{
    render(){
        // ở file MyComponents.js (cha) chúng ta đã gán name và age vào cho component 
        // DisplayInfor.js (con), nên chúng ta có thể gọi name và age = cách úsing
        // keyword "props". Khi vào chế độ inspect trên google, sẽ thấy component 
        // DisplayInfor.js sẽ hiện props vừa khai báo mà k phải state.

        // ex: Destructuring array/obj (NEW)
        const {age,name} = this.props;
        console.log(this.props)
        return(<div>
            My name is {this.props.name} and I'm {this.props.age}
            <br/>
            ------ Code theo destructuring array ---- My name is {name} and I'm {age}
        </div>)
    }
}

export default DisplayInfor;