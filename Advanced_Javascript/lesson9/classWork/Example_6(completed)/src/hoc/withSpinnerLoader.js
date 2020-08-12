import { branch, renderComponent } from "recompose";
import Spinner from "../components/Spinner";

const isLoading = ({ loading }) => loading;

const withSpinnerLoader = branch(isLoading, renderComponent(Spinner));

export default withSpinnerLoader;
