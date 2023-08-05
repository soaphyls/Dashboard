import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import TopCards from '@/components/TopCards'
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen' >
     <Header children={'Sales Dashboard'}/>

      <TopCards/>
      <div className='p-4 grid md:grid-cols-3 grid-cols-1'>
        <BarChart/>
        <RecentOrders/>
      </div>
    </main>
  )
}
