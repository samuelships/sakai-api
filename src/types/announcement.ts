import { BaseResponse } from "./request";

export interface SiteAnnouncementResponse extends BaseResponse {
    announcement_collection: Announcement[]
}

export interface MyAnnouncementResponse extends SiteAnnouncementResponse {
}

export interface AnnouncementResponse extends Announcement {
}

export interface Announcement {
    entityReference: string,
    entityURL: string,
    entityId: string,
    entityTitle: string

    //
    announcementId: string,
    attachments: [],
    body: string,
    channel: string,
    createdByDisplayName: string,
    createdOn: {},
    id: string,
    siteId: string,
    siteTitle: string,
    title: string,
}