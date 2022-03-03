function Deposit(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx= React.useContext(UserContext);
   
    function validate(field, label){
        if (!field) {
         setStatus('Error: ' + label);
         setTimeout(() => setStatus(''),3000);
         return false;
        }
        return true;
    }
   
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,    'name'))    return;
      if (!validate(email,    'email'))    return;
      if (!validate(password,    'password'))    return;
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }
   
    function clearForm(){  
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
   
   
    return (
      <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        body={show ? (
                <>
                Balance<br/>
                <input type="input" className="form-control" id="name" placeholder value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Deposit Amount<br/>
                <input type="input" className="form-control" id="email" placeholder="Deposit amount" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
                </>
             ):(
               <>
               <h5>Success</h5>
               <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
               </>
             )}
       />
    )
   }