import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    allTransactions: transactions,
    filtered: []
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactionResp => {
      this.setState({
        allTransactions: transactionResp
      })
    })
  }

  handleChange(event) {
    console.log(event.target.value)
  }

//filteredObj= this.state.allTransactions.map(transaction.includes(event.target.value))



  render() {
    return (
      <div>
        <Search value={this.state.allTransactions} handleChange={this.handleChange}/>
        <TransactionsList allTransactions={this.state.allTransactions} />
      </div>
    )
  }
}

export default AccountContainer
