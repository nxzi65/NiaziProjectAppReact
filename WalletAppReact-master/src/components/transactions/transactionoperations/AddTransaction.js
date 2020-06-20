import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {createTransaction} from '../../../actions/projectActions';
import { connect } from 'react-redux';

class AddTransaction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price:'',
            description: '',
        }
    }

    changeHandler = (event, fieldName, checkbox) => {
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value
        })
    }
    handleSubmit = (event) => {
        let newTransaction = { 
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }
        this.props.createTransaction(newTransaction,this.props.history,this.props.match.params.id);
        event.preventDefault();
    }

    render() {
        let id = this.props.match.params.id;
        const { name, description, price} = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/transactions/${id}`} className="btn btn-light">
                                Back
                    </Link>
                            <h4 className="display-4 text-center">Record New Sale</h4>
                            <p className="lead text-center">Sale </p>
                            <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>

                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "price")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.accountNumber})} placeholder="Price " />
                                    <p className="text-danger">{this.state.errors.price}</p>
                                </div>


                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{createTransaction})(AddTransaction)
