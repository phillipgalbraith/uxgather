exports.seed = function (knex) {
    return knex("users").insert([
        {
            user_id: 0,
            first_name:"Lee",
            last_name:"Poe",
            email: "knfslgaadsf@AASLDNF.com",
            username: "LeePoeUXEngineer",
            password: "LeePoeUXEngineer0000",
        },
        {
            user_id: 1,
            first_name:"Alex",
            last_name:"Marx",
            email: "iajwpfoijef@AASLDNF.com",
            username: "AlexMarxUserSuccessEnginener",
            password: "AlexMarxUserSucc1111",
        }
    ])
}