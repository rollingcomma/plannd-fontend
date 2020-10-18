import React, { useState, useEffect } from "react";

const Editable = ({
  childRef,
  text,
  type,
  placeholder,
  id,
  index,
  handleDelete,
  className,
  children,
  ...props
}) => {
  
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <section {...props}>
      {isEditing ? (
        <div className="d-flex flex-row w-100"
        onKeyDown={evt => { if (evt.key === "Enter" || evt.key === "Escape") setEditing(false) }}
      >
        {children}
        <button className="btn btn-link" title="Remove from list" onClick={handleDelete}><img src="/assets/delete.png" className="icon-xsmall" alt="delete" /></button>
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