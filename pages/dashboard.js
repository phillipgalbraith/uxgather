import Link from "next/link"

export default function Dashboard() {
  return (
    <div>
      <div>
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
        <div className="card-container">
            <div className="suite-card">
              <ul>
                <li>  
                    <h3>exercize ball</h3> 
                </li>
                <li>Client: yogamatizer</li>
                <li>Collaborators: Lee Poe, Jess Marx</li>
                <Link href='/suites/exercize-ball'><button>more</button></Link>
              </ul>
            </div>
        </div>
      </div>

    </div>
  )
}
