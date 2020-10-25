import React,{Component} from 'react'
import { removeError } from '../store/actions/errors';

class AuthForm extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            username:'',
            password:'',
            profileImgUrl:''
        }

    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleSubmit= (e)=>{
        e.preventDefault()
        const authType = this.props.signUp ? 'signup' : 'signin'
        this.props.onAuth(authType,this.state).then(()=>{
            this.props.history.push('/')
        })
        .catch(()=>{
            return
        })
    }

    

    render(){
        const {email,username,password,profileImgUrl} = this.state
        const {heading,buttonText,signUp,errors,removeError,history} = this.props 

        history.listen(()=>{
            removeError()
        })

        return(
            <div>
                <div className='.row .justify-content-md-center text-center'>
                    <div className='col-md-6'>
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && (
                                <div className='alert alert-danger'>{errors.message}</div>
                            )}
                            <label for='email'>Email:</label>
                            <input type='email' className='form-control' id='email' name='email' value={email} onChange={this.handleChange}/>
                            <label for='password'>Password:</label>
                            <input type='password' className='form-control' id='password' name='password' value={password} onChange={this.handleChange}/>
                            {
                                signUp && (
                                    <div>
                                        <label for='username'>Username:</label>
                                        <input type='username' className='form-control' id='username' name='username' value={username} onChange={this.handleChange}/>
                                        <label for='profileImgUrl'>Image url:</label>
                                        <input type='text' className='form-control' id='profileImgUrl' name='profileImgUrl' value={profileImgUrl} onChange={this.handleChange}/>
                                    </div>
                                )
                            }
                            <button className='btn btn-primary btn-block btn-lg' type='submit'>
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Authform 