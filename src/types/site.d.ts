import { BaseResponse } from "./request";

export interface SiteResponse extends BaseResponse {
    site_collection: Site[]
}

export interface Site {
    entityReference: string,
    entityURL: string,
    entityId: string,
    entityTitle: string

    //
    activeEdit: boolean,
    contactEmail: string,
    contactName: string,
    createdDate: {},
    createdTime: {},
    customPageOrdered: boolean,
    description: string,
    empty: boolean,
    htmlDescription: string,
    htmlShortDescription: string,
    iconUrl: string,
    iconUrlFull: string,
    id: string,
    infoUrl: string,
    infoUrlFull: string,
    joinable: boolean,
    joinerRole: string,
    lastModified: number,
    maintainRole: string,
    modifiedDate: {},
    modifiedTime: {},
    owner: string,
    props: {},
    providerGroupId: string,
    pubView: boolean,
    published: boolean,
    reference: string,
    shortDescription: string,
    siteGroups: [],
    siteGroupsList: [],
    siteOwner: {},
    sitePages: [],
    skin: string,
    softlyDeleted: boolean,
    softlyDeletedDate: {},
    title: string,
    type: string,
    userRoles: []
}