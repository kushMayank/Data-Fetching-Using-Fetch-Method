import React, { Component } from 'react';
import Display from './display';

class Myapp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: [],
            lastName: [],
            avatar: []
        }

        this.getData = this.getData.bind(this);

        console.log(" in the contructor of myapp", this.state);

    }

    getData(e) {

        console.log("this.state in the getdata myapp.js", this.state);


        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(json => {
                console.log("my precious obj", json.data);
                var arrFn = [];
                var arrLn = [];
                var arrAv = [];
                json.data.map(function (obj) {

                    console.log(obj.first_name);
                    arrFn.push(obj.first_name);
                    arrLn.push(obj.last_name);
                    arrAv.push(obj.avatar)




                })
                this.setState({
                    firstName: arrFn,
                    lastName: arrLn,
                    avatar: arrAv
                });

                console.log("this.state in get data myapp.js", this.state);

            });


    }


    render() {
        return (
            <div>
                <div className="header">
                    <h3>get your details here. </h3>
                </div>
                <hr />
                <div className="body">
                    <label>Enter the data and hit the button</label>
                    <img src="http://placekitten.com/200/300" alt="Place Kitten" />
                    <button onClick={this.getData}>Get Now</button>

                    <Display data={this.state} />

                </div>
            </div>
        )
    }

}

export default Myapp;
