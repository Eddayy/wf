import { Provider, useStaticRendering } from "mobx-react";
import { renderToString } from "react-dom/server";
import Worldstate from "./src/containers/worldstate";

export default replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    useStaticRendering(true);

    const ProviderBody = () => (
        <Provider Store={Worldstate}>
                {bodyComponent}
        </Provider>
    );

    replaceBodyHTMLString(renderToString(<ProviderBody />));
};