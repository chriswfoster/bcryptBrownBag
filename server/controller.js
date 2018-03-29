


const accountCreation = (req, res) => {
    const dbInstance = app.get('db')
    const {username, password} = req.body


    dbInstance.createUserAccount(username, )
    .then (response => console.log("createUserAccount: ",response))
}

const passwordChecker = (req, res) => {
    const dbInstance = app.get('db')
    const {username, password} = req.body

    dbInstance.getUserAccount(username)
    .then (response => console.log("getUserAccount: ", response))
    .catch (err => console.log(err))
}

module.exports ={
    accountCreation,
    passwordChecker
}