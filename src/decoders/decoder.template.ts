import {IDecoder} from "../decoder.interface";
import {DecodeRequest} from "../DTO/decodeRequest.dto";
import {Container} from "../DTO/container.dto";

export class DecoderTemplate implements IDecoder {

    decode(decodeRequest: DecodeRequest): DecodeRequest {
        const containers: Container[] = [];
        const encoded = decodeRequest.payload; // encoded is the HEX payload received from the network.
        // Create a separate method to decode the payload as containers and add these to the containers field of decodeRequest.
        // Then return the decodeRequest object.
        return decodeRequest;
    }

}
