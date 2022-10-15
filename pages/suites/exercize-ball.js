import Link from "next/link"

export default function Suite() {
  return (
    <div>
     <div className="space-between w-400">  
        <Link href='/dashboard'>dashboard</Link>
        <Link href='/'>logout</Link>
    
     </div>
        <ul>
            <li><h2>Suite Details</h2></li>
            <li> <h3>exercize ball</h3></li>
            <li>Client: yogamatizer </li>
            <li>Facilitators: Lee Poe, J Marx</li>
            <li>Testers: 5</li>
            <li>Environment: carpetted room 6m x 6m clear </li>
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
        <div className="row">
            <div className="column">
                Sitting Exercize
            </div>
            <div className="column">
              <ol>
                <li>Get the Ball</li>
                <li>Sit on the ball</li>
                <li>Do a rep of exercize</li> 
                <li>Put away the ball</li>
              </ol>
            </div>       
            <div className="column">
              <ul>
                <li>Tester: 1</li>
                <li>Facilitator: Lee Poe</li>
                <li>
                    <button>Update Assignment</button>
                </li>
              </ul>
            </div>
        </div>
        <div className="row">
            <div className="column">
                Standing Exercize
            </div>
            <div className="column">
              <ol>
                <li>Get the Ball</li>
                <li>Stand by the ball</li>
                <li>Do a rep of exercize</li> 
                <li>Put away the ball</li>
              </ol>
            </div>       
            <div className="column">
              <ul>
                <li>Tester: 2</li>
                <li>Facilitator: J Marx</li>
                <li>
                    <button>Update Assignment</button>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}
