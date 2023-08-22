import React from 'react'

function Order() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{ backgroundColor: 'yellow'}}>
          <span className='fs-4 fw-bold text-black'>Orders</span>
          <button className="btn btn-dark">Order Complete</button>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.NO.</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0001</td>
                <td>Laiba Khan</td>
                <td>iPhone 9</td>
                <td>01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Order