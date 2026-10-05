import { products } from './data/products'
import Header from './components/Header'
import ProductSection from './components/ProductSection'
import TikTokSection from './components/TikTokSection'
import EmptyState from './components/EmptyState'

export default function App() {
  const hasProducts = products.length > 0

  return (
    <div className="mx-auto w-full max-w-215 px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6">
      <Header />

      <main>
        {hasProducts ? <ProductSection products={products} /> : <EmptyState />}

        <TikTokSection />
      </main>
    </div>
  )
}
