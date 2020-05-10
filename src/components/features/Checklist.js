import React, { useState, useEffect } from 'react'
import FeatureContainer from '../HOC/FeatureContainer';

const Checklist = ({content}) => {

  const [state, setState] = useState(content)

  useEffect(() => { setState({ ...content }) }, [content])

  const handleChangeChk = () => {

  }
  return (
    <div className="d-flex flex-column overflow-auto ml-3">
      { state && state.lists &&
        state.lists.map((element, index) =>
        <div key={element._id} className="form-check my-2">
          <input className=" form-check-input checkbox" type="checkbox" name="checklistItem" id="exampleRadios1" value="option1" defaultChecked={element.is_checked} onChange={()=>{handleChangeChk()}}/>
          <label className="ml-2 form-check-label" htmlFor={"checklistItem"+index+1}>
            {element.item}
          </label>
        </div>
      )}
      <div className="create-icon">
        <button className="btn btn-link text-dark"><img src="/assets/add-icon.svg" alt="add" />Create</button>
      </div>
    </div>

  )
}

export default FeatureContainer(Checklist)