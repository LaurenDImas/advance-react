interface Product{
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface ProductListProps {
    products: Product[] | null;
}

const ProductList = ({products}: ProductListProps) => {
    return products  ? (
        <div className="product-list-container">
            <ul>
                {products.map((product: Product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
        
        ) : (
        <p className="loading-message">Loading...</p>
    )
}
export default ProductList
