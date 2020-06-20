import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Transaction extends Component {
    render() {
        let id = this.props.match.params.id;
        return (
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
                    Back
                </Link>
                <Link to={`/trns/add/${id}`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle"> Record new Sale</i>
                </Link>
                <br />
                <hr />
              
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <td>2020-04-15</td>
                            <td>Item 1 </td>
                            <td className="text-danger">360</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                        <tr className="table-success">
                            <td>2020-04-01</td>
                            <td>Item 2</td>
                            <td className="text-success">400</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Transaction
