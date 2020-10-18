import React, { useEffect, useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import FeatureContainer from '../HOC/FeatureContainer';
import { useUserState } from '../../context/customerHook'
import { updateNotebook } from '../../services/apiAction'

const Editor = ({ content, toolbarTheme}) =>{
  // const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
  // Font.whitelist = ['mirza', 'roboto']; // allow ONLY these fonts and the default
  // ReactQuill.Quill.register(Font, true);
  // const editRef = useRef();
  // const initialState = 
  // {
  //   content,
  //   theme: 'bubble'
  // }
  debugger
  const [notebookState, setNotebookState] = useState(content)
  // const [noteState, setNoteState] = useState({note:notebookState.note})
  const [themeState, setThemeState] = useState({ theme: toolbarTheme || "bubble"})
  const [userState] = useUserState()
  useEffect(() => {
    if(content)
    setNotebookState(
      {...content}
    )
  },[content, notebookState._id])

  const handleChange = (content, delta, source, editor) => {
    setNotebookState({
       ...notebookState,
       note: editor.getHTML()
    })
  }

  const handleThemeChange = (newTheme) => {
    setThemeState({theme: newTheme})
  }

  const handleBlur = () => {
    const val = notebookState.note.replace(/"/g, '\\"')
    updateNotebook(
      userState.user.preference.activeProject,
      {
        notebookId: notebookState._id,
        note: val
      })
      .then(result => {
        console.log(result.data)
        content.note = val;
       })
      .catch(err=>{
        console.log(err.message)
      })
  }

    return (
      <div className="editor-container">
        <ReactQuill
          theme={themeState.theme || 'bubble'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={notebookState.note ||''}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder="Start typing something..."
        />
        {/* <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) =>
            handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
          </select>
        </div> */}
      </div>
    )
  }

Editor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    [{ scrollingContainer: '.dashboard-features-container'}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    // ['link', 'image', 'video'],
    ['clean'],
    
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent'
]

/* 
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
}

export default FeatureContainer(Editor)