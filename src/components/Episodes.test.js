import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

// first test
test("running episodes without error", () => {
    render(<Episodes episodes={[]}/>);
})


// second test
const mockEpisodesData = [
    
]


test("episodes running without error", () => {
    const { } = render(<Episodes episodes={mockEpisodesData}/>)
})