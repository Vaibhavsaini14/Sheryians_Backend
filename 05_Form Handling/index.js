import express from 'express'
const app = express()

//Backend process ko handle krta hai & also handle data coming from any library , framework etc.

//Session & Cookie ----->>

//jb bhi app frontend se koi request bhejte ho server pe system does not recognize you always thats why ek string attach kri jaati h req ke sath jiski help se system verifies know ki aap kon ho if not reached or lost the server log out 

app.use(express.json());  // these both are middlewares
app.use(express.urlencoded({extended : true}));

// Ye dono plain text se jo user se aaya jo transmission ke time blob(not readable data ) m converted hai usko vapis se readable bnane m help krte haii

// json format to normal  ke liye 1st wala
// for ejs and other forms 2nd wala 