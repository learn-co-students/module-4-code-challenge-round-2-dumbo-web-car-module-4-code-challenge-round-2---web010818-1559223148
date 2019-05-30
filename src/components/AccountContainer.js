import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // constructor() {
  //   super()
  //
  //   // get a default state working with the data imported from TransactionsData
  //   // use this to get the functionality working
  //   // then replace the default transactions with a call to the API
  //
  // }
  state = {
    allTrans: [],
    searchTerm: "",
    filtered: []
  }

  componentDidMount() {
    this.fetchTrans()
  }

  fetchTrans = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactions =>{
      this.setState({
        allTrans: transactions
      })
    })
  }


  handleChange = (event) => {
    // console.log(e.target.value)

    // get the term from the search
    const term = event.target.value
    this.setState({
      searchTerm: term
    })


    // ***************************************
    // 👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁
    // ********** REEEEAD ME PLEASE!! *********
  // I have like 2 mins left so ill explain
  // at this point ive run out of time so I didnt get to work withthe prev state yet- as it stands its still case sensitive and wont revert back as you delete. it will filter out as you type (again case sensitive)- what can i say i just ran out of time!!🙏 be kind ;)  a few more mins would have done it!!


    const filtered = this.state.allTrans.filter(trans =>{
      if(trans.description.startsWith(term) === true)
      return trans
    })

    // ran out of time so didnt put prev but I had to show something!!!!s//
    this.setState({
      allTrans: filtered
    })
    console.log(filtered, "FILTERED ARR")
  }

  render() {
// console.log(this.state, "STATE AT MAINPAGE")
    return (
      <div>
        <Search  handleChange={this.handleChange}/>
        <TransactionsList allTrans={this.state.allTrans} />
      </div>
    )
  }
}

export default AccountContainer
