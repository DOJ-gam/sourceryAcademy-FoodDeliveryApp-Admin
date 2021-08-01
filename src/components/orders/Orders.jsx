import "./Orders.css";
import {Restaurant} from '@material-ui/icons'

export default function Orders() {
  return (
    <div className="container-fluid orders-container">

        <h1 className="display-4 text-center">List of Orders</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Restaurant</th>
            <th scope="col">Created</th>
            <th scope="col">Client</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>July 14, 2021, 2:45pm</td>
            <td>Omar Jeng</td>
            <td>450</td>
            <td>
                <button className="btn btn-info d-inline-block mr-2">Confirm</button>
                <button className="btn btn-danger ">Cancel</button>
            </td>
          </tr>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>July 14, 2021, 2:45pm</td>
            <td>Omar Jeng</td>
            <td>450</td>
            <td>
                <button className="btn btn-info d-inline-block mr-2">Confirm</button>
                <button className="btn btn-danger ">Cancel</button>
            </td>
          </tr>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>July 14, 2021, 2:45pm</td>
            <td>Omar Jeng</td>
            <td>450</td>
            <td>
                <button className="btn btn-info d-inline-block mr-2">Confirm</button>
                <button className="btn btn-danger ">Cancel</button>
            </td>
          </tr>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>July 14, 2021, 2:45pm</td>
            <td>Omar Jeng</td>
            <td>450</td>
            <td>
                <button className="btn btn-info d-inline-block mr-2">Confirm</button>
                <button className="btn btn-danger">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
