import React, { useState, useEffect } from "react";

const Editable = ({
  childRef,
  text,
  type,
  placeholder,
  id,
  className,
  children,
  ...props
}) => {
  
  const [isEditing, setEditing] = useState(false);

  /* 
    using use effect, when isEditing state is changing, check whether it is set to true, if true, then focus on the reference element
  */
  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  debugger
  const handleKeyDown = (event, type) => {
    
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey]; // All keys array

    /* 
      - For textarea, check only Escape and Tab key and set the state to false
      - For everything else, all three keys will set the state to false
    */
    if (
      (type === "textarea" && keys.indexOf(key) > -1) ||
      (type !== "textarea" && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };


  /*
  - It will display a label is `isEditing` is false
  - It will display the children (input or textarea) if `isEditing` is true
  - when input `onBlur`, we will set the default non edit mode
  Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
  */
  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
          className="d-flex flex-row"
        > 
          {children}
          <button className="btn btn-link" title="Remove from list"><img src="/assets/delete.png" className="icon-xsmall" alt="delete" /></button>
        </div>
      ) : (
          <div onDoubleClick={() => setEditing(true)}>
            {type === "checkbox"?
              <span id={id} className={className}>
                {text || "Editable content"}
              </span>
              :
              <span id={id} onClick={props.onClick} className={className}>
                {text || placeholder || "Editable content"}
              </span>
            }
          </div>
        )}
    </section>
  );
};

export default Editable;