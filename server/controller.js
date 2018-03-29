const accountCreation = (req, res) => {
  const dbInstance = app.get("db")
  const bcrypt = req.app.get("bcrypt")
  const { username, password } = req.body
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      dbInstance
        .createUserAccount(username, hash)
        .then(response => console.log("createUserAccount: ", response))
    })
  })
}

const passwordChecker = (req, res) => {
  const dbInstance = app.get("db")
  const bcrypt = req.app.get("bcrypt")
  const { username, password } = req.body

  dbInstance
    .getUserAccount(username)
    .then(response => console.log("getUserAccount: v", response))
    .catch(err => console.log(err))
}

module.exports = {
  accountCreation,
  passwordChecker
}
