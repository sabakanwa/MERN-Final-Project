import React, { useState } from 'react'
import CategoryModal from '../Components/CategoryModal'
import axios from 'axios'
import { useEffect } from 'react'
import { HiOutlinePencilAlt } from 'react-icons/Hi'
import { RiDeleteBin5Line } from 'react-icons/Ri'

function AddCategory() {


    const [Category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1234/api/getallcategories')
            .then(json => {
                setCategory(json.data.Category);
            })
            .catch(err => alert(err.message))


    }, []);


    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:1234/api/deletecategory/${_id}`)
            .then(response => {
                console.log(response.data.categories);
                setCategory(prevCategory => prevCategory.filter(Category => Category._id !== _id));
            })
            .catch(error => {
                console.error('Error deleting category:', error);
            });
    };
    

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{ backgroundColor: 'yellow'}}>
                    <span className='fs-4 fw-bold text-black'> Category</span>
                    <CategoryModal reCallData={setCategory} />
                </div>

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Category Image</th>
                                <th scope="col">Actions</th>


                            </tr>
                        </thead>
                        <tbody>

                            {
                                Category?.map((val, key) =>
                                    <tr key={key}>
                                        <th scope="row">{val._id}</th>
                                        <td>{val.CategoryName}</td>
                                        <td><img src={val.CategoryImage} className='img-fluid' style={{ height: '8vh', objectFit: 'contain' }} /></td>
                                        <td>
                                            <button className='btn btn-dark mx-1' onClick={() => deleteProduct(val._id)}><RiDeleteBin5Line /></button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default AddCategory





