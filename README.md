# Sensor payload decoding kit

## Concept

One part of validating a viable IoT concept is testing the sensors in the field and getting live data.
It's become quite easy to deploy / install sensors physically, but getting the sensor data in a human readable format is something enterily different.

To swiftly validate sensors from a functional perspective the sensor output needs to be human readable.  This MDK enables developers to quickly write decoding for new sensors.

Using the template (decoder.template.ts) and the conversion utility (util.ts) you can build a decoder to validate behaviour of the sensor using the testing suite.  There is an example available in EXAMPLE_PEOPLECOUNTER_V1.ts.  Thisdecoding kit documents the behaviour of the sensor and is also an important quality step when promoting your decoding template to production. 

**Once the decoding template has reached an acceptable level of detail / quality, it will be made available on MT.  This is done via a manual validation and deployment process as this deliverable needs to meet the quality assurance requirements (naming conventions, correctness of code, performance validation, ...).  We will adapt the decoding template if it's not meeting those requirements.**


## Adding a decoder


 

### Setup (one-time-only)
Install `node` and `npm` from [https://nodejs.org/en/download/](here).
This kit was created with npm 6.9.0 and node 11.13.0, but any LTS release should work.
Run `npm install` in the top level directory to pull in dependencies.
### Implement new decoding
1. Create a decoding file in `src/decoders` that implements IDecoder.
2. Create a test file with a couple of test cases in `spec/`.
3. Run `npm test` to verify all tests are green.

A sample is provided. 

As you can see from the sample decoding file, it is recommended / mandatory to first create the containerDefinition object.
This definition describes all the fields and datatypes needed for this sensor.

This definition will be used in:
1. the creation of containers
2. validation in the spec / tests
3. generation of datastructe needed for creation of container types in MT.


## Further info
The IDecoder interface takes a decodeRequest and returns the same object, with added containers.
The most useful parts of this object are these fields:
  - payload (hex encoded string)
  - port number (not useful in most cases)
  - timestamp
  - decode type (sensor type in MT)
  - mac (sensor's unique identifier, called 'deveui' in MT)

The process of decoding is basically turning a hex payload(string) into one or more containers and adding these to the decodeRequest object the method was given.
A container has the following structure(as defined in the Container class, container.dto.ts file):
  - containerName -> name of the container e.g. humidity
  - persist -> only containers where persist is set to true will be available later on (will be stored and available for streaming). Typically it's a good idea to decode all the fields of the sensor. However not all of them might be relevant. Too many containers could cause cluttering.
  - postfix -> mostly used for unit of measurement e.g. if the container name is 'temperature', the postfix can be '℃', 'K' for kelvin etc
  - value -> the value as a string from the parsed hex string.
  - value type -> boolean, integer, long, string
  


