require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))


//Routes
app.use('/user', require('./routes/useRouter.js'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))

//conect to mondodb

const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err=>{
    if(err) throw err;
    console.log('connect to mongoDB');
})

app.get('/',(req,res)=>{
    res.json({msg: 'welcomec my chanbel'})
}
)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})













import React,{useState, useContext} from 'react'
import { GlobalState } from '../../globalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'


// function Header() {
//     const value = useContext(GlobalState)
//   return (
//     <div>
//         <header>
//             <div className='menu'>
//                   <img src={Menu} alt="" width="30"/>  
//             </div>
//             <div className='logo'>
//                 <h1>
//                     <Link to='/'>DevAT SHOP</Link>
//                 </h1>
//             </div>
//             <ul>
//                 <li><Link to='/'>Products</Link></li>
//                 <li><Link to='/login'>Login/register</Link></li>

//                 <li>
//                     <img src={Close} alt='' width='30'/>
//                 </li>
//             </ul>

//             <div className='cart-icon'>
//                 <span>0</span>
//                 <Link>
//                     <img src={Cart} alt='' width='30'/>
//                 </Link>
//             </div>
//         </header>
//     </div>
//   )
// }

// export default Header