import "./Restaurants.css";

export default function Orders() {
  return (
    <div className="container-fluid p-5 ml-5 restaurant-container">

      <h1 className="display-4 text-center">Add New Restaurant</h1>

      <form className="">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Restaurant Name" className="form-control " autoFocus />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Restaurant Address" className="form-control" autoFocus />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input type="text" placeholder="Restaurant Contact" className="form-control" autoFocus />
        </div>
        
        <button className="btn btn-info btn-block bg-success">Add</button>
      </form>

        <div className="border-bottom border-danger mt-5 mb-5"></div>

        <h1 className="display-4 text-center">List of Restaurants</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>Senegambia</td>
            <td>3888009</td>
            <td>
                <button className="btn btn-success d-inline-block mr-2">Edit</button>
                <button className="btn btn-danger d-inline-block mr-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>Senegambia</td>
            <td>3888009</td>
            <td>
                <button className="btn btn-success d-inline-block mr-2">Edit</button>
                <button className="btn btn-danger d-inline-block mr-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>Senegambia</td>
            <td>3888009</td>
            <td>
                <button className="btn btn-success d-inline-block mr-2">Edit</button>
                <button className="btn btn-danger d-inline-block mr-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>ID-1001</td>
            <td>Alibaba Restaurant</td>
            <td>Senegambia</td>
            <td>3888009</td>
            <td >
                <button className="btn btn-success d-inline-block mr-2">Edit</button>
                <button className="btn btn-danger d-inline-block mr-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
