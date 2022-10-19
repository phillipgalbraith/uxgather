import Link from "next/link"
import {suites} from "../api/dummy-data"

export default function Suite() {
  const suite = suites[0];
  return (
    <div>
      <div className="space-between w-400">  
        <Link href='/dashboard'>dashboard</Link>
        <Link href='/'>logout</Link>
      </div>
        <ul>
            <li><h2>Suite Details</h2></li>
            <li> <h3>Suite: {suite.name}</h3></li>
            <li>Client: {suite.client} </li>
            <li>Facilitators: 
              <ul>
              {suite.facilitators.map( e => { 
                return <li key={e.id}>{e.name}</li>
              })}</ul>
            </li>
            <li>Testers: {suite.testers}</li>
            <li>Environment: {suite.environment}</li>
        </ul>
        <button>Add a Test</button>
        <div className="row">
            <div className="column">
                Test Name
            </div>
            <div className="column">
                Directions
            </div>       
            <div className="column">
                Assignment Status
            </div>
        </div>

        { 
          suite.tests.map( test => {
            return (
              <div className="row" key={test.id}>
                <div className="column">
                    {test.name}
                </div>
                <div className="column">
                  <ol>
                    {test.directions.map( (e) => <li key={e}>{e}</li>)}
                  </ol>
                </div>       
                <div className="column">
                  <ul>
                    <li>Tester: {test.tester}</li>
                    <li>Facilitator: {test.facilitator}</li>
                    <li>
                        <button>Update Assignment</button>
                    </li>
                  </ul>
                </div>
              </div>
            )
        })}
    </div>
  )
}
