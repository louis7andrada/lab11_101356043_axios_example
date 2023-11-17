import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div className="UserList">
                <h2>User List</h2>
                {this.state.persons.map(person => (
                    <div key={person.login.uuid} className="User">
                        <div className="User-header">
                            <img src={person.picture.thumbnail} alt={`${person.name.first} ${person.name.last}`} />
                            <h3>{`${person.name.first} ${person.name.last}`}</h3>
                        </div>
                        <dl className="User-details">
                            <dt>User Name:</dt>
                            <dd>{person.login.username}</dd>
                            {/* Repeat for other details */}
                        </dl>
                        {/* Add a button or link for details if needed */}
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
