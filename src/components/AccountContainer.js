import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {


state={
  transactions: [],
  searchTerm: "",
  transSearch:[]
}
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API



componentDidMount(){
  this.fetchTransactions()
}

fetchTransactions = () =>{
return fetch("https://boiling-brook-94902.herokuapp.com/transactions")
.then(response => response.json())
.then(trans =>{
  this.setState({
    transactions: trans
  })
})
}


  handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  },this.filtertransactions())
  }

filtertransactions = () =>{
  let copyTransArr = [...this.state.transactions]
  let searchArr = copyTransArr.filter(trans =>{
  return  trans === trans.includes(this.state.searchTerm)
  })
  this.setState({
    transsearch: searchArr
  })
}


  render() {
    // let transArr ={this.state.searchTerm === "" ? this.state.transactions : this.state.transSearch}
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
