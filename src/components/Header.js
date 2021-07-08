import PropTypes from 'prop-types'
import Button from './Button'

import { useLocation } from 'react-router-dom'

// const Header = (props) => {
//   return (
//     <header>
//       <h2>
//         Header, the course is:
//         {props.title}
//       </h2>
//     </header>
//   )
// }

// as for props, we could destructure with {}
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className="header">
      {/* <h2 style={{ color: 'red', backgroundColor: 'black' }}>
        (destructure ver) Header, the course is:
        {title}
      </h2>
      <div style={divStyle}>this is a div</div> */}

      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={`${showAdd ? 'red' : 'green'} `}
          text={`${showAdd ? 'close' : 'add'} `}
          onClick={onAdd}
        />
      )}
      {/* <Button color="blue" text="hello 1" /> */}
      {/* <Button color="res" text="hello 2" /> */}
    </header>
  )
}

Header.defaultProps = {
  title: 'This is the default val',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// css in js
// const divStyle = {
//   backgroundColor: 'green',
//   width: '80px',
//   height: '80px',
// }

export default Header
