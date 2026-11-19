// src/components/ex3-storefront/StorefrontSolution.tsx
import { useState, useEffect } from 'react';
import type { Product } from './product';
import ProductCardSolution from './ProductCardSolution';
import './Storefront.css';

const CATEGORIES = ["All", "beauty", "fragrances", "furniture", "groceries"];

// Interface representing the wrapper object returned by DummyJSON API
interface DummyJsonResponse {
    products: Product[];
    total: number;
}

const StorefrontSolution = () => {
    // 1. The Golden Triangle: Data, Loading, Error
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // 2. Category Filter State
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // 3. Fetching live products on initial Mount ([]) from DummyJSON
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                const data: DummyJsonResponse = await response.json();
                setProducts(data.products); // Extracting the products array from the response object
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load store data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // 4. Immutable Deletion passed down as Callback Prop
    const handleRemoveProduct = (idToRemove: number) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== idToRemove)
        );
    };

    // 5. Derived State: Calculated on the fly during render
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter((p) => p.category === selectedCategory);

    return (
        <section className="store-container">
            <header className="store-header">
                <h2>Afeka Virtual Storefront</h2>
                <p className="store-subtitle">
                    Showing <strong>{filteredProducts.length}</strong> of {products.length} total items
                </p>

                <nav className="filter-bar">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </nav>
            </header>

            {/* State 1: Loading Spinner */}
            {isLoading && (
                <div className="status-box">
                    <div className="store-spinner" />
                    <p>Loading live inventory from DummyJSON API...</p>
                </div>
            )}

            {/* State 2: Error Display */}
            {!isLoading && error && (
                <div className="status-box error-box">
                    <h3>❌ Connection Error</h3>
                    <p>{error}</p>
                </div>
            )}

            {/* State 3: Products Grid */}
            {!isLoading && !error && (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <ProductCardSolution
                            key={product.id}
                            product={product}
                            onRemove={handleRemoveProduct}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default StorefrontSolution;