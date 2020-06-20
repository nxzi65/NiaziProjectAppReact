import React, { Component } from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {getWallet,updateWallet} from '../../../actions/projectActions'

class UpdateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
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
        if(nextProps.wallet){
            this.setState({
                id:nextProps.wallet.id,
                name: nextProps.wallet.name,
                price: nextProps.wallet.price,
                description: nextProps.wallet.description,
            })
        }
    }

    componentDidMount(){
        this.props.getWallet(this.props.match.params.id)
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const updateWallet = {
            id:this.state.id,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }
        this.props.updateWallet(this.state.id,updateWallet,this.props.history)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Account Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.price} onChange={(event) => this.changeHandler(event, "price")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.price})} placeholder="price" />
                                    <p className="text-danger">{this.state.errors.price}</p>
                                </div>
                                <div className="form-group">
                                    <textarea value={this.state.description} onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Description">description</textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors,
    wallet:state.wallet.wallet
})

export default connect(mapStateToProps,{getWallet,updateWallet})(UpdateWallet)
