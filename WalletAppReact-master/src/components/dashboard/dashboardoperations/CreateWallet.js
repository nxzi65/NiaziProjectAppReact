import React, { Component } from 'react'
import {createWallet} from '../../../actions/projectActions'
import {connect} from 'react-redux'
import classnames from 'classnames'

class CreateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            description: '',
            errors:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newWallet = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }
        this.props.createWallet(newWallet,this.props.history)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Item</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "price")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.accountNumber})} placeholder="Price " />
                                    <p className="text-danger">{this.state.errors.price}</p>
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors
})

export default connect(mapStateToProps,{createWallet})(CreateWallet)
