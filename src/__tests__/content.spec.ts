import MockAdapter from "axios-mock-adapter";
import SakaiApi from "../../src/index";
import { loadTestData } from "./utils";


describe("getSiteContent", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/content/site/.*.json"))
            .reply(200, loadTestData("getSiteContent.json"), {});

        const response = await api.getSiteContent("xxx");
        expect(response.status).toBe(200);
    });
});
