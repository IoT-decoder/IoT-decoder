import {Body, Controller, Post} from '@nestjs/common';
import {DecodingService} from './decoding.service';
import {DecodeRequest} from "./DTO/decodeRequest.dto";


@Controller('')
export class DecodingController {

    @Post("/decoding")
    async decode(@Body() decodeRequest: DecodeRequest) {
        return DecodingService.decode(decodeRequest);
    }

}