// class component  --->>> this course will start with class component only
// function component
import React from 'react'
class MyComponent extends React.Component {
    // cu phap jsx, only react has this, cho phep viet code javascript in a html
    // ham render() giup chuyen doi cu phap jsx và giuóp nó hiển thị trên giao diện
    
    render(){
        return (
            // only 1 <div></div> in a jsx, to write code in <div></div> using {code} --> example: {Math.random()}
            <div>
                My first component and 
                {Math.random()}
            </div>
        );
    }
}

// muon su dung cai .js nay phai import no

export default MyComponent;