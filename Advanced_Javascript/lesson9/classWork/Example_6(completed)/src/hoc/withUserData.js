import { lifecycle } from "recompose";
import fetchData from "../fetchData";

const withUserData = lifecycle({
  state: { loading: true },
  componentDidMount() {
    fetchData().then(data => this.setState({ loading: false, ...data }));
  }
});

export default withUserData;
