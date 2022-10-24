import Link from "next/link"
import prisma from '../lib/prisma';

export const getStaticProps = async () => {
  const suites = await prisma.suites.findMany();
  const users = await prisma.users.findMany();
  const tests = await prisma.tests.findMany();

  return {
    props:{ 
      suites, 
      tests, 
      users: JSON.parse(JSON.stringify(users))},
  }
}


export default function Dashboard({suites, users, tests}) {
  const user = users[0]
  console.log(suites)

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
            <div key={suite.suite_id} className="card-container">
                <div className="suite-card">
                  <ul>
                    <li>  
                        <h3>{suite.name}</h3> 
                    </li>
                    <li>Client: {suite.client}</li>
                    <li> Facilitators: </li>
                      <ol>
                        {
                          tests.filter(test => test.suite_id === suite.suite_id)
                            .map( test => {
                              return (
                                <li key={test.user_id}>
                                  {`${users[test.user_id].first_name}`
                                  + ` ${users[test.user_id].last_name}`}
                                </li>
                              )
                            })
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
