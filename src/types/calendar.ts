import { BaseResponse } from "./request";

export interface SiteCalendarResponse extends BaseResponse {
    calendar_collection: Calendar[]
}

export interface MyCalendarResponse extends SiteCalendarResponse {
}

export interface EventCalendarRequest {
    siteId: string,
    eventId: string,
}

export interface EventCalendarResponse extends Calendar {
}


export interface Calendar {
    entityReference: string,
    entityURL: string,
    entityId: string,
    entityTitle: string

    assignmentId: string,
    creator: string,
    description: string,
    duration: number,
    eventIcon: string,
    eventId: string,
    firstTime: {},
    recurrenceRule: string,
    reference: string,
    siteId: string,
    siteName: string,
    title: string,
    type: string,
}