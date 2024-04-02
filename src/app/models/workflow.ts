export interface Workflow{
    id: number;
    groupId: number;
    reply: boolean;
    initialMessage?: string;
    followupMessage?: string;
    delay: number;
}