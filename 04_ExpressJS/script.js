import express from 'express'

const app = express()

// Middlware ---> Req jane ke time route se pehle ye lgta h wha we can do different stuffs 
// Route ko chalane se pehle kuch perform krvana chahe

app.use(function(req , res , next){
  console.log("Middleware start"); // Yaha tak rakhne pr request aage nhi jaati and page loads everytime
  next();  // req forward krta hai after job done
  
})

app.get('/', (req, res) => {  // Request handler ek middleware hota h
  res.send('Heyy Vaibhav Saini')   // Changes are not visible bcz server requires restart so nodemon helps in this 
})                                // Nodemon automatically changes krta h bina restart kre just reload again and changes are visible

// Response handling creating new server
app.get('/profile', (req, res , next) => {  
  res.send('Heyy Kya haal chaal')  // Route ko change krne se new server bn gyaa
})

app.get('/about', (req, res , next) => {  
  return next(new Error ("something went wronng"))
  res.send('Bhaii Kya haal chaal')  
})

// Error Handling 

// Expressjs ke pass ek special route hai for error

app.use(function(err , req , res , next) {
  console.error(err.stack);
  res.status(500).send('Something broke!')
  
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})



