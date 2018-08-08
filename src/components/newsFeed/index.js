import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { settingsUpdated } from '../../actions/settings';
import { activePeerSet } from '../../actions/peers';
import NewsFeed from './newsFeed';


const mapDispatchToProps = dispatch => ({
  activePeerSet: data => dispatch(activePeerSet(data)),
  settingsUpdated: data => dispatch(settingsUpdated(data)),
});

const mapStateToProps = state => ({
  channels: state.settings.channels,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate()(NewsFeed));
