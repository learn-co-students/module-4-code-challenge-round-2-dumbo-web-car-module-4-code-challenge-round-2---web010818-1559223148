import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state ={
    transactions:[],
    searchTerm:""
  }

  handleSearch=(event)=>{
    this.setState({searchTerm:event.target.value})
  }


componentDidMount(){

fetch('https://boiling-brook-94902.herokuapp.com/transactions')
.then(res=>res.json())
.then(parsedRes=>{this.setState({
  transactions:parsedRes
},()=>{console.log(parsedRes)})})

}

  render() {

    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <TransactionsList searchTerm={this.state.searchTerm}transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
