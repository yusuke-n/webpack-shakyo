import * as React from "react";
import * as ReactDom from "react-dom";

import {Hello} from "./component/Hello";

ReactDom.render(
    <Hello compiler="TypeScript!" framework="React"/>,
    document.getElementById("root")
);