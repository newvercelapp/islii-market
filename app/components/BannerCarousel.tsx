'use client';
import { useEffect, useState } from 'react';

export default function BannerCarousel(){
  const banners = [
    { id:1, title:'TumaFast - Fast Delivery 30-60 Min', desc:'NAIROBI KELIYA - Dhammaan dagmooyinka Nairobi | +254 113 869 527 | +254 722 172196', bg:'#0b1f4b', accent:'#FF3B30' },
    { id:2, title:'PERFUMES COLLECTION', desc:'Special Orders Available - Unisex 100ML - Eastleigh Somali Market', bg:'#4a2c2a', accent:'#FF8C00' },
    { id:3, title:'DIRAC & ABAYA - Special Orders', desc:'Custom Designs - Your Style Your Color - Order Now', bg:'#2d1a4a', accent:'#FF8C00' },
  ];
  const [i,setI]=useState(0);
  useEffect(()=>{ const t=setInterval(()=>setI(v=>(v+1)%banners.length),3000); return ()=>clearInterval(t)},[]);
  const b=banners[i];
  return (
    <div style={{background:b.bg, color:'white', padding:'18px', margin:'10px', borderRadius:'14px', minHeight:'110px', position:'relative', overflow:'hidden'}}>
      <div style={{background:b.accent, display:'inline-block', padding:'2px 8px', borderRadius:'6px', fontSize:'10px', fontWeight:'bold', marginBottom:'6px'}}>FAST DELIVERY</div>
      <div style={{fontSize:'18px', fontWeight:'800'}}>{b.title}</div>
      <div style={{fontSize:'11px', opacity:0.9, marginTop:'4px'}}>{b.desc}</div>
      <a href="https://wa.me/254113869527" style={{marginTop:'10px', display:'inline-block', background:'white', color:b.bg, padding:'6px 14px', borderRadius:'20px', fontWeight:'bold', fontSize:'12px', textDecoration:'none'}}>ORDER NOW →</a>
      <div style={{position:'absolute', right:'10px', bottom:'10px', display:'flex', gap:'4px'}}>{banners.map((_,idx)=><div key={idx} style={{width:idx===i?'18px':'6px', height:'6px', borderRadius:'3px', background:idx===i?'white':'rgba(255,255,255,0.4)'}}/>)}</div>
    </div>
  )
}
