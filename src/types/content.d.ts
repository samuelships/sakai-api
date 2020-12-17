import { BaseResponse } from "./request";

export interface SiteContentResponse extends BaseResponse {
    content_collection: Content[]
}

export interface MyContentResponse extends SiteContentResponse {
}


export interface Content {
    entityReference: string,
    entityURL: string,
    entityId: string,
    entityTitle: string

    author: string,
    authorId: string,
    container: string,
    copyrightAlert: string,
    description: string,
    endDate: {},
    fromDate: {},
    modifiedDate: string,
    numChildren: number,
    quota: {},
    size: number,
    title: string,
    type: string,
    url: string,
    usage: string,
    webLinkUrl: {},
    hidden: boolean,
    visible: boolean,

}