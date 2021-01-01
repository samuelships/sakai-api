import MockAdapter from "axios-mock-adapter";
import SakaiApi from "../../src/index";
import { loadTestData } from "./utils";


describe("getSiteAssignment", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/announcement/site/.*.json"))
            .reply(200, loadTestData("getSiteAnnouncement.json"), {});

        const response = await api.getSiteAnnouncement("xxx");
        expect(response.status).toBe(200);
    });
});