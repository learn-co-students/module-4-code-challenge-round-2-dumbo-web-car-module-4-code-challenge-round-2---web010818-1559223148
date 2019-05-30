import React from 'react'

import Transaction from './Transaction'

const TransactionsList = (props) => {
console.log("My Props", props.transactionsList)
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

        {props.transactionsList.map((tranObj) =>{
          console.log(tranObj)
          return <Transaction key={tranObj.id} amount={tranObj.amount}/>
        })}

      </tbody>
    </table>
  )
}

export default TransactionsList
