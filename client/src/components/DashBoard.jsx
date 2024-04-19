import React, { useEffect, useState } from 'react';
import { allContactRequest, deleteContactRequest, updateContactRequest } from '../../apiRequiest/apiRequiest';
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from "react-redux";
import { setData } from '../../redux/state-slice/contact-slice';

const ContactItem = ({ contact, onDelete }) => {
    const [editing, setEditing] = useState(false);
    const [editedContact, setEditedContact] = useState(contact);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
        setEditedContact(contact);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onUpdate = async () => {
        const { _id, ...updatedContact } = editedContact;
        let name = updatedContact.name
        let email = updatedContact.email
        let phone = updatedContact.phone
        let address = updatedContact.address
        let photo = updatedContact.photo
        await updateContactRequest(_id, name,email,phone,address,photo);
        setEditing();
    };

    
    

    return (
        <div className="row pb-2 conMainImg">
            <div className="col-1 contactImg">
                <img src={editedContact.photo} alt="" />
            </div>
            <div className="col-2 p-0 contactInfo">
                {editing ? (
                    <input
                        type="text"
                        name="name"
                        value={editedContact.name}
                        onChange={handleInputChange}
                    />
                ) : (
                    <p>{editedContact.name}</p>
                )}
            </div>
            <div className="col-3 p-0">
                {editing ? (
                    <input
                        type="text"
                        name="email"
                        value={editedContact.email}
                        onChange={handleInputChange}
                    />
                ) : (
                    <p>{editedContact.email}</p>
                )}
            </div>
            <div className="col-2 p-0">
                {editing ? (
                    <input
                        type="text"
                        name="phone"
                        value={editedContact.phone}
                        onChange={handleInputChange}
                    />
                ) : (
                    <p>{editedContact.phone}</p>
                )}
            </div>
            <div className="col-3 p-0">
                {editing ? (
                    <input
                        type="text"
                        name="address"
                        value={editedContact.address}
                        onChange={handleInputChange}
                    />
                ) : (
                    <p>{editedContact.address}</p>
                )}
            </div>
            <div className="col-1">
                {editing ? (
                    <>
                        <button onClick={onUpdate} className='btn btn-success'>Save</button>
                        <button onClick={handleCancelEdit} className='btn btn-danger'>Cancel</button>
                    </>
                ) : (
                    <>
                        <CiEdit
                            onClick={handleEdit}
                            style={{ color: "green", cursor: "pointer", marginRight: "11px", fontSize: "20px" }}
                        />
                        <RiDeleteBinLine
                            onClick={() => onDelete(editedContact._id)}
                            style={{ color: "red", cursor: "pointer", fontSize: "20px" }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

const DashBoard = () => {
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.getData.data);

    useEffect(() => {
        (async () => {
            let result = await allContactRequest();
            dispatch(setData(result));
        })();
    }, []);

    const deleteContact = async (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                await deleteContactRequest(_id);
                window.location.reload();
            }
        });
    };

    return (
        <div>
            <div className="container-fluid p-0 vh-100">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2 p-0 text">
                        <p>Name</p>
                    </div>
                    <div className="col-3 p-0 text">
                        <p>Email</p>
                    </div>
                    <div className="col-2 p-0 text">
                        <p>Phone</p>
                    </div>
                    <div className="col-3 p-0 text">
                        <p>Address</p>
                    </div>
                </div>

                {getData.length > 0 ? (
                    getData.map((item, i) => (
                        <ContactItem key={i} contact={item} onDelete={deleteContact} />
                    ))
                ) : (
                    "No Contact Available"
                )}
            </div>
        </div>
    );
};

export default DashBoard;
