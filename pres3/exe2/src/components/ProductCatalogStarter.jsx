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
        <section className="catalog">
            <h2>Store Catalog</h2>
            {/* Write your map() and conditional rendering logic here */}
        </section>
    );
};

export default ProductCatalog;