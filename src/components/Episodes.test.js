import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";


test("running episodes without error", () => {
    render(<Episodes episodes={[]}/>);
})