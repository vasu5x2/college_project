const { json } = require("express")
const express = require("express")

const fs = require("fs")
const { parse } = require("path")

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/colleges", (req, res) => {

    fs.readFile("./colleges.json", "utf-8", (error, data) => {

        // console.log(data)

        res.send(JSON.parse(data))

    })

})

app.delete("/college/:id", (req, res) => {

    fs.readFile("./colleges.json", "utf-8", (error, data) => {

        x = JSON.parse(data);

        let temp_arr = []

        for (i of x) {

            if (i.id != req.params.id) {

                temp_arr.push(i);

            }

        }

        temp_arr = JSON.stringify(temp_arr)

        fs.writeFile("./colleges.json", temp_arr, "utf-8", (error) => {

            console.log(error);

        })
        console.log(temp_arr)

        res.send(JSON.parse(temp_arr))

    })

})

app.put("/college/:id", (req, res) => {

    fs.readFile("./colleges.json", "utf-8", (error, data) => {

        x = JSON.parse(data);

        let temp_arr = []

        for (i of x) {

            if (i.id == req.params.id) {
                i.fees = req.body.fees

                i.name = req.body.name

                i.departments = req.body.departments

                i.address = req.body.address

            }

        }

        x = JSON.stringify(x)



        //temp_arr=JSON.stringify(temp_arr)

        fs.writeFile("./colleges.json", x, "utf-8", (error) => {

            console.log(error);

        })
        console.log(JSON.parse(x))

        res.send(JSON.parse(x))

    })

})



app.post("/college", (req, res) => {

    const id1 = Date.now().toString()

    let t = req.body

    t.id = id1



    fs.readFile("./colleges.json", "utf-8", (error, data) => {

        x = JSON.parse(data);

        let z = [t,...x]

        z = JSON.stringify(z)

        //temp_arr=JSON.stringify(temp_arr)

        fs.writeFile("./colleges.json", z, "utf-8", (error) => {

            console.log(error);

        })
        console.log(JSON.parse(z))

        res.send(JSON.parse(z))

    })

})

app.get("/college/:id", (req, res) => {

    fs.readFile("./colleges.json", "utf-8", (error, data) => {

        let x = JSON.parse(data);

        let temp_arr = []

        for (i of x) {

            if (i.id == req.params.id) {

                temp_arr.push(i);

            }

        }
        console.log(temp_arr)

        res.send(temp_arr)

    })



})

app.listen("5050", () => console.log('listening on port 5050'));