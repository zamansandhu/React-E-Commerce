
import './Addresses.css'
import { useGlobalCart } from '../../contexts/cart-context';

const Addresses = () => {
    const { addresses, editAddress, deleteAddress, formData, saveAddress, handleInputChange, editIndex, addAddress } = useGlobalCart()
    return (
        <div className='address-container' >
            {/* <h2>Add or Edit Address</h2> */}
            <div className="form-data">
                <form onSubmit={editIndex === -1 ? addAddress : saveAddress}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        required
                    />
                    <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleInputChange}
                        placeholder="Pin Code"
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        required
                    />
                    <button type="submit">
                        {editIndex === -1 ? 'Add Address' : 'Save Address'}
                    </button>
                </form>
            </div>

            {/* <h2>Addresses</h2> */}
            {addresses.map((address, index) => (
                <div key={index} className='addresses'>
                    <p>Name : {address.name}</p>
                    <p>Mobile : {address.mobile}</p>
                    <p>Pin Code : {address.pinCode}</p>
                    <p>City : {address.city}</p>
                    <p>Address : {address.address}</p>
                    <button className='edit' onClick={() => editAddress(index)}>Edit</button>
                    <button className='delete' style={{ backgroundColor: 'red' }} onClick={() => deleteAddress(index)}>delete</button>
                </div>
            ))}
        </div>
    );
};

export default Addresses;
