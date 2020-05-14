import React, { useState, useEffect } from 'react'
import FeatureContainer from '../HOC/FeatureContainer';

const Checklist = ({content}) => {

  const [state, setState] = useState(content)

  useEffect(() => { setState({ ...content }) }, [content])

  const handleChangeChk = () => {

  }
  return (
    <div className="d-flex flex-column checklist-switch overflow-auto ml-3">
      { state && state.lists &&
        state.lists.map((element, index) =>
        <div key={element._id} className="form-check my-2">
            <input className=" form-check-input checkbox" type="checkbox" name="checklistItem" value={element.item} defaultChecked={element.is_checked} onChange={()=>{handleChangeChk()}}/>
          <label className="ml-2 form-check-label" htmlFor={"checklistItem"+index+1}>
            {element.item}
          </label>
        </div>
      )}
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <button className="btn btn-link text-dark"><img className="icon-small" src="/assets/garbage.png" alt="delete" />Trash</button>
        <span>/</span>
        <div className="create-icon">
          <button className="btn btn-link text-dark"><img src="/assets/add-icon.svg" alt="add" />Create</button>
        </div>
      </div>
    </div>

  )
}

export default FeatureContainer(Checklist)