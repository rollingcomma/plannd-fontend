import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import FeatureContainer from '../HOC/FeatureContainer';
import { useUserState } from '../../context/customerHook'
import { updateNotebook } from '../../services/apiAction'
const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
Font.whitelist = ['mirza', 'roboto']; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);
/*
 * Simple editor component that takes placeholder text as a prop
*/
// class Editor extends React.Component {
//   constructor(props) {
//     super(props)
const Editor = ({content}) =>{

    
    const initialState = content? {
      documentId: content._id,
      editorHtml: content.note,
      theme: 'snow'
    }
    :
    {
        editorHtml: '',
        theme: 'snow'
    }

  const [contentState, setContentState] = useState(initialState)

  const [UserState] = useUserState()

    // this.textInput = React.createRef();
  //   this.handleBlur = this.handleBlur.bind(this);
  //   this.handleChange = this.handleChange.bind(this)

  // }
  
  useEffect(() => {
    if(content)
    setContentState(
      {
        ...contentState,
        documentId: content._id,
        editorHtml: content.note
      }
    )
  },[content])

  // componentDidUpdate(prevProps) {
  //   if (this.props.content !== prevProps.content) {
  //     // debugger
  //     this.setState(
  //       this.props.content?
  //       {
  //         documentId: this.props.content._id,
  //         editorHtml: this.props.content.note,
  //         theme: this.state.theme
  //       }
  //       :
  //       {
  //         editorHtml: '',
  //         theme: 'snow'
  //       }
  //     )
  //   }
  // }

  const handleChange = (value) => {
      setContentState({
        ...contentState,
        editorHtml: value
      })
    // this.setState({ editorHtml: value });
    
  }

  const handleThemeChange = (newTheme) => {
    if (newTheme === "core") newTheme = null;
    // this.setState({ theme: newTheme })
    setContentState({
      ...contentState,
      theme:newTheme
    })
  }

  const handleBlur = () => {
    const val = contentState.editorHtml.replace(/"/g, '\\"')
    updateNotebook(UserState.user.preference.activeProject,
      {
        notebookId: contentState.documentId,
        note: val
      })
      .then(result => {
        console.log(result.data)
        // console.log(val)
      })
  }

  // render() {
    // debugger
    return (
      <div>
        <ReactQuill
          theme={contentState.theme || 'snow'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={contentState.editorHtml ||''}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder="Start typing something..."
        />
        <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) =>
            handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
          </select>
        </div>
      </div>
    )
  }
// }

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    // ['link', 'image', 'video'],
    ['clean']
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