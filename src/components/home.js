import React, {Component} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function addata(Component) {
    return props => <Component {...props} params={useParams()} navigate={useNavigate()} />
}

class Home extends Component {

    state = {
        user: {city:[]},
        id: this.props.params.id,
    };

    componentDidMount() {
        this.loadUser();
    }

    loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/user/${this.state.id}`);
        this.setState({ user: { ...this.state.user, ...data } });
    };

    onInputChange =  (e) => {
        const {name,value,checked} = e.target;
        if (name === "city"){
            if (checked) {
                this.state.user.city.push(value)
                this.setState(this.state.user);
            } else {
                this.state.user.city.splice(value,1)
                this.setState(this.state.user);
            }
        } else {
            this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } });
        }
    };

        onSubmit = async (e) => {
            e.preventDefault();
            if(this.state.id){
                await axios.put(`http://localhost:3000/user/${this.state.id}`, this.state.user);
            }else{
                await axios.post("http://localhost:3000/user", this.state.user);
            }
            this.props.navigate("/Tabledata");
        };



    render() {
        const { name = "", password = "", email = "", gender = "", city=""} = this.state.user;
        return (
            <div>
                <div className="container">
                <form onSubmit={e => this.onSubmit(e)}>
                    <div className="input-group">
                    <label> Enter your name:
                        <input type="text" className="form-control" name="name" value={name} onChange={e => this.onInputChange(e)}/>
                    </label>
                    </div>
                    <div className="input-group">
                    <label>Enter your password:<input className="form-control" type="password" name="password" value={password} onChange={e => this.onInputChange(e)}/>
                    </label>
                    </div>
                    <div className="input-group">
                    <label>Enter your email:
                        <input className="form-control" type="email" name="email" value={email} onChange={e => this.onInputChange(e)}/>
                    </label>
                    </div>
                    <div>
                    <label>Enter your gender:
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value={"male"} checked={gender === "male" ? true : false} onChange={e => this.onInputChange(e)} />male
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value={"female"} checked={gender === "female" ? true : false} onChange={e => this.onInputChange(e)} />female
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value={"other"} checked={gender === "other" ? true : false} onChange={e => this.onInputChange(e)} />other
                    </div>
                    </label>
                    </div>
                    <div>
                    <label>select city
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="city" id="surat" value={"suart"} checked={city.includes("suart")} onChange={e => this.onInputChange(e)}/>surat
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="city" id="rajkot" value={"rajkot"} checked={city.includes("rajkot")} onChange={e => this.onInputChange(e)} />rajkot
                    </div>
                    </label>
                    </div>
                    <button className="btn btn-primary btn-block">SUBMIT</button>
                </form>
                </div>
            </div>
        );
    }
}
export default addata(Home);


