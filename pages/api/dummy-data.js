export const user = {
    name: "Lee Poe",
    id: "03j0t8rt9u4gere"
}

export const suites = [ 
    {
        id: "21j4qke5o40kf0g8",
        name: "exercize ball",
        client: "yogamatizer",
        facilitators: [
            {   
                name: "Lee Poe",
                id: "03j0t8rt9u4gere"
            }, 
            {   
                name: "J Marx",
                id: "03j0t8rt9u24551435"
            }
        ],
        testers: 5,
        environment: "carpetted room 6m x 6m no furniture",
        tests: [
            {
                id: "i34t339043",
                name: "Sitting Exercize",
                directions: [
                    "Get the ball",
                    "Sit on the ball",
                    "Do a rep of exercize",
                    "Put away the ball",
                ],
                tester: 1,
                facilitator: "Lee Poe"
            },
            {
                name: "Standing Exercize",
                directions: [
                    "Get the ball",
                    "Stand by the ball",
                    "Do a rep of exercize",
                    "Put away the ball",
                ],
                tester: 2,
                facilitator: "J Marx"
            }
        ]

        
    },
    {
        id: "21j4qk24e5o40kf0g8",
        name: "exercize box",
        client: "yogamatizer",
        facilitators: [
            {   
                name: "Lee Poe",
                id: "03j0t8rt9u4gere"
            }, 
            {   
                name: "J Marx",
                id: "03j0t8rt9u24551435"
            }
        ],
        testers: 5,
        environment: "carpetted room 6m x 6m no furniture",
        tests: [
            {
                id: "i34t31239043",
                name: "Sitting Exercize",
                directions: [
                    "Get the box",
                    "Sit on the box",
                    "Do a rep of exercize",
                    "Put away the box",
                ],
                tester: 1,
                facilitator: "Lee Poe"
            },
            {
                id: "i34t3123945043",
                name: "Standing Exercize",
                directions: [
                    "Get the box",
                    "Stand by the box",
                    "Do a rep of exercize",
                    "Put away the box",
                ],
                tester: 2,
                facilitator: "J Marx"
            }
        ] 
    }
]


export default async function handler(req, res) {
    try {
      const result = {user, suites}
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }