import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        transactions: [],
        searchTerm: "",
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(data => {
          this.setState({
            transactions: data
          })
      })
  }



  handleChange(term) {
    let newArr = [...this.state.transactions].filter(transaction => {
      transaction.description.includes(term)
    })
    this.setState({
       transactions: newArr
    })
  
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
