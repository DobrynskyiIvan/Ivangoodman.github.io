import { lifecycle } from "recompose";

function scroll() {
  window.scrollTo(0, document.documentElement.scrollHeight);
}

const enhance = lifecycle({
  componentDidMount() {
    scroll();
  },
  componentDidUpdate(prevProps, prevState, isScrolledUp) {
    if (!isScrolledUp) scroll();
  },
  getSnapshotBeforeUpdate() {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    return clientHeight + scrollTop < scrollHeight;
  }
});

const PrintScrollToBottom = ({ children }) => children;

export default enhance(PrintScrollToBottom);
