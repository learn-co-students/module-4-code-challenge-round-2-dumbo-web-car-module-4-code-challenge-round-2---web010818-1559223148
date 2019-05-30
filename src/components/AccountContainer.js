import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

 
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }
  state = {
    transactions:[]
  }

  handleSearchChange (event) {
  console.log()
  }

  handleChange(event) {
    this.setState({
  
    })
  
  }


  render() {
    console.log(transactions)
    return (
      <div>
        <Search onChange={this.handleChane}/>
        <TransactionsList transactionsList={transactions}/>
      </div>
    )
  }
}

export default AccountContainer
