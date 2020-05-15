import React, { useState, useEffect } from "react";


const Editable = ({
  childRef,
  text,
  type,
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

  // Event handler while pressing any key while editing
  const handleKeyDown = (event, type) => {
    // Handle when key is pressed
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
        >
          {children}
        </div>
      ) : (
          <div onDoubleClick={() => setEditing(true)}>
            {type === "checkbox"?
              <span id={id} className={className}>
                {text || "Editable content"}
              </span>
              :
              <span id={id} onClick={props.onClick} className={className}>
                {text || "Editable content"}
              </span>
            }
          </div>
        )}
    </section>
  );
};

export default Editable;