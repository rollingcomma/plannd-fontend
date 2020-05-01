import React, { useState} from 'react';
import ReactQuill from 'react-quill'; 
import PropTypes from 'prop-types';
import ContentContainer from '../HOC/ContentContainer';

const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
Font.whitelist = ['mirza', 'roboto']; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);
/*
 * Simple editor component that takes placeholder text as a prop
*/

// class Editor extends React.Component {
  // constructor(props) {
  //   super(props)
    // const{content} = this.props
  const Editor = (props) =>{
    // state = {
    //   featureId: this.props._id,
    //   editorHtml: this.props.note, 
    //   theme: 'snow' 
    // }
    const [content, setContent] = useState({
      featureId: props._id,
      editorHtml: props.note,
      theme: 'snow'
    })
    // this.textInput = React.createRef();
  //   this.handleBlur = this.handleBlur.bind(this);
  //   this.handleChange = this.handleChange.bind(this)

  // }
  
  // componentWillReceiveProps() {
  //   if (this.props.content !== this.state.content) {
  //     debugger
  //     this.setState(
  //       {
  //         featureId: this.props._id,
  //         editorHtml: this.props.note,
  //         theme: this.state.theme
  //       }
  //     )
  //   }
  // }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.content !== state.content) {
  //     debugger
  //     return {
  //         featureId: props._id,
  //         editorHtml: props.note,
  //         theme: state.theme
  //       }
  //     // )
  //   }
  // }

  // 
  const handleChange = (value)  => {
    setContent(
      { 
        featureId: content.featureId,
        editorHtml: value,
        theme:content.theme 
      });  
  }

  const handleThemeChange = (newTheme) => {
    if (newTheme === "core") newTheme = null;
    setContent({
      featureId: content.featureId,
      editorHtml: content.editorHtml,
      theme: newTheme
    });  
  }

  const handleBlur = () => {
    const val = content.editorHtml.replace(/"/g, '\\"')
    console.log(val)
  }
  
  // render() {
    debugger
    return (
      <div>
        <ReactQuill
          theme={content.theme}
          onChange={handleChange}
          onBlur={handleBlur}
          value={content.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder="Start typing something..."
        />
        <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) =>
            this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
          </select>
        </div>
      </div>
    )
  // }
}

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
// Editor.contextType = StateContext
export default ContentContainer(Editor)