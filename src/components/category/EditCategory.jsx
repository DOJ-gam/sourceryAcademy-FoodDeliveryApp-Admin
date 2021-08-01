import axios from 'axios';
import react, { useEffect, useState } from 'react';
import {Link, useHistory, useParams} from 'react-router-dom'
import swal from 'sweetalert';

function EditCategory(){

    const [Loading, setLoading] = useState(true)

    const history = useHistory();
    const [categoryInput, setCategory] = useState([])
    const [error, setError] = useState([])

    let { id } = useParams();
    const category_id = id;
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/edit-category/${category_id}`).then(res =>{
            if(res.data.status === 200){
                setCategory(res.data.category);
            }
            else if(res.data.status === 404){
                swal("error", res.data.message, 'error');
                history.push('/category')
            }
            setLoading(false);
        });
    }, [history, category_id]);


    const handleInput = (e) =>{
        e.persist();
        setCategory({...categoryInput, [e.target.name]:e.target.value});
    }

   const updateCategory = (e) =>{
       e.preventDefault();
       const data = categoryInput;
       axios.put(`http://127.0.0.1:8000/api/update-category/${category_id}`, data).then(res=>{
        if(res.data.status === 200){
            swal('success', res.data.message, 'success')
        }
        else if(res.data.status === 422){
            swal('All Fields are required', "", 'error')
            setError(res.data.errors);
        }
        else if(res.data.status===404){
            swal('Error', res.data.message, 'error');
            history.push('/category')
        }
       })
   }

    if(Loading){
        return (<h4 className="text-center">Loading Category......</h4>)
    }
    
    return(
        <div className="container-fluid px-4">
            
            <div className="card-header">
                <h5>Edit Category
                <Link to="/category" className="btn btn-primary btn-sm float-right">Back</Link>
                </h5>
            </div>

            <form onSubmit={updateCategory}>
                <div className="form-group mb-3 card-body">
                <label htmlFor="slug">Slug</label>
                <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    onChange={handleInput}
                    value={categoryInput.slug}
                />
                <small className="text-danger">{error.slug}</small>
                </div>
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
                <small className="text-danger">{error.name}</small>
                </div>
                <div className="form-group mb-3 card-body">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    onChange={handleInput}
                    value={categoryInput.description}
                ></textarea>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="status"></label>
                <input
                    className="card-body ml-5"
                    type="checkbox"
                    name="status"
                    id="status"
                    onChange={handleInput}
                    value={categoryInput.status}
                />
                Status 0=show/1=hidden
                </div>

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
                {/* <span className=" alert-danger d-inline-block my-1 w-100 text-danger">{categoryInput.error_list.meta_title}</span> */}
                <small className="text-danger">{error.meta_title}</small>
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
                </div>
                <div className="form-group card-body">
                <button type="submit" className="btn btn-primary px-4 py-3 float-right btn-lg">
                    Update
                </button>
                </div>
            </form>
        </div>
    );
}

export default EditCategory;

