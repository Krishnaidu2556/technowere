
const User = require("./../db/user")
async function addUser(userModel) {
    const user = new User({
        ...userModel
    })
    user.save()
    return user.toObject()
}

async function getUsers() {
    const users = User.find()
    let usersList = await User.find()
    return usersList.map(x => x.toObject())
}
async function getUser(id) {
    let user = await User.findById(id)
    return user.toObject()

}
async function updateUser(id, userModel) {
    const filter = { _id:id}
    await User.findOneAndUpdate(filter, userModel)


}

async function deletUser(id) {
    await User.findOneAndDelete(id)

}
module.exports = { addUser, getUsers, getUser,updateUser,deletUser }
