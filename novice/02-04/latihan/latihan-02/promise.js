let janjian = new Promise(
    (resolve, reject) =>{
        // comment salah satu
        // resolve('berhasil')
        reject(new Error('janji dibatalkan'))
    }
)

// console.log(janjian)
janjian.then(result =>{ console.log(result)})
        .catch(err => { console.log(err)})