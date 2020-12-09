import { BaseResponse } from "./request";

export interface SiteAssignmentResponse extends BaseResponse {
    assignment_collection: Assignment[]
}

export interface ItemAssignmentResponse extends Assignment {
}

export interface MyAssignmentResponse extends SiteAssignmentResponse {
}


export interface Assignment {
    entityReference: string,
    entityURL: string,
    entityId: string,
    entityTitle: string

    //
    access: string,
    allPurposeItemText: string,
    allowResubmission: boolean,
    attachments: [],
    author: string,
    authorLastModified: string,
    closeTime: {},
    closeTimeString: string,
    content: any,
    context: string,
    creator: string,
    draft: boolean,
    dropDeadTime: {},
    dropDeadTimeString: string,
    dueTime: {},
    dueTimeString: string,
    gradeScale: string,
    gradeScaleMaxPoints: string,
    gradebookItemId: number,
    gradebookItemName: string,
    groups: {},
    id: string,
    instructions: string,
}