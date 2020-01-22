import {Container} from './container.dto';

export class DecodeRequest {

    constructor(payload: string, portNumber: number, timestamp: string, decodeType: string, mac: string) {
        this.payload = payload;
        this.portNumber = portNumber;
        this.timestamp = timestamp;
        this.decodeType = decodeType;
        this.mac = mac;
    }

    payload: string;
    portNumber: number;
    timestamp: string;
    decodeType: string;
    mac: string;
    containers: Container[];
}