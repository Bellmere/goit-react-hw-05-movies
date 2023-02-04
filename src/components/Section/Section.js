import PropTypes from 'prop-types';

import './Section.css';

const Section = (props) => {
    return (
        <section className='section'>
            <div className='container'>
                {props.children}
            </div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Section;