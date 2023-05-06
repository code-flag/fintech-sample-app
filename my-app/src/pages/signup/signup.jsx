import "./signup.css";

const SignUp = () => {
    return (
        <>
            <div className="form-page-wrapper" >
                <form action="" onSubmit={(event) => {
                event.preventDefault();
                sessionStorage.setItem("loginStatus", true);
                console.log("redirect");
                window.location = "/signin";
            }}>
                <h2>Join Fintech User</h2>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="Ex. James Clerk" />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Ex. example@gmail.com"/>

                    <label htmlFor="mobile">Phone Number</label>
                    <input type="tel" name="mobile" id="mobile" placeholder="Ex. 07051324685" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />

                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password2" name="password2" id="password2" />
                    <input type="submit" value="Submit" />
                </form>

                <div className="already-user">
                    <span>Already a user? <a href="../signin">Sign in</a></span>
                </div>
            </div>
        </>
    )
}

export default SignUp;