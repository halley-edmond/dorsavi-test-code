import React,{useContext} from "react";
import {AppContext} from "../../provider";

//main component
export default function SearchResult (){
  const {state} = useContext(AppContext);

  const renderPets = (pets) =>{
    const renderList = () => {
      if (pets && pets.length) {
        return (pets.sort((a,b)=>{
          return a.name.localeCompare(b.name)
        }).map((pet, index) => {
          const {name, type} = pet
          return (
              <li key={index}>{name} - {type}</li>
          )
        }))
      }
    };
    return (
        <ul>
          {renderList()}
        </ul>
    )
  }

  const renderResult = () =>{
    const renderData = () => {
      const renderList = () => {
        if(state.data && state.data.length){
          return state.data.map((record,index)=> {
            const {name,gender,age,pets} = record;
            return (<tr key={index} className={"result-item"}>
              <td className={"w-25"}>{name}</td>
              <td className={"w-25"}>{gender}</td>
              <td className={"w-25"}>{age}</td>
              <td className={"w-25"}>{renderPets(pets)}</td>
            </tr>)
          });
        }
      }
      return (
          <table className={"table mt-5"}>
            <thead>
            <tr className={"result-item"}>
              <th className={"w-25"}>Owner Name</th>
              <th className={"w-25"}>Gender</th>
              <th className={"w-25"}>Age</th>
              <th className={"w-25"}>Pets</th>
            </tr>
            </thead>
            <tbody>
            {renderList()}
            </tbody>

          </table>
      )
    }

    switch (state.status) {
      case "loading":
        return (
            <div className={"d-flex justify-content-center my-5"}>
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
        );
      case "success":
        return renderData();
      default:
        return (<></>)
    }
  }

  return (
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-12"}>
            {renderResult()}
          </div>
        </div>
      </div>
  )
}