import React from "react";
export default class HigherOrderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filterUsingUserType:[],
            filterUsingFirstLetter:[],
            filterDataUsingAge:[],
            totalYears : 0
        }
        let filteredData = this.state.userData.filter((el,i,arr)=>el.user_type==="Designer")
        let ChangeName = this.state.userData.filter((el,i,arr)=>el.name.startsWith("J"))
        let ChangeAge = this.state.userData.filter((el,i,arr)=>el.age > 28 && el.age<=50)
        let total = this.state.userData.filter((el)=>el.user_type=="Designer").reduce((acc,el,i,arr)=>{return acc+el.years;},0)
        console.log(filteredData)
        this.state.filterUsingUserType = filteredData;
        this.state.filterUsingFirstLetter = ChangeName;
        this.state.filterDataUsingAge = ChangeAge;
        this.state.totalYears = total;
    }
// js we always write above render and bellow render we write html code 
    render(){
        return (
            <>
                 <h1 style={{color:"black"}}>Display All Items</h1>
            {this.state.userData.map((el,i,arr)=>(
                <div key={el.id} style={{display:"flex",gap:"10px",width:"400px",border:"1px solid black",marginLeft:"30%", color:"blue"}}>
                     <p> Id: {el.id}</p>
                    <p> Name: {el.name}</p>
                    <p>UserType: {el.user_type}</p>
                </div>
            ))}

            <h1 style={{color:"black"}}>Display using User Type</h1>
    
            {this.state.filterUsingUserType.map((el,i,arr)=>(
                <div key={el.id} style={{display:"flex",gap:"10px",width:"400px",border:"1px solid black",marginLeft:"30%", color:"blue"}}>
                    <p> Id: {el.id}</p>
                    <p> Name: {el.name}</p>
                    <p>UserType: {el.user_type}</p>
                </div>
            ))}


            <h1 style={{color:"black"}}>Filter All data Starting with J</h1>
    {/* <div style={{height:"400px",width:"400px",border:"1px solid black",marginLeft:"30%"}}></div> */}
    {this.state.filterUsingFirstLetter.map((el,i,arr)=>(
        <div key={el.id} style={{display:"flex",gap:"10px",width:"400px",border:"1px solid black",marginLeft:"30%", color:"blue"}}>
            <p> Id: {el.id}</p>
            <p> Name: {el.name}</p>
            <p>UserType: {el.user_type}</p>
        </div>
    ))}


     <h1 style={{color:"black"}}>Filter all data based on age greater than 28and age less than or equal to 50</h1>
    
    {this.state.filterDataUsingAge.map((el,i,arr)=>(
        <div key={el.id} style={{display:"flex",gap:"10px",width:"400px",border:"1px solid black",marginLeft:"30%", color:"blue"}}>
            <p> Id: {el.id}</p>
            <p> Name: {el.name}</p>
            <p>UserType: {el.user_type}</p>
        </div>
    ))}

    <h1 style={{color:"black"}}>Find the total years of Designers</h1>
    <p style={{color:"black",border:"1px solid black",width:"400px",marginLeft:"30%"}}>{this.state.totalYears}</p>
            </>
        )
    }
}