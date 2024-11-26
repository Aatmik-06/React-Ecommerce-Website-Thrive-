const Login=()=>{
    const [adminid, setAdminid]=useState("");
    const [password, setPassword]=useState("");
    const handleSubmit=()=>{
        let api=`http://localhost:3000/admin/?adminid=${adminid}`;
         axios.get(api).then((res)=>{
             if (res.data.length>=1)
             {
                 if (res.data[0].password==password)
                 {
                   <a href="http://localhost:5174"></a>
                 }
                 else 
                 {
                   alert("Invalid Password!")
                 }
             }
             else 
             {
               alert("Invalid AdminID")
             }
     
         })
        }


    return(
        <>
        
        </>
    )
}

export default Login;