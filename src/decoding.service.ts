import {DecodeRequest} from './DTO/decodeRequest.dto';
import {Component} from '@nestjs/common';

@Component()
export class DecodingService {

    static decode(decodeRequest: DecodeRequest) {
        const decoder = require('./decoders/' + decodeRequest.decodeType);
        return new decoder[Object.keys(decoder)[0]]().decode(decodeRequest);
    }
}