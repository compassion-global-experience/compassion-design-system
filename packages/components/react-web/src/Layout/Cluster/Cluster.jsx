import PropTypes from 'prop-types';



import clusterStyles from './Cluster.styles';

export const Cluster = ({ justifyContent, alignItems, space, ...props }) => {
  return (
    <div
      css={clusterStyles({ justifyContent, alignItems, space })}
      className="gds-cluster"
    >
      {props.children}
    </div>
  );
};

Cluster.propTypes = {
  space: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  /** Any valid CSS width value. */
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
};

Cluster.defaultProps = {
  space: `1rem`,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};
