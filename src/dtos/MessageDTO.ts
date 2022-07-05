export interface MessageDTO{
    message ?: string;
    messageType ?: 'message' | 'error' | 'none';
    messageTimeStamp ?: number;
}