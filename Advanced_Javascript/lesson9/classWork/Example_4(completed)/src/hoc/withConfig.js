import { lifecycle } from "recompose";
import fetchConfiguration from "../components/mock_config";

const configPromise = fetchConfiguration();

const withConfig = lifecycle({
    state: { config: {} },
    componentDidMount() {
        configPromise.then(config => this.setState({ config }));
    }
});

export default withConfig;
