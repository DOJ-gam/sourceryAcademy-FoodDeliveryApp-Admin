import "./addFood.css";

export default function AddFood() {
  return (
    <div className="newProduct container-fluid">
      <h1 className="display-4 text-center">New Food Item</h1>
      <form className="addProductForm">
        <div className="form-group">
          <label>Image</label>
          <input type="file" id="file" className="form-control" />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Food Name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" placeholder="300" className="form-control" />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="active" id="active" className="form-control">
            <option value="pizza">Pizza</option>
            <option value="chickem">Chickem</option>
          </select>
        </div>
        <button className="btn btn-info btn-block">Add</button>
      </form>
    </div>
  );
}
