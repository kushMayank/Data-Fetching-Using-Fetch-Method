import React, { Component } from 'react';
var count = 0;
class Display extends Component {
    constructor(props) {

        super(props);

        console.log("in constructor of Display", props);

        this.state = {
            firstname: "dddeed",
            lastname: this.props.lastName,
            avatar: this.props.avatar
        }

    }


    componentWillMount() {

        count += 1
        console.log(" in the component will mount ", this.state)
    }


    render() {
        var first = [];
        var last = [];
        var img = [];
        return (
            <div>
                <h1>hiiiiii  </h1>
                {/* {console.log("hello",this.props.data.avatar[0]+""+this.props.data.lastName[0])} */}




                ===========================================================


                    {this.props.data.firstName.map(function (obj) {
                    first.push(obj);
                })}


                {this.props.data.lastName.map(function (obj) {
                    last.push(obj);
                })}


                {this.props.data.avatar.map(function (obj) {
                    img.push(obj);
                })}


                ===========================================================


                {first.map(function (obj) {
                    console.log("first name", obj);
                    return (
                        <h2> First name:  {obj} </h2>
                    )
                })}

                {last.map(function (obj) {
                    console.log("Last name", obj);
                    return (
                        <h2> Last name:  {obj} </h2>
                    )
                })}

                {img.map(function (obj) {
                    console.log("avatar", obj);
                    return (
                        <h2> avatar:   <img src={obj} alt="Place Kitten" /> </h2>
                    )
                })}

            </div>
        )
    }
}

export default Display;