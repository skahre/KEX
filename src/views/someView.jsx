import "/src/style.css"

export function SomeView(props){
    return (
        <div className="login-box">
            <h2>LOG IN</h2>
            <span>
                <p className="">Email</p>
                <input placeholder="example@gmail.com"></input>
            </span>
            <span>
                <p className="">Password</p>
                <input></input>
            </span>
            <button>LOG IN WITH GOOGLE</button>
            <p>Don't have an account? <a href="#">SIGN UP</a></p>
        </div>
    )
}