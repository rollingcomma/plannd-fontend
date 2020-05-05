import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Routes from '../../services/Routes'
import Checklist from '../features/Checklist';
import Editor from '../features/Editor'
import Links from '../features/Links'
import Album from '../features/Album'
import NotFound from '../features/NotFound'

// import FeatureContainer from '../HOC/FeatureContainer';

// const Nav = ({feature}) => {
  
//   const [content, setContent] = useState(feature.contentArr[0]);
  
//   useEffect (() => {
//     debugger
//     setContent(feature.contentArr[0])
//   }, [])

//   const handleUpdateState = useCallback((id, contentArr) => {
//     const arr = contentArr.filter(element => element._id === id)
//     if (arr.length === 1) {
//       setContent(arr[0])
//     }
//   }, [content])

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.feature.contentId,
      name: this.props.feature.name,
      contentArr: this.props.feature.contentArr,
      currentContent:this.props.feature.contentArr[0]
    }

    this.handleUpdateState = this.handleUpdateState.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.feature !== prevProps.feature) {
      // debugger
      this.setState(
        {
          id: this.props.feature.contentId,
          name: this.props.feature.name,
          contentArr: this.props.feature.contentArr,
          currentContent: this.props.feature.contentArr[0]
        }
      )
    }
  }

  handleUpdateState = (id, contentArr) => {
    const arr = contentArr.filter(element => element._id === id)
    if (arr.length === 1) {
      this.setState({
        ...this.state,
        currentContent: arr[0]
      })
    }
  }

  renderSwitch(featureName, content) {
    switch (featureName) {
      case 'notes':
        return <Editor content={content} />;
      case 'todos':
        return <Checklist content={content} />;
      case 'links':
        return <Links content={content} />;
      case 'gallery':
        return <Album content={content} />;
      default:
        return <NotFound />;
    }
  }

  render() {
  debugger
  return (
    <div className="d-flex flex-row w-75">
      <div className="categories-nav">
        <div className="top-function-name">
          <div className="rectangle"></div>
        <p id={this.state.id} className="function-name">{this.state.name}</p>
          <div className="text-banner"></div>
        </div>
        <div className="saved-elements-list">
          {this.state.contentArr.map(element =>
          <div key={element._id}>
              <p to className="pointer" onClick={() => this.handleUpdateState(element._id, this.state.contentArr)} id={element._id}>{element.title}</p>
            <hr/>
          </div> 
          )}
          <div className="create-icon">
            <img src="/assets/add-icon.svg" alt="add" />
            <p>Create</p>
          </div>
        </div>
      </div>
      {/* <StateContext.Provider value={content}> */}
      {this.renderSwitch(this.state.name, this.state.currentContent)}
      {/* </StateContext.Provider> */}
      {/* <FeatureContainer content={this.state.currentContent} /> */}
     
    </div>
  )
  }
}

export default Nav