import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Tabledata extends Component {
    state = {
        users: []
    };
    componentDidMount(){
        this.loadUsers();
    }
    loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/user")
        this.setState({ users: result.data })
    };

    deleteUser = async (id) => {
        await axios.delete(`http://localhost:3000/user/${id}`);
        this.loadUsers();
    };

    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">password</th>
                        <th scope="col">email</th>
                        <th scope="col">gender</th>
                        <th scope="col">city</th>
                        <th style={{ width: "20%" }}>Action</th>
                    </tr>
                    </thead>
                    <tbody>{
                        this.state.users.map((user,index) => (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.city}</td>
                                <td><Link className=" btn  mx-2" to={`/add/${user.id}`}>update</Link>
                                    <button className="btn" onClick={() =>this.deleteUser(user.id)}>delete</button></td>
                            </tr>))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tabledata;