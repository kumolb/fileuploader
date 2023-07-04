const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true
};

let connection;

let connector = async () => {
    try {
        connection = await Promise.resolve(mongoose.connect(`mongodb+srv://kumol:kumol254@cluster0.tsazd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, options));
        console.log("connected database")
    } catch (err) {
        console.log(err);
    }

}

connector();
// const connection = mongoose.createConnection(`mongodb://yotech_db:${encodeURIComponent('m55@tech')}@mongodev1.yo-tech.net:27017,mongodev2.yo-tech.net:27017,mongodev3.yo-tech.net:27017/yomarket?replicaSet=rs0?readPreference=secondary&readPreferenceTags=srv_name:mongodev2&readPreferenceTags=?`,options,(error)=>{
//     if(error){
//       console.log(error);
//     }else{
//       console.log("connected db 1")
//     }
//   });

module.exports = connection;