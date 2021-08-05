import "./addProduct.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";


function AddProduct() {

  let url = process.env.NODE_ENV === "development"?
  process.env.REACT_APP_DEVELOPMENT_URL : 
  process.env.REACT_APP_PRODUCTION_URL;

  const [CategoryList, setCategoryList] = useState([]);
  const [ErrorList, setError] = useState([]);


  const [productInput, setProductInput] = useState({
    category_id: '',
    slug: '',
    name: '',
    description: '',

    meta_title: '',
    meta_keywords: '',
    meta_description: '',

    selling_price: '',
    featured: '', 
    popular: '', 
    status: '', 
  });

  const [picture, setPicture] = useState([]);

  const handleInput = (e) =>{
    e.persist();
    setProductInput({...productInput, [e.target.name]:e.target.value});
    // console.log(e.target.value);
  }
  const handleImage = (e) =>{
    setPicture({image: e.target.files[0]})
  }

  useEffect(() => {
    axios.get(url + 'Categories').then(res => {
//      console.log(res)
      if(res.status === 200){
         //console.log(res);
        setCategoryList(res.data);
        //console.log(CategoryList)
      }
     
    });
  }, [])

  const submitProduct = (e) => {
    e.preventDefault();
    // console.log(productInput.name)
    // console.log(picture.image)
    console.log(productInput)
    // const formData = new FormData(); //use this to insert imge
    // var form = document.forms.namedItem("fileinfo");
    var formData = new FormData();
    console.log(picture.image);
    const data = {
      image: picture.image,
      category_id: productInput.category_id,
      slug: productInput.slug,
      name: productInput.name,
      description: productInput.description,
      meta_title: productInput.meta_title,
      meta_keywords: productInput.meta_keywords,
      meta_description: productInput.meta_description,
      selling_price: productInput.selling_price,
      featured: productInput.featured,
      popular: productInput.popular,
      // status: productInput.status
      status: 1
    }
    
    // formData.append("name", "Groucho");
    formData.append('image', picture.image);
    formData.append('category_id', productInput.category_id);
    formData.append("slug", productInput.slug);
    formData.append('name', productInput.name);
    formData.append('description', productInput.description);
    formData.append('meta_title', productInput.meta_title);
    formData.append('meta_keywords', productInput.meta_keywords);
    formData.append('meta_description', productInput.meta_description);
    formData.append('selling_price', productInput.selling_price);
    formData.append('featured', productInput.featured);
    formData.append('popular', productInput.popular);
    formData.append('status', productInput.status);
    console.log(formData.get("name"));
    // var request = new XMLHttpRequest();
    // request.open("POST", "http://127.0.0.1:8000/api/store-product");
    // request.send(formData);
    axios.post('http://127.0.0.1:8000/api/store-product', formData).then(res =>{
      console.log(formData.get("meta_title"));

      if(res.data.status === 200){
        swal('Success', res.data.message, 'success');
        // setError([]);
      }
      else if(res.data.status === 422){
        swal("All Fields are required!!", "", "error");
        setError(res.data.errors);
      }
    });
  }

  return (
    <div className="cotainer-fluid product-container">
      <div className="card p-5 h-100">
        <div className="card-header">
          <h4>
            Add Product
            <Link className="btn btn-primary btn-sm float-right">
              View Products
            </Link>
          </h4>
        </div>
        <div className="card-body">
          
          {/* multi-form === for image */}
          <form onSubmit={submitProduct} encType="multipart/form-data" name="fileinfo">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="seo-tab"
                  data-toggle="tab"
                  href="#seo"
                  role="tab"
                  aria-controls="seo"
                  aria-selected="false"
                >
                  SEO
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="others-tab"
                  data-toggle="tab"
                  href="#others"
                  role="tab"
                  aria-controls="others"
                  aria-selected="false"
                >
                  Other Details
                </a>
              </li>
            </ul>
            {/* Tabs */}
            <div class="tab-content" id="myTabContent">
              {/* Home Tab */}
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                
                <div className="form-group mb-3 card-body">
                  <label htmlFor="category_id">Select Category</label>
                  <select
                    name="category_id"
                    id="category_id"
                    className="form-control"
                    onChange={handleInput}
                    value={productInput.category_id}
                  >
                    <option>Select Category</option>
                    {
                      CategoryList.map((item) =>{
                        return(
                          <option value={item.id} key={item.id}>{item.name}</option>
                        )
                      })
                    }
                  </select>
                  <small className="text-danger">{ErrorList.category_id}</small>
                </div>
                {/* <div className="form-group mb-3 card-body">
                  <label htmlFor="slug">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    onChange={handleInput}
                    value={productInput.slug}
                  />
                  <small className="text-danger">{ErrorList.slug}</small>
                </div> */}
                <div className="form-group mb-3 card-body">
                  <label htmlFor="slug">image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={handleInput}
                    value={productInput.slug}
                  />
                  <small className="text-danger">{ErrorList.slug}</small>
                </div>
                <div className="form-group mb-3 card-body">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={handleInput}
                    value={productInput.image}
                  />
                  <small className="text-danger">{ErrorList.name}</small>
                </div>
                <div className="form-group mb-3 card-body">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    onChange={handleInput}
                    value={productInput.description}
                  ></textarea>
                </div>
              </div>

              {/* Profile SEO */}
              <div
                class="tab-pane fade"
                id="seo"
                role="tabpanel"
                aria-labelledby="seo-tab"
              >
                <div className="form-group mb-3 card-body border-top border-info border-lg">
                  <label htmlFor="meta-title">Meta Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="meta-title"
                    name="meta_title"
                    onChange={handleInput}
                    value={productInput.meta_title}
                  />
                  <small className="text-danger">{ErrorList.meta_title}</small>
                </div>
                <div className="form-group mb-3 card-body">
                  <label htmlFor="meta-keywords">Meta Keywords</label>
                  <input
                    type="text"
                    className="form-control"
                    id="meta-keywordse"
                    name="meta_keywords"
                    onChange={handleInput}
                    value={productInput.meta_keywords}
                  />
                </div>
                <div className="form-group mb-3 card-body">
                  <label htmlFor="meta-description">Meta Description</label>
                  <textarea
                    name="meta_description"
                    id="meta-description"
                    className="form-control"
                    onChange={handleInput}
                    value={productInput.meta_description}
                  ></textarea>
                </div>
              </div>

              {/* Others Tab */}
              <div
                class="tab-pane fade"
                id="others"
                role="tabpanel"
                aria-labelledby="others-tab"
              >
                <div className="row">
                  <div className="col-md-4 mt-3 form-group">
                    <label htmlFor="selling_price">Selling Price</label>
                    <input
                      type="text"
                      name="selling_price"
                      id="selling_price"
                      className="form-control"
                      onChange={handleInput}
                      value={productInput.selling_price}
                    />
                  </div>
                  <div className="col-md-8 mt-3 form-group">
                    <label htmlFor="image">Image</label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="form-control"
                      onChange={handleImage}
                    />
                    <small className="text-danger">{ErrorList.image}</small>
                  </div>
                  {/* <div className="col-md-4 mb-3 form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea type="text" name="ingredients" id="ingredients" className="form-control"> </textarea>
                  </div> */}
                  <div className="col-md-4 mt-3 form-group">
                    <label htmlFor="featured">Featured (checked=shown)</label>
                    <input
                      type="checkbox"
                      name="featured"
                      id="featured"
                      className="w-75 h-50"
                      onChange={handleInput}
                      value={productInput.featured}
                    />
                  </div>
                  <div className="col-md-4 mt-3 form-group">
                    <label htmlFor="popular">Popular (checked=shown)</label>
                    <input
                      type="checkbox"
                      name="popular"
                      id="popular"
                      className="w-75 h-50"
                      onChange={handleInput}
                      value={productInput.popular}
                    />
                  </div>
                  <div className="col-md-4 mt-3 form-group">
                    <label htmlFor="status">Status (checked=hidden)</label>
                    <input
                      type="checkbox"
                      name="status"
                      id="status"
                      className="w-75 h-50"
                      onChange={handleInput}
                      value={productInput.status}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary px-4 mt-2" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;