exports.seed = function (knex) {
    return knex("tests").insert([
        {
            test_id: 0,
            suite_id: 0,
            name: "Standing Exercize",
            directions: [
                "Get the ball",
                "Stand by the ball",
                "Do a rep of exercize",
                "Put away the ball",
            ],
            tester_filled: true,
            tester_email: "ATesterEmail@testersEmails131.com",
            user_id: 0
        },
        {
            test_id: 1,
            suite_id: 1,
            name: "Standing Exercize",
            directions: [
                "Get the box",
                "Stand by the box",
                "Do a rep of exercize",
                "Put away the box",
            ],
            tester_filled: true,
            tester_email: "ATesterEmail@testersEmails131.com",
            user_id: 1
        },  
        {
            test_id: 2,
            suite_id: 0,
            name: "Sitting Exercize",
            directions: [
                "Get the ball",
                "Sit on the ball",
                "Do a rep of exercize",
                "Put away the ball",
            ],
            tester_filled: true,
            tester_email: "ATesterEmail@testersEmails131.com",
            user_id: 1
        },
        {
            test_id: 3,
            suite_id: 1,
            name: "Sitting Exercize",
            directions: [
                "Get the box",
                "Sit on the box",
                "Do a rep of exercize",
                "Put away the box",
            ],
            tester_filled: true,
            tester_email: "ATesterEmail@testersEmails131.com",
            user_id: 0
        },
    ])
}