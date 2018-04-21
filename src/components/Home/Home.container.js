import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import Home from './Home';

const mapStateToProps = (state) => ({
  channels: selectors.channels(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadChannels: actions.fetchChannels
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
