import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const API = `https://boiling-brook-94902.herokuapp.com/transactions`

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchCategory: []
    }
  }


  componentDidMount() {
    this.getTransactions()
  }


  getTransactions = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions:transactions
      })
    })
  }


  handleChange(category) {
    const searchArray = [...this.state.transactions].filter(transaction => {
      return transaction.category.includes(category) 
    })
    this.setState({
      searchCategory: searchArray
    })
  }


  render() {

    return (
      <div>
        <Search input={this.state.input} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
