import React, { useRef, useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../../State/User/userAction";

//Look between uncontrooled and controlled, I'll take the DOM way
let Register = (props)=>{
    const Name = useRef(""),
    Password = useRef(""),
    Age = useRef(0),
    Profession = useRef(""),
    Contact = useRef(0),
    Address = useRef(""),
    Gender = useRef(""),
    Disease = useRef(""),
    MedicalCert = useRef("")
    // let [selectedGender, setGender] = useState("None")
    // const onChange = (e) => {
    //     console.log('clicked', e)
    //     Gender.current.value=e.target.value
    //     setGender(e.target.value)
    //   }
    const navigate = useNavigate();
    // const styles = { 
    //     container: { 
    //         display: "flex", 
    //         flex: 1, 
    //         justifyContent: "center", 
    //         alignItems: "center", 
    //     }, 
        
    //     heading: { 
    //         color: "green", 
    //         textAlign: "center", 
    //     }, 
    //     radioGroup: { 
    //         display: "flex", 
    //         flexDirection: "row", 
    //         alignItems: "center", 
    //         justifyContent: 
    //             "space-around", 
    //         marginTop: "20px", 
    //         borderRadius: "8px", 
    //         backgroundColor: "white", 
    //         padding: "30px", 
    //         boxShadow: 
    //             "0px 2px 3.84px rgba(0, 0, 0, 0.25)", 
    //     }, 
    //     radioButton: { 
    //         display: "flex", 
    //         flexDirection: "row", 
    //         alignItems: "center", 
    //     }, 
    //     radioLabel: { 
    //         marginLeft: "8px", 
    //         fontSize: "17px", 
    //         color: "#333", 
    //     }, 
    // }; 
  
    const user = useSelector((state)=>state.UserReducer.user);
    const dispatch = useDispatch();

    useEffect(()=>{     
        Name.current.value = user.name;        
        Password.current.value = user.password;
        Age.current.value = user.age;
        Profession.current.value = user.profession;
        Contact.current.value = user.contact;
        Address.current.value = user.address;
        Gender.current.value = user.gender;
        Disease.current.value = user.disease;
        MedicalCert.current.value = user.medicalCert;
        //componentWillUnmount
        return function cleanup() {
            console.log("useEffect is working as component will unmount, to cleanup the component");
        };
    })

    const submit = (e)=>{
        let user = {
            name : Name.current.value,
            password : Password.current.value,
            age : Age.current.value,
            profession : Profession.current.value,
            contact : Contact.current.value,
            address : Address.current.value,
            gender : Gender.current.value,
            disease : Disease.current.value,
            medicalCert : MedicalCert.current.value
        }
        navigate("/userAppointments")
        dispatch(logIn(user)) 
        e.preventDefault();
    }
    //UI 😔 
    return(
        <>
        {/* <div style={styles.container} > 
            <div style={styles.radioGroup}> 
                <div style={styles.radioButton}> 
                    <input type="radio" id="Male" value="Male" ref={inputGender} checked={selectedGender==="Male"} onChange={onChange}/> 
                    <label htmlFor="Male"style={styles.radioLabel}>Male</label> 
                </div> 
                <div style={styles.radioButton} > 
                    <input type="radio" id="Female" value="Female" ref={inputGender} checked={selectedGender==="Female"} onChange={onChange}/>  
                    <label htmlFor="Female" style={styles.radioLabel} > Female </label> 
                </div> 
                <div style={styles.radioButton}> 
                    <input type="radio" id="N" value="N" ref={inputGender} checked={selectedGender==="None"} onChange={onChange} /> 
                    <label htmlFor="N" style={styles.radioLabel}> N </label> 
                </div> 
            </div> 
        </div>  */}
            <h1>Login Page</h1><p style={{"fontSize": "2em","margin": "0.67em 0", color:"#fec340"}}>{user.gender?"":"Please seperate by comma"}</p>
            <form className={"form col-md-10 user"} onSubmit={submit}>                
                <label>
                    <b>Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={Name} 
                        placeholder="Enter Name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"}  ref={Password} 
                            placeholder="Enter password" maxLength={20} />
                </label>
                <br/>
                <label>
                    <b>Age :</b>
                    <input type="text" className={"form-control col-md-12"} ref={Age} 
                            placeholder="Enter age" maxLength={2}/>
                </label>
                <br/>
                <label>
                    <b>Profession :</b>
                    <input type="text" className={"form-control col-md-12"} ref={Profession} 
                            placeholder="Enter profession" />
                </label>
                <br/>
                <label>
                    <b>Contact :</b>
                    <input type="number" className={"form-control col-md-12"} ref={Contact} 
                            placeholder="Enter contact number" />
                </label>
                <br/>
                <label>
                    <b>Address :</b>
                    <input type="text" className={"form-control col-md-12"} ref={Address} 
                            placeholder="Enter address" />
                </label>
                <br/>
                {/* 
                    <b>Gender :</b>
                    <input type="text" className={"form-control col-md-12"} ref={Gender} 
                            placeholder="Enter Gender" />
                </label> */}
                <label>
                    <b>Gender: </b>
                    <select ref={Gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="None">None</option>
                    </select>
                </label>
                <br/>
                <label>
                    <b>Disease :</b>
                    <input type="text" className={"form-control col-md-12"} ref={Disease} 
                            placeholder="Enter Disease" />
                </label>
                <br/>
                <label>
                    <b>Medical Certification :</b>
                    <input type="text" className={"form-control col-md-12"} ref={MedicalCert} 
                            placeholder="Enter Certifications" />
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Login" />
            </form>
        </>
    )

}

export default Register;