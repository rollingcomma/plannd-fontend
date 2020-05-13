import React, {useState} from 'react'

const Editable = ({props}) => {
  const [editableState, setEditableStage] = useState(
    {
      dataType: props.dataType ? props.dataType : "text",
      name:props.name,
      disabled:props.disabled?props.disabled:false,
      
    }
  )


}
export default Editable;