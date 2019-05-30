import React from 'react'

const TransactionsList = (props) => {


const renderTransactionTables=()=>{
  return props.transactions.map(transaction=>{
    if(
      transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase())
    ||transaction.category.toLowerCase().includes(props.searchTerm.toLowerCase())
    || transaction.amount.toString().includes(props.searchTerm)
    || transaction.posted_at.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
    {
    return(
      <tr>
        <th>
          <h3 className="ui center aligned header">
            {transaction.posted_at}
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            {transaction.description}
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            {transaction.category}
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            {transaction.amount}
          </h3>
        </th>
      </tr>
    )}else{return null}
  })
}


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {renderTransactionTables()}

      </tbody>
    </table>
  )
}

export default TransactionsList
