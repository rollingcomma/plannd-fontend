import React, { useState, useEffect, useRef } from 'react'
import FeatureContainer from '../HOC/FeatureContainer';
import Editable from '../shared/Editable'
const Checklist = ({content}) => {

  const [state, setState] = useState(content)
  const inputRef = useRef();
  
  useEffect(() => { setState({ ...content }) }, [content])

  const checkboxStyle = (checked) => {
    return {
      textDecoration: checked ? 'line-through' : 'none',
    };
  }

  const handleOnChange = (evt, item) => {
    // item.item = evt.target.value;
    setState({
      ...state,
      lists: state.lists.map(element => element._id === item._id ? { ...element, item: evt.target.value } : element)
    })
  }
  
  const handleItemClick = (item) => {
    if(item)
    setState({
      ...state,
      lists: state.lists.map(element => element._id === item._id ? { ...item, is_checked: !item.is_checked } : element)
     })
    // this.setState({
    //   items: this.state.items.map(item => item.value === value ? { value, checked: !checked } : item)
    // });
  }

  return (
    <div className="d-flex flex-column checklist-switch overflow-auto ml-3">
      { state && state.lists &&
        state.lists.map((item) =>
          <div key={item._id} className="item-checkbox d-flex flex-row my-2">
            <div>
              <input className="form-check-input checkbox mr-2" type="checkbox" name="checklistItem" value={item.is_checked} checked={item.is_checked} onChange={() => { handleItemClick(item) }} />
            </div>
            <div>
              <Editable
                text={item.item}
                childRef={inputRef}
                id={item._id}
                type="checkbox"
                className="pointer"
                style={checkboxStyle(item.is_checked)}
              >
                <input
                  ref={inputRef}
                  id={item._id}
                  type="text"
                  name="task"
                  style={checkboxStyle(item.is_checked)}
                  value={item.item}
                  onChange={(evt) => handleOnChange(evt, item)}
                />
              </Editable>
            </div>
          </div>
        // <div key={item._id} className="form-check my-2">
            
        //   <label className="ml-2 form-check-label" htmlFor={"checklistItem"+index+1}>
        //     {item.item}
        //   </label>
        // </div>
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