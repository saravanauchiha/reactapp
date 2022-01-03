
import './App.css';
import {useState} from 'react';

function App() {
  const [fname , setFname] = useState("");
  const [sname , setsname] = useState("");
  const [uname , setuname] = useState("");
  const [email , setemail] = useState("");
  const [phone , setphone] = useState("");
  const [date , setdate] = useState("");
  const [company , setcompany] = useState("");
  const [gender , setgender] = useState("");
  const [home , sethome] = useState("");
  
  const [password , setpassword] = useState("");
  const [confirm , setconfirm] = useState("");
  const regex = /^[a-zA-Z\s]+$/;
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  let stata=["state","Tamilnadu","Kerala","Andhra","Karnataka"]
  const [age,setage]=useState({})
  const [term,setterm]=useState({})
  return (
  
    <div className="App">
      <div className="container">
      <div className="s1">Register</div> 
      <div className="sub">
      <div className="input-group">
        <i className="fa fa-user"></i>
        <input  onChange={(inputProperties)=>{setFname(inputProperties.target.value)}} type="text" placeholder="firstname"/>
        
        <br></br>
        <span  >{fname.length === 0 ? "please type the first name":regex.test(fname)===false?"please type alphabets only":"" }</span>
      </div>
      <div className="input-group">
        <i className="fa fa-user"></i>
        <input  onChange={(inputProperties)=>{setsname(inputProperties.target.value)}} type="text" placeholder="second name"/>
        
        <br></br>
        <span >{sname.length === 0 ? "please type the second name":regex.test(sname)===false?"please type alphabets only":"" }</span>
      </div>
      <div className="input-group">
        <i className="fa fa-user"></i>
        <input id="user" onChange={(inputProperties)=>{setuname(inputProperties.target.value)}} type="text" placeholder="user name"/>
        
        <br></br>
        <span >{uname.length === 0 ? "please type the username":"" }</span>
      </div>
      <div className="input-group">
        <i className="fa fa-phone"></i>
        <input id="phone" onChange={(inputProperties)=>{setphone(inputProperties.target.value)}} type="number" placeholder="phone number"/>
        
        <br></br>
        <span  >{phone.length === 0 ? "please type the phone number":!(phone.length ==  10) ?"please type valid phone number":"" }</span>
      </div>
      <div className="input-group">
        <i className="fa fa-envelope-square"></i>
        <input type="email"onChange={(inputProperties)=>{setemail(inputProperties.target.value)}} id="email" placeholder="email address"/>
        
        <br></br>
        <span >{email.length === 0 ? "please type the email":!(email.includes(".")&&email.includes("@"))?"please type valid email":!(email.includes(".in")||email.includes(".com"))?"please type valid email":"" }</span>
      </div>
     
      <div className="input-group">
        
        <input type="date" onChange={(inputProperties)=>{setdate(inputProperties.target.value)}} placeholder="date of birth"/>
        
        <br></br>
        <span >{date.length === 0 ? "please enter date of birth":"" }</span>
      </div>
      <div className="input-group">
      <div className="age">
      <h3>Gender</h3>

    </div>
      <div className="age1">
    
      <input type="radio" name="age" onChange={(r)=>{setage({yes:r.target.checked})}}/>male
     
      <input type="radio" name="age" onChange={(r)=>{setage({no:r.target.checked})}} />female 
      <input type="radio" name="age" onChange={(r)=>{setage({other:r.target.checked})}} />others
    </div>
        
        <br></br>
        <span className="gh">{Object.keys(age).length == 0? "please select any one ":Object.keys(age)[0] == "yes" ? "you select male ":Object.keys(age)[0] == "no" ? "you select female ":""}</span>
      </div>
      <div className="input-group">
        <i className="fa fa-usps"></i>
        <select name="" id="state" onChange={(sr)=>{setgender(stata[sr.target.options.selectedIndex])}}>
          <option>state</option>
          <option>Tamilnadu</option>
          <option>Andhra</option>
          <option>Kerala</option>
          <option>Karnataka</option>
        </select>
        <br></br>
        
        <span  >{gender == "state" ?"please select state":""}</span>
      </div>
      <div className="input-group">
        <i className="fa fa-usps"></i>
        <select name="" id="dist">
          <option >District</option>
          {gender=="state"?"<option >"+"mysuru"+"</option>":""}
          <option>{gender=="state"?"mysuru":""}</option>
          
        </select>
        
        <br></br>
        <span ></span>
      </div>
   
      <div className="input-group">
        <i className="fa fa-envelope-square"></i>
        <input type="text"  onChange={(inputProperties)=>{setcompany(inputProperties.target.value)}} placeholder=" enter your company name"/>
        
        <br></br>
        <span >{company.length === 0 ? "please type your company name":"" }</span>
      </div>
      <div className="input-group">
        <i className="fa fa-address-card"></i>
        <input type="text" onChange={(g)=>{sethome(g.target.value)}} placeholder="enter your Address"/>
        
        <br></br>
        <span >{home.length==0?"please":home.length == 3 ?"gh":""}</span>
      </div>
      <div className="input-group">
        <i className="fa fa-lock"></i>
        <input type="password" id="password"  onChange={(inputProperties)=>{setpassword(inputProperties.target.value)}} placeholder="enter your password"/>
        
        <br></br>
        <span >{password.length === 0 ? "please type password":!(password.length >= 7 )? "please enter strong password":""}</span>
      </div>
      <div className="input-group">
        <i className="fa fa-lock"></i>
        <input type="password" id="confirm"  onChange={(inputProperties)=>{setconfirm(inputProperties.target.value)}} placeholder="enter your confirm password"/>
        
        <br></br>
        <span >{confirm.length === 0 ? "please type confirm password":confirm != password? "password does not match":"" }</span>
      </div>
     
    </div>
    

<div className="age2">
    
    <input type="checkbox" name="term" onChange={(r)=>{setterm({yes:r.target.checked})}} />I Accept Terms & Conditions
    </div>
    <span className="gh">{Object.keys(term).length == 0? "please select this field ":""}</span>
    <button onclick="submit()">submit </button>
     
  </div>
    </div>
  );
}

export default App;
