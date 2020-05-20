import React, { useState, useEffect, useRef } from 'react'
import FeatureContainer from '../HOC/FeatureContainer';
import Editable from '../shared/Editable'
import useUserState from '../../context/customerHook';
import { deleteItem, addItem, updateItem } from '../../services/apiAction';
const Checklist = ({content}) => {

  const [checklistState, setChecklistState] = useState(content)
  // const [inputState, setInputState] = useState({ item: checklistState && checklistState.lists && checklistState.lists[0].item || "" })
  const [newListState, setNewListState] = useState({ item: "" })
  const [addFormState, setAddFormState] = useState({ open: false })
  const [userState] = useUserState()
  const inputRef = useRef();
  
  useEffect(() => { setChecklistState({ ...content }) }, [content])

  const checkboxStyle = (checked) => {
    return {
      textDecoration: checked ? 'line-through' : 'none',
    };
  }
  
  const handleOnKeyDown = (index) => {
    const formData = { item: checklistState.lists[index].item }
    updateItem(
      userState.user.preference.activeProject,
      checklistState._id,
      checklistState.lists[index]._id,
      formData
    ).then(res => {
      // if(res.data.success) {
      // checklistState.lists[index].item = inputState.item
      // setChecklistState({ ...checklistState})
      // }
    })
    .catch(err => console.log(err.message))
  }
  
  const toggleAddFormHandler = () => {
    setAddFormState({ open: !addFormState.open })
  }

  const handleDelete = (index) => {
    console.log('delete')
    debugger
    deleteItem(
      userState.user.preference.activeProject,
      checklistState._id,
      checklistState.lists[index]._id
    )
    .then(res => {
      if(res.data.success) {
        checklistState.lists.splice(index, 1)
        setChecklistState({ ...checklistState })
      }
    })
    .catch(err => console.log(err.message))
  }

  const handleCreateNewList = () => {
    const formData = { item: newListState.item }
    addItem(
      userState.user.preference.activeProject,
      checklistState._id,
      formData
    )
    .then(res => {
      const newList = {
        _id:res.data.itemId,
        item: newListState.item
      }
      checklistState.lists.push(newList)
      setChecklistState({ ...checklistState })
      setAddFormState({ open: !addFormState.open })
    })
    .catch(err => console.log(err.message))
  }
  

  const handleOnChange = (evt, index) => {
    let lists = checklistState.lists
    lists[index].item = evt.target.value
    setChecklistState({...checklistState, lists:lists})
  }
  
  const handleItemClick = (evt, index) => {
    const formData = { is_checked: evt.target.checked }
    updateItem(
      userState.user.preference.activeProject,
      checklistState._id,
      checklistState.lists[index]._id,
      formData
    ).then(res => {
      let lists = checklistState.lists
      lists[index].is_checked = !lists[index].is_checked
      setChecklistState({ ...checklistState, lists: lists })
    })
      .catch(err => console.log(err.message))
    
  }

  return (
    <div className="d-flex flex-column checklist-switch overflow-auto ml-3">
      {checklistState && checklistState.lists &&
        checklistState.lists.map((item, index) =>
          <div key={item._id} className="item-checkbox d-flex flex-row my-2">
            <div>
              <input className="form-check-input checkbox mr-2" 
                type="checkbox" name="checklistItem" 
                checked={item.is_checked} 
                onChange={(e) => { handleItemClick(e, index) }} />
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
                  onKeyDown={(evt) => { if (evt.key === "Enter") handleOnKeyDown(index) }}
                  onChange={(evt) => handleOnChange(evt, index)}
                />
              </Editable>
            </div>
          </div>
      )}
      <div>
        {addFormState.open &&
          <input type="text" name="item" placeholder="Enter a new list"
            onChange={e => {
              setNewListState({ item: e.target.value })
            }}
            onKeyDown={(evt) => { if (evt.key === "Enter") handleCreateNewList() }} />}
      </div>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <button className="btn btn-link text-dark"><img className="icon-small" src="/assets/garbage.png" alt="delete" />Trash</button>
        <span>/</span>
        <div className="create-icon">
          <button className="btn btn-link text-dark" onClick={() => toggleAddFormHandler()}><img src="/assets/add-icon.svg" alt="add" />Create</button>
        </div>
      </div>
    </div>

  )
}

export default FeatureContainer(Checklist)