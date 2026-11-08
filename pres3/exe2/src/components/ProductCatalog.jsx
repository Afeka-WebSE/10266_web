// src/components/ProductCatalog.jsx

const ProductCatalog = () => {
    // 1. Hard-coded data array (No props needed yet)
    const products = [
        { id: 101, title: "Mechanical Keyboard", price: 150, discount: 0.2, inStock: true },
        { id: 102, title: "Gaming Mouse", price: 80, discount: 0, inStock: true },
        { id: 103, title: "4K Monitor", price: 400, discount: 0.15, inStock: false },
        { id: 104, title: "USB-C Hub", price: 45, discount: 0, inStock: false }
    ];

    return (
        <section className="catalog-container">
            <h1>Store Catalog</h1>

            <div className="product-grid">
                {/* 2. Iterating over the array of objects using .map() */}
                {products.map((product) => {
                    // Calculating final price per item before rendering
                    const finalPrice = product.price * (1 - product.discount);

                    return (
                        // Mandatory unique 'key' prop on the root element of the iteration
                        <article key={product.id} className="product-card">

                            <div className="card-header">
                                <h3>{product.title}</h3>

                                {/* 3. Pre-condition rendering (Short-Circuit &&):
                    Renders the badge ONLY if discount is strictly greater than 0.
                    Note: Using 'product.discount > 0' prevents rendering a literal '0' to the DOM! */}
                                {product.discount > 0 && (
                                    <span className="sale-badge">
                    🔥 SALE ({product.discount * 100}% OFF)
                  </span>
                                )}
                            </div>

                            {/* Dynamic expression evaluation */}
                            <p className="price">
                                Final Price: <strong>${finalPrice.toFixed(2)}</strong>
                            </p>

                            {/* 4. Conditional Rendering (Ternary Operator ? :):
                  Switching between two mutually exclusive UI elements */}
                            {product.inStock ? (
                                <button className="btn-buy">Add to Cart</button>
                            ) : (
                                <p className="out-of-stock">Out of Stock</p>
                            )}

                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductCatalog;