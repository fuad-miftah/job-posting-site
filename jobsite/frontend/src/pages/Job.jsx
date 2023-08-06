import LargeCard from "../component/Job/largecard"
import Hero from "../component/Job/Hero"
import Filter from "../component/Job/Filter"
import Pages from '../component/Job/Pages'

export default function Main() {
  return (
    <div className='container'>
        <Hero />
        <Filter />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <Pages />
    </div>
    
  )
}