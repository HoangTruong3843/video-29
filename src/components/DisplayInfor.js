import React from "react";

class DisplayInfor extends React.Component{
    render(){
        // ở file MyComponents.js (cha) chúng ta đã gán name và age vào cho component 
        // DisplayInfor.js (con), nên chúng ta có thể gọi name và age = cách úsing
        // keyword "props". Khi vào chế độ inspect trên google, sẽ thấy component 
        // DisplayInfor.js sẽ hiện props vừa khai báo mà k phải state.

        // ex: Destructuring array/obj (NEW)

        // sử dụng map để truyền dữ liệu từ 1 array (listUsers) được gán giá trị từ file MyComponent.js
        const {listUsers} = this.props;
        console.log(this.props)
        return(<div>
            {listUsers.map((user)=>{
                //tiếp theo nếu cần phải đặt cho từng user một key 
                return(<div key={user.id}>
                    <div>My name 's {user.name}</div>
                    <div>My age 's {user.age}</div>
                    <hr/>
                </div>)
            })}
            
        </div>)
    }
}
    
export default DisplayInfor;