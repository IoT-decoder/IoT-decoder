import { IDecoder } from "../decoder.interface";
import { DecodeRequest } from "../DTO/decodeRequest.dto";
import { Container } from "../DTO/container.dto";
import { DecoderUtil } from '../helpers/decoderUtil';
import {Util} from '../helpers/util';


export class IMBUILDINGS_PEOPLECOUNTER_V1 implements IDecoder {


    containerDefinition = {
      payloadType : {
        name : 'payload type',
        type : Util.typeString   
      },
      typeVariant : {
        name : 'type variant',
        type : Util.typeString   
      },
      deviceId : {
        name : "device id",
        type : Util.typeString   
      },
      deviceStatus : {
        name : "device status",
        type : Util.typeLong   
      },
      batteryVoltage : {
        name : "battery voltage",
        type : Util.typeString   
      },

      counterA : {
        name : "Counter A",
        type : Util.typeLong   
      },

      counterB : {
        name : "Counter B",
        type : Util.typeLong   
      },

      sensorStatus : {
        name : "Sensor Status",
        type : Util.typeString   
      },

      totalCounterA : {
        name : "Total Counter A",
        type : Util.typeLong   
      },

      totalCounterB : {
        name : "Total Counter B",
        type : Util.typeLong   
      },

      payloadCounter : {
        name : "Payload Counter",
        type : Util.typeLong   
      }
  };



    decode(decodeRequest: DecodeRequest): DecodeRequest {
        const containers: Container[] = [];
        const encoded = decodeRequest.payload; // encoded is the HEX payload received from the network.
    
        decodeRequest.containers = containers;
        
        DecoderUtil.addContainer(containers, this.containerDefinition.payloadType.name, encoded.substr(0, 2), 'string', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.typeVariant.name, encoded.substr(2, 2), 'string', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.deviceId.name, encoded.substr(4, 16), 'string', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.deviceStatus.name, Util.hexToUnsignedInt(encoded.substr(20, 2)), 'real', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.batteryVoltage.name, Util.hexToUnsignedInt(encoded.substr(22, 4)) / 100, 'real', 'V', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.counterA.name, Util.hexToUnsignedInt(encoded.substr(26, 4)), 'real', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.counterB.name, Util.hexToUnsignedInt(encoded.substr(30, 4)), 'real', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.sensorStatus.name, encoded.substr(34, 2), 'string', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.totalCounterA.name, Util.hexToUnsignedInt(encoded.substr(36, 4)), 'real', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.totalCounterB.name, Util.hexToUnsignedInt(encoded.substr(40, 4)), 'real', '', true);
        DecoderUtil.addContainer(containers, this.containerDefinition.payloadCounter.name, Util.hexToUnsignedInt(encoded.substr(44, 2)), 'real', '', true);
    
      //  console.log("returning decodeRequest " + JSON.stringify(decodeRequest));

        return decodeRequest;
    }

   

}