import MockAdapter from "axios-mock-adapter";
import SakaiApi from "../../src/index";
import { loadTestData } from "./utils";


describe("getSiteAssignment", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/assignment/site/.*.json"))
            .reply(200, loadTestData("getSiteAssignment.json"), {});

        const response = await api.getSiteAssignment("xxx");
        expect(response.status).toBe(200);
    });
});

describe("getItemAssignment", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/assignment/item/.*.json"))
            .reply(200, loadTestData("getItemAssignment.json"), {});

        const response = await api.getItemAssignment("xxx");
        expect(response.status).toBe(200);
    });
});
