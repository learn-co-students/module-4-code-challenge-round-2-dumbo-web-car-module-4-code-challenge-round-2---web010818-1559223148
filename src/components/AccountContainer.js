import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'


class AccountContainer extends Component {

  

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  state = {
    transactions: [],
    filteredTransactions: [],
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(response => response.json())
    .then(transactions => {
      this.setState({
        transactions: transactions,
        filteredTransactions: transactions
      })
    })
  }
  

  handleChange = (event) => {
    // console.log(event);
    let newArray = [...this.state.transactions].filter( transaction => {
      return transaction["description"].toLowerCase().includes(event) || transaction["category"].toLowerCase().includes(event) || transaction["description"].includes(event) || transaction["category"].includes(event)
    })
    this.setState({
      filteredTransactions: newArray
    })
  }



  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
