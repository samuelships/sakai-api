import MockAdapter from "axios-mock-adapter";
import SakaiApi from "../../src/index";
import { loadTestData } from "./utils";


describe("getSiteCalendar", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/calendar/site/.*.json"))
            .reply(200, loadTestData("getSiteCalendar.json"), {});

        const response = await api.getSiteCalendar("xxx");
        expect(response.status).toBe(200);
    });
});
