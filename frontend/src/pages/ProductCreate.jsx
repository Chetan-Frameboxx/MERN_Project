import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/products';

export default function ProductCreate() {
  const [form, setForm] = useState({ name: '', price: '', category: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createProduct({ name: form.name, price: Number(form.price), category: form.category });
      navigate('/products');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2" style={{maxWidth:400}}>
        <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" required />
        <input name="price" value={form.price} onChange={handleChange} type="number" className="form-control" placeholder="Price" required />
        <input name="category" value={form.category} onChange={handleChange} className="form-control" placeholder="Category" required />
        <button className="btn btn-primary" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
      </form>
    </div>
  );
}