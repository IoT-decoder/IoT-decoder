import {Component} from '@nestjs/common';
import {Converter} from './converter';
import moment = require('moment-timezone');
import {Container} from '../DTO/container.dto';

@Component()
export class Util {

    static hexByteLength = 2;


    static typeBoolean:String = 'BOOLEAN';
    static typeInteger:String = 'INTEGER';
    static typeLong: String = 'LONG';
    static typeNumber:String = 'NUMBER';
    static typeString:String = 'STRING';



    static hexToSignedInt(hexString: string): number {
        const hexRegex = new RegExp('^[0-9a-fA-F]+$');
        const validHex = hexRegex.test(hexString);
        if (!validHex) {
            throw {
                name: 'InvalidHexString',
                message: 'The hex string is not valid',
            };
        }

        const unsignedIntValue = parseInt(hexString, 16);
        const binaryString = unsignedIntValue.toString(2);
        const paddedSignedBinary = Util.padStringWithLeadingZeros(binaryString, hexString.length * 4);

        if (paddedSignedBinary[0] === '0') {
            return unsignedIntValue;
        }
        return unsignedIntValue - 2 ** (paddedSignedBinary.length);
    }

    static littleToBigEndian(input: string): string {
        input = this.padHexStringWithLeadingZeros(input);
        const length = input.length;
        let output = '';
        for (let i = 0; i <= length; i += 2) {
            output += input.substr(-2);
            input = input.substr(0, input.length - 2);
        }
        return output;
    }

    static bigToLittleEndian(input: string): string {
        return this.littleToBigEndian(input);
    }

    static hexToInt(encoded: string, index: number, length: number): number {
        return parseInt(Util.littleToBigEndian(encoded.substr(index, length * Util.hexByteLength)), 16);
    }

    static hexToUnsignedInt(input: string): number {
        return parseInt(input, 16);
    }

    static hexToBin(hex: string): string {
        let bin = '';
        if (hex.length > 8) {
            for (let i = 0; i < hex.length; i = i + 8) {
                let tempbin = Converter.hex2bin(hex.substr(i, 8));
                while (tempbin.length % 8 !== 0) {
                    tempbin = '0' + tempbin;
                }
                bin += tempbin;
            }
        } else {
            let tempbin = Converter.hex2bin(hex);
            while (tempbin.length % 8 !== 0) {
                tempbin = '0' + tempbin;
            }
            bin += tempbin;
        }

        return bin;
    }

    static padBinStringWithLeadingZeros(bin: string): string {
        while (bin.length % 8 != 0) {
            bin = '0' + bin;
        }
        return bin;
    }

    static padHexStringWithLeadingZeros(hex: string): string {
        while (hex.length % 2 != 0) {
            hex = '0' + hex;
        }
        return hex;
    }

    static padStringWithLeadingZeros(num: string, size: number): string {
        if (num == null) {
            throw {
                name: 'InvalidArgument',
                message: 'Passed string cannot be null',
            };
        }
        if (size == null) {
            throw {
                name: 'InvalidArgument',
                message: 'Passed size cannot be null',
            };
        }
        if (size < 0) {
            throw {
                name: 'InvalidArgument',
                message: 'Passed size cannot be < 0',
            };
        }
        while (num.length < size) num = '0' + num;
        return num;
    }

    static customToString(value: any): string {
        if (typeof(value) === typeof(true)) {
            if (value === true) {
                return '1';
            }
            else if (value === false) {
                return '0';
            }
        }
        else if (undefined) {
            return '0';
        }
        else {
            return value.toString();
        }
    }

    static convertBinaryToFloat(bin: string): number {
        bin = this.padBinStringWithLeadingZeros(bin);
        const buffer = new ArrayBuffer(bin.length / 8);
        const view = new DataView(buffer);

        let byteIndex = 0;
        while (byteIndex * 8 < bin.length) {
            view.setUint8(byteIndex, parseInt(bin.substring(byteIndex * 8, byteIndex * 8 + 8), 2));
            byteIndex++;
        }

        return view.getFloat32(0, false);
    }

    static bin2Dec(s: string): number {
        return parseInt(s, 2);
    }

    static bin2DecTwosComplement(s: string): number {
        const first = s[0];
        const restDec = parseInt(s.substring(1), 2);
        if (first === '1') {
            return restDec - Math.pow(2, s.length - 1);
        }
        return restDec;
    }

    static precisionRound(number: number, precision: number): number {
        const factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }

    static toMyDateString(number: number): string {
        const utc = moment.tz(number, 'Etc/UTC');
        const brussel = utc.clone().tz('Europe/Brussels');
        return brussel.format('DD-MM-YYYYTHH:mm:ss');
    }

    // decodes an IEEE754 32 bit float
    static hexToSinglePrecisionFloat(hex: string): number {
        const buffer = new ArrayBuffer(4);
        const view = new DataView(buffer);

        view.setInt8(0, parseInt(hex.substring(0, 2), 16));
        view.setInt8(1, parseInt(hex.substring(2, 4), 16));
        view.setInt8(2, parseInt(hex.substring(4, 6), 16));
        view.setInt8(3, parseInt(hex.substring(6, 8), 16));

        return view.getFloat32(0, false);
    }

    static createRawContainer(payload: string): Container {
        return new Container('raw', true, '', payload, 'string');
    }


    static generateContainers(containerDefinition):String{
        var jsonContainers = "[";
        for (let key of Object.keys(containerDefinition)) {
          let container = containerDefinition[key];        
          let friendlyName = container['name'];
          let valueType = container['type'];      
          jsonContainers += 
          `{
            "friendlyname": "${friendlyName}",
            "container": "${friendlyName}",                   
            "valueType": "${valueType}",
            "chartDefinitionId": 54 
          },`;
        }
        //remove last ,
        jsonContainers = jsonContainers.substring(0, jsonContainers.length - 1);
        jsonContainers += "]";
      
        return jsonContainers;
      }

}
