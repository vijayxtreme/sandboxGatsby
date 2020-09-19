import React, { useState } from "react"
import {Link} from "gatsby"
import {useStaticQuery, graphql} from "gatsby"

function HearFromYouForm(props){

    let locationData = useStaticQuery(
        graphql`
            query {
                allNodeCenterLocation {
                    edges {
                        node {
                            title
                        }
                    }
                }
            }
        `
    )

    let locations = locationData.allNodeCenterLocation.edges.map((obj, idx)=>{
        let {title} = obj.node
        return (
            <option key={idx} value={`${title}`}>{title}</option>
        )
    })

    let nameRef = React.createRef()
    let emailRef = React.createRef()
    let centerRef = React.createRef()
    let [service, setService] = useState('prostate-mri')
    let messageRef = React.createRef()
    let [submitted, setSubmitted] = useState(false)


    function validate(e){
        e.preventDefault()

        let errors = []
        if(nameRef.current.value.length <= 2) errors.push("Fix Name");
        if(emailRef.current.value === '') errors.push("Fix Email");
        if(centerRef.current.value === 'select') errors.push("Select a center");
        if(messageRef.current.value.length <= 2 ) errors.push("Please write a message");

        //if no errors
        if(errors.length == 0){
            handleSubmit()
        }else {
          console.log(errors)
          let out = ''
          errors.forEach((error)=> out += error + "\n" )
          alert(`Please make sure all fields are filled out correctly:\n${out}`)
        }
    }

    function handleSubmit(){
      //All good? Submit!
        setSubmitted(true)

        let dataToSend = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            service: service,
            center: centerRef.current.value,
            message: messageRef.current.value
        }

        fetch('https://7e59052d3l.execute-api.us-east-2.amazonaws.com/sendEmail',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(dataToSend)
        }).then(res => res.json())
        .then(res => { //Success
         })
        .catch(err => console.log(err))

    }


    return (
            <div className="hearfromyou tc mt5-l mb5">
                <div className="pa3">
                <h2>We Want To Hear From You</h2>
                <p>Thank you for your interest in RadNet.  Please let us know how we can connect with you.</p>
                <form className={`${submitted ? 'hide': 'show'} pa4-l mt4 mb4`} onSubmit={validate}>
                    <div className='form-inner'>
                        <fieldset className="cf">
                            <p className="fl-l w-25-l"><label htmlFor="name" className="item">Your Name: </label></p>
                            <p className="fl-l w-75-l"><input className={``} ref={nameRef} name="name" type="text" required placeholder="First Name, Last Name" /></p>
                        </fieldset>
                        <fieldset className="cf">
                            <p className="fl-l w-25-l"><label htmlFor="email" className="item">Your Email: </label></p>
                          <p className="fl-l w-75-l"><input className={``} ref={emailRef} name="email" type="email" placeholder="example@address.com" required /></p>
                        </fieldset>
                        <fieldset className="cf">
                            <p className="fl-l w-25-l"><label htmlFor="location" className="item">Location: </label></p>
                            <p className="fl-l w-75-l">
                            <select name="location" ref={centerRef} defaultValue="select" required>
                                <option disabled value="select">--Select--</option>
                                {locations}
                            </select>
                            </p>
                        </fieldset>
                        <fieldset className="cf">
                            <div className="fl-l w-25-l"><label className="item">Service: </label></div>
                            <div className="fl-l w-50-l tl">
                                <div>
                                    <label className="service">
                                    <input type="radio" name="service" value="prostate-mri" onChange={(e)=>setService(e.target.value)} checked={service === 'prostate-mri' ? true : false} />
                                    &nbsp;Prostate MRI</label>
                                </div>
                                <div>
                                    <label className="service">
                                        <input type="radio" name="service" value="tulsa-pro" onChange={(e)=>setService(e.target.value)} checked={service === 'tulsa-pro' ? true : false} />
                                    &nbsp;The TULSA Procedure</label>
                                </div>
                                <div>
                                    <label className="service">
                                        <input type="radio" name="service" value="other" onChange={(e)=>setService(e.target.value)} checked={service === 'other' ? true : false} />
                                    &nbsp;Other</label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="cf">
                            <p className="fl-l w-25-l"><label className="item">Message: </label></p>
                            <p className="fl-l w-75-l"><textarea className={``} ref={messageRef} required name="text" ></textarea></p>
                        </fieldset>
                    </div>
                    <div className="mt4">
                        <button className="submit-form mr0 mr2-l mb3 mb0-l" type="submit">Submit</button>
                        <Link className="button clear" to="/locations">View Our TULSA Procedure Centers</Link>
                    </div>
                </form>
                <div className={`${submitted ? 'show':'hide'}`}>
                    Message Sent!
                </div>
                </div>
            </div>
    )
}

export default HearFromYouForm
