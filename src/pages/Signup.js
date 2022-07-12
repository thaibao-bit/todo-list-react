function Signup(){
    return <div className="center-div-form">
    <form>
        <input className="txt-input" type="text" placeholder="User Name">

        </input>
        <input className="txt-input" type="text" placeholder="Email">

        </input>
        <input className="txt-input" type="password" placeholder="Password" >

        </input>
        <input className="txt-input" type="password" placeholder="Confirm Password " >

        </input>
        
        <input className="btn-submit" type="submit" value="SignUp">
        </input>
    </form>
</div>
}

export default Signup