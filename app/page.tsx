import BannerCarousel from '../components/BannerCarousel';

const products = [
  { id: '1', name: 'Chris Adams Catch Me Perfume 100ML', price: 1500, image: 'https://via.placeholder.com/300x300/FF8C00/white?text=Perfume', shop: '5th Street' },
  { id: '2', name: 'Dirac Somali - Special Order', price: 3500, image: 'https://via.placeholder.com/300x300/8B008B/white?text=Dirac', shop: 'Jam Street' },
  { id: '3', name: 'Abaya Luxury Black', price: 4000, image: 'https://via.placeholder.com/300x300/000000/white?text=Abaya', shop: '6th Street' },
  { id: '4', name: 'TumaFast Delivery Service', price: 150, image: 'https://via.placeholder.com/300x300/0B1F4B/white?text=TumaFast', shop: 'Nairobi' },
];

export default function Home() {
  return (
    <main style={{background:'#fff', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <header style={{background:'#FF8C00', padding:'12px 16px', color:'white', fontWeight:'bold', fontSize:'18px', display:'flex', justifyContent:'space-between'}}>
        <span>Islii Market</span><span>🛒 Nairobi</span>
      </header>
      <BannerCarousel />
      <div style={{padding:'12px'}}>
        <h2 style={{fontSize:'15px', marginBottom:'10px', fontWeight:'bold'}}>📍 Eastleigh Market • All Streets</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
          {products.map((p)=>(
            <div key={p.id} style={{border:'1px solid #eee', borderRadius:'12px', padding:'8px'}}>
              <img src={p.image} style={{width:'100%', height:'120px', objectFit:'cover', borderRadius:'8px'}} />
              <div style={{fontSize:'13px', marginTop:'6px', fontWeight:'600', height:'36px', overflow:'hidden'}}>{p.name}</div>
              <div style={{color:'#FF8C00', fontWeight:'bold', marginTop:'4px'}}>KSH {p.price}</div>
              <div style={{fontSize:'11px', color:'#777'}}>📍 {p.shop}</div>
              <button style={{width:'100%', marginTop:'6px', background:'#FF8C00', color:'white', border:'none', padding:'6px', borderRadius:'6px', fontWeight:'bold', fontSize:'12px'}}>BUY NOW</button>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:'#0B1F4B', color:'white', padding:'12px', textAlign:'center', fontSize:'11px', marginTop:'20px'}}>
        TumaFast Delivery: +254 113 869 527 | +254 722 172196 | Nairobi Only | 30-60 Min
      </div>
    </main>
  )
}
