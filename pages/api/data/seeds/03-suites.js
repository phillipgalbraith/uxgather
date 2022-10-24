exports.seed = function (knex) {
    return knex("suites").insert([
        {
            suite_id: 0,
            name: "exercize ball",
            client: "yogamatizer",
            user_id: 1,
            environment: "carpetted room 6m x 6m no furniture",        
        },
        {
            suite_id: 1,
            name: "exercize box",
            client: "yogamatizer",
            user_id: 0,
            environment: "carpetted room 6m x 6m no furniture",        
        }
    ])
}