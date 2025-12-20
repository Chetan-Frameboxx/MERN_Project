import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getProduct(id); // fetch returns JSON directly
        setProduct(res);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <p className="container mt-4">Loading...</p>;
  if (!product) return <p className="container mt-4">Product not found.</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow" style={{ maxWidth: 500, margin: "0 auto" }}>
        <div className="card-body">
          <h3 className="card-title text-primary">{product.name}</h3>
          <p className="card-text"><strong>Price:</strong> ${product.price}</p>
          <p className="card-text"><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
}
