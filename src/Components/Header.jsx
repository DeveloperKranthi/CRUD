import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({text}) {
  return (
      <header>
          <div className="container">
              <h2>{text}</h2>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>

              </ul>
              </div>
      </header>
  )
}

Header.defaultProps = {
    text: 'FeedBack'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header