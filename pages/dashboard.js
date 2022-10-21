import Link from "next/link"
import {user, suites} from "./api/dummy-data"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Dashboard() {
     const { data, error } = useSWR('/api/suites-data', fetcher)
  
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  
 

  return (
    <div>
      <div>
        <h5>Welcome, {user.name}!</h5>
        <ul>
            <li>
                <h2>Dashboard</h2>
                <Link href='/'>logout</Link>
            </li>
        </ul>  
        
      </div>
      <button>New Test Suite</button>
      <div>
        <h3>Suites</h3>
        {suites.map( suite => {
          return (
            <div key={suite.id} className="card-container">
                <div className="suite-card">
                  <ul>
                    <li>  
                        <h3>{suite.name}</h3> 
                    </li>
                    <li>Client: {suite.client}</li>
                    <li> Facilitators: </li>
                      <ol>
                        {
                          suite.facilitators.map( e => <li key={e.id}>{e.name}</li>)
                        }
                      </ol>

                    <Link href='/suites/suite-details'><button>more</button></Link>
                  </ul>
                </div>
            </div>)
          })
}
      </div>

    </div>
  )
}
