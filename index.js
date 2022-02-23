const db = require('./models');

db.user.create({
    firstName: 'Jason',
    lastName: 'Serafica',
    age: 27
}).then(createdUser=>{
    // the create promise returns the
    // new row of data that has been created
    // (otherwise it throws an error)
    console.log(createdUser)
    // terminates the node process at this point so that we don't have to force-quit
    process.exit()
})

// db.user.findOne({
//     where: {firstName: 'Jason'}
// }).then(foundUser=>{
//     console.log(foundUser)
//     process.exit()
// })

// db.user.findOrCreate({
//     where: {
//       firstName: 'Brian',
//       lastName: 'Smith'
//     },
//     defaults: { age: 88 }
//   }).then(([user, wasCreated])=>{
//     console.log(user); // returns info about the user
//     process.exit()
//   });

// db.user.findAll().then(users=>{
//     console.log(users);
//     // users will be an array of all User instances
//   });

// db.user.update({
//     lastName: 'Taco'
//   }, {
//     where: {
//       firstName: 'Brian'
//     }
// }).then(numRowsChanged=>{
//     // Returns a value of how many rows were altered by this update
//     console.log(numRowsChanged)
//     process.exit()
// });

// db.user.destroy({
//     where: { firstName: 'Brian' }
//   }).then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//     // do something when done deleting
//       process.exit()
//   });