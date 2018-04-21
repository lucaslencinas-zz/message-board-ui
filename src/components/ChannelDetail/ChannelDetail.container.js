import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import ChannelDetail from './ChannelDetail';

const mapStateToProps = (state, { match }) => ({
  urlId: match.params.id,
  channel: selectors.channel(state, match.params)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadChannel: actions.fetchChannel,
  onCreate: actions.createMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
