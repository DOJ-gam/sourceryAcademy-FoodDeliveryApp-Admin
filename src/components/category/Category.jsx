import "./category.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link , useHistory} from "react-router-dom";
import swal from "sweetalert";

export default function AddFood() {

  let url = process.env.NODE_ENV === "development"?
        process.env.REACT_APP_DEVELOPMENT_URL : 
        process.env.REACT_APP_PRODUCTION_URL;

  const history = useHistory();

  // eslint-disable-next-line no-undef
  const [categoryInput, setCategory] = useState({
    slug: '',
    name: '',
    description: '',
    status: '',
    meta_title: '',
    meta_keywords: '',
    meta_description: '',
    error_list: '',
  });

  const handleInput = (e) => {
    e.persist();
    setCategory({...categoryInput, [e.target.name]: e.target.value });
  }

  const submitCategory = (e) => {
    e.preventDefault();
    const data = {
      slug: categoryInput.slug,
      name: categoryInput.name,
      description: categoryInput.description,
      status: categoryInput.status,
      meta_title: categoryInput.meta_title,
      meta_keywords: categoryInput.meta_keywords,
      meta_description: categoryInput.meta_description,
    }

    axios.post(url + 'Categories', data).then(res => {
      if (res.data.status === 200){
        // alert('yes')
        swal('Success', res.data.message, 'success');
        // document.getElementById("category-form").reset();
        // e.returnValue = true;
        // e.preventDefault(false);
        // var myTable = document.getElementById('myTable');
        // var row = myTable.insertRow();
        // var cell1 = row.insertCell();
        // var cell2 = row.insertCell();
        // var cell3 = row.insertCell();
        // var cell4 = row.insertCell();
        // var cell5 = row.insertCell();
        // var cell6 = row.insertCell();
        // cell1.innerHTML = "id";
        // cell2.innerHTML = data.name;
        // cell3.innerHTML = data.slug;
        // cell4.innerHTML = data.status;
        // cell5.innerHTML = "<button>Edit</button>";
        // cell6.innerHTML = "<button>Delete</button>";
        // history.push('/category');
        // window.location.reload();
      }
      // else if (res.data.status === 400){
      //   // alert('no')
      //   setCategory({...categoryInput, error_list:res.data.message});
      // }
    });
    
  }
  
  var displayErrors = [];
  if (categoryInput.error_list){
    displayErrors = [
      categoryInput.error_list.slug,
      categoryInput.error_list.name,
      categoryInput.error_list.meta_title,
    ]
  }
  
  // View
  const [Loading, setLoading] = useState(true)
  const [CategoryList, setCategoryList] = useState([])

  useEffect(() =>{
    async function getData(){
      const res =await axios.get(url + 'Categories')
        //console.log(res);
        if (res.status === 200){
          setCategoryList(res.data)
          //console.log(CategoryList)
        }
        setLoading(false)
    } 
    getData();
  }, []);

  const deleteCategory = (e, id) =>{
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting...";
    
    axios.delete(`https:localhost:5001/api/Categories/${id}`).then(res =>{
      if(res.data.status === 200){
        swal('Success', res.data.message, 'success');
        thisClicked.closest('tr').remove();
      }
      else if(res.data.status === 404)
      swal('Error', res.data.message, 'error');
      thisClicked.innerText = "Delete";
    });
  }

  var viewCategory_HTMLTABLE = "";
  if(Loading){
    return (<h4 className="text-center">Loading Category......</h4>)
  }
  else{
    viewCategory_HTMLTABLE = CategoryList.map((item) => {
      return(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          {/* <td>{item.slug}</td>
          <td>{item.status}</td> */}
          <td>
            {/* <Link to={`edit-category/${item.id}`} className="btn btn-success btn-sm">Edit</Link> */}
          </td>
          <td>
          <button onClick={(e)=>deleteCategory(e, item.id)}
            type="button" 
            className="btn btn-danger btn-sm" 
          >
              Delete
          </button>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="container-fluid px-4 card category-container">
      <h1 className="mt-4">Category</h1>


      {
        displayErrors.map( (item) => {
          return( <p className="alert alert-danger" key={item}>{item}</p>)
        } )
      }
      <form onSubmit={submitCategory} id="category-form">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          
        <li className="nav-item">
            <a
              className="nav-link active"
              id="show-tab"
              data-toggle="tab"
              href="#show"
              role="tab"
              aria-controls="show"
              aria-selected="true"
            >
              View Categories
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="add-tab"
              data-toggle="tab"
              href="#add"
              role="tab"
              aria-controls="add"
              aria-selected="false"
            >
              Add Category
            </a>
          </li>
          
        </ul>

        {/* tabs here */}
        <div className="tab-content" id="myTabContent">
         {/* Add Cat */}
          <div
            className="tab-pane fade"
            id="add"
            role="tabpanel"
            aria-labelledby="add-tab"
          >
            <h5 className="display-3 my-4 text-center">Add Categories</h5>
            {/* <div className="form-group mb-3 card-body">
              <label htmlFor="slug">Slug</label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                onChange={handleInput}
                value={categoryInput.slug}
              />
            </div> */}
            <div className="form-group mb-3 card-body">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleInput}
                value={categoryInput.name}
              />
            </div>
            {/* <div className="form-group mb-3 card-body">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                onChange={handleInput}
                value={categoryInput.description}
              ></textarea>
            </div> */}
            {/* <div className="mt-3 form-group">
              <label htmlFor="status">Status 0=show/1=hidden</label>
              <input
                className=""
                type="checkbox"
                name="status"
                id="status"
                onChange={handleInput}
                value={categoryInput.status}
              />
            </div> */}
{/* 
            <div className="form-group mb-3 card-body border-top border-info border-lg">
              <label htmlFor="meta-title">Meta Title</label>
              <input
                type="text"
                className="form-control"
                id="meta-title"
                name="meta_title"
                onChange={handleInput}
                value={categoryInput.meta_title}
              />
              <span className=" alert-danger d-inline-block my-1 w-100 text-danger">{categoryInput.error_list.meta_title}</span>

            </div>
            <div className="form-group mb-3 card-body">
              <label htmlFor="meta-keywords">Meta Keywords</label>
              <input
                type="text"
                className="form-control"
                id="meta-keywordse"
                name="meta_keywords"
                onChange={handleInput}
                value={categoryInput.meta_keywords}
              />
            </div>
            <div className="form-group mb-3 card-body">
              <label htmlFor="meta-description">Meta Description</label>
              <textarea
                name="meta_description"
                id="meta-description"
                className="form-control"
                onChange={handleInput}
                value={categoryInput.meta_description}
              ></textarea>
            </div> */}
            <div className="form-group card-body">
              <button type="submit" className="btn btn-primary px-4 py-3 float-right btn-lg">
                Submit
              </button>
            </div>
          </div>

          {/* Show Cstegories */}
          <div
            className="tab-pane fade show active"
            id="show"
            role="tabpanel"
            aria-labelledby="show-tab"
          >
            <h5 className="display-3 my-4 text-center">Show Categories</h5>
              <div className="container px-4">
                <div className="card mt-4">
                  <div className="card-header">
                    <h4>Category List</h4>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-striped myTable">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          {/* <th>Slug</th>
                          <th>Status</th> */}
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody id="tbody">
                        {viewCategory_HTMLTABLE}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </form>
    </div>
  );
}
