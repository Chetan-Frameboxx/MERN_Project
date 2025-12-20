import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct, updateProduct } from '../services/products';

export default function ProductEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', price: '', category: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await getProduct(id); // fetch wrapper returns JSON directly
        setForm({
          name: res.name,
          price: res.price,
          category: res.category,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, {
        name: form.name,
        price: Number(form.price),
        category: form.category,
      });
      navigate('/products');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="container mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2" style={{ maxWidth: 400 }}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Name"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
          className="form-control"
          placeholder="Price"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="form-control"
          placeholder="Category"
          required
        />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
