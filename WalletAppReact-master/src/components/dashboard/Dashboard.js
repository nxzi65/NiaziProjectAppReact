import React, { Component } from 'react'
import DashboardItem from './DashboardItem'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getWallets} from '../../actions/projectActions'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             totalBalance:0.0
        }
    }
    

    componentWillReceiveProps(nextProps){
        if(nextProps.wallets){
            let totalBal = 0
            for(let i=0;i<nextProps.wallets.length;i++){
                totalBal=totalBal+nextProps.wallets[i].currentBalance
            }
            this.setState({totalBalance:totalBal})
        }
    }

    componentDidMount(){
        this.props.getWallets()
    }
    render() {
        const wallets = this.props.wallets
        const walletComponent = wallets.map(wallet=>(<DashboardItem key={wallet.id} wallet={wallet} />))

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Items</h1>
                            <br />
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create new
                        </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createwallet">Item</Link>
                                    <button disabled className="dropdown-item">Sale</button>
                                </div>
                            </div>
                            <br />

                            <hr />
                            {
                                //<!-- Project Item Component -->
                            }

                            {walletComponent}

                            {
                                //<!-- End of Project Item Component -->
                            }


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    wallets:state.wallet.wallets
})
export default connect(mapStateToProps,{getWallets})(Dashboard)
