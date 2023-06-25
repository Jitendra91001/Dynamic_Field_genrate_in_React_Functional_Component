import React,{useState} from "react"
import { Field } from './component/Field'
import { Label } from './component/Label'
import Form from './component/Form/Form'


const Dynamic_form=()=>{
    const initialData={
        fname:"",
        lname:"",
        email:"",
        password:"",
        mobile:"",
        gender:"",
        skills:[],
        city:"",
        address:""
      }
      const [data,setData]=useState(initialData)
    
      const manageData=(e)=>{
          const{name,value}=e.target
          setData((prev)=>{
            return {...prev,[name]:value}
          })
      }
    
      const submitData=(e)=>{
        e.preventDefault()
        setData({})
        e.target.reset()
        let url='http://localhost:5000/student';
        let promise=fetch(url,{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
    
        promise.then((res)=>{
          return res.json()
        }).then((result)=>{
          console.log(result)
        }).catch((err)=>{
          console.log(err)
        })
      }
    
      const handleCheckBox=(e)=>{
         let item=e.target.value
    
         if(e.target.checked){
          setData({...data,skills:[...data.skills,item]})
         }else{
          setData({...data,skills:[...data.skills.filter(val=>val!==item)]})
         }
      }
      let gender = [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" }
      ]
    
      let checkbox = [
        { label: "React", value: "React" },
        { label: "Express", value: "Express" },
        { label: "Mongo", value: "Mongo" },
        { label: "Node", value: "Node" }
      ]
    
      let style={
        border:"2px solid black",
        borderRadius:"10px",
        padding:"10px"
      }
    
    return(
        <>
        <div className='container-fluid'>
        <div className='row mt-5'>
          <div className='col-sm-5 offset-5 mx-auto'>
            <Form onSubmitData={submitData} style={style}>
            <h1 className='text-center border-bottom border-dark border-2 w-75 ms-5 mt-2 '>Ragistration Form</h1>

            <div className='list-input-group'>
              <Field
                controls="input"
                label="FirstName"
                type="text"
                class="form-control"
                name="fname"
                placeholder="Enter the fname"
                handledata={manageData}
              />
            </div>
            <div className='list-input-group'>
              <Field
                controls="input"
                label="lastName"
                type="text"
                class="form-control mt-1"
                name="lname"
                handledata={manageData}
                placeholder="Enter the lastname"
              />
            </div>

            <div className='list-input-group'>
              <Field
                controls="input"
                label="Email"
                type="email"
                class="form-control mt-1"
                name="email"
                handledata={manageData}
                placeholder="Enter the Email"
              />
            </div>

            <div className='list-input-group'>
              <Field
                controls="input"
                label="Password"
                type="password"
                class="form-control mt-1"
                name="password"
                handledata={manageData}
                placeholder="Enter the password"
              />
            </div>

            <div className='list-input-group'>
              <Field
                controls="input"
                label="Mobile"
                type="number"
                class="form-control mt-1"
                name="mobile"
                handledata={manageData}
                placeholder="Enter the Number"
              />
            </div>

            <div className='list-input-group'>
              <Label label="Gender"/><br/>
              <Field
                controls="radio"
                type="radio"
                handledata={manageData}
                value={gender}
              />

            </div>
            <div className='list-input-group'>
              <Field
                controls="checkbox"
                value={checkbox}
                handleChecVal={handleCheckBox}
              />
            </div>
            <div className='list-input-group'>
              <Field
                controls="select"
                name="city"
                class="form-control"
                handledata={manageData}
                value={["lucknow", 'Jaunpur', 'kanpur', 'Azamgarh', 'Varansi']}

              />
            </div>
            <div className='list-input-group'>
              <Field
               label="Address"
                controls="text_area"
                name="address"
                class="form-control"
                handledata={manageData}
                placeholder={"Enter your Address"}
              />
            </div>

            <Field
              controls="button"
              type="submit"
              value="submit"
              class="btn btn-success btn-sm mt-2"
            />
            <Field
              controls="button"
              type="reset"
              value="reset"
              class="btn btn-warning btn-sm float-end mt-2"
            />
          </Form>
          </div>
        </div>
      </div>
        </>
    );
}
export default Dynamic_form