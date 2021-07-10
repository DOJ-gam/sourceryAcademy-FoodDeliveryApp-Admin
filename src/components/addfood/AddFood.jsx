import "./addFood.css";

export default function AddFood() {
  return (
    <div className="newProduct">
      <h1 className="display-4 text-center">New Food Item</h1>
      <form className="addProductForm">
        <div className="form-group">
          <label>Image</label>
          <input type="file" id="file"  className="form-control"/>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Food Name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" placeholder="300"  className="form-control"/>
        </div>
        {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button className="btn btn-info btn-block">Add</button>
      </form>
    </div>
  );
}
