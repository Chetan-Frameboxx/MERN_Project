import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/products';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await getProducts(); // fetch returns array directly
      setProducts(res); // fix: remove res.data
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (loading) return <p className="container mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
        <Link to="/products/create" className="btn btn-primary">Add Product</Link>
      </div>

      {products.length === 0 && <p>No products found.</p>}

      {products.map(p => (
        <div className="card p-3 mb-2" key={p._id}> {/* fix typo */}
          <h5>{p.name}</h5>
          <p>Price: ${p.price}</p>
          <div>
            <Link className="btn btn-info me-2" to={`/products/${p._id}`}>View</Link>
            <Link className="btn btn-warning me-2" to={`/products/edit/${p._id}`}>Edit</Link>
            <button
              className="btn btn-danger"
              onClick={async () => {
                await deleteProduct(p._id);
                load(); // reload products after deletion
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
