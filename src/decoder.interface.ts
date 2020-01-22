import {DecodeRequest} from './DTO/decodeRequest.dto';

export interface IDecoder {
     decode(decodeRequest: DecodeRequest): DecodeRequest;
}